import type { INodeProperties } from 'n8n-workflow';

export const accounts: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Accounts"
				]
			}
		},
		"options": [
			{
				"name": "Create An Account",
				"value": "Create An Account",
				"action": "Create an Account",
				"description": "Create an Account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/platform/api/v1/accounts"
					}
				}
			},
			{
				"name": "Get Details Of An Account",
				"value": "Get Details Of An Account",
				"action": "Get an account details",
				"description": "Get the details of an account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/platform/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}"
					}
				}
			},
			{
				"name": "Update An Account",
				"value": "Update An Account",
				"action": "Update an account (Admin)",
				"description": "Requires an administrator token. Update an account's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/platform/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}"
					}
				}
			},
			{
				"name": "Delete An Account",
				"value": "Delete An Account",
				"action": "Delete an Account",
				"description": "Delete an Account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/platform/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}"
					}
				}
			}
		],
		"default": "Create An Account"
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
					"Accounts"
				],
				"operation": [
					"Get Details Of An Account",
					"Update An Account",
					"Delete An Account"
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
					"Accounts"
				],
				"operation": [
					"Create An Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{}",
				"description": "The custom attributes of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Domain",
				"name": "domain",
				"type": "string",
				"default": "",
				"description": "The domain of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "domain"
					}
				}
			},
			{
				"displayName": "Limits",
				"name": "limits",
				"type": "json",
				"default": "{}",
				"description": "The limits of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "limits",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Locale",
				"name": "locale",
				"type": "string",
				"default": "",
				"description": "The locale of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "locale"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "Name of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "options",
				"default": "active",
				"description": "The status of the account",
				"options": [
					{
						"name": "active",
						"value": "active"
					},
					{
						"name": "suspended",
						"value": "suspended"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "status"
					}
				}
			},
			{
				"displayName": "Support Email",
				"name": "support_email",
				"type": "string",
				"default": "",
				"description": "The support email of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "support_email"
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
					"Accounts"
				],
				"operation": [
					"Update An Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{}",
				"description": "The custom attributes of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Domain",
				"name": "domain",
				"type": "string",
				"default": "",
				"description": "The domain of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "domain"
					}
				}
			},
			{
				"displayName": "Limits",
				"name": "limits",
				"type": "json",
				"default": "{}",
				"description": "The limits of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "limits",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Locale",
				"name": "locale",
				"type": "string",
				"default": "",
				"description": "The locale of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "locale"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "Name of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "options",
				"default": "active",
				"description": "The status of the account",
				"options": [
					{
						"name": "active",
						"value": "active"
					},
					{
						"name": "suspended",
						"value": "suspended"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "status"
					}
				}
			},
			{
				"displayName": "Support Email",
				"name": "support_email",
				"type": "string",
				"default": "",
				"description": "The support email of the account",
				"routing": {
					"send": {
						"type": "body",
						"property": "support_email"
					}
				}
			}
		]
	}
];
