<!-- RESEARCH PILLARS and their highlight papers.
     'colour' must be track-1 (blue), track-2 (teal) or track-3 (violet).
     Each highlight can have: link, project, code, award — omit any you don't need. -->

---
pillars:
- colour: track-1
  tag:
    en: Pillar 01
    zh: 方向 01
  title:
    en: Formal Reasoning of Security
    zh: 安全的形式化推理
  lede:
    en: Machine-checked guarantees for the foundational software that safety-critical systems run on.
    zh: 为安全攸关系统所依赖的基础软件提供机器可检验的保证。
  body:
    en: The software stack is the core driving force behind safety-critical industrial and autonomous systems. We
      formally model, verify, monitor and enforce correctness and security across foundational layers — OS kernels,
      compilers, security protocols, smart contracts and industrial control programs — increasingly aided by AI
      to scale formal methods to real-world systems.
    zh: 软件栈是安全攸关的工业与自主系统的核心驱动力。我们对操作系统内核、编译器、安全协议、智能合约与工业控制程序等基础软件层进行形式化建模、验证、监测与性质强制，并越来越多地借助 AI 将形式化方法扩展到真实系统。
  venues:
  - CCS 25
  - ICSE 25
  - WWW 25
  - ASE 25
  - TSE 23
  - CCS 23
  - TSE 21
  - ICSE 18
  - FM 18
  highlights:
  - venue: ICSE 2025
    title: LLM-aided Automatic Modelling for Security Protocol Verification
    intro:
      en: Uses large language models to automatically construct the formal models that protocol verification normally
        demands by hand, lowering the expertise barrier to machine-checked security-protocol analysis.
      zh: 借助大语言模型自动构建协议验证通常需要手工完成的形式化模型，降低了机器可检验协议分析的建模门槛。
    link: https://www.computer.org/csdl/proceedings-article/icse/2025/056900a734/251mHfUjxMk
  - venue: ASE 2025 · Industry
    title: Securing Millions of Decentralized Identities in Alipay with End-to-End Formal Verification
    intro:
      en: An industry-scale deployment applying end-to-end formal verification to the decentralized-identity system
        inside the Alipay super app, protecting millions of real users.
      zh: 工业级实践：将端到端形式化验证应用于支付宝超级 App 的去中心化身份系统，为数百万真实用户提供安全保障。
    link: https://ieeexplore.ieee.org/document/11334285
  - venue: CCS 2025
    title: Generalized Security-Preserving Refinement for Concurrent Systems
    intro:
      en: Extends refinement-based reasoning so that security properties are provably preserved as concurrent systems
        are refined down toward their implementations.
      zh: 推广基于精化的推理方法，使并发系统在向具体实现精化的过程中可证明地保持安全性质。
    link: https://dl.acm.org/doi/10.1145/3719027.3765138
  - venue: WWW 2025
    title: Quantitative Runtime Monitoring of Ethereum Transaction Attacks
    intro:
      en: Brings quantitative runtime monitoring to blockchain, detecting attacks against Ethereum transactions
        as they unfold rather than after the fact.
      zh: 将定量运行时监控引入区块链，在攻击发生过程中而非事后检测针对以太坊交易的攻击。
    link: https://dl.acm.org/doi/abs/10.1145/3696410.3714682
