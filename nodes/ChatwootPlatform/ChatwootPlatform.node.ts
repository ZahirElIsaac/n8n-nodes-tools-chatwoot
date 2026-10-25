import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { resources } from './resources';

export class ChatwootPlatform implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Chatwoot Platform',
		name: 'chatwootPlatform',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Chatwoot Platform API (Super Admin, self-hosted)',
		defaults: { name: 'Chatwoot Platform' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [{ name: 'chatwootPlatformApi', required: true }],
		requestDefaults: {
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			baseURL: '={{$credentials.url}}',
		},
		properties: resources,
	};
}
