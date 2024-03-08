---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "There is More to Streamgraphs than Movies: Better Aesthetics via Ordering and Lassoing"
author: M. D. Bartolomeo & Yifan Hu
year: 2016
journal: Computer graphics forum (Print)
doi: 10.1111/cgf.12910
date: 2016-06-01
citation_count: 14
categories:
  - visual representation
  - technical challenges
tags:
  - continuous process
  - numeric attribute
  - all time series
  - visual representation
  - chart type
  - flow diagram
  - stream graph
  - single-view layout
  - explicit temporal encoding
  - 2D chart
  - technical challenges
  - visual complexity
---
Streamgraphs were popularized in 2008 when The New York Times used them to visualize box office revenues for 7500 movies over 21 years. The aesthetics of a streamgraph is affected by three components: the ordering of the layers, the shape of the lowest curve of the drawing, known as the baseline, and the labels for the layers. As of today, the ordering and baseline computation algorithms proposed in the paper of Byron and Wattenberg are still considered the state of the art. However, their ordering algorithm exploits statistical properties of the movie revenue data that may not hold in other data . In addition, the baseline optimization is based on a definition of visual energy that in some cases results in considerable amount of visual distortion. We offer an ordering algorithm that works well regardless of the properties of the input data , and propose a 1‐norm based definition of visual energy and the associated solution method that overcomes the limitation of the original baseline optimization procedure. Furthermore, we propose an efficient layer labeling algorithm that scales linearly to the data size in place of the brute‐force algorithm adopted by Byron and Wattenberg. We demonstrate the advantage of our algorithms over existing techniques on a number of real world data sets.
