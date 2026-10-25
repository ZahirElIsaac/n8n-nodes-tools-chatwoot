import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { markAdminOperations } from './admin.ts';
import { type Field, operationFields } from './fields.ts';
import { listing, listingFields } from './listing.ts';
import { LIMIT_RESULTS } from '../../nodes/Chatwoot/limit.ts';
import { type Json, spec, startCase } from './spec.ts';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'];

interface Resource {
	options: INodePropertyOptions[];
	fields: Map<string, { field: Field; operations: string[] }>;
	collections: INodeProperties[];
}

const collectResources = (keep: (path: string) => boolean) => {
	const resources = new Map<string, Resource>();

	for (const [path, pathItem] of Object.entries<Json>(spec.paths).filter(([path]) => keep(path))) {
		for (const method of METHODS.filter((method) => pathItem[method] && !pathItem[method].deprecated)) {
			const operation = pathItem[method];
			const tag: string = operation.tags[0];
			const resource = resources.get(tag) ?? { options: [], fields: new Map(), collections: [] };
			resources.set(tag, resource);

			const { required, optional, paged } = operationFields(pathItem, operation);
			const list = listing(operation, method, paged);
			const postReceive = [
				...(list?.root ? [{ type: 'rootProperty', properties: { property: list.root } }] : []),
				...(list && !paged ? [{ type: 'limit', properties: { maxResults: LIMIT_RESULTS } }] : []),
			];
			const value = startCase(operation.operationId);
			const url = `=${path.replace(/\{(\w+)\}/g, '{{ encodeURIComponent($parameter["$1"]) }}')}`;
			resource.options.push({
				name: value,
				value,
				action: operation.summary ?? value,
				description: operation.description ?? operation.summary ?? '',
				routing: {
					request: { method: method.toUpperCase() as 'GET', url },
					...(postReceive.length && { output: { postReceive } }),
				},
			});

			for (const field of [...required, ...(list ? listingFields(paged) : [])]) {
				const key = JSON.stringify(field.property);
				const entry = resource.fields.get(key) ?? { field, operations: [] };
				entry.operations.push(value);
				resource.fields.set(key, entry);
			}

			if (optional.length) {
				resource.collections.push({
					displayName: method === 'get' ? 'Filters' : 'Additional Fields',
					name: 'additionalFields',
					type: 'collection',
					placeholder: 'Add Field',
					default: {},
					displayOptions: { show: { resource: [startCase(tag)], operation: [value] } },
					options: optional.sort((a, b) => a.displayName.localeCompare(b.displayName)) as never,
				});
			}
		}
	}
	return resources;
};

export const build = (keep: (path: string) => boolean) => {
	const resources = collectResources(keep);
	const used = [...resources.keys()].sort((a, b) => startCase(a).localeCompare(startCase(b)));
	const properties: INodeProperties[] = [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: used.map((tag) => ({
				name: startCase(tag),
				value: startCase(tag),
				description: spec.tags.find((item: Json) => item.name === tag)?.description ?? '',
			})),
			default: startCase(used[0]),
		},
	];
	for (const tag of used) {
		const resource = resources.get(tag)!;
		const show = (operations?: string[]) => ({ show: { resource: [startCase(tag)], ...(operations && { operation: operations }) } });
		properties.push({
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: show(),
			options: resource.options,
			default: String(resource.options[0].value),
		});
		const grouped = [...resource.fields.values()].sort((a, b) => a.field.rank - b.field.rank);
		for (const { field, operations } of grouped) {
			properties.push({
				...field.property,
				displayOptions: { show: { ...field.property.displayOptions?.show, ...show(operations).show } },
			});
		}
		properties.push(...resource.collections);
	}
	return markAdminOperations(properties);
};
