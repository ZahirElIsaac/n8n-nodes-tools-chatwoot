import type { INodeProperties } from 'n8n-workflow';

export const accountUsers: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Account Users"
				]
			}
		},
		"options": [
			{
				"name": "List All Account Users",
				"value": "List All Account Users",
				"action": "List all Account Users",
				"description": "List all account users",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/platform/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/account_users"
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
				"name": "Create An Account User",
				"value": "Create An Account User",
				"action": "Create an Account User",
				"description": "Create an Account User",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/platform/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/account_users"
					}
				}
			},
			{
				"name": "Delete An Account User",
				"value": "Delete An Account User",
				"action": "Delete an Account User",
				"description": "Delete an Account User",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/platform/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/account_users"
					}
				}
			}
		],
		"default": "List All Account Users"
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
					"Account Users"
				],
				"operation": [
					"List All Account Users",
					"Create An Account User",
					"Delete An Account User"
				]
			}
		}
	},
	{
		"displayName": "User Id",
		"name": "user_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the user",
		"routing": {
			"send": {
				"type": "body",
				"property": "user_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Account Users"
				],
				"operation": [
					"Create An Account User"
				]
			}
		}
	},
	{
		"displayName": "Role",
		"name": "role",
		"type": "string",
		"default": "",
		"required": true,
		"description": "whether user is an administrator or agent",
		"routing": {
			"send": {
				"type": "body",
				"property": "role"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Account Users"
				],
				"operation": [
					"Create An Account User"
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
					"Account Users"
				],
				"operation": [
					"List All Account Users"
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
					"Account Users"
				],
				"operation": [
					"List All Account Users"
				]
			}
		}
	}
];
