import { type Field } from './fields.ts';
import { type Json, resolve, typeOf } from './spec.ts';

export const LIMIT_RESULTS = '={{ $parameter["returnAll"] ? 100000 : $parameter["limit"] }}';

export const listingFields = (paged: boolean): Field[] => [
	{
		rank: 2,
		property: {
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: !paged,
			description: 'Whether to return all results or only up to a given limit',
			...(paged && { routing: { send: { paginate: '={{ true }}' } } }),
		},
	},
	{
		rank: 2,
		property: {
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			default: 50,
			typeOptions: { minValue: 1 },
			description: 'Max number of results to return',
			displayOptions: { show: { returnAll: [false] } },
			...(paged && { routing: { send: { paginate: '={{ true }}' } } }),
		},
	},
];

const arrayPath = (schema: Json) => {
	const properties = schema.properties ?? {};
	if (typeOf(resolve(properties.payload ?? {})) === 'array') return 'payload';
	return typeOf(resolve(resolve(properties.data ?? {}).properties?.payload ?? {})) === 'array' ? 'data.payload' : undefined;
};

export const listing = (operation: Json, method: string, paged: boolean) => {
	if (method !== 'get' && !paged) return undefined;
	const schema = resolve(operation.responses?.['200']?.content?.['application/json']?.schema ?? {});
	if (typeOf(schema) === 'array') return { root: undefined };
	const properties = schema.properties ?? {};
	const firstArray = Object.keys(properties).find((name) => typeOf(resolve(properties[name])) === 'array');
	const root = arrayPath(schema) ?? (paged ? ('payload' in properties ? 'payload' : firstArray) : undefined);
	return root ? { root } : undefined;
};
