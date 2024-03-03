---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "TopoLines: Topological Smoothing for Line Charts"
author: Ashley Suh, Christopher Salgado, Mustafa Hajij & P. Rosen
year: 2019
journal: Eurographics Conference on Visualization
doi: 10.2312/evs.20201053
date: 2019-06-22
citation_count: 3
categories:
  - visual representation
tags:
  - continuous process
  - numeric attribute
  - visual representation
  - chart type
  - direct visual mapping
  - line chart
  - single-view layout
  - 2D chart
---
Line charts are commonly used to visualize a series of data samples. When the data are noisy, smoothing is applied to make the signal more apparent. However, the difference between signal and noise is ill-defined, as it depends upon the application domain of the data. Common methods used to smooth line charts, such as rank filters, convolutional filters, frequency domain filters, and subsampling, optimize on various properties of the data. However, these methods are only ideal in certain limited scenarios. We present TopoLines, a method for smoothing line charts by leveraging techniques from Topological Data Analysis. The design goal of TopoLines is to smooth line charts while maintaining prominent peaks, as defined by persistent homology, in the data. We compare TopoLines to 5 popular line smoothing methods using data from 4 application domains. We evaluate TopoLines in terms of $l^2$-norm of the residual as the simplification threshold is varied, and we perform a user study to evaluate users' perception of the accuracy of TopoLines.
