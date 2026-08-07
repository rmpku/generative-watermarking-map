import { readFileSync, writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const initializeOnly = args.includes("--init");
const inputPath = args.find((arg) => !arg.startsWith("--")) || "data/papers.json";
const papers = JSON.parse(readFileSync(inputPath, "utf8"));
const today = new Date().toISOString().slice(0, 10);

const withCitationSchema = (paper) => ({
  ...paper,
  scholarCitations: paper.scholarCitations ?? null,
  scholarCitationsUpdatedAt: paper.scholarCitationsUpdatedAt ?? null,
  scholarCitationsStatus: paper.scholarCitationsStatus ?? "not_checked",
  scholarCitationsLink: paper.scholarCitationsLink ?? ""
});

if (initializeOnly) {
  writeFileSync(inputPath, JSON.stringify(papers.map(withCitationSchema), null, 2) + "\n");
  console.log("Initialized Google Scholar citation fields in " + inputPath);
  process.exit(0);
}

const apiKey = process.env.SERPAPI_API_KEY;
if (!apiKey) {
  throw new Error("SERPAPI_API_KEY is required. Add it as a GitHub Actions secret or pass it in the environment.");
}

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function normalizeTitle(value = "") {
  return value
    .toLowerCase()
    .replace(/\\texorpdfstring|\\textasciitilde/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleSimilarity(left, right) {
  const leftWords = new Set(normalizeTitle(left).split(" ").filter(Boolean));
  const rightWords = new Set(normalizeTitle(right).split(" ").filter(Boolean));
  if (!leftWords.size || !rightWords.size) return 0;
  const intersection = [...leftWords].filter((word) => rightWords.has(word)).length;
  return (2 * intersection) / (leftWords.size + rightWords.size);
}

function authorMatch(paper, candidate) {
  const surname = (paper.firstAuthor || "").trim().split(/\s+/).pop().toLowerCase();
  if (!surname) return false;
  const summary = candidate.publication_info?.summary || "";
  return summary.toLowerCase().includes(surname);
}

async function scholarResults(paper) {
  const endpoint = new URL("https://serpapi.com/search.json");
  endpoint.searchParams.set("engine", "google_scholar");
  endpoint.searchParams.set("q", '"' + paper.title + '"');
  endpoint.searchParams.set("hl", "en");
  endpoint.searchParams.set("api_key", apiKey);
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error("SerpApi returned HTTP " + response.status);
  const payload = await response.json();
  if (payload.error) throw new Error(payload.error);
  return Array.isArray(payload.organic_results) ? payload.organic_results : [];
}

function bestMatch(paper, results) {
  return results
    .map((candidate) => ({
      candidate,
      score: titleSimilarity(paper.title, candidate.title) + (authorMatch(paper, candidate) ? 0.08 : 0)
    }))
    .sort((left, right) => right.score - left.score)[0];
}

const updated = [];
let matched = 0;
let notFound = 0;

for (let index = 0; index < papers.length; index += 1) {
  const paper = withCitationSchema(papers[index]);
  const results = await scholarResults(paper);
  const match = bestMatch(paper, results);
  const candidate = match?.candidate;

  if (!candidate || titleSimilarity(paper.title, candidate.title) < 0.86) {
    updated.push({
      ...paper,
      scholarCitationsUpdatedAt: today,
      scholarCitationsStatus: "not_found"
    });
    notFound += 1;
  } else {
    const citedBy = candidate.inline_links?.cited_by;
    const total = Number.isFinite(Number(citedBy?.total)) ? Number(citedBy.total) : 0;
    updated.push({
      ...paper,
      scholarCitations: total,
      scholarCitationsUpdatedAt: today,
      scholarCitationsStatus: "matched",
      scholarCitationsLink: citedBy?.link || ""
    });
    matched += 1;
  }

  if (index < papers.length - 1) await wait(350);
}

writeFileSync(inputPath, JSON.stringify(updated, null, 2) + "\n");
console.log("Updated Google Scholar citations: " + matched + " matched, " + notFound + " not found.");
