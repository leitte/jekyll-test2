---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Kyrix: Interactive Pan/Zoom Visualizations at Scale"
author: Wenbo Tao, Xiaoyu Liu, Yedi Wang, L. Battle, Çağatay Demiralp, Remco Chang & M. Stonebraker
year: 2019
journal: Computer graphics forum (Print)
doi: 10.1111/cgf.13708
date: 2019-06-01
citation_count: 24
categories:
  - infrastructure
  - interaction
  - technical challenges
tags:
  - infrastructure
  - interaction
  - interactive system
  - interactive navigation
  - technical challenges
  - performance
---
Pan and zoom are basic yet powerful interaction techniques for exploring large datasets. However, existing zoomable UI toolkits such as Pad++ and ZVTM do not provide the backend database support and data‐driven primitives that are necessary for creating large‐scale visualizations. This limitation in existing general‐purpose toolkits has led to many purpose‐built solutions (e.g. Google Maps and ForeCache) that address the issue of scalability but cannot be easily extended to support visualizations beyond their intended data types and usage scenarios. In this paper, we introduce Kyrix to ease the process of creating general and large‐scale web‐based pan/zoom visualizations. Kyrix is an integrated system that provides the developer with a concise and expressive declarative language along with a backend support for performance optimization of large‐scale data. To evaluate the scalability of Kyrix, we conducted a set of benchmarked experiments and show that Kyrix can support high interactivity (with an average latency of 100 ms or below) on pan/zoom visualizations of 100 million data points. We further demonstrate the accessibility of Kyrix through an observational study with 8 developers. Results indicate that developers can quickly learn Kyrix's underlying declarative model to create scalable pan/zoom visualizations. Finally, we provide a gallery of visualizations and show that Kyrix is expressive and flexible in that it can support the developer in creating a wide range of customized visualizations across different application domains and data types.
