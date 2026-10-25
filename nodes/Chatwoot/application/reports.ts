import type { INodeProperties } from 'n8n-workflow';

export const reports: INodeProperties[] = [
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
					},
					"output": {
						"postReceive": [
							{
								"type": "rootProperty",
								"properties": {
									"property": "payload"
								}
							}
						]
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
				"name": "Get Agent Summary Report",
				"value": "Get Agent Summary Report",
				"action": "Get conversation statistics grouped by agent (Admin)",
				"description": "Requires an administrator token. Get conversation statistics grouped by agent for a given date range.\nReturns metrics for each agent including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/agent"
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
				"name": "Get Team Summary Report",
				"value": "Get Team Summary Report",
				"action": "Get conversation statistics grouped by team (Admin)",
				"description": "Requires an administrator token. Get conversation statistics grouped by team for a given date range.\nReturns metrics for each team including conversation counts, resolution counts,\naverage first response time, average resolution time, and average reply time.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v2/accounts/{{$parameter[\"account_id\"]}}/summary_reports/team"
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
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
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
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
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
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics",
					"Get Agent Conversation Metrics",
					"Get Inbox Summary Report",
					"Get Agent Summary Report",
					"Get Team Summary Report",
					"Get Outgoing Messages Count"
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
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics",
					"Get Agent Conversation Metrics",
					"Get Inbox Summary Report",
					"Get Agent Summary Report",
					"Get Team Summary Report",
					"Get Outgoing Messages Count"
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
					"Reports"
				],
				"operation": [
					"Get Account Reporting Events"
				]
			}
		},
		"options": [
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
						"property": "name"
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
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics"
				]
			}
		},
		"options": [
			{
				"displayName": "Id",
				"name": "id",
				"type": "string",
				"default": "",
				"description": "The Id of specific object in case of agent/inbox/label",
				"routing": {
					"send": {
						"type": "query",
						"property": "id"
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
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"List All Conversation Statistics Summary"
				]
			}
		},
		"options": [
			{
				"displayName": "Id",
				"name": "id",
				"type": "string",
				"default": "",
				"description": "The Id of specific object in case of agent/inbox/label",
				"routing": {
					"send": {
						"type": "query",
						"property": "id"
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
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"Get Agent Conversation Metrics"
				]
			}
		},
		"options": [
			{
				"displayName": "User Id",
				"name": "user_id",
				"type": "string",
				"default": "",
				"description": "The numeric ID of the user",
				"routing": {
					"send": {
						"type": "query",
						"property": "user_id"
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
					"Reports"
				],
				"operation": [
					"Get Channel Summary Report"
				]
			}
		},
		"options": [
			{
				"displayName": "Since",
				"name": "since",
				"type": "string",
				"default": "",
				"description": "The timestamp from where report should start (Unix timestamp).",
				"routing": {
					"send": {
						"type": "query",
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"Get Inbox Summary Report"
				]
			}
		},
		"options": [
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
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"Get Agent Summary Report"
				]
			}
		},
		"options": [
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
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"Get Team Summary Report"
				]
			}
		},
		"options": [
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
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"Get First Response Time Distribution"
				]
			}
		},
		"options": [
			{
				"displayName": "Since",
				"name": "since",
				"type": "string",
				"default": "",
				"description": "The timestamp from where report should start (Unix timestamp).",
				"routing": {
					"send": {
						"type": "query",
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"Get Inbox Label Matrix"
				]
			}
		},
		"options": [
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
						"property": "since"
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
						"property": "until"
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
					"Reports"
				],
				"operation": [
					"Get Outgoing Messages Count"
				]
			}
		},
		"options": [
			{
				"displayName": "Since",
				"name": "since",
				"type": "string",
				"default": "",
				"description": "The timestamp from where report should start (Unix timestamp).",
				"routing": {
					"send": {
						"type": "query",
						"property": "since"
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
						"property": "until"
					}
				}
			}
		]
	}
];
