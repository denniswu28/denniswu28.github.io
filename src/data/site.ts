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
    linkLabel: 'Research page',
    document: { label: 'Academic CV (PDF)', href: site.cv }
  },
  {
    id: 'quant',
    title: 'Quantitative research',
    text: 'Trading experience, market-making and execution research, and code.',
    href: '/quant/',
    linkLabel: 'Quant page',
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
    degree: 'B.S. in Physics, minor in Mathematics (expected 2027)',
    school: 'University of Arizona',
    dates: '2026–2027',
    note: 'Advisor: Prof. Tim Eifler, Arizona Cosmology Lab'
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
  { date: 'Nov 2026', text: 'Planned talk on BAO reconstruction with photometric-redshift smearing at the Roman Project Infrastructure Teams meeting.' },
  { date: 'Oct 2026', text: 'Talk on BAO reconstruction with photometric-redshift smearing at the Steward Astronomy Symposium.' },
  { date: 'Oct 2026', text: 'BAO measurements in the cosmology session of the SPHEREx Science Team Meeting.' },
  { date: 'Jun 2026', text: 'Presented BAO measurements at the SPHEREx Science Team face-to-face meeting at IPAC, Caltech.' },
  { date: '2026', text: 'My team won first place at the U.S. Physicists’ Tournament.' },
  { date: 'Feb 2026', text: 'Joined the Arizona Cosmology Lab at Steward Observatory to work with Prof. Tim Eifler.' }
] as const;

export const researchProjects = [
  {
    id: 'arizona-bao',
    title: 'BAO reconstruction with photometric-redshift smearing',
    group: 'Arizona Cosmology Lab, Steward Observatory, University of Arizona',
    dates: 'Feb 2026–present',
    advisor: 'Prof. Tim Eifler',
    paragraphs: [
      'Reconstruction sharpens the baryon acoustic oscillation (BAO) feature by undoing part of the galaxy motion that blurs it. Photometric redshifts smear galaxy positions along the line of sight. I am measuring how much that smearing limits reconstruction, and building a forward model that carries photo-z uncertainty through reconstruction into the standard-ruler calibration for SPHEREx, Roman and Rubin.',
      'I wrote photorecon, a Python package for transverse BAO reconstruction that follows the pyrecon interface. It is now being tested on low-redshift SPHEREx samples. I found a systematic bias in the MCMC pipeline and cut it sixfold by cross-validating two covariance estimators over a 250-cell grid. With a 25-realization Monte Carlo ensemble, I found the smearing level at which the 20 to 40 percent precision gain from reconstruction stops being significant. A first-author paper is in preparation.'
    ],
    links: [] as { label: string; href: string }[],
    figure: undefined as undefined | { src: string; alt: string; caption: string }
  },
  {
    id: 'timestep-hallmark',
    title: 'Hallmark: data management for simulation libraries',
    group: 'TIMESTEP Program, Steward Observatory, University of Arizona',
    dates: '2026–present',
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
      'The goal was a common framework for comparing distance-calibration methods across teams, and a test of the JWST and HST distances behind the local Hubble constant. I built a Python pipeline for synthetic stellar catalogs and for extracting features from Hertzsprung–Russell diagrams. I also compared JWST distance measurements across the literature and measured galaxy–dust correlations in SDSS data. This work contributed to Riess et al. (2024).'
    ],
    links: [],
    figure: undefined
  }
] as const;

export const inPreparation = [
  {
    authors: 'Wu, T., Paillas, E., et al.',
    title: 'BAO Reconstruction with Photometric Redshift Smearing',
    status: 'In preparation'
  }
] as const;

export const talks = [
  { date: 'Nov 2026', title: 'BAO Reconstruction with Photometric Redshift Smearing', venue: 'Roman Project Infrastructure Teams Meeting (planned)' },
  { date: 'Oct 2026', title: 'BAO Reconstruction with Photometric Redshift Smearing', venue: 'Steward Astronomy Symposium, University of Arizona' },
  { date: 'Oct 2026', title: 'BAO Measurements, Cosmology Session', venue: 'SPHEREx Science Team Meeting' },
  { date: 'Jun 2026', title: 'BAO Measurements, Cosmology Session', venue: 'SPHEREx Science Team Meeting (Face-to-Face E4), IPAC, Caltech' },
  { date: 'Apr 2026', title: 'BAO analysis segment of the SPHEREx team colloquium', venue: 'SO and NSF NOIRLab Joint Colloquium, Steward Observatory' },
  { date: 'Aug 2024', title: 'Predicting Power Spectrum Window Function with Neural Networks', venue: 'SURF Final Presentation, SPHEREx Team, Caltech' },
  { date: 'Aug 2023', title: 'Quantifying Wetland Carbon Emissions in the Southeastern United States', venue: 'Data+ Final Presentation, Duke University' }
] as const;

