import type { INodeProperties } from 'n8n-workflow';

export const contactLabels: INodeProperties[] = [
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
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/contacts/{{ encodeURIComponent($parameter[\"id\"]) }}/labels"
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
				"name": "Contact Add Labels",
				"value": "Contact Add Labels",
				"action": "Add Labels",
				"description": "Add labels to a contact. Note that this API would overwrite the existing list of labels associated to the conversation.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/contacts/{{ encodeURIComponent($parameter[\"id\"]) }}/labels"
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
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": true,
		"description": "Whether to return all results or only up to a given limit",
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
					"Contact Labels"
				],
				"operation": [
					"List All Labels Of A Contact"
				]
			}
		}
	}
];
