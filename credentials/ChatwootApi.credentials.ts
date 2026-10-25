import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class ChatwootApi implements ICredentialType {
	name = 'chatwootApi';
	displayName = 'Chatwoot API';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://app.chatwoot.com',
		},
		{ displayName: 'Account ID', name: 'accountId', type: 'string', default: '' },
		{
			displayName: 'API Access Token',
			name: 'apiAccessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: { headers: { api_access_token: '={{$credentials.apiAccessToken}}' } },
	};
}
