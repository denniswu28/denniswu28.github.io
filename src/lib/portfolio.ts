export type EquityObservation = {
  date: string;
  equity: number;
};

export type EquitySummary = {
  observations: number;
  start: EquityObservation;
  end: EquityObservation;
  absoluteChange: number;
  simpleReturn: number;
  minimum: EquityObservation;
  maximum: EquityObservation;
  maxDrawdown: number;
  drawdownPeak: EquityObservation;
  drawdownTrough: EquityObservation;
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function parseEquityCsv(csv: string): EquityObservation[] {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.shift()?.trim() !== 'date,total_equity_usd') {
    throw new Error('Unexpected portfolio equity CSV header.');
  }

  const observations = lines.map((line, index) => {
    const [date, rawEquity, ...extra] = line.split(',').map((value) => value.trim());
    const equity = Number(rawEquity);
    if (extra.length || !ISO_DATE.test(date) || !Number.isFinite(equity) || equity <= 0) {
      throw new Error(`Invalid portfolio equity row ${index + 2}.`);
    }
    return { date, equity };
  });

  if (observations.length < 2) throw new Error('At least two equity observations are required.');
  for (let index = 1; index < observations.length; index += 1) {
    if (observations[index].date <= observations[index - 1].date) {
      throw new Error('Portfolio equity observations must use unique ascending dates.');
    }
  }
  return observations;
}

export function calculateEquitySummary(observations: EquityObservation[]): EquitySummary {
  if (observations.length < 2) throw new Error('At least two equity observations are required.');

  const start = observations[0];
  const end = observations.at(-1)!;
  let minimum = start;
  let maximum = start;
  let runningPeak = start;
  let maxDrawdown = 0;
  let drawdownPeak = start;
  let drawdownTrough = start;

  for (const observation of observations) {
    if (observation.equity < minimum.equity) minimum = observation;
    if (observation.equity > maximum.equity) maximum = observation;
    if (observation.equity > runningPeak.equity) runningPeak = observation;

    const drawdown = observation.equity / runningPeak.equity - 1;
    if (drawdown < maxDrawdown) {
      maxDrawdown = drawdown;
      drawdownPeak = runningPeak;
      drawdownTrough = observation;
    }
  }

  return {
    observations: observations.length,
    start,
    end,
    absoluteChange: end.equity - start.equity,
    simpleReturn: end.equity / start.equity - 1,
    minimum,
    maximum,
    maxDrawdown,
    drawdownPeak,
    drawdownTrough
  };
}
