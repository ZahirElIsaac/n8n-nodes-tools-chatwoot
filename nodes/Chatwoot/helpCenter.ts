import type { IDataObject, INodeProperties, INodePropertyOptions, PostReceiveAction } from 'n8n-workflow';

type Kind = 'portal' | 'category' | 'article';

const RESOURCE: Record<Kind, string> = {
	portal: 'HelpCenterPortal',
	category: 'HelpCenterCategory',
	article: 'HelpCenterArticle',
};

export const helpCenterResources: INodePropertyOptions[] = [
	{ name: 'Article', value: RESOURCE.article, description: 'Articles of a portal' },
	{ name: 'Category', value: RESOURCE.category, description: 'Categories of a portal' },
	{ name: 'Portal', value: RESOURCE.portal, description: 'Portals of the Help Center' },
];

const unwrapPayload: PostReceiveAction = async function (items) {
	return items.flatMap((item) => {
		const payload = (item.json.payload ?? item.json) as IDataObject | IDataObject[];
		return (Array.isArray(payload) ? payload : [payload]).map((json) => ({ json }));
	});
};

const base = '=/api/v1/accounts/{{$parameter["account_id"]}}/portals';
const portalUrl = `${base}/{{$parameter["portal_slug"]}}`;
const collectionUrl = (kind: Kind) => `${portalUrl}/${kind === 'category' ? 'categories' : 'articles'}`;
const itemUrl = (kind: Kind) => `${collectionUrl(kind)}/{{$parameter["${kind}_id"]}}`;

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';
const operation = (name: string, action: string, method: Method, url: string, admin = true): INodePropertyOptions => ({
	name,
	value: name,
	action: admin ? `${action} (Admin)` : action,
	...(admin && { description: 'Requires an administrator token' }),
	routing: { request: { method, url }, output: { postReceive: [unwrapPayload] } },
});

