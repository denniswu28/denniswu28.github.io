import { describe, expect, it } from 'vitest';
import { filterPublished, unresolvedRelations, type PublicEntry } from '../src/lib/content';
import { resolveLegacyFragment } from '../src/lib/legacy';

const entry = (id: string, status: 'published' | 'draft' | 'archived', relatedIds: string[] = [], draft = false): PublicEntry => ({
  id,
  data: { id, status, relatedIds, draft, publishedAt: new Date('2026-07-15') }
});

describe('publishing safeguards', () => {
  it('excludes drafts and archived entries', () => {
    const entries = [entry('public', 'published'), entry('draft-status', 'draft'), entry('draft-flag', 'published', [], true), entry('old', 'archived')];
    expect(filterPublished(entries).map((item) => item.data.id)).toEqual(['public']);
  });

  it('reports unresolved content relationships', () => {
    expect(unresolvedRelations([entry('article', 'published', ['experiment']), entry('experiment', 'published')])).toEqual([]);
    expect(unresolvedRelations([entry('article', 'published', ['missing'])])).toEqual(['article->missing']);
  });

  it('maps legacy fragments to stable routes', () => {
    expect(resolveLegacyFragment('#experience')).toBe('/quant/#experience');
    expect(resolveLegacyFragment('#quant-profile')).toBe('/lab/trading-systems-execution/');
    expect(resolveLegacyFragment('#unknown')).toBeUndefined();
  });
});
