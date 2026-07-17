import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { homeTopics, independentProjects } from '../src/data/site';

describe('simplified public site content', () => {
  it('keeps the homepage directory short and ordered', () => {
    expect(homeTopics.map((topic) => topic.title)).toEqual([
      'Quant Lab',
      'Personal Portfolio',
      'Academic Profile',
      'Blog',
      'Documents'
    ]);
  });

  it('provides resume-backed details for every independent project', () => {
    expect(independentProjects.map((project) => project.title)).toEqual([
      'Market-Making Research Stack',
      'IMC Prosperity 4'
    ]);
    expect(independentProjects.every((project) => project.bullets.length >= 1)).toBe(true);
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
      'src/styles/global.css'
    ].map((file) => fs.readFileSync(file, 'utf8')).join('\n');

    for (const removed of [
      'FAVORITE SAYING',
      'Choose the evidence you need',
      'Credibility at a glance',
      'Claims should be inspectable',
      'Organized by system',
      'Personal writing is not part of this public system',
      'This section is separate from the Quant Lab',
      'Every experiment follows Question',
      '>Planned<',
      "data-state='planned'"
    ]) {
      expect(sources).not.toContain(removed);
    }
  });
});
