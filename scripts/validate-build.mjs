import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const required = [
  'index.html',
  'quant/index.html',
  'academic/index.html',
  'academic/publications/openuniverse2024/index.html',
  'academic/publications/jwst-validates-hst/index.html',
  'lab/index.html',
  'lab/trading-systems-execution/index.html',
  'portfolio/index.html',
  'portfolio/small-account-equities-2025/index.html',
  'blog/index.html',
  'blog/quant-research/reading-execution-evidence/index.html',
  'blog/physics/shared-simulated-skies/index.html',
  'favicon.svg',
  'documents/index.html',
  'data/coinbase-btc-usd-2025-10-09-to-2025-10-14-5m.csv',
  '404.html',
  'rss.xml'
];

const missingRequired = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missingRequired.length) throw new Error(`Missing generated routes: ${missingRequired.join(', ')}`);

const socialCardPath = path.join(root, 'images', 'social-preview.png');
if (!fs.existsSync(socialCardPath)) throw new Error('Missing generated social preview image.');
const socialCard = fs.readFileSync(socialCardPath);
const pngSignature = '89504e470d0a1a0a';
if (socialCard.subarray(0, 8).toString('hex') !== pngSignature) throw new Error('Social preview is not a valid PNG.');
const socialWidth = socialCard.readUInt32BE(16);
const socialHeight = socialCard.readUInt32BE(20);
const socialRatio = socialWidth / socialHeight;
if (socialWidth < 1200 || socialHeight < 630 || socialRatio < 1.8 || socialRatio > 2 || socialCard.length > 5_000_000) {
  throw new Error(`Invalid social preview dimensions or size: ${socialWidth}x${socialHeight}, ${socialCard.length} bytes.`);
}

const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});
const files = walk(root);
const textFiles = files.filter((file) => /\.(html|xml|css|js)$/.test(file));
const allText = textFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

for (const forbidden of ['href="/private', 'draft-template', 'Unpublished thesis template', 'chatgpt_portfolio_update', 'chatgpt_trade_log', 'Build the claim. Show the method.', 'fonts.googleapis.com']) {
  if (allText.includes(forbidden)) throw new Error(`Forbidden unpublished output detected: ${forbidden}`);
}

for (const forbiddenCopy of [
  'FAVORITE SAYING',
  'Choose the evidence you need',
  'The landing page stays short',
  'Credibility at a glance',
  'Claims should be inspectable',
  'Organized by system',
  'Detailed claims will be added',
  'Personal writing is not part of this public system',
  'This section is separate from the Quant Lab',
  'Every experiment follows Question',
  'PDF viewers load only when requested',
  'Publication gate is active',
  '>Planned<',
  'data-state=planned'
]) {
  if (allText.includes(forbiddenCopy)) throw new Error(`Removed visitor copy detected: ${forbiddenCopy}`);
}

const homeHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const homeLabel of ['Tianrui (Dennis) Wu', 'Arizona Cosmology Lab', 'Qrigin Capital', 'href="/academic/"', 'href="/quant/"', '/images/portrait.jpg']) {
  if (!homeHtml.includes(homeLabel)) throw new Error(`Missing neutral homepage content: ${homeLabel}`);
}

const quantHtml = fs.readFileSync(path.join(root, 'quant', 'index.html'), 'utf8');
for (const quantFeature of ['id="experience"', 'id="independent-projects"', 'top 3 percent of more than 6,000 teams', 'market-making-lab', '/lab/trading-systems-execution/']) {
  if (!quantHtml.includes(quantFeature)) throw new Error(`Missing quant page content: ${quantFeature}`);
}

const htmlFiles = files.filter((file) => file.endsWith('.html'));
const researchHtml = fs.readFileSync(path.join(root, 'academic', 'index.html'), 'utf8');
for (const researchFeature of ['id="arizona-bao"', 'id="caltech-spherex"', 'id="duke-surveys"', 'id="publications"', 'id="education"', 'id="recognition"', 'Manuscript in preparation', 'photorecon']) {
  if (!researchHtml.includes(researchFeature)) throw new Error(`Missing research page content: ${researchFeature}`);
}
// Plain-style guard: no em dashes or semicolons in the visitor-facing prose of the main pages.
for (const page of ['index.html', 'academic/index.html', 'quant/index.html']) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  const body = html.slice(html.indexOf('<main'), html.indexOf('</main>')).replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
  for (const mark of ['—', ';']) {
    if (body.includes(mark)) throw new Error(`Prose style check failed on ${page}: found "${mark}"`);
  }
}
const experimentHtml = fs.readFileSync(path.join(root, 'lab', 'trading-systems-execution', 'index.html'), 'utf8');
for (const evidenceLabel of [
  'Deep Limit-Order-Book Architecture',
  'ILLUSTRATIVE ACCEPTANCE TARGET',
  '20% BTC + 80% CASH',
  'TWAP 0.00'
]) {
  if (!experimentHtml.includes(evidenceLabel)) throw new Error(`Missing revised Quant Lab evidence: ${evidenceLabel}`);
}
for (const obsoleteLabel of ['Method view only', 'Scenario view only']) {
  if (experimentHtml.includes(obsoleteLabel)) throw new Error(`Obsolete Quant Lab placeholder detected: ${obsoleteLabel}`);
}
const socialImageUrl = 'https://denniswu28.github.io/images/social-preview.png';
for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  for (const socialMeta of [
    `<meta property="og:image" content="${socialImageUrl}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Tianrui (Dennis) Wu: cosmology and quantitative research">`,
    `<meta name="twitter:image" content="${socialImageUrl}">`,
    `<meta name="twitter:image:alt" content="Tianrui (Dennis) Wu: cosmology and quantitative research">`
  ]) {
    if (!html.includes(socialMeta)) throw new Error(`Missing social metadata in ${path.relative(root, htmlFile)}: ${socialMeta}`);
  }
}
const broken = [];
for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|data:|#)/.test(reference)) continue;
    const clean = decodeURIComponent(reference.split(/[?#]/)[0]);
    if (!clean) continue;
    let target;
    if (clean.startsWith('/')) {
      const relative = clean.slice(1);
      target = path.join(root, relative);
    } else {
      target = path.resolve(path.dirname(htmlFile), clean);
    }
    if (clean.endsWith('/')) target = path.join(target, 'index.html');
    else if (!path.extname(target)) target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) broken.push(`${path.relative(root, htmlFile)} -> ${reference}`);
  }
}
if (broken.length) throw new Error(`Broken internal references:\n${broken.join('\n')}`);

const sitemap = files.find((file) => /sitemap.*\.xml$/.test(path.basename(file)));
if (!sitemap) throw new Error('No sitemap was generated.');
const sitemapText = fs.readFileSync(sitemap, 'utf8');
if (sitemapText.includes('/private') || sitemapText.includes('draft-template')) throw new Error('Sitemap contains private or draft content.');

console.log(`Validated ${htmlFiles.length} HTML pages, ${files.length} files, internal references, sitemap, RSS, and publishing exclusions.`);
