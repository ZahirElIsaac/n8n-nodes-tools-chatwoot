import type { INodeProperties } from 'n8n-workflow';
import { accountUsers } from './account-users';
import { accounts } from './accounts';
import { agentBots } from './agent-bots';
import { users } from './users';

const resourceSelector: INodeProperties = {
	"displayName": "Resource",
	"name": "resource",
	"type": "options",
	"noDataExpression": true,
	"options": [
		{
			"name": "Account Users",
			"value": "Account Users",
			"description": "Account user management APIs"
		},
		{
			"name": "Accounts",
			"value": "Accounts",
			"description": "Account management APIs"
		},
		{
			"name": "Agent Bots",
			"value": "Agent Bots",
			"description": "Bot integrations"
		},
		{
			"name": "Users",
			"value": "Users",
			"description": "User management APIs"
		}
	],
	"default": "Account Users"
};

export const platformResources: INodeProperties[] = [
	resourceSelector,
	...accountUsers,
	...accounts,
	...agentBots,
	...users,
];
