---
id: experiment-trading-systems-execution
slug: trading-systems-execution
title: Trading Systems and Execution
summary: Five sanitized views connect forecasting, market making, execution, factor research, and portfolio risk to their supporting evidence and limitations.
status: published
publishedAt: 2026-07-15
updatedAt: 2026-07-15
relatedIds:
  - article-execution-evidence
externalLinks:
  - label: Quant profile
    url: /quant/
question: How can production trading research be demonstrated without exposing proprietary data, parameters, or reconstructable strategy logic?
provenance: Publicly safe static method views plus sanitized historical CSV exports committed with metric definitions.
dateRange: October 15, 2025–May 31, 2026, varying by panel
method: Recompute supported cumulative return, drawdown, smoothing, and aggregate comparisons from published artifacts; label all other panels as method or scenario views.
parameters:
  - Market-making returns compounded from a 0% baseline
  - Seven-day EMA represented by alpha 0.25
  - Execution path compounded across 31 daily observations
  - Five-day execution EMA represented by alpha 0.3333
metrics:
  - label: Market-making observations
    value: "120"
    definition: Daily sanitized return observations in the committed artifact.
  - label: Execution observations
    value: "31"
    definition: Daily VWAP-relative returns in the completed execution export.
  - label: Selected mean vs TWAP
    value: "+3.2172 bps"
    definition: Mean signed daily execution slippage; positive is favorable.
results: The published panels reproduce supported time-series and endpoints while keeping proprietary systems, features, and positions private.
limitations:
  - The artifact does not include an arrival-price series for implementation shortfall.
  - The artifact does not include the market-volume path required for a true VWAP benchmark.
  - Alpha, factor, and risk panels are explanatory method or scenario views rather than released production series.
freshness: historical
lastUpdated: 2026-07-15
---

The useful unit of evidence is not a performance number by itself. It is a traceable chain from question to data, method, result, and limitation. This experiment preserves that chain while deliberately withholding employer data and reconstructable production logic.
