export type Api = 'application' | 'platform';

export const DOMAINS: Record<Api, Record<string, string[]>> = {
	application: {
		Account: ['Account', 'Agents', 'Teams', 'Profile', 'Audit Logs', 'Reports'],
		Contacts: ['Contacts', 'Contact Labels'],
		Conversations: ['Conversations', 'Conversation Assignments', 'Messages', 'Canned Responses', 'Custom Filters'],
		'Inboxes & Campaigns': ['Inboxes', 'Campaigns'],
		'Labels & Attributes': ['Labels', 'Custom Attributes'],
		Automation: ['Automation Rule', 'Webhooks', 'Integrations', 'Account Agent Bots'],
		'Help Center': ['HelpCenterPortal', 'HelpCenterCategory', 'HelpCenterArticle'],
	},
	platform: {
		Platform: ['Accounts', 'Account Users', 'Users', 'Agent Bots'],
	},
};
