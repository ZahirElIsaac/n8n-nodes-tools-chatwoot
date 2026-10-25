import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { markAdminOperations } from './admin.ts';

type Json = Record<string, any>;
type Send = 'body' | 'query';

const spec: Json = JSON.parse(readFileSync('openapi.json', 'utf8'));

const TARGETS: Array<[string, string, (path: string) => boolean]> = [
	['nodes/Chatwoot/applicationResources.ts', 'applicationResources', (path) => path.startsWith('/api/') && !path.includes('/portals')],
	['nodes/Chatwoot/platformResources.ts', 'platformResources', (path) => path.startsWith('/platform/')],
];
const METHODS = ['get', 'post', 'put', 'patch', 'delete'];
const PARSE_JSON = '={{ typeof $value === \'string\' ? JSON.parse($value) : $value }}';
const SPLIT_LIST = "={{ $value === '' ? undefined : $value.split(',').map((item) => item.trim()) }}";

const startCase = (text: string) =>
	text
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.replace(/[^a-zA-Z0-9]+/g, ' ')
		.trim()
		.replace(/(^|\s)([a-z])/g, (_, space: string, letter: string) => space + letter.toUpperCase());

const resolve = (node: Json): Json => {
	if (!node || typeof node !== 'object') return node;
	if (node.$ref) return resolve(node.$ref.slice(2).split('/').reduce((current: Json, key: string) => current[key], spec));
	if (!node.allOf) return node;
	const { allOf, ...rest } = node;
	const merged = allOf.map(resolve).reduce(
		(a: Json, b: Json) => ({
			...a,
			...b,
			properties: { ...a.properties, ...b.properties },
			required: [...(a.required ?? []), ...(b.required ?? [])],
		}),
		{},
	);
	return { ...merged, ...rest };
};

const typeOf = (schema: Json) => ([] as string[]).concat(schema.type ?? []).find((type) => type !== 'null');

interface Field {
	property: INodeProperties;
	rank: number;
}

const buildField = (name: string, schemaNode: Json, required: boolean, send?: Send, path = name): Field => {
	const schema = resolve(schemaNode);
	const type = typeOf(schema);
	const values: unknown[] = (schema.enum ?? []).filter((value: unknown) => value !== null);
	const property: Json = {
		displayName: startCase(name),
		name,
		type: 'string',
		default: '',
		...(required && { required: true }),
		...(schema.description && { description: schema.description }),
	};
	const route = (value?: string) => ({ routing: { send: { type: send, property: path, ...(value && { value }) } } });

	if (values.length) {
		property.type = 'options';
		property.options = values.map((value) => ({ name: String(value), value }));
		property.default = schema.default ?? values[0];
		Object.assign(property, send && route());
	} else if (type === 'integer' || type === 'number') {
		property.type = 'number';
		property.default = typeof schema.default === 'number' ? schema.default : 0;
		Object.assign(property, send && route());
	} else if (type === 'boolean') {
		property.type = 'boolean';
		property.default = typeof schema.default === 'boolean' ? schema.default : false;
		Object.assign(property, send && route());
	} else if (type === 'array' && send === 'query') {
		Object.assign(property, route(SPLIT_LIST));
	} else if (type === 'array' || type === 'object') {
		property.type = 'json';
		property.default = type === 'array' ? '[]' : '{}';
		Object.assign(property, send && route(PARSE_JSON));
	} else {
		Object.assign(property, send && route());
	}
	return { property: property as INodeProperties, rank: 1 };
};

const bodyFields = (operation: Json) => {
	const schema = resolve(operation.requestBody?.content?.['application/json']?.schema ?? {});
	const entries = Object.entries<Json>(schema.properties ?? {});
	const wrapper = entries.length === 1 && resolve(entries[0][1]).properties ? entries[0][0] : undefined;
	const container = wrapper ? resolve(entries[0][1]) : schema;
	return Object.entries<Json>(container.properties ?? {}).map(([name, child]) =>
		buildField(name, child, (container.required ?? []).includes(name), 'body', wrapper ? `${wrapper}.${name}` : name),
	);
};

