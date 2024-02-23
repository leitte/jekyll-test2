---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "Finding surprising patterns in a time series database in linear time and space"
author: Eamonn J. Keogh, S. Lonardi & B. Chiu
year: 2002
journal: Knowledge Discovery and Data Mining
doi: 10.1145/775047.775128
date: 2002-07-23
citation_count: 468
categories:
  - infrastructure
tags:
  - continuous process
  - numeric attribute
  - infrastructure
---
The problem of finding a specified pattern in a time series database (i.e. query by content) has received much attention and is now a relatively mature field. In contrast, the important problem of enumerating all surprising or interesting patterns has received far less attention. This problem requires a meaningful definition of "surprise", and an efficient search technique. All previous attempts at finding surprising patterns in time series use a very limited notion of surprise, and/or do not scale to massive datasets. To overcome these limitations we introduce a novel technique that defines a pattern surprising if the frequency of its occurrence differs substantially from that expected by chance, given some previously seen data.
