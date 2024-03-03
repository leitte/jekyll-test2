---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "An Incremental Dimensionality Reduction Method for Visualizing Streaming Multidimensional Data"
author: Takanori Fujiwara, Jia-Kai Chou, Shilpika Shilpika, Panpan Xu, Liu Ren & K. Ma
year: 2019
journal: IEEE Transactions on Visualization and Computer Graphics
doi: 10.1109/TVCG.2019.2934433
date: 2019-05-10
citation_count: 53
categories:
  - visual representation
  - integration of AI
  - technical challenges
tags:
  - continuous process
  - multi-variate attribute
  - all time-series
  - visual representation
  - chart type
  - transformation-based visual mapping
  - scatter plot
  - parallel coordinates
  - single-view layout
  - implicit temporal encoding
  - no temporal encoding
  - 2D chart
  - integration of AI
  - dimensionality reduction
  - technical challenges
  - streaming data
  - uncertainty in data
---
Dimensionality reduction (DR) methods are commonly used for analyzing and visualizing multidimensional data. However, when data is a live streaming feed, conventional DR methods cannot be directly used because of their computational complexity and inability to preserve the projected data positions at previous time points. In addition, the problem becomes even more challenging when the dynamic data records have a varying number of dimensions as often found in real-world applications. This paper presents an incremental DR solution. We enhance an existing incremental PCA method in several ways to ensure its usability for visualizing streaming multidimensional data. First, we use geometric transformation and animation methods to help preserve a viewer's mental map when visualizing the incremental results. Second, to handle data dimension variants, we use an optimization method to estimate the projected data positions, and also convey the resulting uncertainty in the visualization. We demonstrate the effectiveness of our design with two case studies using real-world datasets.
