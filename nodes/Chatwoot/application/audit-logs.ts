import type { INodeProperties } from 'n8n-workflow';

export const auditLogs: INodeProperties[] = [
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
					},
					"output": {
						"postReceive": [
							{
								"type": "rootProperty",
								"properties": {
									"property": "audit_logs"
								}
							}
						]
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
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
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
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
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
					"Audit Logs"
				],
				"operation": [
					"Get Account Audit Logs"
				]
			}
		},
		"options": [
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
						"property": "q"
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
				}
			},
			{
				"displayName": "Sort",
				"name": "sort",
				"type": "options",
				"default": "desc",
				"description": "Order of the entries by creation time",
				"options": [
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
						"property": "sort"
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
				}
			}
		]
	}
];
