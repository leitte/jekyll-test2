---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Shape grammar extraction for efficient query-by-sketch pattern matching in long time series"
author: P. Muthumanickam, K. Vrotsou, M. Cooper & J. Johansson
year: 2016
journal: IEEE Conference on Visual Analytics Science and Technology
doi: 10.1109/VAST.2016.7883518
date: 2016-10-01
citation_count: 17
categories:
  - infrastructure
  - interaction
tags:
  - continuous process
  - single time-series
  - infrastructure
  - direct visual mapping
  - line chart
  - multi-view layout
  - direct temporal encoding
  - interaction
  - interactive system
  - filtering
  - interactive querying
  - pattern detection
---
Long time-series, involving thousands or even millions of time steps, are common in many application domains but remain very difficult to explore interactively. Often the analytical task in such data is to identify specific patterns, but this is a very complex and computationally difficult problem and so focusing the search in order to only identify interesting patterns is a common solution. We propose an efficient method for exploring user-sketched patterns, incorporating the domain expert's knowledge, in time series data through a shape grammar based approach. The shape grammar is extracted from the time series by considering the data as a combination of basic elementary shapes positioned across different amplitudes. We represent these basic shapes using a ratio value, perform binning on ratio values and apply a symbolic approximation. Our proposed method for pattern matching is amplitude-, scale- and translation-invariant and, since the pattern search and pattern constraint relaxation happen at the symbolic level, is very efficient permitting its use in a real-time/online system. We demonstrate the effectiveness of our method in a case study on stock market data although it is applicable to any numeric time series data.
