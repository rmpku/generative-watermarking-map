import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const source = readFileSync(0, "utf8");
const outputPath = process.argv[2] || "data/papers.json";
const codeReview = JSON.parse(readFileSync(new URL("../data/code-review.json", import.meta.url), "utf8"));
let previousPapers = [];
try {
  previousPapers = JSON.parse(readFileSync(outputPath, "utf8"));
} catch {
  previousPapers = [];
}
const previousById = new Map(previousPapers.map((paper) => [paper.id, paper]));

const CORE_KEYS = [
  "Wen2023", "Fernandez2023", "Yang2024", "Min2024",
  "yang2024gaussianshadingpp", "fernandez2023undetectable", "sphericalwm2024", "hitn2024",
  "diffkgw2024", "dgs2024", "ringid2024", "gaussmarker2024", "gshannon2024", "phasewm2024",
  "cluemark2024", "t2smark2024", "serum2024", "maxsive2024", "metr2024", "seal2024",
  "slice2024", "swaldm2024", "noiseprints2024", "guidancewm2024", "luminark2024", "optmark2024",
  "robin2024", "shallowdiffuse2024", "aeon2024", "mddm2024", "fsw2024", "flexiblewm2024",
  "diffusetrace2024", "rwp2024", "markplugger2024", "lawa2024", "rain2024", "slim2024",
  "diffmark2024", "tagwm2024", "genptw2024", "latentsinv2024", "affineflow2024", "dvw2024",
  "tjig2024", "gnm2024", "ppgs2024", "rwmdm2024", "ecckyber2024", "dprw2024", "sfw2024",
  "satldm2024", "wmadapter2024", "ewlora2024", "aqualora2024", "awmamoe2024", "safesd2024",
  "wouaf2024", "promark2024", "latentwatermark2024", "stdmlatent2024", "stableguard2024",
  "diffw2024", "recipe2024", "wdp2024", "liuwdm2024", "wfsdm2024", "gwi2024", "dynamicwm2024",
  "fedwm2024", "tdmow2024", "conceptwm2024", "dcw2024", "fsemw2024", "supermark2024",
  "waterflow2024", "vine2024", "wam2024", "zodiac2024",
  "dtr2024", "sigmark2024", "videoshield2024", "videomark2024", "skeda2024", "lvmark2024",
  "videosignature2024", "vidstamp2024", "spdmark2024", "videoseal2024", "i2vwm2024",
  "ldrovis2024", "svs2024", "safesora2024", "ringet2024"
];

const VIDEO_KEYS = new Set([
  "dtr2024", "sigmark2024", "videoshield2024", "videomark2024", "skeda2024", "lvmark2024",
  "videosignature2024", "vidstamp2024", "spdmark2024", "videoseal2024", "i2vwm2024",
  "ldrovis2024", "svs2024", "safesora2024", "ringet2024"
]);

const OVERRIDES = {
  Wen2023: {
    firstInstitution: "University of Maryland",
    firstCountry: "US",
    codeStatus: "official",
    codeLink: "https://github.com/YuxinWenRick/tree-ring-watermark"
  },
  Fernandez2023: {
    codeStatus: "official",
    codeLink: "https://github.com/facebookresearch/stable_signature"
  },
  Yang2024: {
    firstInstitution: "University of Science and Technology of China",
    firstCountry: "CN",
    codeStatus: "official",
    codeLink: "https://github.com/bsmhmmlf/Gaussian-Shading"
  },
  recipe2024: {
    codeStatus: "official",
    codeLink: "https://github.com/yunqing-me/WatermarkDM"
  },
  ringid2024: {
    firstInstitution: "National University of Singapore",
    firstCountry: "SG",
    codeStatus: "official",
    codeLink: "https://github.com/showlab/RingID"
  },
  videomark2024: {
    codeStatus: "official",
    codeLink: "https://github.com/KYRIE-LI11/VideoMark"
  },
  latentwatermark2024: {
    codeStatus: "official",
    codeLink: "https://github.com/RichardSunnyMeng/LatentWatermark"
  },
  sigmark2024: {
    codeStatus: "official",
    codeLink: "https://github.com/JeremyZhao1998/SIGMark-release"
  },
  robin2024: {
    codeStatus: "third_party",
    codeLink: "https://github.com/THU-BPM/MarkDiffusion"
  },
  sfw2024: {
    codeStatus: "third_party",
    codeLink: "https://github.com/THU-BPM/MarkDiffusion"
  },
  seal2024: {
    codeStatus: "third_party",
    codeLink: "https://github.com/THU-BPM/MarkDiffusion"
  },
  videoshield2024: {
    codeStatus: "third_party",
    codeLink: "https://github.com/THU-BPM/MarkDiffusion"
  },
  gaussmarker2024: {
    codeStatus: "third_party",
    codeLink: "https://github.com/THU-BPM/MarkDiffusion"
  }
};

