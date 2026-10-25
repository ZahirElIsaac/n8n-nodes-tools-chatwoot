import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

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
			displayName: 'Token Type',
			name: 'tokenType',
			type: 'options',
			options: [
				{
					name: 'User (Admin / Agent)',
					value: 'user',
					description: 'Profile → Access Token. For the Application API',
				},
				{
					name: 'Platform App (Super Admin)',
					value: 'platform',
					description: 'Super Admin → Platform Apps. For the Platform API',
				},
			],
			default: 'user',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: { headers: { api_access_token: '={{$credentials.accessToken}}' } },
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.url}}',
			url: '={{$credentials.tokenType === "platform" ? "/platform/api/v1/agent_bots" : "/api/v1/profile"}}',
		},
	};
}
