---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "ThermalPlot: Visualizing Multi-Attribute Time-Series Data Using a Thermal Metaphor"
author: Holger Stitz, S. Gratzl, W. Aigner & M. Streit
year: 2016
journal: IEEE Transactions on Visualization and Computer Graphics
doi: 10.1109/TVCG.2015.2513389
date: 2016-12-01
citation_count: 19
categories:
  - visual representation
tags:
  - continuous process
  - multi-variate attribute
  - all time-series
  - visual representation
  - direct visual mapping
  - line chart
  - transformation-based visual mapping
  - 2D projections
  - multi-view layout
  - direct temporal encoding
  - indirect temporal encoding
  - interactive system
  - highlighting
  - anomaly detection
  - trend analysis
  - pattern detection
---
Multi-attribute time-series data plays a vital role in many different domains, such as economics, sensor networks, and biology. An important task when making sense of such data is to provide users with an overview to identify items that show an interesting development over time, including both absolute and relative changes in multiple attributes simultaneously. However, this is not well supported by existing visualization techniques. To address this issue, we present <italic>ThermalPlot</italic>, a visualization technique that summarizes combinations of multiple attributes over time using an items position, the most salient visual variable. More precisely, the x-position in the <italic> ThermalPlot</italic> is based on a user-defined degree-of-interest (DoI) function that combines multiple attributes over time. The y-position is determined by the relative change in the DoI value (<inline-formula> <tex-math notation="LaTeX">$\Delta$</tex-math><alternatives> <inline-graphic xlink:type="simple" xlink:href="stitz-ieq1-2513389.gif"/></alternatives></inline-formula>DoI) within a user-specified time window. Animating this mapping via a moving time window gives rise to circular movements of items over time—as in thermal systems. To help the user to identify important items that match user-defined temporal patterns and to increase the technique's scalability, we adapt the level of detail of the items’ representation based on the DoI value. Furthermore, we present an interactive exploration environment for multi-attribute time-series data that ties together a carefully chosen set of visualizations, designed to support analysts in interacting with the <italic>ThermalPlot</italic> technique. We demonstrate the effectiveness of our technique by means of two usage scenarios that address the visual analysis of economic development data and of stock market data.
