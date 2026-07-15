# Dennis Wu — quantitative research portfolio

This branch contains the Astro 6 revamp of `denniswu28.github.io`. The public site is fully static and is designed for GitHub Pages.

## Local development

```powershell
npm install
npm run dev
```

Run all checks before publishing:

```powershell
npm test
npm run build
```

The build validates Astro types and content, generates `dist/`, checks required routes and internal assets, and confirms that draft or private content is absent.

## Publishing model

- `main` continues to serve the existing site until every item in `LAUNCH_GATES.md` is complete.
- `pre-revamp-2026-07-15` and `backup/pre-revamp-2026-07-15` preserve the previous deployed site.
- The new site uses the official Astro GitHub Pages workflow after cutover.
- The private personal blog is intentionally not implemented in this static repository.

## Content model

Validated collections under `src/content/` hold articles, experiments, publications, investment theses, and documents. Shared profile facts and navigation live in `src/data/site.ts`. Draft entries are filtered from generated routes, sitemap, and RSS.

Historical quantitative source artifacts are published under `public/data/`; PDFs and existing imagery are under `public/files/` and `public/images/`.
