# @growy/n8n-nodes-tools-chatwoot

[English](README.md) | Español

Community nodes de n8n para toda la API de **Chatwoot**. Cada nodo de acción también sirve como **tool de AI Agent**.

Las operaciones se generan desde el OpenAPI oficial de Chatwoot.

## Instalación

En n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Nodos y credenciales

| Nodo | API | Token (credencial Chatwoot Tools API) | Dueño del token |
| --- | --- | --- | --- |
| **Chatwoot** | *Application* (`/api/v1`, `/api/v2`) + Help Center | Token de acceso de usuario | Administrador o agente (Perfil → Access Token) |
| | *Platform* (`/platform/api/v1`): cuentas, usuarios de cuenta, usuarios, agent bots | Token de Platform App | Super Admin → Platform Apps (solo self-hosted) |
| **Chatwoot Trigger** | Webhooks (registra y elimina el webhook automáticamente) | Token de acceso de usuario | Administrador |

Hay un único tipo de credencial, **Chatwoot Tools API** (URL + Access Token). Crea una credencial por token (por ejemplo una de admin y otra de Platform App) y elige la correcta en cada nodo. El nodo **Chatwoot** elige la API con su campo *API*, luego *Resource* (Account, Contacts, Conversations, Inboxes & Campaigns, Labels & Attributes, Automation, Help Center), *Entity* (por ejemplo Article) y *Operation* y también está disponible como tool de IA (**Chatwoot Tool**).

El **Account ID** es un campo requerido en cada operación.

## Roles

Las operaciones que Chatwoot restringe a administradores aparecen marcadas con **(Admin)** en la lista. Un token de agente recibe `401/403` en ellas. Una Platform App solo ve los objetos que creó o a los que se le dio acceso.

## Help Center

Los recursos *Help Center Portal*, *Help Center Category* y *Help Center Article* cubren listar/obtener/crear/actualizar (y borrar en categorías y artículos). Los campos requeridos son parámetros planos; los opcionales están en **Fields**. Estado de artículo: `0` borrador, `1` publicado, `2` archivado.

Las operaciones de listado que Chatwoot pagina (conversaciones, contactos, artículos, audit logs…) tienen **Return All** y **Limit**.

## Uso de los nodos como tools de IA

Por defecto solo se muestran los campos requeridos; cada campo o filtro opcional se agrega bajo demanda desde la lista *Filters* / *Additional Fields* / *Fields* (**Add Field**).

## Desarrollo

```bash
pnpm install
pnpm build   # descarga el OpenAPI de Chatwoot, regenera las operaciones (listando las nuevas/eliminadas) y compila
pnpm publish --access public --no-git-checks
```

`nodes/Chatwoot/applicationResources.ts` y `platformResources.ts` se generan desde `openapi.json` (spec oficial de Chatwoot) con `scripts/generate.ts`; no se edita a mano. Las operaciones de Help Center no están en el spec y viven en `nodes/Chatwoot/helpCenter.ts`.
