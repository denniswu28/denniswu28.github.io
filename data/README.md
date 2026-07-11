# Quantitative profile data

## Market-making daily returns

`market-making-daily-returns.csv` is the source for the cumulative-return and
drawdown curves in the annotated quantitative profile.

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

The artifact does not contain a validated arrival-price series for a direct
implementation-shortfall comparison or the market-volume path required for a
true VWAP benchmark. The SVG uses the observed aggregate endpoints and a
normalized progress shape rather than implying a missing daily series.

`best_31_day_vwap_relative_returns_2025-10-15_to_2025-11-14.csv` contains the
31 accompanying daily strategy returns and reproduces the aggregate compounded
return. It does not contain daily slippage versus TWAP, so it is not used to
invent a daily benchmark-improvement path.

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
