---
title: "IS2Lab - Publications"
layout: gridlay
excerpt: "IS2Lab -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

## REFEREED JOURNAL AND CONFERENCE ARTICLES
<font color="#dd0000" size=3>* means corresponding author</font>

<br>
#### 2022
[IEEE S&P, CCF A] Jialuo Chen, Jingyi Wang\*, Tinglan Peng, Youcheng Sun, Peng Cheng, Shouling Ji, Xingjun Ma, Bo Li and Dawn Song. [*Copy, Right? A Testing Framework for Copyright Protection of Deep Learning Models*](https://arxiv.org/abs/2112.05588). 43rd IEEE Symposium on Security and Privacy, Oakland, USA, May 2022.


[ICSE, CCF A] Haibin Zheng, Zhiqing Chen, Tianyu Du, Xuhong Zhang, Yao Cheng, Shouling Ji, Jingyi Wang, Yue Yu and Jinyin Chen. *NeuronFair: Interpretable White-Box Fairness Testing through Biased Neuron Identification*. 44th International Conference on Software Engineering, Pittsburgh, PA, USA, May, 2022. (197/751, Acceptance rate: 26%)

<br>
<br>

#### 2021

[JCST, CCF B] Ke Liu, Jingyi Wang, Qiang Wei, Zhengyong Zhang, Jun Sun,  Rongkuan Ma, Ruilong Deng. *HRPDF: A Software-Based Heterogeneous Redundant Proactive Defense Framework for Programmable Logic Controller*, Journal of Computer Science and Technology. (Accepted)

[TSE, CCF A] Peixin Zhang, Jingyi Wang\*, Jun Sun, Xinyu Wang, Guoliang Dong, Xinggen Wang, Ting Dai and Jin Song Dong. [*Automatic Fairness Testing of Neural Classifiers through Adversarial Sampling*](https://arxiv.org/abs/2107.08176), IEEE Transactions on Software Engineering. (Accepted)

[ISSTA, CCF A] Zhe Zhao, Guangke Chen, Jingyi Wang, Yiwei Yang, Fu Song and Jun Sun. *Attack as Defense: Characterizing Adversarial Examples using Robustness*, 30th International Symposium on Software Testing and Analysis (online), July 2021. (51/233, Acceptance rate: 22%)

[ETAPS/TACAS, CCF B] Pengfei Yang, Renjue Li, Jianlin Li, Cheng-Chao Huang, Jingyi Wang, Jun Sun, Bai Xue and Lijun Zhang. *Improving Neural Network Verification through Spurious Region Guided Refinement*, 27th International Conference on Tools and Algorithms for the Construction and Analysis of Systems, Luxembourg, Luxembourg (online), Apr 2021.

[ICSE, CCF A] Jingyi Wang, Jialuo Chen, Youcheng Sun, Xingjun Ma, Dongxia Wang, Jun Sun and Peng Cheng. [*RobOT: Robustness-Oriented Testing for Deep Learning Systems*](https://arxiv.org/abs/2102.05913). 43rd International Conference on Software Engineering, Madrid, Spain (online), May 2021. (138/615, Acceptance rate: 22%)

<br>
<br>

#### Before 2020

[ASE, CCF A] Guoliang Dong, Jingyi Wang\*, Jun Sun, Yang Zhang, Xinyu Wang, Ting Dai, Xingen Wang and Jin Song Dong. *Towards Interpreting Recurrent Neural Network through Probabilistic Abstraction*. 35th IEEE/ACM International Conference on Automated Software Engineering, Melbourne, Australia (online), Sep 2020. (92/414, Acceptance rate: 22.5%)

[ICSE, CCF A] Peixin Zhang, Jingyi Wang\*, Jun Sun, Guoliang Dong, Xinyu Wang, Ting Dai, Xingen Wang and Jin Song Dong. *White-box Fairness Testing through Adversarial Sampling*. 42nd International Conference on Software Engineering, Seoul, South Korea (online), Oct 2020. (129/617, Acceptance rate: 20.9%, <font color="#dd0000">ACM SIGSOFT Distinguished Paper Award 10/129, ACM SIGSOFT Research Highlights.</font>)

[ICSE, CCF A] Jingyi Wang, Guoliang Dong, Jun Sun, Xinyu Wang and Peixin Zhang. [*Adversarial Sample Detection for Deep Neural Networks through Model Mutation Testing*](https://arxiv.org/abs/1812.05793). 41st International Conference on Software Engineering, Montreal, Canada, May 2019. (109/529, Acceptance rate: 20.6%)

<!-- {% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p> -->
<br>

## BOOKS AND BOOK ARTICLES
<br>
Lei Bu, Liqian Chen, Yunwei Dong, Xiaowei Huang, Jianlin Li, Qin Li, Wanwei Liu, Wenjian Ruan, Fu Song, Youcheng Sun, Jingyi Wang, Min Wu, Zhiwu Xu, Bai Xue, Pengfei Yang, Xinping Yi, Lijun Zhang and Min Zhang. *Research Progress and Trends on Formal Verification of Artificial Intelligence Systems.*  CCF 2019-2020 Progress Report on Chinese Computer Science and Technology. China Machine Press, pages 491-539, 2020.

<br>

<!-- ## Patents
<em>Milan P Allan, S Gröblacher, RA Norte, M Leeuwenhoek</em><br />Novel atomic force microscopy probes with phononic crystals<br /> PCT/NL20-20/050797 (2020)

<em>Milan P Allan</em><br /> Methods of manufacturing superconductor and phononic elements <br /> <a href="https://patents.google.com/patent/US10439125B2/en?inventor=Milan+ALLAN&oq=inventor:(Milan+ALLAN)">US10439125B2 (2016)</a>

## Full List of publications

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %} -->
