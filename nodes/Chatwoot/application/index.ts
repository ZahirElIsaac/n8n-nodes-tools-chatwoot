import type { INodeProperties } from 'n8n-workflow';
import { account } from './account';
import { accountAgentBots } from './account-agent-bots';
import { agents } from './agents';
import { auditLogs } from './audit-logs';
import { automationRule } from './automation-rule';
import { campaigns } from './campaigns';
import { cannedResponses } from './canned-responses';
import { contactLabels } from './contact-labels';
import { contacts } from './contacts';
import { conversationAssignments } from './conversation-assignments';
import { conversations } from './conversations';
import { customAttributes } from './custom-attributes';
import { customFilters } from './custom-filters';
import { inboxes } from './inboxes';
import { integrations } from './integrations';
import { labels } from './labels';
import { messages } from './messages';
import { profile } from './profile';
import { reports } from './reports';
import { teams } from './teams';
import { webhooks } from './webhooks';

const resourceSelector: INodeProperties = {
	"displayName": "Resource",
	"name": "resource",
	"type": "options",
	"noDataExpression": true,
	"options": [
		{
			"name": "Account",
			"value": "Account",
			"description": ""
		},
		{
			"name": "Account Agent Bots",
			"value": "Account Agent Bots",
			"description": "Account-specific Agent Bots"
		},
		{
			"name": "Agents",
			"value": "Agents",
			"description": "Agent management APIs"
		},
		{
			"name": "Audit Logs",
			"value": "Audit Logs",
			"description": ""
		},
		{
			"name": "Automation Rule",
			"value": "Automation Rule",
			"description": "Workflow automation rules"
		},
		{
			"name": "Campaigns",
			"value": "Campaigns",
			"description": "Create, schedule, and manage campaigns. Requires an account administrator and API access enabled for the account."
		},
		{
			"name": "Canned Responses",
			"value": "Canned Responses",
			"description": "Pre-defined responses for common queries"
		},
		{
			"name": "Contact Labels",
			"value": "Contact Labels",
			"description": "Manage contact labels"
		},
		{
			"name": "Contacts",
			"value": "Contacts",
			"description": "Contact management APIs"
		},
		{
			"name": "Conversation Assignments",
			"value": "Conversation Assignments",
			"description": "Manage conversation assignments"
		},
		{
			"name": "Conversations",
			"value": "Conversations",
			"description": "Conversation management APIs"
		},
		{
			"name": "Custom Attributes",
			"value": "Custom Attributes",
			"description": "Custom fields for contacts and conversations"
		},
		{
			"name": "Custom Filters",
			"value": "Custom Filters",
			"description": "Saved filters for conversations"
		},
		{
			"name": "Inboxes",
			"value": "Inboxes",
			"description": "Communication channels setup"
		},
		{
			"name": "Integrations",
			"value": "Integrations",
			"description": "Third-party integrations"
		},
		{
			"name": "Labels",
			"value": "Labels",
			"description": "Account label management APIs"
		},
		{
			"name": "Messages",
			"value": "Messages",
			"description": "Message management APIs"
		},
		{
			"name": "Profile",
			"value": "Profile",
			"description": "User profile APIs"
		},
		{
			"name": "Reports",
			"value": "Reports",
			"description": "Analytics and reporting APIs"
		},
		{
			"name": "Teams",
			"value": "Teams",
			"description": "Team management APIs"
		},
		{
			"name": "Webhooks",
			"value": "Webhooks",
			"description": "Event notification webhooks"
		}
	],
	"default": "Account"
};

export const applicationResources: INodeProperties[] = [
	resourceSelector,
	...account,
	...accountAgentBots,
	...agents,
	...auditLogs,
	...automationRule,
	...campaigns,
	...cannedResponses,
	...contactLabels,
	...contacts,
	...conversationAssignments,
	...conversations,
	...customAttributes,
	...customFilters,
	...inboxes,
	...integrations,
	...labels,
	...messages,
	...profile,
	...reports,
	...teams,
	...webhooks,
];
