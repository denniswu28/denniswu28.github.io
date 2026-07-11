# Deploying your two sites on GitHub Pages

Both sites live in **one repository** — your existing user site repo
`denniswu28.github.io`. GitHub Pages serves the root as your main site and any
subfolder automatically, so you get two URLs from one deploy:

| Site               | File                    | Live URL                                |
|--------------------|-------------------------|-----------------------------------------|
| Quant portfolio    | `index.html`            | https://denniswu28.github.io/           |
| Academic / research| `academic/index.html`   | https://denniswu28.github.io/academic/  |

## Folder structure (copy this into the repo root)

```
denniswu28.github.io/
├── index.html                 ← quant portfolio (home)
├── academic/
│   └── index.html             ← academic site
├── files/
│   ├── Resume_Dennis_Wu.pdf
│   └── CV_Tianrui_Wu.pdf
├── images/
│   ├── quant/                 ← drop quant photos here
│   └── academic/              ← drop research photos here
└── .nojekyll                  ← serve files as-is (see note)
```

## One-time deploy

1. Clone your repo:  `git clone https://github.com/denniswu28/denniswu28.github.io.git`
2. Copy everything from this package into the repo root, replacing the old `index.html`.
3. Commit and push:
   ```
   git add .
   git commit -m "Redesign: quant portfolio + academic site"
   git push
   ```
4. Wait ~1 minute, then open https://denniswu28.github.io/ . Pages is already
   enabled for a user site (it builds from the default branch automatically).

## About `.nojekyll` and your old `_config.yml`

Your repo currently uses the Jekyll `minimal` theme via `_config.yml`. These are
plain, self-contained HTML files, so you don't need Jekyll anymore. The included
`.nojekyll` file tells Pages to skip Jekyll and serve the files exactly as
written (this also prevents Jekyll from ever ignoring a folder). You can safely
**delete `_config.yml`** once these are live.

## Adding your photos later

Every experience has two empty photo frames. Each frame shows the exact filename
it's waiting for. Just commit a JPG with that name into the matching folder and
it appears automatically — no HTML editing. See `images/PHOTO_GUIDE.md` for the
full list. Recommended: landscape, roughly 4:3, at least ~1000px wide.

## Preview locally before pushing

```
cd denniswu28.github.io
python3 -m http.server 8000
# open http://localhost:8000/  and  http://localhost:8000/academic/
```

## Cross-links between the sites

Each site has one small link to the other in its footer. If you'd rather keep the
two audiences fully separate, delete that single `<span>` in the footer of each
`index.html`.

## Later: your own domain / subdomains

When you register a domain (e.g. `tianruiwu.com`):

- **Simplest:** add a `CNAME` file at the repo root containing your domain, then
  point DNS at GitHub (an `A`/`ALIAS` record to GitHub Pages IPs, or a `CNAME`
  record to `denniswu28.github.io`). Quant stays at the root, academic at
  `/academic`. Enable "Enforce HTTPS" in the repo's Pages settings.
- **Subdomains** (`quant.` and `research.`): put each site in its own repo, give
  each a `CNAME` for its subdomain, and add a DNS `CNAME` record per subdomain.
  Only do this if you want the two to feel like entirely separate properties.
