import type { INodeProperties } from 'n8n-workflow';

export const webhooks: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Webhooks"
				]
			}
		},
		"options": [
			{
				"name": "List All Webhooks",
				"value": "List All Webhooks",
				"action": "List all webhooks (Admin)",
				"description": "Requires an administrator token. List all webhooks in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks"
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
				"name": "Create A Webhook",
				"value": "Create A Webhook",
				"action": "Add a webhook (Admin)",
				"description": "Requires an administrator token. Add a webhook subscription to the account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks"
					}
				}
			},
			{
				"name": "Update A Webhook",
				"value": "Update A Webhook",
				"action": "Update a webhook object (Admin)",
				"description": "Requires an administrator token. Update a webhook object in the account",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks/{{$parameter[\"webhook_id\"]}}"
					}
				}
			},
			{
				"name": "Delete A Webhook",
				"value": "Delete A Webhook",
				"action": "Delete a webhook (Admin)",
				"description": "Requires an administrator token. Delete a webhook from the account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks/{{$parameter[\"webhook_id\"]}}"
					}
				}
			}
		],
		"default": "List All Webhooks"
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
					"Webhooks"
				],
				"operation": [
					"List All Webhooks",
					"Create A Webhook",
					"Update A Webhook",
					"Delete A Webhook"
				]
			}
		}
	},
	{
		"displayName": "Webhook Id",
		"name": "webhook_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the webhook",
		"displayOptions": {
			"show": {
				"resource": [
					"Webhooks"
				],
				"operation": [
					"Update A Webhook",
					"Delete A Webhook"
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
					"Webhooks"
				],
				"operation": [
					"List All Webhooks"
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
					"Webhooks"
				],
				"operation": [
					"List All Webhooks"
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
					"Webhooks"
				],
				"operation": [
					"Create A Webhook"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the webhook",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Subscriptions",
				"name": "subscriptions",
				"type": "json",
				"default": "[]",
				"description": "The events you want to subscribe to.",
				"routing": {
					"send": {
						"type": "body",
						"property": "subscriptions",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Url",
				"name": "url",
				"type": "string",
				"default": "",
				"description": "The url where the events should be sent",
				"routing": {
					"send": {
						"type": "body",
						"property": "url"
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
					"Webhooks"
				],
				"operation": [
					"Update A Webhook"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the webhook",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Subscriptions",
				"name": "subscriptions",
				"type": "json",
				"default": "[]",
				"description": "The events you want to subscribe to.",
				"routing": {
					"send": {
						"type": "body",
						"property": "subscriptions",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Url",
				"name": "url",
				"type": "string",
				"default": "",
				"description": "The url where the events should be sent",
				"routing": {
					"send": {
						"type": "body",
						"property": "url"
					}
				}
			}
		]
	}
];
