import { readFileSync, writeFileSync } from 'node:fs';

export type Json = Record<string, any>;

const SPEC_URL = 'https://raw.githubusercontent.com/chatwoot/chatwoot/develop/swagger/swagger.json';
const SPEC_FILE = 'openapi.json';

if (process.argv.includes('--update')) {
	try {
		const response = await fetch(SPEC_URL);
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		writeFileSync(SPEC_FILE, `${JSON.stringify(await response.json(), null, 2)}\n`);
	} catch (error) {
		console.warn(`Could not download the Chatwoot spec (${error}); using the local ${SPEC_FILE}`);
	}
}

export const spec: Json = JSON.parse(readFileSync(SPEC_FILE, 'utf8'));

export const startCase = (text: string) =>
	text
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.replace(/[^a-zA-Z0-9]+/g, ' ')
		.trim()
		.replace(/(^|\s)([a-z])/g, (_, space: string, letter: string) => space + letter.toUpperCase());

export const resolve = (node: Json): Json => {
	if (!node || typeof node !== 'object') return node;
	if (node.$ref) return resolve(node.$ref.slice(2).split('/').reduce((current: Json, key: string) => current[key], spec));
	if (!node.allOf) return node;
	const { allOf, ...rest } = node;
	const merged = allOf.map(resolve).reduce(
		(a: Json, b: Json) => ({
			...a,
			...b,
			properties: { ...a.properties, ...b.properties },
			required: [...(a.required ?? []), ...(b.required ?? [])],
		}),
		{},
	);
	return { ...merged, ...rest };
};

export const typeOf = (schema: Json) => ([] as string[]).concat(schema.type ?? []).find((type) => type !== 'null');
