import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
	{
		"displayName": "Resource",
		"name": "resource",
		"type": "options",
		"noDataExpression": true,
		"options": [
			{
				"name": "Account Users",
				"value": "Account Users",
				"description": "Account user management APIs"
			},
			{
				"name": "Accounts",
				"value": "Accounts",
				"description": "Account management APIs"
			},
			{
				"name": "Agent Bots",
				"value": "Agent Bots",
				"description": "Bot integrations"
			},
			{
				"name": "Users",
				"value": "Users",
				"description": "User management APIs"
			}
		],
		"default": "Account Users"
	},
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
						"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}/account_users"
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
						"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}/account_users"
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
						"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}/account_users"
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
						"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}"
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
						"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}"
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
						"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}"
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
	},
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
						"url": "=/platform/api/v1/agent_bots/{{$parameter[\"id\"]}}"
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
						"url": "=/platform/api/v1/agent_bots/{{$parameter[\"id\"]}}"
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
						"url": "=/platform/api/v1/agent_bots/{{$parameter[\"id\"]}}"
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
	},
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
						"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}"
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
						"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}"
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
						"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}"
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
						"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}/login"
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
						"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}/token"
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
