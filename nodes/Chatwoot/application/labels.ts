import type { INodeProperties } from 'n8n-workflow';

export const labels: INodeProperties[] = [
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
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": true,
		"description": "Whether to return all results or only up to a given limit",
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
					"Labels"
				],
				"operation": [
					"List All Labels"
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
	}
];