const LOCUS = new Map([
  ["Wen2023", "Initial noise"], ["Yang2024", "Initial noise"],
  ["yang2024gaussianshadingpp", "Initial noise"], ["gshannon2024", "Initial noise"],
  ["ringid2024", "Initial noise"], ["cluemark2024", "Initial noise"],
  ["Fernandez2023", "VAE decoder"], ["fsw2024", "Latent"], ["lawa2024", "Latent"],
  ["diffusetrace2024", "Latent"], ["markplugger2024", "Latent"], ["rain2024", "Latent"],
  ["optmark2024", "Hybrid"], ["maxsive2024", "Hybrid"]
]);

function clean(value = "") {
  return value
    .replace(/\\([{}%&_#$])/g, "$1")
    .replace(/[{}]/g, "")
    .replace(/\\textasciitilde/g, "~")
    .replace(/\\&/g, "&")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\s+/g, " ")
    .replace(/,$/, "")
    .trim();
}

function field(body, name) {
  const line = body.split(/\r?\n/).find((item) =>
    new RegExp(`^\\s*${name}\\s*=`, "i").test(item)
  );
  if (!line) return "";
  return clean(line.replace(new RegExp(`^\\s*${name}\\s*=\\s*`, "i"), ""));
}

function parseAuthors(value) {
  return clean(value)
    .split(/\s+and\s+/i)
    .map((author) => author.trim())
    .filter(Boolean);
}

function linkFor(entry) {
  const arxiv = field(entry.body, "eprint");
  const doi = field(entry.body, "doi");
  const url = field(entry.body, "url");
  if (arxiv) return `https://arxiv.org/abs/${arxiv}`;
  if (doi) return `https://doi.org/${doi}`;
  if (url) return url;
  return "";
}

const entries = [];
const pattern = /^@([^\{]+)\{([^,]+),([\s\S]*?)^\}\s*$/gm;
for (const match of source.matchAll(pattern)) {
  const type = match[1].trim();
  const key = match[2].trim();
  const body = match[3];
  entries.push({ type, key, body });
}

const byKey = new Map(entries.map((entry) => [entry.key, entry]));
const missing = CORE_KEYS.filter((key) => !byKey.has(key));
if (missing.length) {
  console.error(`Missing BibTeX keys: ${missing.join(", ")}`);
}

const papers = CORE_KEYS
  .filter((key) => byKey.has(key))
  .map((key) => {
    const entry = byKey.get(key);
    const title = field(entry.body, "title");
    const authors = parseAuthors(field(entry.body, "author"));
    const override = OVERRIDES[key] || {};
    const reviewedCode = codeReview.records[key.toLowerCase()] || {};
    const previous = previousById.get(key.toLowerCase()) || {};
    return {
      id: key.toLowerCase(),
      bibKey: key,
      title,
      authors,
      firstAuthor: authors[0] || "",
      year: Number(field(entry.body, "year")) || null,
      venue: field(entry.body, "booktitle") || field(entry.body, "journal") || field(entry.body, "howpublished") || "Preprint",
      paperLink: linkFor(entry),
      paperSearchLink: `https://arxiv.org/search/?query=${encodeURIComponent(title)}&searchtype=title&abstracts=show&order=-announced_date_first&size=50`,
      firstInstitution: override.firstInstitution || "Unverified",
      firstCountry: override.firstCountry || "Unverified",
      codeStatus: reviewedCode.codeStatus ?? override.codeStatus ?? "unverified",
      codeLink: reviewedCode.codeLink ?? override.codeLink ?? "",
      modality: VIDEO_KEYS.has(key) ? "video" : "image",
      locus: LOCUS.get(key) || "Other",
      inCore: true,
      source: "survey references.bib",
      lastVerified: reviewedCode.codeStatus ? codeReview.reviewedAt : (override.codeStatus || override.firstInstitution ? "2026-08-07" : null),
      scholarCitations: previous.scholarCitations ?? null,
      scholarCitationsUpdatedAt: previous.scholarCitationsUpdatedAt ?? null,
      scholarCitationsStatus: previous.scholarCitationsStatus ?? "not_checked",
      scholarCitationsLink: previous.scholarCitationsLink ?? ""
    };
  })
  .sort((a, b) => (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title));

mkdirSync(outputPath.split("/").slice(0, -1).join("/") || ".", { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(papers, null, 2)}\n`);
console.log(`Wrote ${papers.length} core papers to ${outputPath}`);
