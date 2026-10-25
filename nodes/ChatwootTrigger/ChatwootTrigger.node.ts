import { NodeConnectionTypes } from 'n8n-workflow';
import type {
	IDataObject,
	IHookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';

const EVENTS = [
	'contact_created',
	'contact_updated',
	'conversation_created',
	'conversation_status_changed',
	'conversation_typing_off',
	'conversation_typing_on',
	'conversation_updated',
	'message_created',
	'message_updated',
	'webwidget_triggered',
];

async function webhooksRequest(
	context: IHookFunctions,
	method: 'GET' | 'POST' | 'DELETE',
	path = '',
	body?: IDataObject,
) {
	const { url } = await context.getCredentials('chatwootToolsApi');
	const accountId = context.getNodeParameter('accountId') as number;
	return (await context.helpers.httpRequestWithAuthentication.call(context, 'chatwootToolsApi', {
		method,
		url: `${String(url).replace(/\/+$/, '')}/api/v1/accounts/${accountId}/webhooks${path}`,
		body,
		json: true,
	})) as IDataObject | IDataObject[];
}

export class ChatwootTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Chatwoot Trigger',
		name: 'chatwootTrigger',
		icon: { light: 'file:chatwoot.svg', dark: 'file:chatwoot.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["events"].join(", ")}}',
		description: 'Starts the workflow when Chatwoot events occur (requires an administrator token)',
		defaults: { name: 'Chatwoot Trigger' },
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'chatwootToolsApi', required: true }],
		webhooks: [{ name: 'default', httpMethod: 'POST', responseMode: 'onReceived', path: 'webhook' }],
		properties: [
			{ displayName: 'Account ID', name: 'accountId', type: 'number', default: 0, required: true },
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				options: EVENTS.map((value) => ({ name: value, value })),
				default: ['message_created'],
				required: true,
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const url = this.getNodeWebhookUrl('default');
				const hooks = (await webhooksRequest(this, 'GET')) as IDataObject[];
				const hook = hooks.find((item) => item.url === url);
				if (hook) this.getWorkflowStaticData('node').webhookId = hook.id;
				return Boolean(hook);
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const hook = (await webhooksRequest(this, 'POST', '', {
					url: this.getNodeWebhookUrl('default'),
					subscriptions: this.getNodeParameter('events') as string[],
				})) as IDataObject;
				this.getWorkflowStaticData('node').webhookId = hook.id;
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const data = this.getWorkflowStaticData('node');
				if (data.webhookId) await webhooksRequest(this, 'DELETE', `/${data.webhookId}`);
				delete data.webhookId;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		return { workflowData: [this.helpers.returnJsonArray(this.getBodyData())] };
	}
}
