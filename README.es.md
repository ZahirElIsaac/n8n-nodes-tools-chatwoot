# @growy/n8n-nodes-tools-chatwoot

[English](README.md) | Español

Community nodes de n8n para toda la API de **Chatwoot**. Cada nodo de acción también sirve como **tool de AI Agent**.

Las operaciones se generan desde el OpenAPI oficial de Chatwoot.

## Instalación

En n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Nodos y credenciales

| Nodo | Authentication / API | Credencial | Dueño del token |
| --- | --- | --- | --- |
| **Chatwoot** | *Application API* (`/api/v1`, `/api/v2`) + Help Center | **Chatwoot API** nativa de n8n (URL + Access Token) | Administrador o agente (Perfil → Access Token) |
| | *Platform API* (`/platform/api/v1`): cuentas, usuarios de cuenta, usuarios, agent bots | **Chatwoot Platform API** (URL + token de Platform App) | Super Admin → Platform Apps (solo self-hosted) |
| **Chatwoot Trigger** | Webhooks (registra y elimina el webhook automáticamente) | **Chatwoot API** | Administrador |

El nodo **Chatwoot** elige la API con el campo *Authentication* y también está disponible como tool de IA (**Chatwoot Tool**).

El **Account ID** es un campo requerido en cada operación.

## Roles

Las operaciones que Chatwoot restringe a administradores aparecen marcadas con **(Admin)** en la lista. Un token de agente recibe `401/403` en ellas. Una Platform App solo ve los objetos que creó o a los que se le dio acceso.

## Help Center

Los recursos *Help Center Portal*, *Help Center Category* y *Help Center Article* cubren listar/obtener/crear/actualizar (y borrar en categorías y artículos). Los campos requeridos son parámetros planos; los opcionales están en **Fields**. Estado de artículo: `0` borrador, `1` publicado, `2` archivado.

## Uso de los nodos como tools de IA

n8n solo deja que la IA complete parámetros planos, no las colecciones *Additional Fields* / *Fields*. Los campos requeridos y los filtros de query son parámetros planos.

## Desarrollo

```bash
pnpm install
pnpm up-swagger   # descarga el OpenAPI de Chatwoot, regenera nodes/*/resources.ts y lista operaciones nuevas/eliminadas
pnpm build
pnpm publish --access public --no-git-checks
```

`nodes/*/resources.ts` se genera desde `openapi.json` (spec oficial de Chatwoot) con `scripts/generate.ts`; no se edita a mano. Las operaciones de Help Center no están en el spec y viven en `nodes/Chatwoot/helpCenter.ts`.
