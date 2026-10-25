import { createRequire } from 'node:module';

const { Chatwoot } = createRequire(import.meta.url)('../dist/nodes/Chatwoot/Chatwoot.node.js');
const properties = new Chatwoot().description.properties;
const errors: string[] = [];

const seen = new Set<string>();
for (const property of properties.filter((item: any) => !['api', 'domain', 'resource'].includes(item.name))) {
	const { api, resource, operation, returnAll } = property.displayOptions.show;
	for (const name of operation ?? ['*']) {
		const key = [api[0], resource[0], property.name, name, JSON.stringify(returnAll ?? '')].join('|');
		if (seen.has(key)) errors.push(`duplicate field: ${key}`);
		seen.add(key);
	}
}

for (const selector of properties.filter((item: any) => item.name === 'operation')) {
	const { api, resource } = selector.displayOptions.show;
	for (const option of selector.options) {
		const url: string = option.routing.request.url;
		for (const [, name] of url.matchAll(/\$parameter\["(\w+)"\]/g)) {
			const visible = properties.some(
				(item: any) =>
					item.name === name &&
					item.displayOptions?.show?.api?.[0] === api[0] &&
					item.displayOptions.show.resource?.[0] === resource[0] &&
					(!item.displayOptions.show.operation || item.displayOptions.show.operation.includes(option.value)),
			);
			if (!visible) errors.push(`${api[0]}|${resource[0]}|${option.value}: URL parameter "${name}" has no field`);
			if (!url.includes(`encodeURIComponent($parameter["${name}"])`)) errors.push(`${option.value}: "${name}" is not URL-encoded`);
		}
	}
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
console.log(`check ok: ${properties.length} properties`);