- colour: track-2
  tag:
    en: Pillar 02
    zh: 方向 02
  title:
    en: Software Engineering for AI (SE4AI)
    zh: 面向人工智能的软件工程（SE4AI）
  lede:
    en: Testing, verifying and repairing AI models and AI-enabled systems.
    zh: 对 AI 模型与 AI 赋能系统进行测试、验证与修复。
  body:
    en: Emerging AI — deep neural networks and large language models, AI-based cyber-physical systems, and LLM agents
      — is mostly built on software, so its trustworthiness must be assured from a software-engineering perspective.
      We build systematic testing, verification and repair frameworks that evaluate, locate and fix risks in AI
      across robustness, fairness, copyright and safety.
    zh: 新兴的人工智能——深度神经网络与大语言模型、基于 AI 的信息物理系统以及大模型智能体——大多构建于软件之上，因此必须从软件工程视角保障其可信性。我们构建系统化的测试、验证与修复框架，从鲁棒性、公平性、版权与安全等维度评估、定位并修复
      AI 中的风险。
  venues:
  - ISSTA 25
  - ICSE 24
  - ISSTA 24
  - TOSEM 24
  - ICSE 22
  - ICSE 21
  - TSE 21
  - TACAS 21
  - ICSE 20
  - ASE 20
  - ICSE 19
  highlights:
  - venue: ICSE 2020
    title: White-box Fairness Testing through Adversarial Sampling
    intro:
      en: A white-box technique that uses adversarial sampling to surface individual-discrimination defects in neural
        networks — a foundational result in fairness testing.
      zh: 一种通过对抗采样揭示神经网络中个体歧视缺陷的白盒方法，是公平性测试领域的奠基性成果。
    link: https://dl.acm.org/doi/10.1145/3377811.3380331
    award:
      en: ACM SIGSOFT Distinguished Paper · Research Highlights
      zh: ACM SIGSOFT 杰出论文奖 · Research Highlights
  - venue: ICSE 2021
    title: 'RobOT: Robustness-Oriented Testing for Deep Learning Systems'
    intro:
      en: Defines robustness-oriented test metrics and generation so that the tests you run measurably strengthen
        a model's robustness, not merely its accuracy.
      zh: 提出面向鲁棒性的测试度量与用例生成方法，使测试不仅提升准确率，更可度量地增强模型鲁棒性。
    link: https://dl.acm.org/doi/10.1109/ICSE43902.2021.00038
  - venue: ICSE 2024
    title: 'VeRe: Verification Guided Synthesis for Repairing Deep Neural Networks'
    intro:
      en: Repairs faulty neural networks by letting formal verification results guide the synthesis of the fix,
        so the patched network ships with provable guarantees.
      zh: 以形式化验证结果指导修复合成来修补缺陷神经网络，使修复后的网络具备可证明的保证。
    link: https://dl.acm.org/doi/10.1145/3597503.3623332
  - venue: ISSTA 2025
    title: 'S-Eval: Automatic and Adaptive Test Generation for Safety Evaluation of LLMs'
    intro:
      en: An automatic, adaptive test-generation framework that builds large-scale benchmarks for evaluating LLM
        safety — released with an open dataset and a public leaderboard.
      zh: 一种自动且自适应的测试生成框架，为大语言模型安全评估构建大规模基准，并开放数据集与公开排行榜。
    link: https://www.arxiv.org/abs/2405.14191
    project: https://s-eval.github.io/
    code: https://github.com/IS2Lab/S-Eval
- colour: track-3
  tag:
    en: Pillar 03
    zh: 方向 03
  title:
    en: AI Safety, Security & Ethics
    zh: 人工智能安全与伦理
  lede:
    en: Understanding and defending the safety of LLMs, agents and embodied intelligence.
    zh: 认知并守护大模型、智能体与具身智能的安全。
  body:
    en: As large language models, agents and embodied intelligence enter the real world, new classes of risk emerge
      — backdoors, unauthorized model copying, unverifiable data removal and unsafe behavior. We study these threats
      and build the defenses, benchmarks and guarantees that let powerful AI be deployed responsibly.
    zh: 随着大语言模型、智能体与具身智能走向真实世界，后门攻击、未授权模型抄袭、无法验证的数据删除与不安全行为等新型风险随之而来。我们研究这些威胁，并构建防御、基准与保证，使强大的 AI 能够被负责任地部署。
  venues:
  - S&P 22
  - NDSS 26
  - WWW 26
  - TDSC 24
  - CSUR
  - TOSEM 22
  highlights:
  - venue: S&P 2022
    title: Copy, Right? A Testing Framework for Copyright Protection of Deep Learning Models
    intro:
      en: A testing framework that fingerprints deep learning models to detect unauthorized copying, published at
        IEEE S&P — a top-tier security venue.
      zh: 一种对深度学习模型进行指纹测试、以检测未授权抄袭的框架，发表于顶级安全会议 IEEE S&P。
    link: https://ieeexplore.ieee.org/document/9833747
  - venue: TDSC 2024
    title: 'VERIFI: Towards Verifiable Federated Unlearning'
    intro:
      en: Lets a participant in federated learning verify that the server truly removed — ‘unlearned’ — its data,
        turning data deletion into something checkable rather than promised.
      zh: 使联邦学习中的参与方能够验证服务器是否真正删除（“遗忘”）了其数据，使数据删除从“承诺”变为“可验证”。
    link: https://ieeexplore.ieee.org/document/10480645
    award:
      en: Best Paper Award Runner-up
      zh: 最佳论文奖亚军
  - venue: NDSS 2026
    title: Rounding-Guided Backdoor Injection in Deep Learning Model Quantization
    intro:
      en: 'Reveals a new attack surface: backdoors that stay dormant in a full-precision model and activate only
        after quantization rounding — exposing real risks in on-device model deployment.'
      zh: 揭示一种全新攻击面：后门在全精度模型中保持休眠，仅在量化舍入后被激活，暴露端侧模型部署的真实风险。
    link: https://arxiv.org/abs/2510.09647
  - venue: WWW 2026
    title: 'LLMQuA: Practical Backdoor Injection on Large Language Model Quantization'
    intro:
      en: Extends quantization backdoor attacks to large language models, showing the threat is practical at LLM
        scale and motivating defenses for quantized deployments.
      zh: 将量化后门攻击拓展至大语言模型，证明该威胁在大模型规模下切实可行，并促使针对量化部署的防御。
    link: https://dl.acm.org/doi/10.1145/3774904.3792256
---
