---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "PSEUDo: Interactive Pattern Search in Multivariate Time Series with Locality-Sensitive Hashing and Relevance Feedback"
author: Yuncong Yu, Dylan Kruyff, Jiao Jiao, Tim Becker & M. Behrisch
year: 2021
journal: IEEE Transactions on Visualization and Computer Graphics
doi: 10.1109/TVCG.2022.3209431
date: 2021-04-30
citation_count: 7
categories:
  - integration of AI
tags:
  - continuous process
  - multi-variate attribute
  - multiple time series
  - chart type
  - direct visual mapping
  - bar chart
  - line chart
  - multi-view layout
  - explicit temporal encoding
  - 2D chart
  - interactive system
  - interactive querying
  - integration of AI
  - pattern detection
---
We present PSEUDo, a visual pattern retrieval tool for multivariate time series. It aims to overcome the uneconomic (re-)training problem accompanying deep learning-based methods. Very high-dimensional time series emerge on an unprecedented scale due to increasing sensor usage and data storage. Visual pattern search is one of the most frequent tasks on time series. Automatic pattern retrieval methods often suffer from inefficient training data, a lack of ground truth labels, and a discrepancy between the similarity perceived by the algorithm and required by the user or the task. Our proposal is based on the query-aware locality-sensitive hashing technique to create a representation of multivariate time series windows. It features sub-linear training and inference time with respect to data dimensions. This performance gain allows an instantaneous relevance-feedback-driven adaption to converge to users' similarity notion. We demonstrate PSEUDo's performance in terms of accuracy, speed, steerability, and usability through quantitative benchmarks with representative time series retrieval methods and a case study. We find that PSEUDo detects patterns in high-dimensional time series efficiently, improves the result with relevance feedback through feature selection, and allows an understandable as well as user-friendly retrieval process.
