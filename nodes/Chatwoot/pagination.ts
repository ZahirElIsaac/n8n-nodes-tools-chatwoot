import type { DeclarativeRestApiSettings, IExecutePaginationFunctions, INodeExecutionData } from 'n8n-workflow';

export async function paginateByPage(
	this: IExecutePaginationFunctions,
	requestOptions: DeclarativeRestApiSettings.ResultOptions,
): Promise<INodeExecutionData[]> {
	const limit = Number(requestOptions.maxResults) || Infinity;
	const results: INodeExecutionData[] = [];
	let page = Number(requestOptions.options.qs?.page) || 1;
	let previous = '';

	while (results.length < limit) {
		requestOptions.options.qs = { ...requestOptions.options.qs, page };
		const items = await this.makeRoutingRequest(requestOptions);
		const signature = JSON.stringify(items[0]?.json);
		if (!items.length || signature === previous) break;
		results.push(...items);
		previous = signature;
		page++;
	}
	return results;
}
