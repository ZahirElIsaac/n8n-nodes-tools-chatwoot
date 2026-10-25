# @growy/n8n-nodes-tools-chatwoot

English | [Español](https://github.com/ZahirElIsaac/n8n-nodes-tools-chatwoot/blob/main/README.es.md)

n8n community nodes for the whole **Chatwoot** API: conversations, contacts, inboxes, teams, Help Center, reports, webhooks and the Super Admin Platform API. Every action node also works as an **AI Agent tool** (*Chatwoot Tool*).

- Operations are generated from Chatwoot's official OpenAPI spec, so they stay in sync with the API.
- Operations restricted to administrators are marked **(Admin)**.
- List operations have **Return All** and **Limit**.

## Installation

In n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Credentials

One credential type, **Chatwoot Tools API**:

| Field | Value |
| --- | --- |
| Chatwoot URL | Base URL, e.g. `https://app.chatwoot.com` |
| Token Type | *User (Admin / Agent)* or *Platform App (Super Admin)* |
| Access Token | The token that matches the type |

Create one credential per token. The **Test** button validates URL, token and type (`GET /api/v1/profile` for users, `GET /platform/api/v1/agent_bots` for Platform Apps).

| Token | Where to get it | Use it with |
| --- | --- | --- |
| User token | Chatwoot → Profile → Access Token | **Chatwoot** node, API *Application* |
| Platform App token | Super Admin → Platform Apps (self-hosted only) | **Chatwoot** node, API *Platform* |

A Platform App only sees the objects it created or was granted access to (`401 Non permissible resource` otherwise).

## Nodes

### Chatwoot

Pick, in order: **API** → **Resource** → **Entity** → **Operation**. The **Account ID** is a required field on each operation.

| API | Resource | Entities |
| --- | --- | --- |
| Application | Account | Account, Agents, Teams, Profile, Audit Logs, Reports |
| | Contacts | Contacts, Contact Labels |
| | Conversations | Conversations, Conversation Assignments, Messages, Canned Responses, Custom Filters |
| | Inboxes & Campaigns | Inboxes, Campaigns |
| | Labels & Attributes | Labels, Custom Attributes |
| | Automation | Automation Rule, Webhooks, Integrations, Account Agent Bots |
| | Help Center | Portal, Category, Article |
| Platform | Platform | Accounts, Account Users, Users, Agent Bots |

Only required fields are shown. Optional fields and filters are added on demand from the **Filters** / **Additional Fields** / **Fields** list (**Add Field**).

**Roles.** Operations marked **(Admin)** need an administrator token; an agent token gets `401/403`. Everything else works with agent tokens.

**Lists.** *Return All* fetches every page; with it off, *Limit* (default 50) caps the results.

**Help Center.** Chatwoot's spec does not document listing, updating or deleting categories and articles, so this part is maintained by hand. Article status: `0` draft, `1` published, `2` archived. Creating an article requires **Author ID**.

### Chatwoot Trigger

Starts a workflow on Chatwoot events (`message_created`, `conversation_created`, `conversation_status_changed`, `conversation_updated`, `message_updated`, `contact_created`, `contact_updated`, `webwidget_triggered`, `conversation_typing_on`, `conversation_typing_off`). It registers the webhook when the workflow is activated and removes it when deactivated. Requires an administrator token.

## Using the nodes as AI tools

Add **Chatwoot Tool** to an AI Agent and mark the parameters the agent should fill as *Defined by agent*. Required fields are plain parameters; optional ones live inside the **Filters** / **Additional Fields** lists.

## Development

```bash
pnpm install
pnpm build   # downloads Chatwoot's OpenAPI, regenerates the operations (listing added/removed ones) and compiles
pnpm publish --access public --no-git-checks
```

```
credentials/                 Chatwoot Tools API
nodes/Chatwoot/
  Chatwoot.node.ts           node definition
  properties.ts              API → Resource → Entity → Operation composition
  selectors.ts, domains.ts   Resource/Entity menus
  pagination.ts              Return All / Limit
  application/, platform/    generated operations, one file per entity
  help-center/               hand-written Help Center operations
nodes/ChatwootTrigger/       webhook trigger
scripts/generate.ts          OpenAPI → nodes/Chatwoot/{application,platform}
openapi.json                 Chatwoot's official spec
```

Do not edit `nodes/Chatwoot/application/` or `platform/` by hand: `pnpm build` regenerates them from `openapi.json`.

## License

MIT
