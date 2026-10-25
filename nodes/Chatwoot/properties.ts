import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { applicationResources } from './application';
import { helpCenterProperties, helpCenterResources } from './helpCenter';
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

export const chatwootProperties: INodeProperties[] = [
	{
		displayName: 'API',
		name: 'api',
		type: 'options',
		noDataExpression: true,
		options: [
			{ name: 'Application (Admin / Agent Token)', value: 'application' },
			{ name: 'Platform (Super Admin Token)', value: 'platform' },
		],
		default: 'application',
	},
	...application,
	...platform,
];
