# Website Strategy and Content Guidelines

**Last consolidated:** July 15, 2026  
**Purpose:** Maintain a recruiter-friendly professional site with clear paths to deeper technical, academic, and investment evidence.

## Contents

1. [Positioning and site strategy](#1-positioning-and-site-strategy)
2. [Information architecture](#2-information-architecture)
3. [Home](#3-home)
4. [Quant Profile](#4-quant-profile)
5. [Academic Research](#5-academic-research)
6. [Quant Lab](#6-quant-lab)
7. [Investment Portfolio](#7-investment-portfolio)
8. [Blog](#8-blog)
9. [Documents](#9-documents)
10. [Cross-linking and content governance](#10-cross-linking-and-content-governance)
11. [Confidentiality, privacy, and integrity](#11-confidentiality-privacy-and-integrity)
12. [Design and interaction standards](#12-design-and-interaction-standards)
13. [Technical architecture](#13-technical-architecture)
14. [Implementation roadmap](#14-implementation-roadmap)
15. [Adjacent professional presence](#15-adjacent-professional-presence)
16. [Reference checklist](#16-reference-checklist)

## 1. Positioning and site strategy

The site should work at two levels:

1. **Profile layer:** Explain who Dennis is, what he does, and why his work matters in under 30 seconds.
2. **Evidence layer:** Let technical visitors inspect experiments, papers, code, visualizations, investment theses, and detailed analysis.

The unifying narrative is:

> **A quantitative researcher who applies statistical inference, machine learning, and market microstructure research to build production trading systems.**

Academic work demonstrates modeling depth. Quantitative work demonstrates commercial and production relevance. The Quant Lab demonstrates the ability to build research infrastructure. The Portfolio and Blog show how conclusions are formed, tested, and revised.

### Core principles

- Keep the landing page concise; move detail to dedicated pages.
- Organize claims around evidence, not generic skill lists.
- Separate professional profiles, interactive experiments, investment records, and explanatory writing.
- Use progressive disclosure: summary first, supporting detail on demand.
- Prefer reliable historical demonstrations before adding live data.
- Preserve employer confidentiality and personal privacy.
- Keep titles, dates, roles, degree wording, metrics, and disclosures consistent through a shared content source.
- Preserve the existing visual language unless a change improves clarity, accessibility, or performance.

## 2. Information architecture

### Sitemap

    Home
    ├── Quant Profile
    ├── Academic Research
    ├── Quant Lab
    │   ├── Experiment 01: Trading Systems and Execution
    │   ├── Experiment 02: Grid Market-Making Simulator
    │   ├── Experiment 03: Crypto Microstructure Browser
    │   ├── Experiment 04: Prediction Market Observatory
    │   └── Experiment 05: Research Replications
    ├── Investment Portfolio
    ├── Blog
    │   ├── Quant Research
    │   │   ├── Fundamentals
    │   │   └── Microstructure
    │   ├── Physics
    │   └── AI Safety
    ├── Documents
    │   ├── Quant Resume
    │   ├── Academic CV
    │   ├── Publications
    │   └── Project Briefs
    └── Personal Blog — private

### Global navigation

Use only:

**Quant | Academic | Lab | Portfolio | Blog | Documents**

The name or logo should link to Home. Keep a persistent **Resume PDF** action. The private personal blog must not appear in public navigation.

### Audience routing

| Audience | Primary destination | Supporting evidence |
| --- | --- | --- |
| Recruiters | Home and Quant Profile | Resume, selected results, experience |
| Quant researchers and interviewers | Quant Lab | Blog articles, code, methodology |
| Academics | Academic Research | Publications, CV, scientific visualizations |
| Investment-oriented readers | Investment Portfolio | Fundamental research and case studies |
| General technical readers | Blog | Related experiments, papers, and repositories |

The preferred evidence chain is:

> **Experience claim → interactive demonstration → detailed article → source code or paper**

## 3. Home

The Home page should be the shortest page on the site. Do not place detailed charts, complete work histories, long timelines, or full project descriptions here.

### Hero

Use one positioning statement, one supporting sentence, and four primary actions.

**Dennis Wu**  
**Quantitative Researcher | Statistical Modeling, Trading Systems, and Market Microstructure**

> I build forecasting, execution, and market-analysis systems using machine learning, high-frequency data, and statistical inference, with a research background in physics and cosmology.

Primary actions:

- View Quant Profile
- Explore Quant Lab
- View Academic Research
- Download Resume

### Profile entry cards

Use four distinct cards, each limited to two sentences:

- **Quantitative Research and Trading:** Qrigin, InsightCheck, forecasting, execution, market making, and production research.
- **Academic Research:** Cosmology, Bayesian inference, neural networks, publications, Caltech, and Duke projects.
- **Quant Lab:** Interactive experiments based on public or sanitized data.
- **Investment Portfolio:** Historical theses, portfolio attribution, and investment case studies.

### Proof points

Show three or four concise credibility markers, such as:

- Live quantitative trading systems
- Two cosmology publications
- Caltech research fellowship
- Python, PyTorch, C++, Rust, and SQL

These are proof points, not a second resume.

## 4. Quant Profile

Use **Quantitative Research and Trading** as the main heading. Avoid the ambiguous title “Quantitative Finance Profile.”

### Professional summary

Cover the following in a compact introduction:

- Short-horizon forecasting
- Market making and backtesting
- Execution optimization
- Market microstructure
- Production monitoring and risk infrastructure
- Cross-asset statistical research

### Experience cards

Present Qrigin and InsightCheck as concise cards containing:

- Role and dates
- One-sentence mandate
- Two or three selected accomplishments
- Technologies used
- Links to supporting evidence

Evidence actions should be specific, for example:

- View forecasting case study
- Inspect execution results
- Open Experiment 01

### Quantitative evidence

Do not permanently display the existing five-panel visualization inside the experience section. Instead:

1. Place a small thumbnail or evidence icon beside the relevant accomplishment.
2. Open the chart in a side drawer, or deep-link to the corresponding result in Experiment 01.
3. Include methodology and limitations directly beneath the chart.

### Capabilities

Group capabilities by system rather than broad traits:

- Forecasting and signal research
- Market making and inventory control
- Execution and transaction-cost analysis
- Market-data engineering
- Backtesting and simulation
- Production monitoring and risk
- Statistical inference and machine learning

## 5. Academic Research

This page should be more visual and approachable than an academic CV while preserving the formal record through downloadable documents.

### Project cards

Create cards for:

- Caltech power-spectrum reconstruction
- Roman–Rubin weak-lensing survey synergies
- Distance-ladder calibration
- Other selected publications or research projects

Every card should answer:

1. What scientific problem was addressed?
2. What data were used?
3. What did Dennis personally build?
4. What measurable result was achieved?
5. Where can the visitor inspect the paper, code, or visualization?

### Publication view

Each publication detail page should include:

- Citation and abstract
- Personal contribution
- Publication status
- On-demand PDF preview and fullscreen action
- DOI, arXiv, or journal link
- Related figures, code, and Physics articles

Do not load multiple full PDF viewers on the landing page.

### Scientific visualization

The BAO or power-spectrum visualization may support:

- Rotation or other direct manipulation
- Monopole and quadrupole toggles
- Smoothing or reconstruction parameters
- Input, convolved, and reconstructed spectrum comparison
- BAO and no-BAO baselines
- Residual inspection
- Numerical hover values
- Resettable scientific presets

Clearly distinguish a display setting from a scientifically meaningful model assumption.

### Academic documents

Keep the academic CV downloadable. The web page explains the work; the CV preserves the complete formal history.

## 6. Quant Lab

The Quant Lab is an application-like evidence area, not another resume page. Every experiment should follow:

> **Question → Data → Method → Parameters → Results → Limitations → Code**

Each experiment should also include:

- A useful default state or preset
- Data provenance and date range
- Metric definitions
- Reproducibility notes
- Related experience, article, repository, or paper
- Clear loading, empty, error, and stale-data states

### Experiment 01: Trading Systems and Execution

Move the existing five-panel quantitative visualization here. It may cover sanitized versions of:

- Forecasting performance
- Market-making backtests
- Execution-quality improvements
- Fill-cost analysis
- Monitoring and risk architecture

Relevant Qrigin and InsightCheck accomplishments should deep-link to the appropriate panel.

### Experiment 02: Grid Market-Making Simulator

Replay public historical market data rather than presenting only a precomputed curve.

Controls may include:

- Grid spacing and quote width
- Order size and inventory limit
- Rebalancing intensity
- Maker rebate and taker fee
- Latency assumption
- Volatility regime
- Adverse-selection penalty
- Starting inventory

Outputs should include:

- Cumulative profit and loss
- Inventory and drawdown
- Turnover
- Fill count and fill ratio
- Maker-rebate contribution
- Spread capture
- Adverse-selection cost
- Profit and loss by volatility regime

Provide presets so a non-specialist can reach an informative result without configuring every parameter.

### Experiment 03: Crypto Microstructure Browser

Use historical replay by default. Add a delayed live stream only if it is reliable and materially improves the demonstration.

Include:

- Trades and mid-price
- Bid–ask spread and depth
- Trade, book, and order-flow imbalance
- Signed volume and short-horizon returns
- Rolling correlations and lead–lag relationships
- Volatility and liquidity regimes

Use exchange REST or WebSocket feeds for market data. Treat news as a separate timestamped overlay. Let visitors inspect the period before and after a selected price movement.

### Experiment 04: Prediction Market Observatory

Present this first as empirical market research, not a trading-strategy claim.

Start with:

- Data collection, cleaning, and contract classification
- Liquidity and spread analysis
- Return autocorrelation and trade-direction inference
- Maker-versus-taker outcomes
- Fee-adjusted participant performance
- Wallet or address-level behavioral analysis
- Behavior near event resolution
- Comparisons across politics, sports, weather, and crypto contracts

Establish the market’s basic microstructure before proposing predictive strategies.

### Experiment 05: Research Replications

Use the proposed study of declining trend-following performance after changes in equity-market liquidity provision, adapted to higher-frequency crypto data, as the first candidate.

Each replication should provide:

- Original claim and paper
- Data adaptation
- Assumptions
- Reproduction method
- Results
- Differences in crypto markets
- Code and reproducibility notes
- Independent interpretation

## 7. Investment Portfolio

Keep the Portfolio separate from the Quant Lab. The Lab demonstrates systematic research and engineering; the Portfolio demonstrates discretionary or fundamentals-driven judgment.

### Portfolio dashboard

Show:

- Cumulative return and benchmark comparison
- Drawdown
- Realized and unrealized profit and loss
- Exposure by sector and market capitalization
- Position concentration
- Contribution by security and thesis
- Holding-period distribution
- Entry and exit timeline

Always label whether returns are:

- Gross or net
- Time-weighted or money-weighted
- Realized or marked to market
- Complete records or selected case studies

### Thesis archive

Convert the personal portfolio repository into structured thesis records with:

- Date written
- Security
- Entry price or valuation range
- Core thesis and catalyst
- Variant perception
- Key risks and invalidating evidence
- Position changes
- Exit rationale
- Final outcome
- Postmortem

Present late-2025 and early-2026 small-cap investments as individual case studies, not only as claims of profitable trades. Explain what could have caused each thesis to fail.

### Portfolio privacy

Use one or more of:

- Delayed publication
- Percentage weights instead of dollar amounts
- Redacted transaction sizes
- Closed positions only
- Aggregated performance
- A clear distinction between a historical thesis and a current recommendation

## 8. Blog

The Blog is the explanatory layer for the entire site. It contains three public editorial tracks. It should not become a collection of unrelated posts.

### Quant Research

#### Fundamentals

Use for slower-moving, thesis-driven work:

- Small-cap company and industry analysis
- Fundamental factors
- Valuation and financial-statement analysis
- Competitive structure and catalysts
- Portfolio construction
- Thesis updates and trade postmortems
- Systematic uses of fundamental data

Portfolio case studies may link to these articles, while the Portfolio retains performance and position history.

#### Microstructure

Use for technical, data-driven market research:

- Order-book dynamics and imbalance
- Liquidity provision and adverse selection
- Execution quality and short-horizon forecasting
- Market-making research
- CTA and trend-following replications
- Crypto and prediction-market structure
- Exchange and fee-model comparisons

Quant Lab experiments should link to corresponding Microstructure articles. The experiment demonstrates the result; the article explains the research.

### Physics

Use for academic and independent scientific writing:

- Cosmology and large-scale structure
- Weak gravitational lensing
- BAO and power-spectrum analysis
- Distance ladders
- Machine learning for scientific inference
- Paper explanations
- Research-method reflections
- Interactive visualization walkthroughs

Articles should link to the corresponding Academic Research project and publication.

### AI Safety

Keep AI Safety as a blog category rather than a major front-page profile component. Focus on technically grounded analysis:

- Evaluation and benchmarking
- Interpretability
- Robustness and distribution shift
- Autonomous-system failure modes
- AI in quantitative research
- Reliability of AI-generated analysis
- Human oversight and decision systems
- Autonomous trading or research-agent risks
- Reproducibility and data provenance
- Governance tied to technical mechanisms

### Article templates

Use a shared publishing system with category-specific structures:

- **Quant Research:** Research question → Market context → Data → Method → Results → Interpretation → Risks and limitations → Reproducibility
- **Physics:** Scientific question → Background → Data or simulation → Method → Findings → Physical interpretation → Paper and code links
- **AI Safety:** Problem definition → Technical mechanism → Evidence → Failure scenario → Existing mitigations → Remaining uncertainty

Every public article should include:

- Publication and update dates
- Category, tags, author, and estimated reading time
- Short abstract
- Figures or interactive embeds
- Citations
- Related projects
- GitHub or paper links where applicable
- Disclosure and limitations

### Private personal blog

Treat the personal blog as a separate protected area, not a fourth public Blog category.

Requirements:

- Do not show it in public navigation or category cards.
- Exclude it from search indexing, the public sitemap, and RSS.
- Protect it with authentication; an obscure route is not security.
- Do not expose article metadata through public APIs.
- Separate private and public content permissions.
- Expire sessions automatically.
- Support per-post controls or encrypted private drafts only if needed.

Use owner-only authentication by default. Invitation-based access or expiring per-post sharing may be added later. A route such as **/private** is acceptable only when backed by real authorization.

## 9. Documents

Maintain a central library for:

- Quant resume
- Academic CV
- Selected publications
- One-page project briefs
- Technical presentations
- Optional transcripts, posters, or related materials

Every record should have a title, document type, date, one-sentence description, preview, and download action.

## 10. Cross-linking and content governance

### Section responsibilities

| Section | Responsibility |
| --- | --- |
| Quant Profile | Establish professional credibility |
| Academic Research | Present formal scientific work |
| Quant Lab | Provide interactive technical evidence |
| Investment Portfolio | Record investment decisions and outcomes |
| Blog | Explain hypotheses, methods, reasoning, and limitations |
| Documents | Preserve complete downloadable records |

Avoid duplicating a full explanation across sections. Write the canonical version once, then use summaries and links elsewhere.

### Shared content rules

- Maintain one source of truth for roles, dates, education, metrics, project titles, document versions, and external URLs.
- Give each project and article a stable identifier and canonical URL.
- Mark content with publication, update, data, and methodology dates where relevant.
- Define every non-obvious metric and label simulated, backtested, paper-traded, or live results.
- State benchmarks, fees, assumptions, sampling periods, and known limitations.
- Check internal links, downloads, feeds, and data freshness during releases.
- Make repositories directly support claims made on the site.

## 11. Confidentiality, privacy, and integrity

Public demonstrations should show research judgment without disclosing employer intellectual property.

Never publish:

- Exact production parameters
- Proprietary feature definitions
- Raw employer data
- Reconstructable strategy logic
- Exact live positions or capacity information
- Confidential performance or client information

Use public, synthetic, delayed, aggregated, redacted, or otherwise sanitized data. Do not imply that simulated results are live. Do not present historical investment research as a current recommendation.

## 12. Design and interaction standards

- Preserve the current site’s visual design language.
- Keep important conclusions understandable without interaction.
- Use clear labels, units, legends, and metric definitions.
- Provide keyboard access, visible focus states, descriptive alternative text, and adequate color contrast.
- Reserve layout space for media and visualizations to avoid page movement.
- Use responsive frames for charts, images, PDFs, and interactive modules.
- Load heavy charts, PDF viewers, and 3D components only when needed.
- Provide presets, reset controls, and explanatory annotations for complex tools.
- Ensure interactive pages have useful static summaries for accessibility, sharing, and search.

## 13. Technical architecture

Use the smallest architecture that reliably supports the current feature set.

### Public site

GitHub Pages is sufficient for static profiles, articles, documents, SVG charts, historical data views, multimedia, and a custom domain. Keep the existing frontend framework if it supports the required routes and components; use TypeScript for new interactive modules where practical.

Useful client-side libraries include:

- Plotly or ECharts for financial charts
- Three.js or React Three Fiber for 3D scientific visualization
- PDF.js or React-PDF for on-demand document previews

### Interactive services

Introduce a backend only for authenticated content, persistent uploads, automated ingestion, private storage, live streams, or server-side computation over large data.

A staged path is:

1. Static historical demonstrations on GitHub Pages.
2. Streamlit, SQLite, and scheduled GitHub Actions for prototypes where helpful.
3. A separate app route or subdomain with FastAPI endpoints.
4. PostgreSQL plus Parquet or object storage when data volume, datasets, or concurrent use justify it.
5. WebSocket services only where streaming adds clear value.

The private personal blog requires a real authentication and authorization service; it must not rely on GitHub Pages alone.

## 14. Implementation roadmap

### Priority 0: Information architecture and positioning

- Create the concise Home page.
- Convert the current page into the Quant Profile.
- Establish the six public routes.
- Rename ambiguous headings.
- Create the shared content source.
- Add the Documents library.
- Reserve the private blog as a separate, non-public system.

### Priority 1: Recruiter-ready evidence

- Move the five-panel visualization into Experiment 01.
- Add evidence links to Qrigin and InsightCheck accomplishments.
- Build academic project cards and on-demand PDF previews.
- Add the portfolio thesis schema.
- Connect major claims to a repository, article, experiment, or document.
- Launch the Blog taxonomy and shared article model.

### Priority 2: Interactive demonstrations and substantive writing

- Build the historical grid-market-making simulator.
- Add the crypto microstructure replay browser.
- Add the BAO or power-spectrum visualization.
- Publish the first research replication.
- Publish at least one strong article in each active public category before expanding the taxonomy.

### Priority 3: Live and continuously updated systems

- Add delayed live crypto feeds.
- Add the prediction-market observatory.
- Automate portfolio and article imports where worthwhile.
- Add monitoring for broken feeds, failed jobs, and stale data.
- Implement authenticated personal-blog access only when its ownership and hosting model are settled.

Live infrastructure comes last. A polished historical replay is more valuable than an unreliable real-time dashboard.

## 15. Adjacent professional presence

These actions support the website but should be tracked separately from site implementation:

- Maintain a paper and market-research reading catalog with original commentary.
- Use the crypto trend-following replication as an early substantive research post.
- Pin only polished, documented GitHub repositories that support site or resume claims.
- Rename course repositories as real projects or make them private.
- Remove distracting demo and fork clutter from the public GitHub profile.
- Use the same professional photograph on LinkedIn and GitHub.
- Structure LinkedIn around present work, past evidence, future direction, and contact information.
- Lead public positioning with quantitative research in trading markets while retaining academic breadth.
- Practice coding, probability, statistics, quantitative problem solving, derivatives, and market knowledge regularly.
- Track recruiting at the role level, including match, gaps, networking, stage, and priority.
- Prioritize credible roles with a strong partial match and address explicit gaps systematically.

## 16. Reference checklist

Before publishing a page or feature, confirm:

- The intended audience and next action are obvious.
- The content belongs in this section and is not duplicated elsewhere.
- Claims link to appropriate evidence.
- Data provenance, dates, assumptions, and limitations are visible.
- Employer, portfolio, and personal information is safe to publish.
- The page works on mobile and with keyboard navigation.
- Heavy or live components fail gracefully.
- Related articles, experiments, papers, documents, and repositories are cross-linked.
- Public and private content cannot leak through navigation, metadata, feeds, sitemaps, APIs, or storage permissions.
