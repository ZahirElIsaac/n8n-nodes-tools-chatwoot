# @growy/n8n-nodes-tools-chatwoot

[English](https://github.com/ZahirElIsaac/n8n-nodes-tools-chatwoot/blob/main/README.md) | Español

Community nodes de n8n para toda la API de **Chatwoot**: conversaciones, contactos, inboxes, equipos, Help Center, reportes, webhooks y la Platform API de Super Admin. Cada nodo de acción también funciona como **tool de AI Agent** (*Chatwoot Tool*).

- Las operaciones se generan desde el OpenAPI oficial de Chatwoot, así que siguen sincronizadas con la API.
- Las operaciones restringidas a administradores aparecen marcadas con **(Admin)**.
- Las operaciones de listado tienen **Return All** y **Limit**.

## Instalación

En n8n: **Settings → Community Nodes → Install** → `@growy/n8n-nodes-tools-chatwoot`.

## Credenciales

Un único tipo de credencial, **Chatwoot Tools API**:

| Campo | Valor |
| --- | --- |
| Chatwoot URL | URL base, por ejemplo `https://app.chatwoot.com` |
| Token Type | *User (Admin / Agent)* o *Platform App (Super Admin)* |
| Access Token | El token que corresponde al tipo |

Crea una credencial por token. El botón **Test** valida URL, token y tipo (`GET /api/v1/profile` para usuarios, `GET /platform/api/v1/agent_bots` para Platform Apps).

| Token | Dónde obtenerlo | Con qué usarlo |
| --- | --- | --- |
| Token de usuario | Chatwoot → Perfil → Access Token | Nodo **Chatwoot**, API *Application* |
| Token de Platform App | Super Admin → Platform Apps (solo self-hosted) | Nodo **Chatwoot**, API *Platform* |

Una Platform App solo ve los objetos que creó o a los que se le dio acceso (si no, `401 Non permissible resource`).

## Nodos

### Chatwoot

Elige, en orden: **API** → **Resource** → **Entity** → **Operation**. El **Account ID** es un campo requerido en cada operación.

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

Solo se muestran los campos requeridos. Los campos y filtros opcionales se agregan bajo demanda desde la lista **Filters** / **Additional Fields** / **Fields** (**Add Field**).

**Roles.** Las operaciones marcadas **(Admin)** necesitan un token de administrador; un token de agente recibe `401/403`. El resto funciona con tokens de agente.

**Listados.** *Return All* trae todas las páginas; con él apagado, *Limit* (50 por defecto) limita los resultados.

**Help Center.** El spec de Chatwoot no documenta listar, actualizar ni borrar categorías y artículos, así que esa parte se mantiene a mano. Estado de artículo: `0` borrador, `1` publicado, `2` archivado. Crear un artículo requiere **Author ID**.

### Chatwoot Trigger

Inicia un workflow con eventos de Chatwoot (`message_created`, `conversation_created`, `conversation_status_changed`, `conversation_updated`, `message_updated`, `contact_created`, `contact_updated`, `webwidget_triggered`, `conversation_typing_on`, `conversation_typing_off`). Registra el webhook al activar el workflow y lo elimina al desactivarlo. Requiere un token de administrador.

## Uso de los nodos como tools de IA

Agrega **Chatwoot Tool** a un AI Agent y marca como *Defined by agent* los parámetros que debe completar el agente. Los campos requeridos son parámetros planos; los opcionales están dentro de las listas **Filters** / **Additional Fields**.

## Desarrollo

```bash
pnpm install
pnpm build   # descarga el OpenAPI de Chatwoot, regenera las operaciones (listando las nuevas/eliminadas) y compila
pnpm publish --access public --no-git-checks
```

```
credentials/                 Chatwoot Tools API
nodes/Chatwoot/
  Chatwoot.node.ts           definición del nodo
  properties.ts              composición API → Resource → Entity → Operation
  selectors.ts, domains.ts   menús Resource/Entity
  pagination.ts              Return All / Limit
  application/, platform/    operaciones generadas, un archivo por entidad
  helpCenter/                operaciones de Help Center escritas a mano
nodes/ChatwootTrigger/       trigger por webhook
scripts/generate.ts          OpenAPI → nodes/Chatwoot/{application,platform}
openapi.json                 spec oficial de Chatwoot
```

No edites a mano `nodes/Chatwoot/application/` ni `platform/`: `pnpm build` los regenera desde `openapi.json`.

## Licencia

MIT
