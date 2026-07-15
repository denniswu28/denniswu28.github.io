---
id: article-execution-evidence
slug: reading-execution-evidence
title: Reading Execution Evidence Without Inventing a Benchmark
summary: A compact guide to separating observed execution measurements from benchmarks that the stored dataset cannot support.
status: published
publishedAt: 2026-07-15
updatedAt: 2026-07-15
relatedIds:
  - experiment-trading-systems-execution
externalLinks:
  - label: Experiment 01
    url: /lab/trading-systems-execution/#optimal-execution
category: quant-research
tags:
  - execution
  - transaction costs
  - reproducibility
abstract: The stored 31-day execution artifact supports a TWAP comparison and a compounded relative-return path, but not arrival-price implementation shortfall or a true market-volume VWAP benchmark.
readingMinutes: 6
citations:
  - label: Aggregate metric definitions
    url: /data/best_31_day_aggregate_metrics_2025-10-15_to_2025-11-14.csv
  - label: Daily relative returns
    url: /data/best_31_day_vwap_relative_returns_2025-10-15_to_2025-11-14.csv
disclosures:
  - The example uses a sanitized historical research artifact rather than live orders or employer market data.
  - Positive signed slippage is favorable under the convention stored with this dataset.
  - Historical and backtested results do not imply future performance.
draft: false
---

An execution chart becomes misleading when a familiar label is attached to data that were never collected for that comparison. The safest reading begins with the artifact itself: what was measured, which reference was retained, and which fields are absent.

## What the artifact supports

The completed export contains 31 daily strategy returns from October 15 through November 14, 2025. Compounding those values from a zero-percent baseline produces the relative-return path shown in Experiment 01. The exact daily sequence remains visible as a faint trace; a five-day exponential moving average is a display aid rather than a replacement for the observations.

The aggregate record also contains mean signed slippage against a stored one-second TWAP reference. The selected run reports 3.2172 basis points, while the matched reference run reports 0.8791 basis points. Subtracting the two stored endpoints gives a 2.3381 basis-point gap.

Those statements are narrow, but they are reproducible from the published CSV files.

## What it does not support

Two tempting comparisons are unavailable.

First, implementation shortfall requires an arrival-price benchmark tied to the decision or parent order. That series is not present. A chart labeled “implementation shortfall” would therefore imply information the artifact does not contain.

Second, a true VWAP benchmark requires the market-volume path over the execution window. Daily strategy returns alone cannot reconstruct that benchmark. The phrase “VWAP-relative return” describes the stored run, but it does not manufacture the missing market-volume observations.

## Separate measurements from presentation

Smoothing can make a noisy path easier to read, but it changes the visual emphasis. For that reason, the experiment keeps both layers:

1. the exact compounded path, which preserves every observation;
2. the exponential moving average, which highlights the broad trajectory;
3. the aggregate benchmark endpoints, which remain separate from the daily-return panel.

This division prevents a smooth curve from being mistaken for a new measurement.

## A reusable evidence checklist

Before publishing an execution result, I use five questions:

- Is the sign convention explicit?
- Does the benchmark exist in the stored data?
- Are daily paths distinguished from aggregate endpoints?
- Are smoothing and normalization labeled as display choices?
- Can another reader reproduce every displayed number from the cited artifact?

The goal is not to maximize the number of metrics on screen. It is to make the boundary between evidence and interpretation obvious.
