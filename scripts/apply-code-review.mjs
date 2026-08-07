import { readFileSync, writeFileSync } from "node:fs";

const papersPath = process.argv[2] || "data/papers.json";
const reviewPath = process.argv[3] || "data/code-review.json";
const papers = JSON.parse(readFileSync(papersPath, "utf8"));
const review = JSON.parse(readFileSync(reviewPath, "utf8"));
const records = review.records || {};

const pending = papers.filter((paper) => paper.inCore && paper.codeStatus === "unverified");
const missing = pending.filter((paper) => !records[paper.id]);
if (missing.length) {
  throw new Error("No code-review record for: " + missing.map((paper) => paper.id).join(", "));
}

const updated = papers.map((paper) => {
  const decision = records[paper.id];
  if (!paper.inCore || !decision) return paper;
  return {
    ...paper,
    codeStatus: decision.codeStatus,
    codeLink: decision.codeLink || "",
    lastVerified: review.reviewedAt
  };
});

const remaining = updated.filter((paper) => paper.inCore && paper.codeStatus === "unverified");
if (remaining.length) {
  throw new Error("Unresolved core records remain: " + remaining.map((paper) => paper.id).join(", "));
}

writeFileSync(papersPath, JSON.stringify(updated, null, 2) + "\n");
console.log("Applied " + pending.length + " code-review decisions to " + papersPath);