const OPERATIONS: Record<Kind, INodePropertyOptions[]> = {
	portal: [
		operation('Get Many', 'Get many portals', 'GET', base, false),
		operation('Get', 'Get a portal', 'GET', portalUrl, false),
		operation('Create', 'Create a portal', 'POST', base),
		operation('Update', 'Update a portal', 'PATCH', portalUrl),
	],
	category: [
		operation('Get Many', 'Get many categories', 'GET', collectionUrl('category'), false),
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

const show = (kind: Kind, operations?: string[]) => ({
	show: { resource: [RESOURCE[kind]], ...(operations && { operation: operations }) },
});

type FieldKind = 'string' | 'number' | 'boolean';
const field = (
	displayName: string,
	name: string,
	type: FieldKind = 'string',
	send: 'body' | 'query' | 'none' = 'body',
	extra: Partial<INodeProperties> = {},
): INodeProperties =>
	({
		displayName,
		name,
		type,
		default: type === 'number' ? 0 : type === 'boolean' ? false : '',
		...(send !== 'none' && { routing: { send: { type: send, property: name } } }),
		...extra,
	}) as INodeProperties;

const STATUS = [
	{ name: 'Draft', value: 0 },
	{ name: 'Published', value: 1 },
	{ name: 'Archived', value: 2 },
];

const optional: Record<Kind, INodeProperties[]> = {
	portal: [
		field('Color', 'color'),
		field('Custom Domain', 'custom_domain'),
		field('Header Text', 'header_text'),
		field('Homepage Link', 'homepage_link'),
		field('Name', 'name'),
		field('Page Title', 'page_title'),
		field('Slug', 'slug'),
	],
	category: [
		field('Description', 'description'),
		field('Locale', 'locale'),
		field('Name', 'name'),
		field('Parent Category ID', 'parent_category_id', 'number'),
		field('Position', 'position', 'number'),
		field('Slug', 'slug'),
	],
	article: [
		field('Author ID', 'author_id', 'number'),
		field('Category ID', 'category_id', 'number'),
		field('Content', 'content'),
		field('Description', 'description'),
		field('Locale', 'locale'),
		field('Position', 'position', 'number'),
		field('Slug', 'slug'),
		field('Status', 'status', 'number', 'body', { type: 'options', options: STATUS, default: 0 }),
		field('Title', 'title'),
	],
};

const requiredOnCreate: Record<Kind, INodeProperties[]> = {
	portal: [field('Name', 'name', 'string', 'body', { required: true }), field('Slug', 'slug', 'string', 'body', { required: true })],
	category: [
		field('Name', 'name', 'string', 'body', { required: true }),
		field('Slug', 'slug', 'string', 'body', { required: true }),
		field('Locale', 'locale', 'string', 'body', {
			description: "Locale of the category (e.g. es). It must be one of the portal's locales",
			routing: { send: { type: 'body', property: 'locale', value: '={{ $value || undefined }}' } },
		}),
	],
	article: [
		field('Title', 'title', 'string', 'body', { required: true }),
		field('Content', 'content', 'string', 'body', { required: true, description: 'Article body (Markdown)' }),
	],
};

const withDisplay = (properties: INodeProperties[], displayOptions: INodeProperties['displayOptions']) =>
	properties.map((property) => ({ ...property, displayOptions }));

const kindProperties = (kind: Kind): INodeProperties[] => {
	const scoped = kind !== 'portal';
	const requiredNames = requiredOnCreate[kind].map((property) => property.name);
	return [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: show(kind),
			options: OPERATIONS[kind],
			default: 'Get Many',
		},
		field('Account ID', 'account_id', 'number', 'none', { required: true, default: 0, displayOptions: show(kind) }),
		field('Portal Slug', 'portal_slug', 'string', 'none', {
			required: true,
			description: 'Slug of the portal',
			displayOptions: show(kind, scoped ? undefined : ['Get', 'Update']),
		}),
		...(scoped
			? [
					field('ID', `${kind}_id`, 'string', 'none', {
						required: true,
						displayName: kind === 'category' ? 'Category ID' : 'Article ID',
						displayOptions: show(kind, ['Get', 'Update', 'Delete']),
					}),
				]
			: []),
		...withDisplay(requiredOnCreate[kind], show(kind, ['Create'])),
		{
			displayName: 'Fields',
			name: 'fields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions: show(kind, ['Create']),
			options: optional[kind].filter((property) => !requiredNames.includes(property.name)),
		},
		{
			displayName: 'Fields',
			name: 'fields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions: show(kind, ['Update']),
			options: optional[kind],
		},
	];
};

const articlePaging: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: show('article', ['Get Many']),
		routing: { send: { paginate: '={{ true }}' } },
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1 },
		description: 'Max number of results to return',
		displayOptions: { show: { resource: [RESOURCE.article], operation: ['Get Many'], returnAll: [false] } },
		routing: { send: { paginate: '={{ true }}' }, output: { maxResults: '={{ $value }}' } },
	},
];

const articleFilters: INodeProperties = {
	displayName: 'Filters',
	name: 'filters',
	type: 'collection',
	placeholder: 'Add Filter',
	default: {},
	displayOptions: show('article', ['Get Many']),
	options: [
		field('Author ID', 'author_id', 'string', 'query'),
		field('Category Slug', 'category_slug', 'string', 'query'),
		field('Locale', 'locale', 'string', 'query'),
		field('Page', 'page', 'number', 'query', { default: 1, typeOptions: { minValue: 1 } }),
		field('Search Query', 'query', 'string', 'query'),
		field('Status', 'status', 'number', 'query', { type: 'options', options: STATUS, default: 1 }),
	],
};

export const helpCenterProperties: INodeProperties[] = [
	...kindProperties('portal'),
	...kindProperties('category'),
	...kindProperties('article'),
	...articlePaging,
	articleFilters,
];
