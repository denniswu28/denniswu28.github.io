# Quantitative profile data

## Market-making daily returns

`market-making-daily-returns.csv` is the source for the normalized equity and
drawdown curves in the annotated quantitative profile.

| Column | Unit | Meaning |
| --- | --- | --- |
| `date` | ISO date | Trading day |
| `return` | decimal return | Daily return used for compounding |

The visualization begins at a normalized equity baseline of 100, compounds all
120 daily observations in order, and derives drawdown from the running equity
peak. The generated SVG retains every point.

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
