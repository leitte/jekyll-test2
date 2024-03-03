---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Visual Analytics for Correlation‐Based Comparison of Time Series Ensembles"
author: Patrick Köthur, Carl Witt, Mike Sips, N. Marwan, S. Schinkel & D. Dransch
year: 2015
journal: Computer graphics forum (Print)
doi: 10.1111/cgf.12653
date: 2015-06-01
citation_count: 25
categories:
  - integration of AI
tags:
  - continuous process
  - multiple time-series
  - all time-series
  - chart type
  - direct visual mapping
  - bar chart
  - line chart
  - color field
  - transformation-based visual mapping
  - glyph-based chart
  - multi-form layout
  - explicit temporal encoding
  - no temporal encoding
  - 2D chart
  - interactive system
  - interactive querying
  - integration of AI
  - statistical analysis
  - uncertainty in data
---
An established approach to studying interrelations between two non‐stationary time series is to compute the ‘windowed’ cross‐correlation (WCC). The time series are divided into intervals and the cross‐correlation between corresponding intervals is calculated. The outcome is a matrix that describes the correlation between two time series for different intervals and varying time lags. This important technique can only be used to compare two single time series. However, many applications require the comparison of ensembles of time series. Therefore, we propose a visual analytics approach that extends the WCC to support a correlation‐based comparison of two ensembles of time series. We compute the pairwise WCC between all time series from the two ensembles, which results in hundreds of thousands of WCC matrices. Statistical measures are used to derive a concise description of the time‐varying correlations between the ensembles as well as the uncertainty of the correlation values. We further introduce a visually scalable overview visualization of the computed correlation and uncertainty information. These components are combined with multiple linked views into a visual analytics system to support configuration of the WCC as well as detailed analysis of correlation patterns between two ensembles. Two use cases from very different domains, cognitive science and paleoclimatology, demonstrate the utility of our approach.
