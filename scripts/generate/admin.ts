import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

const SEGMENT = (names: string) => new RegExp(`account_id"\\]\\) \\}\\}/(${names})(/|$|\\{)`);

const RULES: Array<[RegExp, RegExp]> = [
	[
		/^(POST|PATCH|PUT|DELETE)$/,
		SEGMENT('inboxes|inbox_members|teams|labels|webhooks|automation_rules|campaigns|agent_bots|agents|custom_attribute_definitions|integrations/hooks'),
	],
	[/^GET$/, SEGMENT('webhooks|automation_rules|campaigns|audit_logs|reports|summary_reports|reporting_events')],
	[/^PATCH$/, /accounts\/\{\{[^}]*\}\}$/],
	[/^(PATCH|PUT)$/, SEGMENT('branded_email_layout')],
	[/^DELETE$/, SEGMENT('contacts')],
];

const isAdminOnly = (option: INodePropertyOptions) => {
	const request = option.routing?.request;
	const url = typeof request?.url === 'string' ? request.url : '';
	return RULES.some(([method, path]) => method.test(String(request?.method)) && path.test(url));
};

export const markAdminOperations = (properties: INodeProperties[]) =>
	properties.map((property) =>
		property.name === 'operation' && property.type === 'options'
			? {
					...property,
					options: (property.options as INodePropertyOptions[]).map((option) =>
						isAdminOnly(option)
							? {
									...option,
									action: `${option.action ?? option.name} (Admin)`,
									description: `Requires an administrator token. ${option.description ?? ''}`.trim(),
								}
							: option,
					),
				}
			: property,
	);
