import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import type { INodeProperties } from 'n8n-workflow';

const IMPORT = "import type { INodeProperties } from 'n8n-workflow';";

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const identifier = (value: string) => slug(value).replace(/-(\w)/g, (_, letter: string) => letter.toUpperCase());
const json = (value: unknown) => JSON.stringify(value, null, '\t');

const readSources = (directory: string) =>
	existsSync(directory) ? readdirSync(directory).map((file) => readFileSync(`${directory}/${file}`, 'utf8')).join('\n') : '';

const requests = (source: string) =>
	new Set([...source.matchAll(/"method": "(\w+)",\s*"url": "((?:[^"\\]|\\.)*)"/g)].map((match) => `${match[1]} ${match[2]}`));

export const writeResources = (directory: string, exportName: string, properties: INodeProperties[]) => {
	const [selector, ...rest] = properties;
	const groups = new Map<string, INodeProperties[]>();
	for (const property of rest) {
		const resource = property.displayOptions!.show!.resource![0] as string;
		groups.set(resource, [...(groups.get(resource) ?? []), property]);
	}

	const before = requests(readSources(directory));
	rmSync(directory, { recursive: true, force: true });
	mkdirSync(directory, { recursive: true });

	for (const [resource, group] of groups) {
		writeFileSync(`${directory}/${slug(resource)}.ts`, `${IMPORT}\n\nexport const ${identifier(resource)}: INodeProperties[] = ${json(group)};\n`);
	}
	const names = [...groups.keys()];
	const imports = names.map((name) => `import { ${identifier(name)} } from './${slug(name)}';`).join('\n');
	writeFileSync(
		`${directory}/index.ts`,
		`${IMPORT}\n${imports}\n\nconst resourceSelector: INodeProperties = ${json(selector)};\n\nexport const ${exportName}: INodeProperties[] = [\n\tresourceSelector,\n${names.map((name) => `\t...${identifier(name)},`).join('\n')}\n];\n`,
	);

	const after = requests(readSources(directory));
	const added = [...after].filter((request) => !before.has(request));
	const removed = [...before].filter((request) => !after.has(request));
	console.log(`${directory}: ${after.size} operations, +${added.length} -${removed.length}`);
	if (before.size) for (const request of added) console.log(`  + ${request}`);
	for (const request of removed) console.log(`  - ${request}`);
};
