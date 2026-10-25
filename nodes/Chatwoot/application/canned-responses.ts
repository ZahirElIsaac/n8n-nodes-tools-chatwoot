import type { INodeProperties } from 'n8n-workflow';

export const cannedResponses: INodeProperties[] = [
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
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": true,
		"description": "Whether to return all results or only up to a given limit",
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
					"Canned Responses"
				],
				"operation": [
					"Get Account Canned Response"
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
	}
];
