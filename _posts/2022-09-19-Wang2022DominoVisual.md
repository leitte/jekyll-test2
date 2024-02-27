---
layout: post
excerpt_image: NO_EXCERPT_IMAGE
title: "DOMINO: Visual Causal Reasoning With Time-Dependent Phenomena"
author: Jun Wang & Klaus Mueller
year: 2022
journal: IEEE Transactions on Visualization and Computer Graphics
doi: 10.1109/TVCG.2022.3207929
date: 2022-09-19
citation_count: 4
categories:
  - integration of AI
tags:
  - continuous process
  - all time-series
  - chart type
  - direct visual mapping
  - bar chart
  - line chart
  - color field
  - transformation-based visual mapping
  - glyph-based chart
  - multi-view layout
  - explicit temporal encoding
  - no temporal encoding
  - 2D chart
  - interactive system
  - integration of AI
  - pattern detection
  - forecasting
---
Current work on using visual analytics to determine causal relations among variables has mostly been based on the concept of counterfactuals. As such the derived static causal networks do not take into account the effect of time as an indicator. However, knowing the time delay of a causal relation can be crucial as it instructs how and when actions should be taken. Yet, similar to static causality, deriving causal relations from observational time-series data, as opposed to designed experiments, is not a straightforward process. It can greatly benefit from human insight to break ties and resolve errors. We hence propose a set of visual analytics methods that allow humans to participate in the discovery of causal relations associated with windows of time delay. Specifically, we leverage a well-established method, logic-based causality, to enable analysts to test the significance of potential causes and measure their influences toward a certain effect. Furthermore, since an effect can be a cause of other effects, we allow users to aggregate different temporal cause-effect relations found with our method into a visual flow diagram to enable the discovery of temporal causal networks. To demonstrate the effectiveness of our methods we constructed a prototype system named DOMINO and showcase it via a number of case studies using real-world datasets. Finally, we also used DOMINO to conduct several evaluations with human analysts from different science domains in order to gain feedback on the utility of our system in practical scenarios.
