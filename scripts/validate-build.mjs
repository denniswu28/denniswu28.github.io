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
  'blog/index.html',
  'blog/quant-research/reading-execution-evidence/index.html',
  'blog/physics/shared-simulated-skies/index.html',
  'blog/ai-safety/index.html',
  'documents/index.html',
  '404.html',
  'rss.xml'
];

const missingRequired = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missingRequired.length) throw new Error(`Missing generated routes: ${missingRequired.join(', ')}`);

const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});
const files = walk(root);
const textFiles = files.filter((file) => /\.(html|xml|css|js)$/.test(file));
const allText = textFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

for (const forbidden of ['href="/private', 'draft-template', 'Unpublished thesis template']) {
  if (allText.includes(forbidden)) throw new Error(`Forbidden unpublished output detected: ${forbidden}`);
}

const htmlFiles = files.filter((file) => file.endsWith('.html'));
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
