import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class ChatwootPlatformApi implements ICredentialType {
	name = 'chatwootPlatformApi';
	displayName = 'Chatwoot Platform API';
	documentationUrl = 'https://developers.chatwoot.com/api-reference/introduction';
	properties: INodeProperties[] = [
		{
			displayName: 'Chatwoot URL',
			name: 'url',
			type: 'string',
			placeholder: 'https://chatwoot.example.com',
			default: '',
			required: true,
		},
		{
			displayName: 'Platform App Token',
			name: 'platformToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Super Admin → Platform Apps',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: { headers: { api_access_token: '={{$credentials.platformToken}}' } },
	};
	test: ICredentialTestRequest = {
		request: { baseURL: '={{$credentials.url}}', url: '/platform/api/v1/agent_bots' },
	};
}
