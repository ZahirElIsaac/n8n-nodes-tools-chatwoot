import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const BOT_OPERATIONS: Record<string, string[]> = {
	Conversations: [
		'New Conversation',
		'Update Conversation',
		'Toggle Status Of A Conversation',
		'Toggle Priority Of A Conversation',
		'Update Custom Attributes Of A Conversation',
	],
	Messages: ['Create A New Message In A Conversation'],
	'Conversation Assignments': ['Assign A Conversation'],
};

const isAllowed = (resources: string[] | undefined, operations: string[] | undefined): boolean => {
	const resource = resources?.find((value) => value in BOT_OPERATIONS);
	if (!resource) return false;
	return !operations || operations.some((operation) => BOT_OPERATIONS[resource].includes(operation));
};

export const botProperties = (properties: INodeProperties[]): INodeProperties[] =>
	properties
		.filter(({ displayOptions }) => isAllowed(displayOptions?.show?.resource as string[], displayOptions?.show?.operation as string[]))
		.map((property) => {
			if (property.name !== 'operation' || property.type !== 'options') return property;
			const resource = (property.displayOptions?.show?.resource as string[])[0];
			const options = (property.options as INodePropertyOptions[]).filter((option) =>
				BOT_OPERATIONS[resource].includes(String(option.value)),
			);
			return { ...property, options, default: options[0].value };
		});

