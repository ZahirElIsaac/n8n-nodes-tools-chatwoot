import type { INodeProperties } from 'n8n-workflow';
import { type Json, resolve, startCase, typeOf } from './spec.ts';

export type Send = 'body' | 'query';

export interface Field {
	property: INodeProperties;
	rank: number;
}

const PARSE_JSON = '={{ typeof $value === \'string\' ? JSON.parse($value) : $value }}';
const SPLIT_LIST = "={{ $value === '' ? undefined : $value.split(',').map((item) => item.trim()) }}";

export const buildField = (name: string, schemaNode: Json, required: boolean, send?: Send, path = name): Field => {
	const schema = resolve(schemaNode);
	const type = typeOf(schema);
	const values: unknown[] = (schema.enum ?? []).filter((value: unknown) => value !== null);
	const property: Json = {
		displayName: startCase(name),
		name,
		type: 'string',
		default: '',
		...(required && { required: true }),
		...(schema.description && { description: schema.description }),
	};
	const route = (value?: string) => ({ routing: { send: { type: send, property: path, ...(value && { value }) } } });

	if (values.length) {
		property.type = 'options';
		property.options = values.map((value) => ({ name: String(value), value }));
		property.default = schema.default ?? values[0];
		Object.assign(property, send && route());
	} else if (type === 'integer' || type === 'number') {
		property.type = 'number';
		property.default = typeof schema.default === 'number' ? schema.default : 0;
		Object.assign(property, send && route());
	} else if (type === 'boolean') {
		property.type = 'boolean';
		property.default = typeof schema.default === 'boolean' ? schema.default : false;
		Object.assign(property, send && route());
	} else if (type === 'array' && send === 'query') {
		Object.assign(property, route(SPLIT_LIST));
	} else if (type === 'array' || type === 'object') {
		property.type = 'json';
		property.default = type === 'array' ? '[]' : '{}';
		Object.assign(property, send && route(PARSE_JSON));
	} else {
		Object.assign(property, send && route());
	}
	return { property: property as INodeProperties, rank: 1 };
};

const bodyFields = (operation: Json) => {
	const schema = resolve(operation.requestBody?.content?.['application/json']?.schema ?? {});
	const entries = Object.entries<Json>(schema.properties ?? {});
	const wrapper = entries.length === 1 && resolve(entries[0][1]).properties ? entries[0][0] : undefined;
	const container = wrapper ? resolve(entries[0][1]) : schema;
	return Object.entries<Json>(container.properties ?? {}).map(([name, child]) =>
		buildField(name, child, (container.required ?? []).includes(name), 'body', wrapper ? `${wrapper}.${name}` : name),
	);
};

export const operationFields = (pathItem: Json, operation: Json) => {
	const byName = new Map<string, Field>();
	for (const raw of [...(pathItem.parameters ?? []), ...(operation.parameters ?? [])]) {
		const parameter = resolve(raw);
		const schema = { ...parameter.schema, description: parameter.description };
		if (parameter.in === 'path') {
			byName.set(parameter.name, { ...buildField(parameter.name, schema, true), rank: 0 });
		} else if (parameter.in === 'query') {
			byName.set(parameter.name, buildField(parameter.name, schema, Boolean(parameter.required), 'query'));
		}
	}
	const body = bodyFields(operation).filter((field) => !byName.has(field.property.name));
	const all = [...byName.values(), ...body];
	return {
		paged: byName.get('page')?.property.routing?.send?.type === 'query',
		required: all.filter((field) => field.property.required || field.rank === 0),
		optional: all.filter((field) => !field.property.required && field.rank !== 0).map((field) => field.property),
	};
};
