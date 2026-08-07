import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const input = process.argv[2] || "data/papers.json";
const output = process.argv[3] || "data/stats.json";
const papers = JSON.parse(readFileSync(input, "utf8"));
const publicCodeStatuses = new Set(["official", "third_party"]);

const compactVenue = (venue = "") => venue
  .replace(/^Proceedings of the /, "")
  .replace(/^The [A-Za-z]+th International Conference on /, "ICLR / ")
  .replace(/\s*\([^)]*\)$/, "")
  .replace(/International Conference on /, "IC ")
  .replace(/Advances in Neural Information Processing Systems/, "NeurIPS")
  .replace(/Proceedings of the IEEE\/CVF /, "IEEE/CVF ")
  .trim();

const countBy = (items, getter) => Object.fromEntries(
  [...items.reduce((counts, item) => {
    const value = getter(item) || "Unverified";
    counts.set(value, (counts.get(value) || 0) + 1);
    return counts;
  }, new Map())].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])))
);

const core = papers.filter((paper) => paper.inCore);
const codeOpen = core.filter((paper) => publicCodeStatuses.has(paper.codeStatus));
const verifiedUnits = core.filter((paper) => paper.firstInstitution !== "Unverified");
const verifiedCountries = core.filter((paper) => paper.firstCountry !== "Unverified");

const stats = {
  generatedAt: new Date().toISOString(),
  totalPapers: core.length,
  publicCodePapers: codeOpen.length,
  publicCodeRatio: core.length ? codeOpen.length / core.length : 0,
  officialCodePapers: core.filter((paper) => paper.codeStatus === "official").length,
  thirdPartyCodePapers: core.filter((paper) => paper.codeStatus === "third_party").length,
  metadataCoverage: {
    firstInstitution: core.length ? verifiedUnits.length / core.length : 0,
    firstCountry: core.length ? verifiedCountries.length / core.length : 0
  },
  byYear: countBy(core, (paper) => paper.year),
  byCountry: countBy(verifiedCountries, (paper) => paper.firstCountry),
  byInstitution: countBy(verifiedUnits, (paper) => paper.firstInstitution),
  byVenue: countBy(core, (paper) => compactVenue(paper.venue)),
  byCodeStatus: countBy(core, (paper) => paper.codeStatus),
  byModality: countBy(core, (paper) => paper.modality)
};

mkdirSync(output.split("/").slice(0, -1).join("/") || ".", { recursive: true });
writeFileSync(output, `${JSON.stringify(stats, null, 2)}\n`);
console.log(`Wrote generated statistics to ${output}`);
