---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Matrix Profile III: The Matrix Profile Allows Visualization of Salient Subsequences in Massive Time Series"
author: Chin-Chia Michael Yeh, H. V. Herle & Eamonn J. Keogh
year: 2016
journal: Industrial Conference on Data Mining
doi: 10.1109/ICDM.2016.0069
date: 2016-12-01
citation_count: 28
categories:
  - visual representation
tags:
  - continuous process
  - numeric attribute
  - single time series
  - all time series
  - visual representation
  - chart type
  - transformation-based chart
  - scatter plot
  - single-view layout
  - no temporal encoding
  - 2D chart
  - dimensionality reduction
---
Multidimensional Scaling (MDS) is one of the most versatile tools used for exploratory data mining. It allows a first glimpse of possible structure in the data, which can inform the choice of analyses used. Its uses are multiple. It can give the user an idea as to the clusterability or linear separability of the data. It can help spot outliers, or can hint at the intrinsic dimensionality of the data. Moreover, it can sometimes reveal unexpected latent dimensions in the data. With all these uses, MDS is increasingly used in areas as diverse as marketing, medicine, genetics, music and linguistics. One of the strengths of MDS is that it is essentially agnostic to data type, as we can use any distance measure to create the distance matrix, which is the only required input to the MDS algorithm. In spite of this generality, we make the following claim. MDS is not (well) defined for an increasingly important data type, time series subsequences. In this work we explain why this is the case, and we propose a scalable solution. We demonstrate the utility of our ideas on several diverse real-world datasets. At the core of our approach is a novel Minimum Description Length (MDL) subsequence extraction algorithm. Beyond MDS visualization, this subsequence extraction subroutine may be a useful tool in its own right.
