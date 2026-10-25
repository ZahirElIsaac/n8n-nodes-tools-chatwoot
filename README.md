# @growy/n8n-nodes-tools-chatwoot

English | [Español](README.es.md)

n8n community nodes for the whole **Chatwoot** API. Every action node can also be used as an **AI Agent tool**.

Operations are generated from Chatwoot's official OpenAPI spec.

## Installation

In n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Nodes and credentials

| Node | API | Token (Chatwoot Tools API credential) | Token owner |
| --- | --- | --- | --- |
| **Chatwoot** | *Application* (`/api/v1`, `/api/v2`) + Help Center | User access token | Administrator or agent (Profile → Access Token) |
| | *Platform* (`/platform/api/v1`): accounts, account users, users, agent bots | Platform App token | Super Admin → Platform Apps (self-hosted only) |
| **Chatwoot Trigger** | Webhooks (registers and removes the webhook automatically) | User access token | Administrator |

There is a single credential type, **Chatwoot Tools API** (URL + Access Token). Create one credential per token (for example an admin one and a Platform App one) and pick the right one on each node. The **Chatwoot** node chooses the API with its *API* field, then *Resource* (Account, Contacts, Conversations, Inboxes & Campaigns, Labels & Attributes, Automation, Help Center), *Entity* (e.g. Article) and *Operation* and is also available as an AI tool (**Chatwoot Tool**).

The **Account ID** is a required field on each operation.

## Roles

Operations that Chatwoot restricts to administrators are marked **(Admin)** in the operation list. An agent token receives `401/403` on them. A Platform App only sees the objects it created or was granted access to.

## Help Center

Resources *Help Center Portal*, *Help Center Category* and *Help Center Article* cover list/get/create/update (and delete for categories and articles). Required fields are plain parameters; optional fields live in **Fields**. Article status: `0` draft, `1` published, `2` archived.

## Using nodes as AI tools

Only required fields are shown by default; every optional field or filter is added on demand from the *Filters* / *Additional Fields* / *Fields* list (**Add Field**).

## Development

```bash
pnpm install
pnpm up-swagger   # download Chatwoot's OpenAPI, regenerate nodes/*/resources.ts and list added/removed operations
pnpm build
pnpm publish --access public --no-git-checks
```

`nodes/*/resources.ts` is generated from `openapi.json` (Chatwoot's official spec) by `scripts/generate.ts`; do not edit it by hand. Help Center operations are not in the spec and live in `nodes/Chatwoot/helpCenter.ts`.
