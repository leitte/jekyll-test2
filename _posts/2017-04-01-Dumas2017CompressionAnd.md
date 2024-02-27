---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Compression and shifting to reduce occlusion in multiple short time series"
author: Maxime Dumas, Michael J. McGuffin & Patrick Chassé
year: 2017
journal: IEEE Pacific Visualization Symposium
doi: 10.1109/PACIFICVIS.2017.8031606
date: 2017-04-01
citation_count: 1
categories:
  - technical challenges
tags:
  - continuous process
  - all time-series
  - chart type
  - direct visual mapping
  - line chart
  - single-view layout
  - explicit temporal encoding
  - 2D chart
  - technical challenges
---
Visualization of multiple time series often suffers from overplotting, making it difficult to read the values of curves that are hidden by other curves. We present techniques for horizontally displacing the endpoints of line segments in discrete time series data that (1) enable the depiction of subsets of data and (2) reduce occlusion of endpoints. Because endpoints are not displaced vertically, their y values can still be read and compared. Unlike small multiples, our techniques do not move points with the same x or y values far from each other, making some comparison tasks easier. We present three novel techniques: compressed-superposed, compressed-juxtaposed, and shifted layers. One limitation of our techniques is that they work best when there is only a small number of x values being visualized, and additionally, one of them (compressed-superposed) modifies the slopes of curves in a way that makes the slopes incomparable. Our experimental comparison with three status quo techniques (conventional overlaid, vertically-stacked small multiples, and horizontally-stacked small multiples) shows that our proposed techniques are competitive with status quo techniques and in some cases superior.
