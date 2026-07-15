import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  compoundReturns,
  drawdowns,
  ema,
  equityDrawdowns,
  exposureEquityPaths,
  parsePriceCsv,
  parseReturnsCsv,
  svgPathScaled
} from '../src/lib/quant';

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

  it('keeps execution slippage and fee measurements separate', () => {
    const csv = fs.readFileSync('public/data/best_31_day_aggregate_metrics_2025-10-15_to_2025-11-14.csv', 'utf8');
    const rows = csv.trim().split(/\r?\n/).slice(1).map((line) => line.split(','));
    const value = (name: string) => Number(rows.find((row) => row[0] === name)?.[1]);
    expect(value('slippage_vs_twap_mean')).toBeCloseTo(3.2172, 8);
    expect(value('vwap_reference_mean_twap_slippage')).toBeCloseTo(0.8790638951, 8);
    expect(value('slippage_improvement_vs_vwap_reference')).toBeCloseTo(2.3381365549, 8);
    expect(value('aggregate_fee_rate')).toBeCloseTo(-1.7934, 8);
  });

  it('reconstructs the October BTC exposure counterfactual from public closes', () => {
    const csv = fs.readFileSync('public/data/coinbase-btc-usd-2025-10-09-to-2025-10-14-5m.csv', 'utf8');
    const observations = parsePriceCsv(csv);
    const paths = exposureEquityPaths(observations.map((row) => row.close), 0.2);
    const fullDrawdown = equityDrawdowns(paths.full);
    const reducedDrawdown = equityDrawdowns(paths.reduced);

    expect(observations).toHaveLength(1441);
    expect(observations[0]).toEqual({ timestamp: '2025-10-09T00:00:00.000Z', close: 123254.57 });
    expect(observations.at(-1)).toEqual({ timestamp: '2025-10-14T00:00:00.000Z', close: 115223.99 });
    expect(observations.every((row, index) => index === 0 || Date.parse(row.timestamp) - Date.parse(observations[index - 1].timestamp) === 300_000)).toBe(true);
    expect(Math.min(...fullDrawdown)).toBeCloseTo(-0.1187943142, 9);
    expect(Math.min(...reducedDrawdown)).toBeCloseTo(-0.0238130260, 9);
  });

  it('models a static cash sleeve and rejects invalid exposure weights', () => {
    const paths = exposureEquityPaths([100, 90], 0.2);
    expect(paths.full).toEqual([1, 0.9]);
    expect(paths.reduced[0]).toBe(1);
    expect(paths.reduced[1]).toBeCloseTo(0.98, 12);
    expect(() => exposureEquityPaths([100], 1.2)).toThrow(RangeError);
    expect(equityDrawdowns([1, 1.1, 0.99])[2]).toBeCloseTo(-0.1, 12);
    expect(svgPathScaled([0, 1], 0, 1, 100, 100, 10, 10)).toBe('M10.00 90.00 L90.00 10.00');
  });
});
