import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
	{
		"displayName": "Resource",
		"name": "resource",
		"type": "options",
		"noDataExpression": true,
		"options": [
			{
				"name": "Accounts",
				"value": "Accounts",
				"description": "Account management APIs"
			},
			{
				"name": "Account Users",
				"value": "Account Users",
				"description": "Account user management APIs"
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
		"default": ""
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
		"default": ""
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
		"default": ""
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
		"default": ""
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
		"default": ""
	},
	{
		"displayName": "POST /platform/api/v1/accounts",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Accounts"
				],
				"operation": [
					"Create An Account"
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
						"property": "custom_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Domain",
				"name": "domain",
				"type": "string",
				"default": "example.com",
				"description": "The domain of the account",
				"routing": {
					"send": {
						"property": "domain",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "limits",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Locale",
				"name": "locale",
				"type": "string",
				"default": "en",
				"description": "The locale of the account",
				"routing": {
					"send": {
						"property": "locale",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "My Account",
				"description": "Name of the account",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"name": "Active",
						"value": "active"
					},
					{
						"name": "Suspended",
						"value": "suspended"
					}
				],
				"routing": {
					"send": {
						"property": "status",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Support Email",
				"name": "support_email",
				"type": "string",
				"default": "support@example.com",
				"description": "The support email of the account",
				"routing": {
					"send": {
						"property": "support_email",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /platform/api/v1/accounts/{account_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Accounts"
				],
				"operation": [
					"Get Details Of An Account"
				]
			}
		}
	},
	{
		"displayName": "PATCH /platform/api/v1/accounts/{account_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Accounts"
				],
				"operation": [
					"Update An Account"
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
						"property": "custom_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Domain",
				"name": "domain",
				"type": "string",
				"default": "example.com",
				"description": "The domain of the account",
				"routing": {
					"send": {
						"property": "domain",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "limits",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Locale",
				"name": "locale",
				"type": "string",
				"default": "en",
				"description": "The locale of the account",
				"routing": {
					"send": {
						"property": "locale",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "My Account",
				"description": "Name of the account",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"name": "Active",
						"value": "active"
					},
					{
						"name": "Suspended",
						"value": "suspended"
					}
				],
				"routing": {
					"send": {
						"property": "status",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Support Email",
				"name": "support_email",
				"type": "string",
				"default": "support@example.com",
				"description": "The support email of the account",
				"routing": {
					"send": {
						"property": "support_email",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /platform/api/v1/accounts/{account_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Accounts"
				],
				"operation": [
					"Delete An Account"
				]
			}
		}
	},
	{
		"displayName": "GET /platform/api/v1/accounts/{account_id}/account_users",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "POST /platform/api/v1/accounts/{account_id}/account_users",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "User Id",
		"name": "user_id",
		"type": "number",
		"default": 1,
		"description": "The ID of the user",
		"routing": {
			"send": {
				"property": "user_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"required": true,
		"displayName": "Role",
		"name": "role",
		"type": "string",
		"default": "administrator",
		"description": "whether user is an administrator or agent",
		"routing": {
			"send": {
				"property": "role",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"displayName": "DELETE /platform/api/v1/accounts/{account_id}/account_users",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account Users"
				],
				"operation": [
					"Delete An Account User"
				]
			}
		}
	},
	{
		"displayName": "GET /platform/api/v1/agent_bots",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"List All Agent Bots"
				]
			}
		}
	},
	{
		"displayName": "POST /platform/api/v1/agent_bots",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"Create An Agent Bot"
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
				"default": 1,
				"description": "The account ID to associate the agent bot with",
				"routing": {
					"send": {
						"property": "account_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "avatar",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Avatar Url",
				"name": "avatar_url",
				"type": "string",
				"default": "https://example.com/avatar.png",
				"description": "The url to a jpeg, png file for the agent bot avatar",
				"routing": {
					"send": {
						"property": "avatar_url",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "This is a sample agent bot",
				"description": "The description of the agent bot",
				"routing": {
					"send": {
						"property": "description",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "My Agent Bot",
				"description": "The name of the agent bot",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Outgoing Url",
				"name": "outgoing_url",
				"type": "string",
				"default": "https://example.com/webhook",
				"description": "The webhook URL for the bot",
				"routing": {
					"send": {
						"property": "outgoing_url",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /platform/api/v1/agent_bots/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"Get Details Of A Single Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "PATCH /platform/api/v1/agent_bots/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"Update An Agent Bot"
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
					"Update An Agent Bot"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Id",
				"name": "account_id",
				"type": "number",
				"default": 1,
				"description": "The account ID to associate the agent bot with",
				"routing": {
					"send": {
						"property": "account_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "avatar",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Avatar Url",
				"name": "avatar_url",
				"type": "string",
				"default": "https://example.com/avatar.png",
				"description": "The url to a jpeg, png file for the agent bot avatar",
				"routing": {
					"send": {
						"property": "avatar_url",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "This is a sample agent bot",
				"description": "The description of the agent bot",
				"routing": {
					"send": {
						"property": "description",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "My Agent Bot",
				"description": "The name of the agent bot",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Outgoing Url",
				"name": "outgoing_url",
				"type": "string",
				"default": "https://example.com/webhook",
				"description": "The webhook URL for the bot",
				"routing": {
					"send": {
						"property": "outgoing_url",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /platform/api/v1/agent_bots/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Agent Bots"
				],
				"operation": [
					"Delete An Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "POST /platform/api/v1/users",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				],
				"operation": [
					"Create A User"
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
						"property": "custom_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Display Name",
				"name": "display_name",
				"type": "string",
				"default": "Dan",
				"description": "Display name of the user",
				"routing": {
					"send": {
						"property": "display_name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "daniel@acme.inc",
				"description": "Email of the user",
				"routing": {
					"send": {
						"property": "email",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "Daniel",
				"description": "Name of the user",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Password",
				"name": "password",
				"type": "string",
				"default": "Password2!",
				"description": "Password must contain uppercase, lowercase letters, number and a special character",
				"routing": {
					"send": {
						"property": "password",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /platform/api/v1/users/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				],
				"operation": [
					"Get Details Of A User"
				]
			}
		}
	},
	{
		"displayName": "PATCH /platform/api/v1/users/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				],
				"operation": [
					"Update A User"
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
						"property": "custom_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Display Name",
				"name": "display_name",
				"type": "string",
				"default": "Dan",
				"description": "Display name of the user",
				"routing": {
					"send": {
						"property": "display_name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "daniel@acme.inc",
				"description": "Email of the user",
				"routing": {
					"send": {
						"property": "email",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "Daniel",
				"description": "Name of the user",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Password",
				"name": "password",
				"type": "string",
				"default": "Password2!",
				"description": "Password must contain uppercase, lowercase letters, number and a special character",
				"routing": {
					"send": {
						"property": "password",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /platform/api/v1/users/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				],
				"operation": [
					"Delete A User"
				]
			}
		}
	},
	{
		"displayName": "GET /platform/api/v1/users/{id}/login",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				],
				"operation": [
					"Get Sso Url Of A User"
				]
			}
		}
	},
	{
		"displayName": "POST /platform/api/v1/users/{id}/token",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Users"
				],
				"operation": [
					"Post User Token"
				]
			}
		}
	}
];
