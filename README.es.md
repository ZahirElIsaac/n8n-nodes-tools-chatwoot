# @growy/n8n-nodes-tools-chatwoot

[English](README.md) | Español

Community nodes de n8n para toda la API de **Chatwoot**. Cada nodo de acción también sirve como **tool de AI Agent**.

Las operaciones se generan desde el OpenAPI oficial de Chatwoot.

## Instalación

En n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Nodos y credenciales

| Nodo | API | Credencial | Dueño del token |
| --- | --- | --- | --- |
| **Chatwoot** | Application (`/api/v1`, `/api/v2`) + Help Center | **Chatwoot API** nativa de n8n (URL + Access Token) | Administrador o agente (Perfil → Access Token) |
| **Chatwoot Platform** | Platform (`/platform/api/v1`): cuentas, usuarios de cuenta, usuarios, agent bots | **Chatwoot Platform API** (URL + token de Platform App) | Super Admin → Platform Apps (solo self-hosted) |
| **Chatwoot Trigger** | Webhooks (registra y elimina el webhook automáticamente) | **Chatwoot API** | Administrador |

El **Account ID** se indica en cada operación (por defecto `1`).

## Roles

Las operaciones que Chatwoot restringe a administradores aparecen marcadas con **(Admin)** en la lista. Un token de agente recibe `401/403` en ellas. Una Platform App solo ve los objetos que creó o a los que se le dio acceso.

## Help Center

Los recursos *Help Center Portal*, *Help Center Category* y *Help Center Article* cubren listar/obtener/crear/actualizar (y borrar en categorías y artículos). Los campos requeridos son parámetros planos; los opcionales están en **Fields**. Estado de artículo: `0` borrador, `1` publicado, `2` archivado.

## Uso de los nodos como tools de IA

n8n solo deja que la IA complete parámetros planos, no las colecciones *Additional Fields* / *Fields*. Los campos requeridos y los filtros de query son parámetros planos.

## Desarrollo

```bash
pnpm install
pnpm build
pnpm publish --access public --no-git-checks
```

Las operaciones viven en `nodes/*/resources.ts`; `openapi.json` es el spec oficial de Chatwoot, y sirve de referencia para revisar cobertura.
