# @growy/n8n-nodes-tools-chatwoot

English | [Español](README.es.md)

n8n community node to manage the **Chatwoot Help Center** (portals, categories and articles). It can also be used as an AI Agent tool.

## Installation

In n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Credentials

Uses n8n's native **Chatwoot API** credential:

- **URL:** your Chatwoot base URL (e.g. `https://app.chatwoot.com`).
- **Access Token:** Profile → Access Token in Chatwoot.

The **Account ID** is set on the node itself (default `1`).

## Operations

| Resource | Operations                            |
| -------- | ------------------------------------- |
| Portal   | Get Many, Get, Create, Update         |
| Category | Get Many, Get, Create, Update, Delete |
| Article  | Get Many, Get, Create, Update, Delete |

- **Portal Slug:** required for Category and Article, and for Portal Get/Update.
- **Article → Get Many:** supports *Return All*, *Limit* and filters (author, category, locale, search and status).
- **Article status:** `0` draft, `1` published, `2` archived.

## Use as an AI Agent tool

The node has `usableAsTool` enabled. n8n only lets the AI fill standalone node parameters; optional fields grouped under *Fields* and *Filters* are not visible to the agent.

## Development

```bash
pnpm install
pnpm build
pnpm publish --access public --no-git-checks
```
