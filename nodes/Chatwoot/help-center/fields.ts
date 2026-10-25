import type { INodeProperties } from 'n8n-workflow';
import { field, type Kind, RESOURCE, show, STATUS } from './shared';

export const optional: Record<Kind, INodeProperties[]> = {
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

export const requiredOnCreate: Record<Kind, INodeProperties[]> = {
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

export const listFields = (kind: Kind): INodeProperties[] => [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: show(kind, ['Get Many']),
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1 },
		description: 'Max number of results to return',
		displayOptions: { show: { resource: [RESOURCE[kind]], operation: ['Get Many'], returnAll: [false] } },
	},
];

export const articlePaging: INodeProperties[] = [
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

export const articleFilters: INodeProperties = {
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
