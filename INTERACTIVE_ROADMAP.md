# Interactive portfolio roadmap

## Guidance incorporated

The current pass translates official guidance into concrete site behavior.

| Guidance | Site response |
| --- | --- |
| Google recommends clear, unique titles and descriptions | Added canonical metadata, Open Graph metadata, and structured Person data |
| Google recommends useful original content and logical site structure | Kept distinct quant and academic routes with direct cross-links |
| Google recommends descriptive image context | Kept the backtest next to the matching market-making work with descriptive alternative text |
| Google recommends reserving media space to reduce layout shift | Existing frames use fixed aspect ratios and the new charts reserve their dimensions |
| Google recommends reduced-motion support | Existing animations respect `prefers-reduced-motion` |
| Citadel emphasizes ownership from idea through deployment | Added a research-to-production lab organized around inputs, validation, decisions, and risk |
| Optiver emphasizes measurable outcomes and real-system relevance | Added interactive execution, model architecture, and risk demonstrations rather than decorative widgets |

Official references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google guidance on layout stability](https://web.dev/articles/optimize-cls)
- [Google guidance on responsive user preferences](https://web.dev/articles/new-responsive)
- [Citadel quantitative research candidate FAQ](https://www.citadel.com/careers/career-perspectives/candidate-faqs-quantitative-research/)
- [Optiver early-career research and trading guidance](https://www.optiver.com/working-at-optiver/early-careers/)

## Current public lab

The GitHub Pages version now supports these components without a backend.

1. A four-month execution journal explorer with 30, 60, and 120-day windows
2. Local CSV loading for public-safe execution summaries
3. A selectable, literature-inspired LSTM research architecture
4. A hypothetical October shock calculator with adjustable exposure
5. Local schema validation for future market-making results

The LSTM architecture is based on public literature, including the original
[Long Short-Term Memory paper](https://direct.mit.edu/neco/article/9/8/1735/6109/Long-Short-Term-Memory),
[DeepLOB](https://arxiv.org/abs/1808.03668), and
[Deep Limit Order Book Forecasting](https://arxiv.org/abs/2403.09267). It is not
presented as Qrigin Capital architecture.

## Hosting decision

### Stay on GitHub Pages now

GitHub Pages is sufficient for SVG charts, zoom controls, scenario calculators,
local CSV parsing, static JSON snapshots, videos, and a custom domain. GitHub
documents direct support for custom domains and HTTPS.

This option keeps the attack surface and maintenance burden small. It is the
recommended next stage while all published data remains static or visitor-local.

### Add a custom domain without changing hosting

A custom domain can point to the existing GitHub Pages site. Verify the domain
before changing DNS, retain the verification record, avoid wildcard DNS records,
and enable HTTPS after DNS propagation.

Official setup guide

- [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

### Add a backend only when a real requirement appears

Move to a hybrid or full application when at least one of these becomes
necessary.

- Authenticated private dashboards
- Persistent uploads or saved user views
- Server-side computation over large datasets
- Private object storage with expiring links
- Automated daily ingestion from trading infrastructure
- Access control, audit logs, or different public and recruiter views

A hybrid architecture can keep the public site static while a small API handles
authenticated data. A full application becomes worthwhile only when the site is
operating as a data product rather than a portfolio.

GitHub Pages publishes static content and has documented repository, site size,
bandwidth, and build limits. Review those limits before publishing large media
or datasets.

- [GitHub Pages limits](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/github-pages-limits)

## Public-data policy

Every quantitative visualization should declare one of these labels.

- `OBSERVED` for approved, aggregated real results
- `ILLUSTRATIVE` for synthetic data that demonstrates interaction
- `HYPOTHETICAL` for counterfactual risk scenarios
- `LITERATURE-INSPIRED` for architectures assembled from public research

Before publication, remove or aggregate identifiers, exact order timing, active
symbols, routing logic, account values, order IDs, strategy thresholds, feature
definitions, and any result that can reconstruct proprietary behavior.

