---
name: notion
description: >
  Orchestrates the notion-mcp-server to search, read, write, update, and manage pages
  and databases in Notion. Triggers on "/notion", "notion", or when managing Notion pages.
---

When the user invokes `/notion` or requests Notion interactions, map the command to the appropriate `notion-mcp-server` tool.

## Key Rule: Resolving Page Names to IDs
For all commands that take a `<page_name_or_id>`, resolve the parameter as follows:
1. **Check if UUID:** If the parameter is a valid UUID, use it directly as the `<page_id>`.
2. **Search by Name:** If the parameter is a page name/title:
   - Call `notion-mcp-server/API-post-search` with `query: "<page_name>"` and filter by `page` type.
   - **One Match:** If exactly one page matches, use its ID for the command.
   - **Multiple Matches:** List the matching pages in a table showing Title and ID, and ask the user which one they meant.
   - **No Matches:** Tell the user that the page could not be found.

---

## Commands

### 1. `/notion search <query>`
- **Action:** Search pages or databases by title.
- **Tool:** Call `notion-mcp-server/API-post-search` with `query: "<query>"`.

### 2. `/notion read <page_name_or_id>`
- **Action:** Retrieve the page content as Markdown.
- **Tool:** Resolve `<page_name_or_id>` to a `<page_id>` and call `notion-mcp-server/API-retrieve-page-markdown` with `page_id: "<page_id>"`.

### 3. `/notion append <page_name_or_id> <markdown_content>`
- **Action:** Append markdown content to the end of a page.
- **Tool:** Resolve `<page_name_or_id>` to a `<page_id>` and call `notion-mcp-server/API-update-page-markdown` with parameters:
  - `page_id: "<page_id>"`
  - `type: "insert_content"`
  - `insert_content: { content: "<markdown_content>", position: { type: "end" } }`

### 4. `/notion replace <page_name_or_id> <new_markdown_content>`
- **Action:** Overwrite the entire content of a page.
- **Tool:** Resolve `<page_name_or_id>` to a `<page_id>` and call `notion-mcp-server/API-update-page-markdown` with parameters:
  - `page_id: "<page_id>"`
  - `type: "replace_content"`
  - `replace_content: { new_str: "<new_markdown_content>" }`

### 5. `/notion update <page_name_or_id> <old_text> -> <new_text>`
- **Action:** Find and replace targeted text on a page.
- **Tool:** Resolve `<page_name_or_id>` to a `<page_id>` and call `notion-mcp-server/API-update-page-markdown` with parameters:
  - `page_id: "<page_id>"`
  - `type: "update_content"`
  - `update_content: { content_updates: [ { old_str: "<old_text>", new_str: "<new_text>" } ] }`

### 6. `/notion create <title> <parent_page_name_or_id>`
- **Action:** Create a new page under a parent page.
- **Tool:** Resolve `<parent_page_name_or_id>` to a `<parent_page_id>` and call `notion-mcp-server/API-post-page` with parameters:
  - `parent: { type: "page_id", page_id: "<parent_page_id>" }`
  - `properties: { title: [ { text: { content: "<title>" } } ] }`

### 7. `/notion comment <page_name_or_id> <comment_text>`
- **Action:** Add a comment to a page.
- **Tool:** Resolve `<page_name_or_id>` to a `<page_id>` and call `notion-mcp-server/API-create-a-comment` with parameters:
  - `parent: { page_id: "<page_id>" }`
  - `rich_text: [ { text: { content: "<comment_text>" } } ]`

### 8. `/notion db <database_name_or_id>`
- **Action:** Retrieve info on a database.
- **Tool:** Resolve database name using `API-post-search` with filter `data_source` or query, then call `notion-mcp-server/API-retrieve-a-database` with `database_id: "<database_id>"`.

## Behavior Guidelines
- Respond concisely. If outputting search results, format them as a table showing Page Title and Page ID.
- Provide clickable markdown links for all page IDs where possible.
- If the user uses a `/notion` command directly, execute the mapped tool immediately.
