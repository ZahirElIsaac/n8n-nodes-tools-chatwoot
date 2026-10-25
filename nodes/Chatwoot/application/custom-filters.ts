import type { INodeProperties } from 'n8n-workflow';

export const customFilters: INodeProperties[] = [
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
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": true,
		"description": "Whether to return all results or only up to a given limit",
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
					"Custom Filters"
				],
				"operation": [
					"List All Filters"
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
					"Custom Filters"
				],
				"operation": [
					"List All Filters"
				]
			}
		},
		"options": [
			{
				"displayName": "Filter Type",
				"name": "filter_type",
				"type": "options",
				"default": "conversation",
				"description": "The type of custom filter",
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
						"type": "query",
						"property": "filter_type"
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
					"Create A Custom Filter"
				]
			}
		},
		"options": [
			{
				"displayName": "Filter Type",
				"name": "filter_type",
				"type": "options",
				"default": "conversation",
				"description": "The type of custom filter",
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
						"type": "query",
						"property": "filter_type"
					}
				}
			},
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
	}
];
