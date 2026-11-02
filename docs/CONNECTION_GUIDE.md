# Connection Guide — bsgusa / bala-nexus

How to navigate from any Balamonis repo to any other, without touching existing repos.

## The principle

`bala-nexus` is the hub. Every repo references it. It references every repo. Nothing is modified — only connected.

## Entry points

| If you want to... | Start at |
|---|---|
| See the whole world | `bala-nexus/README.md` world-map table |
| Find trending signals | `bala-pulse/README.md` + `reports/*-trend-brief.md` |
| Engage publicly | `bala-voice/` — Issues, Discussions |
| Know who Shiv is | `bala-archives/README.md` founder + LLCs + portfolio |
| Contribute | `bala-weave/` — PR + issue templates |
| See ops/metrics | `command-center-bala/` |
| See shared core | `balamonis_group_main/` |
| See media studio | `balamonis-media/` |
| See Lexora legal product | `AI-Job-Automation/` (slug: `company-lexora-legal`) |
| See Lexora jobs product | `company-lexoraai/` (slug: `company-lexora-jobs`) |

## Repo → repo hops

```
bala-nexus  →  read company/repos.json for every repo's localPath + role
bala-pulse  →  feeds scored signals into bala-nexus backlog + venture backlogs
bala-voice  →  issues triage → target repo's backlog/priorities.md
bala-archives →  portfolio one-pagers link to each repo's README
bala-weave  →  PR templates apply to any repo in the map
```

## Adding a new repo to the map

1. Create the repo with the standard anatomy (README, ROADMAP, backlog, AGENTS, CLAUDE, LICENSE, .github/, company/, scripts/, reports/).
2. Add it to `bala-nexus/company/repos.json` and the README world-map table.
3. Add it to every other repo's `company/repos.json` where relevant.
4. Do not modify the new repo's existing siblings — only add references.

## Truthful-claims rule (every repo)

CI rejects fabricated certification claims (the major security/privacy audit
programs), inflated customer/metric counts, and named VC-backing claims — the
exact pattern list lives in `.github/workflows/ci.yml`, not here, so this doc
does not trip its own check.
Every compliance item needs an evidence pointer or is honestly marked unknown.
