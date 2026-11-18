<!-- RESEARCH — formal reasoning of system safety and security, applied to three targets,
     each with its own page (pillar.html?id=...): OS kernels, industrial control software and AI systems.
     The methodology text is in content/ui.md (research.method.*).
     'id'      names the page and is what 'pillar = {...}' refers to in content/publications.bib.
               Lower-case letters, digits and '-' only.
     'topics'  short labels shown under the description.
     'image'   (optional) a picture shown in the icon, e.g. images/research/kernel.jpg
     'colour'  track-1 (blue), track-2 (teal) or track-3 (violet).
     Each highlight can have: link, project, code, award — omit any you don't need. -->

---
pillars:
- id: kernel
  colour: track-1
  tag:
    en: OS kernels
    zh: 操作系统内核
  title:
    en: OS Kernels
    zh: 操作系统内核
  lede:
    en: Verifying that security properties of operating-system kernels hold all the way down to their concurrent
      implementation.
    zh: 验证操作系统内核的安全性质能够一直保持到其并发实现。
  body:
    en: The OS kernel is the trusted foundation that isolates applications and enforces security policies; if it
      fails, nothing running above it can be trusted. Kernels are concurrent, and a security property proved for
      an abstract design can silently break as the design is refined into an implementation. We develop security-preserving
      refinement, which guarantees that security properties of concurrent systems are preserved from an abstract
      specification down to the implementation. We also apply rely-guarantee reasoning to verify the concurrent
      components of real-time OS kernels, and complement proof with fuzzing that exposes asynchronous concurrency
      bugs in the Linux kernel.
    zh: 操作系统内核是隔离应用、执行安全策略的可信基础；一旦内核失守，其上运行的一切都无从可信。内核是并发的，在抽象设计上证明的安全性质可能在逐步精化为实现的过程中悄然失效。我们发展保安全精化理论，保证并发系统的安全性质从抽象规约一直保持到实现。我们还运用
      rely-guarantee 推理验证实时操作系统内核的并发组件，并以模糊测试作为证明的补充，发现 Linux 内核中的异步并发缺陷。
  topics:
    en:
    - Security properties of kernels
    - Security-preserving refinement
    - Concurrent systems
    - Rely-guarantee reasoning for RTOS kernels
    - Information-flow security
    - Linux kernel concurrency bugs
    zh:
    - 内核安全性质
    - 保安全精化
    - 并发系统
    - 面向实时内核的 rely-guarantee 推理
    - 信息流安全
    - Linux 内核并发缺陷
  venues:
  - CCS 25
  - TIFS 26
  - FMICS 23
  highlights:
  - venue: CCS 2025
    title: Generalized Security-Preserving Refinement for Concurrent Systems
    intro:
      en: Extends refinement-based reasoning so that security properties are provably preserved as concurrent systems
        are refined down toward their implementations.
      zh: 推广基于精化的推理方法，使并发系统在向具体实现精化的过程中可证明地保持安全性质。
    link: https://dl.acm.org/doi/10.1145/3719027.3765138
  - venue: FMICS 2023
    title: 'Applying Rely-Guarantee Reasoning on Concurrent Memory Management and Mailbox in μC/OS-II: A Case Study'
    intro:
      en: Applies rely-guarantee reasoning to verify concurrent components of the μC/OS-II real-time kernel, a step
        towards verifying real-time OS kernels compositionally.
      zh: 运用 rely-guarantee 推理验证 μC/OS-II 实时内核中的并发组件，为组合式验证实时操作系统内核迈出一步。
    link: https://doi.org/10.1007/978-3-031-43681-9_13
  - venue: IEEE TIFS 2026
    title: 'ASFuzz: Detecting Linux Kernel Asynchronous Concurrency Bugs via Asynchronous Shadow Fuzzing'
    intro:
      en: A fuzzing approach that exposes asynchronous concurrency bugs in the Linux kernel, which arise when asynchronous
        kernel execution interleaves with ordinary code paths.
      zh: 一种模糊测试方法，用于发现 Linux 内核中由异步执行与常规代码路径交错引发的异步并发缺陷。
    link: https://doi.org/10.1109/TIFS.2026.3725562
