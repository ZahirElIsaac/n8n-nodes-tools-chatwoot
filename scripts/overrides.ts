import type { Override } from '@devlikeapro/n8n-openapi-node';

export const overrides: Override[] = [
	{ find: { name: 'account_id', type: 'number' }, replace: { default: 1 } },
];
