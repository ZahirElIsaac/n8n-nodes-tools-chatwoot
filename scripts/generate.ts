import { readFileSync, writeFileSync } from 'node:fs';
import type { INodeProperties } from 'n8n-workflow';
import { N8NPropertiesBuilder } from '@devlikeapro/n8n-openapi-node';
import { markAdminOperations } from './admin.ts';
import { overrides } from './overrides.ts';

const spec = JSON.parse(readFileSync('openapi.json', 'utf8'));

const targets: Array<[string, (path: string) => boolean]> = [
	['nodes/Chatwoot/resources.ts', (p) => p.startsWith('/api/') && !p.includes('/portals')],
	['nodes/ChatwootPlatform/resources.ts', (p) => p.startsWith('/platform/')],
];

const TYPES: Record<string, string> = { number: 'number', boolean: 'boolean' };
const OMIT_EMPTY = "={{ $value === '' ? undefined : $value }}";

const sendType = (property: INodeProperties) => property.routing?.send?.type;
const groupKey = (property: INodeProperties) => JSON.stringify(property.displayOptions?.show);

const normalize = (properties: INodeProperties[]) => {
	const cleaned = properties.map((property) => ({
		...property,
		type: property.type ?? TYPES[typeof property.default] ?? 'string',
		default: property.default ?? '',
		...(Array.isArray(property.options) && {
			options: property.options.filter((option) => (option as { value: unknown }).value !== null),
		}),
	})) as INodeProperties[];

	const isOptional = (property: INodeProperties) => !property.required && property.name !== 'resource' && property.name !== 'operation';
	const isOptionalBody = (property: INodeProperties) => isOptional(property) && sendType(property) === 'body';
	const isOptionalQuery = (property: INodeProperties) => isOptional(property) && sendType(property) === 'query';

	const extras = new Map<string, INodeProperties[]>();
	for (const property of cleaned.filter(isOptionalBody)) {
		const { displayOptions, ...field } = property;
		extras.set(groupKey(property), [...(extras.get(groupKey(property)) ?? []), field as INodeProperties]);
	}

	const lastOfGroup = new Map<string, INodeProperties>();
	for (const property of cleaned.filter((p) => !isOptionalBody(p))) lastOfGroup.set(groupKey(property), property);

	return cleaned.flatMap((property): INodeProperties[] => {
		if (isOptionalBody(property)) return [];
		const out: INodeProperties = isOptionalQuery(property) && property.type === 'string'
			? { ...property, default: '', routing: { send: { ...property.routing!.send!, value: OMIT_EMPTY } } }
			: property;
		const fields = extras.get(groupKey(property));
		if (lastOfGroup.get(groupKey(property)) !== property || !fields) return [out];
		return [
			out,
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: property.displayOptions,
				options: fields.sort((x, y) => x.displayName.localeCompare(y.displayName)),
			} as INodeProperties,
		];
	});
};

for (const [output, keep] of targets) {
	const paths = Object.fromEntries(Object.entries(spec.paths).filter(([p]) => keep(p)));
	const used = new Set(
		Object.values(paths).flatMap((operations) =>
			Object.values(operations as Record<string, { tags?: string[] }>).flatMap((operation) => operation.tags ?? []),
		),
	);
	const tags = spec.tags.filter((tag: { name: string }) => used.has(tag.name));
	const properties = markAdminOperations(normalize(new N8NPropertiesBuilder({ ...spec, paths, tags }).build(overrides)));
	writeFileSync(
		output,
		`import type { INodeProperties } from 'n8n-workflow';\n\nexport const resources: INodeProperties[] = ${JSON.stringify(properties, null, '\t')};\n`,
	);
}
