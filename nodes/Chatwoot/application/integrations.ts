import type { INodeProperties } from 'n8n-workflow';

export const integrations: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				]
			}
		},
		"options": [
			{
				"name": "Get Details Of All Integrations",
				"value": "Get Details Of All Integrations",
				"action": "List all the Integrations",
				"description": "Get the details of all Integrations available for the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/apps"
					},
					"output": {
						"postReceive": [
							{
								"type": "rootProperty",
								"properties": {
									"property": "payload"
								}
							},
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
				"name": "Create An Integration Hook",
				"value": "Create An Integration Hook",
				"action": "Create an integration hook (Admin)",
				"description": "Requires an administrator token. Create an integration hook",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/hooks"
					}
				}
			},
			{
				"name": "Update An Integrations Hook",
				"value": "Update An Integrations Hook",
				"action": "Update an Integration Hook (Admin)",
				"description": "Requires an administrator token. Update an Integration Hook",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/hooks/{{$parameter[\"hook_id\"]}}"
					}
				}
			},
			{
				"name": "Delete An Integration Hook",
				"value": "Delete An Integration Hook",
				"action": "Delete an Integration Hook (Admin)",
				"description": "Requires an administrator token. Delete an Integration Hook",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/hooks/{{$parameter[\"hook_id\"]}}"
					}
				}
			}
		],
		"default": "Get Details Of All Integrations"
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
					"Integrations"
				],
				"operation": [
					"Get Details Of All Integrations",
					"Create An Integration Hook",
					"Update An Integrations Hook",
					"Delete An Integration Hook"
				]
			}
		}
	},
	{
		"displayName": "Hook Id",
		"name": "hook_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the integration hook",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Update An Integrations Hook",
					"Delete An Integration Hook"
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
					"Integrations"
				],
				"operation": [
					"Get Details Of All Integrations"
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
					"Integrations"
				],
				"operation": [
					"Get Details Of All Integrations"
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
					"Integrations"
				],
				"operation": [
					"Create An Integration Hook"
				]
			}
		},
		"options": [
			{
				"displayName": "App Id",
				"name": "app_id",
				"type": "number",
				"default": 0,
				"description": "The ID of app for which integration hook is being created",
				"routing": {
					"send": {
						"type": "body",
						"property": "app_id"
					}
				}
			},
			{
				"displayName": "Inbox Id",
				"name": "inbox_id",
				"type": "number",
				"default": 0,
				"description": "The inbox ID, if the hook is an inbox hook",
				"routing": {
					"send": {
						"type": "body",
						"property": "inbox_id"
					}
				}
			},
			{
				"displayName": "Settings",
				"name": "settings",
				"type": "json",
				"default": "{}",
				"description": "The settings required by the integration",
				"routing": {
					"send": {
						"type": "body",
						"property": "settings",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "number",
				"default": 0,
				"description": "The status of the integration (0 for inactive, 1 for active)",
				"routing": {
					"send": {
						"type": "body",
						"property": "status"
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
					"Integrations"
				],
				"operation": [
					"Update An Integrations Hook"
				]
			}
		},
		"options": [
			{
				"displayName": "Settings",
				"name": "settings",
				"type": "json",
				"default": "{}",
				"description": "The settings required by the integration",
				"routing": {
					"send": {
						"type": "body",
						"property": "settings",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "number",
				"default": 0,
				"description": "The status of the integration (0 for inactive, 1 for active)",
				"routing": {
					"send": {
						"type": "body",
						"property": "status"
					}
				}
			}
		]
	}
];
