import type { INodeProperties } from 'n8n-workflow';

export const messages: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				]
			}
		},
		"options": [
			{
				"name": "List All Messages",
				"value": "List All Messages",
				"action": "Get messages",
				"description": "List all messages of a conversation",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/conversations/{{ encodeURIComponent($parameter[\"conversation_id\"]) }}/messages"
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
				"name": "Create A New Message In A Conversation",
				"value": "Create A New Message In A Conversation",
				"action": "Create New Message",
				"description": "Create a new message in the conversation.\n\nUse `application/json` for text messages and `multipart/form-data` when the\nmessage includes file attachments.\n\n### Multipart attachment request\n\nSend files with the `attachments[]` form field. `curl -F` sets the\n`multipart/form-data` content type and boundary automatically.\n\n```bash\ncurl -X POST \"https://app.chatwoot.com/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages\" \\\n  -H \"Authorization: Bearer <your-api-token>\" \\\n  -F \"content=Here is the screenshot\" \\\n  -F \"message_type=outgoing\" \\\n  -F \"private=false\" \\\n  -F \"attachments[]=@/path/to/screenshot.png\"\n```\n\n## WhatsApp Template Messages\n\nFor WhatsApp channels, you can send structured template messages using the `template_params` field. \nTemplates must be pre-approved in WhatsApp Business Manager.\n\nBy default, `content` is treated as the already-rendered transcript text for\ncompatibility with existing API and mobile clients. To submit the original\ntemplate body instead, set `template_params.content_mode` to `raw_template`;\nChatwoot will substitute `processed_params.body` before saving the transcript.\n\n### Example Templates\n\n**Text with Image Header:**\n```json\n{\n  \"content\": \"Hi your order 121212 is confirmed. Please wait for further updates\",\n  \"template_params\": {\n    \"name\": \"order_confirmation\",\n    \"category\": \"MARKETING\",\n    \"language\": \"en\",\n    \"processed_params\": {\n      \"body\": {\n        \"1\": \"121212\"\n      },\n      \"header\": {\n        \"media_url\": \"https://picsum.photos/200/300\",\n        \"media_type\": \"image\"\n      }\n    }\n  }\n}\n```\n\n**Text with Copy Code Button:**\n```json\n{\n  \"content\": \"Special offer! Get 30% off your next purchase. Use the code below\",\n  \"template_params\": {\n    \"name\": \"discount_coupon\",\n    \"category\": \"MARKETING\",\n    \"language\": \"en\",\n    \"processed_params\": {\n      \"body\": {\n        \"discount_percentage\": \"30\"\n      },\n      \"buttons\": [{\n        \"type\": \"copy_code\",\n        \"parameter\": \"SAVE20\"\n      }]\n    }\n  }\n}\n```\n",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/conversations/{{ encodeURIComponent($parameter[\"conversation_id\"]) }}/messages"
					}
				}
			},
			{
				"name": "Update Message Status",
				"value": "Update Message Status",
				"action": "Update message status",
				"description": "Updates the delivery status of a single message. Available only for messages in\nAPI channel inboxes, where your own system is responsible for delivering messages\nand reporting what happened. Use this to push `sent`, `delivered`, and `read`\nreceipts into Chatwoot, for example, to mark an agent's message as read when the\nend user views it in your client, so the agent sees the read indicator on the\nmessage.\n\nA message already marked `read` cannot be moved back to `delivered`. When\nreporting a failure, include `external_error` with the reason, which is shown to\nthe agent along with the failed indicator.\n",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/conversations/{{ encodeURIComponent($parameter[\"conversation_id\"]) }}/messages/{{ encodeURIComponent($parameter[\"message_id\"]) }}"
					}
				}
			},
			{
				"name": "Delete A Message",
				"value": "Delete A Message",
				"action": "Delete a message",
				"description": "Delete a message and it's attachments from the conversation.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{ encodeURIComponent($parameter[\"account_id\"]) }}/conversations/{{ encodeURIComponent($parameter[\"conversation_id\"]) }}/messages/{{ encodeURIComponent($parameter[\"message_id\"]) }}"
					}
				}
			}
		],
		"default": "List All Messages"
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
					"Messages"
				],
				"operation": [
					"List All Messages",
					"Create A New Message In A Conversation",
					"Update Message Status",
					"Delete A Message"
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
					"Messages"
				],
				"operation": [
					"List All Messages",
					"Create A New Message In A Conversation",
					"Update Message Status",
					"Delete A Message"
				]
			}
		}
	},
	{
		"displayName": "Message Id",
		"name": "message_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The numeric ID of the message",
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"Update Message Status",
					"Delete A Message"
				]
			}
		}
	},
	{
		"displayName": "Content",
		"name": "content",
		"type": "string",
		"default": "",
		"required": true,
		"description": "The content of the message",
		"routing": {
			"send": {
				"type": "body",
				"property": "content"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Messages"
				],
				"operation": [
					"Create A New Message In A Conversation"
				]
			}
		}
	},
	{
		"displayName": "Status",
		"name": "status",
		"type": "options",
		"default": "sent",
		"required": true,
		"description": "The new status of the message",
		"options": [
			{
				"name": "sent",
				"value": "sent"
			},
			{
				"name": "delivered",
				"value": "delivered"
			},
			{
				"name": "read",
				"value": "read"
			},
			{
				"name": "failed",
				"value": "failed"
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
					"Messages"
				],
				"operation": [
					"Update Message Status"
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
					"Messages"
				],
				"operation": [
					"List All Messages"
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
					"Messages"
				],
				"operation": [
					"List All Messages"
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
					"Messages"
				],
				"operation": [
					"List All Messages"
				]
			}
		},
		"options": [
			{
				"displayName": "After",
				"name": "after",
				"type": "number",
				"default": 0,
				"description": "Fetch messages after the message with this ID. Returns up to 100 messages in ascending order.",
				"routing": {
					"send": {
						"type": "query",
						"property": "after"
					}
				}
			},
			{
				"displayName": "Before",
				"name": "before",
				"type": "number",
				"default": 0,
				"description": "Fetch messages before the message with this ID. Returns up to 20 messages in ascending order.",
				"routing": {
					"send": {
						"type": "query",
						"property": "before"
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
					"Messages"
				],
				"operation": [
					"Create A New Message In A Conversation"
				]
			}
		},
		"options": [
			{
				"displayName": "Campaign Id",
				"name": "campaign_id",
				"type": "number",
				"default": 0,
				"description": "The campaign id to which the message belongs",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign_id"
					}
				}
			},
			{
				"displayName": "Content Attributes",
				"name": "content_attributes",
				"type": "json",
				"default": "{}",
				"description": "Attributes based on the content type. For `input_select`, provide an `items` array with\n`title`, `value`, and optional `description`. WhatsApp list messages use `description`\nas the row subtitle when present.\n",
				"routing": {
					"send": {
						"type": "body",
						"property": "content_attributes",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Content Type",
				"name": "content_type",
				"type": "options",
				"default": "text",
				"description": "Content type of the message",
				"options": [
					{
						"name": "text",
						"value": "text"
					},
					{
						"name": "input_email",
						"value": "input_email"
					},
					{
						"name": "cards",
						"value": "cards"
					},
					{
						"name": "input_select",
						"value": "input_select"
					},
					{
						"name": "form",
						"value": "form"
					},
					{
						"name": "article",
						"value": "article"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "content_type"
					}
				}
			},
			{
				"displayName": "Message Type",
				"name": "message_type",
				"type": "options",
				"default": "outgoing",
				"description": "The type of the message",
				"options": [
					{
						"name": "outgoing",
						"value": "outgoing"
					},
					{
						"name": "incoming",
						"value": "incoming"
					}
				],
				"routing": {
					"send": {
						"type": "body",
						"property": "message_type"
					}
				}
			},
			{
				"displayName": "Private",
				"name": "private",
				"type": "boolean",
				"default": false,
				"description": "Flag to identify if it is a private note",
				"routing": {
					"send": {
						"type": "body",
						"property": "private"
					}
				}
			},
			{
				"displayName": "Template Params",
				"name": "template_params",
				"type": "json",
				"default": "{}",
				"description": "WhatsApp template parameters for sending structured messages",
				"routing": {
					"send": {
						"type": "body",
						"property": "template_params",
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
					"Messages"
				],
				"operation": [
					"Update Message Status"
				]
			}
		},
		"options": [
			{
				"displayName": "External Error",
				"name": "external_error",
				"type": "string",
				"default": "",
				"description": "Error description, stored only when status is failed",
				"routing": {
					"send": {
						"type": "body",
						"property": "external_error"
					}
				}
			}
		]
	}
];
