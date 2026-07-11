/* =========================================================
   IS2 Lab — content data (single source of truth)
   Edit here to update BOTH English and Chinese versions.
   Proper names, venues and author-positions are kept as-is
   (universal academic shorthand). Prose is fully bilingual.
   ========================================================= */

window.IS2_DATA = {

  /* ---------------- TEAM ---------------- */
  faculty: [
    {
      photo: "images/teampic/wangjingyi2.jpg",
      name: "Jingyi Wang",
      role: { en: "Assistant Professor (Tenure Track)", zh: "助理教授（长聘教轨）" },
      email: "wangjyee@gmail.com",
      homepage: "https://wang-jingyi.github.io/",
      edu: {
        en: [
          "B.E., Xi'an Jiaotong University, China",
          "Ph.D., Singapore University of Technology and Design, supervised by Prof. Jun Sun",
          "Research Fellow, National University of Singapore, supervised by Prof. Jin Song Dong"
        ],
        zh: [
          "学士，西安交通大学",
          "博士，新加坡科技设计大学，导师 Jun Sun 教授",
          "研究员（Research Fellow），新加坡国立大学，导师 Jin Song Dong 教授"
        ]
      }
    }
  ],

  postdocs: [
    {
      photo: "images/teampic/chenjialuo.jpg", name: "Jialuo Chen",
      role: { en: "Co-supervision with Ant Group", zh: "与蚂蚁集团联合培养" },
      edu: { en: ["B.E. and Ph.D., Zhejiang University"], zh: ["学士、博士，浙江大学"] }
    },
    {
      photo: "images/teampic/shenxicong.jpg", name: "Xicong Shen",
      role: { en: "Co-supervision with Alibaba Group", zh: "与阿里巴巴集团联合培养" },
      edu: { en: ["Ph.D., Zhejiang University"], zh: ["博士，浙江大学"] }
    },
    {
      photo: "images/teampic/buhao.jpg", name: "Hao Bu",
      role: { en: "Co-supervision with Ant Group", zh: "与蚂蚁集团联合培养" },
      edu: { en: ["B.E. and Ph.D., Peking University"], zh: ["学士、博士，北京大学"] }
    }
  ],

  phd: [
    // {
    //   photo: "images/teampic/Xiangxiang_Chen.jpg", name: "Xiangxiang Chen",
    //   role: { en: "PhD Student · 2021 fall", zh: "博士生 · 2021 秋季入学" },
    //   edu: {
    //     en: ["B.E., Xi'an Jiaotong University",
    //       "Intern at Ant Group; Visiting PhD at NUS (Prof. Jin Song Dong)",
    //       "NDSS 26 1st author, WWW 26 1st author, TOSEM 24 1st author, TSE 23 4th author"],
    //     zh: ["学士，西安交通大学",
    //       "蚂蚁集团实习；新加坡国立大学访问博士生（Jin Song Dong 教授）",
    //       "NDSS 26 第一作者，WWW 26 第一作者，TOSEM 24 第一作者，TSE 23 第四作者"]
    //   }
    // },
    {
      photo: "images/teampic/Xiaoxia_Liu.jpg", name: "Xiaoxia Liu",
      role: { en: "PhD Student · 2022 fall", zh: "博士生 · 2022 秋季入学" },
      edu: {
        en: ["B.E., Jilin University",
          "Intern at Ant Group; Visiting PhD at NTU (Prof. Yang Liu)",
          "CSUR 26 1st author, TSE 25 1st author, IST 25 1st author, ISSTA 25, TSE 25"],
        zh: ["学士，吉林大学",
          "蚂蚁集团实习；南洋理工大学访问博士生（Yang Liu 教授）",
          "CSUR 26 第一作者，TSE 25 第一作者，IST 25 第一作者，ISSTA 25，TSE 25"]
      }
    },
    {
      photo: "images/teampic/Xuran_Li.jpg", name: "Xuran Li",
      role: { en: "PhD Student · 2022 fall", zh: "博士生 · 2022 秋季入学" },
      edu: {
        en: ["B.E., Tongji University",
          "Neural Networks 1st author, ESWA 1st author, CAC 25 1st author"],
        zh: ["学士，同济大学",
          "Neural Networks 第一作者，ESWA 第一作者，CAC 25 第一作者"]
      }
    },
    {
      photo: "images/teampic/zihan.jpg", name: "Zihan Liu",
      role: { en: "PhD Student · 2023 fall", zh: "博士生 · 2023 秋季入学" },
      edu: {
        en: ["B.E., Zhejiang University", "TSE 26 1st author"],
        zh: ["学士，浙江大学", "TSE 26 第一作者"]
      }
    },
    {
      photo: "images/teampic/zhaoming.jpg", name: "Zhaoming Miao",
      role: { en: "PhD Student · 2023 fall", zh: "博士生 · 2023 秋季入学" },
      edu: {
        en: ["B.E., Shandong University", "M.Sc., Shandong University"],
        zh: ["学士，山东大学", "硕士，山东大学"]
      }
    },
    {
      photo: "images/teampic/anxinyuan.jpg", name: "Xinyuan An",
      role: { en: "PhD Student · 2024 fall", zh: "博士生 · 2024 秋季入学" },
      edu: {
        en: ["B.E., Zhejiang University", "CVPR 26 1st author, ACL 26 1st author"],
        zh: ["学士，浙江大学", "CVPR 26 第一作者，ACL 26 第一作者"]
      }
    },
    {
      photo: "images/teampic/liyitong.jpg", name: "Yitong Li",
      role: { en: "PhD Student · 2024 fall", zh: "博士生 · 2024 秋季入学" },
      edu: {
        en: ["B.E., China University of Geosciences (Beijing)",
          "M.Sc., Nanjing University of Science and Technology"],
        zh: ["学士，中国地质大学（北京）", "硕士，南京理工大学"]
      }
    },
    {
      photo: "images/teampic/maxiaolin.jpg", name: "Xiaolin Ma",
      role: { en: "PhD Student · 2025 fall", zh: "博士生 · 2025 秋季入学" },
      edu: {
        en: ["B.E., Zhejiang University", "ASE 25 2nd author, CAC 25 1st author"],
        zh: ["学士，浙江大学", "ASE 25 第二作者，CAC 25 第一作者"]
      }
    },
    {
      photo: "images/teampic/fuyuchuan.jpg", name: "Yuchuan Fu",
      role: { en: "PhD Student · 2025 fall", zh: "博士生 · 2025 秋季入学" },
      edu: { en: ["B.E., Xi'an Jiaotong University"], zh: ["学士，西安交通大学"] }
    },
    {
      photo: "images/teampic/jianan.jpg", name: "Jianan Ma",
      role: { en: "Exchange PhD (Hangzhou Dianzi Univ.) · 2023 fall", zh: "联合培养博士生（杭州电子科技大学）· 2023 秋季" },
      edu: {
        en: ["B.E., Hangzhou Dianzi University",
          "ICSE 24 1st author, CCS 25 1st author, ICSE 25 2nd author"],
        zh: ["学士，杭州电子科技大学",
          "ICSE 24 第一作者，CCS 25 第一作者，ICSE 25 第二作者"]
      }
    }
  ],

  master: [
    {
      photo: "images/teampic/masongye.jpg", name: "Songye Ma",
      role: { en: "Master Student · 2024 fall", zh: "硕士生 · 2024 秋季入学" },
      edu: { en: ["B.E., Harbin Institute of Technology"], zh: ["学士，哈尔滨工业大学"] }
    },
    {
      photo: "images/teampic/linhaiqing.jpg", name: "Haiqing Lin",
      role: { en: "Master Student · 2024 fall", zh: "硕士生 · 2024 秋季入学" },
      edu: { en: ["B.E., Hohai University"], zh: ["学士，河海大学"] }
    },
    {
      photo: "images/teampic/wangminghe.jpg", name: "Minghe Wang",
      role: { en: "Master Student · 2025 fall", zh: "硕士生 · 2025 秋季入学" },
      edu: { en: ["B.E., Zhejiang University"], zh: ["学士，浙江大学"] }
    }
  ],

  ra: [
    {
      photo: "images/teampic/fusiyue.jpg", name: "Siyue Fu",
      role: { en: "Research Assistant", zh: "科研助理" },
      edu: {
        en: ["B.Sc., Case Western Reserve University", "M.Sc., University of Sydney"],
        zh: ["学士，凯斯西储大学", "硕士，悉尼大学"]
      }
    }
  ],

  alumni: [
    { who: "Xiangxiang Chen", role: { en: "PhD 2021-2026 · NDSS 26, WWW 26, TOSEM 24, etc", zh: "博士 2021-2026 · NDSS 26、WWW 26、TOSEM 24等" }, where: { en: "Ant Group", zh: "蚂蚁金服蚂蚁星" } },
    { who: "Xiaohan Yuan", role: { en: "Master 2023-2026 · ISSTA 25, TOSEM 26, CAC 25, CSUR 26", zh: "硕士 2023-2026 · ISSTA 25、TOSEM 26、CAC 25、CSUR 26" }, where: { en: "Alibaba", zh: "阿里巴巴" } },
    { who: "Xinyao Xu", role: { en: "Master 2023-2026 · WWW 25 1st author", zh: "硕士 2023-2026 · WWW 25 第一作者" }, where: { en: "Bank of Communications HQ", zh: "交通银行总部" } },
    { who: "Weifang Zhang", role: { en: "Master 2023-2026 · CAC 25 1st author", zh: "硕士 2023-2026 · CAC 25 第一作者" }, where: { en: "Industry", zh: "企业界" } },
    { who: "Ziyu Mao", role: { en: "Master 2022-2025 · ICSE 25 1st author, WWW 25 co-1st; intern at Ant Group", zh: "硕士 2022-2025 · ICSE 25 第一作者、WWW 25 共同一作；蚂蚁集团实习" }, where: { en: "NUS", zh: "新加坡国立大学" } },
    { who: "Huan Sun", role: { en: "Co-supervised PhD 2020-2025 · visiting Imperial College London; CCS 25, ICFEM 25, FMICS 23", zh: "联合培养博士 2020-2025 · 帝国理工学院访问；CCS 25、ICFEM 25、FMICS 23" }, where: { en: "Shanghai AI Lab", zh: "上海人工智能实验室" } },
    { who: "Jialuo Chen", role: { en: "Co-supervised PhD 2020-2025 · visiting Oxford; S&P 22, TOSEM 22, ASE 24, ISSTA 24", zh: "联合培养博士 2020-2025 · 牛津大学访问；S&P 22、TOSEM 22、ASE 24、ISSTA 24" }, where: { en: "Ant Group", zh: "蚂蚁集团蚂蚁星" } },
    { who: "Shunkai Zhu", role: { en: "Co-supervised PhD 2019-2025 · TSE 24, TSE/TOSEM 25", zh: "联合培养博士 2019-2025 · TSE 24、TSE/TOSEM 25" }, where: { en: "China Mobile", zh: "中国移动" } },
    { who: "Xiangshan Gao", role: { en: "Co-supervised PhD 2019-2024 · ISSTA 24, TDSC 24/25", zh: "联合培养博士 2019-2024 · ISSTA 24、TDSC 24/25" }, where: { en: "Huawei", zh: "华为" } },
    { who: "Fan Zhou", role: { en: "Master 2021-2023 · intern at Meituan", zh: "硕士 2021-2023 · 美团实习" }, where: { en: "Industry", zh: "企业界" } },
    { who: "Huizhong Guo", role: { en: "Master 2021-2023 · intern at Alibaba; ISSTA 23 1st author", zh: "硕士 2021-2023 · 阿里巴巴实习；ISSTA 23 第一作者" }, where: { en: "PostDoc at NTU", zh: "南洋理工大学博士后" } },
    { who: "Ziyan Zhao", role: { en: "Visiting PhD 2023", zh: "访问博士生 2023" }, where: { en: "PhD at ZJU", zh: "浙江大学博士生" } },
    { who: "Yichun Gao", role: { en: "Research Assistant 2022 · IEEE Standard on NLP robustness", zh: "科研助理 2022 · 参与 IEEE NLP 鲁棒性标准" }, where: { en: "M.Sc. (full scholarship), McMaster University", zh: "麦克马斯特大学全奖硕士" } },
    { who: "Tinglan Peng", role: { en: "FYP student 2021 · IEEE S&P 2022 (3rd author)", zh: "毕业设计 2021 · IEEE S&P 2022 第三作者" }, where: { en: "Industry", zh: "企业界" } },
    { who: "Liyi Zhang", role: { en: "Research Intern 2020-2021", zh: "科研实习 2020-2021" }, where: { en: "M.Sc., University of Waterloo", zh: "滑铁卢大学硕士" } }
  ],

  /* ---------------- NEWS ---------------- */
  news: [
    { d: { en: "Mar 2026", zh: "2026 年 3 月" }, t: { en: "Prof. Wang will serve as PC of ICSE 2027, FSE 2027 and USENIX Security 2027 — consider submitting your work!", zh: "王老师将担任 ICSE 2027, FSE 2027和USENIX Security 2027 程序委员会委员，欢迎投稿！" } },
    { d: { en: "Feb 2026", zh: "2026 年 2 月" }, t: { en: "Prof. Wang will serve as PC chair of SETTA 2026 — consider submitting your work!", zh: "王老师将担任 SETTA 2026 程序委员会主席，欢迎投稿！" } },
    { d: { en: "Jan 2026", zh: "2026 年 1 月" }, t: { en: "One paper accepted by The Web Conference — congrats to Xiangxiang!", zh: "一篇论文被 The Web Conference 录用，恭喜翔翔！" } },
    { d: { en: "Dec 2025", zh: "2025 年 12 月" }, t: { en: "One paper accepted by ACM Computing Surveys — congrats to Xiaoxia!", zh: "一篇论文被 ACM Computing Surveys 录用，恭喜晓夏！" } },
    { d: { en: "Dec 2025", zh: "2025 年 12 月" }, t: { en: "One paper accepted by ESWA — congrats to Xuran!", zh: "一篇论文被 ESWA 录用，恭喜旭冉！" } },
    { d: { en: "Dec 2025", zh: "2025 年 12 月" }, t: { en: "Two papers accepted by Journal of Software — congrats to Huan and Cheng!", zh: "两篇论文被《软件学报》录用，恭喜孙欢和文成！" } },
    { d: { en: "Dec 2025", zh: "2025 年 12 月" }, t: { en: "Huan successfully defended his PhD thesis — congrats!", zh: "孙欢顺利通过博士论文答辩，祝贺！" } },
    { d: { en: "Nov 2025", zh: "2025 年 11 月" }, t: { en: "Prof. Wang co-organized the LLM and FM workshop at ChinaSoft 2025 — thanks to all speakers and attendees!", zh: "王老师在 ChinaSoft 2025 联合组织了「大模型与形式化方法」研讨会，感谢各位讲者与参会者！" } },
    { d: { en: "Nov 2025", zh: "2025 年 11 月" }, t: { en: "ICFEM 2025 was successfully held in Hangzhou; Prof. Wang served as PC Co-chair. Thanks to all involved!", zh: "ICFEM 2025 在杭州成功举办，王老师担任程序委员会共同主席，感谢各位委员、作者与参会者！" } },
    { d: { en: "Sep 2025", zh: "2025 年 9 月" }, t: { en: "Prof. Wang will serve as PC of CCS 2026 and Track Co-chair of SAC/SVT 2026.", zh: "王老师将担任 CCS 2026 程序委员会委员及 SAC/SVT 2026 分会共同主席。" } },
    { d: { en: "Aug 2025", zh: "2025 年 8 月" }, t: { en: "Three papers accepted by CAC 2025 — congrats to Xuran, Weifang and Xiaolin!", zh: "三篇论文被 CAC 2025 录用，恭喜旭冉、维芳和晓霖！" } },
    { d: { en: "Aug 2025", zh: "2025 年 8 月" }, t: { en: "One paper accepted by CCS 2025 — congrats to Huan!", zh: "一篇论文被 CCS 2025 录用，恭喜孙欢！" } },
    { d: { en: "Aug 2025", zh: "2025 年 8 月" }, t: { en: "One paper accepted by NDSS 2026 — congrats to Xiangxiang!", zh: "一篇论文被 NDSS 2026 录用，恭喜翔翔！" } },
    { d: { en: "Aug 2025", zh: "2025 年 8 月" }, t: { en: "\"Towards Verifiable Federated Unlearning\" won the Best Paper Award Runner-up of IEEE TDSC 2024 — big congrats to Xiangshan!", zh: "论文《Towards Verifiable Federated Unlearning》获 IEEE TDSC 2024 最佳论文亚军，热烈祝贺向姗！" } },
    { d: { en: "Aug 2025", zh: "2025 年 8 月" }, t: { en: "One paper accepted by CCS 2025 — congrats to Jianan!", zh: "一篇论文被 CCS 2025 录用，恭喜迦南！" } },
    { d: { en: "May 2025", zh: "2025 年 5 月" }, t: { en: "Jialuo and Shunkai successfully defended their PhD theses — congrats!", zh: "伽洛与舜凯顺利通过博士论文答辩，祝贺！" } },
    { d: { en: "Apr 2025", zh: "2025 年 4 月" }, t: { en: "A paper on optimal symbolic execution accepted by TSE 2025 — congrats to Shunkai!", zh: "一篇关于最优符号执行的论文被 TSE 2025 录用，恭喜舜凯！" } },
    { d: { en: "Mar 2025", zh: "2025 年 3 月" }, t: { en: "S-Eval accepted by ISSTA 2025 — congrats to Xiaohan!", zh: "S-Eval 被 ISSTA 2025 录用，恭喜肖瀚！" } },
    { d: { en: "Mar 2025", zh: "2025 年 3 月" }, t: { en: "Prof. Wang will serve as PC of ASE 2025 and ISSRE 2025.", zh: "王老师将担任 ASE 2025 与 ISSRE 2025 程序委员会委员。" } },
    { d: { en: "Jan 2025", zh: "2025 年 1 月" }, t: { en: "One paper accepted by WWW 2025 — congrats to Xinyao!", zh: "一篇论文被 WWW 2025 录用，恭喜欣瑶！" } },
    { d: { en: "Jan 2025", zh: "2025 年 1 月" }, t: { en: "Two papers accepted by ICSE 2025 — congrats to Ziyu and Zhiming!", zh: "两篇论文被 ICSE 2025 录用，恭喜梓宇和智名！" } },
    { d: { en: "Nov 2024", zh: "2024 年 11 月" }, t: { en: "ICFEM 2025 to be held in Hangzhou; Prof. Wang to serve as PC Co-chair.", zh: "ICFEM 2025 将在杭州举办，王老师将担任程序委员会共同主席。" } },
    { d: { en: "Oct 2024", zh: "2024 年 10 月" }, t: { en: "Prof. Wang will serve as PC of ACM CCS 2025.", zh: "王老师将担任 ACM CCS 2025 程序委员会委员。" } },
    { d: { en: "Oct 2024", zh: "2024 年 10 月" }, t: { en: "A paper on TVM fuzzing accepted by TOSEM — congrats to Xiangxiang!", zh: "一篇关于 TVM 模糊测试的论文被 TOSEM 录用，恭喜翔翔！" } },
    { d: { en: "May 2024", zh: "2024 年 5 月" }, t: { en: "We released S-Eval, our (largest-to-date) automatic & adaptive safety benchmark for LLMs. See paper, GitHub and the HuggingFace leaderboard.", zh: "我们发布了 S-Eval —— 迄今规模最大、基于自动自适应测试生成的大模型安全评测基准，详见论文、GitHub 及 HuggingFace 排行榜。" } },
    { d: { en: "Apr 2024", zh: "2024 年 4 月" }, t: { en: "Prof. Wang will serve as PC of ISSTA 2025.", zh: "王老师将担任 ISSTA 2025 程序委员会委员。" } },
    { d: { en: "Apr 2024", zh: "2024 年 4 月" }, t: { en: "Jianan and Prof. Wang presented our DNN repair paper at ICSE 2024.", zh: "迦南与王老师在 ICSE 2024 报告了我们的深度神经网络修复工作。" } },
    { d: { en: "Mar 2024", zh: "2024 年 3 月" }, t: { en: "Prof. Wang will serve as PC of ISSRE 2024 and ChinaSoft/FMAC 2024.", zh: "王老师将担任 ISSRE 2024 与 ChinaSoft/FMAC 2024 程序委员会委员。" } },
    { d: { en: "Mar 2024", zh: "2024 年 3 月" }, t: { en: "Xiaoxia gave an invited talk on our LLM prompting-frameworks survey at the AGI Leap Summit and won its Best Paper Award — congrats!", zh: "晓夏受邀在 AGI Leap Summit 报告我们关于大模型提示框架的综述，并荣获峰会最佳论文奖，祝贺！" } },
    { d: { en: "Feb 2024", zh: "2024 年 2 月" }, t: { en: "A paper on neural network debugging accepted by ISSTA 2024 — congrats to Jialuo!", zh: "一篇关于神经网络调试的论文被 ISSTA 2024 录用，恭喜伽洛！" } },
    { d: { en: "Aug 2023", zh: "2023 年 8 月" }, t: { en: "Huan will visit Prof. Philippa Gardner's group at Imperial College London on concurrent program verification — congrats!", zh: "孙欢将赴帝国理工学院 Philippa Gardner 教授课题组访问，研究并发程序验证，祝贺！" } },
    { d: { en: "Aug 2023", zh: "2023 年 8 月" }, t: { en: "A paper on neural network repair accepted by ICSE 2024 — congrats to Jianan!", zh: "一篇关于神经网络修复的论文被 ICSE 2024 录用，恭喜迦南！" } },
    { d: { en: "Jul 2023", zh: "2023 年 7 月" }, t: { en: "Jialuo will visit Prof. Marta Kwiatkowska's group at Oxford on AI safety — congrats!", zh: "伽洛将赴牛津大学 Marta Kwiatkowska 教授课题组访问，研究人工智能安全，祝贺！" } },
    { d: { en: "May 2023", zh: "2023 年 5 月" }, t: { en: "A paper on reducing the attack surface of Node.js accepted by CCS 2023 — congrats to Wenya!", zh: "一篇关于降低 Node.js 攻击面的论文被 CCS 2023 录用，恭喜文雅！" } },
    { d: { en: "Jan 2023", zh: "2023 年 1 月" }, t: { en: "A paper on fairness testing of deep recommender systems accepted by ISSTA 2023 — congrats to Huizhong!", zh: "一篇关于深度推荐系统公平性测试的论文被 ISSTA 2023 录用，恭喜辉忠！" } },
    { d: { en: "Dec 2022", zh: "2022 年 12 月" }, t: { en: "A paper on robustness testing of DNNs accepted by TOSEM — congrats to Jialuo!", zh: "一篇关于深度神经网络鲁棒性测试的论文被 TOSEM 录用，恭喜伽洛！" } },
    { d: { en: "Dec 2021", zh: "2021 年 12 月" }, t: { en: "A paper on copyright protection of deep learning models accepted by IEEE S&P 2022 — congrats to Jialuo!", zh: "一篇关于深度学习模型版权保护的论文被 IEEE S&P 2022 录用，恭喜伽洛！" } },
    { d: { en: "Dec 2021", zh: "2021 年 12 月" }, t: { en: "A paper on fairness testing of deep learning models accepted by ICSE 2022 — congrats to Haibin!", zh: "一篇关于深度学习模型公平性测试的论文被 ICSE 2022 录用，恭喜海斌！" } }
  ],

  /* ---------------- RESEARCH ---------------- */
  sponsors: [
    { en: "NSFC", zh: "国家自然科学基金", logo: "images/sponsors/nsfc.png", url: "https://www.nsfc.gov.cn/" },
    { en: "MOST", zh: "国家科技部", logo: "images/sponsors/most.png", url: "https://www.most.gov.cn/index.html" },
    { en: "ZJKJT", zh: "浙江省科技厅", logo: "images/sponsors/zj.png", url: "https://kjt.zj.gov.cn/" },
    { en: "SKLICT", zh: "工业控制技术全国重点实验室", logo: "images/sponsors/sklict.png", url: "https://sklict.zju.edu.cn/" },
    { en: "CCF", zh: "中国计算机学会", logo: "images/sponsors/ccf.png", url: "https://www.ccf.org.cn/" },
    { en: "Huawei", zh: "华为", logo: "images/sponsors/huawei.png", url: "https://www.huawei.com/" },
    { en: "Alibaba Group", zh: "阿里巴巴集团", logo: "images/sponsors/alibaba.png", url: "https://www.alibabagroup.com/" },
    { en: "Ant Group", zh: "蚂蚁集团", logo: "images/sponsors/ant-group.png", url: "https://www.antgroup.com/" },
    { en: "UWinTech", zh: "优稳自动化", logo: "images/sponsors/uwintech.png", url: "https://www.uwntek.com/" }
  ],
  tracks: [
    {
      cls: "track-1",
      tag: { en: "Pillar 01", zh: "方向 01" },
      title: { en: "Formal Reasoning of Security", zh: "形式化安全推理" },
      lede: {
        en: "Formal guarantees for the foundational software that safety-critical systems run on.",
        zh: "为安全攸关系统所依赖的基础软件提供可证明安全保障。"
      },
      body: {
        en: "The software stack is the core driving force behind safety-critical industrial and autonomous systems. We formally model, verify, monitor and enforce correctness and security across foundational layers \u2014 OS kernels, compilers, security protocols, smart contracts and industrial control programs \u2014 increasingly aided by AI to scale formal methods to real-world systems.",
        zh: "\u8f6f\u4ef6\u6808\u662f\u5b89\u5168\u6538\u5173\u7684\u5de5\u4e1a\u4e0e\u81ea\u4e3b\u7cfb\u7edf\u7684\u6838\u5fc3\u9a71\u52a8\u529b\u3002\u6211\u4eec\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u3001\u7f16\u8bd1\u5668\u3001\u5b89\u5168\u534f\u8bae\u3001\u667a\u80fd\u5408\u7ea6\u4e0e\u5de5\u4e1a\u63a7\u5236\u7a0b\u5e8f\u7b49\u57fa\u7840\u8f6f\u4ef6\u5c42\u8fdb\u884c\u5f62\u5f0f\u5316\u5efa\u6a21\u3001\u9a8c\u8bc1\u3001\u76d1\u6d4b\u4e0e\u6027\u8d28\u5f3a\u5236\uff0c\u5e76\u8d8a\u6765\u8d8a\u591a\u5730\u501f\u52a9 AI \u5c06\u5f62\u5f0f\u5316\u65b9\u6cd5\u6269\u5c55\u5230\u771f\u5b9e\u7cfb\u7edf\u3002"
      },
      venues: ["CCS 25", "ICSE 25", "WWW 25", "ASE 25", "TSE 23", "CCS 23", "TSE 21", "ICSE 18", "FM 18"],
      highlights: [
        {
          v: "ICSE 2025",
          title: "LLM-aided Automatic Modelling for Security Protocol Verification",
          intro: {
            en: "Uses large language models to automatically construct the formal models that protocol verification normally demands by hand, lowering the expertise barrier to machine-checked security-protocol analysis.",
            zh: "\u501f\u52a9\u5927\u8bed\u8a00\u6a21\u578b\u81ea\u52a8\u6784\u5efa\u534f\u8bae\u9a8c\u8bc1\u901a\u5e38\u9700\u8981\u624b\u5de5\u5b8c\u6210\u7684\u5f62\u5f0f\u5316\u6a21\u578b\uff0c\u964d\u4f4e\u4e86\u673a\u5668\u53ef\u68c0\u9a8c\u534f\u8bae\u5206\u6790\u7684\u5efa\u6a21\u95e8\u69db\u3002"
          },
          link: "https://www.computer.org/csdl/proceedings-article/icse/2025/056900a734/251mHfUjxMk"
        },
        {
          v: "ASE 2025 \u00b7 Industry",
          title: "Securing Millions of Decentralized Identities in Alipay with End-to-End Formal Verification",
          intro: {
            en: "An industry-scale deployment applying end-to-end formal verification to the decentralized-identity system inside the Alipay super app, protecting millions of real users.",
            zh: "\u5de5\u4e1a\u7ea7\u5b9e\u8df5\uff1a\u5c06\u7aef\u5230\u7aef\u5f62\u5f0f\u5316\u9a8c\u8bc1\u5e94\u7528\u4e8e\u652f\u4ed8\u5b9d\u8d85\u7ea7 App \u7684\u53bb\u4e2d\u5fc3\u5316\u8eab\u4efd\u7cfb\u7edf\uff0c\u4e3a\u6570\u767e\u4e07\u771f\u5b9e\u7528\u6237\u63d0\u4f9b\u5b89\u5168\u4fdd\u969c\u3002"
          },
          link: "https://ieeexplore.ieee.org/document/11334285"
        },
        {
          v: "CCS 2025",
          title: "Generalized Security-Preserving Refinement for Concurrent Systems",
          intro: {
            en: "Extends refinement-based reasoning so that security properties are provably preserved as concurrent systems are refined down toward their implementations.",
            zh: "\u63a8\u5e7f\u57fa\u4e8e\u7cbe\u5316\u7684\u63a8\u7406\u65b9\u6cd5\uff0c\u4f7f\u5e76\u53d1\u7cfb\u7edf\u5728\u5411\u5177\u4f53\u5b9e\u73b0\u7cbe\u5316\u7684\u8fc7\u7a0b\u4e2d\u53ef\u8bc1\u660e\u5730\u4fdd\u6301\u5b89\u5168\u6027\u8d28\u3002"
          },
          link: "https://dl.acm.org/doi/10.1145/3719027.3765138"
        },
        {
          v: "WWW 2025",
          title: "Quantitative Runtime Monitoring of Ethereum Transaction Attacks",
          intro: {
            en: "Brings quantitative runtime monitoring to blockchain, detecting attacks against Ethereum transactions as they unfold rather than after the fact.",
            zh: "\u5c06\u5b9a\u91cf\u8fd0\u884c\u65f6\u76d1\u63a7\u5f15\u5165\u533a\u5757\u94fe\uff0c\u5728\u653b\u51fb\u53d1\u751f\u8fc7\u7a0b\u4e2d\u800c\u975e\u4e8b\u540e\u68c0\u6d4b\u9488\u5bf9\u4ee5\u592a\u574a\u4ea4\u6613\u7684\u653b\u51fb\u3002"
          },
          link: "https://dl.acm.org/doi/abs/10.1145/3696410.3714682"
        }
      ]
    },
    {
      cls: "track-2",
      tag: { en: "Pillar 02", zh: "方向 02" },
      title: { en: "Software Engineering for AI (SE4AI)", zh: "\u9762\u5411\u4eba\u5de5\u667a\u80fd\u7684\u8f6f\u4ef6\u5de5\u7a0b\uff08SE4AI\uff09" },
      lede: {
        en: "Testing, verifying and repairing AI models and AI-enabled systems.",
        zh: "\u5bf9 AI \u6a21\u578b\u4e0e AI \u8d4b\u80fd\u7cfb\u7edf\u8fdb\u884c\u6d4b\u8bd5\u3001\u9a8c\u8bc1\u4e0e\u4fee\u590d\u3002"
      },
      body: {
        en: "Emerging AI \u2014 deep neural networks and large language models, AI-based cyber-physical systems, and LLM agents \u2014 is mostly built on software, so its trustworthiness must be assured from a software-engineering perspective. We build systematic testing, verification and repair frameworks that evaluate, locate and fix risks in AI across robustness, fairness, copyright and safety.",
        zh: "\u65b0\u5174\u7684\u4eba\u5de5\u667a\u80fd\u2014\u2014\u6df1\u5ea6\u795e\u7ecf\u7f51\u7edc\u4e0e\u5927\u8bed\u8a00\u6a21\u578b\u3001\u57fa\u4e8e AI \u7684\u4fe1\u606f\u7269\u7406\u7cfb\u7edf\u4ee5\u53ca\u5927\u6a21\u578b\u667a\u80fd\u4f53\u2014\u2014\u5927\u591a\u6784\u5efa\u4e8e\u8f6f\u4ef6\u4e4b\u4e0a\uff0c\u56e0\u6b64\u5fc5\u987b\u4ece\u8f6f\u4ef6\u5de5\u7a0b\u89c6\u89d2\u4fdd\u969c\u5176\u53ef\u4fe1\u6027\u3002\u6211\u4eec\u6784\u5efa\u7cfb\u7edf\u5316\u7684\u6d4b\u8bd5\u3001\u9a8c\u8bc1\u4e0e\u4fee\u590d\u6846\u67b6\uff0c\u4ece\u9c81\u68d2\u6027\u3001\u516c\u5e73\u6027\u3001\u7248\u6743\u4e0e\u5b89\u5168\u7b49\u7ef4\u5ea6\u8bc4\u4f30\u3001\u5b9a\u4f4d\u5e76\u4fee\u590d AI \u4e2d\u7684\u98ce\u9669\u3002"
      },
      venues: ["ISSTA 25", "ICSE 24", "ISSTA 24", "TOSEM 24", "ICSE 22", "ICSE 21", "TSE 21", "TACAS 21", "ICSE 20", "ASE 20", "ICSE 19"],
      highlights: [
        {
          v: "ICSE 2020",
          title: "White-box Fairness Testing through Adversarial Sampling",
          intro: {
            en: "A white-box technique that uses adversarial sampling to surface individual-discrimination defects in neural networks \u2014 a foundational result in fairness testing.",
            zh: "\u4e00\u79cd\u901a\u8fc7\u5bf9\u6297\u91c7\u6837\u63ed\u793a\u795e\u7ecf\u7f51\u7edc\u4e2d\u4e2a\u4f53\u6b67\u89c6\u7f3a\u9677\u7684\u767d\u76d2\u65b9\u6cd5\uff0c\u662f\u516c\u5e73\u6027\u6d4b\u8bd5\u9886\u57df\u7684\u5960\u57fa\u6027\u6210\u679c\u3002"
          },
          link: "https://dl.acm.org/doi/10.1145/3377811.3380331",
          award: { en: "ACM SIGSOFT Distinguished Paper \u00b7 Research Highlights", zh: "ACM SIGSOFT \u6770\u51fa\u8bba\u6587\u5956 \u00b7 Research Highlights" }
        },
        {
          v: "ICSE 2021",
          title: "RobOT: Robustness-Oriented Testing for Deep Learning Systems",
          intro: {
            en: "Defines robustness-oriented test metrics and generation so that the tests you run measurably strengthen a model's robustness, not merely its accuracy.",
            zh: "\u63d0\u51fa\u9762\u5411\u9c81\u68d2\u6027\u7684\u6d4b\u8bd5\u5ea6\u91cf\u4e0e\u7528\u4f8b\u751f\u6210\u65b9\u6cd5\uff0c\u4f7f\u6d4b\u8bd5\u4e0d\u4ec5\u63d0\u5347\u51c6\u786e\u7387\uff0c\u66f4\u53ef\u5ea6\u91cf\u5730\u589e\u5f3a\u6a21\u578b\u9c81\u68d2\u6027\u3002"
          },
          link: "https://dl.acm.org/doi/10.1109/ICSE43902.2021.00038"
        },
        {
          v: "ICSE 2024",
          title: "VeRe: Verification Guided Synthesis for Repairing Deep Neural Networks",
          intro: {
            en: "Repairs faulty neural networks by letting formal verification results guide the synthesis of the fix, so the patched network ships with provable guarantees.",
            zh: "\u4ee5\u5f62\u5f0f\u5316\u9a8c\u8bc1\u7ed3\u679c\u6307\u5bfc\u4fee\u590d\u5408\u6210\u6765\u4fee\u8865\u7f3a\u9677\u795e\u7ecf\u7f51\u7edc\uff0c\u4f7f\u4fee\u590d\u540e\u7684\u7f51\u7edc\u5177\u5907\u53ef\u8bc1\u660e\u7684\u4fdd\u8bc1\u3002"
          },
          link: "https://dl.acm.org/doi/10.1145/3597503.3623332"
        },
        {
          v: "ISSTA 2025",
          title: "S-Eval: Automatic and Adaptive Test Generation for Safety Evaluation of LLMs",
          intro: {
            en: "An automatic, adaptive test-generation framework that builds large-scale benchmarks for evaluating LLM safety \u2014 released with an open dataset and a public leaderboard.",
            zh: "\u4e00\u79cd\u81ea\u52a8\u4e14\u81ea\u9002\u5e94\u7684\u6d4b\u8bd5\u751f\u6210\u6846\u67b6\uff0c\u4e3a\u5927\u8bed\u8a00\u6a21\u578b\u5b89\u5168\u8bc4\u4f30\u6784\u5efa\u5927\u89c4\u6a21\u57fa\u51c6\uff0c\u5e76\u5f00\u653e\u6570\u636e\u96c6\u4e0e\u516c\u5f00\u6392\u884c\u699c\u3002"
          },
          link: "https://www.arxiv.org/abs/2405.14191",
          project: "https://s-eval.github.io/",
          code: "https://github.com/IS2Lab/S-Eval"
        }
      ]
    },
    {
      cls: "track-3",
      tag: { en: "Pillar 03", zh: "方向 03" },
      title: { en: "AI Safety, Security & Ethics", zh: "\u4eba\u5de5\u667a\u80fd\u5b89\u5168\u4e0e\u4f26\u7406" },
      lede: {
        en: "Understanding and defending the safety of LLMs, agents and embodied intelligence.",
        zh: "\u8ba4\u77e5\u5e76\u5b88\u62a4\u5927\u6a21\u578b\u3001\u667a\u80fd\u4f53\u4e0e\u5177\u8eab\u667a\u80fd\u7684\u5b89\u5168\u3002"
      },
      body: {
        en: "As large language models, agents and embodied intelligence enter the real world, new classes of risk emerge \u2014 backdoors, unauthorized model copying, unverifiable data removal and unsafe behavior. We study these threats and build the defenses, benchmarks and guarantees that let powerful AI be deployed responsibly.",
        zh: "\u968f\u7740\u5927\u8bed\u8a00\u6a21\u578b\u3001\u667a\u80fd\u4f53\u4e0e\u5177\u8eab\u667a\u80fd\u8d70\u5411\u771f\u5b9e\u4e16\u754c\uff0c\u540e\u95e8\u653b\u51fb\u3001\u672a\u6388\u6743\u6a21\u578b\u6284\u88ad\u3001\u65e0\u6cd5\u9a8c\u8bc1\u7684\u6570\u636e\u5220\u9664\u4e0e\u4e0d\u5b89\u5168\u884c\u4e3a\u7b49\u65b0\u578b\u98ce\u9669\u968f\u4e4b\u800c\u6765\u3002\u6211\u4eec\u7814\u7a76\u8fd9\u4e9b\u5a01\u80c1\uff0c\u5e76\u6784\u5efa\u9632\u5fa1\u3001\u57fa\u51c6\u4e0e\u4fdd\u8bc1\uff0c\u4f7f\u5f3a\u5927\u7684 AI \u80fd\u591f\u88ab\u8d1f\u8d23\u4efb\u5730\u90e8\u7f72\u3002"
      },
      venues: ["S&P 22", "NDSS 26", "WWW 26", "TDSC 24", "CSUR", "TOSEM 22"],
      highlights: [
        {
          v: "S&P 2022",
          title: "Copy, Right? A Testing Framework for Copyright Protection of Deep Learning Models",
          intro: {
            en: "A testing framework that fingerprints deep learning models to detect unauthorized copying, published at IEEE S&P \u2014 a top-tier security venue.",
            zh: "\u4e00\u79cd\u5bf9\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u8fdb\u884c\u6307\u7eb9\u6d4b\u8bd5\u3001\u4ee5\u68c0\u6d4b\u672a\u6388\u6743\u6284\u88ad\u7684\u6846\u67b6\uff0c\u53d1\u8868\u4e8e\u9876\u7ea7\u5b89\u5168\u4f1a\u8bae IEEE S&P\u3002"
          },
          link: "https://ieeexplore.ieee.org/document/9833747"
        },
        {
          v: "TDSC 2024",
          title: "VERIFI: Towards Verifiable Federated Unlearning",
          intro: {
            en: "Lets a participant in federated learning verify that the server truly removed \u2014 \u2018unlearned\u2019 \u2014 its data, turning data deletion into something checkable rather than promised.",
            zh: "\u4f7f\u8054\u90a6\u5b66\u4e60\u4e2d\u7684\u53c2\u4e0e\u65b9\u80fd\u591f\u9a8c\u8bc1\u670d\u52a1\u5668\u662f\u5426\u771f\u6b63\u5220\u9664\uff08\u201c\u9057\u5fd8\u201d\uff09\u4e86\u5176\u6570\u636e\uff0c\u4f7f\u6570\u636e\u5220\u9664\u4ece\u201c\u627f\u8bfa\u201d\u53d8\u4e3a\u201c\u53ef\u9a8c\u8bc1\u201d\u3002"
          },
          link: "https://ieeexplore.ieee.org/document/10480645",
          award: { en: "Best Paper Award Runner-up", zh: "\u6700\u4f73\u8bba\u6587\u5956\u4e9a\u519b" }
        },
        {
          v: "NDSS 2026",
          title: "Rounding-Guided Backdoor Injection in Deep Learning Model Quantization",
          intro: {
            en: "Reveals a new attack surface: backdoors that stay dormant in a full-precision model and activate only after quantization rounding \u2014 exposing real risks in on-device model deployment.",
            zh: "\u63ed\u793a\u4e00\u79cd\u5168\u65b0\u653b\u51fb\u9762\uff1a\u540e\u95e8\u5728\u5168\u7cbe\u5ea6\u6a21\u578b\u4e2d\u4fdd\u6301\u4f11\u7720\uff0c\u4ec5\u5728\u91cf\u5316\u820d\u5165\u540e\u88ab\u6fc0\u6d3b\uff0c\u66b4\u9732\u7aef\u4fa7\u6a21\u578b\u90e8\u7f72\u7684\u771f\u5b9e\u98ce\u9669\u3002"
          },
          link: "https://arxiv.org/abs/2510.09647"
        },
        {
          v: "WWW 2026",
          title: "LLMQuA: Practical Backdoor Injection on Large Language Model Quantization",
          intro: {
            en: "Extends quantization backdoor attacks to large language models, showing the threat is practical at LLM scale and motivating defenses for quantized deployments.",
            zh: "\u5c06\u91cf\u5316\u540e\u95e8\u653b\u51fb\u62d3\u5c55\u81f3\u5927\u8bed\u8a00\u6a21\u578b\uff0c\u8bc1\u660e\u8be5\u5a01\u80c1\u5728\u5927\u6a21\u578b\u89c4\u6a21\u4e0b\u5207\u5b9e\u53ef\u884c\uff0c\u5e76\u4fc3\u4f7f\u9488\u5bf9\u91cf\u5316\u90e8\u7f72\u7684\u9632\u5fa1\u3002"
          },
          link: "https://dl.acm.org/doi/10.1145/3774904.3792256"
        }
      ]
    }
  ]
};
