import type { INodeProperties } from 'n8n-workflow';

export const conversationAssignments: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Conversation Assignments"
				]
			}
		},
		"options": [
			{
				"name": "Assign A Conversation",
				"value": "Assign A Conversation",
				"action": "Assign Conversation",
				"description": "Assign a conversation to an agent or a team",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/conversations/{{ encodeURIComponent($parameter[\"conversation_id\"]) }}/assignments"
					}
				}
			}
		],
		"default": "Assign A Conversation"
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the account",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversation Assignments"
				],
				"operation": [
					"Assign A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Conversation Id",
		"name": "conversation_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the conversation",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversation Assignments"
				],
				"operation": [
					"Assign A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Additional Fields",
		"name": "additionalFields",
		"type": "collection",
		"placeholder": "Add Field",
		"default": {},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversation Assignments"
				],
				"operation": [
					"Assign A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Assignee Id",
				"name": "assignee_id",
				"type": "number",
				"default": 0,
				"description": "Id of the assignee user",
				"routing": {
					"send": {
						"type": "body",
						"property": "assignee_id"
					}
				}
			},
			{
				"displayName": "Team Id",
				"name": "team_id",
				"type": "number",
				"default": 0,
				"description": "Id of the team. If the assignee_id is present, this param would be ignored",
				"routing": {
					"send": {
						"type": "body",
						"property": "team_id"
					}
				}
			}
		]
	}
];
