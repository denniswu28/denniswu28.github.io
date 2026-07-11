# denniswu28.github.io

Personal portfolio for Tianrui (Dennis) Wu with separate quant and academic
profiles.

## Sites

| Profile | Source | Local URL |
| --- | --- | --- |
| Quant trading | `index.html` | `http://localhost:8000/` |
| Academic research | `academic/index.html` | `http://localhost:8000/academic/` |

The quant profile uses the original dark interface in `sci-fi.css` with
interactions from `site.js`. The academic profile uses the portrait and timeline
format adapted from
[alekkemeny/alekkemeny.com](https://github.com/alekkemeny/alekkemeny.com).

The earlier files remain in `archive/previous-site/`.

## Preview

Run a local static server from the repository root.

```powershell
python -m http.server 8000
```

## Academic portrait

The academic profile uses `images/Protrait.jpg`. To replace it, add the new
file under `images/` and update these locations in `academic/index.html`.

- The `profile-image` source
- The Open Graph image
- The Twitter image

The horizontal divider clears the complete portrait block, including its four
social buttons and Curriculum Vitae link.

## Academic multimedia

Add multimedia inside the `.timeline-content` block for the relevant research
project. Paths begin with `../images/` because the academic page is one folder
below the repository root.

Single image

```html
<figure class="media-module">
  <img src="../images/academic/bao-results.jpg"
       alt="BAO reconstruction result">
  <figcaption>BAO reconstruction performance under redshift smearing.</figcaption>
</figure>
```

Local video

```html
<figure class="media-module">
  <video controls preload="metadata"
         poster="../images/academic/demo-poster.jpg">
    <source src="../images/academic/research-demo.mp4" type="video/mp4">
  </video>
  <figcaption>Research workflow demonstration.</figcaption>
</figure>
```

Two-item gallery

```html
<div class="media-grid">
  <figure class="media-module">
    <img src="../images/academic/result-a.jpg" alt="First result">
    <figcaption>First result.</figcaption>
  </figure>
  <figure class="media-module">
    <img src="../images/academic/result-b.jpg" alt="Second result">
    <figcaption>Second result.</figcaption>
  </figure>
</div>
```

The gallery becomes one column on small screens.

## Quant multimedia

The backtest is displayed in a compact `.frame.backtest-frame` inside the Qrigin
entry. To add another image, replace a standby frame with this pattern.

```html
<figure class="frame">
  <img src="images/quant/result.jpg" alt="Describe the result" loading="lazy">
</figure>
```

## Interactive quant lab

The root site includes a public-safe research-to-production lab with execution,
LSTM architecture, risk scenario, and market-making ingestion modules.

- Data schemas and templates are in `data/`.
- Hosting and privacy decisions are documented in `INTERACTIVE_ROADMAP.md`.
- Execution and market-making CSV files are parsed locally in the browser.
- Demo, observed, hypothetical, and literature-inspired claims must remain
  visibly labeled.
