# Quantitative profile data

## Market-making daily returns

`market-making-daily-returns.csv` is the source for the cumulative-return and
drawdown curves in the quantitative finance profile.

| Column | Unit | Meaning |
| --- | --- | --- |
| `date` | ISO date | Trading day |
| `return` | decimal return | Daily return used for compounding |

The visualization begins at a 0% cumulative-return baseline, compounds all 120
daily observations in order, and derives drawdown from the running equity peak.
Bright curves use a 7-day exponential moving average with alpha 0.25. Faint raw
traces retain every original point, and the source returns are not rewritten.

## Execution aggregate metrics

`best_31_day_aggregate_metrics_2025-10-15_to_2025-11-14.csv` supplies the
observed endpoints for the execution comparison.

- The selected run has 3.2172 bps mean signed slippage versus the stored
  one-second TWAP baseline. Positive is favorable.
- The matched VWAP-reference run has 0.8791 bps mean signed slippage versus the
  same TWAP baseline.
- The selected run therefore leads the reference run by 2.3381 bps on mean
  TWAP slippage over matched dates.
- The selected run's aggregate fee divided by aggregate executed volume is
  -1.7934 bps under the stored sign convention.

The artifact does not contain a validated arrival-price series for a direct
implementation-shortfall comparison or the market-volume path required for a
true VWAP benchmark. The SVG uses the observed aggregate endpoints and a
normalized progress shape rather than implying a missing daily series. The
artifact also has no TWAP fee series, so the selected run's fee rate is shown
separately and is not described as fee reduction versus TWAP.

`best_31_day_vwap_relative_returns_2025-10-15_to_2025-11-14.csv` contains the
31 accompanying daily strategy returns and reproduces the aggregate compounded
return. The upper execution panel compounds this series from a 0% baseline and
shows a 5-day EMA over the faint exact path. It does not contain daily slippage
versus TWAP, so the lower benchmark panel continues to use aggregate endpoints.

## Future execution journal

`execution-template.csv` remains available for a future observed execution
curve.

| Column | Unit | Meaning |
| --- | --- | --- |
| `date` | ISO date or session label | Trading session |
| `slippage_bps` | basis points | Realized slippage versus the chosen benchmark |
| `fill_rate` | percent or decimal | Filled quantity divided by submitted quantity |
| `implementation_shortfall_bps` | basis points | Shortfall versus the arrival benchmark |

`market-making-template.csv` remains available for a future synchronized view
of equity, fee drag, position, and reference price.

## October 2025 BTC risk reconstruction

`coinbase-btc-usd-2025-10-09-to-2025-10-14-5m.csv` contains 1,441 BTC-USD
five-minute OHLCV candles from the public Coinbase Exchange candles endpoint.
`npm run data:btc-crash` reproduces the download in bounded requests that stay
within Coinbase's documented 300-candle maximum.

| Column | Unit | Meaning |
| --- | --- | --- |
| `timestamp_utc` | ISO timestamp | Five-minute bucket start in UTC |
| `open_usd` | U.S. dollars | Bucket opening price |
| `high_usd` | U.S. dollars | Bucket high price |
| `low_usd` | U.S. dollars | Bucket low price |
| `close_usd` | U.S. dollars | Bucket closing price used in the chart |
| `volume_btc` | BTC | Base-asset volume reported by Coinbase |

The chart normalizes the first close to one. Full BTC exposure is
`E100(t) = P(t) / P(0)`. The reduced counterfactual is a static allocation set
before the window: `E20(t) = 0.80 + 0.20 × P(t) / P(0)`. Drawdown is each path
divided by its running peak minus one. The resulting close-to-close maximum
drawdowns are -11.9% and -2.4% respectively.

This is a BTC-only allocation reconstruction, not a record of realized company
or personal portfolio returns. It excludes altcoins, derivatives, trading
costs, funding, rebalancing, and intrabar marks. Coinbase notes that historical
candle data can be incomplete; the reproducibility script rejects the export
unless every expected five-minute bucket is present.

## Historical portfolio equity

`historical-portfolio-equity-2025-08-28-to-2025-11-20.csv` is the sanitized
source for the historical portfolio case study. It contains only 38 supplied
account-level total-equity observations. Securities, quantities, trade prices,
and cash balances are intentionally excluded.

| Column | Unit | Meaning |
| --- | --- | --- |
| `date` | ISO date | Date of the supplied account snapshot |
| `total_equity_usd` | U.S. dollars | Total equity reported in that snapshot |

The case-study return is the simple change from the first observation to the
last. It is not time-weighted or money-weighted, does not interpolate missing
dates, and does not claim to capture intraperiod drawdown.
