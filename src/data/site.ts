// Shared profile facts. Research and academic wording follows the academic CV
// (October 2026). Quant wording follows the quantitative research resume.

export const site = {
  name: 'Tianrui (Dennis) Wu',
  shortName: 'Tianrui Wu',
  title: 'Cosmology and Quantitative Research',
  description: 'Tianrui (Dennis) Wu studies physics at the University of Arizona, works on cosmology in the Arizona Cosmology Lab, and does quantitative research on financial markets.',
  url: 'https://denniswu28.github.io',
  email: 'denniswu501@gmail.com',
  github: 'https://github.com/denniswu28',
  linkedin: 'https://www.linkedin.com/in/dennis-tianrui-wu',
  socialImage: '/images/social-preview.png',
  socialImageWidth: 1200,
  socialImageHeight: 630,
  socialImageAlt: 'Tianrui (Dennis) Wu: cosmology and quantitative research',
  resume: '/files/Wu,%20Tianrui_Resume_v2.pdf',
  cv: '/files/Wu,%20Tianrui_CV.pdf'
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/academic/' },
  { label: 'Quant', href: '/quant/' },
  { label: 'Writing', href: '/blog/' },
  { label: 'CV', href: '/documents/' }
] as const;

export const homePaths = [
  {
    id: 'research',
    title: 'Research',
    text: 'Cosmology projects, publications, talks, software, teaching and outreach.',
    href: '/academic/',
    linkLabel: 'View page',
    document: { label: 'CV (PDF)', href: site.cv }
  },
  {
    id: 'quant',
    title: 'Quantitative research',
    text: 'Trading experience, market-making and execution research, and code.',
    href: '/quant/',
    linkLabel: 'View page',
    document: { label: 'Resume (PDF)', href: site.resume }
  }
] as const;

export const interests = [
  'Large-scale structure and BAO',
  'Photometric redshifts',
  'Statistical inference and simulation',
  'Market microstructure and forecasting'
] as const;

export const education = [
  {
    degree: 'B.S. in Physics, minor in Mathematics (expected by May 2027)',
    school: 'University of Arizona',
    dates: '2026–2027',
    note: 'Advisors: Prof. Tim Eifler, Arizona Cosmology Lab, and Prof. Chi-kwan Chan, EHT Collaboration'
  },
  {
    degree: 'Physics and Mathematics',
    school: 'Duke University',
    dates: '2021–2024',
    note: 'Advisors: Prof. Michael A. Troxel and Prof. Daniel Scolnic'
  }
] as const;

// Newest first. Dates follow the CV.
export const news = [
  { date: 'Oct 2026', text: 'Gave a TACOS talk on BAO reconstruction with photometric-redshift smearing to a Steward-wide audience.' },
  { date: 'Oct 2026', text: 'Gave a talk on BAO reconstruction with photometric-redshift smearing at the Steward Astronomy Symposium.' },
  { date: 'Oct 2026', text: 'Presented BAO measurements in the cosmology session of the SPHEREx Science Team Meeting.' },
  { date: 'Aug 2026', text: 'Started the TIMESTEP astronomical software engineering internship with Dr. Chi-kwan Chan, working on Event Horizon Telescope data tools.' },
  { date: 'Jun 2026', text: 'Presented BAO measurements at the SPHEREx Science Team face-to-face meeting at IPAC, Caltech.' },
  { date: '2026', text: 'My team won first place at the U.S. Physicists’ Tournament.' },
  { date: 'Feb 2026', text: 'Joined the Arizona Cosmology Lab at Steward Observatory to work with Prof. Tim Eifler.' }
] as const;

