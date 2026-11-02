// bala-nexus — world-map generator
// Reads company/repos.json and emits the world-map table for README.md.
// Run: node scripts/world-map.mjs

import { readFileSync } from 'node:fs';

// Resolve from the repo root, not from scripts/: this file lives in scripts/
// but the data lives at company/repos.json.
const repos = JSON.parse(
  readFileSync(new URL('../company/repos.json', import.meta.url), 'utf8'),
).repositories;

const rows = repos.map((r) => {
  return `| \`${r.repo}\` | ${r.entity} | ${r.role} | Connects to bala-nexus |`;
});

const out = `
| Repo | Entity | Role | Connects to |
|---|---|---|---|
${rows.join('\n')}
`;

console.log(out);
// Write to stdout; copy into README.md world-map table manually or extend to write file.
