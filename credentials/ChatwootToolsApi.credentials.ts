import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class ChatwootToolsApi implements ICredentialType {
	name = 'chatwootToolsApi';
	displayName = 'Chatwoot Tools API';
	documentationUrl = 'https://developers.chatwoot.com/api-reference/introduction';
	properties: INodeProperties[] = [
		{
			displayName: 'Chatwoot URL',
			name: 'url',
			type: 'string',
			placeholder: 'https://app.chatwoot.com',
			default: '',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description:
				'Application API: user token (Profile → Access Token, admin or agent). Platform API: Platform App token (Super Admin → Platform Apps). Create one credential per token.',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: { headers: { api_access_token: '={{$credentials.accessToken}}' } },
	};
}
