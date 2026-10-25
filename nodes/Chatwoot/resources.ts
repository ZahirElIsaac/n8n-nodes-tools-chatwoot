import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties[] = [
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
				"name": "Audit Logs",
				"value": "Audit Logs",
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
				"name": "Contacts",
				"value": "Contacts",
				"description": "Contact management APIs"
			},
			{
				"name": "Contact Labels",
				"value": "Contact Labels",
				"description": "Manage contact labels"
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
			},
			{
				"name": "Automation Rule",
				"value": "Automation Rule",
				"description": "Workflow automation rules"
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
		"default": ""
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account"
				],
				"operation": [
					"Get Account Details"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Account"
				],
				"operation": [
					"Get Account Details"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account"
				],
				"operation": [
					"Update Account"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Account"
				],
				"operation": [
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
				"default": 1440,
				"description": "Auto resolve conversations after specified minutes",
				"routing": {
					"send": {
						"property": "auto_resolve_after",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "auto_resolve_ignore_waiting",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Auto Resolve Message",
				"name": "auto_resolve_message",
				"type": "string",
				"default": "This conversation has been automatically resolved due to inactivity",
				"description": "Message to send when auto resolving",
				"routing": {
					"send": {
						"property": "auto_resolve_message",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Company Size",
				"name": "company_size",
				"type": "string",
				"default": "50-100",
				"description": "Company size",
				"routing": {
					"send": {
						"property": "company_size",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
				"displayName": "Industry",
				"name": "industry",
				"type": "string",
				"default": "Technology",
				"description": "Industry type",
				"routing": {
					"send": {
						"property": "industry",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
			},
			{
				"displayName": "Timezone",
				"name": "timezone",
				"type": "string",
				"default": "UTC",
				"description": "Account timezone",
				"routing": {
					"send": {
						"property": "timezone",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/audit_logs",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"description": "Page number for pagination",
		"default": 1,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Filter entries by the name or email of the user who performed the action",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "q",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
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
		"description": "Filter entries by the type of the audited record",
		"default": "[\n  \"Inbox\"\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "types",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Only return entries created at or after this unix timestamp",
		"default": 1755388800,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "since",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Only return entries created at or before this unix timestamp",
		"default": 1755993599,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "until",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Order of the entries by creation time",
		"default": "desc",
		"type": "options",
		"options": [
			{
				"name": "Desc",
				"value": "desc"
			},
			{
				"name": "Asc",
				"value": "asc"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sort",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "GET /api/v1/accounts/{account_id}/agent_bots",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				],
				"operation": [
					"List All Account Agent Bots"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/agent_bots",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				],
				"operation": [
					"Create An Account Agent Bot"
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
				"displayName": "Bot Config",
				"name": "bot_config",
				"type": "json",
				"default": "{}",
				"description": "The configuration for the bot",
				"routing": {
					"send": {
						"property": "bot_config",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
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
						"property": "bot_type",
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
		"displayName": "GET /api/v1/accounts/{account_id}/agent_bots/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				],
				"operation": [
					"Get Details Of A Single Account Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/agent_bots/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				],
				"operation": [
					"Update An Account Agent Bot"
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
				"displayName": "Bot Config",
				"name": "bot_config",
				"type": "json",
				"default": "{}",
				"description": "The configuration for the bot",
				"routing": {
					"send": {
						"property": "bot_config",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
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
						"property": "bot_type",
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
		"displayName": "DELETE /api/v1/accounts/{account_id}/agent_bots/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Account Agent Bots"
				],
				"operation": [
					"Delete An Account Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/agents",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Agents"
				],
				"operation": [
					"Get Account Agents"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/agents",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Name",
		"name": "name",
		"type": "string",
		"default": "John Doe",
		"description": "Full Name of the agent",
		"routing": {
			"send": {
				"property": "name",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"required": true,
		"displayName": "Email",
		"name": "email",
		"type": "string",
		"default": "john.doe@acme.inc",
		"description": "Email of the Agent",
		"routing": {
			"send": {
				"property": "email",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"required": true,
		"displayName": "Role",
		"name": "role",
		"type": "options",
		"default": "agent",
		"description": "Whether its administrator or agent",
		"options": [
			{
				"name": "Agent",
				"value": "agent"
			},
			{
				"name": "Administrator",
				"value": "administrator"
			}
		],
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
					"Agents"
				],
				"operation": [
					"Add New Agent To Account"
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
				"default": true,
				"description": "Whether the agent is automatically marked offline when they are away.",
				"routing": {
					"send": {
						"property": "auto_offline",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"name": "Online",
						"value": "online"
					},
					{
						"name": "Busy",
						"value": "busy"
					},
					{
						"name": "Offline",
						"value": "offline"
					}
				],
				"routing": {
					"send": {
						"property": "availability",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/agents/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"description": "The ID of the agent to be updated.",
		"default": 0,
		"type": "number",
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
		"required": true,
		"displayName": "Role",
		"name": "role",
		"type": "options",
		"default": "agent",
		"description": "Whether its administrator or agent",
		"options": [
			{
				"name": "Agent",
				"value": "agent"
			},
			{
				"name": "Administrator",
				"value": "administrator"
			}
		],
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
					"Agents"
				],
				"operation": [
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
					"Update Agent In Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Auto Offline",
				"name": "auto_offline",
				"type": "boolean",
				"default": true,
				"description": "Whether the agent is automatically marked offline when they are away.",
				"routing": {
					"send": {
						"property": "auto_offline",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"name": "Online",
						"value": "online"
					},
					{
						"name": "Busy",
						"value": "busy"
					},
					{
						"name": "Offline",
						"value": "offline"
					}
				],
				"routing": {
					"send": {
						"property": "availability",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/agents/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the agent to be deleted.",
		"default": 0,
		"type": "number",
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
		"displayName": "GET /api/v1/accounts/{account_id}/canned_responses",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Canned Responses"
				],
				"operation": [
					"Get Account Canned Response"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/canned_responses",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Canned Responses"
				],
				"operation": [
					"Add New Canned Response To Account"
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
				"default": "Hello, {{contact.name}}! Welcome to our service.",
				"description": "Message content for canned response",
				"routing": {
					"send": {
						"property": "content",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Short Code",
				"name": "short_code",
				"type": "string",
				"default": "welcome",
				"description": "Short Code for quick access of the canned response",
				"routing": {
					"send": {
						"property": "short_code",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/canned_responses/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"description": "The ID of the canned response to be updated.",
		"default": 0,
		"type": "number",
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
				"default": "Hello, {{contact.name}}! Welcome to our service.",
				"description": "Message content for canned response",
				"routing": {
					"send": {
						"property": "content",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Short Code",
				"name": "short_code",
				"type": "string",
				"default": "welcome",
				"description": "Short Code for quick access of the canned response",
				"routing": {
					"send": {
						"property": "short_code",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/canned_responses/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the canned response to be deleted",
		"default": 0,
		"type": "number",
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
		"displayName": "GET /api/v1/accounts/{account_id}/custom_attribute_definitions",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Attribute Model",
		"name": "attribute_model",
		"required": true,
		"description": "conversation_attribute(0)/contact_attribute(1)",
		"default": "0",
		"type": "options",
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
				"property": "attribute_model",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "POST /api/v1/accounts/{account_id}/custom_attribute_definitions",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Add New Custom Attribute To Account"
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
				"default": "This is a custom attribute",
				"description": "Attribute description",
				"routing": {
					"send": {
						"property": "attribute_description",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Attribute Display Name",
				"name": "attribute_display_name",
				"type": "string",
				"default": "Custom Attribute",
				"description": "Attribute display name",
				"routing": {
					"send": {
						"property": "attribute_display_name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "attribute_display_type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Attribute Key",
				"name": "attribute_key",
				"type": "string",
				"default": "custom_attribute",
				"description": "Attribute unique key value",
				"routing": {
					"send": {
						"property": "attribute_key",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "attribute_model",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Attribute Values",
				"name": "attribute_values",
				"type": "json",
				"default": "[\n  \"value1\",\n  \"value2\"\n]",
				"description": "Attribute values",
				"routing": {
					"send": {
						"property": "attribute_values",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Regex Cue",
				"name": "regex_cue",
				"type": "string",
				"default": "Please enter a valid value",
				"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
				"routing": {
					"send": {
						"property": "regex_cue",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Regex Pattern",
				"name": "regex_pattern",
				"type": "string",
				"default": "^[a-zA-Z0-9]+$",
				"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
				"routing": {
					"send": {
						"property": "regex_pattern",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Get Details Of A Single Custom Attribute"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Get Details Of A Single Custom Attribute"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the custom attribute to be updated.",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Get Details Of A Single Custom Attribute"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Update Custom Attribute In Account"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the custom attribute to be updated.",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Update Custom Attribute In Account"
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
					"Update Custom Attribute In Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Attribute Description",
				"name": "attribute_description",
				"type": "string",
				"default": "This is a custom attribute",
				"description": "Attribute description",
				"routing": {
					"send": {
						"property": "attribute_description",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Attribute Display Name",
				"name": "attribute_display_name",
				"type": "string",
				"default": "Custom Attribute",
				"description": "Attribute display name",
				"routing": {
					"send": {
						"property": "attribute_display_name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "attribute_display_type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Attribute Key",
				"name": "attribute_key",
				"type": "string",
				"default": "custom_attribute",
				"description": "Attribute unique key value",
				"routing": {
					"send": {
						"property": "attribute_key",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "attribute_model",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Attribute Values",
				"name": "attribute_values",
				"type": "json",
				"default": "[\n  \"value1\",\n  \"value2\"\n]",
				"description": "Attribute values",
				"routing": {
					"send": {
						"property": "attribute_values",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Regex Cue",
				"name": "regex_cue",
				"type": "string",
				"default": "Please enter a valid value",
				"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
				"routing": {
					"send": {
						"property": "regex_cue",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Regex Pattern",
				"name": "regex_pattern",
				"type": "string",
				"default": "^[a-zA-Z0-9]+$",
				"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
				"routing": {
					"send": {
						"property": "regex_pattern",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the custom attribute to be deleted",
		"default": 0,
		"type": "number",
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
		"displayName": "GET /api/v1/accounts/{account_id}/contacts",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact List"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact List"
				]
			}
		}
	},
	{
		"displayName": "Sort",
		"name": "sort",
		"description": "The attribute by which list should be sorted",
		"default": "name",
		"type": "options",
		"options": [
			{
				"name": "Name",
				"value": "name"
			},
			{
				"name": "Email",
				"value": "email"
			},
			{
				"name": "Phone Number",
				"value": "phone_number"
			},
			{
				"name": "Last Activity At",
				"value": "last_activity_at"
			},
			{
				"name": "Name",
				"value": "-name"
			},
			{
				"name": "Email",
				"value": "-email"
			},
			{
				"name": "Phone Number",
				"value": "-phone_number"
			},
			{
				"name": "Last Activity At",
				"value": "-last_activity_at"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sort",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact List"
				]
			}
		}
	},
	{
		"displayName": "Page",
		"name": "page",
		"description": "The page parameter",
		"default": 1,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact List"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/contacts",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"required": true,
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 1,
		"description": "ID of the inbox to which the contact belongs",
		"routing": {
			"send": {
				"property": "inbox_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
				"default": "{\n  \"type\": \"customer\",\n  \"age\": 30\n}",
				"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
				"routing": {
					"send": {
						"property": "additional_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
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
				"description": "The url to a jpeg, png file for the contact avatar",
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
				"displayName": "Blocked",
				"name": "blocked",
				"type": "boolean",
				"default": false,
				"description": "whether the contact is blocked or not",
				"routing": {
					"send": {
						"property": "blocked",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "custom_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "alice@acme.inc",
				"description": "email of the contact",
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
				"displayName": "Identifier",
				"name": "identifier",
				"type": "string",
				"default": "1234567890",
				"description": "A unique identifier for the contact in external system",
				"routing": {
					"send": {
						"property": "identifier",
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
				"default": "Alice",
				"description": "name of the contact",
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
				"displayName": "Phone Number",
				"name": "phone_number",
				"type": "string",
				"default": "+123456789",
				"description": "phone number of the contact",
				"routing": {
					"send": {
						"property": "phone_number",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Details"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/v1/accounts/{account_id}/contacts/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Update"
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
					"Contact Update"
				]
			}
		},
		"options": [
			{
				"displayName": "Additional Attributes",
				"name": "additional_attributes",
				"type": "json",
				"default": "{\n  \"type\": \"customer\",\n  \"age\": 30\n}",
				"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
				"routing": {
					"send": {
						"property": "additional_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
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
				"description": "The url to a jpeg, png file for the contact avatar",
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
				"displayName": "Blocked",
				"name": "blocked",
				"type": "boolean",
				"default": false,
				"description": "whether the contact is blocked or not",
				"routing": {
					"send": {
						"property": "blocked",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "custom_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "alice@acme.inc",
				"description": "email of the contact",
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
				"displayName": "Identifier",
				"name": "identifier",
				"type": "string",
				"default": "1234567890",
				"description": "A unique identifier for the contact in external system",
				"routing": {
					"send": {
						"property": "identifier",
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
				"default": "Alice",
				"description": "name of the contact",
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
				"displayName": "Phone Number",
				"name": "phone_number",
				"type": "string",
				"default": "+123456789",
				"description": "phone number of the contact",
				"routing": {
					"send": {
						"property": "phone_number",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/contacts/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Delete"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}/conversations",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Conversations"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the contact",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contact Conversations"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contact Labels"
				],
				"operation": [
					"List All Labels Of A Contact"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/contacts/{id}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Labels",
		"name": "labels",
		"type": "json",
		"default": "[\n  \"support\",\n  \"billing\"\n]",
		"description": "Array of labels (comma-separated strings)",
		"routing": {
			"send": {
				"property": "labels",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
		"displayName": "GET /api/v1/accounts/{account_id}/contacts/search",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"displayName": "Q",
		"name": "q",
		"description": "Search using contact `name`, `identifier`, `email` or `phone number`",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "q",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
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
		"displayName": "Sort",
		"name": "sort",
		"description": "The attribute by which list should be sorted",
		"default": "name",
		"type": "options",
		"options": [
			{
				"name": "Name",
				"value": "name"
			},
			{
				"name": "Email",
				"value": "email"
			},
			{
				"name": "Phone Number",
				"value": "phone_number"
			},
			{
				"name": "Last Activity At",
				"value": "last_activity_at"
			},
			{
				"name": "Name",
				"value": "-name"
			},
			{
				"name": "Email",
				"value": "-email"
			},
			{
				"name": "Phone Number",
				"value": "-phone_number"
			},
			{
				"name": "Last Activity At",
				"value": "-last_activity_at"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sort",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "The page parameter",
		"default": 1,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "POST /api/v1/accounts/{account_id}/contacts/filter",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"displayName": "Page",
		"name": "page",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
					"Contact Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Payload",
				"name": "payload",
				"type": "json",
				"default": "[\n  {\n    \"attribute_key\": \"name\",\n    \"filter_operator\": \"equal_to\",\n    \"values\": [\n      \"en\"\n    ],\n    \"query_operator\": \"AND\"\n  },\n  {\n    \"attribute_key\": \"country_code\",\n    \"filter_operator\": \"equal_to\",\n    \"values\": [\n      \"us\"\n    ],\n    \"query_operator\": null\n  }\n]",
				"routing": {
					"send": {
						"property": "payload",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			}
		]
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the contact",
		"default": 0,
		"type": "number",
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
		"required": true,
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 1,
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"property": "inbox_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
						"property": "source_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contactable Inboxes Get"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contactable Inboxes Get"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the contact",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Contacts"
				],
				"operation": [
					"Contactable Inboxes Get"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/actions/contact_merge",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Base Contact Id",
		"name": "base_contact_id",
		"type": "number",
		"default": 1,
		"description": "ID of the contact that will remain after the merge and receive all data",
		"routing": {
			"send": {
				"property": "base_contact_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"required": true,
		"displayName": "Mergee Contact Id",
		"name": "mergee_contact_id",
		"type": "number",
		"default": 2,
		"description": "ID of the contact that will be merged into the base contact and deleted",
		"routing": {
			"send": {
				"property": "mergee_contact_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"displayName": "GET /api/v1/accounts/{account_id}/automation_rules",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"displayName": "Page",
		"name": "page",
		"description": "The page parameter",
		"default": 1,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "POST /api/v1/accounts/{account_id}/automation_rules",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Add New Automation Rule To Account"
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
				"default": "[\n  {\n    \"action_name\": \"add_label\",\n    \"action_params\": [\n      \"support\"\n    ]\n  }\n]",
				"description": "Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.",
				"routing": {
					"send": {
						"property": "actions",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Active",
				"name": "active",
				"type": "boolean",
				"default": true,
				"description": "Enable/disable automation rule",
				"routing": {
					"send": {
						"property": "active",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Conditions",
				"name": "conditions",
				"type": "json",
				"default": "[\n  {\n    \"attribute_key\": \"content\",\n    \"filter_operator\": \"contains\",\n    \"query_operator\": \"OR\",\n    \"values\": [\n      \"help\"\n    ]\n  }\n]",
				"description": "Array of conditions on which conversation filter would work, e.g message content contains text help.",
				"routing": {
					"send": {
						"property": "conditions",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "Add label support and sales on message create event if incoming message content contains text help",
				"description": "The description about the automation and actions",
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
				"displayName": "Event Name",
				"name": "event_name",
				"type": "options",
				"default": "message_created",
				"description": "The event when you want to execute the automation actions",
				"options": [
					{
						"name": "Conversation Created",
						"value": "conversation_created"
					},
					{
						"name": "Conversation Updated",
						"value": "conversation_updated"
					},
					{
						"name": "Conversation Resolved",
						"value": "conversation_resolved"
					},
					{
						"name": "Message Created",
						"value": "message_created"
					}
				],
				"routing": {
					"send": {
						"property": "event_name",
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
				"default": "Add label on message create event",
				"description": "Rule name",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/automation_rules/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Get Details Of A Single Automation Rule"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the automation rule to be updated.",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Get Details Of A Single Automation Rule"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/automation_rules/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Update Automation Rule In Account"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the automation rule to be updated.",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Automation Rule"
				],
				"operation": [
					"Update Automation Rule In Account"
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
					"Update Automation Rule In Account"
				]
			}
		},
		"options": [
			{
				"displayName": "Actions",
				"name": "actions",
				"type": "json",
				"default": "[\n  {\n    \"action_name\": \"add_label\",\n    \"action_params\": [\n      \"support\"\n    ]\n  }\n]",
				"description": "Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.",
				"routing": {
					"send": {
						"property": "actions",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Active",
				"name": "active",
				"type": "boolean",
				"default": true,
				"description": "Enable/disable automation rule",
				"routing": {
					"send": {
						"property": "active",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Conditions",
				"name": "conditions",
				"type": "json",
				"default": "[\n  {\n    \"attribute_key\": \"content\",\n    \"filter_operator\": \"contains\",\n    \"query_operator\": \"OR\",\n    \"values\": [\n      \"help\"\n    ]\n  }\n]",
				"description": "Array of conditions on which conversation filter would work, e.g message content contains text help.",
				"routing": {
					"send": {
						"property": "conditions",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "Add label support and sales on message create event if incoming message content contains text help",
				"description": "The description about the automation and actions",
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
				"displayName": "Event Name",
				"name": "event_name",
				"type": "options",
				"default": "message_created",
				"description": "The event when you want to execute the automation actions",
				"options": [
					{
						"name": "Conversation Created",
						"value": "conversation_created"
					},
					{
						"name": "Conversation Updated",
						"value": "conversation_updated"
					},
					{
						"name": "Conversation Resolved",
						"value": "conversation_resolved"
					},
					{
						"name": "Message Created",
						"value": "message_created"
					}
				],
				"routing": {
					"send": {
						"property": "event_name",
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
				"default": "Add label on message create event",
				"description": "Rule name",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/automation_rules/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "The ID of the automation rule to be deleted",
		"default": 0,
		"type": "number",
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
		"displayName": "GET /api/v1/accounts/{account_id}/conversations/meta",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta"
				]
			}
		}
	},
	{
		"displayName": "Status",
		"name": "status",
		"description": "Filter by conversation status.",
		"default": "open",
		"type": "options",
		"options": [
			{
				"name": "All",
				"value": "all"
			},
			{
				"name": "Open",
				"value": "open"
			},
			{
				"name": "Resolved",
				"value": "resolved"
			},
			{
				"name": "Pending",
				"value": "pending"
			},
			{
				"name": "Snoozed",
				"value": "snoozed"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "status",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta"
				]
			}
		}
	},
	{
		"displayName": "Q",
		"name": "q",
		"description": "Filters conversations with messages containing the search term",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "q",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "inbox_id",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta"
				]
			}
		}
	},
	{
		"displayName": "Team Id",
		"name": "team_id",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "team_id",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta"
				]
			}
		}
	},
	{
		"displayName": "Labels",
		"name": "labels",
		"default": "[\n  null\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "labels",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List Meta"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/conversations",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Assignee Type",
		"name": "assignee_type",
		"description": "Filter conversations by assignee type.",
		"default": "all",
		"type": "options",
		"options": [
			{
				"name": "Me",
				"value": "me"
			},
			{
				"name": "Unassigned",
				"value": "unassigned"
			},
			{
				"name": "All",
				"value": "all"
			},
			{
				"name": "Assigned",
				"value": "assigned"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "assignee_type",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "Status",
		"name": "status",
		"description": "Filter by conversation status.",
		"default": "open",
		"type": "options",
		"options": [
			{
				"name": "All",
				"value": "all"
			},
			{
				"name": "Open",
				"value": "open"
			},
			{
				"name": "Resolved",
				"value": "resolved"
			},
			{
				"name": "Pending",
				"value": "pending"
			},
			{
				"name": "Snoozed",
				"value": "snoozed"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "status",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "Q",
		"name": "q",
		"description": "Filters conversations with messages containing the search term",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "q",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
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
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "inbox_id",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "Team Id",
		"name": "team_id",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "team_id",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "Labels",
		"name": "labels",
		"default": "[\n  null\n]",
		"type": "json",
		"routing": {
			"send": {
				"type": "query",
				"property": "labels",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "paginate through conversations",
		"default": 1,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "POST /api/v1/accounts/{account_id}/conversations",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Source Id",
		"name": "source_id",
		"type": "string",
		"default": "1234567890",
		"description": "Conversation source id",
		"routing": {
			"send": {
				"property": "source_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
				"default": "{\n  \"browser\": \"Chrome\",\n  \"browser_version\": \"89.0.4389.82\",\n  \"os\": \"Windows\",\n  \"os_version\": \"10\"\n}",
				"description": "Lets you specify attributes like browser information",
				"routing": {
					"send": {
						"property": "additional_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Assignee Id",
				"name": "assignee_id",
				"type": "number",
				"default": 1,
				"description": "Agent Id for assigning a conversation to an agent",
				"routing": {
					"send": {
						"property": "assignee_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Contact Id",
				"name": "contact_id",
				"type": "number",
				"default": 1,
				"description": "Contact Id for which conversation is created",
				"routing": {
					"send": {
						"property": "contact_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Custom Attributes",
				"name": "custom_attributes",
				"type": "json",
				"default": "{\n  \"attribute_key\": \"attribute_value\",\n  \"priority_conversation_number\": 3\n}",
				"description": "The object to save custom attributes for conversation, accepts custom attributes key and value",
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
				"displayName": "Inbox Id",
				"name": "inbox_id",
				"type": "number",
				"default": 1,
				"description": "Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email",
				"routing": {
					"send": {
						"property": "inbox_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Message",
				"name": "message",
				"type": "json",
				"default": "{\n  \"content\": \"Hello, how can I help you?\",\n  \"template_params\": {\n    \"name\": \"sample_issue_resolution\",\n    \"category\": \"UTILITY\",\n    \"language\": \"en_US\",\n    \"processed_params\": {\n      \"1\": \"Chatwoot\"\n    }\n  }\n}",
				"description": "The initial message to be sent to the conversation",
				"routing": {
					"send": {
						"property": "message",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Snoozed Until",
				"name": "snoozed_until",
				"type": "string",
				"default": "2030-07-21T17:32:28Z",
				"description": "Snoozed until date time",
				"routing": {
					"send": {
						"property": "snoozed_until",
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
				"default": "open",
				"description": "Specify the conversation whether it's pending, open, closed",
				"options": [
					{
						"name": "Open",
						"value": "open"
					},
					{
						"name": "Resolved",
						"value": "resolved"
					},
					{
						"name": "Pending",
						"value": "pending"
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
				"displayName": "Team Id",
				"name": "team_id",
				"type": "number",
				"default": 1,
				"description": "Team Id for assigning a conversation to a team\\",
				"routing": {
					"send": {
						"property": "team_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/filter",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Page",
		"name": "page",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Sort filtered conversations using the same options as the conversation list.",
		"default": "last_activity_at_desc",
		"type": "options",
		"options": [
			{
				"name": "Last Activity At Asc",
				"value": "last_activity_at_asc"
			},
			{
				"name": "Last Activity At Desc",
				"value": "last_activity_at_desc"
			},
			{
				"name": "Created At Asc",
				"value": "created_at_asc"
			},
			{
				"name": "Created At Desc",
				"value": "created_at_desc"
			},
			{
				"name": "Priority Asc",
				"value": "priority_asc"
			},
			{
				"name": "Priority Desc",
				"value": "priority_desc"
			},
			{
				"name": "Waiting Since Asc",
				"value": "waiting_since_asc"
			},
			{
				"name": "Waiting Since Desc",
				"value": "waiting_since_desc"
			},
			{
				"name": "Priority Desc Created At Asc",
				"value": "priority_desc_created_at_asc"
			},
			{
				"name": "Unread",
				"value": "unread"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "sort_by",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
					"Conversation Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Payload",
				"name": "payload",
				"type": "json",
				"default": "[\n  {\n    \"attribute_key\": \"browser_language\",\n    \"filter_operator\": \"not_equal_to\",\n    \"values\": [\n      \"en\"\n    ],\n    \"query_operator\": \"AND\"\n  },\n  {\n    \"attribute_key\": \"status\",\n    \"filter_operator\": \"equal_to\",\n    \"values\": [\n      \"pending\"\n    ],\n    \"query_operator\": null\n  }\n]",
				"routing": {
					"send": {
						"property": "payload",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Get Details Of A Conversation"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/conversations/{conversation_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Update Conversation"
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
					"Update Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Priority",
				"name": "priority",
				"type": "options",
				"default": "high",
				"description": "The priority of the conversation. Set to null to clear the priority.",
				"options": [
					{
						"name": "Urgent",
						"value": "urgent"
					},
					{
						"name": "High",
						"value": "high"
					},
					{
						"name": "Medium",
						"value": "medium"
					},
					{
						"name": "Low",
						"value": "low"
					}
				],
				"routing": {
					"send": {
						"property": "priority",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Sla Policy Id",
				"name": "sla_policy_id",
				"type": "number",
				"default": 1,
				"description": "The ID of the SLA policy (Available only in Enterprise edition)",
				"routing": {
					"send": {
						"property": "sla_policy_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Status",
		"name": "status",
		"type": "options",
		"default": "open",
		"description": "The status of the conversation",
		"options": [
			{
				"name": "Open",
				"value": "open"
			},
			{
				"name": "Resolved",
				"value": "resolved"
			},
			{
				"name": "Pending",
				"value": "pending"
			},
			{
				"name": "Snoozed",
				"value": "snoozed"
			}
		],
		"routing": {
			"send": {
				"property": "status",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
				"default": 1757506877,
				"description": "When status is `snoozed`, schedule the reopen time as a Unix timestamp in seconds. If not provided, the conversation is snoozed until the next customer reply. The conversation always reopens when the customer replies.",
				"routing": {
					"send": {
						"property": "snoozed_until",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Toggle Priority Of A Conversation"
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
					"Toggle Priority Of A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Priority",
				"name": "priority",
				"type": "options",
				"default": "high",
				"description": "The priority of the conversation. Omit or set to null to clear the priority.",
				"options": [
					{
						"name": "Urgent",
						"value": "urgent"
					},
					{
						"name": "High",
						"value": "high"
					},
					{
						"name": "Medium",
						"value": "medium"
					},
					{
						"name": "Low",
						"value": "low"
					}
				],
				"routing": {
					"send": {
						"property": "priority",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_typing_status",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Typing Status",
		"name": "typing_status",
		"type": "options",
		"default": "on",
		"description": "Typing status to set.",
		"options": [
			{
				"name": "On",
				"value": "on"
			},
			{
				"name": "Off",
				"value": "off"
			}
		],
		"routing": {
			"send": {
				"property": "typing_status",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
						"property": "is_private",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/update_last_seen",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation Update Last Seen"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/custom_attributes",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Custom Attributes",
		"name": "custom_attributes",
		"type": "json",
		"default": "{\n  \"order_id\": \"12345\",\n  \"previous_conversation\": \"67890\"\n}",
		"description": "The custom attributes to be set for the conversation",
		"routing": {
			"send": {
				"property": "custom_attributes",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
						"property": "merge",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/destroy_custom_attributes",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Custom Attributes",
		"name": "custom_attributes",
		"type": "json",
		"default": "[\n  \"order_id\",\n  \"previous_conversation\"\n]",
		"description": "The list of custom attribute keys to remove from the conversation",
		"routing": {
			"send": {
				"property": "custom_attributes",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
				"default": 1,
				"description": "Id of the assignee user",
				"routing": {
					"send": {
						"property": "assignee_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Team Id",
				"name": "team_id",
				"type": "number",
				"default": 1,
				"description": "Id of the team. If the assignee_id is present, this param would be ignored",
				"routing": {
					"send": {
						"property": "team_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"List All Labels Of A Conversation"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Labels",
		"name": "labels",
		"type": "json",
		"default": "[\n  \"support\",\n  \"billing\"\n]",
		"description": "Array of labels (comma-separated strings)",
		"routing": {
			"send": {
				"property": "labels",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
		"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Get Conversation Reporting Events"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/branded_email_layout",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Account Branded Email Layout"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Account Branded Email Layout"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/branded_email_layout",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Account Branded Email Layout"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Account Branded Email Layout"
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
				"default": "<html><body>{{ content_for_layout }}</body></html>",
				"description": "Account-scoped Liquid HTML layout for branded email replies. Maximum length is 262,144 characters. Blank or null removes the account override.",
				"routing": {
					"send": {
						"property": "branded_email_layout",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/inboxes",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"List All Inboxes"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"List All Inboxes"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/inboxes",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Inbox Creation"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Inbox Creation"
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
					"Inbox Creation"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Messages After Resolved",
				"name": "allow_messages_after_resolved",
				"type": "boolean",
				"default": true,
				"description": "Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"property": "allow_messages_after_resolved",
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
				"description": "Image file for avatar.",
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
				"displayName": "Business Name",
				"name": "business_name",
				"type": "string",
				"default": "My Business",
				"description": "Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
				"routing": {
					"send": {
						"property": "business_name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Channel",
				"name": "channel",
				"type": "json",
				"default": "{\n  \"type\": \"web_widget\",\n  \"website_url\": \"https://example.com\",\n  \"welcome_title\": \"Welcome to our support\",\n  \"welcome_tagline\": \"We are here to help you\",\n  \"widget_color\": \"#FF5733\",\n  \"reply_time\": \"in_a_few_minutes\",\n  \"pre_chat_form_enabled\": false,\n  \"pre_chat_form_options\": {\n    \"pre_chat_message\": \"Share your queries or comments here.\",\n    \"pre_chat_fields\": [\n      {\n        \"field_type\": \"standard\",\n        \"label\": \"Email Id\",\n        \"name\": \"emailAddress\",\n        \"type\": \"email\",\n        \"required\": true,\n        \"enabled\": true\n      }\n    ]\n  },\n  \"continuity_via_email\": true,\n  \"hmac_mandatory\": false,\n  \"allowed_domains\": \"example.com\",\n  \"selected_feature_flags\": [\n    \"attachments\",\n    \"emoji_picker\",\n    \"end_conversation\"\n  ]\n}",
				"routing": {
					"send": {
						"property": "channel",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Csat Config",
				"name": "csat_config",
				"type": "json",
				"default": "{\n  \"display_type\": \"emoji\",\n  \"message\": \"Please rate your conversation\",\n  \"button_text\": \"Please rate us\",\n  \"language\": \"en\",\n  \"survey_rules\": {\n    \"operator\": \"contains\",\n    \"values\": [\n      \"billing\"\n    ]\n  }\n}",
				"description": "CSAT survey configuration.",
				"routing": {
					"send": {
						"property": "csat_config",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Csat Survey Enabled",
				"name": "csat_survey_enabled",
				"type": "boolean",
				"default": true,
				"description": "Enable CSAT survey.",
				"routing": {
					"send": {
						"property": "csat_survey_enabled",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Enable Auto Assignment",
				"name": "enable_auto_assignment",
				"type": "boolean",
				"default": true,
				"description": "Enable Auto Assignment.",
				"routing": {
					"send": {
						"property": "enable_auto_assignment",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Enable Email Collect",
				"name": "enable_email_collect",
				"type": "boolean",
				"default": true,
				"description": "Enable email collection.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"property": "enable_email_collect",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Greeting Enabled",
				"name": "greeting_enabled",
				"type": "boolean",
				"default": true,
				"description": "Enable greeting message.",
				"routing": {
					"send": {
						"property": "greeting_enabled",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Greeting Message",
				"name": "greeting_message",
				"type": "string",
				"default": "Hello, how can I help you?",
				"description": "Greeting message to send when greeting messages are enabled.",
				"routing": {
					"send": {
						"property": "greeting_message",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Lock To Single Conversation",
				"name": "lock_to_single_conversation",
				"type": "boolean",
				"default": true,
				"description": "Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n",
				"routing": {
					"send": {
						"property": "lock_to_single_conversation",
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
				"default": "Support",
				"description": "The name of the inbox.",
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
				"displayName": "Out Of Office Message",
				"name": "out_of_office_message",
				"type": "string",
				"default": "We are currently out of office. Please leave a message and we will get back to you.",
				"description": "Out of office message to send outside working hours.",
				"routing": {
					"send": {
						"property": "out_of_office_message",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Portal Id",
				"name": "portal_id",
				"type": "number",
				"default": 1,
				"description": "Id of the help center portal to attach to the inbox.",
				"routing": {
					"send": {
						"property": "portal_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"name": "Friendly",
						"value": "friendly"
					},
					{
						"name": "Professional",
						"value": "professional"
					}
				],
				"routing": {
					"send": {
						"property": "sender_name_type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Timezone",
				"name": "timezone",
				"type": "string",
				"default": "America/New_York",
				"description": "Timezone of the inbox.",
				"routing": {
					"send": {
						"property": "timezone",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Working Hours Enabled",
				"name": "working_hours_enabled",
				"type": "boolean",
				"default": true,
				"description": "Enable working hours.",
				"routing": {
					"send": {
						"property": "working_hours_enabled",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/inboxes/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the inbox",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/inboxes/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Inbox"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Inbox"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the inbox",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Inbox"
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
					"Update Inbox"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Messages After Resolved",
				"name": "allow_messages_after_resolved",
				"type": "boolean",
				"default": true,
				"description": "Allow messages after conversation is resolved.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"property": "allow_messages_after_resolved",
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
				"description": "Image file for avatar.",
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
				"displayName": "Branded Email Layout",
				"name": "branded_email_layout",
				"type": "string",
				"default": "<html><body>{{ content_for_layout }}</body></html>",
				"description": "Liquid HTML layout for outbound email replies. Must include `{{ content_for_layout }}` and be 262,144 characters or shorter.\n\nAvailable for: `Email`\n",
				"routing": {
					"send": {
						"property": "branded_email_layout",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Business Name",
				"name": "business_name",
				"type": "string",
				"default": "My Business",
				"description": "Business name for outbound email replies.\n\nAvailable for: `Website` `Email`\n",
				"routing": {
					"send": {
						"property": "business_name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Channel",
				"name": "channel",
				"type": "json",
				"default": "{\n  \"website_url\": \"https://example.com\",\n  \"welcome_title\": \"Welcome to our support\",\n  \"welcome_tagline\": \"We are here to help you\",\n  \"widget_color\": \"#FF5733\",\n  \"reply_time\": \"in_a_few_minutes\",\n  \"pre_chat_form_enabled\": false,\n  \"pre_chat_form_options\": {\n    \"pre_chat_message\": \"Share your queries or comments here.\",\n    \"pre_chat_fields\": [\n      {\n        \"field_type\": \"standard\",\n        \"label\": \"Email Id\",\n        \"name\": \"emailAddress\",\n        \"type\": \"email\",\n        \"required\": true,\n        \"enabled\": true\n      }\n    ]\n  },\n  \"continuity_via_email\": true,\n  \"hmac_mandatory\": false,\n  \"allowed_domains\": \"example.com\",\n  \"selected_feature_flags\": [\n    \"attachments\",\n    \"emoji_picker\",\n    \"end_conversation\"\n  ]\n}",
				"routing": {
					"send": {
						"property": "channel",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Csat Config",
				"name": "csat_config",
				"type": "json",
				"default": "{\n  \"display_type\": \"emoji\",\n  \"message\": \"Please rate your conversation\",\n  \"button_text\": \"Please rate us\",\n  \"language\": \"en\",\n  \"survey_rules\": {\n    \"operator\": \"contains\",\n    \"values\": [\n      \"billing\"\n    ]\n  }\n}",
				"description": "CSAT survey configuration.",
				"routing": {
					"send": {
						"property": "csat_config",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Csat Survey Enabled",
				"name": "csat_survey_enabled",
				"type": "boolean",
				"default": true,
				"description": "Enable CSAT survey.",
				"routing": {
					"send": {
						"property": "csat_survey_enabled",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Enable Auto Assignment",
				"name": "enable_auto_assignment",
				"type": "boolean",
				"default": true,
				"description": "Enable Auto Assignment.",
				"routing": {
					"send": {
						"property": "enable_auto_assignment",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Enable Email Collect",
				"name": "enable_email_collect",
				"type": "boolean",
				"default": true,
				"description": "Enable email collection.\n\nAvailable for: `Website`\n",
				"routing": {
					"send": {
						"property": "enable_email_collect",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Greeting Enabled",
				"name": "greeting_enabled",
				"type": "boolean",
				"default": true,
				"description": "Enable greeting message.",
				"routing": {
					"send": {
						"property": "greeting_enabled",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Greeting Message",
				"name": "greeting_message",
				"type": "string",
				"default": "Hello, how can I help you?",
				"description": "Greeting message to send when greeting messages are enabled.",
				"routing": {
					"send": {
						"property": "greeting_message",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Lock To Single Conversation",
				"name": "lock_to_single_conversation",
				"type": "boolean",
				"default": true,
				"description": "Lock contact messages to a single active conversation.\n\nAvailable for: `API` `LINE` `Telegram` `WhatsApp` `SMS`\n",
				"routing": {
					"send": {
						"property": "lock_to_single_conversation",
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
				"default": "Support",
				"description": "The name of the inbox.",
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
				"displayName": "Out Of Office Message",
				"name": "out_of_office_message",
				"type": "string",
				"default": "We are currently out of office. Please leave a message and we will get back to you.",
				"description": "Out of office message to send outside working hours.",
				"routing": {
					"send": {
						"property": "out_of_office_message",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Portal Id",
				"name": "portal_id",
				"type": "number",
				"default": 1,
				"description": "Id of the help center portal to attach to the inbox.",
				"routing": {
					"send": {
						"property": "portal_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"name": "Friendly",
						"value": "friendly"
					},
					{
						"name": "Professional",
						"value": "professional"
					}
				],
				"routing": {
					"send": {
						"property": "sender_name_type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Timezone",
				"name": "timezone",
				"type": "string",
				"default": "America/New_York",
				"description": "Timezone of the inbox.",
				"routing": {
					"send": {
						"property": "timezone",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Working Hours Enabled",
				"name": "working_hours_enabled",
				"type": "boolean",
				"default": true,
				"description": "Enable working hours.",
				"routing": {
					"send": {
						"property": "working_hours_enabled",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/inboxes/{id}/message_templates",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the native or Twilio WhatsApp inbox",
		"default": 0,
		"type": "number",
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
		"displayName": "Name",
		"name": "name",
		"description": "Exact template name to filter by",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "name",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
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
		"displayName": "GET /api/v1/accounts/{account_id}/inboxes/{id}/agent_bot",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the inbox",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Get Inbox Agent Bot"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
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
		"displayName": "Id",
		"name": "id",
		"required": true,
		"description": "ID of the inbox",
		"default": 0,
		"type": "number",
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
		"required": true,
		"displayName": "Agent Bot",
		"name": "agent_bot",
		"type": "number",
		"default": 1,
		"description": "Agent bot ID",
		"routing": {
			"send": {
				"property": "agent_bot",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"displayName": "GET /api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"required": true,
		"description": "The ID of the Inbox",
		"default": 0,
		"type": "number",
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
		"displayName": "POST /api/v1/accounts/{account_id}/inbox_members",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 1,
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"property": "inbox_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"required": true,
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[\n  1\n]",
		"description": "IDs of users to be added to the inbox",
		"routing": {
			"send": {
				"property": "user_ids",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
		"displayName": "PATCH /api/v1/accounts/{account_id}/inbox_members",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Agents In Inbox"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "string",
		"default": 1,
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"property": "inbox_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Agents In Inbox"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[\n  1\n]",
		"description": "IDs of users to be added to the inbox",
		"routing": {
			"send": {
				"property": "user_ids",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Inboxes"
				],
				"operation": [
					"Update Agents In Inbox"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/inbox_members",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "string",
		"default": "",
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"property": "inbox_id",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
		"required": true,
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[\n  null\n]",
		"description": "IDs of users to be deleted from the inbox",
		"routing": {
			"send": {
				"property": "user_ids",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
		"displayName": "GET /api/v1/accounts/{account_id}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"List All Labels"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/labels",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Create A Label"
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
				"default": "#1f93ff",
				"description": "Hex color code for the label",
				"routing": {
					"send": {
						"property": "color",
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
				"default": "Conversations that need support follow-up",
				"description": "A short description for the label",
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
				"displayName": "Show On Sidebar",
				"name": "show_on_sidebar",
				"type": "boolean",
				"default": true,
				"description": "Whether the label should appear in the sidebar",
				"routing": {
					"send": {
						"property": "show_on_sidebar",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "support",
				"description": "The label title",
				"routing": {
					"send": {
						"property": "title",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/labels/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Get Details Of A Single Label"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/labels/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Update A Label"
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
					"Update A Label"
				]
			}
		},
		"options": [
			{
				"displayName": "Color",
				"name": "color",
				"type": "string",
				"default": "#1f93ff",
				"description": "Hex color code for the label",
				"routing": {
					"send": {
						"property": "color",
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
				"default": "Conversations that need support follow-up",
				"description": "A short description for the label",
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
				"displayName": "Show On Sidebar",
				"name": "show_on_sidebar",
				"type": "boolean",
				"default": true,
				"description": "Whether the label should appear in the sidebar",
				"routing": {
					"send": {
						"property": "show_on_sidebar",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "support",
				"description": "The label title",
				"routing": {
					"send": {
						"property": "title",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/labels/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Labels"
				],
				"operation": [
					"Delete A Label"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "After",
		"name": "after",
		"description": "Fetch messages after the message with this ID. Returns up to 100 messages in ascending order.",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "after",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Fetch messages before the message with this ID. Returns up to 20 messages in ascending order.",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "before",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Content",
		"name": "content",
		"type": "string",
		"default": "Hello, how can I help you?",
		"description": "The content of the message",
		"routing": {
			"send": {
				"property": "content",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
				"default": 1,
				"description": "The campaign id to which the message belongs",
				"routing": {
					"send": {
						"property": "campaign_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Content Attributes",
				"name": "content_attributes",
				"type": "json",
				"default": "{\n  \"items\": [\n    {\n      \"title\": \"Option 1\",\n      \"value\": \"option_1\",\n      \"description\": \"Optional WhatsApp list row subtitle\"\n    }\n  ]\n}",
				"description": "Attributes based on the content type. For `input_select`, provide an `items` array with\n`title`, `value`, and optional `description`. WhatsApp list messages use `description`\nas the row subtitle when present.\n",
				"routing": {
					"send": {
						"property": "content_attributes",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
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
						"name": "Text",
						"value": "text"
					},
					{
						"name": "Input Email",
						"value": "input_email"
					},
					{
						"name": "Cards",
						"value": "cards"
					},
					{
						"name": "Input Select",
						"value": "input_select"
					},
					{
						"name": "Form",
						"value": "form"
					},
					{
						"name": "Article",
						"value": "article"
					}
				],
				"routing": {
					"send": {
						"property": "content_type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"name": "Outgoing",
						"value": "outgoing"
					},
					{
						"name": "Incoming",
						"value": "incoming"
					}
				],
				"routing": {
					"send": {
						"property": "message_type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "private",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Template Params",
				"name": "template_params",
				"type": "json",
				"default": "{\n  \"name\": \"purchase_receipt\",\n  \"category\": \"UTILITY\",\n  \"language\": \"en_US\",\n  \"content_mode\": \"rendered\",\n  \"processed_params\": {\n    \"body\": {\n      \"1\": \"Visa\",\n      \"2\": \"Nike\",\n      \"3\": \"Bill\"\n    },\n    \"header\": {\n      \"media_url\": \"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf\",\n      \"media_type\": \"document\"\n    },\n    \"buttons\": [\n      {\n        \"parameter\": \"SSFSDFSD\"\n      }\n    ]\n  }\n}",
				"description": "WhatsApp template parameters for sending structured messages",
				"routing": {
					"send": {
						"property": "template_params",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			}
		]
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Status",
		"name": "status",
		"type": "options",
		"default": "sent",
		"description": "The new status of the message",
		"options": [
			{
				"name": "Sent",
				"value": "sent"
			},
			{
				"name": "Delivered",
				"value": "delivered"
			},
			{
				"name": "Read",
				"value": "read"
			},
			{
				"name": "Failed",
				"value": "failed"
			}
		],
		"routing": {
			"send": {
				"property": "status",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ $value }}"
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
						"property": "external_error",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"Delete A Message"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/integrations/apps",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Get Details Of All Integrations"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/integrations/hooks",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Create An Integration Hook"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Create An Integration Hook"
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
				"default": 1,
				"description": "The ID of app for which integration hook is being created",
				"routing": {
					"send": {
						"property": "app_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Inbox Id",
				"name": "inbox_id",
				"type": "number",
				"default": 1,
				"description": "The inbox ID, if the hook is an inbox hook",
				"routing": {
					"send": {
						"property": "inbox_id",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
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
						"property": "settings",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "number",
				"default": 1,
				"description": "The status of the integration (0 for inactive, 1 for active)",
				"routing": {
					"send": {
						"property": "status",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Update An Integrations Hook"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Update An Integrations Hook"
				]
			}
		}
	},
	{
		"displayName": "Hook Id",
		"name": "hook_id",
		"required": true,
		"description": "The numeric ID of the integration hook",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Update An Integrations Hook"
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
						"property": "settings",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "number",
				"default": 1,
				"description": "The status of the integration (0 for inactive, 1 for active)",
				"routing": {
					"send": {
						"property": "status",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Delete An Integration Hook"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Delete An Integration Hook"
				]
			}
		}
	},
	{
		"displayName": "Hook Id",
		"name": "hook_id",
		"required": true,
		"description": "The numeric ID of the integration hook",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Integrations"
				],
				"operation": [
					"Delete An Integration Hook"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/profile",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Fetch Profile"
				]
			}
		}
	},
	{
		"displayName": "PUT /api/v1/profile",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Update Profile"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Profile",
		"name": "profile",
		"type": "json",
		"default": "{}",
		"routing": {
			"send": {
				"property": "profile",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Profile"
				],
				"operation": [
					"Update Profile"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/teams",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"List All Teams"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/teams",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Create A Team"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Create A Team"
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
				"default": true,
				"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
				"routing": {
					"send": {
						"property": "allow_auto_assign",
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
				"default": "This is a team of support agents",
				"description": "The description of the team",
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
				"displayName": "Icon",
				"name": "icon",
				"type": "string",
				"default": "🚀",
				"description": "An emoji or icon shown next to the team",
				"routing": {
					"send": {
						"property": "icon",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Icon Color",
				"name": "icon_color",
				"type": "string",
				"default": "#6C5CE7",
				"description": "The color used for the team icon",
				"routing": {
					"send": {
						"property": "icon_color",
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
				"default": "Support Team",
				"description": "The name of the team",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/teams/{team_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Get Details Of A Single Team"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/teams/{team_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Update A Team"
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
					"Update A Team"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Auto Assign",
				"name": "allow_auto_assign",
				"type": "boolean",
				"default": true,
				"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
				"routing": {
					"send": {
						"property": "allow_auto_assign",
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
				"default": "This is a team of support agents",
				"description": "The description of the team",
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
				"displayName": "Icon",
				"name": "icon",
				"type": "string",
				"default": "🚀",
				"description": "An emoji or icon shown next to the team",
				"routing": {
					"send": {
						"property": "icon",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Icon Color",
				"name": "icon_color",
				"type": "string",
				"default": "#6C5CE7",
				"description": "The color used for the team icon",
				"routing": {
					"send": {
						"property": "icon_color",
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
				"default": "Support Team",
				"description": "The name of the team",
				"routing": {
					"send": {
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/teams/{team_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Delete A Team"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Get Team Members"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Get Team Members"
				]
			}
		}
	},
	{
		"displayName": "Team Id",
		"name": "team_id",
		"required": true,
		"description": "The ID of the team to be updated",
		"default": 0,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Get Team Members"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Add New Agent To Team"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[\n  1\n]",
		"description": "IDs of users to be added to the team",
		"routing": {
			"send": {
				"property": "user_ids",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Add New Agent To Team"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Update Agents In Team"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[\n  1\n]",
		"description": "IDs of users to be added to the team",
		"routing": {
			"send": {
				"property": "user_ids",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Update Agents In Team"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[\n  null\n]",
		"description": "IDs of users to be deleted from the team",
		"routing": {
			"send": {
				"property": "user_ids",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
		"displayName": "GET /api/v1/accounts/{account_id}/custom_filters",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
					"List All Filters"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/custom_filters",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
					"Create A Custom Filter"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
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
				"default": "My Custom Filter",
				"description": "The name of the custom filter",
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
				"displayName": "Query",
				"name": "query",
				"type": "json",
				"default": "{}",
				"description": "A query that needs to be saved as a custom filter",
				"routing": {
					"send": {
						"property": "query",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
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
						"name": "Conversation",
						"value": "conversation"
					},
					{
						"name": "Contact",
						"value": "contact"
					},
					{
						"name": "Report",
						"value": "report"
					}
				],
				"routing": {
					"send": {
						"property": "type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
					"Get Details Of A Single Custom Filter"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
					"Update A Custom Filter"
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
					"Update A Custom Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "My Custom Filter",
				"description": "The name of the custom filter",
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
				"displayName": "Query",
				"name": "query",
				"type": "json",
				"default": "{}",
				"description": "A query that needs to be saved as a custom filter",
				"routing": {
					"send": {
						"property": "query",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
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
						"name": "Conversation",
						"value": "conversation"
					},
					{
						"name": "Contact",
						"value": "contact"
					},
					{
						"name": "Report",
						"value": "report"
					}
				],
				"routing": {
					"send": {
						"property": "type",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Filters"
				],
				"operation": [
					"Delete A Custom Filter"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/webhooks",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "POST /api/v1/accounts/{account_id}/webhooks",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Webhooks"
				],
				"operation": [
					"Create A Webhook"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Webhooks"
				],
				"operation": [
					"Create A Webhook"
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
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Subscriptions",
				"name": "subscriptions",
				"type": "json",
				"default": "[\n  \"conversation_created\",\n  \"conversation_status_changed\"\n]",
				"description": "The events you want to subscribe to.",
				"routing": {
					"send": {
						"property": "subscriptions",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Url",
				"name": "url",
				"type": "string",
				"default": "https://example.com/webhook",
				"description": "The url where the events should be sent",
				"routing": {
					"send": {
						"property": "url",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/webhooks/{webhook_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Webhooks"
				],
				"operation": [
					"Update A Webhook"
				]
			}
		}
	},
	{
		"displayName": "Account Id",
		"name": "account_id",
		"required": true,
		"description": "The numeric ID of the account",
		"default": 1,
		"type": "number",
		"displayOptions": {
			"show": {
				"resource": [
					"Webhooks"
				],
				"operation": [
					"Update A Webhook"
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
						"property": "name",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			},
			{
				"displayName": "Subscriptions",
				"name": "subscriptions",
				"type": "json",
				"default": "[\n  \"conversation_created\",\n  \"conversation_status_changed\"\n]",
				"description": "The events you want to subscribe to.",
				"routing": {
					"send": {
						"property": "subscriptions",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ JSON.parse($value) }}"
					}
				}
			},
			{
				"displayName": "Url",
				"name": "url",
				"type": "string",
				"default": "https://example.com/webhook",
				"description": "The url where the events should be sent",
				"routing": {
					"send": {
						"property": "url",
						"propertyInDotNotation": false,
						"type": "body",
						"value": "={{ $value }}"
					}
				}
			}
		]
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/webhooks/{webhook_id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Webhooks"
				],
				"operation": [
					"Delete A Webhook"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v1/accounts/{account_id}/reporting_events",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Page",
		"name": "page",
		"description": "The page parameter",
		"default": 1,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "page",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "The timestamp from where events should start (Unix timestamp in seconds)",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "since",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
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
		"description": "The timestamp from where events should stop (Unix timestamp in seconds)",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "until",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
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
		"description": "Filter events by inbox ID",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "inbox_id",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Filter events by user/agent ID",
		"default": 0,
		"type": "number",
		"routing": {
			"send": {
				"type": "query",
				"property": "user_id",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"description": "Filter events by event name (e.g., first_response, resolution, reply_time)",
		"default": "",
		"type": "string",
		"routing": {
			"send": {
				"type": "query",
				"property": "name",
				"value": "={{ $value === '' ? undefined : $value }}",
				"propertyInDotNotation": false
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
		"displayName": "GET /api/v2/accounts/{account_id}/reports",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "GET /api/v2/accounts/{account_id}/reports/summary",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics Summary"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v2/accounts/{account_id}/reports/conversations",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "GET /api/v2/accounts/{account_id}/reports/conversations/",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/channel",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Channel Summary Report"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/inbox",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Inbox Summary Report"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/agent",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Agent Summary Report"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v2/accounts/{account_id}/summary_reports/team",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get Team Summary Report"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v2/accounts/{account_id}/reports/first_response_time_distribution",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Reports"
				],
				"operation": [
					"Get First Response Time Distribution"
				]
			}
		}
	},
	{
		"displayName": "GET /api/v2/accounts/{account_id}/reports/inbox_label_matrix",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "GET /api/v2/accounts/{account_id}/reports/outgoing_messages_count",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"displayName": "Group By",
		"name": "group_by",
		"required": true,
		"description": "The entity to group outgoing message counts by.",
		"default": "agent",
		"type": "options",
		"options": [
			{
				"name": "Agent",
				"value": "agent"
			},
			{
				"name": "Team",
				"value": "team"
			},
			{
				"name": "Inbox",
				"value": "inbox"
			},
			{
				"name": "Label",
				"value": "label"
			}
		],
		"routing": {
			"send": {
				"type": "query",
				"property": "group_by",
				"value": "={{ $value }}",
				"propertyInDotNotation": false
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
		"displayName": "GET /api/v1/accounts/{account_id}/campaigns",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"List Campaigns"
				]
			}
		}
	},
	{
		"displayName": "POST /api/v1/accounts/{account_id}/campaigns",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
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
		"required": true,
		"displayName": "Campaign",
		"name": "campaign",
		"type": "json",
		"default": "{\n  \"trigger_rules\": {}\n}",
		"description": "For a Website inbox, supply URL trigger rules. An audience is not required.",
		"routing": {
			"send": {
				"property": "campaign",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
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
		"displayName": "GET /api/v1/accounts/{account_id}/campaigns/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Get Campaign"
				]
			}
		}
	},
	{
		"displayName": "PATCH /api/v1/accounts/{account_id}/campaigns/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Update Campaign"
				]
			}
		}
	},
	{
		"required": true,
		"displayName": "Campaign",
		"name": "campaign",
		"type": "json",
		"default": "{\n  \"scheduled_at\": \"2027-01-15T10:00:00Z\",\n  \"audience\": [\n    {}\n  ],\n  \"trigger_rules\": {\n    \"url\": \"https://example.com/pricing\",\n    \"time_on_page\": 10\n  },\n  \"template_params\": {\n    \"language\": \"en\",\n    \"processed_params\": {\n      \"body\": {\n        \"1\": \"{{ contact.name }}\"\n      }\n    }\n  }\n}",
		"routing": {
			"send": {
				"property": "campaign",
				"propertyInDotNotation": false,
				"type": "body",
				"value": "={{ JSON.parse($value) }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Update Campaign"
				]
			}
		}
	},
	{
		"displayName": "DELETE /api/v1/accounts/{account_id}/campaigns/{id}",
		"name": "operation",
		"type": "notice",
		"typeOptions": {
			"theme": "info"
		},
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Delete Campaign"
				]
			}
		}
	}
];
