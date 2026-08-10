import { readFileSync, writeFileSync } from "node:fs";

const papersPath = process.argv[2] || "data/papers.json";
const affiliations = JSON.parse(readFileSync(new URL("../data/affiliations.json", import.meta.url), "utf8"));
const papers = JSON.parse(readFileSync(papersPath, "utf8"));
const verifiedAt = "2026-08-07";

for (const paper of papers) {
  const affiliation = affiliations[paper.id];
  if (!affiliation) throw new Error(`Missing affiliation mapping for ${paper.id}`);
  Object.assign(paper, affiliation, { lastVerified: verifiedAt });
}

writeFileSync(papersPath, `${JSON.stringify(papers, null, 2)}\n`);
console.log(`Applied first-institution metadata to ${papers.length} papers`);