- id: control
  colour: track-2
  tag:
    en: Industrial control software
    zh: 工业控制软件
  title:
    en: Industrial Control Software
    zh: 工业控制软件
  lede:
    en: Proving that the software steering physical processes — PLC programs, supervisory controllers and cyber-physical
      systems — is safe and secure.
    zh: 证明驱动物理过程的软件——PLC 程序、监督控制器与信息物理系统——是安全、可靠的。
  body:
    en: Industrial control software connects computation to power grids, factories and water plants, where a bug
      or an attack has physical consequences, so a control program is only safe with respect to the physical process
      it controls. We give control languages formal executable semantics, prove PLC programs and physical processes
      safe together with hybrid refinement logic, generate control code that is verified in a closed loop (including
      with LLM agents), formally synthesize attacks on supervisory control so they can be defended against, and
      verify complex cyber-physical systems.
    zh: 工业控制软件将计算与电网、工厂、水处理厂相连，其中的缺陷或攻击会带来真实的物理后果，因此控制程序是否安全取决于它所控制的物理过程。我们为控制语言建立形式化可执行语义，以混成精化逻辑将 PLC 程序与物理过程共同证明安全，生成经闭环验证的控制代码（包括借助大模型智能体），形式化合成针对监督控制的攻击以便防御，并验证复杂信息物理系统。
  topics:
    en:
    - PLC languages & semantics
    - Hybrid refinement logic
    - PLC program + physical process verification
    - Verified control-code generation
    - Supervisory control & sensor attacks
    - Cyber-physical systems
    zh:
    - PLC 语言与语义
    - 混成精化逻辑
    - PLC 程序与物理过程联合验证
    - 可验证的控制代码生成
    - 监督控制与传感器攻击
    - 信息物理系统
  venues:
  - TSE 26
  - ISSRE 26
  - JoS 26
  - TSE 23
  - FITEE 22
  - FM 18
  - FM 16
  highlights:
  - venue: TSE 2023
    title: 'K-ST: A Formal Executable Semantics of the Structured Text Language for PLCs'
    intro:
      en: Defined the formal executable semantic for the ST language which is the most powerful language for PLC
        programming, whose correctness is validated across commercialized compilers and used to uncover multipile
        bugs in opensource compilers.
      zh: 在K语义框架下定义了工业编程语言ST的形式化语义，在数个商用编译器中验证了其覆盖率和正确性，并发现了开源工业编译器的多个缺陷。
    link: https://dl.acm.org/doi/abs/10.1109/TSE.2023.3315292
  - venue: JoS 2026
    title: Hybrid Refinement Logic
    intro:
      en: A refinement logic for hybrid systems that lets a PLC program and the continuous physical process it controls
        be reasoned about, and proved safe, together.
      zh: 一种面向混成系统的精化逻辑，使 PLC 程序与其所控制的连续物理过程能够被统一推理并共同证明安全。
  - venue: TSE 2026
    title: 'Agents4PLC: Automating Closed-loop PLC Code Generation and Verification in Industrial Control Systems
      using LLM-based Agents'
    intro:
      en: LLM-based agents that generate PLC code and close the loop with formal verification, so that generated
        control code comes with guarantees rather than just plausibility.
      zh: 基于大模型的智能体自动生成 PLC 代码，并以形式化验证构成闭环，使生成的控制代码具备可验证的保证。
  - venue: ISSRE 2026
    title: Synthesis of Sensor Deception Attacks against Security for Timed Supervisory Control Systems
    intro:
      en: Formally synthesizes the sensor-deception attacks a timed supervisory control system is exposed to, so
        they can be understood and defended against.
      zh: 对带时间约束的监督控制系统所面临的传感器欺骗攻击进行形式化合成，以便理解并防御此类攻击。
  - venue: FITEE 2022
    title: Automatic Protocol Reverse-engineering for Industrial Control Systems with Dynamic Taint Analysis
    intro:
      en: Recovers the formats of proprietary industrial control protocols automatically with dynamic taint analysis.
      zh: 利用动态污点分析自动恢复私有工业控制协议的报文格式。
    award:
      en: Spotlight Paper
      zh: Spotlight 论文
  - venue: FM 2018
    title: Towards 'Verifying' a Water Treatment System
    intro:
      en: A case study in verifying a real water treatment testbed — a step towards verifying complex cyber-physical
        systems in practice.
      zh: 以真实水处理测试平台为对象的验证案例研究，推动复杂信息物理系统验证走向实践。
