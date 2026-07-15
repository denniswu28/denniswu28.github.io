import fs from 'node:fs';
import path from 'node:path';

const product = 'BTC-USD';
const granularity = 300;
const start = Date.parse('2025-10-09T00:00:00Z') / 1000;
const end = Date.parse('2025-10-14T00:00:00Z') / 1000;
const maxIntervalsPerRequest = 299;
const endpoint = `https://api.exchange.coinbase.com/products/${product}/candles`;

const candles = new Map();
let cursor = start;

while (cursor <= end) {
  const chunkEnd = Math.min(cursor + maxIntervalsPerRequest * granularity, end);
  const url = new URL(endpoint);
  url.searchParams.set('granularity', String(granularity));
  url.searchParams.set('start', new Date(cursor * 1000).toISOString());
  url.searchParams.set('end', new Date(chunkEnd * 1000).toISOString());

  const response = await fetch(url, {
    headers: { 'user-agent': 'denniswu28.github.io reproducible research export' }
  });
  if (!response.ok) throw new Error(`Coinbase request failed (${response.status}): ${await response.text()}`);

  const rows = await response.json();
  for (const row of rows) {
    const timestamp = Number(row[0]);
    if (timestamp < start || timestamp > end) continue;
    candles.set(timestamp, {
      timestamp,
      low: Number(row[1]),
      high: Number(row[2]),
      open: Number(row[3]),
      close: Number(row[4]),
      volume: Number(row[5])
    });
  }
  cursor = chunkEnd + granularity;
}

const rows = [...candles.values()].sort((a, b) => a.timestamp - b.timestamp);
const expected = (end - start) / granularity + 1;
if (rows.length !== expected) {
  throw new Error(`Expected ${expected} five-minute candles; received ${rows.length}. Coinbase notes that historical candles can be incomplete.`);
}

const csv = [
  'timestamp_utc,open_usd,high_usd,low_usd,close_usd,volume_btc',
  ...rows.map((row) => [
    new Date(row.timestamp * 1000).toISOString(),
    row.open,
    row.high,
    row.low,
    row.close,
    row.volume
  ].join(','))
].join('\n');

const output = path.join(process.cwd(), 'public', 'data', 'coinbase-btc-usd-2025-10-09-to-2025-10-14-5m.csv');
fs.writeFileSync(output, `${csv}\n`);
console.log(`Wrote ${rows.length} Coinbase ${product} candles to ${path.relative(process.cwd(), output)}.`);
