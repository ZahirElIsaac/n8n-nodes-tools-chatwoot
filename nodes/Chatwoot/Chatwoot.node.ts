import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodeProperties, INodePropertyOptions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { applicationResources } from './applicationResources';
import { type Api, DOMAINS } from './domains';
import { helpCenterProperties, helpCenterResources } from './helpCenter';
import { paginateByPage } from './pagination';
import { platformResources } from './platformResources';

const withPagination = (properties: INodeProperties[]): INodeProperties[] => {
	const paged = new Set(
		properties
			.filter((property) => property.name === 'returnAll')
			.flatMap(({ displayOptions }) =>
				(displayOptions?.show?.operation ?? []).map((operation) => `${displayOptions?.show?.resource?.[0]}|${operation}`),
			),
	);
	return properties.map((property) => {
		if (property.name !== 'operation' || property.type !== 'options') return property;
		const resource = property.displayOptions?.show?.resource?.[0];
		return {
			...property,
			options: (property.options as INodePropertyOptions[]).map((option) =>
				paged.has(`${resource}|${option.value}`)
					? { ...option, routing: { ...option.routing, operations: { pagination: paginateByPage } } }
					: option,
			),
		};
	});
};

const byName = (a: INodePropertyOptions, b: INodePropertyOptions) => a.name.localeCompare(b.name);

const scope = (api: Api, properties: INodeProperties[]): INodeProperties[] =>
	properties.map((property) => ({
		...property,
		displayOptions: { ...property.displayOptions, show: { api: [api], ...property.displayOptions?.show } },
	}));

const selectors = (api: Api, entities: INodePropertyOptions[]): INodeProperties[] => {
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

const [applicationSelector, ...applicationOperations] = applicationResources;
const [platformSelector, ...platformOperations] = platformResources;

const application: INodeProperties[] = [
	...selectors('application', [...(applicationSelector.options as INodePropertyOptions[]), ...helpCenterResources]),
	...scope('application', withPagination([...applicationOperations, ...helpCenterProperties])),
];
const platform: INodeProperties[] = [
	...selectors('platform', platformSelector.options as INodePropertyOptions[]),
	...scope('platform', platformOperations),
];

export class Chatwoot implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Chatwoot',
		name: 'chatwoot',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Chatwoot API',
		defaults: { name: 'Chatwoot' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [{ name: 'chatwootToolsApi', required: true }],
		requestDefaults: {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			baseURL: '={{$credentials.url}}',
		},
		properties: [
			{
				displayName: 'API',
				name: 'api',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Application (Admin / Agent Token)', value: 'application' },
					{ name: 'Platform (Super Admin Token)', value: 'platform' },
				],
				default: 'application',
			},
			...application,
			...platform,
		],
	};
}
