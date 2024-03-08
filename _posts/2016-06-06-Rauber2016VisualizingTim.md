---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Visualizing Time-Dependent Data Using Dynamic t-SNE"
author: P. E. Rauber, A. Falcão & A. Telea
year: 2016
journal: Eurographics Conference on Visualization
doi: 10.2312/eurovisshort.20161164
date: 2016-06-06
citation_count: 150
categories:
  - visual representation
  - integration of AI
tags:
  - continuous process
  - multi-variate attribute
  - all time series
  - visual representation
  - chart type
  - transformation-based chart
  - scatter plot
  - single-view layout
  - no temporal encoding
  - 2D chart
  - highlighting
  - interactive filtering
  - interactive querying
  - integration of AI
  - dimensionality reduction
---
Many interesting processes can be represented as time-dependent datasets. We define a time-dependent dataset as a sequence of datasets captured at particular time steps. In such a sequence, each dataset is composed of observations (high-dimensional real vectors), and each observation has a corresponding observation across time steps. Dimensionality reduction provides a scalable alternative to create visualizations (projections) that enable insight into the structure of such datasets. However, applying dimensionality reduction independently for each dataset in a sequence may introduce unnecessary variability in the resulting sequence of projections, which makes tracking the evolution of the data significantly more challenging. We show that this issue affects t-SNE, a widely used dimensionality reduction technique. In this context, we propose dynamic t-SNE, an adaptation of t-SNE that introduces a controllable trade-off between temporal coherence and projection reliability. Our evaluation in two time-dependent datasets shows that dynamic t-SNE eliminates unnecessary temporal variability and encourages smooth changes between projections.
