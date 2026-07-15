import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { calculateEquitySummary, parseEquityCsv } from '../src/lib/portfolio';

const sample = `date,total_equity_usd
2025-01-01,100.00
2025-01-02,120.00
2025-01-03,108.00
2025-01-04,135.00`;

describe('historical portfolio evidence', () => {
  it('calculates simple return and peak-to-trough drawdown', () => {
    const summary = calculateEquitySummary(parseEquityCsv(sample));
    expect(summary.observations).toBe(4);
    expect(summary.simpleReturn).toBeCloseTo(0.35);
    expect(summary.absoluteChange).toBeCloseTo(35);
    expect(summary.maxDrawdown).toBeCloseTo(-0.10);
    expect(summary.drawdownPeak.date).toBe('2025-01-02');
    expect(summary.drawdownTrough.date).toBe('2025-01-03');
  });

  it('reproduces the published historical account summary', () => {
    const csv = fs.readFileSync(new URL('../public/data/historical-portfolio-equity-2025-08-28-to-2025-11-20.csv', import.meta.url), 'utf8');
    const summary = calculateEquitySummary(parseEquityCsv(csv));
    expect(summary.observations).toBe(38);
    expect(summary.start).toEqual({ date: '2025-08-28', equity: 3037.3 });
    expect(summary.end).toEqual({ date: '2025-11-20', equity: 3650.25 });
    expect(summary.absoluteChange).toBeCloseTo(612.95);
    expect(summary.simpleReturn).toBeCloseTo(0.2018075264);
    expect(summary.maxDrawdown).toBeCloseTo(-0.0453634012);
  });

  it('rejects malformed, duplicate, and non-ascending observations', () => {
    expect(() => parseEquityCsv('date,total_equity_usd\n2025-01-01,100\n2025-01-02,bad')).toThrow('Invalid portfolio equity row');
    expect(() => parseEquityCsv('date,total_equity_usd\n2025-01-01,100\n2025-01-01,101')).toThrow('unique ascending dates');
  });
});
