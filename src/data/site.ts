export const site = {
  name: 'Tianrui Wu',
  fullName: 'Tianrui Wu',
  title: 'Quantitative Researcher',
  description: 'Quantitative researcher applying statistical inference, machine learning, and market microstructure research to production trading systems.',
  url: 'https://denniswu28.github.io',
  email: 'denniswu501@gmail.com',
  github: 'https://github.com/denniswu28',
  linkedin: 'https://www.linkedin.com/in/dennis-tianrui-wu',
  socialImage: '/images/social-preview.png',
  socialImageWidth: 1733,
  socialImageHeight: 908,
  socialImageAlt: 'Tianrui Wu — quantitative research, cosmology, and systems',
  resume: '/files/Wu,%20Tianrui_Resume_v2.pdf',
  cv: '/files/Wu,%20Tianrui_CV.pdf'
} as const;

export const navigation = [
  { label: 'Quant', href: '/quant/' },
  { label: 'Academic', href: '/academic/' },
  { label: 'Lab', href: '/lab/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Documents', href: '/documents/' }
] as const;

export const proofPoints = [
  'Live quantitative trading systems',
  'Two cosmology publications',
  'Caltech research fellowship',
  'Python, PyTorch, C++, Rust, and SQL'
] as const;

export const profileCards = [
  {
    eyebrow: 'Production research',
    title: 'Quantitative Research and Trading',
    text: 'Forecasting, execution, market making, and research infrastructure across crypto and equity markets.',
    href: '/quant/'
  },
  {
    eyebrow: 'Scientific foundation',
    title: 'Academic Research',
    text: 'Cosmology, Bayesian inference, neural networks, and next-generation survey simulations.',
    href: '/academic/'
  },
  {
    eyebrow: 'Inspectable evidence',
    title: 'Quant Lab',
    text: 'Historical and sanitized experiments that expose questions, methods, results, and limitations.',
    href: '/lab/'
  },
  {
    eyebrow: 'Decision records',
    title: 'Investment Portfolio',
    text: 'A content-gated archive for historical theses, attribution, invalidating evidence, and postmortems.',
    href: '/portfolio/'
  }
] as const;

export const experiences = [
  {
    id: 'qrigin',
    role: 'Quantitative Researcher & Systematic Trader',
    organization: 'Qrigin Capital · Crypto Proprietary Trading · $35M',
    dates: 'Aug 2025–May 2026 full-time · May 2026–present part-time',
    location: 'Remote',
    mandate: 'Own strategies end to end, from research and validation through execution, monitoring, and risk.',
    accomplishments: [
      'Developed an LSTM forecasting engine with phase-space features and a managed MLflow lifecycle, then deployed it as a live short-horizon taker strategy.',
      'Built vectorized and L2 order-queue backtest engines for grid market making and systematic parameter research.',
      'Architected TWAP, VWAP, and implementation-shortfall execution research across three major exchanges.'
    ],
    technologies: ['Python', 'PyTorch', 'MLflow', 'Polars', 'NumPy', 'REST/WebSocket APIs', 'Linux'],
    evidenceHref: '/lab/trading-systems-execution/#market-making'
  },
  {
    id: 'insightcheck',
    role: 'Quantitative Research Intern',
    organization: 'InsightCheck Investment · $300M AUM',
    dates: 'Feb 2025–Aug 2025',
    location: 'Shenzhen, China',
    mandate: 'Build market-neutral research and market-data infrastructure across equity and futures markets.',
    accomplishments: [
      'Combined PCA-derived factors, mean reversion, and covariance risk modeling in market-neutral research.',
      'Built an L3 market-by-order reconstruction engine for the A-share universe.',
      'Built a distributed backtester that reduced evaluation cycles by approximately ten times.'
    ],
    technologies: ['Python', 'Polars', 'Dask', 'C++', 'SQL', 'Linux'],
    evidenceHref: '/lab/trading-systems-execution/#factor-research'
  }
] as const;

export const capabilities = [
  ['Forecasting and signal research', 'Short-horizon prediction, feature decay, cross-sectional ranking, and robust validation.'],
  ['Market making and inventory control', 'Grid construction, queue-aware simulation, inventory limits, and adverse-selection analysis.'],
  ['Execution and transaction-cost analysis', 'TWAP/VWAP research, slippage measurement, fill analysis, and venue comparison.'],
  ['Market-data engineering', 'Order-book reconstruction, exchange feeds, event normalization, and reproducible datasets.'],
  ['Backtesting and simulation', 'Vectorized sweeps, tick-level replay, benchmark construction, and sensitivity analysis.'],
  ['Production monitoring and risk', 'P&L, exposure, beta, leverage, fee, model, and data-quality monitoring.'],
  ['Statistical inference and machine learning', 'Bayesian inference, time-series modeling, neural networks, and uncertainty analysis.']
] as const;

export const academicProjects = [
  {
    id: 'arizona-bao',
    title: 'BAO Reconstruction Under Redshift Uncertainty',
    institution: 'Arizona Cosmology Lab · 2026–present',
    problem: 'Measure how photometric-redshift smearing changes the value of baryon acoustic oscillation reconstruction.',
    data: 'Simulated galaxy catalogs and Monte Carlo ensembles for Roman and Rubin-like survey conditions.',
    contribution: 'Designed the analysis, forward-model framework, covariance cross-checks, and Bayesian inference pipeline.',
    result: 'Reduced an inference bias by four to six times and mapped where a 20–40% precision benefit becomes statistically insignificant.',
    image: '/images/academic/COS_Arizona-Cosmology-Lab_WEBHEADER.svg',
    alt: 'Arizona Cosmology Lab wordmark'
  },
  {
    id: 'caltech-spherex',
    title: 'Power-Spectrum Reconstruction with Scientific ML',
    institution: 'SPHEREx Team, Caltech · 2024',
    problem: 'Recover galaxy power spectra after instrument window functions distort the observed signal.',
    data: 'Lognormal mock catalogs with realistic SPHEREx survey masks.',
    contribution: 'Built the ResUNet model, mock-data pipeline, distributed training workflow, and analytic validation baselines.',
    result: 'Achieved sub-percentage prediction error on validation data.',
    image: '/images/academic/spherex-first-light.webp',
    alt: 'Six infrared detector views from a SPHEREx first-light exposure'
  },
  {
    id: 'duke-surveys',
    title: 'Roman–Rubin Synergies and the Distance Ladder',
    institution: 'Duke Cosmology Group · 2022–2024',
    problem: 'Combine space- and ground-based survey information while testing cosmological calibration methods.',
    data: 'Roman and Rubin simulations totaling 120 TB plus synthetic stellar catalogs.',
    contribution: 'Built two-point correlation, MCMC inference, photometric-redshift, and stellar-catalog pipelines.',
    result: 'Evaluated methods that increased the reported Figure of Merit by 20% and contributed to two publications.',
    image: '/images/academic/openuniverse-roman.webp',
    alt: 'A simulated Roman Space Telescope field from OpenUniverse2024'
  }
] as const;
