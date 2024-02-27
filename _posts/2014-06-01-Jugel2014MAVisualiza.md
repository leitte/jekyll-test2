---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "M4: A Visualization-Oriented Time Series Data Aggregation"
author: Uwe Jugel, Zbigniew Jerzak, Gregor Hackenbroich & V. Markl
year: 2014
journal: Proceedings of the VLDB Endowment
doi: 10.14778/2732951.2732953
date: 2014-06-01
citation_count: 89
categories:
tags:
  - single time-series
  - chart type
  - direct visual mapping
  - line chart
  - single-view layout
  - explicit temporal encoding
  - 2D chart
  - interactive querying
  - clustering
  - classification
  - segmentation
  - anomaly detection
  - forecasting
---
Visual analysis of high-volume time series data is ubiquitous in many industries, including finance, banking, and discrete manufacturing. Contemporary, RDBMS-based systems for visualization of high-volume time series data have difficulty to cope with the hard latency requirements and high ingestion rates of interactive visualizations. Existing solutions for lowering the volume of time series data disregard the semantics of visualizations and result in visualization errors. 
 
In this work, we introduce M4, an aggregation-based time series dimensionality reduction technique that provides error-free visualizations at high data reduction rates. Focusing on line charts, as the predominant form of time series visualization, we explain in detail the drawbacks of existing data reduction techniques and how our approach outperforms state of the art, by respecting the process of line rasterization. 
 
We describe how to incorporate aggregation-based dimensionality reduction at the query level in a visualization-driven query rewriting system. Our approach is generic and applicable to any visualization system that uses an RDBMS as data source. Using real world data sets from high tech manufacturing, stock markets, and sports analytics domains we demonstrate that our visualization-oriented data aggregation can reduce data volumes by up to two orders of magnitude, while preserving perfect visualizations.
