import type { IDataObject, INodePropertyOptions, PostReceiveAction } from 'n8n-workflow';
import type { Kind } from './shared';

const unwrapPayload: PostReceiveAction = async function (items) {
	return items.flatMap((item) => {
		const payload = (item.json.payload ?? item.json) as IDataObject | IDataObject[];
		return (Array.isArray(payload) ? payload : [payload]).map((json) => ({ json }));
	});
};

const limitResults: PostReceiveAction = {
	type: 'limit',
	properties: { maxResults: '={{ $parameter["returnAll"] ? 100000 : $parameter["limit"] }}' },
};

const base = '=/api/v1/accounts/{{$parameter["account_id"]}}/portals';
const portalUrl = `${base}/{{$parameter["portal_slug"]}}`;
const collectionUrl = (kind: Kind) => `${portalUrl}/${kind === 'category' ? 'categories' : 'articles'}`;
const itemUrl = (kind: Kind) => `${collectionUrl(kind)}/{{$parameter["${kind}_id"]}}`;

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const operation = (name: string, action: string, method: Method, url: string, admin = true, list = false): INodePropertyOptions => ({
	name,
	value: name,
	action: admin ? `${action} (Admin)` : action,
	...(admin && { description: 'Requires an administrator token' }),
	routing: { request: { method, url }, output: { postReceive: [unwrapPayload, ...(list ? [limitResults] : [])] } },
});

export const OPERATIONS: Record<Kind, INodePropertyOptions[]> = {
	portal: [
		operation('Get Many', 'Get many portals', 'GET', base, false, true),
		operation('Get', 'Get a portal', 'GET', portalUrl, false),
		operation('Create', 'Create a portal', 'POST', base),
		operation('Update', 'Update a portal', 'PATCH', portalUrl),
	],
	category: [
		operation('Get Many', 'Get many categories', 'GET', collectionUrl('category'), false, true),
		operation('Get', 'Get a category', 'GET', itemUrl('category')),
		operation('Create', 'Create a category', 'POST', collectionUrl('category')),
		operation('Update', 'Update a category', 'PATCH', itemUrl('category')),
		operation('Delete', 'Delete a category', 'DELETE', itemUrl('category')),
	],
	article: [
		operation('Get Many', 'Get many articles', 'GET', collectionUrl('article'), false),
		operation('Get', 'Get an article', 'GET', itemUrl('article')),
		operation('Create', 'Create an article', 'POST', collectionUrl('article')),
		operation('Update', 'Update an article', 'PATCH', itemUrl('article')),
		operation('Delete', 'Delete an article', 'DELETE', itemUrl('article')),
	],
};
