import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { articleFilters, articlePaging, listFields, optional, requiredOnCreate } from './fields';
import { OPERATIONS } from './operations';
import { field, type Kind, RESOURCE, show } from './shared';

export const helpCenterResources: INodePropertyOptions[] = [
	{ name: 'Article', value: RESOURCE.article, description: 'Articles of a portal' },
	{ name: 'Category', value: RESOURCE.category, description: 'Categories of a portal' },
	{ name: 'Portal', value: RESOURCE.portal, description: 'Portals of the Help Center' },
];

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

export const helpCenterProperties: INodeProperties[] = [
	...kindProperties('portal'),
	...kindProperties('category'),
	...kindProperties('article'),
	...listFields('portal'),
	...listFields('category'),
	...articlePaging,
	articleFilters,
];