const operationFields = (pathItem: Json, operation: Json) => {
	const byName = new Map<string, Field>();
	for (const raw of [...(pathItem.parameters ?? []), ...(operation.parameters ?? [])]) {
		const parameter = resolve(raw);
		if (parameter.in === 'path') {
			const field = buildField(parameter.name, { ...parameter.schema, description: parameter.description }, true);
			byName.set(parameter.name, { ...field, rank: 0 });
		} else if (parameter.in === 'query') {
			byName.set(
				parameter.name,
				buildField(parameter.name, { ...parameter.schema, description: parameter.description }, Boolean(parameter.required), 'query'),
			);
		}
	}
	const body = bodyFields(operation).filter((field) => !byName.has(field.property.name));
	const all = [...byName.values(), ...body];
	return {
		required: all.filter((field) => field.property.required || field.rank === 0),
		optional: all.filter((field) => !field.property.required && field.rank !== 0).map((field) => field.property),
	};
};

const requestKey = (method: string, url: string) => `${method.toUpperCase()} ${url}`;

const build = (keep: (path: string) => boolean) => {
	const resources = new Map<string, { options: INodePropertyOptions[]; fields: Map<string, { field: Field; operations: string[] }>; collections: INodeProperties[] }>();

	for (const [path, pathItem] of Object.entries<Json>(spec.paths).filter(([path]) => keep(path))) {
		for (const method of METHODS.filter((method) => pathItem[method] && !pathItem[method].deprecated)) {
			const operation = pathItem[method];
			const tag: string = operation.tags[0];
			const resource = resources.get(tag) ?? { options: [], fields: new Map(), collections: [] };
			resources.set(tag, resource);

			const value = startCase(operation.operationId);
			const url = `=${path.replace(/\{(\w+)\}/g, '{{$parameter["$1"]}}')}`;
			resource.options.push({
				name: value,
				value,
				action: operation.summary ?? value,
				description: operation.description ?? operation.summary ?? '',
				routing: { request: { method: method.toUpperCase() as 'GET', url } },
			});

			const { required, optional } = operationFields(pathItem, operation);
			for (const field of required) {
				const key = JSON.stringify(field.property);
				const entry = resource.fields.get(key) ?? { field, operations: [] };
				entry.operations.push(value);
				resource.fields.set(key, entry);
			}

			if (optional.length) {
				resource.collections.push({
					displayName: method === 'get' ? 'Filters' : 'Additional Fields',
					name: 'additionalFields',
					type: 'collection',
					placeholder: 'Add Field',
					default: {},
					displayOptions: { show: { resource: [startCase(tag)], operation: [value] } },
					options: optional.sort((a, b) => a.displayName.localeCompare(b.displayName)) as never,
				});
			}
		}
	}

	const used = [...resources.keys()].sort((a, b) => startCase(a).localeCompare(startCase(b)));
	const properties: INodeProperties[] = [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: used.map((tag) => ({
				name: startCase(tag),
				value: startCase(tag),
				description: spec.tags.find((item: Json) => item.name === tag)?.description ?? '',
			})),
			default: startCase(used[0]),
		},
	];
	for (const tag of used) {
		const resource = resources.get(tag)!;
		const show = (operations?: string[]) => ({ show: { resource: [startCase(tag)], ...(operations && { operation: operations }) } });
		properties.push({
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: show(),
			options: resource.options,
			default: String(resource.options[0].value),
		});
		const grouped = [...resource.fields.values()].sort((a, b) => a.field.rank - b.field.rank);
		for (const { field, operations } of grouped) {
			properties.push({ ...field.property, displayOptions: show(operations) });
		}
		properties.push(...resource.collections);
	}
	return markAdminOperations(properties);
};

const requests = (source: string) =>
	new Set([...source.matchAll(/"method": "(\w+)",\s*"url": "((?:[^"\\]|\\.)*)"/g)].map((match) => requestKey(match[1], match[2])));

for (const [output, exportName, keep] of TARGETS) {
	const before = existsSync(output) ? requests(readFileSync(output, 'utf8')) : new Set<string>();
	const source = `import type { INodeProperties } from 'n8n-workflow';\n\nexport const ${exportName}: INodeProperties[] = ${JSON.stringify(build(keep), null, '\t')};\n`;
	writeFileSync(output, source);
	const after = requests(source);
	const added = [...after].filter((request) => !before.has(request));
	const removed = [...before].filter((request) => !after.has(request));
	console.log(`${output}: ${after.size} operations, +${added.length} -${removed.length}`);
	if (before.size) for (const request of added) console.log(`  + ${request}`);
	for (const request of removed) console.log(`  - ${request}`);
}
