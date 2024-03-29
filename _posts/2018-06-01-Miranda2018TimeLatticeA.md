---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Time Lattice: A Data Structure for the Interactive Visual Analysis of Large Time Series"
author: Fábio Miranda, Marcos Lage, Harish Doraiswamy, C. Mydlarz, J. Salamon, Y. Lockerman, J. Freire & Cláudio T. Silva
year: 2018
journal: Computer graphics forum (Print)
doi: 10.1111/cgf.13398
date: 2018-06-01
citation_count: 15
categories:
  - infrastructure
tags:
  - continuous process
  - numeric attribute
  - all time series
  - infrastructure
  - data structure
  - chart type
  - direct visual mapping
  - line chart
  - single-view layout
  - explicit temporal encoding
  - 2D chart
  - interactive system
  - interactive filtering
  - interactive querying
  - streaming data
---
Advances in technology coupled with the availability of low‐cost sensors have resulted in the continuous generation of large time series from several sources. In order to visually explore and compare these time series at different scales, analysts need to execute online analytical processing (OLAP) queries that include constraints and group‐by's at multiple temporal hierarchies. Effective visual analysis requires these queries to be interactive. However, while existing OLAP cube‐based structures can support interactive query rates, the exponential memory requirement to materialize the data cube is often unsuitable for large data sets. Moreover, none of the recent space‐efficient cube data structures allow for updates. Thus, the cube must be re‐computed whenever there is new data, making them impractical in a streaming scenario. We propose Time Lattice, a memory‐efficient data structure that makes use of the implicit temporal hierarchy to enable interactive OLAP queries over large time series. Time Lattice is a subset of a fully materialized cube and is designed to handle fast updates and streaming data. We perform an experimental evaluation which shows that the space efficiency of the data structure does not hamper its performance when compared to the state of the art. In collaboration with signal processing and acoustics research scientists, we use the Time Lattice data structure to design the Noise Profiler, a web‐based visualization framework that supports the analysis of noise from cities. We demonstrate the utility of Noise Profiler through a set of case studies.
