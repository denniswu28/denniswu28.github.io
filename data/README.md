# Public-safe data ingestion

The interactive lab accepts CSV files selected by the visitor. Files are parsed
inside the browser tab. The current site does not transmit, store, or upload the
selected data.

## Execution journal

Use `execution-template.csv` as the schema.

| Column | Unit | Meaning |
| --- | --- | --- |
| `date` | ISO date or session label | Trading session |
| `slippage_bps` | basis points | Realized slippage versus the chosen benchmark |
| `fill_rate` | percent or decimal | Filled quantity divided by submitted quantity |
| `implementation_shortfall_bps` | basis points | Shortfall versus the arrival benchmark |

Before publishing a journal, aggregate to daily values and remove order IDs,
account identifiers, exact order timestamps, venue routing details, symbols that
reveal active strategies, and proprietary features.

## Market-making results

Use `market-making-template.csv` as the schema.

| Column | Unit | Meaning |
| --- | --- | --- |
| `timestamp` | ISO timestamp | Public-safe observation time |
| `equity` | currency or normalized index | Equity after fees |
| `equity_no_fee` | same scale as equity | Counterfactual equity without fees |
| `position` | normalized quantity | Inventory or position |
| `price` | currency or normalized index | Reference market price |

The current market-making control validates this schema and row count. The next
visualization pass can add synchronized equity, fee drag, position, and price
charts with time-window controls.

