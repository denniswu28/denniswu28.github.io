---
id: article-shared-simulated-skies
slug: shared-simulated-skies
title: Why Shared Simulated Skies Matter for Roman and Rubin
summary: Matched simulations let two observatories be studied as views of one underlying sky instead of unrelated synthetic datasets.
status: published
publishedAt: 2026-07-15
updatedAt: 2026-07-15
relatedIds:
  - publication-openuniverse2024
externalLinks:
  - label: Academic project
    url: /academic/#duke-surveys
category: physics
tags:
  - cosmology
  - survey simulation
  - Roman
  - Rubin
abstract: OpenUniverse2024 provides coordinated synthetic observations for next-generation surveys, making cross-survey calibration and joint-analysis questions testable before the observatories deliver their full datasets.
readingMinutes: 5
citations:
  - label: OpenUniverse2024 on arXiv
    url: https://arxiv.org/abs/2501.05632
  - label: MNRAS publication
    url: https://academic.oup.com/mnras/article/544/4/3799/8300363
disclosures:
  - This article is an explanatory overview, not a substitute for the paper or its formal data documentation.
  - OpenUniverse2024 is a large collaboration; individual contributions should be read from author statements and project records rather than inferred from this summary.
draft: false
---

The Nancy Grace Roman Space Telescope and the Vera C. Rubin Observatory will observe overlapping parts of the universe with very different instruments. Roman will provide sharp space-based infrared imaging. Rubin will repeatedly map a wide optical sky from the ground. Their combination is powerful precisely because the measurements are not identical.

That difference also creates a testing problem: how do researchers validate a joint pipeline before both surveys have accumulated their real observations?

## One underlying sky, multiple instruments

A useful joint simulation begins with one synthetic universe. Each survey then observes that same underlying scene through its own cadence, filters, optics, detector effects, noise, and processing pipeline.

This is materially different from comparing two independently generated mock catalogs. When the input sky is shared, a disagreement in the outputs can be traced through the simulated instruments and analysis choices. Researchers know which galaxies, transients, and structures are supposed to correspond.

OpenUniverse2024 was designed around that shared-sky idea. Its coordinated products support Roman- and Rubin-like imaging along with science cases that depend on their overlap.

## What researchers can test early

Matched simulations make several questions concrete before full survey operations:

- How does a selection made in one instrument appear in the other?
- Which calibration errors remain correlated across surveys?
- How much does space-based resolution improve ground-based shape or redshift measurements?
- Can a processing pipeline recover known properties of the simulated universe without introducing bias?
- Which data products and interfaces need to be standardized for joint analyses?

Because the simulation starts from known truth, an analysis can compare its inferred parameters with the values used to generate the sky.

## Why scale and realism both matter

A tiny, idealized mock is valuable for debugging equations. It is less useful for testing production workflows that must handle survey geometry, repeated observations, blending, detector behavior, and heterogeneous observing conditions.

Large coordinated simulations expose operational constraints as well as statistical ones. Storage layout, distributed processing, catalog matching, provenance, and reproducibility become part of the scientific method rather than afterthoughts.

## The important limitation

No simulation is the sky. A result can be internally precise and still depend on assumptions in the galaxy population, instrument model, or image-processing chain. Simulation validation therefore needs two directions: verify that the pipeline recovers known simulated truth, and verify that the simulation resembles the real observations relevant to the intended measurement.

The lasting value of a shared simulated sky is not that it predicts every detail. It gives multiple research teams a common, inspectable environment in which assumptions and failures can be located before they affect a real joint-survey result.
