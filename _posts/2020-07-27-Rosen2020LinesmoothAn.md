---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "LineSmooth: An Analytical Framework for Evaluating the Effectiveness of Smoothing Techniques on Line Charts"
author: P. Rosen & Ghulam Jilani Quadri
year: 2020
journal: IEEE Transactions on Visualization and Computer Graphics
doi: 10.1109/TVCG.2020.3030421
date: 2020-07-27
citation_count: 8
categories:
  - evaluation
tags:
  - continuous process
  - numeric attribute
  - 2D chart
  - evaluation
---
We present a comprehensive framework for evaluating line chart smoothing methods under a variety of visual analytics tasks. Line charts are commonly used to visualize a series of data samples. When the number of samples is large, or the data are noisy, smoothing can be applied to make the signal more apparent. However, there are a wide variety of smoothing techniques available, and the effectiveness of each depends upon both nature of the data and the visual analytics task at hand. To date, the visualization community lacks a summary work for analyzing and classifying the various smoothing methods available. In this paper, we establish a framework, based on 8 measures of the line smoothing effectiveness tied to 8 low-level visual analytics tasks. We then analyze 12 methods coming from 4 commonly used classes of line chart smoothing-rank filters, convolutional filters, frequency domain filters, and subsampling. The results show that while no method is ideal for all situations, certain methods, such as Gaussian filters and TOPOLOGY-based subsampling, perform well in general. Other methods, such as low-pass CUTOFF filters and Douglas-peucker subsampling, perform well for specific visual analytics tasks. Almost as importantly, our framework demonstrates that several methods, including the commonly used UNIFORM subsampling, produce low-quality results, and should, therefore, be avoided, if possible.
