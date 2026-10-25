import type { INodeProperties } from 'n8n-workflow';

export const applicationResources: INodeProperties[] = [
	{
		"displayName": "Resource",
		"name": "resource",
		"type": "options",
		"noDataExpression": true,
		"options": [
			{
				"name": "Account",
				"value": "Account",
				"description": ""
			},
			{
				"name": "Account Agent Bots",
				"value": "Account Agent Bots",
				"description": "Account-specific Agent Bots"
			},
			{
				"name": "Agents",
				"value": "Agents",
				"description": "Agent management APIs"
			},
			{
				"name": "Audit Logs",
				"value": "Audit Logs",
				"description": ""
			},
			{
				"name": "Automation Rule",
				"value": "Automation Rule",
				"description": "Workflow automation rules"
			},
			{
				"name": "Campaigns",
				"value": "Campaigns",
				"description": "Create, schedule, and manage campaigns. Requires an account administrator and API access enabled for the account."
			},
			{
				"name": "Canned Responses",
				"value": "Canned Responses",
				"description": "Pre-defined responses for common queries"
			},
			{
				"name": "Contact Labels",
				"value": "Contact Labels",
				"description": "Manage contact labels"
			},
			{
				"name": "Contacts",
				"value": "Contacts",
				"description": "Contact management APIs"
			},
			{
				"name": "Conversation Assignments",
				"value": "Conversation Assignments",
				"description": "Manage conversation assignments"
			},
			{
				"name": "Conversations",
				"value": "Conversations",
				"description": "Conversation management APIs"
			},
			{
				"name": "Custom Attributes",
				"value": "Custom Attributes",
				"description": "Custom fields for contacts and conversations"
			},
			{
				"name": "Custom Filters",
				"value": "Custom Filters",
				"description": "Saved filters for conversations"
			},
			{
				"name": "Inboxes",
				"value": "Inboxes",
				"description": "Communication channels setup"
			},
			{
				"name": "Integrations",
				"value": "Integrations",
				"description": "Third-party integrations"
			},
			{
				"name": "Labels",
				"value": "Labels",
				"description": "Account label management APIs"
			},
			{
				"name": "Messages",
				"value": "Messages",
				"description": "Message management APIs"
			},
			{
				"name": "Profile",
				"value": "Profile",
				"description": "User profile APIs"
			},
			{
				"name": "Reports",
				"value": "Reports",
				"description": "Analytics and reporting APIs"
			},
			{
				"name": "Teams",
				"value": "Teams",
				"description": "Team management APIs"
			},
			{
				"name": "Webhooks",
				"value": "Webhooks",
				"description": "Event notification webhooks"
			}
		],
		"default": "Account"
	},
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
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}"
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
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}"
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
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				]
			}
		},
		"options": [
			{
				"name": "List All Account Agent Bots",
				"value": "List All Account Agent Bots",
				"action": "List all AgentBots",
				"description": "List all agent bots available for the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots"
					}
				}
			},
			{
				"name": "Create An Account Agent Bot",
				"value": "Create An Account Agent Bot",
				"action": "Create an Agent Bot (Admin)",
				"description": "Requires an administrator token. Create an agent bot in the account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots"
					}
				}
			},
			{
				"name": "Get Details Of A Single Account Agent Bot",
				"value": "Get Details Of A Single Account Agent Bot",
				"action": "Get an agent bot details",
				"description": "Get the details of an agent bot in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update An Account Agent Bot",
				"value": "Update An Account Agent Bot",
				"action": "Update an agent bot (Admin)",
				"description": "Requires an administrator token. Update an agent bot's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete An Account Agent Bot",
				"value": "Delete An Account Agent Bot",
				"action": "Delete an AgentBot (Admin)",
				"description": "Requires an administrator token. Delete an AgentBot from the account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": "List All Account Agent Bots"
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
					"Account Agent Bots"
				],
				"operation": [
					"List All Account Agent Bots",
					"Create An Account Agent Bot",
					"Get Details Of A Single Account Agent Bot",
					"Update An Account Agent Bot",
					"Delete An Account Agent Bot"
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
		"description": "The ID of the agentbot to be updated",
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				],
				"operation": [
					"Get Details Of A Single Account Agent Bot",
					"Update An Account Agent Bot",
					"Delete An Account Agent Bot"
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
					"Account Agent Bots"
				],
				"operation": [
					"Create An Account Agent Bot"
				]
			}
		},
		"options": [
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
				"displayName": "Bot Config",
				"name": "bot_config",
				"type": "json",
				"default": "{}",
				"description": "The configuration for the bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_config",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Bot Type",
				"name": "bot_type",
				"type": "number",
				"default": 0,
				"description": "The type of the bot (0 for webhook)",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_type"
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
					"Account Agent Bots"
				],
				"operation": [
					"Update An Account Agent Bot"
				]
			}
		},
		"options": [
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
				"displayName": "Bot Config",
				"name": "bot_config",
				"type": "json",
				"default": "{}",
				"description": "The configuration for the bot",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_config",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Bot Type",
				"name": "bot_type",
				"type": "number",
				"default": 0,
				"description": "The type of the bot (0 for webhook)",
				"routing": {
					"send": {
						"type": "body",
						"property": "bot_type"
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
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents"
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
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents"
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
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents/{{$parameter[\"id\"]}}"
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
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents/{{$parameter[\"id\"]}}"
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
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Audit Logs"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Audit Logs",
				"value": "Get Account Audit Logs",
				"action": "List Audit Logs in Account (Admin)",
				"description": "Requires an administrator token. Get Details of Audit Log entries for an Account. This endpoint is only available in Enterprise editions and requires the audit_logs feature to be enabled.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/audit_logs"
					}
				}
			}
		],
		"default": "Get Account Audit Logs"
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
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"type": "number",
		"default": 1,
		"description": "Page number for pagination",
		"routing": {
			"send": {
				"type": "query",
				"property": "page"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
				]
			}
		}
	},
	{
		"displayName": "Q",
		"name": "q",
		"type": "string",
		"default": "",
		"description": "Filter entries by the name or email of the user who performed the action",
		"routing": {
			"send": {
				"type": "query",
				"property": "q",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
				]
			}
		}
	},
	{
		"displayName": "Types",
		"name": "types",
		"type": "string",
		"default": "",
		"description": "Filter entries by the type of the audited record",
		"routing": {
			"send": {
				"type": "query",
				"property": "types",
				"value": "={{ $value === '' ? undefined : $value.split(',').map((item) => item.trim()) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
				]
			}
		}
	},
	{
		"displayName": "Since",
		"name": "since",
		"type": "number",
		"default": 0,
		"description": "Only return entries created at or after this unix timestamp",
		"routing": {
			"send": {
				"type": "query",
				"property": "since"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
				]
			}
		}
	},
	{
		"displayName": "Until",
		"name": "until",
		"type": "number",
		"default": 0,
		"description": "Only return entries created at or before this unix timestamp",
		"routing": {
			"send": {
				"type": "query",
				"property": "until"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
				]
			}
		}
	},
	{
		"displayName": "Sort",
		"name": "sort",
		"type": "options",
		"default": "",
		"description": "Order of the entries by creation time",
		"options": [
			{
				"name": "Any",
				"value": ""
			},
			{
				"name": "desc",
				"value": "desc"
			},
			{
				"name": "asc",
				"value": "asc"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sort",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
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
					"Automation Rule"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Automation Rule",
				"value": "Get Account Automation Rule",
				"action": "List all automation rules in an account (Admin)",
				"description": "Requires an administrator token. Get details of automation rules in an Account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules"
					}
				}
			},
			{
				"name": "Add New Automation Rule To Account",
				"value": "Add New Automation Rule To Account",
				"action": "Add a new automation rule (Admin)",
				"description": "Requires an administrator token. Add a new automation rule to account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules"
					}
				}
			},
			{
				"name": "Get Details Of A Single Automation Rule",
				"value": "Get Details Of A Single Automation Rule",
				"action": "Get a automation rule details (Admin)",
				"description": "Requires an administrator token. Get the details of a automation rule in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update Automation Rule In Account",
				"value": "Update Automation Rule In Account",
				"action": "Update automation rule in Account (Admin)",
				"description": "Requires an administrator token. Update a automation rule in account",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete Automation Rule From Account",
				"value": "Delete Automation Rule From Account",
				"action": "Remove a automation rule from account (Admin)",
				"description": "Requires an administrator token. Remove a automation rule from account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": "Get Account Automation Rule"
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
					"Automation Rule"
				],
				"operation": [
					"Get Account Automation Rule",
					"Add New Automation Rule To Account",
					"Get Details Of A Single Automation Rule",
					"Update Automation Rule In Account",
					"Delete Automation Rule From Account"
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
		"description": "The ID of the automation rule to be updated.",
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Get Details Of A Single Automation Rule",
					"Update Automation Rule In Account"
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
		"description": "The ID of the automation rule to be deleted",
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Delete Automation Rule From Account"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"type": "number",
		"default": 1,
		"description": "The page parameter",
		"routing": {
			"send": {
				"type": "query",
				"property": "page"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Get Account Automation Rule"
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
					"Automation Rule"
				],
				"operation": [
					"Add New Automation Rule To Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Actions",
				"name": "actions",
				"type": "json",
				"default": "[]",
				"description": "Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.",
				"routing": {
					"send": {
						"type": "body",
						"property": "actions",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Active",
				"name": "active",
				"type": "boolean",
				"default": false,
				"description": "Enable/disable automation rule",
				"routing": {
					"send": {
						"type": "body",
						"property": "active"
					}
				}
			},
			{
				"displayName": "Conditions",
				"name": "conditions",
				"type": "json",
				"default": "[]",
				"description": "Array of conditions on which conversation filter would work, e.g message content contains text help.",
				"routing": {
					"send": {
						"type": "body",
						"property": "conditions",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description about the automation and actions",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Event Name",
				"name": "event_name",
				"type": "options",
				"default": "conversation_created",
				"description": "The event when you want to execute the automation actions",
				"options": [
					{
						"name": "conversation_created",
						"value": "conversation_created"
					},
					{
						"name": "conversation_updated",
						"value": "conversation_updated"
					},
					{
						"name": "conversation_resolved",
						"value": "conversation_resolved"
					},
					{
						"name": "message_created",
						"value": "message_created"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "event_name"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "Rule name",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
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
					"Automation Rule"
				],
				"operation": [
					"Update Automation Rule In Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Actions",
				"name": "actions",
				"type": "json",
				"default": "[]",
				"description": "Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.",
				"routing": {
					"send": {
						"type": "body",
						"property": "actions",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Active",
				"name": "active",
				"type": "boolean",
				"default": false,
				"description": "Enable/disable automation rule",
				"routing": {
					"send": {
						"type": "body",
						"property": "active"
					}
				}
			},
			{
				"displayName": "Conditions",
				"name": "conditions",
				"type": "json",
				"default": "[]",
				"description": "Array of conditions on which conversation filter would work, e.g message content contains text help.",
				"routing": {
					"send": {
						"type": "body",
						"property": "conditions",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description about the automation and actions",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Event Name",
				"name": "event_name",
				"type": "options",
				"default": "conversation_created",
				"description": "The event when you want to execute the automation actions",
				"options": [
					{
						"name": "conversation_created",
						"value": "conversation_created"
					},
					{
						"name": "conversation_updated",
						"value": "conversation_updated"
					},
					{
						"name": "conversation_resolved",
						"value": "conversation_resolved"
					},
					{
						"name": "message_created",
						"value": "message_created"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "event_name"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "Rule name",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
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
					"Campaigns"
				]
			}
		},
		"options": [
			{
				"name": "List Campaigns",
				"value": "List Campaigns",
				"action": "List campaigns (Admin)",
				"description": "Requires an administrator token. List all campaigns in the account. The response is an unpaginated array. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns"
					}
				}
			},
			{
				"name": "Create Campaign",
				"value": "Create Campaign",
				"action": "Create a campaign (Admin)",
				"description": "Requires an administrator token. Create a campaign. For a supported messaging inbox, provide scheduled_at to schedule a one-off campaign; omitting it makes the campaign eligible for the next scheduler run. Website campaigns use trigger_rules instead. Channel-specific campaign availability and requirements still apply. One-off campaigns require at least one audience label for delivery. WhatsApp campaigns also require template_params with the selected template name, language, and any variable values. A successful creation response does not confirm delivery. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns"
					}
				}
			},
			{
				"name": "Get Campaign",
				"value": "Get Campaign",
				"action": "Get a campaign (Admin)",
				"description": "Requires an administrator token. Retrieve a campaign using its account-scoped ID. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update Campaign",
				"value": "Update Campaign",
				"action": "Update a campaign (Admin)",
				"description": "Requires an administrator token. Update campaign fields, including scheduled_at to reschedule an active one-off campaign. Completed campaigns cannot be updated. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete Campaign",
				"value": "Delete Campaign",
				"action": "Delete a campaign (Admin)",
				"description": "Requires an administrator token. Delete a campaign from the account. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": "List Campaigns"
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
					"Campaigns"
				],
				"operation": [
					"List Campaigns",
					"Create Campaign",
					"Get Campaign",
					"Update Campaign",
					"Delete Campaign"
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
		"description": "Account-scoped campaign ID returned by the campaign API.",
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Get Campaign",
					"Update Campaign",
					"Delete Campaign"
				]
			}
		}
	},
	{
		"displayName": "Title",
		"name": "title",
		"type": "string",
		"default": "",
		"required": true,
		"description": "Campaign title.",
		"routing": {
			"send": {
				"type": "body",
				"property": "campaign.title"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.",
		"routing": {
			"send": {
				"type": "body",
				"property": "campaign.inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
				]
			}
		}
	},
	{
		"displayName": "Message",
		"name": "message",
		"type": "string",
		"default": "",
		"required": true,
		"description": "Campaign message content.",
		"routing": {
			"send": {
				"type": "body",
				"property": "campaign.message"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
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
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
				]
			}
		},
		"options": [
			{
				"displayName": "Audience",
				"name": "audience",
				"type": "json",
				"default": "[]",
				"description": "Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.audience",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "Internal description of the campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.description"
					}
				}
			},
			{
				"displayName": "Enabled",
				"name": "enabled",
				"type": "boolean",
				"default": false,
				"description": "Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.enabled"
					}
				}
			},
			{
				"displayName": "Scheduled At",
				"name": "scheduled_at",
				"type": "string",
				"default": "",
				"description": "Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.scheduled_at"
					}
				}
			},
			{
				"displayName": "Sender Id",
				"name": "sender_id",
				"type": "number",
				"default": 0,
				"description": "ID of a user in this account to use as the campaign sender.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.sender_id"
					}
				}
			},
			{
				"displayName": "Template Params",
				"name": "template_params",
				"type": "json",
				"default": "{}",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.template_params",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Trigger Only During Business Hours",
				"name": "trigger_only_during_business_hours",
				"type": "boolean",
				"default": false,
				"description": "Restrict an ongoing website campaign to inbox business hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_only_during_business_hours"
					}
				}
			},
			{
				"displayName": "Trigger Rules",
				"name": "trigger_rules",
				"type": "json",
				"default": "{}",
				"description": "Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_rules",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
					"Campaigns"
				],
				"operation": [
					"Update Campaign"
				]
			}
		},
		"options": [
			{
				"displayName": "Audience",
				"name": "audience",
				"type": "json",
				"default": "[]",
				"description": "Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.audience",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "Internal description of the campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.description"
					}
				}
			},
			{
				"displayName": "Enabled",
				"name": "enabled",
				"type": "boolean",
				"default": false,
				"description": "Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.enabled"
					}
				}
			},
			{
				"displayName": "Inbox Id",
				"name": "inbox_id",
				"type": "number",
				"default": 0,
				"description": "ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.inbox_id"
					}
				}
			},
			{
				"displayName": "Message",
				"name": "message",
				"type": "string",
				"default": "",
				"description": "Campaign message content.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.message"
					}
				}
			},
			{
				"displayName": "Scheduled At",
				"name": "scheduled_at",
				"type": "string",
				"default": "",
				"description": "Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.scheduled_at"
					}
				}
			},
			{
				"displayName": "Sender Id",
				"name": "sender_id",
				"type": "number",
				"default": 0,
				"description": "ID of a user in this account to use as the campaign sender.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.sender_id"
					}
				}
			},
			{
				"displayName": "Template Params",
				"name": "template_params",
				"type": "json",
				"default": "{}",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.template_params",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"description": "Campaign title.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.title"
					}
				}
			},
			{
				"displayName": "Trigger Only During Business Hours",
				"name": "trigger_only_during_business_hours",
				"type": "boolean",
				"default": false,
				"description": "Restrict an ongoing website campaign to inbox business hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_only_during_business_hours"
					}
				}
			},
			{
				"displayName": "Trigger Rules",
				"name": "trigger_rules",
				"type": "json",
				"default": "{}",
				"description": "Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_rules",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
					"Canned Responses"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Canned Response",
				"value": "Get Account Canned Response",
				"action": "List all Canned Responses in an Account",
				"description": "Get Details of Canned Responses in an Account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses"
					}
				}
			},
			{
				"name": "Add New Canned Response To Account",
				"value": "Add New Canned Response To Account",
				"action": "Add a New Canned Response",
				"description": "Add a new Canned Response to Account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses"
					}
				}
			},
			{
				"name": "Update Canned Response In Account",
				"value": "Update Canned Response In Account",
				"action": "Update Canned Response in Account",
				"description": "Update a Canned Response in Account",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete Canned Response From Account",
				"value": "Delete Canned Response From Account",
				"action": "Remove a Canned Response from Account",
				"description": "Remove a Canned Response from Account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": "Get Account Canned Response"
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
					"Canned Responses"
				],
				"operation": [
					"Get Account Canned Response",
					"Add New Canned Response To Account",
					"Update Canned Response In Account",
					"Delete Canned Response From Account"
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
		"description": "The ID of the canned response to be updated.",
		"displayOptions": {
			"show": {
				"resource": [
					"Canned Responses"
				],
				"operation": [
					"Update Canned Response In Account"
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
		"description": "The ID of the canned response to be deleted",
		"displayOptions": {
			"show": {
				"resource": [
					"Canned Responses"
				],
				"operation": [
					"Delete Canned Response From Account"
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
					"Canned Responses"
				],
				"operation": [
					"Add New Canned Response To Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Content",
				"name": "content",
				"type": "string",
				"default": "",
				"description": "Message content for canned response",
				"routing": {
					"send": {
						"type": "body",
						"property": "content"
					}
				}
			},
			{
				"displayName": "Short Code",
				"name": "short_code",
				"type": "string",
				"default": "",
				"description": "Short Code for quick access of the canned response",
				"routing": {
					"send": {
						"type": "body",
						"property": "short_code"
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
					"Canned Responses"
				],
				"operation": [
					"Update Canned Response In Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Content",
				"name": "content",
				"type": "string",
				"default": "",
				"description": "Message content for canned response",
				"routing": {
					"send": {
						"type": "body",
						"property": "content"
					}
				}
			},
			{
				"displayName": "Short Code",
				"name": "short_code",
				"type": "string",
				"default": "",
				"description": "Short Code for quick access of the canned response",
				"routing": {
					"send": {
						"type": "body",
						"property": "short_code"
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
					"Contact Labels"
				]
			}
		},
		"options": [
			{
				"name": "List All Labels Of A Contact",
				"value": "List All Labels Of A Contact",
				"action": "List Labels",
				"description": "Lists all the labels of a contact",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/labels"
					}
				}
			},
			{
				"name": "Contact Add Labels",
				"value": "Contact Add Labels",
				"action": "Add Labels",
				"description": "Add labels to a contact. Note that this API would overwrite the existing list of labels associated to the conversation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/labels"
					}
				}
			}
		],
		"default": "List All Labels Of A Contact"
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
					"Contact Labels"
				],
				"operation": [
					"List All Labels Of A Contact",
					"Contact Add Labels"
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
		"description": "ID of the contact",
		"displayOptions": {
			"show": {
				"resource": [
					"Contact Labels"
				],
				"operation": [
					"List All Labels Of A Contact",
					"Contact Add Labels"
				]
			}
		}
	},
	{
		"displayName": "Labels",
		"name": "labels",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "Array of labels (comma-separated strings)",
		"routing": {
			"send": {
				"type": "body",
				"property": "labels",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contact Labels"
				],
				"operation": [
					"Contact Add Labels"
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
					"Contacts"
				]
			}
		},
		"options": [
			{
				"name": "Contact List",
				"value": "Contact List",
				"action": "List Contacts",
				"description": "Listing all the resolved contacts with pagination (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts"
					}
				}
			},
			{
				"name": "Contact Create",
				"value": "Contact Create",
				"action": "Create Contact",
				"description": "Create a new Contact",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts"
					}
				}
			},
			{
				"name": "Contact Details",
				"value": "Contact Details",
				"action": "Show Contact",
				"description": "Get a contact belonging to the account using ID",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Contact Update",
				"value": "Contact Update",
				"action": "Update Contact",
				"description": "Update a contact belonging to the account using ID",
				"routing": {
					"request": {
						"method": "PUT",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Contact Delete",
				"value": "Contact Delete",
				"action": "Delete Contact (Admin)",
				"description": "Requires an administrator token. Delete a contact belonging to the account using ID",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Contact Conversations",
				"value": "Contact Conversations",
				"action": "Contact Conversations",
				"description": "Get conversations associated with that contact",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/conversations"
					}
				}
			},
			{
				"name": "Contact Search",
				"value": "Contact Search",
				"action": "Search Contacts",
				"description": "Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/search"
					}
				}
			},
			{
				"name": "Contact Filter",
				"value": "Contact Filter",
				"action": "Contact Filter",
				"description": "Filter contacts with custom filter options and pagination",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/filter"
					}
				}
			},
			{
				"name": "Contact Inbox Creation",
				"value": "Contact Inbox Creation",
				"action": "Create contact inbox",
				"description": "Create a contact inbox record for an inbox",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/contact_inboxes"
					}
				}
			},
			{
				"name": "Contactable Inboxes Get",
				"value": "Contactable Inboxes Get",
				"action": "Get Contactable Inboxes",
				"description": "Get List of contactable Inboxes",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/{{$parameter[\"id\"]}}/contactable_inboxes"
					}
				}
			},
			{
				"name": "Contact Merge",
				"value": "Contact Merge",
				"action": "Merge Contacts",
				"description": "Merge two contacts into a single contact. The base contact remains and receives all\ndata from the mergee contact. After the merge, the mergee contact is permanently deleted.\n\nThis action is irreversible. All conversations, labels, and custom attributes from the\nmergee contact will be moved to the base contact.\n",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/actions/contact_merge"
					}
				}
			}
		],
		"default": "Contact List"
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
					"Contacts"
				],
				"operation": [
					"Contact List",
					"Contact Create",
					"Contact Details",
					"Contact Update",
					"Contact Delete",
					"Contact Conversations",
					"Contact Search",
					"Contact Filter",
					"Contact Inbox Creation",
					"Contactable Inboxes Get",
					"Contact Merge"
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
		"description": "ID of the contact",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Details",
					"Contact Update",
					"Contact Delete",
					"Contact Conversations",
					"Contact Inbox Creation",
					"Contactable Inboxes Get"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "ID of the inbox to which the contact belongs",
		"routing": {
			"send": {
				"type": "body",
				"property": "inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Create"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"type": "body",
				"property": "inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Inbox Creation"
				]
			}
		}
	},
	{
		"displayName": "Base Contact Id",
		"name": "base_contact_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "ID of the contact that will remain after the merge and receive all data",
		"routing": {
			"send": {
				"type": "body",
				"property": "base_contact_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Merge"
				]
			}
		}
	},
	{
		"displayName": "Mergee Contact Id",
		"name": "mergee_contact_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "ID of the contact that will be merged into the base contact and deleted",
		"routing": {
			"send": {
				"type": "body",
				"property": "mergee_contact_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Merge"
				]
			}
		}
	},
	{
		"displayName": "Sort",
		"name": "sort",
		"type": "options",
		"default": "",
		"description": "The attribute by which list should be sorted",
		"options": [
			{
				"name": "Any",
				"value": ""
			},
			{
				"name": "name",
				"value": "name"
			},
			{
				"name": "email",
				"value": "email"
			},
			{
				"name": "phone_number",
				"value": "phone_number"
			},
			{
				"name": "last_activity_at",
				"value": "last_activity_at"
			},
			{
				"name": "-name",
				"value": "-name"
			},
			{
				"name": "-email",
				"value": "-email"
			},
			{
				"name": "-phone_number",
				"value": "-phone_number"
			},
			{
				"name": "-last_activity_at",
				"value": "-last_activity_at"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sort",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact List",
					"Contact Search"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"type": "number",
		"default": 1,
		"description": "The page parameter",
		"routing": {
			"send": {
				"type": "query",
				"property": "page"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact List",
					"Contact Search"
				]
			}
		}
	},
	{
		"displayName": "Q",
		"name": "q",
		"type": "string",
		"default": "",
		"description": "Search using contact `name`, `identifier`, `email` or `phone number`",
		"routing": {
			"send": {
				"type": "query",
				"property": "q",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Search"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"type": "number",
		"default": 0,
		"routing": {
			"send": {
				"type": "query",
				"property": "page"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Filter"
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
					"Contacts"
				],
				"operation": [
					"Contact Create"
				]
			}
		},
		"options": [
			{
				"displayName": "Additional Attributes",
				"name": "additional_attributes",
				"type": "json",
				"default": "{}",
				"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
				"routing": {
					"send": {
						"type": "body",
						"property": "additional_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
				"description": "The url to a jpeg, png file for the contact avatar",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar_url"
					}
				}
			},
			{
				"displayName": "Blocked",
				"name": "blocked",
				"type": "boolean",
				"default": false,
				"description": "whether the contact is blocked or not",
				"routing": {
					"send": {
						"type": "body",
						"property": "blocked"
					}
				}
			},
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{}",
				"description": "An object where you can store custom attributes for contact. example {\"type\":\"customer\", \"age\":30}, this should have a valid custom attribute definition.",
				"routing": {
					"send": {
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "",
				"description": "email of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "email"
					}
				}
			},
			{
				"displayName": "Identifier",
				"name": "identifier",
				"type": "string",
				"default": "",
				"description": "A unique identifier for the contact in external system",
				"routing": {
					"send": {
						"type": "body",
						"property": "identifier"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "name of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Phone Number",
				"name": "phone_number",
				"type": "string",
				"default": "",
				"description": "phone number of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "phone_number"
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
					"Contacts"
				],
				"operation": [
					"Contact Update"
				]
			}
		},
		"options": [
			{
				"displayName": "Additional Attributes",
				"name": "additional_attributes",
				"type": "json",
				"default": "{}",
				"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
				"routing": {
					"send": {
						"type": "body",
						"property": "additional_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
				"description": "The url to a jpeg, png file for the contact avatar",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar_url"
					}
				}
			},
			{
				"displayName": "Blocked",
				"name": "blocked",
				"type": "boolean",
				"default": false,
				"description": "whether the contact is blocked or not",
				"routing": {
					"send": {
						"type": "body",
						"property": "blocked"
					}
				}
			},
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{}",
				"description": "An object where you can store custom attributes for contact. example {\"type\":\"customer\", \"age\":30}, this should have a valid custom attribute definition.",
				"routing": {
					"send": {
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "",
				"description": "email of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "email"
					}
				}
			},
			{
				"displayName": "Identifier",
				"name": "identifier",
				"type": "string",
				"default": "",
				"description": "A unique identifier for the contact in external system",
				"routing": {
					"send": {
						"type": "body",
						"property": "identifier"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "name of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Phone Number",
				"name": "phone_number",
				"type": "string",
				"default": "",
				"description": "phone number of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "phone_number"
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
					"Contacts"
				],
				"operation": [
					"Contact Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Payload",
				"name": "payload",
				"type": "json",
				"default": "[]",
				"routing": {
					"send": {
						"type": "body",
						"property": "payload",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
					"Contacts"
				],
				"operation": [
					"Contact Inbox Creation"
				]
			}
		},
		"options": [
			{
				"displayName": "Source Id",
				"name": "source_id",
				"type": "string",
				"default": "",
				"description": "Contact Inbox Source Id",
				"routing": {
					"send": {
						"type": "body",
						"property": "source_id"
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
					"Conversation Assignments"
				]
			}
		},
		"options": [
			{
				"name": "Assign A Conversation",
				"value": "Assign A Conversation",
				"action": "Assign Conversation",
				"description": "Assign a conversation to an agent or a team",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/assignments"
					}
				}
			}
		],
		"default": "Assign A Conversation"
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
					"Conversation Assignments"
				],
				"operation": [
					"Assign A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Conversation Id",
		"name": "conversation_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the conversation",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversation Assignments"
				],
				"operation": [
					"Assign A Conversation"
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
					"Conversation Assignments"
				],
				"operation": [
					"Assign A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Assignee Id",
				"name": "assignee_id",
				"type": "number",
				"default": 0,
				"description": "Id of the assignee user",
				"routing": {
					"send": {
						"type": "body",
						"property": "assignee_id"
					}
				}
			},
			{
				"displayName": "Team Id",
				"name": "team_id",
				"type": "number",
				"default": 0,
				"description": "Id of the team. If the assignee_id is present, this param would be ignored",
				"routing": {
					"send": {
						"type": "body",
						"property": "team_id"
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
					"Conversations"
				]
			}
		},
		"options": [
			{
				"name": "Conversation List Meta",
				"value": "Conversation List Meta",
				"action": "Get Conversation Counts",
				"description": "Get open, unassigned and all Conversation counts",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/meta"
					}
				}
			},
			{
				"name": "Conversation List",
				"value": "Conversation List",
				"action": "Conversations List",
				"description": "List all the conversations with pagination",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations"
					}
				}
			},
			{
				"name": "New Conversation",
				"value": "New Conversation",
				"action": "Create New Conversation",
				"description": "Creating a conversation in chatwoot requires a source id. \n\n Learn more about source_id: https://www.chatwoot.com/hc/user-guide/articles/1677839703-how-to-create-an-api-channel-inbox#send-messages-to-the-api-channel",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations"
					}
				}
			},
			{
				"name": "Conversation Filter",
				"value": "Conversation Filter",
				"action": "Conversations Filter",
				"description": "Filter conversations with custom filter options and pagination",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/filter"
					}
				}
			},
			{
				"name": "Get Details Of A Conversation",
				"value": "Get Details Of A Conversation",
				"action": "Conversation Details",
				"description": "Get all details regarding a conversation with all messages in the conversation",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}"
					}
				}
			},
			{
				"name": "Update Conversation",
				"value": "Update Conversation",
				"action": "Update Conversation",
				"description": "Update Conversation Attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}"
					}
				}
			},
			{
				"name": "Toggle Status Of A Conversation",
				"value": "Toggle Status Of A Conversation",
				"action": "Toggle Status",
				"description": "Toggle the status of a conversation. Pass `status` to explicitly set the\nconversation state. Use `snoozed` along with `snoozed_until` to snooze a\nconversation until a specific time. If `snoozed_until` is omitted, the\nconversation is snoozed until the next reply from the contact. Regardless\nof the value provided, snoozed conversations always reopen on the next\nreply from the contact.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_status"
					}
				}
			},
			{
				"name": "Toggle Priority Of A Conversation",
				"value": "Toggle Priority Of A Conversation",
				"action": "Toggle Priority",
				"description": "Toggles the priority of conversation",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_priority"
					}
				}
			},
			{
				"name": "Toggle Typing Status Of A Conversation",
				"value": "Toggle Typing Status Of A Conversation",
				"action": "Toggle Typing Status",
				"description": "Toggles the typing status for a conversation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/toggle_typing_status"
					}
				}
			},
			{
				"name": "Conversation Update Last Seen",
				"value": "Conversation Update Last Seen",
				"action": "Update Last Seen",
				"description": "Updates the last seen of the conversation so that conversations will have the bubbles in the agents screen",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/update_last_seen"
					}
				}
			},
			{
				"name": "Update Custom Attributes Of A Conversation",
				"value": "Update Custom Attributes Of A Conversation",
				"action": "Update Custom Attributes",
				"description": "Updates the custom attributes of a conversation",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/custom_attributes"
					}
				}
			},
			{
				"name": "Destroy Custom Attributes Of A Conversation",
				"value": "Destroy Custom Attributes Of A Conversation",
				"action": "Destroy Custom Attributes",
				"description": "Removes the given custom attribute keys from a conversation",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/destroy_custom_attributes"
					}
				}
			},
			{
				"name": "List All Labels Of A Conversation",
				"value": "List All Labels Of A Conversation",
				"action": "List Labels",
				"description": "Lists all the labels of a conversation",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/labels"
					}
				}
			},
			{
				"name": "Conversation Add Labels",
				"value": "Conversation Add Labels",
				"action": "Add Labels",
				"description": "Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/labels"
					}
				}
			},
			{
				"name": "Get Conversation Reporting Events",
				"value": "Get Conversation Reporting Events",
				"action": "Conversation Reporting Events",
				"description": "Get reporting events for a specific conversation. This endpoint returns events such as first response time, resolution time, and other metrics for the conversation, sorted by creation time in ascending order.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/reporting_events"
					}
				}
			}
		],
		"default": "Conversation List Meta"
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
					"Conversations"
				],
				"operation": [
					"Conversation List Meta",
					"Conversation List",
					"New Conversation",
					"Conversation Filter",
					"Get Details Of A Conversation",
					"Update Conversation",
					"Toggle Status Of A Conversation",
					"Toggle Priority Of A Conversation",
					"Toggle Typing Status Of A Conversation",
					"Conversation Update Last Seen",
					"Update Custom Attributes Of A Conversation",
					"Destroy Custom Attributes Of A Conversation",
					"List All Labels Of A Conversation",
					"Conversation Add Labels",
					"Get Conversation Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "Conversation Id",
		"name": "conversation_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the conversation",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Get Details Of A Conversation",
					"Update Conversation",
					"Toggle Status Of A Conversation",
					"Toggle Priority Of A Conversation",
					"Toggle Typing Status Of A Conversation",
					"Conversation Update Last Seen",
					"Update Custom Attributes Of A Conversation",
					"Destroy Custom Attributes Of A Conversation",
					"List All Labels Of A Conversation",
					"Conversation Add Labels",
					"Get Conversation Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "Source Id",
		"name": "source_id",
		"type": "string",
		"default": "",
		"required": true,
		"description": "Conversation source id",
		"routing": {
			"send": {
				"type": "body",
				"property": "source_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"New Conversation"
				]
			}
		}
	},
	{
		"displayName": "Status",
		"name": "status",
		"type": "options",
		"default": "open",
		"required": true,
		"description": "The status of the conversation",
		"options": [
			{
				"name": "open",
				"value": "open"
			},
			{
				"name": "resolved",
				"value": "resolved"
			},
			{
				"name": "pending",
				"value": "pending"
			},
			{
				"name": "snoozed",
				"value": "snoozed"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"property": "status"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Toggle Status Of A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Typing Status",
		"name": "typing_status",
		"type": "options",
		"default": "on",
		"required": true,
		"description": "Typing status to set.",
		"options": [
			{
				"name": "on",
				"value": "on"
			},
			{
				"name": "off",
				"value": "off"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"property": "typing_status"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Toggle Typing Status Of A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Custom Attributes",
		"name": "custom_attributes",
		"type": "json",
		"default": "{}",
		"required": true,
		"description": "The custom attributes to be set for the conversation",
		"routing": {
			"send": {
				"type": "body",
				"property": "custom_attributes",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Update Custom Attributes Of A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Custom Attributes",
		"name": "custom_attributes",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "The list of custom attribute keys to remove from the conversation",
		"routing": {
			"send": {
				"type": "body",
				"property": "custom_attributes",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Destroy Custom Attributes Of A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Labels",
		"name": "labels",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "Array of labels (comma-separated strings)",
		"routing": {
			"send": {
				"type": "body",
				"property": "labels",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation Add Labels"
				]
			}
		}
	},
	{
		"displayName": "Status",
		"name": "status",
		"type": "options",
		"default": "",
		"description": "Filter by conversation status.",
		"options": [
			{
				"name": "Any",
				"value": ""
			},
			{
				"name": "all",
				"value": "all"
			},
			{
				"name": "open",
				"value": "open"
			},
			{
				"name": "resolved",
				"value": "resolved"
			},
			{
				"name": "pending",
				"value": "pending"
			},
			{
				"name": "snoozed",
				"value": "snoozed"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "status",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta",
					"Conversation List"
				]
			}
		}
	},
	{
		"displayName": "Q",
		"name": "q",
		"type": "string",
		"default": "",
		"description": "Filters conversations with messages containing the search term",
		"routing": {
			"send": {
				"type": "query",
				"property": "q",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta",
					"Conversation List"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"routing": {
			"send": {
				"type": "query",
				"property": "inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta",
					"Conversation List"
				]
			}
		}
	},
	{
		"displayName": "Team Id",
		"name": "team_id",
		"type": "number",
		"default": 0,
		"routing": {
			"send": {
				"type": "query",
				"property": "team_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta",
					"Conversation List"
				]
			}
		}
	},
	{
		"displayName": "Labels",
		"name": "labels",
		"type": "string",
		"default": "",
		"routing": {
			"send": {
				"type": "query",
				"property": "labels",
				"value": "={{ $value === '' ? undefined : $value.split(',').map((item) => item.trim()) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta",
					"Conversation List"
				]
			}
		}
	},
	{
		"displayName": "Assignee Type",
		"name": "assignee_type",
		"type": "options",
		"default": "",
		"description": "Filter conversations by assignee type.",
		"options": [
			{
				"name": "Any",
				"value": ""
			},
			{
				"name": "me",
				"value": "me"
			},
			{
				"name": "unassigned",
				"value": "unassigned"
			},
			{
				"name": "all",
				"value": "all"
			},
			{
				"name": "assigned",
				"value": "assigned"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "assignee_type",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"type": "number",
		"default": 1,
		"description": "paginate through conversations",
		"routing": {
			"send": {
				"type": "query",
				"property": "page"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"type": "number",
		"default": 0,
		"routing": {
			"send": {
				"type": "query",
				"property": "page"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation Filter"
				]
			}
		}
	},
	{
		"displayName": "Sort By",
		"name": "sort_by",
		"type": "options",
		"default": "",
		"description": "Sort filtered conversations using the same options as the conversation list.",
		"options": [
			{
				"name": "Any",
				"value": ""
			},
			{
				"name": "last_activity_at_asc",
				"value": "last_activity_at_asc"
			},
			{
				"name": "last_activity_at_desc",
				"value": "last_activity_at_desc"
			},
			{
				"name": "created_at_asc",
				"value": "created_at_asc"
			},
			{
				"name": "created_at_desc",
				"value": "created_at_desc"
			},
			{
				"name": "priority_asc",
				"value": "priority_asc"
			},
			{
				"name": "priority_desc",
				"value": "priority_desc"
			},
			{
				"name": "waiting_since_asc",
				"value": "waiting_since_asc"
			},
			{
				"name": "waiting_since_desc",
				"value": "waiting_since_desc"
			},
			{
				"name": "priority_desc_created_at_asc",
				"value": "priority_desc_created_at_asc"
			},
			{
				"name": "unread",
				"value": "unread"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sort_by",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation Filter"
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
					"Conversations"
				],
				"operation": [
					"New Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Additional Attributes",
				"name": "additional_attributes",
				"type": "json",
				"default": "{}",
				"description": "Lets you specify attributes like browser information",
				"routing": {
					"send": {
						"type": "body",
						"property": "additional_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Assignee Id",
				"name": "assignee_id",
				"type": "number",
				"default": 0,
				"description": "Agent Id for assigning a conversation to an agent",
				"routing": {
					"send": {
						"type": "body",
						"property": "assignee_id"
					}
				}
			},
			{
				"displayName": "Contact Id",
				"name": "contact_id",
				"type": "number",
				"default": 0,
				"description": "Contact Id for which conversation is created",
				"routing": {
					"send": {
						"type": "body",
						"property": "contact_id"
					}
				}
			},
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{}",
				"description": "The object to save custom attributes for conversation, accepts custom attributes key and value",
				"routing": {
					"send": {
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Inbox Id",
				"name": "inbox_id",
				"type": "number",
				"default": 0,
				"description": "Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email",
				"routing": {
					"send": {
						"type": "body",
						"property": "inbox_id"
					}
				}
			},
			{
				"displayName": "Message",
				"name": "message",
				"type": "json",
				"default": "{}",
				"description": "The initial message to be sent to the conversation",
				"routing": {
					"send": {
						"type": "body",
						"property": "message",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Snoozed Until",
				"name": "snoozed_until",
				"type": "string",
				"default": "",
				"description": "Snoozed until date time",
				"routing": {
					"send": {
						"type": "body",
						"property": "snoozed_until"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "options",
				"default": "open",
				"description": "Specify the conversation whether it's pending, open, closed",
				"options": [
					{
						"name": "open",
						"value": "open"
					},
					{
						"name": "resolved",
						"value": "resolved"
					},
					{
						"name": "pending",
						"value": "pending"
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
				"displayName": "Team Id",
				"name": "team_id",
				"type": "number",
				"default": 0,
				"description": "Team Id for assigning a conversation to a team\\",
				"routing": {
					"send": {
						"type": "body",
						"property": "team_id"
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
					"Conversations"
				],
				"operation": [
					"Conversation Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Payload",
				"name": "payload",
				"type": "json",
				"default": "[]",
				"routing": {
					"send": {
						"type": "body",
						"property": "payload",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
					"Conversations"
				],
				"operation": [
					"Update Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Priority",
				"name": "priority",
				"type": "options",
				"default": "urgent",
				"description": "The priority of the conversation. Set to null to clear the priority.",
				"options": [
					{
						"name": "urgent",
						"value": "urgent"
					},
					{
						"name": "high",
						"value": "high"
					},
					{
						"name": "medium",
						"value": "medium"
					},
					{
						"name": "low",
						"value": "low"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "priority"
					}
				}
			},
			{
				"displayName": "Sla Policy Id",
				"name": "sla_policy_id",
				"type": "number",
				"default": 0,
				"description": "The ID of the SLA policy (Available only in Enterprise edition)",
				"routing": {
					"send": {
						"type": "body",
						"property": "sla_policy_id"
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
					"Conversations"
				],
				"operation": [
					"Toggle Status Of A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Snoozed Until",
				"name": "snoozed_until",
				"type": "number",
				"default": 0,
				"description": "When status is `snoozed`, schedule the reopen time as a Unix timestamp in seconds. If not provided, the conversation is snoozed until the next customer reply. The conversation always reopens when the customer replies.",
				"routing": {
					"send": {
						"type": "body",
						"property": "snoozed_until"
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
					"Conversations"
				],
				"operation": [
					"Toggle Priority Of A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Priority",
				"name": "priority",
				"type": "options",
				"default": "urgent",
				"description": "The priority of the conversation. Omit or set to null to clear the priority.",
				"options": [
					{
						"name": "urgent",
						"value": "urgent"
					},
					{
						"name": "high",
						"value": "high"
					},
					{
						"name": "medium",
						"value": "medium"
					},
					{
						"name": "low",
						"value": "low"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "priority"
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
					"Conversations"
				],
				"operation": [
					"Toggle Typing Status Of A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Is Private",
				"name": "is_private",
				"type": "boolean",
				"default": false,
				"description": "Whether the typing event is for private notes.",
				"routing": {
					"send": {
						"type": "body",
						"property": "is_private"
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
					"Conversations"
				],
				"operation": [
					"Update Custom Attributes Of A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Merge",
				"name": "merge",
				"type": "boolean",
				"default": false,
				"description": "When true, only the keys sent in `custom_attributes` are updated and the remaining keys are kept intact. When false (default), the whole custom attributes hash is replaced. Use the destroy_custom_attributes endpoint to remove keys.",
				"routing": {
					"send": {
						"type": "body",
						"property": "merge"
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
					"Custom Attributes"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Custom Attribute",
				"value": "Get Account Custom Attribute",
				"action": "List all custom attributes in an account",
				"description": "Get details of custom attributes in an Account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions"
					}
				}
			},
			{
				"name": "Add New Custom Attribute To Account",
				"value": "Add New Custom Attribute To Account",
				"action": "Add a new custom attribute (Admin)",
				"description": "Requires an administrator token. Add a new custom attribute to account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions"
					}
				}
			},
			{
				"name": "Get Details Of A Single Custom Attribute",
				"value": "Get Details Of A Single Custom Attribute",
				"action": "Get a custom attribute details",
				"description": "Get the details of a custom attribute in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update Custom Attribute In Account",
				"value": "Update Custom Attribute In Account",
				"action": "Update custom attribute in Account (Admin)",
				"description": "Requires an administrator token. Update a custom attribute in account",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete Custom Attribute From Account",
				"value": "Delete Custom Attribute From Account",
				"action": "Remove a custom attribute from account (Admin)",
				"description": "Requires an administrator token. Remove a custom attribute from account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": "Get Account Custom Attribute"
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
					"Custom Attributes"
				],
				"operation": [
					"Get Account Custom Attribute",
					"Add New Custom Attribute To Account",
					"Get Details Of A Single Custom Attribute",
					"Update Custom Attribute In Account",
					"Delete Custom Attribute From Account"
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
		"description": "The ID of the custom attribute to be updated.",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Get Details Of A Single Custom Attribute",
					"Update Custom Attribute In Account"
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
		"description": "The ID of the custom attribute to be deleted",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Delete Custom Attribute From Account"
				]
			}
		}
	},
	{
		"displayName": "Attribute Model",
		"name": "attribute_model",
		"type": "options",
		"default": "0",
		"required": true,
		"description": "conversation_attribute(0)/contact_attribute(1)",
		"options": [
			{
				"name": "0",
				"value": "0"
			},
			{
				"name": "1",
				"value": "1"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "attribute_model"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Get Account Custom Attribute"
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
					"Custom Attributes"
				],
				"operation": [
					"Add New Custom Attribute To Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Attribute Description",
				"name": "attribute_description",
				"type": "string",
				"default": "",
				"description": "Attribute description",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_description"
					}
				}
			},
			{
				"displayName": "Attribute Display Name",
				"name": "attribute_display_name",
				"type": "string",
				"default": "",
				"description": "Attribute display name",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_display_name"
					}
				}
			},
			{
				"displayName": "Attribute Display Type",
				"name": "attribute_display_type",
				"type": "number",
				"default": 0,
				"description": "Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_display_type"
					}
				}
			},
			{
				"displayName": "Attribute Key",
				"name": "attribute_key",
				"type": "string",
				"default": "",
				"description": "Attribute unique key value",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_key"
					}
				}
			},
			{
				"displayName": "Attribute Model",
				"name": "attribute_model",
				"type": "number",
				"default": 0,
				"description": "Attribute type(conversation_attribute- 0, contact_attribute- 1)",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_model"
					}
				}
			},
			{
				"displayName": "Attribute Values",
				"name": "attribute_values",
				"type": "json",
				"default": "[]",
				"description": "Attribute values",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_values",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Regex Cue",
				"name": "regex_cue",
				"type": "string",
				"default": "",
				"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_cue"
					}
				}
			},
			{
				"displayName": "Regex Pattern",
				"name": "regex_pattern",
				"type": "string",
				"default": "",
				"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_pattern"
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
					"Custom Attributes"
				],
				"operation": [
					"Update Custom Attribute In Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Attribute Description",
				"name": "attribute_description",
				"type": "string",
				"default": "",
				"description": "Attribute description",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_description"
					}
				}
			},
			{
				"displayName": "Attribute Display Name",
				"name": "attribute_display_name",
				"type": "string",
				"default": "",
				"description": "Attribute display name",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_display_name"
					}
				}
			},
			{
				"displayName": "Attribute Display Type",
				"name": "attribute_display_type",
				"type": "number",
				"default": 0,
				"description": "Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_display_type"
					}
				}
			},
			{
				"displayName": "Attribute Key",
				"name": "attribute_key",
				"type": "string",
				"default": "",
				"description": "Attribute unique key value",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_key"
					}
				}
			},
			{
				"displayName": "Attribute Model",
				"name": "attribute_model",
				"type": "number",
				"default": 0,
				"description": "Attribute type(conversation_attribute- 0, contact_attribute- 1)",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_model"
					}
				}
			},
			{
				"displayName": "Attribute Values",
				"name": "attribute_values",
				"type": "json",
				"default": "[]",
				"description": "Attribute values",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_values",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Regex Cue",
				"name": "regex_cue",
				"type": "string",
				"default": "",
				"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_cue"
					}
				}
			},
			{
				"displayName": "Regex Pattern",
				"name": "regex_pattern",
				"type": "string",
				"default": "",
				"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_pattern"
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
					"Custom Filters"
				]
			}
		},
		"options": [
			{
				"name": "List All Filters",
				"value": "List All Filters",
				"action": "List all custom filters",
				"description": "List all custom filters in a category of a user",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters"
					}
				}
			},
			{
				"name": "Create A Custom Filter",
				"value": "Create A Custom Filter",
				"action": "Create a custom filter",
				"description": "Create a custom filter in the account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters"
					}
				}
			},
			{
				"name": "Get Details Of A Single Custom Filter",
				"value": "Get Details Of A Single Custom Filter",
				"action": "Get a custom filter details",
				"description": "Get the details of a custom filter in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters/{{$parameter[\"custom_filter_id\"]}}"
					}
				}
			},
			{
				"name": "Update A Custom Filter",
				"value": "Update A Custom Filter",
				"action": "Update a custom filter",
				"description": "Update a custom filter's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters/{{$parameter[\"custom_filter_id\"]}}"
					}
				}
			},
			{
				"name": "Delete A Custom Filter",
				"value": "Delete A Custom Filter",
				"action": "Delete a custom filter",
				"description": "Delete a custom filter from the account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters/{{$parameter[\"custom_filter_id\"]}}"
					}
				}
			}
		],
		"default": "List All Filters"
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
					"Custom Filters"
				],
				"operation": [
					"List All Filters",
					"Create A Custom Filter",
					"Get Details Of A Single Custom Filter",
					"Update A Custom Filter",
					"Delete A Custom Filter"
				]
			}
		}
	},
	{
		"displayName": "Custom Filter Id",
		"name": "custom_filter_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the custom filter",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
					"Get Details Of A Single Custom Filter",
					"Update A Custom Filter",
					"Delete A Custom Filter"
				]
			}
		}
	},
	{
		"displayName": "Filter Type",
		"name": "filter_type",
		"type": "options",
		"default": "",
		"description": "The type of custom filter",
		"options": [
			{
				"name": "Any",
				"value": ""
			},
			{
				"name": "conversation",
				"value": "conversation"
			},
			{
				"name": "contact",
				"value": "contact"
			},
			{
				"name": "report",
				"value": "report"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "filter_type",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
					"List All Filters",
					"Create A Custom Filter"
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
					"Custom Filters"
				],
				"operation": [
					"Create A Custom Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the custom filter",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Query",
				"name": "query",
				"type": "json",
				"default": "{}",
				"description": "A query that needs to be saved as a custom filter",
				"routing": {
					"send": {
						"type": "body",
						"property": "query",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"default": "conversation",
				"description": "The description about the custom filter",
				"options": [
					{
						"name": "conversation",
						"value": "conversation"
					},
					{
						"name": "contact",
						"value": "contact"
					},
					{
						"name": "report",
						"value": "report"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "type"
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
					"Custom Filters"
				],
				"operation": [
					"Update A Custom Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the custom filter",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Query",
				"name": "query",
				"type": "json",
				"default": "{}",
				"description": "A query that needs to be saved as a custom filter",
				"routing": {
					"send": {
						"type": "body",
						"property": "query",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"default": "conversation",
				"description": "The description about the custom filter",
				"options": [
					{
						"name": "conversation",
						"value": "conversation"
					},
					{
						"name": "contact",
						"value": "contact"
					},
					{
						"name": "report",
						"value": "report"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "type"
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
					"Inboxes"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Branded Email Layout",
				"value": "Get Account Branded Email Layout",
				"action": "Get account branded email layout",
				"description": "Get the account-scoped Liquid HTML layout used as the fallback for branded email replies.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/branded_email_layout"
					}
				}
			},
			{
				"name": "Update Account Branded Email Layout",
				"value": "Update Account Branded Email Layout",
				"action": "Update account branded email layout (Admin)",
				"description": "Requires an administrator token. Update or clear the account-scoped Liquid HTML layout used as the fallback for branded email replies.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/branded_email_layout"
					}
				}
			},
			{
				"name": "List All Inboxes",
				"value": "List All Inboxes",
				"action": "List all inboxes",
				"description": "List all inboxes available in the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes"
					}
				}
			},
			{
				"name": "Inbox Creation",
				"value": "Inbox Creation",
				"action": "Create an inbox (Admin)",
				"description": "Requires an administrator token. You can create more than one website inbox in each account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes"
					}
				}
			},
			{
				"name": "Get Inbox",
				"value": "Get Inbox",
				"action": "Get an inbox",
				"description": "Get an inbox available in the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update Inbox",
				"value": "Update Inbox",
				"action": "Update Inbox (Admin)",
				"description": "Requires an administrator token. Update an existing inbox",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "List Whatsapp Message Templates",
				"value": "List Whatsapp Message Templates",
				"action": "List WhatsApp message templates",
				"description": "List the cached message templates available for a native or Twilio WhatsApp inbox",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}/message_templates"
					}
				}
			},
			{
				"name": "Get Inbox Agent Bot",
				"value": "Get Inbox Agent Bot",
				"action": "Show Inbox Agent Bot",
				"description": "See if an agent bot is associated to the Inbox",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}/agent_bot"
					}
				}
			},
			{
				"name": "Update Agent Bot",
				"value": "Update Agent Bot",
				"action": "Add or remove agent bot (Admin)",
				"description": "Requires an administrator token. To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inboxes/{{$parameter[\"id\"]}}/set_agent_bot"
					}
				}
			},
			{
				"name": "Get Inbox Members",
				"value": "Get Inbox Members",
				"action": "List Agents in Inbox",
				"description": "Get Details of Agents in an Inbox",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members/{{$parameter[\"inbox_id\"]}}"
					}
				}
			},
			{
				"name": "Add New Agent To Inbox",
				"value": "Add New Agent To Inbox",
				"action": "Add a New Agent (Admin)",
				"description": "Requires an administrator token. Add a new Agent to Inbox",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members"
					}
				}
			},
			{
				"name": "Update Agents In Inbox",
				"value": "Update Agents In Inbox",
				"action": "Update Agents in Inbox (Admin)",
				"description": "Requires an administrator token. All agents except the one passed in params will be removed",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members"
					}
				}
			},
			{
				"name": "Delete Agent In Inbox",
				"value": "Delete Agent In Inbox",
				"action": "Remove an Agent from Inbox (Admin)",
				"description": "Requires an administrator token. Remove an Agent from Inbox",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/inbox_members"
					}
				}
			}
		],
		"default": "Get Account Branded Email Layout"
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
					"Inboxes"
				],
				"operation": [
					"Get Account Branded Email Layout",
					"Update Account Branded Email Layout",
					"List All Inboxes",
					"Inbox Creation",
					"Get Inbox",
					"Update Inbox",
					"List Whatsapp Message Templates",
					"Get Inbox Agent Bot",
					"Update Agent Bot",
					"Get Inbox Members",
					"Add New Agent To Inbox",
					"Update Agents In Inbox",
					"Delete Agent In Inbox"
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
		"description": "ID of the inbox",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox",
					"Update Inbox",
					"Get Inbox Agent Bot",
					"Update Agent Bot"
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
		"description": "ID of the native or Twilio WhatsApp inbox",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"List Whatsapp Message Templates"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the Inbox",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox Members"
				]
			}
		}
	},
	{
		"displayName": "Agent Bot",
		"name": "agent_bot",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "Agent bot ID",
		"routing": {
			"send": {
				"type": "body",
				"property": "agent_bot"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"type": "body",
				"property": "inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Add New Agent To Inbox"
				]
			}
		}
	},
	{
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "IDs of users to be added to the inbox",
		"routing": {
			"send": {
				"type": "body",
				"property": "user_ids",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Add New Agent To Inbox",
					"Update Agents In Inbox"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "string",
		"default": "",
		"required": true,
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"type": "body",
				"property": "inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Agents In Inbox",
					"Delete Agent In Inbox"
				]
			}
		}
	},
	{
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "IDs of users to be deleted from the inbox",
		"routing": {
			"send": {
				"type": "body",
				"property": "user_ids",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Delete Agent In Inbox"
				]
			}
		}
	},
	{
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "",
		"description": "Exact template name to filter by",
		"routing": {
			"send": {
				"type": "query",
				"property": "name",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"List Whatsapp Message Templates"
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
					"Inboxes"
				],
				"operation": [
					"Update Account Branded Email Layout"
				]
			}
		},
		"options": [
			{
				"displayName": "Branded Email Layout",
				"name": "branded_email_layout",
				"type": "string",
				"default": "",
				"description": "Account-scoped Liquid HTML layout for branded email replies. Maximum length is 262,144 characters. Blank or null removes the account override.",
				"routing": {
					"send": {
						"type": "body",
						"property": "branded_email_layout"
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
					"Inboxes"
				],
				"operation": [
					"Inbox Creation"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Messages After Resolved",
				"name": "allow_messages_after_resolved",
				"type": "boolean",
				"default": false,
				"description": "Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "allow_messages_after_resolved"
					}
				}
			},
			{
				"displayName": "Avatar",
				"name": "avatar",
				"type": "string",
				"default": "",
				"description": "Image file for avatar.",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar"
					}
				}
			},
			{
				"displayName": "Business Name",
				"name": "business_name",
				"type": "string",
				"default": "",
				"description": "Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "business_name"
					}
				}
			},
			{
				"displayName": "Channel",
				"name": "channel",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "channel"
					}
				}
			},
			{
				"displayName": "Csat Config",
				"name": "csat_config",
				"type": "json",
				"default": "{}",
				"description": "CSAT survey configuration.",
				"routing": {
					"send": {
						"type": "body",
						"property": "csat_config",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Csat Survey Enabled",
				"name": "csat_survey_enabled",
				"type": "boolean",
				"default": false,
				"description": "Enable CSAT survey.",
				"routing": {
					"send": {
						"type": "body",
						"property": "csat_survey_enabled"
					}
				}
			},
			{
				"displayName": "Enable Auto Assignment",
				"name": "enable_auto_assignment",
				"type": "boolean",
				"default": false,
				"description": "Enable Auto Assignment.",
				"routing": {
					"send": {
						"type": "body",
						"property": "enable_auto_assignment"
					}
				}
			},
			{
				"displayName": "Enable Email Collect",
				"name": "enable_email_collect",
				"type": "boolean",
				"default": false,
				"description": "Enable email collection.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "enable_email_collect"
					}
				}
			},
			{
				"displayName": "Greeting Enabled",
				"name": "greeting_enabled",
				"type": "boolean",
				"default": false,
				"description": "Enable greeting message.",
				"routing": {
					"send": {
						"type": "body",
						"property": "greeting_enabled"
					}
				}
			},
			{
				"displayName": "Greeting Message",
				"name": "greeting_message",
				"type": "string",
				"default": "",
				"description": "Greeting message to send when greeting messages are enabled.",
				"routing": {
					"send": {
						"type": "body",
						"property": "greeting_message"
					}
				}
			},
			{
				"displayName": "Lock To Single Conversation",
				"name": "lock_to_single_conversation",
				"type": "boolean",
				"default": false,
				"description": "Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "lock_to_single_conversation"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the inbox.",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Out Of Office Message",
				"name": "out_of_office_message",
				"type": "string",
				"default": "",
				"description": "Out of office message to send outside working hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "out_of_office_message"
					}
				}
			},
			{
				"displayName": "Portal Id",
				"name": "portal_id",
				"type": "number",
				"default": 0,
				"description": "Id of the help center portal to attach to the inbox.",
				"routing": {
					"send": {
						"type": "body",
						"property": "portal_id"
					}
				}
			},
			{
				"displayName": "Sender Name Type",
				"name": "sender_name_type",
				"type": "options",
				"default": "friendly",
				"description": "Sender name type for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
				"options": [
					{
						"name": "friendly",
						"value": "friendly"
					},
					{
						"name": "professional",
						"value": "professional"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "sender_name_type"
					}
				}
			},
			{
				"displayName": "Timezone",
				"name": "timezone",
				"type": "string",
				"default": "",
				"description": "Timezone of the inbox.",
				"routing": {
					"send": {
						"type": "body",
						"property": "timezone"
					}
				}
			},
			{
				"displayName": "Working Hours Enabled",
				"name": "working_hours_enabled",
				"type": "boolean",
				"default": false,
				"description": "Enable working hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "working_hours_enabled"
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
					"Inboxes"
				],
				"operation": [
					"Update Inbox"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Messages After Resolved",
				"name": "allow_messages_after_resolved",
				"type": "boolean",
				"default": false,
				"description": "Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "allow_messages_after_resolved"
					}
				}
			},
			{
				"displayName": "Avatar",
				"name": "avatar",
				"type": "string",
				"default": "",
				"description": "Image file for avatar.",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar"
					}
				}
			},
			{
				"displayName": "Branded Email Layout",
				"name": "branded_email_layout",
				"type": "string",
				"default": "",
				"description": "Liquid HTML layout for outbound email replies. Must include `{{ content_for_layout }}` and be 262,144 characters or shorter.\n\nAvailable for: `Email`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "branded_email_layout"
					}
				}
			},
			{
				"displayName": "Business Name",
				"name": "business_name",
				"type": "string",
				"default": "",
				"description": "Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "business_name"
					}
				}
			},
			{
				"displayName": "Channel",
				"name": "channel",
				"type": "string",
				"default": "",
				"routing": {
					"send": {
						"type": "body",
						"property": "channel"
					}
				}
			},
			{
				"displayName": "Csat Config",
				"name": "csat_config",
				"type": "json",
				"default": "{}",
				"description": "CSAT survey configuration.",
				"routing": {
					"send": {
						"type": "body",
						"property": "csat_config",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Csat Survey Enabled",
				"name": "csat_survey_enabled",
				"type": "boolean",
				"default": false,
				"description": "Enable CSAT survey.",
				"routing": {
					"send": {
						"type": "body",
						"property": "csat_survey_enabled"
					}
				}
			},
			{
				"displayName": "Enable Auto Assignment",
				"name": "enable_auto_assignment",
				"type": "boolean",
				"default": false,
				"description": "Enable Auto Assignment.",
				"routing": {
					"send": {
						"type": "body",
						"property": "enable_auto_assignment"
					}
				}
			},
			{
				"displayName": "Enable Email Collect",
				"name": "enable_email_collect",
				"type": "boolean",
				"default": false,
				"description": "Enable email collection.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "enable_email_collect"
					}
				}
			},
			{
				"displayName": "Greeting Enabled",
				"name": "greeting_enabled",
				"type": "boolean",
				"default": false,
				"description": "Enable greeting message.",
				"routing": {
					"send": {
						"type": "body",
						"property": "greeting_enabled"
					}
				}
			},
			{
				"displayName": "Greeting Message",
				"name": "greeting_message",
				"type": "string",
				"default": "",
				"description": "Greeting message to send when greeting messages are enabled.",
				"routing": {
					"send": {
						"type": "body",
						"property": "greeting_message"
					}
				}
			},
			{
				"displayName": "Lock To Single Conversation",
				"name": "lock_to_single_conversation",
				"type": "boolean",
				"default": false,
				"description": "Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "lock_to_single_conversation"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the inbox.",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Out Of Office Message",
				"name": "out_of_office_message",
				"type": "string",
				"default": "",
				"description": "Out of office message to send outside working hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "out_of_office_message"
					}
				}
			},
			{
				"displayName": "Portal Id",
				"name": "portal_id",
				"type": "number",
				"default": 0,
				"description": "Id of the help center portal to attach to the inbox.",
				"routing": {
					"send": {
						"type": "body",
						"property": "portal_id"
					}
				}
			},
			{
				"displayName": "Sender Name Type",
				"name": "sender_name_type",
				"type": "options",
				"default": "friendly",
				"description": "Sender name type for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
				"options": [
					{
						"name": "friendly",
						"value": "friendly"
					},
					{
						"name": "professional",
						"value": "professional"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "sender_name_type"
					}
				}
			},
			{
				"displayName": "Timezone",
				"name": "timezone",
				"type": "string",
				"default": "",
				"description": "Timezone of the inbox.",
				"routing": {
					"send": {
						"type": "body",
						"property": "timezone"
					}
				}
			},
			{
				"displayName": "Working Hours Enabled",
				"name": "working_hours_enabled",
				"type": "boolean",
				"default": false,
				"description": "Enable working hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "working_hours_enabled"
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
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				]
			}
		},
		"options": [
			{
				"name": "List All Labels",
				"value": "List All Labels",
				"action": "List all labels",
				"description": "List all labels available in the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels"
					}
				}
			},
			{
				"name": "Create A Label",
				"value": "Create A Label",
				"action": "Create a label (Admin)",
				"description": "Requires an administrator token. Create a label in the account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels"
					}
				}
			},
			{
				"name": "Get Details Of A Single Label",
				"value": "Get Details Of A Single Label",
				"action": "Get a label",
				"description": "Get the details of a label in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update A Label",
				"value": "Update A Label",
				"action": "Update a label (Admin)",
				"description": "Requires an administrator token. Update a label's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete A Label",
				"value": "Delete A Label",
				"action": "Delete a label (Admin)",
				"description": "Requires an administrator token. Delete a label from the account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": "List All Labels"
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
					"Labels"
				],
				"operation": [
					"List All Labels",
					"Create A Label",
					"Get Details Of A Single Label",
					"Update A Label",
					"Delete A Label"
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
		"description": "ID of the label",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Details Of A Single Label",
					"Update A Label",
					"Delete A Label"
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
					"Labels"
				],
				"operation": [
					"Create A Label"
				]
			}
		},
		"options": [
			{
				"displayName": "Color",
				"name": "color",
				"type": "string",
				"default": "",
				"description": "Hex color code for the label",
				"routing": {
					"send": {
						"type": "body",
						"property": "color"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "A short description for the label",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Show On Sidebar",
				"name": "show_on_sidebar",
				"type": "boolean",
				"default": false,
				"description": "Whether the label should appear in the sidebar",
				"routing": {
					"send": {
						"type": "body",
						"property": "show_on_sidebar"
					}
				}
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"description": "The label title",
				"routing": {
					"send": {
						"type": "body",
						"property": "title"
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
					"Labels"
				],
				"operation": [
					"Update A Label"
				]
			}
		},
		"options": [
			{
				"displayName": "Color",
				"name": "color",
				"type": "string",
				"default": "",
				"description": "Hex color code for the label",
				"routing": {
					"send": {
						"type": "body",
						"property": "color"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "A short description for the label",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Show On Sidebar",
				"name": "show_on_sidebar",
				"type": "boolean",
				"default": false,
				"description": "Whether the label should appear in the sidebar",
				"routing": {
					"send": {
						"type": "body",
						"property": "show_on_sidebar"
					}
				}
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"description": "The label title",
				"routing": {
					"send": {
						"type": "body",
						"property": "title"
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
					"Messages"
				]
			}
		},
		"options": [
			{
				"name": "List All Messages",
				"value": "List All Messages",
				"action": "Get messages",
				"description": "List all messages of a conversation",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages"
					}
				}
			},
			{
				"name": "Create A New Message In A Conversation",
				"value": "Create A New Message In A Conversation",
				"action": "Create New Message",
				"description": "Create a new message in the conversation.\n\nUse `application/json` for text messages and `multipart/form-data` when the\nmessage includes file attachments.\n\n### Multipart attachment request\n\nSend files with the `attachments[]` form field. `curl -F` sets the\n`multipart/form-data` content type and boundary automatically.\n\n```bash\ncurl -X POST \"https://app.chatwoot.com/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages\" \\\n  -H \"Authorization: Bearer <your-api-token>\" \\\n  -F \"content=Here is the screenshot\" \\\n  -F \"message_type=outgoing\" \\\n  -F \"private=false\" \\\n  -F \"attachments[]=@/path/to/screenshot.png\"\n```\n\n## WhatsApp Template Messages\n\nFor WhatsApp channels, you can send structured template messages using the `template_params` field. \nTemplates must be pre-approved in WhatsApp Business Manager.\n\nBy default, `content` is treated as the already-rendered transcript text for\ncompatibility with existing API and mobile clients. To submit the original\ntemplate body instead, set `template_params.content_mode` to `raw_template`;\nChatwoot will substitute `processed_params.body` before saving the transcript.\n\n### Example Templates\n\n**Text with Image Header:**\n```json\n{\n  \"content\": \"Hi your order 121212 is confirmed. Please wait for further updates\",\n  \"template_params\": {\n    \"name\": \"order_confirmation\",\n    \"category\": \"MARKETING\",\n    \"language\": \"en\",\n    \"processed_params\": {\n      \"body\": {\n        \"1\": \"121212\"\n      },\n      \"header\": {\n        \"media_url\": \"https://picsum.photos/200/300\",\n        \"media_type\": \"image\"\n      }\n    }\n  }\n}\n```\n\n**Text with Copy Code Button:**\n```json\n{\n  \"content\": \"Special offer! Get 30% off your next purchase. Use the code below\",\n  \"template_params\": {\n    \"name\": \"discount_coupon\",\n    \"category\": \"MARKETING\",\n    \"language\": \"en\",\n    \"processed_params\": {\n      \"body\": {\n        \"discount_percentage\": \"30\"\n      },\n      \"buttons\": [{\n        \"type\": \"copy_code\",\n        \"parameter\": \"SAVE20\"\n      }]\n    }\n  }\n}\n```\n",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages"
					}
				}
			},
			{
				"name": "Update Message Status",
				"value": "Update Message Status",
				"action": "Update message status",
				"description": "Updates the delivery status of a single message. Available only for messages in\nAPI channel inboxes, where your own system is responsible for delivering messages\nand reporting what happened. Use this to push `sent`, `delivered`, and `read`\nreceipts into Chatwoot, for example, to mark an agent's message as read when the\nend user views it in your client, so the agent sees the read indicator on the\nmessage.\n\nA message already marked `read` cannot be moved back to `delivered`. When\nreporting a failure, include `external_error` with the reason, which is shown to\nthe agent along with the failed indicator.\n",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages/{{$parameter[\"message_id\"]}}"
					}
				}
			},
			{
				"name": "Delete A Message",
				"value": "Delete A Message",
				"action": "Delete a message",
				"description": "Delete a message and it's attachments from the conversation.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages/{{$parameter[\"message_id\"]}}"
					}
				}
			}
		],
		"default": "List All Messages"
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
					"Messages"
				],
				"operation": [
					"List All Messages",
					"Create A New Message In A Conversation",
					"Update Message Status",
					"Delete A Message"
				]
			}
		}
	},
	{
		"displayName": "Conversation Id",
		"name": "conversation_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the conversation",
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"List All Messages",
					"Create A New Message In A Conversation",
					"Update Message Status",
					"Delete A Message"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "message_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the message",
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"Update Message Status",
					"Delete A Message"
				]
			}
		}
	},
	{
		"displayName": "Content",
		"name": "content",
		"type": "string",
		"default": "",
		"required": true,
		"description": "The content of the message",
		"routing": {
			"send": {
				"type": "body",
				"property": "content"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"Create A New Message In A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Status",
		"name": "status",
		"type": "options",
		"default": "sent",
		"required": true,
		"description": "The new status of the message",
		"options": [
			{
				"name": "sent",
				"value": "sent"
			},
			{
				"name": "delivered",
				"value": "delivered"
			},
			{
				"name": "read",
				"value": "read"
			},
			{
				"name": "failed",
				"value": "failed"
			}
		],
		"routing": {
			"send": {
				"type": "body",
				"property": "status"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"Update Message Status"
				]
			}
		}
	},
	{
		"displayName": "After",
		"name": "after",
		"type": "number",
		"default": 0,
		"description": "Fetch messages after the message with this ID. Returns up to 100 messages in ascending order.",
		"routing": {
			"send": {
				"type": "query",
				"property": "after"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"List All Messages"
				]
			}
		}
	},
	{
		"displayName": "Before",
		"name": "before",
		"type": "number",
		"default": 0,
		"description": "Fetch messages before the message with this ID. Returns up to 20 messages in ascending order.",
		"routing": {
			"send": {
				"type": "query",
				"property": "before"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"List All Messages"
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
					"Messages"
				],
				"operation": [
					"Create A New Message In A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Campaign Id",
				"name": "campaign_id",
				"type": "number",
				"default": 0,
				"description": "The campaign id to which the message belongs",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign_id"
					}
				}
			},
			{
				"displayName": "Content Attributes",
				"name": "content_attributes",
				"type": "json",
				"default": "{}",
				"description": "Attributes based on the content type. For `input_select`, provide an `items` array with\n`title`, `value`, and optional `description`. WhatsApp list messages use `description`\nas the row subtitle when present.\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "content_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Content Type",
				"name": "content_type",
				"type": "options",
				"default": "text",
				"description": "Content type of the message",
				"options": [
					{
						"name": "text",
						"value": "text"
					},
					{
						"name": "input_email",
						"value": "input_email"
					},
					{
						"name": "cards",
						"value": "cards"
					},
					{
						"name": "input_select",
						"value": "input_select"
					},
					{
						"name": "form",
						"value": "form"
					},
					{
						"name": "article",
						"value": "article"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "content_type"
					}
				}
			},
			{
				"displayName": "Message Type",
				"name": "message_type",
				"type": "options",
				"default": "outgoing",
				"description": "The type of the message",
				"options": [
					{
						"name": "outgoing",
						"value": "outgoing"
					},
					{
						"name": "incoming",
						"value": "incoming"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "message_type"
					}
				}
			},
			{
				"displayName": "Private",
				"name": "private",
				"type": "boolean",
				"default": false,
				"description": "Flag to identify if it is a private note",
				"routing": {
					"send": {
						"type": "body",
						"property": "private"
					}
				}
			},
			{
				"displayName": "Template Params",
				"name": "template_params",
				"type": "json",
				"default": "{}",
				"description": "WhatsApp template parameters for sending structured messages",
				"routing": {
					"send": {
						"type": "body",
						"property": "template_params",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
					"Messages"
				],
				"operation": [
					"Update Message Status"
				]
			}
		},
		"options": [
			{
				"displayName": "External Error",
				"name": "external_error",
				"type": "string",
				"default": "",
				"description": "Error description, stored only when status is failed",
				"routing": {
					"send": {
						"type": "body",
						"property": "external_error"
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
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Reporting Events",
				"value": "Get Account Reporting Events",
				"action": "Account Reporting Events (Admin)",
				"description": "Requires an administrator token. Get paginated reporting events for the account. This endpoint returns reporting events such as first response time, resolution time, and other metrics. Only administrators can access this endpoint. Results are paginated with 25 items per page.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/reporting_events"
					}
				}
			},
			{
				"name": "List All Conversation Statistics",
				"value": "List All Conversation Statistics",
				"action": "Get Account reports (Admin)",
				"description": "Requires an administrator token. Get Account reports for a specific type, metric and date range",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports"
					}
				}
			},
			{
				"name": "List All Conversation Statistics Summary",
				"value": "List All Conversation Statistics Summary",
				"action": "Get Account reports summary (Admin)",
				"description": "Requires an administrator token. Get Account reports summary for a specific type and date range",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/summary"
					}
				}
			},
			{
				"name": "Get Account Conversation Metrics",
				"value": "Get Account Conversation Metrics",
				"action": "Account Conversation Metrics (Admin)",
				"description": "Requires an administrator token. Get conversation metrics for Account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/conversations"
					}
				}
			},
			{
				"name": "Get Agent Conversation Metrics",
				"value": "Get Agent Conversation Metrics",
				"action": "Agent Conversation Metrics (Admin)",
				"description": "Requires an administrator token. Get conversation metrics for Agent",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/conversations/"
					}
				}
			},
			{
				"name": "Get Channel Summary Report",
				"value": "Get Channel Summary Report",
				"action": "Get conversation statistics grouped by channel type (Admin)",
				"description": "Requires an administrator token. Get conversation counts grouped by channel type and status for a given date range.\nReturns statistics for each channel type including open, resolved, pending, snoozed, and total conversation counts.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.10.0 and above. The date range is limited to a maximum of 6 months.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/channel"
					}
				}
			},
			{
				"name": "Get Inbox Summary Report",
				"value": "Get Inbox Summary Report",
				"action": "Get conversation statistics grouped by inbox (Admin)",
				"description": "Requires an administrator token. Get conversation statistics grouped by inbox for a given date range.\nReturns metrics for each inbox including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/inbox"
					}
				}
			},
			{
				"name": "Get Agent Summary Report",
				"value": "Get Agent Summary Report",
				"action": "Get conversation statistics grouped by agent (Admin)",
				"description": "Requires an administrator token. Get conversation statistics grouped by agent for a given date range.\nReturns metrics for each agent including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/agent"
					}
				}
			},
			{
				"name": "Get Team Summary Report",
				"value": "Get Team Summary Report",
				"action": "Get conversation statistics grouped by team (Admin)",
				"description": "Requires an administrator token. Get conversation statistics grouped by team for a given date range.\nReturns metrics for each team including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/team"
					}
				}
			},
			{
				"name": "Get First Response Time Distribution",
				"value": "Get First Response Time Distribution",
				"action": "Get first response time distribution by channel (Admin)",
				"description": "Requires an administrator token. Get the distribution of first response times grouped by channel type.\nReturns conversation counts in different time buckets (0-1h, 1-4h, 4-8h, 8-24h, 24h+) for each channel type.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/first_response_time_distribution"
					}
				}
			},
			{
				"name": "Get Inbox Label Matrix",
				"value": "Get Inbox Label Matrix",
				"action": "Get inbox-label matrix report (Admin)",
				"description": "Requires an administrator token. Get a matrix showing the count of conversations for each inbox-label combination.\nReturns a list of inboxes, labels, and a 2D matrix where each cell contains the count of conversations\nin a specific inbox that have a specific label applied.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/inbox_label_matrix"
					}
				}
			},
			{
				"name": "Get Outgoing Messages Count",
				"value": "Get Outgoing Messages Count",
				"action": "Get outgoing messages count grouped by entity (Admin)",
				"description": "Requires an administrator token. Get the count of outgoing messages grouped by a specified entity (agent, team, inbox, or label).\nWhen grouped by agent, messages sent by bots (AgentBot, Captain::Assistant) are excluded.\n\n**Note:** This API endpoint is available only in Chatwoot version 4.11.0 and above.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/reports/outgoing_messages_count"
					}
				}
			}
		],
		"default": "Get Account Reporting Events"
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
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events",
					"List All Conversation Statistics",
					"List All Conversation Statistics Summary",
					"Get Account Conversation Metrics",
					"Get Agent Conversation Metrics",
					"Get Channel Summary Report",
					"Get Inbox Summary Report",
					"Get Agent Summary Report",
					"Get Team Summary Report",
					"Get First Response Time Distribution",
					"Get Inbox Label Matrix",
					"Get Outgoing Messages Count"
				]
			}
		}
	},
	{
		"displayName": "Metric",
		"name": "metric",
		"type": "options",
		"default": "conversations_count",
		"required": true,
		"description": "The type of metric",
		"options": [
			{
				"name": "conversations_count",
				"value": "conversations_count"
			},
			{
				"name": "incoming_messages_count",
				"value": "incoming_messages_count"
			},
			{
				"name": "outgoing_messages_count",
				"value": "outgoing_messages_count"
			},
			{
				"name": "avg_first_response_time",
				"value": "avg_first_response_time"
			},
			{
				"name": "avg_resolution_time",
				"value": "avg_resolution_time"
			},
			{
				"name": "resolutions_count",
				"value": "resolutions_count"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "metric"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics"
				]
			}
		}
	},
	{
		"displayName": "Type",
		"name": "type",
		"type": "options",
		"default": "account",
		"required": true,
		"description": "Type of report",
		"options": [
			{
				"name": "account",
				"value": "account"
			},
			{
				"name": "agent",
				"value": "agent"
			},
			{
				"name": "inbox",
				"value": "inbox"
			},
			{
				"name": "label",
				"value": "label"
			},
			{
				"name": "team",
				"value": "team"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "type"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics",
					"List All Conversation Statistics Summary"
				]
			}
		}
	},
	{
		"displayName": "Type",
		"name": "type",
		"type": "options",
		"default": "account",
		"required": true,
		"description": "Type of report",
		"options": [
			{
				"name": "account",
				"value": "account"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "type"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Account Conversation Metrics"
				]
			}
		}
	},
	{
		"displayName": "Type",
		"name": "type",
		"type": "options",
		"default": "agent",
		"required": true,
		"description": "Type of report",
		"options": [
			{
				"name": "agent",
				"value": "agent"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "type"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Agent Conversation Metrics"
				]
			}
		}
	},
	{
		"displayName": "Group By",
		"name": "group_by",
		"type": "options",
		"default": "agent",
		"required": true,
		"description": "The entity to group outgoing message counts by.",
		"options": [
			{
				"name": "agent",
				"value": "agent"
			},
			{
				"name": "team",
				"value": "team"
			},
			{
				"name": "inbox",
				"value": "inbox"
			},
			{
				"name": "label",
				"value": "label"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "group_by"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Outgoing Messages Count"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"type": "number",
		"default": 1,
		"description": "The page parameter",
		"routing": {
			"send": {
				"type": "query",
				"property": "page"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "Since",
		"name": "since",
		"type": "string",
		"default": "",
		"description": "The timestamp from where events should start (Unix timestamp in seconds)",
		"routing": {
			"send": {
				"type": "query",
				"property": "since",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "Until",
		"name": "until",
		"type": "string",
		"default": "",
		"description": "The timestamp from where events should stop (Unix timestamp in seconds)",
		"routing": {
			"send": {
				"type": "query",
				"property": "until",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"description": "Filter events by inbox ID",
		"routing": {
			"send": {
				"type": "query",
				"property": "inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "User Id",
		"name": "user_id",
		"type": "number",
		"default": 0,
		"description": "Filter events by user/agent ID",
		"routing": {
			"send": {
				"type": "query",
				"property": "user_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "",
		"description": "Filter events by event name (e.g., first_response, resolution, reply_time)",
		"routing": {
			"send": {
				"type": "query",
				"property": "name",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"type": "string",
		"default": "",
		"description": "The Id of specific object in case of agent/inbox/label",
		"routing": {
			"send": {
				"type": "query",
				"property": "id",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics",
					"List All Conversation Statistics Summary"
				]
			}
		}
	},
	{
		"displayName": "Since",
		"name": "since",
		"type": "string",
		"default": "",
		"description": "The timestamp from where report should start.",
		"routing": {
			"send": {
				"type": "query",
				"property": "since",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics",
					"List All Conversation Statistics Summary"
				]
			}
		}
	},
	{
		"displayName": "Until",
		"name": "until",
		"type": "string",
		"default": "",
		"description": "The timestamp from where report should stop.",
		"routing": {
			"send": {
				"type": "query",
				"property": "until",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics",
					"List All Conversation Statistics Summary"
				]
			}
		}
	},
	{
		"displayName": "User Id",
		"name": "user_id",
		"type": "string",
		"default": "",
		"description": "The numeric ID of the user",
		"routing": {
			"send": {
				"type": "query",
				"property": "user_id",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Agent Conversation Metrics"
				]
			}
		}
	},
	{
		"displayName": "Since",
		"name": "since",
		"type": "string",
		"default": "",
		"description": "The timestamp from where report should start (Unix timestamp).",
		"routing": {
			"send": {
				"type": "query",
				"property": "since",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Channel Summary Report",
					"Get Inbox Summary Report",
					"Get Agent Summary Report",
					"Get Team Summary Report",
					"Get First Response Time Distribution",
					"Get Inbox Label Matrix",
					"Get Outgoing Messages Count"
				]
			}
		}
	},
	{
		"displayName": "Until",
		"name": "until",
		"type": "string",
		"default": "",
		"description": "The timestamp from where report should stop (Unix timestamp).",
		"routing": {
			"send": {
				"type": "query",
				"property": "until",
				"value": "={{ $value === '' ? undefined : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Channel Summary Report",
					"Get Inbox Summary Report",
					"Get Agent Summary Report",
					"Get Team Summary Report",
					"Get First Response Time Distribution",
					"Get Inbox Label Matrix",
					"Get Outgoing Messages Count"
				]
			}
		}
	},
	{
		"displayName": "Business Hours",
		"name": "business_hours",
		"type": "boolean",
		"default": false,
		"description": "Whether to calculate metrics using business hours only.",
		"routing": {
			"send": {
				"type": "query",
				"property": "business_hours"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Inbox Summary Report",
					"Get Agent Summary Report",
					"Get Team Summary Report"
				]
			}
		}
	},
	{
		"displayName": "Inbox Ids",
		"name": "inbox_ids",
		"type": "string",
		"default": "",
		"description": "Filter by specific inbox IDs.",
		"routing": {
			"send": {
				"type": "query",
				"property": "inbox_ids",
				"value": "={{ $value === '' ? undefined : $value.split(',').map((item) => item.trim()) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Inbox Label Matrix"
				]
			}
		}
	},
	{
		"displayName": "Label Ids",
		"name": "label_ids",
		"type": "string",
		"default": "",
		"description": "Filter by specific label IDs.",
		"routing": {
			"send": {
				"type": "query",
				"property": "label_ids",
				"value": "={{ $value === '' ? undefined : $value.split(',').map((item) => item.trim()) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Inbox Label Matrix"
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
					"Teams"
				]
			}
		},
		"options": [
			{
				"name": "List All Teams",
				"value": "List All Teams",
				"action": "List all teams",
				"description": "List all teams available in the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams"
					}
				}
			},
			{
				"name": "Create A Team",
				"value": "Create A Team",
				"action": "Create a team (Admin)",
				"description": "Requires an administrator token. Create a team in the account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams"
					}
				}
			},
			{
				"name": "Get Details Of A Single Team",
				"value": "Get Details Of A Single Team",
				"action": "Get a team details",
				"description": "Get the details of a team in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
					}
				}
			},
			{
				"name": "Update A Team",
				"value": "Update A Team",
				"action": "Update a team (Admin)",
				"description": "Requires an administrator token. Update a team's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
					}
				}
			},
			{
				"name": "Delete A Team",
				"value": "Delete A Team",
				"action": "Delete a team (Admin)",
				"description": "Requires an administrator token. Delete a team from the account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
					}
				}
			},
			{
				"name": "Get Team Members",
				"value": "Get Team Members",
				"action": "List Agents in Team",
				"description": "Get Details of Agents in an Team",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
					}
				}
			},
			{
				"name": "Add New Agent To Team",
				"value": "Add New Agent To Team",
				"action": "Add a New Agent (Admin)",
				"description": "Requires an administrator token. Add a new Agent to Team",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
					}
				}
			},
			{
				"name": "Update Agents In Team",
				"value": "Update Agents In Team",
				"action": "Update Agents in Team (Admin)",
				"description": "Requires an administrator token. All agents except the one passed in params will be removed",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
					}
				}
			},
			{
				"name": "Delete Agent In Team",
				"value": "Delete Agent In Team",
				"action": "Remove an Agent from Team (Admin)",
				"description": "Requires an administrator token. Remove an Agent from Team",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
					}
				}
			}
		],
		"default": "List All Teams"
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
					"Teams"
				],
				"operation": [
					"List All Teams",
					"Create A Team",
					"Get Details Of A Single Team",
					"Update A Team",
					"Delete A Team",
					"Get Team Members",
					"Add New Agent To Team",
					"Update Agents In Team",
					"Delete Agent In Team"
				]
			}
		}
	},
	{
		"displayName": "Team Id",
		"name": "team_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the team to be updated",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Get Details Of A Single Team",
					"Update A Team",
					"Delete A Team",
					"Get Team Members",
					"Add New Agent To Team",
					"Update Agents In Team",
					"Delete Agent In Team"
				]
			}
		}
	},
	{
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "IDs of users to be added to the team",
		"routing": {
			"send": {
				"type": "body",
				"property": "user_ids",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Add New Agent To Team",
					"Update Agents In Team"
				]
			}
		}
	},
	{
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "IDs of users to be deleted from the team",
		"routing": {
			"send": {
				"type": "body",
				"property": "user_ids",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Delete Agent In Team"
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
					"Teams"
				],
				"operation": [
					"Create A Team"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Auto Assign",
				"name": "allow_auto_assign",
				"type": "boolean",
				"default": false,
				"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
				"routing": {
					"send": {
						"type": "body",
						"property": "allow_auto_assign"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description of the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Icon",
				"name": "icon",
				"type": "string",
				"default": "",
				"description": "An emoji or icon shown next to the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon"
					}
				}
			},
			{
				"displayName": "Icon Color",
				"name": "icon_color",
				"type": "string",
				"default": "",
				"description": "The color used for the team icon",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon_color"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
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
					"Teams"
				],
				"operation": [
					"Update A Team"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Auto Assign",
				"name": "allow_auto_assign",
				"type": "boolean",
				"default": false,
				"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
				"routing": {
					"send": {
						"type": "body",
						"property": "allow_auto_assign"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description of the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Icon",
				"name": "icon",
				"type": "string",
				"default": "",
				"description": "An emoji or icon shown next to the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon"
					}
				}
			},
			{
				"displayName": "Icon Color",
				"name": "icon_color",
				"type": "string",
				"default": "",
				"description": "The color used for the team icon",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon_color"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
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
