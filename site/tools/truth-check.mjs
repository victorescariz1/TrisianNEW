// Every block of copy that states a fact must carry its source references in a `truth` array.
// This walks the content files and fails on any block that states something without one.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dir = path.resolve('src/content');
const factFields = ['body', 'lede', 'answer', 'what', 'line', 'ours', 'intro', 'how'];
const refOk = (r) => /^BP §\d+(\.\d+)?$/.test(r) || /^01 §20(\.\d+|[a-e])?$/.test(r);
let blocks = 0, problems = 0;

const visit = (node, trail, inherited) => {
  if (Array.isArray(node)) { node.forEach((n, i) => visit(n, `${trail}[${i}]`, inherited)); return; }
  if (!node || typeof node !== 'object') return;
  const own = Array.isArray(node.truth) ? node.truth : null;
  const statesFact = factFields.some((f) => typeof node[f] === 'string' && node[f].trim());
  if (statesFact) {
    blocks++;
    if (!own && !inherited) { problems++; console.error(`✗ ${trail}: states a fact but has no \`truth\` references`); }
  }
  for (const r of own ?? []) if (!refOk(r)) { problems++; console.error(`✗ ${trail}: unrecognized reference "${r}"`); }
  for (const [k, v] of Object.entries(node)) if (k !== 'truth') visit(v, `${trail}.${k}`, own ?? inherited);
};

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  const mod = await import(pathToFileURL(path.join(dir, file)).href);
  for (const [name, value] of Object.entries(mod)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && !Array.isArray(value.truth)) {
      problems++; console.error(`✗ ${file}:${name}: top-level block has no \`truth\` field (use [] for pure framing)`);
    }
    visit(value, `${file}:${name}`, null);
  }
}
if (problems) { console.error(`truth-check: ${problems} problem(s) across ${blocks} fact-bearing block(s)`); process.exit(1); }
console.log(`truth-check: ${blocks} fact-bearing block(s), all sourced`);
