import type { INodeProperties } from 'n8n-workflow';

export const contacts: INodeProperties[] = [
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
				"name": "Contact Search",
				"value": "Contact Search",
				"action": "Search Contacts",
				"description": "Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/search"
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
				"name": "Contact Filter",
				"value": "Contact Filter",
				"action": "Contact Filter",
				"description": "Filter contacts with custom filter options and pagination",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/contacts/filter"
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
		"default": "Contact List"
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
					"Contacts"
				],
				"operation": [
					"Contact List",
					"Contact Create",
					"Contact Details",
					"Contact Update",
					"Contact Delete",
					"Contact Conversations",
					"Contact Search",
					"Contact Filter",
					"Contact Inbox Creation",
					"Contactable Inboxes Get",
					"Contact Merge"
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
					"Contacts"
				],
				"operation": [
					"Contact Details",
					"Contact Update",
					"Contact Delete",
					"Contact Conversations",
					"Contact Inbox Creation",
					"Contactable Inboxes Get"
				]
			}
		}
	},
	{
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "ID of the inbox to which the contact belongs",
		"routing": {
			"send": {
				"type": "body",
				"property": "inbox_id"
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
		"displayName": "Inbox Id",
		"name": "inbox_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the inbox",
		"routing": {
			"send": {
				"type": "body",
				"property": "inbox_id"
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
		"displayName": "Base Contact Id",
		"name": "base_contact_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "ID of the contact that will remain after the merge and receive all data",
		"routing": {
			"send": {
				"type": "body",
				"property": "base_contact_id"
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
		"displayName": "Mergee Contact Id",
		"name": "mergee_contact_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "ID of the contact that will be merged into the base contact and deleted",
		"routing": {
			"send": {
				"type": "body",
				"property": "mergee_contact_id"
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
					"Contacts"
				],
				"operation": [
					"Contact List",
					"Contact Search",
					"Contact Filter"
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
					"Contacts"
				],
				"operation": [
					"Contact List",
					"Contact Search",
					"Contact Filter"
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
					"Contacts"
				],
				"operation": [
					"Contact Conversations",
					"Contactable Inboxes Get"
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
					"Contacts"
				],
				"operation": [
					"Contact Conversations",
					"Contactable Inboxes Get"
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
					"Contacts"
				],
				"operation": [
					"Contact List"
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
			},
			{
				"displayName": "Sort",
				"name": "sort",
				"type": "options",
				"default": "name",
				"description": "The attribute by which list should be sorted",
				"options": [
					{
						"name": "name",
						"value": "name"
					},
					{
						"name": "email",
						"value": "email"
					},
					{
						"name": "phone_number",
						"value": "phone_number"
					},
					{
						"name": "last_activity_at",
						"value": "last_activity_at"
					},
					{
						"name": "-name",
						"value": "-name"
					},
					{
						"name": "-email",
						"value": "-email"
					},
					{
						"name": "-phone_number",
						"value": "-phone_number"
					},
					{
						"name": "-last_activity_at",
						"value": "-last_activity_at"
					}
				],
				"routing": {
					"send": {
						"type": "query",
						"property": "sort"
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
				"default": "{}",
				"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
				"routing": {
					"send": {
						"type": "body",
						"property": "additional_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
						"type": "body",
						"property": "avatar"
					}
				}
			},
			{
				"displayName": "Avatar Url",
				"name": "avatar_url",
				"type": "string",
				"default": "",
				"description": "The url to a jpeg, png file for the contact avatar",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar_url"
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
						"type": "body",
						"property": "blocked"
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
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "",
				"description": "email of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "email"
					}
				}
			},
			{
				"displayName": "Identifier",
				"name": "identifier",
				"type": "string",
				"default": "",
				"description": "A unique identifier for the contact in external system",
				"routing": {
					"send": {
						"type": "body",
						"property": "identifier"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "name of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Phone Number",
				"name": "phone_number",
				"type": "string",
				"default": "",
				"description": "phone number of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "phone_number"
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
				"default": "{}",
				"description": "An object where you can store additional attributes for contact. example {\"type\":\"customer\", \"age\":30}",
				"routing": {
					"send": {
						"type": "body",
						"property": "additional_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
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
						"type": "body",
						"property": "avatar"
					}
				}
			},
			{
				"displayName": "Avatar Url",
				"name": "avatar_url",
				"type": "string",
				"default": "",
				"description": "The url to a jpeg, png file for the contact avatar",
				"routing": {
					"send": {
						"type": "body",
						"property": "avatar_url"
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
						"type": "body",
						"property": "blocked"
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
						"type": "body",
						"property": "custom_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Email",
				"name": "email",
				"type": "string",
				"default": "",
				"description": "email of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "email"
					}
				}
			},
			{
				"displayName": "Identifier",
				"name": "identifier",
				"type": "string",
				"default": "",
				"description": "A unique identifier for the contact in external system",
				"routing": {
					"send": {
						"type": "body",
						"property": "identifier"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "name of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "name"
					}
				}
			},
			{
				"displayName": "Phone Number",
				"name": "phone_number",
				"type": "string",
				"default": "",
				"description": "phone number of the contact",
				"routing": {
					"send": {
						"type": "body",
						"property": "phone_number"
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
					"Contacts"
				],
				"operation": [
					"Contact Search"
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
			},
			{
				"displayName": "Q",
				"name": "q",
				"type": "string",
				"default": "",
				"description": "Search using contact `name`, `identifier`, `email` or `phone number`",
				"routing": {
					"send": {
						"type": "query",
						"property": "q"
					}
				}
			},
			{
				"displayName": "Sort",
				"name": "sort",
				"type": "options",
				"default": "name",
				"description": "The attribute by which list should be sorted",
				"options": [
					{
						"name": "name",
						"value": "name"
					},
					{
						"name": "email",
						"value": "email"
					},
					{
						"name": "phone_number",
						"value": "phone_number"
					},
					{
						"name": "last_activity_at",
						"value": "last_activity_at"
					},
					{
						"name": "-name",
						"value": "-name"
					},
					{
						"name": "-email",
						"value": "-email"
					},
					{
						"name": "-phone_number",
						"value": "-phone_number"
					},
					{
						"name": "-last_activity_at",
						"value": "-last_activity_at"
					}
				],
				"routing": {
					"send": {
						"type": "query",
						"property": "sort"
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
					"Contacts"
				],
				"operation": [
					"Contact Filter"
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
						"type": "body",
						"property": "source_id"
					}
				}
			}
		]
	}
];