export const researchProjects = [
  {
    id: 'arizona-bao',
    title: 'BAO reconstruction in the presence of photometric-redshift uncertainty',
    group: 'Arizona Cosmology Lab, Steward Observatory, University of Arizona',
    dates: 'Feb 2026–present',
    advisor: 'Prof. Tim Eifler',
    paragraphs: [
      'Reconstruction sharpens the baryon acoustic oscillation (BAO) feature by undoing part of the galaxy motion that blurs it. Photometric redshifts smear galaxy positions along the line of sight. I test when standard reconstruction still improves BAO distances for samples with SPHEREx-like redshift errors and number densities.',
      'I developed photorecon, a Python package for transverse BAO reconstruction on photometric galaxy samples that follows the pyrecon interface. It is now being tested for SPHEREx at low redshift. I found a systematic bias in the MCMC pipeline and cut it sixfold by cross-validating two covariance estimators over a 250-cell grid.',
      'Across 25 DESI AbacusSummit mocks, combining four redshift-precision classes per bin raised the 2D BAO figure of merit by 26 to 271 percent after reconstruction and recovered the input distances within 1.3σ. I identified the operating range of standard reconstruction, a redshift error σ/(1 + z) below about 0.003 and shot noise below about 2.5 times the BAO-scale clustering power, to guide SPHEREx sample selection. A first-author paper is in preparation.'
    ],
    links: [] as { label: string; href: string }[],
    figure: undefined as undefined | { src: string; alt: string; caption: string }
  },
  {
    id: 'timestep-hallmark',
    title: 'Hallmark: data management for simulation libraries',
    group: 'TIMESTEP Program, Steward Observatory, University of Arizona',
    dates: 'Aug 2026–present',
    advisor: 'Dr. Chi-kwan Chan',
    paragraphs: [
      'Event Horizon Telescope simulation libraries hold large numbers of files whose parameters live in their paths. Hallmark is an open-source Python package that decodes those paths into structured parameters and data frames, so a library can be searched and reused. I work on the metadata extraction, Git-based data versioning, and parameter-driven downloads of public-data subsets such as DESI.'
    ],
    links: [{ label: 'lanisrc/hallmark', href: 'https://github.com/lanisrc/hallmark' }],
    figure: undefined
  },
  {
    id: 'caltech-spherex',
    title: 'Neural-network window functions for SPHEREx',
    group: 'SPHEREx Team, Summer Undergraduate Research Fellowship (SURF), Caltech',
    dates: 'Jun–Aug 2024',
    advisor: 'Dr. Olivier Doré',
    paragraphs: [
      'A survey window mixes Fourier modes in the measured galaxy power spectrum. The effect is largest on the scales that carry the signal of local primordial non-Gaussianity. I built a ResUNet in PyTorch that predicts window-function effects quickly, and it reached sub-percent prediction error on validation data.',
      'I owned the full pipeline: lognormal mock catalogs with realistic SPHEREx survey masks, distributed training on Linux HPC, and validation against analytic baselines.'
    ],
    links: [],
    figure: {
      src: '/images/academic/spherex-first-light.webp',
      alt: 'Six infrared detector views from a SPHEREx first-light exposure',
      caption: 'A SPHEREx first-light exposure. Image: NASA/JPL-Caltech.'
    }
  },
  {
    id: 'duke-surveys',
    title: 'Roman and Rubin weak-lensing synergies',
    group: 'Cosmology Group, Department of Physics, Duke University',
    dates: 'May 2022–Dec 2024',
    advisor: 'Prof. Michael A. Troxel',
    paragraphs: [
      'Roman observes from space and Rubin from the ground. The project tested how a joint analysis can improve photometric-redshift calibration and cosmological constraints. I built a Python pipeline for joint analysis of 120 TB of Roman and Rubin simulations, with two-point correlation functions and MCMC inference of cosmological parameters.',
      'New mode-based calibration strategies raised the Figure of Merit by 20 percent. I contributed simulation and analysis work to OpenUniverse2024.'
    ],
    links: [],
    figure: {
      src: '/images/academic/openuniverse-roman.webp',
      alt: 'A simulated Roman Space Telescope field from OpenUniverse2024',
      caption: 'A simulated Roman field from OpenUniverse2024. Image: NASA Goddard and M. Troxel.'
    }
  },
  {
    id: 'duke-distance-ladder',
    title: 'Calibrating the distance ladder with synthetic stars',
    group: 'Cosmology Group, Department of Physics, Duke University',
    dates: 'Sep 2023–Aug 2024',
    advisor: 'Prof. Daniel Scolnic',
    paragraphs: [
      'The goal was a common framework for comparing distance-calibration methods across teams, and a test of the JWST and HST distances behind the local Hubble constant. I built a Python pipeline for synthetic stellar catalogs and for extracting features from Hertzsprung-Russell diagrams. I also compared JWST distance measurements across the literature and measured galaxy-dust correlations in SDSS data. This work contributed to Riess et al. (2024).'
    ],
    links: [],
    figure: undefined
  }
] as const;

