# ROADMAP — bsgusa / bala-nexus (the hub)

**Status:** Active. New world scaffold created 2026-10-23.
**Focus (decided 2026-10-23):** Map every Balamonis work, LLC, venture, and open thread into one navigable hub. Existing repos are referenced, never modified.
**Working rules:** Branch per change, small commits with clear messages. Before ending, run tests, update this file, and append a dated entry to `reports/LOG.md`.

---

## [NOW] Scaffold the hub + world map

- [x] Create `bala-nexus` repo skeleton (README, ROADMAP, backlog, AGENTS, CLAUDE, LICENSE, .github/, company/, scripts/, reports/)
- [x] Write world-map table: all 9 repos (4 existing + 5 new), entity, role, connections
- [x] Write public-engagement section (issues, discussions, PRs)
- [x] Cross-link to `bala-pulse`, `bala-voice`, `bala-archives`, `bala-weave`
- [ ] Verify no existing repo is modified — `bala-nexus` only references
- [ ] Add `bala-nexus` entry to root `backlog/priorities.md` as P-001 (in progress)

## [NEXT] Make the map alive

- [ ] Add per-repo health badge source (exists / dirty / drifted) derived from `company/repos.json`
- [ ] Add a `docs/CONNECTION_GUIDE.md`: how to navigate from any repo to any other
- [ ] Wire `bala-nexus` into `command-center-bala` company registry as a referenced repo
- [ ] Add GitHub issue template that auto-links to `bala-nexus` world map

## [LATER] Network effects

- [ ] Public contributor graph: who contributed to which repo, when
- [ ] Auto-generated "state of the world" monthly report in `reports/`
- [ ] Cross-repo search index: search all Balamonis repos from `bala-nexus`

---

## What "done" looks like

Anyone can land on `bala-nexus`, see every Balamonis repo, know which LLC owns it, understand its role, and find the door to contribute — all without touching any existing repo.

---

## Blocked / waiting on you

- GitHub push access (shell DNS workaround via `~/.config/balamonis/net-tunnel.py` used previously)
- Confirm old Supabase PAT and GitHub token hygiene before pushing any new repo
