<!-- REAL-WORLD PROBLEMS shown as picture cards on the home page, one column per research area.
     Each item: layer (an id from content/research.md: kernel, control, ai), image (in images/impact/),
     title, problem, impact (en:/zh:), and an optional link (an area page, a paper or a project page).
     Cards appear in the order of the areas, then in the order written here.
     Replace an illustration by dropping a photo (e.g. .jpg) in images/impact/ and pointing 'image' at it. -->

---
impact:
- layer: kernel
  image: images/impact/os-security.svg
  title:
    en: Security of OS kernels
    zh: 操作系统内核的安全
  problem:
    en: The OS kernel is the trusted foundation that isolates applications and enforces security policies; if it
      fails, nothing running above it can be trusted. Its concurrent components interleave in more ways than any
      test can cover, and a security property shown for an abstract design can silently break as the design is refined
      into an implementation.
    zh: 操作系统内核是隔离应用、执行安全策略的可信基础；一旦内核失守，其上运行的一切都无从可信。其并发组件的交错执行远超任何测试所能覆盖，在抽象设计上成立的安全性质也可能在逐步精化为实现的过程中悄然失效。
  impact:
    en: Security-preserving refinement, which guarantees that security properties proved on an abstract model still
      hold in its concurrent implementation (CCS 2025); rely-guarantee verification of a real-time OS kernel (μC/OS-II,
      FMICS 2023); and ASFuzz, which exposes asynchronous concurrency bugs in the Linux kernel (IEEE TIFS 2026).
    zh: 保安全精化，保证在抽象模型上证明的安全性质在其并发实现中依然成立（CCS 2025）；实时操作系统内核的 rely-guarantee 验证（μC/OS-II，FMICS 2023）；以及发现 Linux 内核异步并发缺陷的
      ASFuzz（IEEE TIFS 2026）。
  link: pillar.html?id=kernel
- layer: control
  image: images/impact/plc-plant.svg
  title:
    en: Verifying PLC programs together with the physical process
    zh: PLC 程序与物理过程的联合验证
  problem:
    en: A PLC program is only safe with respect to the plant it controls. Code that looks correct in isolation can
      still overflow a tank or drive a machine past its limits, and finding out on real equipment is costly and
      dangerous.
    zh: PLC 程序是否安全，取决于它所控制的物理对象。单独看来正确的代码，仍可能让水箱溢出或让设备越过安全边界，而在真实设备上发现这些问题代价高昂且危险。
  impact:
    en: Hybrid refinement logic (JoS 2026), which proves PLC programs and the physical processes they control safe
      together, built on K-ST, our formal executable semantics of Structured Text (TSE 2023).
    zh: 混成精化逻辑（JoS 2026）将 PLC 程序与其所控制的物理过程共同证明安全，其基础是我们为 ST 语言建立的形式化可执行语义 K-ST（TSE 2023）。
  link: pillar.html?id=control
- layer: ai
  image: images/impact/ai-spectrum.svg
  title:
    en: Trustworthy AI, from neural networks to LLMs and agents
    zh: 可信 AI：从神经网络到大模型与智能体
  problem:
    en: AI now ranges from neural networks in cars and control loops to LLMs and autonomous agents that act on users'
      behalf. Each can fail in ways that ordinary testing misses, and finding a defect is not the same as fixing
      it.
    zh: AI 已从汽车与控制回路中的神经网络，扩展到代表用户行动的大语言模型与自主智能体。它们都可能以常规测试难以发现的方式出错，而发现缺陷并不等于修复缺陷。
  impact:
    en: A line of work from systematic testing to provable repair. Robustness and fairness testing (ICSE 2020 Distinguished
      Paper, ICSE 2021) and LLM safety evaluation (S-Eval, ISSTA 2025) find the defects; verification-guided and
      provable repair fixes them with guarantees (ICSE 2024, CCS 2025).
    zh: 一条从系统化测试到可证明修复的研究主线：鲁棒性与公平性测试（ICSE 2020 杰出论文、ICSE 2021）与大模型安全评测（S-Eval，ISSTA 2025）负责发现缺陷；以验证为导向的可证明修复则以形式化保证修复缺陷（ICSE
      2024、CCS 2025）。
  link: pillar.html?id=ai
---
