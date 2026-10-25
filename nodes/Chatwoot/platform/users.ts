import type { INodeProperties } from 'n8n-workflow';

export const users: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				]
			}
		},
		"options": [
			{
				"name": "Create A User",
				"value": "Create A User",
				"action": "Create a User",
				"description": "Create a User",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/platform/api/v1/users"
					}
				}
			},
			{
				"name": "Get Details Of A User",
				"value": "Get Details Of A User",
				"action": "Get an user details",
				"description": "Get the details of an user",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/platform/api/v1/users/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Update A User",
				"value": "Update A User",
				"action": "Update a user",
				"description": "Update a user's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/platform/api/v1/users/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Delete A User",
				"value": "Delete A User",
				"action": "Delete a User",
				"description": "Delete a User",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/platform/api/v1/users/{{ encodeURIComponent($parameter[\"id\"]) }}"
					}
				}
			},
			{
				"name": "Get Sso Url Of A User",
				"value": "Get Sso Url Of A User",
				"action": "Get User SSO Link",
				"description": "Get the sso link of a user",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/platform/api/v1/users/{{ encodeURIComponent($parameter[\"id\"]) }}/login"
					}
				}
			},
			{
				"name": "Post User Token",
				"value": "Post User Token",
				"action": "Get User Access Token",
				"description": "Get the access token of a user",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/platform/api/v1/users/{{ encodeURIComponent($parameter[\"id\"]) }}/token"
					}
				}
			}
		],
		"default": "Create A User"
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the user on the platform",
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				],
				"operation": [
					"Get Details Of A User",
					"Update A User",
					"Delete A User",
					"Get Sso Url Of A User",
					"Post User Token"
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
					"Users"
				],
				"operation": [
					"Create A User"
				]
			}
		},
		"options": [
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{}",
				"description": "Custom attributes you want to associate with the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Display Name",
				"name": "display_name",
				"type": "string",
				"default": "",
				"description": "Display name of the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "display_name"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "",
				"description": "Email of the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "email"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "Name of the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Password",
				"name": "password",
				"type": "string",
				"default": "",
				"description": "Password must contain uppercase, lowercase letters, number and a special character",
				"routing": {
					"send": {
						"type": "body",
						"property": "password"
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
					"Users"
				],
				"operation": [
					"Update A User"
				]
			}
		},
		"options": [
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{}",
				"description": "Custom attributes you want to associate with the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Display Name",
				"name": "display_name",
				"type": "string",
				"default": "",
				"description": "Display name of the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "display_name"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "",
				"description": "Email of the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "email"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "Name of the user",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Password",
				"name": "password",
				"type": "string",
				"default": "",
				"description": "Password must contain uppercase, lowercase letters, number and a special character",
				"routing": {
					"send": {
						"type": "body",
						"property": "password"
					}
				}
			}
		]
	}
];
