import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compoundReturns, drawdowns, ema, parseReturnsCsv } from '../src/lib/quant';

describe('quant evidence calculations', () => {
  it('reproduces the stored execution aggregate', () => {
    const csv = fs.readFileSync('public/data/best_31_day_vwap_relative_returns_2025-10-15_to_2025-11-14.csv', 'utf8');
    const observations = parseReturnsCsv(csv);
    const compounded = compoundReturns(observations);
    expect(observations).toHaveLength(31);
    expect(compounded[0]).toBe(0);
    expect(compounded.at(-1)).toBeCloseTo(13.3250064845, 8);
    expect(Math.min(...drawdowns(compounded))).toBeCloseTo(-0.5579257844, 8);
  });

  it('preserves all market-making observations and a zero baseline', () => {
    const csv = fs.readFileSync('public/data/market-making-daily-returns.csv', 'utf8');
    const observations = parseReturnsCsv(csv);
    const compounded = compoundReturns(observations);
    expect(observations).toHaveLength(120);
    expect(compounded).toHaveLength(121);
    expect(compounded[0]).toBe(0);
    expect(drawdowns(compounded).every((value) => value <= 1e-12)).toBe(true);
  });

  it('keeps EMA length and initial value stable', () => {
    expect(ema([0, 1, 0], 0.25)).toEqual([0, 0.25, 0.1875]);
    expect(ema([], 0.25)).toEqual([]);
  });
});
