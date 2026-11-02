# Log — bsgusa / bala-nexus (the hub)

## 2026-10-23 — New world scaffold created

### Created
- Repo skeleton: README.md, ROADMAP.md ([NOW]/[NEXT]/[LATER]), backlog/priorities.md, AGENTS.md, CLAUDE.md
- LICENSE (Proprietary), .gitignore, .github/workflows/ci.yml
- company/repos.json — references all 9 repos (5 new + 4 existing), modifies none
- scripts/world-map.mjs — world-map table generator
- reports/LOG.md — this file

### World map (9 repos)
| Repo | Entity | Role |
|---|---|---|
| bala-nexus | Balamonis LLC | Hub — this map |
| bala-pulse | Balamonis LLC | Trending intelligence |
| bala-voice | Balamonis LLC | Public engagement |
| bala-archives | Balamonis LLC | Identity — who Shiv is |
| bala-weave | Balamonis LLC | Collab & contributions |
| command-center-bala | Balamonis LLC | Nerve center |
| balamonis_group_main | Balamonis LLC | Shared core |
| balamonis-media | Balamonis LLC | Media studio |
| AI-Job-Automation | Lexora AI LLC | Career + legal doc automation |

### Notes
- Existing repos are referenced only — none were modified.
- Truthful-claims CI check added (rejects SOC 2 / ISO 27001 / HIPAA / FedRAMP / fabricated metrics).
- Next: add repo health badge source, docs/CONNECTION_GUIDE.md, wire into command-center-bala registry.

## 2026-11-01 — Lexora repo slugs corrected; wired into Command Center

The 2026-11-01 GitHub cleanup renamed `bsgusa/AI-Job-Automation` → `bsgusa/company-lexora-legal`
(lexoraai.space) and `bsgusa/company-lexoraai` → `bsgusa/company-lexora-jobs` (lexoraai.org).
This repo still pointed at the old slug in five places.

- `company/repos.json`: `bsgusa/AI-Job-Automation` → `bsgusa/company-lexora-legal`, and
  `bsgusa/company-lexora-jobs` added. World map is now **10 repos** (5 bala + 3 Balamonis
  operating + 2 Lexora product surfaces).
- `README.md`: world-map table row and connection diagram updated to the two Lexora repos.
- `CLAUDE.md`, `docs/CONNECTION_GUIDE.md`: old slug replaced; local checkout paths unchanged
  (`~/AI-Job-Automation`, `~/company-lexoraai` — the directories were not renamed).
- `bala-nexus` is now referenced in `command-center-bala` `company/repos.json` and
  `lib/company/registry.ts` (P-001b), along with all four sibling `bala-*` repos and
  `ai_engineering_tools`.
- Historical entries above are left as-is; this entry records the correction.
