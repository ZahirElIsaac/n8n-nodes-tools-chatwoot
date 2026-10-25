import type { INodeProperties } from 'n8n-workflow';

export const agentBots: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				]
			}
		},
		"options": [
			{
				"name": "List All Agent Bots",
				"value": "List All Agent Bots",
				"action": "List all AgentBots",
				"description": "List all agent bots available",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/platform/api/v1/agent_bots"
					},
					"output": {
						"postReceive": [
							{
								"type": "limit",
								"properties": {
									"maxResults": "={{ $parameter[\"returnAll\"] ? 100000 : $parameter[\"limit\"] }}"
								}
							}
						]
					}
				}
			},
			{
				"name": "Create An Agent Bot",
				"value": "Create An Agent Bot",
				"action": "Create an Agent Bot",
				"description": "Create an agent bot",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/platform/api/v1/agent_bots"
					}
				}
			},
			{
				"name": "Get Details Of A Single Agent Bot",
				"value": "Get Details Of A Single Agent Bot",
				"action": "Get an agent bot details",
				"description": "Get the details of an agent bot",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/platform/api/v1/agent_bots/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Update An Agent Bot",
				"value": "Update An Agent Bot",
				"action": "Update an agent bot",
				"description": "Update an agent bot's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/platform/api/v1/agent_bots/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Delete An Agent Bot",
				"value": "Delete An Agent Bot",
				"action": "Delete an AgentBot",
				"description": "Delete an AgentBot",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/platform/api/v1/agent_bots/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			}
		],
		"default": "List All Agent Bots"
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the agentbot to be updated",
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"Get Details Of A Single Agent Bot",
					"Update An Agent Bot",
					"Delete An Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": true,
		"description": "Whether to return all results or only up to a given limit",
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"List All Agent Bots"
				]
			}
		}
	},
	{
		"displayName": "Limit",
		"name": "limit",
		"type": "number",
		"default": 50,
		"typeOptions": {
			"minValue": 1
		},
		"description": "Max number of results to return",
		"displayOptions": {
			"show": {
				"returnAll": [
					false
				],
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"List All Agent Bots"
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
					"Agent Bots"
				],
				"operation": [
					"Create An Agent Bot"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Id",
				"name": "account_id",
				"type": "number",
				"default": 0,
				"description": "The account ID to associate the agent bot with",
				"routing": {
					"send": {
						"type": "body",
						"property": "account_id"
					}
				}
			},
			{
				"displayName": "Avatar",
				"name": "avatar",
				"type": "string",
				"default": "",
				"description": "Send the form data with the avatar image binary or use the avatar_url",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar"
					}
				}
			},
			{
				"displayName": "Avatar Url",
				"name": "avatar_url",
				"type": "string",
				"default": "",
				"description": "The url to a jpeg, png file for the agent bot avatar",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar_url"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description of the agent bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the agent bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Outgoing Url",
				"name": "outgoing_url",
				"type": "string",
				"default": "",
				"description": "The webhook URL for the bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "outgoing_url"
					}
				}
			}
		]
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
					"Agent Bots"
				],
				"operation": [
					"Update An Agent Bot"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Id",
				"name": "account_id",
				"type": "number",
				"default": 0,
				"description": "The account ID to associate the agent bot with",
				"routing": {
					"send": {
						"type": "body",
						"property": "account_id"
					}
				}
			},
			{
				"displayName": "Avatar",
				"name": "avatar",
				"type": "string",
				"default": "",
				"description": "Send the form data with the avatar image binary or use the avatar_url",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar"
					}
				}
			},
			{
				"displayName": "Avatar Url",
				"name": "avatar_url",
				"type": "string",
				"default": "",
				"description": "The url to a jpeg, png file for the agent bot avatar",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar_url"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description of the agent bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the agent bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Outgoing Url",
				"name": "outgoing_url",
				"type": "string",
				"default": "",
				"description": "The webhook URL for the bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "outgoing_url"
					}
				}
			}
		]
	}
];
