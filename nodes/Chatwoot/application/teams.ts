import type { INodeProperties } from 'n8n-workflow';

export const teams: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				]
			}
		},
		"options": [
			{
				"name": "List All Teams",
				"value": "List All Teams",
				"action": "List all teams",
				"description": "List all teams available in the current account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams"
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
				"name": "Create A Team",
				"value": "Create A Team",
				"action": "Create a team (Admin)",
				"description": "Requires an administrator token. Create a team in the account",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams"
					}
				}
			},
			{
				"name": "Get Details Of A Single Team",
				"value": "Get Details Of A Single Team",
				"action": "Get a team details",
				"description": "Get the details of a team in the account",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
					}
				}
			},
			{
				"name": "Update A Team",
				"value": "Update A Team",
				"action": "Update a team (Admin)",
				"description": "Requires an administrator token. Update a team's attributes",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
					}
				}
			},
			{
				"name": "Delete A Team",
				"value": "Delete A Team",
				"action": "Delete a team (Admin)",
				"description": "Requires an administrator token. Delete a team from the account",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
					}
				}
			},
			{
				"name": "Get Team Members",
				"value": "Get Team Members",
				"action": "List Agents in Team",
				"description": "Get Details of Agents in an Team",
				"routing": {
					"request": {
						"method": "GET",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
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
				"name": "Add New Agent To Team",
				"value": "Add New Agent To Team",
				"action": "Add a New Agent (Admin)",
				"description": "Requires an administrator token. Add a new Agent to Team",
				"routing": {
					"request": {
						"method": "POST",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
					}
				}
			},
			{
				"name": "Update Agents In Team",
				"value": "Update Agents In Team",
				"action": "Update Agents in Team (Admin)",
				"description": "Requires an administrator token. All agents except the one passed in params will be removed",
				"routing": {
					"request": {
						"method": "PATCH",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
					}
				}
			},
			{
				"name": "Delete Agent In Team",
				"value": "Delete Agent In Team",
				"action": "Remove an Agent from Team (Admin)",
				"description": "Requires an administrator token. Remove an Agent from Team",
				"routing": {
					"request": {
						"method": "DELETE",
						"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
					}
				}
			}
		],
		"default": "List All Teams"
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
					"Teams"
				],
				"operation": [
					"List All Teams",
					"Create A Team",
					"Get Details Of A Single Team",
					"Update A Team",
					"Delete A Team",
					"Get Team Members",
					"Add New Agent To Team",
					"Update Agents In Team",
					"Delete Agent In Team"
				]
			}
		}
	},
	{
		"displayName": "Team Id",
		"name": "team_id",
		"type": "number",
		"default": 0,
		"required": true,
		"description": "The ID of the team to be updated",
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Get Details Of A Single Team",
					"Update A Team",
					"Delete A Team",
					"Get Team Members",
					"Add New Agent To Team",
					"Update Agents In Team",
					"Delete Agent In Team"
				]
			}
		}
	},
	{
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "IDs of users to be added to the team",
		"routing": {
			"send": {
				"type": "body",
				"property": "user_ids",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Add New Agent To Team",
					"Update Agents In Team"
				]
			}
		}
	},
	{
		"displayName": "User Ids",
		"name": "user_ids",
		"type": "json",
		"default": "[]",
		"required": true,
		"description": "IDs of users to be deleted from the team",
		"routing": {
			"send": {
				"type": "body",
				"property": "user_ids",
				"value": "={{ typeof $value === 'string' ? JSON.parse($value) : $value }}"
			}
		},
		"displayOptions": {
			"show": {
				"resource": [
					"Teams"
				],
				"operation": [
					"Delete Agent In Team"
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
					"Teams"
				],
				"operation": [
					"List All Teams",
					"Get Team Members"
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
					"Teams"
				],
				"operation": [
					"List All Teams",
					"Get Team Members"
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
					"Teams"
				],
				"operation": [
					"Create A Team"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Auto Assign",
				"name": "allow_auto_assign",
				"type": "boolean",
				"default": false,
				"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
				"routing": {
					"send": {
						"type": "body",
						"property": "allow_auto_assign"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description of the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Icon",
				"name": "icon",
				"type": "string",
				"default": "",
				"description": "An emoji or icon shown next to the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon"
					}
				}
			},
			{
				"displayName": "Icon Color",
				"name": "icon_color",
				"type": "string",
				"default": "",
				"description": "The color used for the team icon",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon_color"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the team",
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
					"Teams"
				],
				"operation": [
					"Update A Team"
				]
			}
		},
		"options": [
			{
				"displayName": "Allow Auto Assign",
				"name": "allow_auto_assign",
				"type": "boolean",
				"default": false,
				"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
				"routing": {
					"send": {
						"type": "body",
						"property": "allow_auto_assign"
					}
				}
			},
			{
				"displayName": "Description",
				"name": "description",
				"type": "string",
				"default": "",
				"description": "The description of the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "description"
					}
				}
			},
			{
				"displayName": "Icon",
				"name": "icon",
				"type": "string",
				"default": "",
				"description": "An emoji or icon shown next to the team",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon"
					}
				}
			},
			{
				"displayName": "Icon Color",
				"name": "icon_color",
				"type": "string",
				"default": "",
				"description": "The color used for the team icon",
				"routing": {
					"send": {
						"type": "body",
						"property": "icon_color"
					}
				}
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"description": "The name of the team",
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
