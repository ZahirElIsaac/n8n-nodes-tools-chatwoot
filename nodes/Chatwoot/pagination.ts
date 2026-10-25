import type {
	DeclarativeRestApiSettings,
	IExecutePaginationFunctions,
	INodeExecutionData,
	INodeProperties,
	INodePropertyOptions,
} from 'n8n-workflow';

const MAX_PAGES = 200;

export async function paginateByPage(
	this: IExecutePaginationFunctions,
	requestOptions: DeclarativeRestApiSettings.ResultOptions,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', false) as boolean;
	const limit = returnAll ? Infinity : Number(this.getNodeParameter('limit', 50));
	const results: INodeExecutionData[] = [];
	let page = Number(requestOptions.options.qs?.page) || 1;
	let previous = '';

	while (results.length < limit && page <= MAX_PAGES) {
		requestOptions.options.qs = { ...requestOptions.options.qs, page };
		const items = await this.makeRoutingRequest(requestOptions);
		const signature = JSON.stringify(items[0]?.json);
		if (!items.length || signature === previous) break;
		results.push(...items);
		previous = signature;
		page++;
	}
	return results.slice(0, limit);
}

export const withPagination = (properties: INodeProperties[]): INodeProperties[] => {
	const paged = new Set(
		properties
			.filter((property) => property.name === 'returnAll' && property.routing?.send?.paginate !== undefined)
			.flatMap(({ displayOptions }) =>
				(displayOptions?.show?.operation ?? []).map((operation) => `${displayOptions?.show?.resource?.[0]}|${operation}`),
			),
	);
	return properties.map((property) => {
		if (property.name !== 'operation' || property.type !== 'options') return property;
		const resource = property.displayOptions?.show?.resource?.[0];
		return {
			...property,
			options: (property.options as INodePropertyOptions[]).map((option) =>
				paged.has(`${resource}|${option.value}`)
					? { ...option, routing: { ...option.routing, operations: { pagination: paginateByPage } } }
					: option,
			),
		};
	});
};