export const software = [
  {
    name: 'photorecon',
    role: 'Lead developer',
    text: 'Transverse BAO reconstruction for galaxy samples with photometric-redshift uncertainty, with an interface patterned after pyrecon.',
    href: undefined as string | undefined
  },
  {
    name: 'cosmock',
    role: 'Co-developer',
    text: 'Tomographic weak-lensing convergence maps from input maps and angular power spectra, using point-transformed Gaussian fields.',
    href: 'https://github.com/ivan96eb/cosmock'
  },
  {
    name: 'Hallmark',
    role: 'Contributor',
    text: 'Reproducible data management for simulation libraries, motivated by Event Horizon Telescope workflows.',
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
    organization: 'Qrigin Capital · Crypto proprietary trading · $35M',
    dates: 'Aug 2025–present (full time to May 2026, part time since)',
    location: 'Remote',
    mandate: 'I own strategies end to end, from research and validation through execution, monitoring and risk.',
    accomplishments: [
      'Developed an LSTM forecasting engine with phase-space features and a managed MLflow lifecycle, then deployed it as a live short-horizon taker strategy.',
      'Built a dual-engine backtesting stack, with a vectorized research engine and an L2 order-queue tick model, for fast parameter sweeps and higher-fidelity fill analysis.',
      'Designed and validated grid market-making models with inventory, queue-position, fee and adverse-selection controls.',
      'Architected TWAP, VWAP and implementation-shortfall execution research across three major exchanges.',
      'Engineered more than 200 multi-frequency OHLCV, order-book, derivatives and cross-sectional factors with automated decay analysis.',
      'Led a two-person research pod, reviewing methodology and production code and mentoring junior researchers before live deployment.'
    ],
    technologies: ['Python', 'PyTorch', 'MLflow', 'Polars', 'NumPy', 'REST and WebSocket APIs', 'Linux']
  },
  {
    id: 'insightcheck',
    role: 'Quantitative Research Intern',
    organization: 'InsightCheck Investments · $300M AUM',
    dates: 'Feb 2025–Aug 2025',
    location: 'Shenzhen, China',
    mandate: 'Market-neutral research and market-data infrastructure across equity and futures markets.',
    accomplishments: [
      'Combined PCA-derived factors, mean reversion and covariance risk modeling in market-neutral research.',
      'Built an L3 market-by-order reconstruction engine for the A-share universe.',
      'Built a distributed backtester that reduced evaluation cycles by approximately ten times.'
    ],
    technologies: ['Python', 'Polars', 'Dask', 'C++', 'SQL', 'Linux']
  }
] as const;

export const independentProjects = [
  {
    id: 'market-making-research',
    title: 'Market-making research stack',
    dates: '2025',
    text: 'Built and deployed a live ETH market-making framework on OKX, combining EWMA flow alphas with a CNN that reads order-book patterns through a phase-space feature representation. It averaged 0.5 to 1 percent daily return, and the project led to my recruitment at Qrigin.'
  },
  {
    id: 'imc-prosperity',
    title: 'IMC Prosperity 4',
    dates: '2026',
    text: 'Ranked in the top 3 percent of more than 6,000 teams in a global algorithmic trading competition, using market making and cross-asset arbitrage driven by fingerprinting of counterparties.'
  }
] as const;

export const quantCode = [
  {
    name: 'market-making-lab',
    href: 'https://github.com/denniswu28/market-making-lab',
    text: 'Event-driven market-making research lab for testing order-book signals, latency, queue assumptions, inventory controls and execution costs with reproducible synthetic examples.'
  }
] as const;

export const quantMethods = 'Python (PyTorch, Polars, NumPy, MLflow, Dask), C++, Rust and SQL. Short-horizon forecasting, order-book and queue simulation, execution and transaction-cost analysis, factor research, Bayesian inference and Monte Carlo methods.';
