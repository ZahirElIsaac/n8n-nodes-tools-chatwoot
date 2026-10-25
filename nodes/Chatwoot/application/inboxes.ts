import type { INodeProperties } from 'n8n-workflow';

export const inboxes: INodeProperties[] = [
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/branded_email_layout"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/branded_email_layout"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inboxes"
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
				"name": "Inbox Creation",
				"value": "Inbox Creation",
				"action": "Create an inbox (Admin)",
				"description": "Requires an administrator token. You can create more than one website inbox in each account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inboxes"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inboxes/{{ encodeURIComponent($parameter[\"id\"]) }}"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inboxes/{{ encodeURIComponent($parameter[\"id\"]) }}"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inboxes/{{ encodeURIComponent($parameter[\"id\"]) }}/message_templates"
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
				"name": "Get Inbox Agent Bot",
				"value": "Get Inbox Agent Bot",
				"action": "Show Inbox Agent Bot",
				"description": "See if an agent bot is associated to the Inbox",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inboxes/{{ encodeURIComponent($parameter[\"id\"]) }}/agent_bot"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inboxes/{{ encodeURIComponent($parameter[\"id\"]) }}/set_agent_bot"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inbox_members/{{ encodeURIComponent($parameter[\"inbox_id\"]) }}"
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
				"name": "Add New Agent To Inbox",
				"value": "Add New Agent To Inbox",
				"action": "Add a New Agent (Admin)",
				"description": "Requires an administrator token. Add a new Agent to Inbox",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inbox_members"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inbox_members"
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/inbox_members"
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
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": true,
		"description": "Whether to return all results or only up to a given limit",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"List All Inboxes",
					"List Whatsapp Message Templates",
					"Get Inbox Members"
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
					"Inboxes"
				],
				"operation": [
					"List All Inboxes",
					"List Whatsapp Message Templates",
					"Get Inbox Members"
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
		"displayName": "Filters",
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
					"List Whatsapp Message Templates"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "Exact template name to filter by",
				"routing": {
					"send": {
						"type": "query",
						"property": "name"
					}
				}
			}
		]
	}
];
