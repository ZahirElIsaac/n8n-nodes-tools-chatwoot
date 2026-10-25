import type { INodeProperties } from 'n8n-workflow';

export const automationRule: INodeProperties[] = [
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
					"Automation Rule"
				],
				"operation": [
					"Get Account Automation Rule"
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
					"Automation Rule"
				],
				"operation": [
					"Get Account Automation Rule"
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
		"displayName": "Filters",
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
					"Get Account Automation Rule"
				]
			}
		},
		"options": [
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
	}
];
