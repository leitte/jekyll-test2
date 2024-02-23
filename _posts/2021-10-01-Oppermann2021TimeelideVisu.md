---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "TimeElide: Visual Analysis of Non-Contiguous Time Series Slices"
author: Michael Oppermann, Luce Liu & T. Munzner
year: 2021
journal: Visual ..
doi: 10.1109/VIS49827.2021.9623320
date: 2021-10-01
citation_count: 1
categories:
  - integration of AI
tags:
  - continuous process
  - single time-series
  - direct visual mapping
  - line chart
  - pixel-based chart
  - multi-view layout
  - direct temporal encoding
  - interactive system
  - integration of AI
  - trend analysis
  - segmentation
  - pattern detection
---
We introduce the design and implementation of TimeElide, a visual analysis tool for the novel data abstraction of non-contiguous time series slices, namely time intervals that contain a sequence of time-value pairs but are not adjacent to each other. This abstraction is relevant for analysis tasks where time periods of interest are known in advance or inferred from the data, rather than discovered through open-ended visual exploration. We present a visual encoding design space as an underpinning of TimeElide, and the new sparkbox technique for visualizing fine and coarse grained temporal structures within one view. Datasets from different domains and with varying characteristics guided the development and their analysis provides preliminary evidence of TimeElide’s utility. We provide open-source code and demo at https://github.com/UBC-InfoVis/time-elide and supplemental materials at https://osf.io/yqvmf/.