export const inPreparation = [
  {
    authors: 'Wu, T., Paillas, E., & Eifler, T.',
    title: 'BAO Reconstruction in the Presence of Photometric Redshift Uncertainty',
    status: 'Manuscript in preparation'
  }
] as const;

export const talks = [
  { date: 'Oct 2026', title: 'BAO Reconstruction with Photometric Redshift Smearing', venue: 'TACOS Talk, Arizona Cosmology Lab, Steward Observatory (Steward-wide audience)' },
  { date: 'Oct 2026', title: 'BAO Reconstruction with Photometric Redshift Smearing', venue: 'Steward Astronomy Symposium, University of Arizona' },
  { date: 'Oct 2026', title: 'BAO Measurements, Cosmology Session', venue: 'SPHEREx Science Team Meeting' },
  { date: 'Jun 2026', title: 'BAO Measurements, Cosmology Session', venue: 'SPHEREx Science Team Meeting (Face-to-Face E4), IPAC, Caltech' },
  { date: 'Apr 2026', title: 'BAO analysis segment of the SPHEREx team colloquium', venue: 'SO and NSF NOIRLab Joint Colloquium, Steward Observatory' },
  { date: 'Aug 2024', title: 'Predicting Power Spectrum Window Function with Neural Networks', venue: 'SURF Final Presentation, SPHEREx Team, Caltech' },
  { date: 'Aug 2023', title: 'Quantifying Wetland Carbon Emissions in the Southeastern United States', venue: 'Data+ Final Presentation, Duke University' }
] as const;

export const software = [
  {
    name: 'cosmock',
    role: 'Co-developer',
    text: 'Tomographic weak-lensing convergence maps from input maps and angular power spectra, using point-transformed Gaussian fields.',
    href: 'https://github.com/ivan96eb/cosmock'
  },
  {
    name: 'hallmark',
    role: 'Contributor',
    text: 'Reproducible data management for simulation libraries, motivated by Event Horizon Telescope calibration and simulation workflows.',
    href: 'https://github.com/lanisrc/hallmark'
  }
] as const;

export const teaching = [
  { dates: '2022–2024', role: 'Assistant, Department of Mathematics, Duke University', text: 'Help Room shifts and SAGE discussion sections for multivariable calculus, linear algebra and probability.' },
  { dates: '2025', role: 'Physics and mathematics tutor, PalmDrive Academy', text: 'AP Physics, AP Calculus and Cambridge A-Level Physics.' },
  { dates: '2026–present', role: 'Peer mentor for incoming students, University of Arizona', text: 'Mentoring first-year students through the move to university study.' }
] as const;

export const outreach = [
  { dates: '2021–2024', role: 'Founder and President, Stargazing Devils', text: 'Founded Duke’s first astronomy club. Ran weekly observatory open houses and secured funding for 14 students to attend the 2023 and 2024 solar eclipses.' },
  { dates: '2022–2024', role: 'President and Co-President, Society of Physics Students, Duke', text: 'Rebuilt the chapter with research panels, student and faculty seminars, and a mentorship program for women in physics.' },
  { dates: '2022–2024', role: 'Student Ambassador, American Physical Society', text: 'Organized study sessions and manuscript workshops, and advocated for physics-community priorities on Congressional Visits Day.' }
] as const;

export const awards = [
  { year: '2026', text: 'First Place, U.S. Physicists’ Tournament (team)' },
  { year: '2026', text: 'Global Wildcat Scholarship, University of Arizona' },
  { year: '2024', text: 'Faculty Scholars Finalist, Duke University' },
  { year: '2024', text: 'Jocelyn Bell Burnell Outstanding Leadership Scholarship, Society of Physics Students' },
  { year: '2024', text: 'Inductee, Sigma Pi Sigma' },
  { year: '2021', text: 'Third Grand Award in Physics and Astronomy, Regeneron ISEF' },
  { year: '2021', text: 'Top Gold Medalist, British Physics Olympiad' }
] as const;

