import type { INodeProperties } from 'n8n-workflow';

export const account: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Account"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Details",
				"value": "Get Account Details",
				"action": "Get account details",
				"description": "Get the details of the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}"
					}
				}
			},
			{
				"name": "Update Account",
				"value": "Update Account",
				"action": "Update account (Admin)",
				"description": "Requires an administrator token. Update account details, settings, and custom attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}"
					}
				}
			}
		],
		"default": "Get Account Details"
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
					"Account"
				],
				"operation": [
					"Get Account Details",
					"Update Account"
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
					"Account"
				],
				"operation": [
					"Update Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Auto Resolve After",
				"name": "auto_resolve_after",
				"type": "number",
				"default": 0,
				"description": "Auto resolve conversations after specified minutes",
				"routing": {
					"send": {
						"type": "body",
						"property": "auto_resolve_after"
					}
				}
			},
			{
				"displayName": "Auto Resolve Ignore Waiting",
				"name": "auto_resolve_ignore_waiting",
				"type": "boolean",
				"default": false,
				"description": "Whether to ignore waiting conversations for auto resolve",
				"routing": {
					"send": {
						"type": "body",
						"property": "auto_resolve_ignore_waiting"
					}
				}
			},
			{
				"displayName": "Auto Resolve Message",
				"name": "auto_resolve_message",
				"type": "string",
				"default": "",
				"description": "Message to send when auto resolving",
				"routing": {
					"send": {
						"type": "body",
						"property": "auto_resolve_message"
					}
				}
			},
			{
				"displayName": "Company Size",
				"name": "company_size",
				"type": "string",
				"default": "",
				"description": "Company size",
				"routing": {
					"send": {
						"type": "body",
						"property": "company_size"
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
				"displayName": "Industry",
				"name": "industry",
				"type": "string",
				"default": "",
				"description": "Industry type",
				"routing": {
					"send": {
						"type": "body",
						"property": "industry"
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
			},
			{
				"displayName": "Timezone",
				"name": "timezone",
				"type": "string",
				"default": "",
				"description": "Account timezone",
				"routing": {
					"send": {
						"type": "body",
						"property": "timezone"
					}
				}
			}
		]
	}
];
