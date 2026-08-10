# Generative-Watermarking-Map

> A living literature map of blind generative watermarking for diffusion models.

This project indexes the core method papers collected in the survey
`A Survey on Blind Generative Watermarking for Diffusion Models`.

## Scope

- Diffusion-model generative watermarking only.
- Blind detection/extraction methods only; requiring a key, model, prompt, or inversion does not by itself make a method non-blind.
- Non-diffusion, post-hoc-only, background, metric, dataset, survey, and attack-only papers are outside the core index.
- One row per research work; duplicate preprint and formal-publication versions are merged.
- Institution and country statistics use the first author's first listed affiliation.

The first-author affiliation audit is maintained in `data/affiliations.json`. Four double-blind
submission records explicitly withhold affiliations and are therefore labeled `Anonymous`; no
institution is inferred from an author's personal profile for those rows.

## Code status

Public code includes official, third-party, and source-unspecified implementations. The map keeps the distinction visible:

- `official` — public code explicitly released by the paper authors or their project page;
- `third_party` — a public implementation explicitly identified as independent or maintained by another group;
- `source_unspecified` — the repository content matches the paper, but its official/third-party provenance is not stated;
- `unverified` — internal pending-review state; it is not counted as `none_found`;
- `none_found` — checked, but no public implementation was found.

The 2026-08-07 audit covers all 94 core rows. A repository is counted only when its code and
documentation correspond to the paper; a title match alone is insufficient. Code marked
“coming soon”, broken or unlocatable links, request-code pages, and cases with no public
repository are recorded as `none_found`. The decision record is kept in
`data/code-review.json`.

## Data flow

`data/papers.json` is the source of truth for the static page. The browser computes the visible paper filters and summary charts from that file. The Node scripts are dependency-free:

```bash
# Import the current survey BibTeX through stdin.
unzip -p /path/to/survey.zip 'references.bib' | node scripts/import-bib.mjs data/papers.json

# Generate a machine-readable statistics snapshot.
node scripts/generate-stats.mjs

# Apply the latest reviewed code-status decisions to the paper database.
node scripts/apply-code-review.mjs

# Apply the reviewed first-author affiliation metadata to the paper database.
node scripts/apply-affiliations.mjs
```

The root `index.html` is GitHub Pages compatible and has no runtime dependency.

## Bilingual interface

The default interface is English. Use the `中文` toggle in the header to switch the interface language. Paper titles, authors, venues, and institution names remain in their original English form.

## Contributing

When adding a record, preserve the BibTeX key, use one row per research work, link the paper and code, and record whether the code is official, third-party, or source-unspecified. A title match can be recorded as `source_unspecified` when the repository matches the paper but its provenance is not stated; reserve `none_found` for papers with no matching public implementation.
