import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodeProperties, INodePropertyOptions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { applicationResources } from './applicationResources';
import { helpCenterProperties, helpCenterResources } from './helpCenter';
import { platformResources } from './platformResources';

type Api = 'application' | 'platform';

const scope = (api: Api, properties: INodeProperties[]): INodeProperties[] =>
	properties.map((property) => ({
		...property,
		displayOptions: { ...property.displayOptions, show: { authentication: [api], ...property.displayOptions?.show } },
	}));

const byName = (a: INodePropertyOptions, b: INodePropertyOptions) => a.name.localeCompare(b.name);

const [applicationSelector, ...applicationOperations] = applicationResources;

const application = scope('application', [
	{
		...applicationSelector,
		options: [...(applicationSelector.options as INodePropertyOptions[]), ...helpCenterResources].sort(byName),
	},
	...applicationOperations,
	...helpCenterProperties,
]);

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
		credentials: [
			{ name: 'chatwootApi', required: true, displayOptions: { show: { authentication: ['application'] } } },
			{ name: 'chatwootPlatformApi', required: true, displayOptions: { show: { authentication: ['platform'] } } },
		],
		requestDefaults: {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			baseURL: '={{$credentials.url}}',
		},
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Application API (Admin / Agent Token)', value: 'application' },
					{ name: 'Platform API (Super Admin Token)', value: 'platform' },
				],
				default: 'application',
			},
			...application,
			...scope('platform', platformResources),
		],
	};
}
