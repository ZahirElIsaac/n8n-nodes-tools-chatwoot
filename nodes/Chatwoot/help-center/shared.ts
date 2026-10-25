import type { INodeProperties } from 'n8n-workflow';

export type Kind = 'portal' | 'category' | 'article';

export const RESOURCE: Record<Kind, string> = {
	portal: 'HelpCenterPortal',
	category: 'HelpCenterCategory',
	article: 'HelpCenterArticle',
};

export const STATUS = [
	{ name: 'Draft', value: 0 },
	{ name: 'Published', value: 1 },
	{ name: 'Archived', value: 2 },
];

export const show = (kind: Kind, operations?: string[]) => ({
	show: { resource: [RESOURCE[kind]], ...(operations && { operation: operations }) },
});

type FieldKind = 'string' | 'number' | 'boolean';

export const field = (
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
