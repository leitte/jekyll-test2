---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Sense2Vec: Representation and Visualization of Multivariate Sensory Time Series Data"
author: Alla Abdella & Ismail Uysal
year: 2021
journal: IEEE Sensors Journal
doi: 10.1109/JSEN.2020.3046575
date: 2021-03-15
citation_count: 7
categories:
  - infrastructure
  - visual representation
tags:
  - continuous process
  - multi-variate attribute
  - multiple time-series
  - all time-series
  - infrastructure
  - data preprocessing
  - visual representation
  - chart type
  - direct visual mapping
  - line chart
  - single-view layout
  - explicit temporal encoding
  - 2D chart
---
Processing multivariate sensory time-series with variable lengths is a challenging problem across different application domains due to the naturally complex, high-dimensional, and often non-stationary nature of the data. An excellent example can be found in the temperature-controlled transportation of goods where sensors could be placed in different locations along the supply chain and data could be coming from different shipments with different numbers of observations across time. In this paper, we propose a new approach (Sense2Vec) for processing variable-length sensory time-series data leveraging various similarity metrics between different time-series temperature profiles. The proposed algorithm is shown to be independent of the distance similarity measure (like dynamic time warping or Pearson’s correlation coefficient) and provides better visualization and summarization of the multivariate raw time-series through representations that are robust to noise and outliers. Specifically, a moving clipping mechanism is used to create uniform sets of disjoint sensory recordings across multiple groups to calculate normalized similarity distances followed by a weighted fusion and concatenation to create a representative vector for each sensor group. The proposed algorithm is tested on a novel food transportation dataset which consists of temperature recordings from wireless sensor networks implemented on different shipments of perishable commodities across the United States. Graphical results show that the algorithm facilitates discovering similarities and discrepancies across the transportation process to find proper representations while reducing the time-series dimensionality for back-end applications.
