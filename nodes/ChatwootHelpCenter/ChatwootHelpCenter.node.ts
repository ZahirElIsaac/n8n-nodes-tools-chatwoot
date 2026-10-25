import type {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	INodeExecutionData,
	INodeProperties,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

type Resource = 'portal' | 'category' | 'article';

const ops = (resource: Resource, values: Array<[string, string]>): INodeProperties => ({
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: { show: { resource: [resource] } },
	options: values.map(([value, name]) => ({ name, value, action: `${name} ${resource}` })),
	default: values[0][0],
});

const show = (resource: Resource, operation: string[]) => ({ resource: [resource], operation });

const text = (
	displayName: string,
	name: string,
	required = false,
	description = '',
): INodeProperties => ({ displayName, name, type: 'string', default: '', required, description });

export class ChatwootHelpCenter implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Chatwoot Help Center',
		name: 'chatwootHelpCenter',
		icon: 'file:chatwoot.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Manage Chatwoot Help Center portals, categories and articles',
		defaults: { name: 'Chatwoot Help Center' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [{ name: 'growyChatwootApi', required: true }],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Article', value: 'article' },
					{ name: 'Category', value: 'category' },
					{ name: 'Portal', value: 'portal' },
				],
				default: 'article',
			},
			ops('portal', [
				['getAll', 'Get Many'],
				['get', 'Get'],
				['create', 'Create'],
				['update', 'Update'],
			]),
			ops('category', [
				['getAll', 'Get Many'],
				['get', 'Get'],
				['create', 'Create'],
				['update', 'Update'],
				['delete', 'Delete'],
			]),
			ops('article', [
				['getAll', 'Get Many'],
				['get', 'Get'],
				['create', 'Create'],
				['update', 'Update'],
				['delete', 'Delete'],
			]),
			{
				...text('Portal Slug', 'portalSlug', true, 'Slug of the portal'),
				displayOptions: {
					show: {
						resource: ['portal', 'category', 'article'],
						operation: ['get', 'update', 'getAll', 'create', 'delete'],
					},
					hide: { resource: ['portal'], operation: ['getAll', 'create'] },
				},
			},
			{
				...text('Category ID', 'categoryId', true),
				displayOptions: { show: show('category', ['get', 'update', 'delete']) },
			},
			{
				...text('Article ID', 'articleId', true),
				displayOptions: { show: show('article', ['get', 'update', 'delete']) },
			},
			{
				...text('Title', 'title', true),
				displayOptions: { show: show('article', ['create']) },
			},
			{
				...text('Content', 'content', true, 'Article body (Markdown)'),
				displayOptions: { show: show('article', ['create']) },
			},
			{
				...text('Name', 'name', true),
				displayOptions: { show: show('category', ['create']) },
			},
			{
				...text('Name', 'name', true),
				displayOptions: { show: show('portal', ['create']) },
			},
			{
				...text('Slug', 'slug', true),
				displayOptions: { show: { resource: ['portal', 'category'], operation: ['create'] } },
			},
			{
				displayName: 'Return All',
				name: 'returnAll',
				type: 'boolean',
				default: false,
				displayOptions: { show: show('article', ['getAll']) },
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: { minValue: 1 },
				default: 25,
				displayOptions: { show: { ...show('article', ['getAll']), returnAll: [false] } },
			},
			{
				displayName: 'Filters',
				name: 'filters',
				type: 'collection',
				placeholder: 'Add Filter',
				default: {},
				displayOptions: { show: show('article', ['getAll']) },
				options: [
					text('Author ID', 'author_id'),
					text('Category Slug', 'category_slug'),
					text('Locale', 'locale'),
					text('Search Query', 'query'),
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						options: [
							{ name: 'Draft', value: 0 },
							{ name: 'Published', value: 1 },
							{ name: 'Archived', value: 2 },
						],
						default: 1,
					},
				],
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: { show: { resource: ['portal'], operation: ['create', 'update'] } },
				options: [
					text('Color', 'color'),
					text('Custom Domain', 'custom_domain'),
					text('Header Text', 'header_text'),
					text('Homepage Link', 'homepage_link'),
					text('Name', 'name'),
					text('Page Title', 'page_title'),
					text('Slug', 'slug'),
				],
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: { show: { resource: ['category'], operation: ['create', 'update'] } },
				options: [
					text('Description', 'description'),
					text('Locale', 'locale'),
					text('Name', 'name'),
					{ displayName: 'Position', name: 'position', type: 'number', default: 0 },
					text('Slug', 'slug'),
					text('Parent Category ID', 'parent_category_id'),
				],
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: { show: { resource: ['article'], operation: ['create', 'update'] } },
				options: [
					text('Author ID', 'author_id'),
					text('Category ID', 'category_id'),
					text('Content', 'content'),
					text('Description', 'description'),
					text('Locale', 'locale'),
					text('Slug', 'slug'),
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						options: [
							{ name: 'Draft', value: 0 },
							{ name: 'Published', value: 1 },
							{ name: 'Archived', value: 2 },
						],
						default: 0,
					},
					text('Title', 'title'),
				],
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const credentials = await this.getCredentials('growyChatwootApi');
		const root = `${String(credentials.baseUrl).replace(/\/+$/, '')}/api/v1/accounts/${credentials.accountId}/portals`;
		const out: INodeExecutionData[] = [];

		const call = async (
			method: IHttpRequestMethods,
			url: string,
			body?: IDataObject,
			qs?: IDataObject,
		) =>
			(await this.helpers.httpRequestWithAuthentication.call(this, 'growyChatwootApi', {
				method,
				url,
				body,
				qs,
				json: true,
			})) as IDataObject;

		for (let i = 0; i < this.getInputData().length; i++) {
			const resource = this.getNodeParameter('resource', i) as Resource;
			const operation = this.getNodeParameter('operation', i) as string;
			const param = (name: string) => this.getNodeParameter(name, i) as string;
			const fields = () => this.getNodeParameter('fields', i, {}) as IDataObject;

			const isPortal = resource === 'portal';
			const slugUrl = () => `${root}/${param('portalSlug')}`;
			const base = () => (isPortal ? slugUrl() : `${slugUrl()}/${resource === 'category' ? 'categories' : 'articles'}`);
			const idName = resource === 'category' ? 'categoryId' : 'articleId';
			const itemUrl = () => `${base()}/${param(idName)}`;

			let data: IDataObject | IDataObject[];
			switch (operation) {
				case 'getAll': {
					if (isPortal) {
						data = await call('GET', root);
					} else if (resource === 'category') {
						data = await call('GET', base());
					} else {
						const qs = this.getNodeParameter('filters', i, {}) as IDataObject;
						const all = this.getNodeParameter('returnAll', i) as boolean;
						const limit = all ? Infinity : (this.getNodeParameter('limit', i) as number);
						const items: IDataObject[] = [];
						for (let page = 1; items.length < limit; page++) {
							const res = (await call('GET', base(), undefined, { ...qs, page })) as IDataObject;
							const batch = ((res.payload as IDataObject[]) ?? []).filter(Boolean);
							items.push(...batch);
							if (!batch.length) break;
						}
						data = items.slice(0, limit === Infinity ? undefined : limit);
					}
					break;
				}
				case 'get':
					data = await call('GET', isPortal ? base() : itemUrl());
					break;
				case 'create': {
					const body: IDataObject = isPortal
						? { name: param('name'), slug: param('slug'), ...fields() }
						: resource === 'category'
							? { name: param('name'), slug: param('slug'), ...fields() }
							: { title: param('title'), content: param('content'), ...fields() };
					data = await call('POST', isPortal ? root : base(), body);
					break;
				}
				case 'update':
					data = await call('PATCH', isPortal ? base() : itemUrl(), fields());
					break;
				default:
					await call('DELETE', itemUrl());
					data = { success: true };
			}

			const payload = Array.isArray(data) ? data : ((data.payload ?? data) as IDataObject | IDataObject[]);
			const list = Array.isArray(payload) ? payload : [payload];
			for (const json of list) out.push({ json, pairedItem: { item: i } });
		}
		return [out];
	}
}
