import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodePropertyOptions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { helpCenterProperties, helpCenterResources } from './helpCenter';
import { resources } from './resources';

const [resourceSelector, ...operations] = resources;
const sortedByName = (options: INodePropertyOptions[]) => [...options].sort((a, b) => a.name.localeCompare(b.name));

export class Chatwoot implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Chatwoot',
		name: 'chatwoot',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Chatwoot Application API',
		defaults: { name: 'Chatwoot' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [{ name: 'chatwootApi', required: true }],
		requestDefaults: {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			baseURL: '={{$credentials.url}}',
		},
		properties: [
			{
				...resourceSelector,
				options: sortedByName([...(resourceSelector.options as INodePropertyOptions[]), ...helpCenterResources]),
			},
			...operations,
			...helpCenterProperties,
		],
	};
}
