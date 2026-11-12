import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { applicationResources } from './application';
import { BOT_OPERATIONS, botProperties } from './bot';
import { helpCenterProperties, helpCenterResources } from './help-center';
import { withPagination } from './pagination';
import { platformResources } from './platform';
import { scope, selectors } from './selectors';

const [applicationSelector, ...applicationOperations] = applicationResources;
const [platformSelector, ...platformOperations] = platformResources;

const application: INodeProperties[] = [
	...selectors('application', [...(applicationSelector.options as INodePropertyOptions[]), ...helpCenterResources]),
	...scope('application', withPagination([...applicationOperations, ...helpCenterProperties])),
];
const platform: INodeProperties[] = [
	...selectors('platform', platformSelector.options as INodePropertyOptions[]),
	...scope('platform', platformOperations),
];

const bot: INodeProperties[] = [
	...selectors('bot', (applicationSelector.options as INodePropertyOptions[]).filter(({ value }) => String(value) in BOT_OPERATIONS)),
	...scope('bot', botProperties(applicationOperations)),
];

export const chatwootProperties: INodeProperties[] = [
	{
		displayName: 'API',
		name: 'api',
		type: 'options',
		noDataExpression: true,
		options: [
			{ name: 'Application (Admin / Agent Token)', value: 'application' },
			{ name: 'Platform (Super Admin Token)', value: 'platform' },
			{ name: 'Agent Bot (Bot Token)', value: 'bot' },
		],
		default: 'application',
	},
	...application,
	...platform,
	...bot,
];