export const experiences = [
  {
    id: 'qrigin',
    role: 'Quantitative Researcher and Systematic Trader',
    organization: 'Qrigin Capital · startup proprietary trading firm, $35M',
    dates: 'Aug 2025–present (full time to May 2026, part time since)',
    location: 'Remote',
    accomplishments: [
      'Alpha discovery: built an LSTM forecasting engine on phase-space features with full MLOps in MLflow, and integrated more than 200 multi-frequency factors with decay analysis and cross-sectional ranking, lifting win rates by 3.1 percent.',
      'Directional strategy: developed a high-frequency taker strategy on tick data that captures short reversions with a confidence signal, deployed live at a post-fee Sharpe ratio of 8.2 over three months on Coinbase International.',
      'Optimal execution: architected TWAP, VWAP and implementation-shortfall algorithms for CTA books, with microstructure timing overlays on child-order aggressiveness, cutting slippage by about 2 bps against TWAP across major exchanges.',
      'Market making: built a dual-engine tick backtest stack with vectorized L2 queue-position fills, and developed and validated a grid-based market-making strategy with an out-of-sample Sharpe ratio of 9 over three months.',
      'Trading and risk: ran CTA books on OKX, Binance and Coinbase, owning P&L, TCA and fee analysis. Managed live risk on $35M with leverage, position and beta limits, and trimmed exposure ahead of the October 2025 crash.',
      'Led a two-person research team, mentored junior researchers, and reviewed methodology and code before deployment.'
    ],
    technologies: ['Python (PyTorch, MLflow, Polars, pandas, NumPy)', 'CEX APIs (REST and WebSocket)', 'Grafana', 'Linux', 'Git']
  },
  {
    id: 'insightcheck',
    role: 'Quantitative Researcher',
    organization: 'InsightCheck Investments · systematic equity fund with CTA desk, $300M AUM',
    dates: 'Feb 2025–Aug 2025',
    location: 'Shenzhen, China',
    accomplishments: [
      'Statistical arbitrage: developed a market-neutral long-short equity strategy combining PCA statistical factors and machine-learning signals with a covariance-based risk model, backtested at a post-cost Sharpe ratio of 2.4.',
      'Factor research: researched fundamental and microstructure alpha factors for Chinese A-shares, validating more than 62 intraday factors with daily IC above 0.01, and ran cross-sectional portfolio optimization in Polars.',
      'Order-book engine and infrastructure: solely engineered an L3 market-by-order reconstruction engine, prototyped in Python and migrated to C++, that processes the full A-share universe in about one second per day. Built a Dask backtester that cut evaluation cycles tenfold.'
    ],
    technologies: ['Python (Polars, Dask)', 'C++', 'SQL', 'Linux', 'Git']
  }
] as const;

export const independentProjects = [
  {
    id: 'imc-prosperity',
    title: 'IMC Prosperity 4 Trading Competition',
    dates: '2026',
    text: 'Ranked in the top 3 percent of more than 6,000 teams using market making and cross-asset arbitrage driven by counterparty fingerprinting. Python (PyTorch) and Rust.'
  },
  {
    id: 'market-making-research',
    title: 'Crypto market maker with backtest engine',
    dates: '2025',
    text: 'Built and deployed a live ETH market-making framework on OKX, combining EWMA flow alphas with a CNN that captures order-book patterns through phase-space features. It averaged 0.5 to 1 percent daily return, and the project led to my recruitment at Qrigin.'
  }
] as const;

export const quantCode = [
  {
    name: 'market-making-lab',
    href: 'https://github.com/denniswu28/market-making-lab',
    text: 'Event-driven market-making research lab for testing order-book signals, latency, queue assumptions, inventory controls and execution costs with reproducible synthetic examples.'
  }
] as const;

export const quantMethods = 'Python (PyTorch, Polars, pandas, NumPy, Numba, Dask, MLflow), Rust, C and C++, SQL and Unix. Markets: digital assets, commodity futures, global equities, options (Akuna 101 and 201) and prediction markets.';
