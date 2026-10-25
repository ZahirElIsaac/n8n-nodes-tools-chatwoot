import type { INodeProperties } from 'n8n-workflow';

export const customAttributes: INodeProperties[] = [
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
		"default": "Get Account Custom Attribute"
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
					"Custom Attributes"
				],
				"operation": [
					"Get Account Custom Attribute",
					"Add New Custom Attribute To Account",
					"Get Details Of A Single Custom Attribute",
					"Update Custom Attribute In Account",
					"Delete Custom Attribute From Account"
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
		"description": "The ID of the custom attribute to be updated.",
		"displayOptions": {
			"show": {
				"resource": [
					"Custom Attributes"
				],
				"operation": [
					"Get Details Of A Single Custom Attribute",
					"Update Custom Attribute In Account"
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
		"description": "The ID of the custom attribute to be deleted",
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
		"displayName": "Attribute Model",
		"name": "attribute_model",
		"type": "options",
		"default": "0",
		"required": true,
		"description": "conversation_attribute(0)/contact_attribute(1)",
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
				"property": "attribute_model"
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
		"displayName": "Return All",
		"name": "returnAll",
		"type": "boolean",
		"default": true,
		"description": "Whether to return all results or only up to a given limit",
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
					"Custom Attributes"
				],
				"operation": [
					"Get Account Custom Attribute"
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
				"default": "",
				"description": "Attribute description",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_description"
					}
				}
			},
			{
				"displayName": "Attribute Display Name",
				"name": "attribute_display_name",
				"type": "string",
				"default": "",
				"description": "Attribute display name",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_display_name"
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
						"type": "body",
						"property": "attribute_display_type"
					}
				}
			},
			{
				"displayName": "Attribute Key",
				"name": "attribute_key",
				"type": "string",
				"default": "",
				"description": "Attribute unique key value",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_key"
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
						"type": "body",
						"property": "attribute_model"
					}
				}
			},
			{
				"displayName": "Attribute Values",
				"name": "attribute_values",
				"type": "json",
				"default": "[]",
				"description": "Attribute values",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_values",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Regex Cue",
				"name": "regex_cue",
				"type": "string",
				"default": "",
				"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_cue"
					}
				}
			},
			{
				"displayName": "Regex Pattern",
				"name": "regex_pattern",
				"type": "string",
				"default": "",
				"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_pattern"
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
				"default": "",
				"description": "Attribute description",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_description"
					}
				}
			},
			{
				"displayName": "Attribute Display Name",
				"name": "attribute_display_name",
				"type": "string",
				"default": "",
				"description": "Attribute display name",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_display_name"
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
						"type": "body",
						"property": "attribute_display_type"
					}
				}
			},
			{
				"displayName": "Attribute Key",
				"name": "attribute_key",
				"type": "string",
				"default": "",
				"description": "Attribute unique key value",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_key"
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
						"type": "body",
						"property": "attribute_model"
					}
				}
			},
			{
				"displayName": "Attribute Values",
				"name": "attribute_values",
				"type": "json",
				"default": "[]",
				"description": "Attribute values",
				"routing": {
					"send": {
						"type": "body",
						"property": "attribute_values",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Regex Cue",
				"name": "regex_cue",
				"type": "string",
				"default": "",
				"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_cue"
					}
				}
			},
			{
				"displayName": "Regex Pattern",
				"name": "regex_pattern",
				"type": "string",
				"default": "",
				"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
				"routing": {
					"send": {
						"type": "body",
						"property": "regex_pattern"
					}
				}
			}
		]
	}
];
