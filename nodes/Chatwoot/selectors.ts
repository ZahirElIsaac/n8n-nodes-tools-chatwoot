import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { type Api, DOMAINS } from './domains';

const byName = (a: INodePropertyOptions, b: INodePropertyOptions) => a.name.localeCompare(b.name);

export const scope = (api: Api, properties: INodeProperties[]): INodeProperties[] =>
	properties.map((property) => ({
		...property,
		displayOptions: { ...property.displayOptions, show: { api: [api], ...property.displayOptions?.show } },
	}));

export const selectors = (api: Api, entities: INodePropertyOptions[]): INodeProperties[] => {
	const groups = Object.entries(DOMAINS[api]);
	const mapped = new Set(groups.flatMap(([, values]) => values));
	const unmapped = entities.filter((entity) => !mapped.has(String(entity.value))).map((entity) => String(entity.value));
	const domains: Array<[string, string[]]> = [...groups, ...(unmapped.length ? [['Other', unmapped] as [string, string[]]] : [])];

	return [
		{
			displayName: 'Resource',
			name: 'domain',
			type: 'options',
			noDataExpression: true,
			options: domains.map(([name]) => ({ name, value: name })).sort(byName),
			default: domains[0][0],
			displayOptions: { show: { api: [api] } },
		},
		...domains.map(
			([domain, values]): INodeProperties => ({
				displayName: 'Entity',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: entities.filter((entity) => values.includes(String(entity.value))).sort(byName),
				default: values.find((value) => entities.some((entity) => entity.value === value)) ?? values[0],
				displayOptions: { show: { api: [api], domain: [domain] } },
			}),
		),
	];
};
