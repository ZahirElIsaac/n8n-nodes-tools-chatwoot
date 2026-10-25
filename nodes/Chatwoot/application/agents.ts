import type { INodeProperties } from 'n8n-workflow';

export const agents: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Agents"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Agents",
				"value": "Get Account Agents",
				"action": "List Agents in Account",
				"description": "Get Details of Agents in an Account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agents"
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
				"name": "Add New Agent To Account",
				"value": "Add New Agent To Account",
				"action": "Add a New Agent (Admin)",
				"description": "Requires an administrator token. Add a new Agent to Account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agents"
					}
				}
			},
			{
				"name": "Update Agent In Account",
				"value": "Update Agent In Account",
				"action": "Update Agent in Account (Admin)",
				"description": "Requires an administrator token. Update an Agent in Account",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agents/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Delete Agent From Account",
				"value": "Delete Agent From Account",
				"action": "Remove an Agent from Account (Admin)",
				"description": "Requires an administrator token. Remove an Agent from Account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/agents/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			}
		],
		"default": "Get Account Agents"
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
					"Agents"
				],
				"operation": [
					"Get Account Agents",
					"Add New Agent To Account",
					"Update Agent In Account",
					"Delete Agent From Account"
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
		"description": "The ID of the agent to be updated.",
		"displayOptions": {
			"show": {
				"resource": [
					"Agents"
				],
				"operation": [
					"Update Agent In Account"
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
		"description": "The ID of the agent to be deleted.",
		"displayOptions": {
			"show": {
				"resource": [
					"Agents"
				],
				"operation": [
					"Delete Agent From Account"
				]
			}
		}
	},
	{
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "",
		"required": true,
		"description": "Full Name of the agent",
		"routing": {
			"send": {
				"type": "body",
				"property": "name"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Agents"
				],
				"operation": [
					"Add New Agent To Account"
				]
			}
		}
	},
	{
		"displayName": "Email",
		"name": "email",
		"type": "string",
		"default": "",
		"required": true,
		"description": "Email of the Agent",
		"routing": {
			"send": {
				"type": "body",
				"property": "email"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Agents"
				],
				"operation": [
					"Add New Agent To Account"
				]
			}
		}
	},
	{
		"displayName": "Role",
		"name": "role",
		"type": "options",
		"default": "agent",
		"required": true,
		"description": "Whether its administrator or agent",
		"options": [
			{
				"name": "agent",
				"value": "agent"
			},
			{
				"name": "administrator",
				"value": "administrator"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"property": "role"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Agents"
				],
				"operation": [
					"Add New Agent To Account",
					"Update Agent In Account"
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
					"Agents"
				],
				"operation": [
					"Get Account Agents"
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
					"Agents"
				],
				"operation": [
					"Get Account Agents"
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
					"Agents"
				],
				"operation": [
					"Add New Agent To Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Auto Offline",
				"name": "auto_offline",
				"type": "boolean",
				"default": false,
				"description": "Whether the agent is automatically marked offline when they are away.",
				"routing": {
					"send": {
						"type": "body",
						"property": "auto_offline"
					}
				}
			},
			{
				"displayName": "Availability",
				"name": "availability",
				"type": "options",
				"default": "online",
				"description": "The configured availability of the agent.",
				"options": [
					{
						"name": "online",
						"value": "online"
					},
					{
						"name": "busy",
						"value": "busy"
					},
					{
						"name": "offline",
						"value": "offline"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "availability"
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
					"Agents"
				],
				"operation": [
					"Update Agent In Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Auto Offline",
				"name": "auto_offline",
				"type": "boolean",
				"default": false,
				"description": "Whether the agent is automatically marked offline when they are away.",
				"routing": {
					"send": {
						"type": "body",
						"property": "auto_offline"
					}
				}
			},
			{
				"displayName": "Availability",
				"name": "availability",
				"type": "options",
				"default": "online",
				"description": "The configured availability of the agent.",
				"options": [
					{
						"name": "online",
						"value": "online"
					},
					{
						"name": "busy",
						"value": "busy"
					},
					{
						"name": "offline",
						"value": "offline"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "availability"
					}
				}
			}
		]
	}
];
