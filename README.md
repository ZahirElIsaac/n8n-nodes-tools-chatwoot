# @growy/n8n-nodes-tools-chatwoot

English | [Español](README.es.md)

n8n community nodes for the whole **Chatwoot** API. Every action node can also be used as an **AI Agent tool**.

Operations are generated from Chatwoot's official OpenAPI spec.

## Installation

In n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Nodes and credentials

| Node | Authentication / API | Credential | Token owner |
| --- | --- | --- | --- |
| **Chatwoot** | *Application API* (`/api/v1`, `/api/v2`) + Help Center | n8n's native **Chatwoot API** (URL + Access Token) | Administrator or agent (Profile → Access Token) |
| | *Platform API* (`/platform/api/v1`): accounts, account users, users, agent bots | **Chatwoot Platform API** (URL + Platform App token) | Super Admin → Platform Apps (self-hosted only) |
| **Chatwoot Trigger** | Webhooks (registers and removes the webhook automatically) | **Chatwoot API** | Administrator |

The **Chatwoot** node picks the API with its *Authentication* field and is also available as an AI tool (**Chatwoot Tool**).

The **Account ID** is a required field on each operation.

## Roles

Operations that Chatwoot restricts to administrators are marked **(Admin)** in the operation list. An agent token receives `401/403` on them. A Platform App only sees the objects it created or was granted access to.

## Help Center

Resources *Help Center Portal*, *Help Center Category* and *Help Center Article* cover list/get/create/update (and delete for categories and articles). Required fields are plain parameters; optional fields live in **Fields**. Article status: `0` draft, `1` published, `2` archived.

## Using nodes as AI tools

n8n only lets the AI fill plain parameters, not the *Additional Fields* / *Fields* collections. Required fields and query filters are plain parameters.

## Development

```bash
pnpm install
pnpm up-swagger   # download Chatwoot's OpenAPI, regenerate nodes/*/resources.ts and list added/removed operations
pnpm build
pnpm publish --access public --no-git-checks
```

`nodes/*/resources.ts` is generated from `openapi.json` (Chatwoot's official spec) by `scripts/generate.ts`; do not edit it by hand. Help Center operations are not in the spec and live in `nodes/Chatwoot/helpCenter.ts`.
