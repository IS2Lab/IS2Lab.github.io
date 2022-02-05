---
title: "Publications"
permalink: "/pubs/"
layout: page
---
<!-- 
## Who are we?

Just fork this [repository](https://github.com/niklasbuschmann/contrast) and adjust the `_config.yml` to use with [Github Pages](https://pages.github.com/) and your page is done.


## Members -->

## Books and Book Articles

- Lei Bu, Liqian Chen, Yunwei Dong, Xiaowei Huang, Jianlin Li, Qin Li, Wanwei Liu, Wenjian Ruan, Fu Song, Youcheng Sun, **Jingyi Wang**, Min Wu, Zhiwu Xu, Bai Xue, Pengfei Yang, Xinping Yi, Lijun Zhang and Min Zhang. *Research Progress and Trends on Formal Verification of Artificial Intelligence Systems.*  CCF 2019-2020 Progress Report on Chinese Computer Science and Technology. China Machine Press, pages 491-539, 2020.


## Refereed Journal and Conference Articles

### <font color="#dd0000">* means corresponding author</font>
<!-- *Note that in computer science, peer reviewed top-tier conference papers are equally (if not more) recoganized than top-tier journal papers.*  -->
<!-- [Google Scholar](https://scholar.google.com.sg/citations?user=GjkTuMQAAAAJ&hl=en)
 -->



### 2022

- [**IEEE S&P, CCF A**] Jialuo Chen, **Jingyi Wang**\*, Tinglan Peng, Youcheng Sun, Peng Cheng, Shouling Ji, Xingjun Ma, Bo Li and Dawn Song. *Copy, Right? A Testing Framework for Copyright Protection of Deep Learning Models*. 43rd IEEE Symposium on Security and Privacy, Oakland, USA, May 2022.


- [**ICSE, CCF A**] Haibin Zheng, Zhiqing Chen, Tianyu Du, Xuhong Zhang, Yao Cheng, Shouling Ji, **Jingyi Wang**, Yue Yu and Jinyin Chen. *NeuronFair: Interpretable White-Box Fairness Testing through Biased Neuron Identification*. 44th International Conference on Software Engineering, Pittsburgh, PA, USA, May, 2022. (197/751, Acceptance rate: 26%)


### 2021


- [**JCST, CCF B**] Ke Liu, **Jingyi Wang**, Qiang Wei, Zhengyong Zhang, Jun Sun,  Rongkuan Ma, Ruilong Deng. *HRPDF: A Software-Based Heterogeneous Redundant Proactive Defense Framework for Programmable Logic Controller*, Journal of Computer Science and Technology. (Accepted)

- [**TSE, CCF A**] Peixin Zhang, **Jingyi Wang**\*, Jun Sun, Xinyu Wang, Guoliang Dong, Xinggen Wang, Ting Dai and Jin Song Dong. *Automatic Fairness Testing of Neural Classifiers through Adversarial Sampling*, IEEE Transactions on Software Engineering. (Accepted)

- [**ISSTA, CCF A**] Zhe Zhao, Guangke Chen, **Jingyi Wang**, Yiwei Yang, Fu Song and Jun Sun. *Attack as Defense: Characterizing Adversarial Examples using Robustness*, 30th International Symposium on Software Testing and Analysis (online), July 2021. (51/233, Acceptance rate: 22%)

- [**ETAPS/TACAS, CCF B**] Pengfei Yang, Renjue Li, Jianlin Li, Cheng-Chao Huang, **Jingyi Wang**, Jun Sun, Bai Xue and Lijun Zhang. *Improving Neural Network Verification through Spurious Region Guided Refinement*, 27th International Conference on Tools and Algorithms for the Construction and Analysis of Systems, Luxembourg, Luxembourg (online), Apr 2021.

- [**ICSE, CCF A**] **Jingyi Wang**, Jialuo Chen, Youcheng Sun, Xingjun Ma, Dongxia Wang, Jun Sun and Peng Cheng. *RobOT: Robustness-Oriented Testing for Deep Learning Systems*. 43rd International Conference on Software Engineering, Madrid, Spain (online), May 2021. (138/615, Acceptance rate: 22%)


### Before 2020

- [**ASE, CCF A**] Guoliang Dong, **Jingyi Wang**\*, Jun Sun, Yang Zhang, Xinyu Wang, Ting Dai, Xingen Wang and Jin Song Dong. *Towards Interpreting Recurrent Neural Network through Probabilistic Abstraction*. 35th IEEE/ACM International Conference on Automated Software Engineering, Melbourne, Australia (online), Sep 2020. (92/414, Acceptance rate: 22.5%)

- [**ICSE, CCF A**] Peixin Zhang, **Jingyi Wang**\*, Jun Sun, Guoliang Dong, Xinyu Wang, Ting Dai, Xingen Wang and Jin Song Dong. *White-box Fairness Testing through Adversarial Sampling*. 42nd International Conference on Software Engineering, Seoul, South Korea (online), Oct 2020. (129/617, Acceptance rate: 20.9%, <font color="#dd0000">ACM SIGSOFT Distinguished Paper Award 10/129, ACM SIGSOFT Research Highlights.</font>)

- [**ICSE, CCF A**] **Jingyi Wang**, Guoliang Dong, Jun Sun, Xinyu Wang and Peixin Zhang. *Adversarial Sample Detection for Deep Neural Networks through Model Mutation Testing*. 41st International Conference on Software Engineering, Montreal, Canada, May 2019. (109/529, Acceptance rate: 20.6%)





<!-- ## Features

 - supports dark mode on macOS Mojave
 - optional sidebar
 - MathJax support
 - no external ressources
 - included archive page
 - supports pagination
 - feed generation
 - responsive
 - syntax highlighting
 - supports comments via [disqus](https://disqus.com/) or [isso](http://posativ.org/isso/)

## Based on

- [Hyde](https://github.com/poole/hyde)
- [Minima](https://github.com/jekyll/minima)
- [Lagrange](https://github.com/LeNPaul/Lagrange)
- [Font Awesome](http://fontawesome.io/)
- [KaTeX](https://katex.org/)
- [Pygments](https://github.com/richleland/pygments-css)

## Installation (jekyll-remote-theme method)

You can use this theme with the `jekyll-remote-theme` plugin. Just create an empty repo, copy over the `index.html` file and add this to your `_config.yml`:

```yaml
remote_theme: niklasbuschmann/contrast@v2.11

plugins:
  - jekyll-remote-theme
```

Note: to enable icons you also need to copy over the `_data` folder.

## Config

Your `_config.yml` could for example look like this:

```yaml
title: "Blog Title"
author: "Blog Author"
description: "My personal blog about ... something"
permalink: /:title/
lang: "en"
excerpt_separator: "\n\n\n"
date_format: "%B %d, %Y"

# Layout

show_excerpts: true        # show article excerpts on the home page
show_frame: true           # adds a gray frame to the site
show_sidebar: false        # show a sidebar instead of the usual header

# Menu

navigation:                # accepts {file, title, url, icon, sidebaricon}
  - {file: "index.html"}
  - {file: "README.md"}

external:                  # shows a footer with social links - for available icons see fontawesome.com/icons
  - {title: Mail, icon: envelope, url: "mailto:niklasbuschmann@users.noreply.github.com"}
  - {title: Github, icon: github, url: "https://github.com/niklasbuschmann/contrast"}
  - {title: Subscribe, icon: rss, url: "/feed.xml"}

comments:
#  disqus_shortname: ""    # see https://disqus.com/
#  isso_domain: ""         # see https://posativ.org/isso/

plugins:
 - jekyll-feed

```

## MathJax

Contrast comes preinstalled with a leightweight alternative to MathJax called [KaTeX](https://katex.org/). To display equations in a post simply set `mathjax: true` in the article's front matter.

## License

[public domain](http://unlicense.org/)

## Screenshots

![screenshot](https://user-images.githubusercontent.com/4943215/109431850-cd711780-7a08-11eb-8601-2763f2ee6bb4.png)

![screenshot](https://user-images.githubusercontent.com/4943215/109431832-b6cac080-7a08-11eb-9c5e-a058680c23a1.png)

![screenshot](https://user-images.githubusercontent.com/4943215/73125194-5f0b8b80-3fa4-11ea-805c-8387187503ad.png) -->
