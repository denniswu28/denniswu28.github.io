export type ReturnObservation = { date: string; return: number };
export type PriceObservation = { timestamp: string; close: number };

export function parseReturnsCsv(csv: string): ReturnObservation[] {
  const lines = csv.trim().split(/\r?\n/).slice(1);
  return lines.map((line) => {
    const [date, rawReturn] = line.split(',');
    return { date, return: Number(rawReturn) };
  }).filter((row) => row.date && Number.isFinite(row.return));
}

export function compoundReturns(observations: ReturnObservation[]): number[] {
  let equity = 1;
  return [0, ...observations.map(({ return: value }) => {
    equity *= 1 + value;
    return equity - 1;
  })];
}

export function drawdowns(compounded: number[]): number[] {
  let peak = 1;
  return compounded.map((value) => {
    const equity = 1 + value;
    peak = Math.max(peak, equity);
    return equity / peak - 1;
  });
}

export function ema(values: number[], alpha: number): number[] {
  if (values.length === 0) return [];
  const result = [values[0]];
  for (let index = 1; index < values.length; index += 1) {
    result.push(alpha * values[index] + (1 - alpha) * result[index - 1]);
  }
  return result;
}

export function svgPath(values: number[], width = 640, height = 180, padding = 12): string {
  if (values.length === 0) return '';
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  return values.map((value, index) => {
    const x = padding + (index / Math.max(values.length - 1, 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / span) * (height - padding * 2);
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(' ');
}

export function percent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

export function parsePriceCsv(csv: string): PriceObservation[] {
  const lines = csv.trim().split(/\r?\n/);
  const headers = lines[0]?.split(',') ?? [];
  const timestampIndex = headers.indexOf('timestamp_utc');
  const closeIndex = headers.indexOf('close_usd');
  if (timestampIndex < 0 || closeIndex < 0) return [];

  return lines.slice(1).map((line) => {
    const fields = line.split(',');
    return { timestamp: fields[timestampIndex], close: Number(fields[closeIndex]) };
  }).filter((row) => row.timestamp && Number.isFinite(row.close) && row.close > 0);
}

export function exposureEquityPaths(prices: number[], reducedWeight = 0.2): { full: number[]; reduced: number[] } {
  if (prices.length === 0) return { full: [], reduced: [] };
  if (reducedWeight < 0 || reducedWeight > 1) throw new RangeError('reducedWeight must be between 0 and 1');
  const initial = prices[0];
  const full = prices.map((price) => price / initial);
  const reduced = full.map((equity) => (1 - reducedWeight) + reducedWeight * equity);
  return { full, reduced };
}

export function equityDrawdowns(equity: number[]): number[] {
  let peak = 0;
  return equity.map((value) => {
    peak = Math.max(peak, value);
    return peak > 0 ? value / peak - 1 : 0;
  });
}

export function svgPathScaled(
  values: number[],
  min: number,
  max: number,
  width = 640,
  height = 180,
  paddingX = 12,
  paddingY = 12
): string {
  if (values.length === 0) return '';
  const span = max - min || 1;
  return values.map((value, index) => {
    const x = paddingX + (index / Math.max(values.length - 1, 1)) * (width - paddingX * 2);
    const y = height - paddingY - ((value - min) / span) * (height - paddingY * 2);
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(' ');
}
