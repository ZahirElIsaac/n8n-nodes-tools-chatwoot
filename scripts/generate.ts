import { build } from './generate/build.ts';
import { writeResources } from './generate/write.ts';

const TARGETS: Array<[string, string, (path: string) => boolean]> = [
	['nodes/Chatwoot/application', 'applicationResources', (path) => path.startsWith('/api/') && !path.includes('/portals')],
	['nodes/Chatwoot/platform', 'platformResources', (path) => path.startsWith('/platform/')],
];

for (const [directory, exportName, keep] of TARGETS) writeResources(directory, exportName, build(keep));
