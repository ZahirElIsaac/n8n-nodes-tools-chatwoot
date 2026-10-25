import type { INodeProperties } from 'n8n-workflow';

export const accountAgentBots: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				]
			}
		},
		"options": [
			{
				"name": "List All Account Agent Bots",
				"value": "List All Account Agent Bots",
				"action": "List all AgentBots",
				"description": "List all agent bots available for the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agent_bots"
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
				"name": "Create An Account Agent Bot",
				"value": "Create An Account Agent Bot",
				"action": "Create an Agent Bot (Admin)",
				"description": "Requires an administrator token. Create an agent bot in the account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agent_bots"
					}
				}
			},
			{
				"name": "Get Details Of A Single Account Agent Bot",
				"value": "Get Details Of A Single Account Agent Bot",
				"action": "Get an agent bot details",
				"description": "Get the details of an agent bot in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agent_bots/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Update An Account Agent Bot",
				"value": "Update An Account Agent Bot",
				"action": "Update an agent bot (Admin)",
				"description": "Requires an administrator token. Update an agent bot's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agent_bots/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Delete An Account Agent Bot",
				"value": "Delete An Account Agent Bot",
				"action": "Delete an AgentBot (Admin)",
				"description": "Requires an administrator token. Delete an AgentBot from the account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agent_bots/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			}
		],
		"default": "List All Account Agent Bots"
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
					"Account Agent Bots"
				],
				"operation": [
					"List All Account Agent Bots",
					"Create An Account Agent Bot",
					"Get Details Of A Single Account Agent Bot",
					"Update An Account Agent Bot",
					"Delete An Account Agent Bot"
				]
			}
		}
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
					"Account Agent Bots"
				],
				"operation": [
					"Get Details Of A Single Account Agent Bot",
					"Update An Account Agent Bot",
					"Delete An Account Agent Bot"
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
					"Account Agent Bots"
				],
				"operation": [
					"List All Account Agent Bots"
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
					"Account Agent Bots"
				],
				"operation": [
					"List All Account Agent Bots"
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
					"Account Agent Bots"
				],
				"operation": [
					"Create An Account Agent Bot"
				]
			}
		},
		"options": [
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
				"displayName": "Bot Config",
				"name": "bot_config",
				"type": "json",
				"default": "{}",
				"description": "The configuration for the bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_config",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Bot Type",
				"name": "bot_type",
				"type": "number",
				"default": 0,
				"description": "The type of the bot (0 for webhook)",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_type"
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
					"Account Agent Bots"
				],
				"operation": [
					"Update An Account Agent Bot"
				]
			}
		},
		"options": [
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
				"displayName": "Bot Config",
				"name": "bot_config",
				"type": "json",
				"default": "{}",
				"description": "The configuration for the bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_config",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Bot Type",
				"name": "bot_type",
				"type": "number",
				"default": 0,
				"description": "The type of the bot (0 for webhook)",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_type"
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
