# AGENTS.md — bsgusa / bala-nexus (the hub)

Conventions for AI agents (and humans) working in this repo.

## Start here

1. Read [`ROADMAP.md`](./ROADMAP.md) — milestones; work the `[NOW]` item.
2. Read [`backlog/priorities.md`](./backlog/priorities.md) — the detailed task list.
3. Skim the latest file in [`reports/`](./reports/) for recent context.

## Purpose

`bala-nexus` is the hub — the world map of every Balamonis work, LLC, venture, and open thread. It references all repos (existing and new) but **modifies none of them**.

## Layout

| Path | What lives there |
|---|---|
| `README.md` | Vision, two LLCs, world-map table, public engagement, connection map |
| `ROADMAP.md` | `[NOW]` / `[NEXT]` / `[LATER]` milestones |
| `backlog/priorities.md` | ID | Priority | Title | Repo | Context | Est. |
| `reports/` | Dated log entries (one file per day) |
| `company/` | Entity docs (`repos.json` references all repos) |
| `docs/` | Connection guides, signal maps |
| `scripts/` | Repo-health checks, map generators |
| `AGENTS.md`, `CLAUDE.md` | This file + session operating manual |

## Working rules

- **Work on a branch, never `main`.** Small commits with clear messages.
- **Truthful claims only.** No fabricated certifications, customers, funding, or models.
- **Existing repos are not touched.** `bala-nexus` only references them.
- **Before ending a session:** update `ROADMAP.md`, `backlog/priorities.md`, append a dated entry to `reports/LOG.md`.

## Stack

Markdown + YAML + JSON. No build step. Lint = spell-check + link-check if you add one.

## GitHub

Org: `bsgusa`. Repo: public. Issues = front door. PRs = via `bala-weave` templates.
