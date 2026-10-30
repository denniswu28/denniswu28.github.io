import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { education, homePaths, independentProjects, navigation, news, researchProjects, site } from '../src/data/site';

describe('public site content', () => {
  it('uses one name form everywhere', () => {
    expect(site.name).toBe('Tianrui (Dennis) Wu');
  });

  it('keeps the navigation short and ordered', () => {
    expect(navigation.map((item) => item.label)).toEqual(['Home', 'Research', 'Quant', 'Writing', 'CV']);
  });

  it('routes academic and trading visitors from a neutral homepage', () => {
    expect(homePaths.map((path) => path.href)).toEqual(['/academic/', '/quant/']);
    expect(homePaths.map((path) => path.document.href)).toEqual([site.cv, site.resume]);
  });

  it('keeps stable anchors used by older links and articles', () => {
    expect(researchProjects.map((project) => project.id)).toEqual(
      expect.arrayContaining(['arizona-bao', 'caltech-spherex', 'duke-surveys'])
    );
    expect(independentProjects.map((project) => project.title)).toEqual(['IMC Prosperity 4 Trading Competition', 'Crypto market maker with backtest engine']);
  });

  it('never presents the Duke record as a degree or a transfer', () => {
    const duke = education.find((item) => item.school === 'Duke University');
    expect(duke?.degree).not.toMatch(/B\.?S\.?|Bachelor|transfer/i);
    const sources = ['src/data/site.ts', 'src/pages/index.astro', 'src/pages/academic/index.astro'].map((file) => fs.readFileSync(file, 'utf8')).join('\n');
    expect(sources).not.toMatch(/transferr/i);
  });

  it('lists news newest first', () => {
    expect(news.length).toBeGreaterThan(2);
    expect(news[0].date).toBe('Oct 2026');
  });

  it('does not restore removed interface copy', () => {
    const sources = [
      'src/pages/index.astro',
      'src/pages/quant/index.astro',
      'src/pages/lab/index.astro',
      'src/pages/blog/index.astro',
      'src/pages/portfolio/index.astro',
      'src/pages/documents/index.astro',
      'src/pages/404.astro',
      'src/styles/global.css',
      'src/layouts/BaseLayout.astro'
    ].map((file) => fs.readFileSync(file, 'utf8')).join('\n');

    for (const removed of [
      'FAVORITE SAYING',
      'Choose the evidence you need',
      'Choose the topic you need',
      'Credibility at a glance',
      'Organized by system',
      'Every experiment follows Question',
      '>Planned<',
      'fonts.googleapis.com',
      'Oxanium',
      'Space Grotesk'
    ]) {
      expect(sources).not.toContain(removed);
    }
  });
});
