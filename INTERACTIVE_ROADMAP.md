# Quantitative profile roadmap

## Guidance incorporated

The site translates official guidance into a focused, evidence-led profile.

| Guidance | Site response |
| --- | --- |
| Google recommends clear, unique titles and descriptions | Canonical metadata, Open Graph metadata, and structured Person data are included |
| Google recommends useful original content and logical structure | Quant and academic profiles remain distinct with direct cross-links |
| Google recommends descriptive image context | The backtest and profile curves sit beside the work they support |
| Google recommends reserving media space | Images and SVG visualizations use fixed responsive frames |
| Citadel emphasizes ownership from idea through deployment | Each module connects research, implementation, validation, and live use |
| Optiver emphasizes measurable outcomes and real-system relevance | The profile centers on deployed systems and observed curves |

Official references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google guidance on layout stability](https://web.dev/articles/optimize-cls)
- [Citadel quantitative research candidate FAQ](https://www.citadel.com/careers/career-perspectives/candidate-faqs-quantitative-research/)
- [Optiver early-career research and trading guidance](https://www.optiver.com/working-at-optiver/early-careers/)

## Current annotated profile

The root site contains five static modules.

1. Alpha and direction with LSTM system traces
2. Market-making cumulative return from 0% and drawdown, with 7-day EMA curves
3. Optimal execution with an observed 31-day relative-return curve and TWAP comparison
4. Factor information-decay curves across research horizons
5. Portfolio response curves for full and 20% exposure around the October event

The market-making visualization is derived from
`data/market-making-daily-returns.csv`. The execution endpoints are derived from
`data/best_31_day_aggregate_metrics_2025-10-15_to_2025-11-14.csv`. Modules
without matching time-series data use restrained method views.

## Hosting decision

GitHub Pages remains sufficient for the static SVG profile, image viewer,
multimedia assets, and a custom domain. A custom domain can point to the current
Pages deployment with HTTPS enabled after DNS propagation.

- [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages limits](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/github-pages-limits)

A backend becomes useful only when the profile requires authenticated views,
persistent uploads, automated ingestion, private storage, or server-side
computation over larger datasets.
