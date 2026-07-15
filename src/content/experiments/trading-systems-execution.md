---
id: experiment-trading-systems-execution
slug: trading-systems-execution
title: Trading Systems and Execution
summary: Five inspectable views connect a published LOB architecture, observed market-making and execution artifacts, microstructure equations, and a public-data BTC risk reconstruction.
status: published
publishedAt: 2026-07-15
updatedAt: 2026-07-15
relatedIds:
  - article-execution-evidence
externalLinks:
  - label: Quant profile
    url: /quant/
  - label: DeepLOB paper
    url: https://arxiv.org/abs/1808.03668
  - label: Order-flow imbalance paper
    url: https://arxiv.org/abs/1011.6402
  - label: Coinbase candle API
    url: https://docs.cdp.coinbase.com/api-reference/exchange-api/rest-api/products/get-product-candles
question: How can market-system research be made technically useful while separating observed evidence, published methods, validation targets, and counterfactual scenarios?
provenance: Sanitized historical return and execution exports; the published DeepLOB and order-flow-imbalance papers; and 1,441 public Coinbase BTC-USD five-minute candles fetched through the documented Exchange API.
dateRange: October 9, 2025–May 31, 2026, varying by panel
method: Recompute observed cumulative paths and aggregate execution endpoints; redraw the DeepLOB component architecture from the paper; state common factor equations; label IC and ICIR curves as illustrative acceptance targets; and compare BTC drawdowns for 100% BTC against a pre-event 20% BTC plus 80% cash counterfactual.
parameters:
  - Market-making returns compounded from a 0% baseline
  - Seven-day EMA represented by alpha 0.25
  - Execution path compounded across 31 daily observations
  - Five-day execution EMA represented by alpha 0.3333
  - Execution slippage and fee rate remain separate aggregate measurements
  - BTC risk window uses five-minute closes from October 9 through October 14, 2025 UTC
  - Reduced-risk path holds 20% BTC and 80% cash without rebalancing during the window
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
  - label: Aggregate fee rate
    value: "-1.7934 bps"
    definition: Aggregate fee divided by aggregate executed volume under the stored sign convention; it is not a fee comparison with TWAP.
  - label: Full BTC maximum drawdown
    value: "-11.9%"
    definition: Maximum close-to-close drawdown of the reconstructed 100% BTC path in the published five-day window.
  - label: 20% BTC maximum drawdown
    value: "-2.4%"
    definition: Maximum close-to-close drawdown of the modeled 20% BTC plus 80% cash path in the same window.
results: The revised panels expose equations, architecture, measured endpoints, and reproducible scenario assumptions while keeping proprietary features, parameters, and positions private.
limitations:
  - The artifact does not include an arrival-price series for implementation shortfall.
  - The artifact does not include the market-volume path required for a true VWAP benchmark.
  - The stored execution artifact has no TWAP fee series, so the observed fee rate cannot be described as a fee reduction versus TWAP.
  - The DeepLOB schematic is a literature reference and does not claim that a production model used identical parameters.
  - The IC and ICIR term structure is an illustrative validation target, not an observed backtest or production result.
  - The BTC risk reconstruction is a BTC-only allocation counterfactual; it excludes altcoins, derivatives, fees, funding, intrabar marks, and any actual portfolio holdings.
freshness: historical
lastUpdated: 2026-07-15
---

The useful unit of evidence is not a performance number by itself. It is a traceable chain from question to data, method, result, and limitation. This experiment now distinguishes four evidence classes on the page: observed artifacts, published reference methods, illustrative validation targets, and explicit counterfactuals.
