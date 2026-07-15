---
id: thesis-small-account-equities-2025
slug: small-account-equities-2025
title: "Small-account equities record: August–November 2025"
summary: A privacy-reviewed audit of a historical account record, including the observed equity path, drawdown, evidence gaps, and limits on attribution.
status: published
publishedAt: 2026-07-15
updatedAt: 2026-07-15
relatedIds: []
externalLinks:
  - label: Sanitized total-equity observations (CSV)
    url: /data/historical-portfolio-equity-2025-08-28-to-2025-11-20.csv
security: Aggregated U.S. small-cap equity positions
thesisDate: 2025-08-28
coreThesis: The surviving record documents a sequence of discretionary small-cap equity positions with explicit stop fields and staged entries and exits. It supports an outcome audit, but it does not contain enough contemporaneous narrative to reconstruct a security-level fundamental thesis.
catalyst: No contemporaneous catalyst field exists in the supplied account snapshots or trade log; this case does not invent one after the fact.
variantView: No contemporaneous variant-view record was supplied. The public case therefore separates what the files demonstrate from what cannot be established.
risks:
  - Small-cap securities can have material liquidity, spread, gap, and concentration risk.
  - The observations are user-recorded snapshots rather than broker statements or exchange-verified closes.
  - The trade log contains two malformed cost-basis strings, one duplicated buy row, and a purchase-price discrepancy between the two source files.
  - Fees, taxes, dividends, benchmark returns, and external cash flows are not independently reconciled.
invalidatingEvidence:
  - A broker-statement reconciliation that materially changes the recorded total-equity series would invalidate the reported outcome.
  - Evidence of an unrecorded deposit or withdrawal would invalidate the simple observed-period return as a performance measure.
  - The source files cannot support security-level attribution or claims about why individual positions succeeded or failed.
positionChanges:
  - The private source record contains entries, additions, partial exits, and full exits across seven tickers.
  - The public evidence is aggregated to account-level equity; exact quantities, prices, and position timing are redacted.
exitRationale: The trade log labels exits as manual limit sells but does not preserve narrative exit rationales. No rationale is reconstructed retrospectively.
finalOutcome: Recorded total equity increased from $3,037.30 on August 28, 2025 to $3,650.25 on November 20, 2025, a $612.95 or 20.18% simple change across the supplied snapshots. The maximum observed drawdown was 4.54%.
postmortem: The record shows a positive account-level outcome, but not why the outcome occurred. Without a benchmark, clean trade-level reconciliation, or contemporaneous thesis notes, it would be misleading to attribute the result to security selection, timing, or repeatable edge.
privacy: aggregated
returnMethodology: The displayed return is ending recorded total equity divided by beginning recorded total equity minus one. It is neither time-weighted nor money-weighted. It assumes no unrecorded external cash flows, uses only 38 supplied snapshots, and excludes any drawdown between observations. Fees, taxes, dividends, and a benchmark are not independently reconciled.
equityDataUrl: /data/historical-portfolio-equity-2025-08-28-to-2025-11-20.csv
draft: false
---

## Evidence boundary

Two private source files were reviewed: an account-snapshot export and a trade-log export. Only the `TOTAL` rows from the account snapshots were retained in the public dataset. The raw exports remain excluded from version control because they contain exact quantities and transaction details.

The public series contains 38 dated observations. These are account records, not a complete daily net-asset-value series. Dates on which no snapshot was supplied are intentionally left missing rather than interpolated.

## What can be concluded

- The first supplied total-equity observation is **$3,037.30** on August 28, 2025.
- The last supplied observation is **$3,650.25** on November 20, 2025.
- The simple change between those observations is **$612.95**, or **20.18%**.
- The highest supplied observation is **$3,779.75** on November 10, 2025.
- The largest peak-to-trough decline among supplied observations is **4.54%**, from October 21 to October 22, 2025.

## What cannot be concluded

This evidence does not establish risk-adjusted alpha, performance against a benchmark, daily volatility, or a repeatable security-selection edge. It also cannot support a clean realized-versus-unrealized attribution because the trade log requires reconciliation. Those omissions are treated as limits, not filled with estimates.
