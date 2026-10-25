import type { INodeProperties } from 'n8n-workflow';

export const campaigns: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				]
			}
		},
		"options": [
			{
				"name": "List Campaigns",
				"value": "List Campaigns",
				"action": "List campaigns (Admin)",
				"description": "Requires an administrator token. List all campaigns in the account. The response is an unpaginated array. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns"
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
				"name": "Create Campaign",
				"value": "Create Campaign",
				"action": "Create a campaign (Admin)",
				"description": "Requires an administrator token. Create a campaign. For a supported messaging inbox, provide scheduled_at to schedule a one-off campaign; omitting it makes the campaign eligible for the next scheduler run. Website campaigns use trigger_rules instead. Channel-specific campaign availability and requirements still apply. One-off campaigns require at least one audience label for delivery. WhatsApp campaigns also require template_params with the selected template name, language, and any variable values. A successful creation response does not confirm delivery. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns"
					}
				}
			},
			{
				"name": "Get Campaign",
				"value": "Get Campaign",
				"action": "Get a campaign (Admin)",
				"description": "Requires an administrator token. Retrieve a campaign using its account-scoped ID. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Update Campaign",
				"value": "Update Campaign",
				"action": "Update a campaign (Admin)",
				"description": "Requires an administrator token. Update campaign fields, including scheduled_at to reschedule an active one-off campaign. Completed campaigns cannot be updated. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns/{{$parameter[\"id\"]}}"
					}
				}
			},
			{
				"name": "Delete Campaign",
				"value": "Delete Campaign",
				"action": "Delete a campaign (Admin)",
				"description": "Requires an administrator token. Delete a campaign from the account. Requires an account administrator and API access enabled for the account.",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/campaigns/{{$parameter[\"id\"]}}"
					}
				}
			}
		],
		"default": "List Campaigns"
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
					"Campaigns"
				],
				"operation": [
					"List Campaigns",
					"Create Campaign",
					"Get Campaign",
					"Update Campaign",
					"Delete Campaign"
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
		"description": "Account-scoped campaign ID returned by the campaign API.",
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Get Campaign",
					"Update Campaign",
					"Delete Campaign"
				]
			}
		}
	},
	{
		"displayName": "Title",
		"name": "title",
		"type": "string",
		"default": "",
		"required": true,
		"description": "Campaign title.",
		"routing": {
			"send": {
				"type": "body",
				"property": "campaign.title"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
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
		"description": "ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.",
		"routing": {
			"send": {
				"type": "body",
				"property": "campaign.inbox_id"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
				]
			}
		}
	},
	{
		"displayName": "Message",
		"name": "message",
		"type": "string",
		"default": "",
		"required": true,
		"description": "Campaign message content.",
		"routing": {
			"send": {
				"type": "body",
				"property": "campaign.message"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
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
					"Campaigns"
				],
				"operation": [
					"List Campaigns"
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
					"Campaigns"
				],
				"operation": [
					"List Campaigns"
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
					"Campaigns"
				],
				"operation": [
					"Create Campaign"
				]
			}
		},
		"options": [
			{
				"displayName": "Audience",
				"name": "audience",
				"type": "json",
				"default": "[]",
				"description": "Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.audience",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "Internal description of the campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.description"
					}
				}
			},
			{
				"displayName": "Enabled",
				"name": "enabled",
				"type": "boolean",
				"default": false,
				"description": "Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.enabled"
					}
				}
			},
			{
				"displayName": "Scheduled At",
				"name": "scheduled_at",
				"type": "string",
				"default": "",
				"description": "Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.scheduled_at"
					}
				}
			},
			{
				"displayName": "Sender Id",
				"name": "sender_id",
				"type": "number",
				"default": 0,
				"description": "ID of a user in this account to use as the campaign sender.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.sender_id"
					}
				}
			},
			{
				"displayName": "Template Params",
				"name": "template_params",
				"type": "json",
				"default": "{}",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.template_params",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Trigger Only During Business Hours",
				"name": "trigger_only_during_business_hours",
				"type": "boolean",
				"default": false,
				"description": "Restrict an ongoing website campaign to inbox business hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_only_during_business_hours"
					}
				}
			},
			{
				"displayName": "Trigger Rules",
				"name": "trigger_rules",
				"type": "json",
				"default": "{}",
				"description": "Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_rules",
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
					"Campaigns"
				],
				"operation": [
					"Update Campaign"
				]
			}
		},
		"options": [
			{
				"displayName": "Audience",
				"name": "audience",
				"type": "json",
				"default": "[]",
				"description": "Required when creating a one-off SMS or WhatsApp campaign. Provide at least one label from this account. Contacts matching any selected label are included. When updating, omit this field to retain the existing audience.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.audience",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "Internal description of the campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.description"
					}
				}
			},
			{
				"displayName": "Enabled",
				"name": "enabled",
				"type": "boolean",
				"default": false,
				"description": "Whether an ongoing website campaign is enabled. This does not cancel a scheduled one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.enabled"
					}
				}
			},
			{
				"displayName": "Inbox Id",
				"name": "inbox_id",
				"type": "number",
				"default": 0,
				"description": "ID of an inbox in this account. Supported inbox types are Website, Twilio SMS, SMS, and WhatsApp.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.inbox_id"
					}
				}
			},
			{
				"displayName": "Message",
				"name": "message",
				"type": "string",
				"default": "",
				"description": "Campaign message content.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.message"
					}
				}
			},
			{
				"displayName": "Scheduled At",
				"name": "scheduled_at",
				"type": "string",
				"default": "",
				"description": "Scheduled time for a one-off campaign, as an ISO 8601 timestamp with timezone. Defaults to the current time when omitted; website campaigns ignore this field. Responses return Unix seconds instead.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.scheduled_at"
					}
				}
			},
			{
				"displayName": "Sender Id",
				"name": "sender_id",
				"type": "number",
				"default": 0,
				"description": "ID of a user in this account to use as the campaign sender.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.sender_id"
					}
				}
			},
			{
				"displayName": "Template Params",
				"name": "template_params",
				"type": "json",
				"default": "{}",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.template_params",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"description": "Campaign title.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.title"
					}
				}
			},
			{
				"displayName": "Trigger Only During Business Hours",
				"name": "trigger_only_during_business_hours",
				"type": "boolean",
				"default": false,
				"description": "Restrict an ongoing website campaign to inbox business hours.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_only_during_business_hours"
					}
				}
			},
			{
				"displayName": "Trigger Rules",
				"name": "trigger_rules",
				"type": "json",
				"default": "{}",
				"description": "Website campaign trigger rules. Defaults to an empty object and can be omitted for a one-off campaign.",
				"routing": {
					"send": {
						"type": "body",
						"property": "campaign.trigger_rules",
						"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
					}
				}
			}
		]
	}
];