- id: ai
  colour: track-3
  tag:
    en: AI systems
    zh: AI 系统
  title:
    en: AI Systems
    zh: AI 系统
  lede:
    en: Reasoning formally about the safety and security of AI models, LLMs and agents — and repairing them with
      guarantees.
    zh: 对 AI 模型、大语言模型与智能体的安全性进行形式化推理，并以可证明的保证修复其缺陷。
  body:
    en: Neural networks, large language models and agents increasingly make the decisions in intelligent systems.
      We verify their safety properties and repair defects with provable guarantees, test them systematically for
      robustness, fairness and safety, and study the security threats they face — backdoors hidden by quantization,
      stolen models and data that should have been forgotten.
    zh: 神经网络、大语言模型与智能体正日益承担智能系统中的决策。我们验证其安全性质并以可证明的保证修复缺陷，系统化地测试其鲁棒性、公平性与安全性，并研究它们面临的安全威胁——经量化隐藏的后门、被窃取的模型，以及本应被遗忘的数据。
  topics:
    en:
    - Verification & provable repair
    - Robustness & fairness testing
    - LLM safety evaluation
    - Backdoors
    - Model copyright & unlearning
    zh:
    - 验证与可证明修复
    - 鲁棒性与公平性测试
    - 大模型安全评测
    - 后门
    - 模型版权与遗忘
  venues:
  - NDSS 26
  - WWW 26
  - CCS 25
  - ISSTA 25
  - ICSE 25
  - ICSE 24
  - TDSC 24
  - S&P 22
  - ICSE 20
  highlights:
  - venue: CCS 2025
    title: Provable Repair of Deep Neural Network Defects through Pre-image Synthesis and Property Refinement
    intro:
      en: A unified and provable defense based on neural network verification against a range of attacks or safety
        violation of deep neural networks.
      zh: 一种面向多种深度神经网络攻击或安全违反的深度神经网络可证明修复统一框架。
    link: https://dl.acm.org/doi/10.1145/3719027.3765057
  - venue: ICSE 2024
    title: 'VeRe: Verification Guided Synthesis for Repairing Deep Neural Networks'
    intro:
      en: Repairs faulty neural networks by letting formal verification results guide the synthesis of the fix.
      zh: 以形式化验证结果指导修复合成来修补缺陷神经网络。
    link: https://dl.acm.org/doi/10.1145/3597503.3623332
  - venue: ISSTA 2025
    title: 'S-Eval: Automatic and Adaptive Test Generation for Benchmarking Safety Evaluation of Large Language
      Models'
    intro:
      en: An automatic, adaptive test-generation framework that builds large-scale benchmarks for evaluating LLM
        safety — released with an open dataset and a public leaderboard.
      zh: 一种自动且自适应的测试生成框架，为大语言模型安全评估构建大规模基准，并开放数据集与公开排行榜。
    link: https://www.arxiv.org/abs/2405.14191
    project: https://s-eval.github.io/
    code: https://github.com/IS2Lab/S-Eval
  - venue: NDSS 2026
    title: Rounding-Guided Backdoor Injection in Deep Learning Model Quantization
    intro:
      en: 'Reveals a new attack surface: backdoors that stay dormant in a full-precision model and activate only
        after quantization rounding — exposing real risks in on-device model deployment.'
      zh: 揭示一种全新攻击面：后门在全精度模型中保持休眠，仅在量化舍入后被激活，暴露端侧模型部署的真实风险。
    link: https://arxiv.org/abs/2510.09647
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
---
