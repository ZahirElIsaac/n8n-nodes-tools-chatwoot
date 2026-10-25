import type { INodeProperties } from 'n8n-workflow';

export const conversations: INodeProperties[] = [
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
					},
					"output": {
						"postReceive": [
							{
								"type": "rootProperty",
								"properties": {
									"property": "data.payload"
								}
							}
						]
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
					},
					"output": {
						"postReceive": [
							{
								"type": "rootProperty",
								"properties": {
									"property": "data.payload"
								}
							}
						]
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
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": false,
		"description": "Whether to return all results or only up to a given limit",
		"routing": {
			"send": {
				"paginate": "={{ true }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Conversations"
				],
				"operation": [
					"Conversation List",
					"Conversation Filter"
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
					"Conversations"
				],
				"operation": [
					"Conversation List",
					"Conversation Filter"
				]
			}
		},
		"routing": {
			"send": {
				"paginate": "={{ true }}"
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
					"Conversations"
				],
				"operation": [
					"List All Labels Of A Conversation",
					"Get Conversation Reporting Events"
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
					"Conversations"
				],
				"operation": [
					"List All Labels Of A Conversation",
					"Get Conversation Reporting Events"
				]
			}
		}
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
					"Conversations"
				],
				"operation": [
					"Conversation List Meta"
				]
			}
		},
		"options": [
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
						"property": "q"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "options",
				"default": "open",
				"description": "Filter by conversation status.",
				"options": [
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
						"property": "status"
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
					"Conversations"
				],
				"operation": [
					"Conversation List"
				]
			}
		},
		"options": [
			{
				"displayName": "Assignee Type",
				"name": "assignee_type",
				"type": "options",
				"default": "all",
				"description": "Filter conversations by assignee type.",
				"options": [
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
						"property": "assignee_type"
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
						"property": "q"
					}
				}
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "options",
				"default": "open",
				"description": "Filter by conversation status.",
				"options": [
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
						"property": "status"
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
				"displayName": "Page",
				"name": "page",
				"type": "number",
				"default": 0,
				"routing": {
					"send": {
						"type": "query",
						"property": "page"
					}
				}
			},
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
			},
			{
				"displayName": "Sort By",
				"name": "sort_by",
				"type": "options",
				"default": "last_activity_at_desc",
				"description": "Sort filtered conversations using the same options as the conversation list.",
				"options": [
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
						"property": "sort_by"
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
	}
];
