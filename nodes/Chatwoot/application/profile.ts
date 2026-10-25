import type { INodeProperties } from 'n8n-workflow';

export const profile: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				]
			}
		},
		"options": [
			{
				"name": "Fetch Profile",
				"value": "Fetch Profile",
				"action": "Fetch user profile",
				"description": "Get the user profile details",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/profile"
					}
				}
			},
			{
				"name": "Update Profile",
				"value": "Update Profile",
				"action": "Update user profile",
				"description": "Update the user profile details",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/v1/profile"
					}
				}
			}
		],
		"default": "Fetch Profile"
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
					"Profile"
				],
				"operation": [
					"Update Profile"
				]
			}
		},
		"options": [
			{
				"displayName": "Current Password",
				"name": "current_password",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.current_password"
					}
				}
			},
			{
				"displayName": "Display Name",
				"name": "display_name",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.display_name"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.email"
					}
				}
			},
			{
				"displayName": "Message Signature",
				"name": "message_signature",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.message_signature"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.name"
					}
				}
			},
			{
				"displayName": "Password",
				"name": "password",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.password"
					}
				}
			},
			{
				"displayName": "Password Confirmation",
				"name": "password_confirmation",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.password_confirmation"
					}
				}
			},
			{
				"displayName": "Phone Number",
				"name": "phone_number",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.phone_number"
					}
				}
			},
			{
				"displayName": "Ui Settings",
				"name": "ui_settings",
				"type": "json",
				"default": "{}",
				"routing": {
					"send": {
						"type": "body",
						"property": "profile.ui_settings",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			}
		]
	}
];
