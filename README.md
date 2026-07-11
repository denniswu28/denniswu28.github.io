# denniswu28.github.io

Personal portfolio for Tianrui (Dennis) Wu.

The live site uses the format, system-font stack, black-and-white theme, crimson
link color, portrait layout, and timeline treatment of
[alekkemeny/alekkemeny.com](https://github.com/alekkemeny/alekkemeny.com),
adapted to Dennis's quantitative trading and academic work.

The previous two-profile design is preserved in `archive/previous-site/` with
its original HTML, CSS, JavaScript, and deployment notes.

## Preview

Open `index.html` directly or run a local static server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Profile photo

The portrait area currently uses `images/Protrait.jpg`. To replace it, add the
new file under `images/`, update the `src` on the `profile-image` element in
`index.html`, and update the Open Graph and Twitter image paths in the page
header. The frame crops the image to a centered square on desktop and mobile.

## Add multimedia

Multimedia belongs inside the `.timeline-content` block for the relevant job,
research project, or activity. Put local files in `images/quant/` or
`images/academic/` and use a relative path from `index.html`.

Single image

```html
<figure class="media-module">
  <img src="images/academic/bao-results.jpg" alt="BAO reconstruction result">
  <figcaption>BAO reconstruction performance under redshift smearing.</figcaption>
</figure>
```

Local video

```html
<figure class="media-module">
  <video controls preload="metadata" poster="images/quant/demo-poster.jpg">
    <source src="images/quant/strategy-demo.mp4" type="video/mp4">
  </video>
  <figcaption>Public-safe demonstration of the research workflow.</figcaption>
</figure>
```

Two-item gallery

```html
<div class="media-grid">
  <figure class="media-module">
    <img src="images/academic/result-a.jpg" alt="First result">
    <figcaption>First result.</figcaption>
  </figure>
  <figure class="media-module">
    <img src="images/academic/result-b.jpg" alt="Second result">
    <figcaption>Second result.</figcaption>
  </figure>
</div>
```

YouTube or another iframe embed

```html
<figure class="media-module">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
          title="Project presentation" loading="lazy" allowfullscreen></iframe>
  <figcaption>Project presentation.</figcaption>
</figure>
```

The image and video modules inherit the same border, spacing, radius, and
responsive behavior as the rest of the site. The gallery becomes one column on
small screens.
