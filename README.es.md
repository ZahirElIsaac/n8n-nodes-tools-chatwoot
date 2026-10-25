# @growy/n8n-nodes-tools-chatwoot

[English](README.md) | Español

Community node de n8n para gestionar el **Centro de ayuda de Chatwoot** (portales, categorías y artículos). También se puede usar como tool de un AI Agent.

## Instalación

En n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Credenciales

Usa la credencial nativa **Chatwoot API** de n8n:

- **URL:** base de tu Chatwoot (ej. `https://app.chatwoot.com`).
- **Access Token:** Perfil → Access Token en Chatwoot.

El **Account ID** se indica en el propio nodo (por defecto `1`).

## Operaciones

| Recurso  | Operaciones                           |
| -------- | ------------------------------------- |
| Portal   | Get Many, Get, Create, Update         |
| Category | Get Many, Get, Create, Update, Delete |
| Article  | Get Many, Get, Create, Update, Delete |

- **Portal Slug:** requerido en Category y Article, y en Get/Update de Portal.
- **Article → Get Many:** admite *Return All*, *Limit* y filtros (autor, categoría, locale, búsqueda y estado).
- **Estado de artículo:** `0` borrador, `1` publicado, `2` archivado.

## Uso como tool de AI Agent

El nodo tiene `usableAsTool` activo. n8n solo permite que la IA complete parámetros sueltos del nodo; los campos opcionales agrupados en *Fields* y *Filters* no son visibles para el agente.

## Desarrollo

```bash
pnpm install
pnpm build
pnpm publish --access public --no-git-checks
```
