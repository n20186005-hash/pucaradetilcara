export type Locale = "zh" | "en" | "es" | "it";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; eco: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string; description: { address: string; phone: string; category: string } };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  myths: { title: string; intro: string; items: { title: string; content: string }[] };
  curiosities: { title: string; content: string };
  eco: { title: string; intro: string; items: string[] };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; essentials: { icon: string; title: string; text: string }[] };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string; categories: { key: string; label: string }[] };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  siteMap: { title: string; intro: string; hint: string; cta: string; zones: { key: string; name: string; desc: string }[] };
  itinerary: { title: string; intro: string; steps: { time: string; title: string; text: string }[] };
  ctaBand: { title: string; subtitle: string; buttons: string[] };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

const PUCA_LINKS: LinkItem[] = [
  { name: "布宜诺斯艾利斯大学蒂尔卡拉中心 (Centro Universitario Tilcara - UBA)", url: "https://tilcara.filo.uba.ar/pucará-de-tilcara" },
  { name: "阿根廷国家政府官网 - 蒂尔卡拉古堡专页 (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/capital-humano/cultura/monumentos/sitio-arqueologico-pucara-de-tilcara" },
  { name: "联合国教科文组织世界遗产 - 乌马瓦卡峡谷 (UNESCO World Heritage)", url: "https://whc.unesco.org/es/list/1116/" },
  { name: "胡胡伊省文化与旅游部 (Ministerio de Cultura y Turismo de Jujuy)", url: "https://culturayturismo.jujuy.gob.ar" },
  { name: "阿根廷国家旅游局 (Visit Argentina)", url: "https://www.argentina.travel" },
];

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史与考古", architecture: "遗址结构", monuments: "游览体验", eco: "遗产保护", visiting: "参观信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: {
      tags: ["联合国教科文组织世界遗产", "前印加时期遗址", "海拔2,465米"],
      tagline: "阿根廷 · 胡胡伊省",
      title: "Pucará de Tilcara",
      subtitle: "蒂尔卡拉古堡 · 前印加堡垒 · 乌马瓦卡峡谷",
      cta: "探索这座千年堡垒",
      description: {
        address: "Y4624 Tilcara, Jujuy Province, 阿根廷",
        phone: "+54 388 422-1325",
        category: "历史古迹 · 考古遗址"
      }
    },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "千年堡垒的历史回响",
      intro: `Pucará de Tilcara（蒂尔卡拉古堡）矗立于乌马瓦卡峡谷（Quebrada de Humahuaca）的心脏地带，海拔约 **2,465 米**，是阿根廷西北部最重要、规模最大的前印加时期考古遗址之一。\n\n**奥马瓜卡人的战略要塞**\n"Pucará"在克丘亚语中意为"堡垒"或"要塞"。这座石砌城堡由奥马瓜卡（Omaguaca）原住民于公元 **12 至 13 世纪**建造，坐落于格兰德河（Río Grande）与瓦萨马约河（Huasamayo）交汇处上方约 80 米的天然高地上，控制着峡谷南北交通的咽喉要道。\n\n**安布罗塞蒂的考古发现**\n1908 年，阿根廷考古学先驱**胡安·包蒂斯塔·安布罗塞蒂（Juan Bautista Ambrosetti）**率领布宜诺斯艾利斯大学民族学博物馆团队对该遗址进行了首次系统性发掘。在 1910 年代，安布罗塞蒂对部分石墙和住宅进行了修复重建——这在当时的南美考古界具有开创性意义。如今，遗址由布宜诺斯艾利斯大学蒂尔卡拉跨学科中心（Centro Universitario Tilcara - UBA）管理。\n\n**世界遗产的一部分**\n2003 年，Pucará de Tilcara 所在的乌马瓦卡峡谷被联合国教科文组织列为**世界文化遗产**。这条绵延 155 公里的峡谷见证了从史前狩猎采集者到印加帝国、再到西班牙殖民时代长达一万年的文化演变。

**印加帝国的短暂统治**
奥马瓜卡人并非这片土地最后的统治者。公元 15 世纪末（西班牙人到来前数十年），印加帝国自北方向南扩张，征服了乌马瓦卡峡谷。Pucará de Tilcara 由此成为印加帝国著名古道——**印加路网（Qhapaq Ñan）**上的一处重要行政与军事节点。这也解释了为何遗址出土的若干文物带有鲜明的印加风格：从陶器纹饰到金属器物，前印加文明与印加文明在此交汇、层叠与融合。`
    },
    myths: {
      title: "安第斯传说与峡谷神话",
      intro: "在安第斯原住民的宇宙观中，山脉、河流与巨石都是拥有灵魂的活体。以下传说从精神层面为这座千年堡垒赋予了更深远的意义。",
      items: [
        {
          title: "大地母亲：帕查玛玛（Pachamama）",
          content: "在安第斯信仰中，帕查玛玛（Pachamama）是主宰生育、农业与大地万物的至高母神。每年八月一日，蒂尔卡拉及整个胡胡伊省都会举行盛大的帕查玛玛祭典（Ceremonia de la Pachamama）。\n\n仪式中，人们在地上挖一个洞（pozo），向大地母亲献上食物、古柯叶、玉米酒（chicha）和烟草，以感谢她过去一年的赐予并祈求来年的丰收。\n\n在 Pucará de Tilcara 的遗址区域内，至今仍能感受到这种根植于土地的精神联系——每一块石墙、每一级台阶，都仿佛是献给帕查玛玛的无声礼赞。每年八月，当地人还会在遗址周边举行「敬地仪式」（Corpachada），将古柯叶、奇恰酒与食物埋入土中，延续着与大地母亲最质朴的契约。"
        },
        {
          title: "太阳神因蒂（Inti）与峡谷之光",
          content: "印加人将太阳神因蒂（Inti）视为至高无上的神祇，相信印加皇帝是太阳之子。当印加帝国在 15 世纪中叶扩张至乌马瓦卡峡谷时，他们将太阳崇拜的部分仪式融入了这片土地。\n\n据说，Pucará de Tilcara 高地上某些石墙的朝向，正是为了在冬至（Inti Raymi）当天捕捉第一缕晨光。当金色的阳光穿透峡谷薄雾、洒在古老的石墙上，当地人相信那是因蒂在祝福这片土地与生活于此的人们。\n\n每年六月，蒂尔卡拉小镇仍会举行与太阳崇拜相关的节庆活动，延续着千年的传统。相传在冬至（Inti Raymi）黎明，第一缕阳光会精准落在古堡的最高处——这座近 2,500 米的制高点不仅是防御堡垒，更是一处天然的「天文台」。"
        },
        {
          title: "峡谷守护者：科克纳（Coquena）",
          content: "在阿根廷西北部的民间传说中，科克纳（Coquena）是守护野生动物的矮小神灵，尤其庇佑小羊驼（vicuña）和原驼（guanaco）。他穿着传统斗篷，戴着宽边帽，在峡谷最深处无声地游走。\n\n传说科克纳会惩罚那些滥杀野生动物的猎人，却会引导善良的牧羊人找到走失的牲畜。在 Pucará de Tilcara 周边的山脊上，偶尔可以看到野生的原驼群，当地人会低声说：'那是科克纳在放牧。'\n\n这一传说与今天遗址周边的生态保护理念不谋而合——善待这片土地上的生灵，就是善待祖先留下的遗产。在 Pucará 遗址中，考古学家确实发现了大量圈养羊驼的古老畜栏（Corrales）；羊驼是奥马瓜卡人最重要的运输工具与保暖物资，人们相信正是科克纳在暗中庇护着这些古堡里的驼群。"
        }
      ]
    },
    curiosities: {
      title: "考古趣闻与文化剪影",
      content: `"Pucará"一词源自克丘亚语（Quechua），本意为"堡垒"或"防御工事"。在南美洲安第斯地区，凡带有「Pucará」前缀的遗址，几乎都是前哥伦布时期的战略要塞。\n\n**金字塔纪念碑（Pirámide de Tilcara）**\n遗址内最引人注目的现代建筑是一座石砌金字塔形纪念碑，由胡胡伊省致敬委员会于 **1935 年 3 月 9 日** 建立，以纪念两位对该遗址发掘与修复做出卓越贡献的考古学家：\n\n• 左侧碑文纪念 **胡安·B·安布罗塞蒂（Juan B. Ambrosetti，1865–1917）**——阿根廷考古学先驱，1908 年率领团队首次系统发掘 Pucará de Tilcara。\n• 右侧碑文纪念 **萨尔瓦多·德贝内德蒂（Salvador Debenedetti，1884–1930）**——安布罗塞蒂的学生与考古继任者，继续推动了遗址的修复与研究工作。\n\n纪念碑中央镌刻着一段极具诗意的西班牙语铭文：\n\n*"De entre las cenizas muertas de un pueblo muerto, exhumaron las culturas aborígenes, dando eco al silencio. El Museo Etnográfico, la Cátedra y el Libro resumieron la obra."*\n\n（从死去的村落灰烬中，他们发掘出了原住民的文化，让沉默发出了回声。民族学博物馆、大学教席与学术书籍，浓缩了他们毕生的心血与成就。）\n\n**学术视角的争议**
值得一提的是，这座金字塔纪念碑（Pirámide trunca，截顶金字塔）在形式上带有鲜明的**中美洲阿兹特克风格**，与本地前印加时期的奥马瓜卡文化在建筑语言上毫无关联。建筑史学界普遍认为，它是 20 世纪初修复者留下的「时代印记」，并非遗址原本的组成部分。如今，这处争议性的现代建筑本身，也成了 Pucará de Tilcara 从原住民堡垒到现代文化遗产、历史不断层叠演变的生动见证。

**记忆、真相与正义纪念牌匾**\n遗址内还有一块意义深远的现代纪念牌匾，由布宜诺斯艾利斯大学哲学与文学学院蒂尔卡拉大学中心于 **2015 年 3 月 24 日** 设立，悼念阿根廷军政府独裁时期（1976–1983 年"肮脏战争"）的受害者：\n\n• 布宜诺斯艾利斯大学哲学与文学学院超过 420 名被拘留-失踪的学生、教师及非教职员工。\n• 胡胡伊省超过 200 名被拘留-失踪者。\n• 1976–1983 年国家恐怖主义期间阿根廷全国超过 30,000 名被拘留-失踪者。\n• 自 1492 年以来遭受种族灭绝的原住民受害者。\n\n牌匾上以醒目的文字署名：**"¡Nunca Más!"（绝不重演！）**，体现了阿根廷社会对历史创伤的集体反思与对正义的恒久追求。\n\n**高海拔仙人掌园（Jardín Botánico de Altura）**\n遗址内的高海拔植物园种植了来自阿根廷西北部及安第斯地区的数百种仙人掌和多肉植物，在海拔近 2,500 米的环境中形成了一个独特的干旱植物群落。`
    },
    eco: {
      title: "遗产保护（Heritage Conservation）",
      intro: "Pucará de Tilcara 不仅是一处考古遗址，更是联合国教科文组织世界遗产的组成部分。作为独立的非盈利科普指南，我们倡导以最尊重的方式探访这片千年古迹。",
      items: [
        "**不触摸石墙**：请勿攀爬或踩踏遗址内的石墙，这些原始结构历经数百年已十分脆弱",
        "**指定路径行走**：请沿着设立的步道和指示牌行走，勿擅自进入未开放区域",
        "「无痕参观」：带走所有垃圾和废弃物，保持遗址原始面貌",
        "**尊重文化遗产**：请勿在石墙上刻字或涂鸦，这些是不可再生的文化财富",
        "**安静探访**：遗址是考古研究的重要场所，请降低音量，尊重研究人员和其他访客",
        "**支持管理机构**：遗址由布宜诺斯艾利斯大学管理，您的门票收入直接用于保护和研究工作"
      ]
    },
    architecture: {
      title: "遗址结构与考古发现",
      intro: "Pucará de Tilcara 是前印加时期最完整的山地城堡之一。尽管经过了 20 世纪初的部分修复，其基本布局仍准确地反映了奥马瓜卡人精湛的巨石建筑技艺。",
      specs: {
        structure: { title: "堡址布局", content: "遗址占地约 15 公顷，沿山脊层层分布。根据考古遗址现场的石刻导览示意图（Croquis del Pucará），目前已修复并对公众开放的五处核心区域为：① 入口区（Barrio de la Entrada）——古堡的主入口防御体系；② 教堂（Iglesia）——经考古复原的仪式建筑；③ 纪念碑区（Barrio del Monumento）——1935 年所建金字塔纪念碑所在地；④ 畜栏（Corrales）——原住民圈养羊驼与原驼的畜栏遗迹；⑤ 大墓穴（Necrópolis）——古代奥马瓜卡人的墓葬区。\n\n石砌住宅（约 100 余座）墙体由当地花岗岩与石灰岩干砌而成，厚度从 0.5 米到 1.5 米不等。多个入口设有复杂的防御工事，体现了高超的军事建筑理念。" },
        design: { title: "建造技艺", content: "奥马瓜卡人采用「干砌石」（pirca）技术——不使用砂浆，将大小石块精确嵌合。这种技术在安第斯山区具有极强的抗震性能。墙壁通常略微内倾以增强稳定性，建筑群充分利用天然地形，形成阶梯式布局，既节省了工程量，又最大化了居住空间。" },
        optics: { title: "博物馆与植物园", content: "遗址范围内的爱德华多·卡萨诺瓦博士考古博物馆（Museo Arqueológico Dr. Eduardo Casanova）展出了大量出土文物，包括陶器、石器、骨器和金属饰品，生动还原了奥马瓜卡人的日常生活。高海拔仙人掌园则展示了安第斯地区独特的旱地植物群。" }
      },
      plaque: {
        title: "遗址基本信息",
        items: [
          { label: "名称", value: "Pucará de Tilcara（蒂尔卡拉古堡）" },
          { label: "位置", value: "蒂尔卡拉镇，胡胡伊省，阿根廷" },
          { label: "建造年代", value: "公元 12–13 世纪（前印加时期）" },
          { label: "海拔高度", value: "约 2,465 米" },
          { label: "占地面积", value: "约 15 公顷" },
          { label: "管理机构", value: "布宜诺斯艾利斯大学（UBA）" },
          { label: "世界遗产", value: "乌马瓦卡峡谷（UNESCO 2003）" }
        ]
      }
    },
    monuments: {
      title: "在 Pucará de Tilcara 可以体验什么",
      intro: "这处遗址将考古探索、文化体验与壮丽的安第斯自然风光融为一体。以下体验深受历史爱好者、摄影师和文化旅行者的喜爱。",
      items: [
        { name: "探索古堡遗址", description: "沿着蜿蜒的石径穿行于古堡的巷道与广场之间，触摸被千年风霜打磨的石墙。从制高点俯瞰格兰德河与瓦萨马约河交汇的壮丽峡谷景色，想象奥马瓜卡战士千年前在此眺望敌情的场景。" },
        { name: "参观考古博物馆", description: "爱德华多·卡萨诺瓦博士考古博物馆（Museo Arqueológico Dr. Eduardo Casanova）收藏了从该遗址及周边出土的大量珍贵文物，从日常生活器具到宗教祭祀用品，生动呈现了前哥伦布时期安第斯高原的人类文明。" },
        { name: "高海拔仙人掌园", description: "海拔近 2,500 米的高海拔植物园（Jardín Botánico de Altura）是阿根廷最具特色的干旱植物园之一。数百种形态各异的仙人掌和多肉植物在蓝天白云与古老石墙的映衬下，构成了奇妙的生命图景。" },
        { name: "远眺七色山与峡谷全景", description: "从古堡高地远眺，乌马瓦卡峡谷的壮美尽收眼底。向东北方向望去，著名的七色山（Cerro de los Siete Colores）在阳光下展现出令人惊叹的层叠色彩——这是安第斯山脉最经典的画面之一。" }
      ]
    },
    contrast: {
      title: "石墙与峡谷",
      intro: "Pucará de Tilcara 的魅力，在于人类文明遗迹与壮丽自然景观的深度交融。一面是千年石墙沉默矗立，一面是乌马瓦卡峡谷亘古延绵——以下两幅画面，带您感受这份跨越时空的对话。",
      before: "千年石墙",
      after: "峡谷远眺"
    },
    visiting: {
      title: "实用参观指南",
      intro: "Pucará de Tilcara 全年对公众开放，建议安排半日行程深入探索。以下信息可帮助您更从容地规划此次文化之旅。",
      hours: { title: "开放时间", content: "周二至周日：**09:00–18:30**\n周一闭馆（公共假日除外）\n旺季或夏季时间可能有所变动，建议 17:30 前入园。", note: "开放时间可能随季节和特殊活动调整，建议出发前查看官方网站确认。" },
      price: { title: "门票信息", content: "需购买门票，具体票价以现场和官网为准。阿根廷居民、学生和老年人通常享有优惠。\n门票收入用于遗址保护与学术研究。", note: "由布宜诺斯艾利斯大学蒂尔卡拉跨学科中心管理，建议提前在官网了解最新票价。" },
      duration: { title: "建议游览时长", content: "遗址核心区 + 博物馆：约 **2–3 小时**。\n深度探索 + 仙人掌园 + 摄影：可安排 **4–5 小时**。", note: "与蒂尔卡拉小镇、七色山（Purmamarca）和乌马瓦卡峡谷串联，可规划 2–3 日西北高原文化之旅。" },
      tips: { title: "游览贴士与注意事项", items: [
        "**高海拔适应**：遗址海拔约 2,465 米，初到者可能感到轻微不适。建议放慢脚步，多喝水，避免剧烈运动",
        "**防晒必备**：安第斯高原日照极强，请涂抹高倍防晒霜、佩戴太阳镜和宽檐帽",
        "**穿着舒适**：建议穿着防滑平底鞋，遗址内有大量石阶和碎石路面",
        "**补水充足**：高原气候干燥，建议每人携带至少 1 升饮用水",
        "**古柯叶（Coca Leaves）**：可在小镇购买古柯叶咀嚼或泡茶，有助缓解高原反应",
        "**尊重拍摄**：博物馆内部分展品可能禁止拍照，请留意标识"
      ] },
      essentials: [
        { icon: "🫁", title: "高原反应", text: "海拔约 2,465 米，初到者请放慢脚步、多喝水，可咀嚼古柯叶缓解不适。" },
        { icon: "☀️", title: "防晒警告", text: "安第斯高原紫外线极强，必戴墨镜与宽檐帽，涂抹高倍防晒霜。" },
        { icon: "👟", title: "着装要求", text: "全为碎石山路，禁穿高跟鞋，推荐防滑登山鞋。" },
        { icon: "💧", title: "补水充足", text: "高原气候干燥，建议每人携带至少 1 升饮用水。" }
      ]
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 从胡胡伊省首府 / 机场出发", content: "最近的机场是胡胡伊国际机场（Gobernador Horacio Guzmán，代码 JUJ），距蒂尔卡拉约 113 公里。亦可通过萨尔塔机场（SLA）中转，距蒂尔卡拉约 210 公里。", options: [
        { name: "自驾 / 租车（最推荐）", price: "约 1.5 小时车程", time: "113 公里", steps: ["从胡胡伊机场沿 9 号国道（RN-9）向北行驶", "沿乌马瓦卡峡谷北上，途经沃尔坎（Volcán）、通巴亚（Tumbaya）等小镇", "行驶约 113 公里后到达蒂尔卡拉镇，遗址入口位于镇东南方向山坡上"] }
      ]},
      city: { title: "🏘️ 从蒂尔卡拉镇步行前往", content: "遗址位于蒂尔卡拉镇中心东南方向，从主广场步行约 **10–15 分钟**即可抵达遗址入口。这是最直接的到达方式。", steps: ["从蒂尔卡拉主广场沿通往遗址的指示牌步行", "沿缓坡上行约 10–15 分钟", "到达遗址售票处和入口"] },
      tips: { title: "交通与高海拔小贴士", items: [
        "**海拔**：蒂尔卡拉镇海拔约 2,465 米，与遗址高度相当，抵达后建议先适应半天",
        "胡胡伊省首都圣萨尔瓦多德胡胡伊（San Salvador de Jujuy）距蒂尔卡拉约 85 公里，车程约 1 小时",
        "9 号国道（RN-9）路况良好，沿途景色壮美，是阿根廷最著名的自驾路线之一",
        "从萨尔塔市（Salta）出发有直达蒂尔卡拉的长途巴士，车程约 3.5–4 小时",
        "可结合普尔马马卡（Purmamarca）七色山、乌马瓦卡（Humahuaca）和伊鲁亚（Iruya）规划多日行程"
      ] }
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多照片", categories: [ { key: "fortress", label: "古堡风貌" }, { key: "artifacts", label: "出土文物" }, { key: "cactus", label: "仙人掌园" }, { key: "canyon", label: "峡谷全景" } ] },
    reviews: {
      title: "游客评价与周边探索",
      subtitle: "来自 Pucará de Tilcara 的声音：Google Maps 真实评价",
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "探访完千年古堡后，您可顺道探索以下邻近目的地：",
      nearbyItems: [
        { name: "七色山（Cerro de los Siete Colores）", description: "位于普尔马马卡（Purmamarca）小镇，距蒂尔卡拉约 25 公里。这座山以其红、橙、黄、绿、紫等层叠色彩闻名于世，是阿根廷西北部最经典的摄影胜地。" },
        { name: "乌马瓦卡峡谷（Quebrada de Humahuaca）", description: "全长 155 公里的世界文化遗产峡谷，串联了蒂尔卡拉、乌马瓦卡、普尔马马卡等众多特色小镇，沿途地貌色彩斑斓，被誉为「上帝打翻的调色盘」。" },
        { name: "大盐滩（Salinas Grandes）", description: "位于胡胡伊省与萨尔塔省交界处的巨型盐沼，海拔约 3,450 米。纯白无垠的盐壳与钴蓝色天空形成超现实景观，是西北高原最令人震撼的自然奇观之一。" }
      ]
    },
    faq: { title: "常见问题", subtitle: "深入了解 Pucará de Tilcara", items: [
      { question: "Pucará de Tilcara 是什么意思？", answer: "「Pucará」源自克丘亚语（Quechua），意为「堡垒」或「防御要塞」。「Tilcara」是遗址所在小镇的名称。因此，Pucará de Tilcara 可译为「蒂尔卡拉的堡垒」或「蒂尔卡拉古堡」。这是一座由奥马瓜卡（Omaguaca）原住民于公元 12–13 世纪建造的山地防御城堡。" },
      { question: "遗址的开放时间和门票情况是怎样的？", answer: "开放时间为周二至周日 09:00–18:30（周一闭馆，公共假日除外），旺季或夏季可能有所变动，建议 17:30 前入园。需购买门票，票价因居民/非居民身份而异。遗址由布宜诺斯艾利斯大学（UBA）管理，建议访问 tilcara.filo.uba.ar 查看最新信息。" },
      { question: "参观 Pucará de Tilcara 需要注意什么？", answer: "海拔约 2,465 米，请注意高海拔适应。日照极强，需做好防晒。请勿攀爬或触摸石墙，沿指定步道行走，带走所有垃圾，尊重这处世界文化遗产。建议穿着防滑平底鞋。" },
      { question: "如何从布宜诺斯艾利斯到达蒂尔卡拉？", answer: "建议先乘飞机从布宜诺斯艾利斯飞往胡胡伊国际机场（JUJ，约 2 小时），再驾车或乘巴士沿 9 号国道向北行驶约 113 公里（1.5 小时）到达蒂尔卡拉。也可选择飞往萨尔塔（SLA），再乘车约 210 公里（3.5–4 小时）。" },
      { question: "蒂尔卡拉古堡和乌马瓦卡峡谷是什么关系？", answer: "Pucará de Tilcara 位于乌马瓦卡峡谷（Quebrada de Humahuaca）中段。该峡谷于 2003 年被联合国教科文组织列为世界文化遗产，而 Pucará de Tilcara 是峡谷内规模最大、保存最完好的前印加考古遗址。" }
    ]},
    location: { title: "地图位置", address: "Y4624 Tilcara\nJujuy Province\nArgentina\n阿根廷胡胡伊省蒂尔卡拉", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "Pucará de Tilcara 是乌马瓦卡峡谷世界遗产的重要组成部分，也是前印加文明的杰出见证。请与我们一同守护这座千年古堡，让历史在石墙间永恒回响。", text: "© 2026 蒂尔卡拉古堡指南 · 保留所有权利。\n本网站是一个独立的第三方非盈利科普指南项目，致力于准确传播 Pucará de Tilcara 的信息。我们与阿根廷政府、布宜诺斯艾利斯大学或任何官方机构均无隶属关系。", made: "本网站是一个独立的非盈利科普项目，为探索者、学习者和文化爱好者而建。", linksTitle: "友情链接", links: PUCA_LINKS },
    siteMap: {
      title: "互动遗址地图",
      intro: "将鼠标悬停（或点按）下方地图中的标记，即可探索 Pucará de Tilcara 的五大核心区域。",
      hint: "悬停查看 · 点击锁定",
      cta: "查看完整导览地图",
      zones: [
        { key: "entrada", name: "入口区（Barrio de la Entrada）", desc: "古堡的主入口防御体系，设有复杂工事，是控制峡谷南北通道的咽喉要道。" },
        { key: "iglesia", name: "教堂（Iglesia）", desc: "经考古复原的仪式建筑，展现了遗址中宗教与生活交织的空间布局。" },
        { key: "monumento", name: "纪念碑区（Barrio del Monumento）", desc: "1935 年所建截顶金字塔纪念碑所在地，纪念两位奠基性的考古学家。" },
        { key: "corrales", name: "畜栏（Corrales）", desc: "原住民圈养羊驼与原驼的畜栏遗迹，印证了守护神科克纳庇佑驼群的传说。" },
        { key: "necrópolis", name: "大墓穴（Necrópolis）", desc: "古代奥马瓜卡人的墓葬区，是了解前印加丧葬文化与信仰的关键。" }
      ]
    },
    itinerary: {
      title: "建议行程规划",
      intro: "半日即可深度体验古堡。以下时间轴供您参考，可按体力与光线自由调整。",
      steps: [
        { time: "09:00", title: "抵达遗址", text: "趁阳光尚不刺眼，从入口区开始游览核心区与石墙巷道。" },
        { time: "10:30", title: "登金字塔纪念碑", text: "登上纪念碑高地，拍摄乌马瓦卡峡谷全景与远处的七色山。" },
        { time: "11:00", title: "高海拔仙人掌园", text: "漫步仙人掌园，欣赏安第斯旱地植物在石墙映衬下的奇妙姿态。" },
        { time: "11:30", title: "下山探小镇", text: "下山前往蒂尔卡拉镇，参观卡萨诺瓦博士考古博物馆。" },
        { time: "13:00", title: "小镇午餐", text: "在镇上品尝西北高原风味午餐，为半日文化之旅画上句点。" }
      ]
    },
    ctaBand: {
      title: "计划您的蒂尔卡拉之旅",
      subtitle: "从购票到导览，让千年古堡之行从容而深入。",
      buttons: ["购票与开放时间", "预约官方英文向导", "在地图查看位置"]
    }
  },
  en: {
    nav: { history: "History & Archaeology", architecture: "Site Structure", monuments: "Things to Do", eco: "Heritage Protection", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: {
      tags: ["UNESCO World Heritage", "Pre-Inca Site", "Altitude 2,465m"],
      tagline: "Argentina · Jujuy Province",
      title: "Pucará de Tilcara",
      subtitle: "Pre-Inca Fortress · Quebrada de Humahuaca · Andes",
      cta: "Explore the Ancient Fortress",
      description: {
        address: "Y4624 Tilcara, Jujuy Province, Argentina",
        phone: "+54 388 422-1325",
        category: "Historical Site · Archaeological Ruins"
      }
    },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "Echoes of a Millenary Fortress",
      intro: `Pucará de Tilcara stands at the heart of the Quebrada de Humahuaca at an altitude of about **2,465 metres**, and is one of the most important and largest pre-Inca archaeological sites in north-western Argentina.\n\n**The Strategic Stronghold of the Omaguacas**\n"Pucará" means "fortress" or "stronghold" in Quechua. This stone citadel was built by the Omaguaca people between the **12th and 13th centuries** AD, on a natural promontory rising about 80 metres above the confluence of the Río Grande and Río Huasamayo, commanding the strategic north–south corridor through the gorge.\n\n**Ambrosetti's Pioneering Excavation**\nIn **1908**, Argentine archaeology pioneer **Juan Bautista Ambrosetti** led the first systematic excavation of the site with the Ethnographic Museum of the University of Buenos Aires. During the 1910s Ambrosetti carried out the partial restoration of some stone walls and dwellings — a groundbreaking approach in South American archaeology at the time. Today the site is managed by the Centro Universitario Tilcara of the University of Buenos Aires.\n\n**Part of a UNESCO World Heritage Site**\nIn **2003** the Quebrada de Humahuaca, where Pucará de Tilcara is located, was inscribed as a **UNESCO World Heritage Site**. This 155 km-long valley bears witness to 10,000 years of cultural evolution: from prehistoric hunter-gatherers through the Inca Empire to the Spanish colonial era.

**The Brief Rule of the Inca Empire**
The Omaguacas were not the last rulers of this land. In the late 15th century AD (a few decades before the arrival of the Spanish), the Inca Empire expanded southward from the north and conquered the Quebrada de Humahuaca. Pucará de Tilcara thus became an important administrative and military node on the Inca Empire's famous road network — the **Qhapaq Ñan**. This also explains why some artefacts unearthed at the site show a distinct Inca style: from ceramic motifs to metalwork, pre-Inca and Inca civilisations met, layered and merged here.`
    },
    myths: {
      title: "Andean Legends & Canyon Myths",
      intro: "In Andean cosmology, mountains, rivers and stones are living beings with souls. These legends add a deeper, spiritual dimension to the millenary fortress.",
      items: [
        {
          title: "Mother Earth: Pachamama",
          content: "In the Andean belief system, Pachamama is the supreme mother goddess who presides over fertility, agriculture and all earthly life. Every year on 1 August, Tilcara and the entire province of Jujuy celebrate the Pachamama ceremony.\n\nDuring the ritual, a hole (pozo) is dug in the ground and offerings of food, coca leaves, maize beer (chicha) and tobacco are made to Mother Earth, thanking her for the past year's bounty and asking for prosperity for the year ahead.\n\nWithin the Pucará de Tilcara site, the spiritual connection to the land is still palpable — every stone wall, every step seems like a silent tribute to Pachamama. Every August, locals also hold the 'offering to the earth' ritual (Corpachada) around the site, burying coca leaves, chicha and food in the ground — keeping the most primal pact with Mother Earth alive."
        },
        {
          title: "The Sun God Inti and the Canyon Light",
          content: "The Incas regarded Inti, the sun god, as the supreme deity and believed their emperor was a child of the sun. When the Inca Empire expanded into the Quebrada de Humahuaca in the mid-15th century, they blended their solar rituals with local traditions.\n\nIt is said that certain stone walls on the Pucará heights were oriented to capture the first rays of the sun on the winter solstice (Inti Raymi). As golden light pierces the morning mist and falls upon the ancient stonework, locals believe Inti is blessing the land and its people.\n\nTo this day, every June the town of Tilcara holds festivities linked to sun worship, keeping a millenary tradition alive. Legend has it that at dawn on the winter solstice (Inti Raymi), the first ray of sunlight falls precisely on the highest point of the fortress — this vantage point, close to 2,500 metres high, was not only a defensive bastion but also a natural 'observatory'."
        },
        {
          title: "Guardian of the Canyon: Coquena",
          content: "In the folklore of north-western Argentina, Coquena is a small, elf-like spirit who protects wild animals, especially vicuñas and guanacos. He wears a traditional poncho and a wide-brimmed hat, wandering silently through the deepest reaches of the canyon.\n\nLegend says Coquena punishes hunters who kill animals recklessly, yet guides kind-hearted shepherds to their lost flocks. On the ridges near Pucará de Tilcara you may spot wild guanaco herds, and locals whisper: 'Coquena is herding them.'\n\nThis legend echoes today's conservation values — treating the creatures of this land with kindness is honouring the legacy of the ancestors. At the Pucará site, archaeologists did indeed uncover the ancient corrals (Corrales) where llamas were kept; llamas were the Omaguacas' most important means of transport and source of warmth, and people believe it is Coquena who secretly shelters these herds within the fortress."
        }
      ]
    },
    curiosities: {
      title: "Archaeological Trivia & Cultural Vignettes",
      content: `The word "Pucará" comes from Quechua and means "fortress" or "defensive work". Across the Andean region of South America, almost every site prefixed with "Pucará" is a pre-Columbian strategic stronghold.\n\n**The Pyramid Monument (Pirámide de Tilcara)**\nThe most conspicuous modern feature within the site is a stone pyramid built by the Jujuy Homage Commission on **9 March 1935**, honouring two archaeologists who made outstanding contributions to the site's excavation and restoration:\n\n• Left panel commemorates **Juan B. Ambrosetti (1865–1917)** — pioneer of Argentine archaeology who led the first systematic excavation of Pucará de Tilcara in 1908.\n• Right panel commemorates **Salvador Debenedetti (1884–1930)** — Ambrosetti's student and archaeological successor who continued the restoration and research.\n\nThe monument's central panel bears a deeply poetic Spanish inscription:\n\n*"De entre las cenizas muertas de un pueblo muerto, exhumaron las culturas aborígenes, dando eco al silencio. El Museo Etnográfico, la Cátedra y el Libro resumieron la obra."*\n\n("From the dead ashes of a dead people, they unearthed the indigenous cultures, giving echo to silence. The Ethnographic Museum, the University Chair, and the Book summarised their life's work.")\n\n**A Note of Academic Controversy**
It is worth noting that this pyramid monument (Pirámide trunca, the truncated pyramid) displays a pronounced **Mesoamerican Aztec style** that has no connection, in architectural language, with the local pre-Inca Omaguaca culture. Architectural historians generally agree that it is a 'mark of its era' left by early-20th-century restorers, not part of the site's original fabric. Today, this controversial modern structure itself has become a vivid testament to Pucará de Tilcara's ongoing layering of history — from indigenous fortress to modern cultural heritage.

**Memory, Truth and Justice Memorial Plaque**\nA significant modern memorial plaque within the site was installed by the Centro Universitario de Tilcara (Faculty of Philosophy and Letters, University of Buenos Aires) on **24 March 2015**, commemorating victims of Argentina's military dictatorship (the "Dirty War", 1976–1983):\n\n• Over 420 detained-disappeared students, teachers and non-teaching staff of the UBA Faculty of Philosophy and Letters.\n• Over 200 detained-disappeared from the province of Jujuy.\n• Over 30,000 detained-disappeared across Argentina during State Terrorism, 1976–1983.\n• Indigenous Peoples, victims of genocide since 1492.\n\nThe plaque bears the powerful inscription: **"¡Nunca Más!" (Never Again!)** — a testament to Argentina's collective reckoning with historical trauma and the enduring pursuit of justice.\n\n**The High-Altitude Botanical Garden (Jardín Botánico de Altura)**\nThe garden cultivates hundreds of cactus and succulent species from north-western Argentina and the Andes, forming a unique dry-plant community at almost 2,500 metres above sea level.`
    },
    eco: {
      title: "Heritage Conservation",
      intro: "Pucará de Tilcara is not merely an archaeological site — it is part of a UNESCO World Heritage area. As an independent non-profit educational guide, we encourage the most respectful possible visit to this millenary monument.",
      items: [
        "**Do not touch the walls**: do not climb or lean on the stone structures — they are centuries old and fragile",
        "**Stay on designated paths**: follow established walkways and signs; do not enter restricted areas",
        "**Leave no trace**: take all rubbish and waste with you; keep the site pristine",
        "**Respect cultural heritage**: do not carve or graffiti the stone walls — they are irreplaceable cultural assets",
        "**Quiet exploration**: the site is an active archaeological research area; keep noise down and respect researchers and fellow visitors",
        "**Support the management authority**: the site is run by the University of Buenos Aires; your ticket directly funds conservation and research"
      ]
    },
    architecture: {
      title: "Site Layout & Archaeological Discoveries",
      intro: "Pucará de Tilcara is one of the best-preserved pre-Inca mountain citadels in existence. Although it underwent partial restoration in the early 20th century, its basic layout faithfully reflects the Omaguacas' mastery of megalithic construction.",
      specs: {
        structure: { title: "Settlement Layout", content: "The site covers about 15 hectares, arranged in tiers along the ridge. According to the on-site stone sketch map (Croquis del Pucará), five core areas have been restored and are open to visitors: ① Barrio de la Entrada (Entrance Area) — the main defensive gateway; ② Iglesia (Church) — a restored ceremonial building; ③ Barrio del Monumento (Monument Area) — where the 1935 Pyramid Monument stands; ④ Corrales (Corrals) — remnants of enclosures for llamas and guanacos; ⑤ Necrópolis (Necropolis) — the ancient Omaguaca burial ground.\n\nStone dwellings (over 100 units) have walls dry-built from local granite and limestone, ranging from 0.5 to 1.5 metres in thickness. Several entrances feature complex defensive works, demonstrating sophisticated military architecture." },
        design: { title: "Construction Technique", content: "The Omaguacas employed the 'dry-stone' (pirca) technique — fitting stones precisely without mortar. This building method offers remarkable seismic resistance in the Andean region. Walls typically lean slightly inward for stability, and the architectural ensemble makes full use of the natural terrain in a terraced layout that minimises earthworks while maximising living space." },
        optics: { title: "Museum & Botanical Garden", content: "The Museo Arqueológico Dr. Eduardo Casanova, located within the site, displays a wealth of excavated artefacts — pottery, stone tools, bone implements and metal ornaments — vividly reconstructing the daily life of the Omaguaca people. The high-altitude cactus garden showcases the unique xerophytic flora of the Andean region." }
      },
      plaque: {
        title: "Basic Information",
        items: [
          { label: "Name", value: "Pucará de Tilcara" },
          { label: "Location", value: "Tilcara, Jujuy Province, Argentina" },
          { label: "Built", value: "12th–13th century AD (pre-Inca)" },
          { label: "Altitude", value: "approx. 2,465 m" },
          { label: "Area", value: "approx. 15 hectares" },
          { label: "Managed by", value: "University of Buenos Aires (UBA)" },
          { label: "World Heritage", value: "Quebrada de Humahuaca (UNESCO 2003)" }
        ]
      }
    },
    monuments: {
      title: "What to Experience at Pucará de Tilcara",
      intro: "This site blends archaeological exploration, cultural immersion and breathtaking Andean scenery. The experiences below are beloved by history enthusiasts, photographers and cultural travellers alike.",
      items: [
        { name: "Explore the Ruins", description: "Wind your way along stone paths through the fortress's lanes and plazas, touching walls polished by a thousand years of wind and weather. From the highest point, gaze down at the confluence of the Río Grande and Río Huasamayo — imagine Omaguaca warriors scanning the horizon from this very spot a millennium ago." },
        { name: "Visit the Archaeological Museum", description: "The Museo Arqueológico Dr. Eduardo Casanova houses a rich collection of artefacts unearthed from the site and its surroundings, from everyday utensils to ritual objects — a vivid window into pre-Columbian civilisation on the Andean high plateau." },
        { name: "High-Altitude Cactus Garden", description: "At almost 2,500 metres, the Jardín Botánico de Altura is one of Argentina's most distinctive xerophytic gardens. Hundreds of cactus and succulent species, in every imaginable shape, stand against deep-blue skies and ancient stone walls — a marvellous tableau of life." },
        { name: "Panoramic Views of the Canyon", description: "From the fortress heights the Quebrada de Humahuaca unfolds in all its grandeur. Looking north-east, the famous Cerro de los Siete Colores (Hill of Seven Colours) reveals its stunning layered hues in the sunlight — one of the most iconic vistas in the Andes." }
      ]
    },
    contrast: {
      title: "Stone Walls & Endless Canyon",
      intro: "The magic of Pucará de Tilcara lies in the profound interplay between human heritage and spectacular nature. On one side, silent stone walls; on the other, the timeless Quebrada — two views below capture this dialogue across the ages.",
      before: "Ancient Stone Walls",
      after: "Canyon Panorama"
    },
    visiting: {
      title: "Plan Your Visit",
      intro: "Pucará de Tilcara is open to the public year-round. A half-day visit is recommended to explore the site in depth. The following information helps you plan with ease.",
      hours: { title: "Opening Hours", content: "Tuesday to Sunday: **09:00–18:00**\nClosed on Mondays (except public holidays)\nLast entry recommended by 16:30 for a full visit.", note: "Hours may vary by season and special events; check the official website before visiting." },
      price: { title: "Entrance Fee", content: "An entrance fee applies; the exact price depends on residency status and is displayed on site and online. Argentine residents, students and seniors usually receive discounts.\nTicket revenue funds conservation and academic research.", note: "Managed by the Centro Universitario Tilcara (UBA). Check tilcara.filo.uba.ar for up-to-date pricing." },
      duration: { title: "Suggested Duration", content: "Core site + museum: about **2–3 hours**.\nIn-depth exploration + cactus garden + photography: allow **4–5 hours**.", note: "Combine with Tilcara town, the Hill of Seven Colours (Purmamarca) and the Humahuaca Gorge for a 2–3 day north-western highlands cultural journey." },
      tips: { title: "Travel Tips & Notes", items: [
        "**Altitude acclimatisation**: the site is at ~2,465m. Take it slowly, drink plenty of water, and avoid strenuous exercise on arrival",
        "**Sun protection is essential**: the Andean sun is fierce at altitude — use high-SPF sunscreen, sunglasses and a wide-brimmed hat",
        "**Wear comfortable shoes**: non-slip flat shoes are recommended; there are many stone steps and gravel paths",
        "**Stay hydrated**: the highland climate is very dry; carry at least 1 litre of water per person",
        "**Coca leaves**: available in town; chewing or brewing as tea can help alleviate altitude symptoms",
        "**Photography etiquette**: some museum exhibits may prohibit photography — watch for signage"
      ] },
      essentials: [
        { icon: "🫁", title: "Altitude", text: "At ~2,465m, take it slowly on arrival, drink plenty of water, and chew coca leaves to ease symptoms." },
        { icon: "☀️", title: "Sun Protection", text: "The Andean sun is extreme — wear sunglasses, a wide-brimmed hat and high-SPF sunscreen." },
        { icon: "👟", title: "Footwear", text: "All paths are loose stone; no high heels — sturdy hiking shoes are recommended." },
        { icon: "💧", title: "Hydration", text: "The highland air is very dry; carry at least 1 litre of water per person." }
      ]
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ From Jujuy Capital / Airport", content: "The nearest airport is Gobernador Horacio Guzmán International Airport (JUJ), about 113 km from Tilcara. Salta Airport (SLA) is an alternative, about 210 km away.", options: [
        { name: "Self-drive / Rental Car (Recommended)", price: "approx. 1.5 hrs", time: "113 km", steps: ["From Jujuy Airport, take National Route 9 (RN-9) northbound", "Drive through the Quebrada de Humahuaca, passing Volcán, Tumbaya and other villages", "After about 113 km arrive in Tilcara; the site entrance is on the hillside south-east of the town centre"] }
      ]},
      city: { title: "🏘️ On Foot from Tilcara Town", content: "The site is a short **10–15 minute walk** from Tilcara's main square, on a gentle uphill slope. This is the easiest way to reach the entrance.", steps: ["From Tilcara's main square, follow signs towards the Pucará", "Walk uphill for about 10–15 minutes", "Arrive at the ticket office and entrance"] },
      tips: { title: "Transport & Altitude Tips", items: [
        "**Altitude**: Tilcara sits at ~2,465m, the same height as the site — allow half a day to acclimatise on arrival",
        "San Salvador de Jujuy is ~85 km from Tilcara (≈1 hour by car)",
        "National Route 9 (RN-9) is in good condition and the scenery is spectacular — one of Argentina's most scenic drives",
        "Direct long-distance buses run from Salta city to Tilcara (approx. 3.5–4 hours)",
        "Combine with Purmamarca (Hill of Seven Colours), Humahuaca and Iruya for a multi-day itinerary"
      ] }
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps", categories: [ { key: "fortress", label: "Fortress" }, { key: "artifacts", label: "Artifacts" }, { key: "cactus", label: "Cactus Garden" }, { key: "canyon", label: "Canyon Views" } ] },
    reviews: {
      title: "Visitor Reviews & Nearby Exploration",
      subtitle: "Voices from Pucará de Tilcara: Real Google Maps Testimonies",
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After exploring the millenary fortress, you can easily visit the following nearby destinations:",
      nearbyItems: [
        { name: "Hill of Seven Colours (Cerro de los Siete Colores)", description: "Located in the village of Purmamarca, about 25 km from Tilcara. Famous for its layered bands of red, orange, yellow, green and purple — one of north-west Argentina's most iconic photo spots." },
        { name: "Quebrada de Humahuaca", description: "This 155 km UNESCO World Heritage valley links Tilcara, Humahuaca, Purmamarca and many other charming villages, its multicoloured landscapes often likened to 'God's own painter's palette'." },
        { name: "Salinas Grandes (Great Salt Flats)", description: "A vast salt pan on the border of Jujuy and Salta provinces, at about 3,450 m altitude. The blinding white crust against a cobalt-blue sky creates a surreal landscape — one of the most breathtaking natural wonders of the Andean highlands." }
      ]
    },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Pucará de Tilcara", items: [
      { question: "What does 'Pucará de Tilcara' mean?", answer: "'Pucará' comes from Quechua and means 'fortress' or 'stronghold'. 'Tilcara' is the name of the town where the site is located. Pucará de Tilcara can therefore be translated as 'the fortress of Tilcara'. It is a mountain defensive stronghold built by the Omaguaca indigenous people in the 12th–13th centuries AD." },
      { question: "What are the opening hours and ticket prices?", answer: "The site is open Tuesday to Sunday, 09:00–18:30 (closed Mondays except public holidays); hours may shift in peak season or summer, and last entry by 17:30 is recommended. An entrance fee applies; rates vary depending on residency status. The site is managed by the University of Buenos Aires — visit tilcara.filo.uba.ar for the latest information." },
      { question: "What should I keep in mind when visiting?", answer: "The site is at ~2,465m; take time to acclimatise. Sun exposure is extreme — use sun protection. Do not climb on or touch stone walls, stay on marked trails, take all rubbish with you, and respect this UNESCO World Heritage property. Wear sturdy, non-slip shoes." },
      { question: "How do I get to Tilcara from Buenos Aires?", answer: "Fly from Buenos Aires to Jujuy International Airport (JUJ, ≈2 hrs), then drive or take a bus north along National Route 9 for about 113 km (1.5 hrs) to Tilcara. Alternatively, fly to Salta (SLA) and drive or bus about 210 km (3.5–4 hrs)." },
      { question: "What is the relationship between Pucará de Tilcara and the Quebrada de Humahuaca?", answer: "Pucará de Tilcara lies in the middle section of the Quebrada de Humahuaca. The gorge was declared a UNESCO World Heritage Site in 2003, and Pucará de Tilcara is the largest and best-preserved pre-Inca archaeological site within the gorge." }
    ]},
    location: { title: "Map Location", address: "Y4624 Tilcara\nJujuy Province\nArgentina", openMaps: "View on Google Maps" },
    footer: { callToAction: "Pucará de Tilcara is a jewel of the Quebrada de Humahuaca World Heritage Site and an extraordinary testimony to pre-Inca civilisation. Please join us in protecting this millenary fortress so that history may echo through its stone walls for ever.", text: "© 2026 Pucará de Tilcara Guide · All rights reserved.\nThis website is an independent third-party non-profit educational guide dedicated to sharing accurate information about Pucará de Tilcara. We are not affiliated with the Argentine government, the University of Buenos Aires, or any official authority.", made: "This is an independent non-profit educational project, made for explorers, learners and culture enthusiasts.", linksTitle: "Friendly Links", links: PUCA_LINKS },
    siteMap: {
      title: "Interactive Site Map",
      intro: "Hover over (or tap) the markers on the map below to explore the five core areas of Pucará de Tilcara.",
      hint: "Hover to preview · Tap to pin",
      cta: "View the full visitor map",
      zones: [
        { key: "entrada", name: "Entrance Area (Barrio de la Entrada)", desc: "The fortress's main defensive gateway, with complex works, commanding the north–south throat of the gorge." },
        { key: "iglesia", name: "Church (Iglesia)", desc: "An archaeologically restored ceremonial building, revealing the intertwining of ritual and daily life at the site." },
        { key: "monumento", name: "Monument Area (Barrio del Monumento)", desc: "Home to the truncated pyramid monument built in 1935, honouring two foundational archaeologists." },
        { key: "corrales", name: "Corrals (Corrales)", desc: "Remains of the enclosures where llamas and guanacos were kept — echoing the legend of Coquena sheltering the herds." },
        { key: "necrópolis", name: "Necropolis (Necrópolis)", desc: "The ancient Omaguaca burial ground, key to understanding pre-Inca funerary culture and beliefs." }
      ]
    },
    itinerary: {
      title: "Suggested Itinerary",
      intro: "A half-day is enough for a deep visit. Use the timeline below as a guide, and adjust freely to your pace and the light.",
      steps: [
        { time: "09:00", title: "Arrive at the site", text: "While the light is still soft, start from the entrance area and explore the core district and stone lanes." },
        { time: "10:30", title: "Climb the Pyramid Monument", text: "Ascend to the monument's high ground for panoramic shots of the Quebrada and the distant Hill of Seven Colours." },
        { time: "11:00", title: "High-Altitude Cactus Garden", text: "Stroll the cactus garden and admire the curious shapes of Andean xerophytes against the stone walls." },
        { time: "11:30", title: "Down to the Town", text: "Walk down to Tilcara town and visit the Dr. Eduardo Casanova Archaeological Museum." },
        { time: "13:00", title: "Lunch in Town", text: "Enjoy a north-western highland lunch in town and round off your half-day cultural journey." }
      ]
    },
    ctaBand: {
      title: "Plan Your Trip to Tilcara",
      subtitle: "From tickets to guided tours, make your visit to the millenary fortress relaxed and in depth.",
      buttons: ["Tickets & Opening Hours", "Book an Official English Guide", "View Location on Maps"]
    }
  },
  es: {
    nav: { history: "Historia y Arqueología", architecture: "Estructura del Sitio", monuments: "Qué Hacer", eco: "Protección Patrimonial", visiting: "Info de Visita", transportation: "Transporte", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: {
      tags: ["Patrimonio Mundial UNESCO", "Sitio Preincaico", "Altitud 2.465m"],
      tagline: "Argentina · Provincia de Jujuy",
      title: "Pucará de Tilcara",
      subtitle: "Fortaleza Preincaica · Quebrada de Humahuaca · Andes",
      cta: "Explorar la Fortaleza Milenaria",
      description: {
        address: "Y4624 Tilcara, Provincia de Jujuy, Argentina",
        phone: "+54 388 422-1325",
        category: "Sitio Histórico · Ruinas Arqueológicas"
      }
    },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Ecos de una Fortaleza Milenaria",
      intro: `El Pucará de Tilcara se alza en el corazón de la Quebrada de Humahuaca a unos **2.465 metros** de altitud, y es uno de los sitios arqueológicos preincaicos más importantes y extensos del noroeste argentino.\n\n**El Bastión Estratégico de los Omaguacas**\n"Pucará" significa "fortaleza" o "bastión" en quechua. Esta ciudadela de piedra fue construida por el pueblo omaguaca entre los siglos **XII y XIII** d.C., sobre un promontorio natural que se eleva unos 80 metros sobre la confluencia del Río Grande y el Río Huasamayo, dominando el corredor estratégico norte–sur de la quebrada.\n\n**La Excavación Pionera de Ambrosetti**\nEn **1908**, el pionero de la arqueología argentina **Juan Bautista Ambrosetti** lideró la primera excavación sistemática del sitio junto al Museo Etnográfico de la Universidad de Buenos Aires. Durante la década de 1910, Ambrosetti realizó la restauración parcial de algunos muros y viviendas — un enfoque revolucionario para la arqueología sudamericana de la época. Hoy el sitio es administrado por el Centro Universitario Tilcara de la UBA.\n\n**Parte de un Patrimonio Mundial UNESCO**\nEn **2003**, la Quebrada de Humahuaca, donde se encuentra el Pucará de Tilcara, fue declarada **Patrimonio de la Humanidad por la UNESCO**. Este valle de 155 km de largo da testimonio de 10.000 años de evolución cultural: desde los cazadores-recolectores prehistóricos, pasando por el Imperio Inca, hasta la época colonial española.

**El Breve Dominio del Imperio Inca**
Los omaguacas no fueron los últimos gobernantes de esta tierra. A finales del siglo XV d.C. (pocas décadas antes de la llegada de los españoles), el Imperio Inca se expandió hacia el sur desde el norte y conquistó la Quebrada de Humahuaca. El Pucará de Tilcara se convirtió así en un importante nodo administrativo y militar del famoso camino incaico — el **Qhapaq Ñan**. Esto explica también por qué algunas piezas excavadas en el sitio muestran un estilo incaico marcado: desde la cerámica hasta los objetos metálicos, las civilizaciones preincaica e incaica se encontraron, se superpusieron y se fusionaron aquí.`
    },
    myths: {
      title: "Leyendas Andinas y Mitos de la Quebrada",
      intro: "En la cosmovisión andina, montañas, ríos y piedras son seres vivos con alma. Estas leyendas otorgan una dimensión espiritual más profunda a la fortaleza milenaria.",
      items: [
        {
          title: "La Madre Tierra: Pachamama",
          content: "En el sistema de creencias andino, la Pachamama es la diosa madre suprema que preside la fertilidad, la agricultura y toda la vida terrenal. Cada 1° de agosto, Tilcara y toda la provincia de Jujuy celebran la ceremonia de la Pachamama.\n\nDurante el ritual se cava un pozo en la tierra y se ofrendan alimentos, hojas de coca, chicha y tabaco a la Madre Tierra, agradeciéndole por las cosechas del año pasado y pidiendo prosperidad para el año venidero.\n\nDentro del Pucará de Tilcara, la conexión espiritual con la tierra todavía es palpable — cada muro de piedra, cada escalón parece un homenaje silencioso a la Pachamama. Cada agosto, los lugareños también realizan la ceremonia de «ofrenda a la tierra» (Corpachada) en los alrededores del sitio, enterrando hojas de coca, chicha y comida en el suelo — manteniendo vivo el pacto más primal con la Madre Tierra."
        },
        {
          title: "El Dios Sol Inti y la Luz de la Quebrada",
          content: "Los incas consideraban a Inti, el dios sol, como la deidad suprema y creían que el emperador inca era hijo del sol. Cuando el Imperio Inca se expandió hacia la Quebrada de Humahuaca a mediados del siglo XV, fusionaron sus rituales solares con las tradiciones locales.\n\nSe dice que ciertos muros del Pucará estaban orientados para capturar los primeros rayos del sol en el solsticio de invierno (Inti Raymi). Cuando la luz dorada atraviesa la neblina matinal y cae sobre la piedra antigua, los lugareños creen que Inti está bendiciendo la tierra y a su gente.\n\nHasta hoy, cada junio el pueblo de Tilcara celebra festividades vinculadas al culto solar, manteniendo viva una tradición milenaria. Cuenta la leyenda que en el amanecer del solsticio de invierno (Inti Raymi), el primer rayo de sol cae justo sobre el punto más alto de la fortaleza — este mirador, a casi 2.500 metros, no fue sólo un bastión defensivo, sino también un «observatorio» natural."
        },
        {
          title: "El Guardián de la Quebrada: Coquena",
          content: "En el folclore del noroeste argentino, Coquena es un pequeño espíritu protector de los animales silvestres, especialmente vicuñas y guanacos. Viste poncho y sombrero alón, y deambula silenciosamente por los rincones más profundos de la quebrada.\n\nCuenta la leyenda que Coquena castiga a los cazadores que matan animales sin necesidad, pero guía a los pastores bondadosos hacia sus rebaños perdidos. En las lomas cercanas al Pucará pueden verse tropillas de guanacos salvajes, y los lugareños murmuran: 'Coquena los está pastoreando.'\n\nEsta leyenda resuena con los valores de conservación actuales — tratar con bondad a las criaturas de esta tierra es honrar el legado de los ancestros. En el sitio del Pucará, los arqueólogos efectivamente descubrieron los antiguos corrales (Corrales) donde se criaban las llamas; las llamas eran el principal medio de transporte y fuente de abrigo de los omaguacas, y se cree que es Coquena quien resguarda en secreto a estos rebaños dentro de la fortaleza."
        }
      ]
    },
    curiosities: {
      title: "Curiosidades Arqueológicas y Viñetas Culturales",
      content: `La palabra "Pucará" proviene del quechua y significa "fortaleza" u "obra defensiva". En toda la región andina de Sudamérica, casi todo sitio con el prefijo "Pucará" es una fortaleza estratégica precolombina.\n\n**La Pirámide de Tilcara**\nEl elemento moderno más visible dentro del sitio es una pirámide de piedra construida por la Comisión de Homenaje de Jujuy el **9 de marzo de 1935**, para honrar a dos arqueólogos que hicieron contribuciones sobresalientes a la excavación y restauración del sitio:\n\n• Placa izquierda homenajea a **Juan B. Ambrosetti (1865–1917)** — pionero de la arqueología argentina que lideró la primera excavación sistemática del Pucará de Tilcara en 1908.\n• Placa derecha homenajea a **Salvador Debenedetti (1884–1930)** — discípulo y sucesor arqueológico de Ambrosetti, quien continuó la restauración e investigación.\n\nEl panel central del monumento lleva una inscripción profundamente poética:\n\n*"De entre las cenizas muertas de un pueblo muerto, exhumaron las culturas aborígenes, dando eco al silencio. El Museo Etnográfico, la Cátedra y el Libro resumieron la obra."*\n\n(De entre las cenizas muertas de un pueblo muerto, desenterraron las culturas indígenas, dando eco al silencio. El Museo Etnográfico, la Cátedra Universitaria y el Libro resumieron la obra.)\n\n**Una Nota de Controversia Académica**
Cabe señalar que esta pirámide (Pirámide trunca, la pirámide truncada) muestra un pronunciado **estilo azteca mesoamericano** que no guarda relación, en su lenguaje arquitectónico, con la cultura omaguaca preincaica local. Los historiadores de la arquitectura coinciden en que es una «marca de su época» dejada por los restauradores de principios del siglo XX, no parte del tejido original del sitio. Hoy, esta controvertida construcción moderna se ha convertido en un testimonio vivo de la superposición histórica del Pucará de Tilcara — de fortaleza indígena a patrimonio cultural moderno.

**Placa Conmemorativa «Memoria, Verdad y Justicia»**\nUna significativa placa conmemorativa moderna fue instalada en el sitio por el Centro Universitario de Tilcara (Facultad de Filosofía y Letras, Universidad de Buenos Aires) el **24 de marzo de 2015**, en homenaje a las víctimas de la dictadura militar argentina (la «Guerra Sucia», 1976–1983):\n\n• Más de 420 estudiantes, docentes y no docentes detenidos-desaparecidos de la Facultad de Filosofía y Letras de la UBA.\n• Más de 200 detenidos-desaparecidos de la provincia de Jujuy.\n• Más de 30.000 detenidos-desaparecidos en toda la Argentina durante el Terrorismo de Estado, 1976–1983.\n• Pueblos Originarios, víctimas del genocidio desde 1492.\n\nLa placa lleva la contundente inscripción: **«¡Nunca Más!»**, testimonio del ajuste de cuentas colectivo de la Argentina con el trauma histórico y la búsqueda permanente de justicia.\n\n**Jardín Botánico de Altura**\nEl jardín cultiva cientos de especies de cactus y suculentas del noroeste argentino y los Andes, formando una comunidad vegetal xerófila única a casi 2.500 metros sobre el nivel del mar.`
    },
    eco: {
      title: "Conservación del Patrimonio",
      intro: "El Pucará de Tilcara no es solo un sitio arqueológico — es parte de un área declarada Patrimonio de la Humanidad por la UNESCO. Como guía educativa independiente sin fines de lucro, promovemos la visita más respetuosa posible a este monumento milenario.",
      items: [
        "**No tocar los muros**: no trepar ni apoyarse sobre las estructuras de piedra — tienen siglos de antigüedad y son frágiles",
        "**Circular por senderos habilitados**: seguir los caminos y la cartelería establecida; no ingresar a zonas restringidas",
        "**No dejar rastro**: llevarse toda la basura y residuos; mantener el sitio en su estado original",
        "**Respetar el patrimonio cultural**: no tallar ni pintar los muros de piedra — son bienes culturales irremplazables",
        "**Exploración silenciosa**: el sitio es un área activa de investigación arqueológica; mantener bajo el volumen de voz",
        "**Apoyar a la autoridad gestora**: el sitio es administrado por la UBA; su entrada financia directamente la conservación e investigación"
      ]
    },
    architecture: {
      title: "Estructura del Sitio y Descubrimientos Arqueológicos",
      intro: "El Pucará de Tilcara es una de las ciudadelas preincaicas de montaña mejor conservadas. Aunque fue parcialmente restaurado a principios del siglo XX, su trazado básico refleja fielmente la maestría de los omaguacas en la construcción megalítica.",
      specs: {
        structure: { title: "Distribución del Asentamiento", content: "El sitio abarca unas 15 hectáreas, dispuesto en terrazas a lo largo del cerro. Según el croquis grabado en piedra del propio sitio (Croquis del Pucará), cinco sectores han sido restaurados y están abiertos al público: ① Barrio de la Entrada — el acceso defensivo principal a la fortaleza; ② Iglesia — edificio ceremonial arqueológicamente restaurado; ③ Barrio del Monumento — donde se erige la Pirámide de 1935; ④ Corrales — vestigios de los recintos para llamas y guanacos; ⑤ Necrópolis — el antiguo cementerio omaguaca.\n\nLas viviendas de piedra (más de 100 unidades) tienen muros de piedra seca de granito y caliza local, de 0,5 a 1,5 metros de espesor. Varios accesos presentan complejas obras defensivas, muestra de una arquitectura militar sofisticada." },
        design: { title: "Técnica Constructiva", content: "Los omaguacas empleaban la técnica de 'piedra seca' (pirca) — encajando las piedras con precisión sin mortero. Este método ofrece notable resistencia sísmica en la región andina. Los muros suelen inclinarse ligeramente hacia adentro para mayor estabilidad, y el conjunto aprovecha al máximo el terreno natural en un diseño aterrazado." },
        optics: { title: "Museo y Jardín Botánico", content: "El Museo Arqueológico Dr. Eduardo Casanova, ubicado dentro del predio, exhibe una rica colección de artefactos excavados — cerámica, herramientas líticas, instrumentos de hueso y ornamentos metálicos — reconstruyendo vívidamente la vida cotidiana del pueblo omaguaca. El jardín botánico de altura exhibe la flora xerófila única de la región andina." }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Pucará de Tilcara" },
          { label: "Ubicación", value: "Tilcara, Provincia de Jujuy, Argentina" },
          { label: "Construido", value: "Siglos XII–XIII d.C. (preincaico)" },
          { label: "Altitud", value: "aprox. 2.465 m" },
          { label: "Superficie", value: "aprox. 15 hectáreas" },
          { label: "Administrado por", value: "Universidad de Buenos Aires (UBA)" },
          { label: "Patrimonio Mundial", value: "Quebrada de Humahuaca (UNESCO 2003)" }
        ]
      }
    },
    monuments: {
      title: "Qué Hacer en el Pucará de Tilcara",
      intro: "Este sitio conjuga exploración arqueológica, inmersión cultural y paisajes andinos imponentes. Las siguientes experiencias son apreciadas por aficionados a la historia, fotógrafos y viajeros culturales.",
      items: [
        { name: "Recorrer las Ruinas", description: "Serpentear por los senderos de piedra entre callejuelas y plazoletas de la fortaleza, tocando muros pulidos por mil años de viento y clima. Desde el punto más alto, contemplar la confluencia del Río Grande y el Huasamayo — imaginar guerreros omaguacas oteando el horizonte desde este mismo lugar hace un milenio." },
        { name: "Visitar el Museo Arqueológico", description: "El Museo Arqueológico Dr. Eduardo Casanova alberga una valiosa colección de piezas extraídas del sitio y sus alrededores, desde utensilios cotidianos hasta objetos rituales — una ventana vívida a la civilización precolombina del altiplano andino." },
        { name: "Jardín Botánico de Altura", description: "A casi 2.500 metros, el Jardín Botánico de Altura es uno de los jardines xerófilos más distintivos de Argentina. Cientos de cactus y suculentas, en todas las formas imaginables, se recortan contra cielos azul profundo y muros de piedra antigua — un maravilloso cuadro de vida." },
        { name: "Vistas Panorámicas de la Quebrada", description: "Desde las alturas de la fortaleza, la Quebrada de Humahuaca se despliega en toda su grandeza. Hacia el noreste, el famoso Cerro de los Siete Colores revela sus impresionantes tonalidades a la luz del sol — una de las postales más icónicas de los Andes." }
      ]
    },
    contrast: {
      title: "Muros de Piedra y Quebrada Infinita",
      intro: "La magia del Pucará de Tilcara reside en el profundo diálogo entre el patrimonio humano y la naturaleza espectacular. De un lado, muros de piedra silenciosos; del otro, la Quebrada eterna — dos imágenes capturan este diálogo a través de los siglos.",
      before: "Muros Milenarios",
      after: "Panorama de la Quebrada"
    },
    visiting: {
      title: "Planificá Tu Visita",
      intro: "El Pucará de Tilcara está abierto al público todo el año. Se recomienda una visita de medio día para recorrerlo en profundidad. La siguiente información te ayuda a planificar con tranquilidad.",
      hours: { title: "Horarios", content: "Martes a domingo: **09:00–18:00**\nCerrado los lunes (excepto feriados)\nSe recomienda ingresar antes de las 16:30 para una visita completa.", note: "Los horarios pueden variar según la temporada y eventos especiales; consultar el sitio web oficial antes de la visita." },
      price: { title: "Entrada", content: "Se cobra entrada; el valor exacto depende de la residencia y se exhibe en el lugar y en la web. Residentes argentinos, estudiantes y jubilados suelen contar con descuentos.\nLo recaudado financia la conservación y la investigación.", note: "Administrado por el Centro Universitario Tilcara (UBA). Consultar tilcara.filo.uba.ar para precios actualizados." },
      duration: { title: "Duración Sugerida", content: "Sitio principal + museo: unas **2–3 horas**.\nExploración profunda + jardín botánico + fotografía: **4–5 horas**.", note: "Combinar con el pueblo de Tilcara, el Cerro de los Siete Colores (Purmamarca) y la Quebrada de Humahuaca para un viaje cultural de 2–3 días por el noroeste." },
      tips: { title: "Consejos y Recomendaciones", items: [
        "**Aclimatación a la altura**: el sitio está a ~2.465m. Tomalo con calma, bebé abundante agua y evitá esfuerzos intensos al llegar",
        "**Protección solar imprescindible**: el sol andino es intenso en altura — usá protector solar de alto factor, anteojos y sombrero de ala ancha",
        "**Calzado cómodo**: se recomienda calzado plano antideslizante; hay muchos escalones de piedra y senderos de ripio",
        "**Hidratación**: el clima de altura es muy seco; llevá al menos 1 litro de agua por persona",
        "**Hojas de coca**: disponibles en el pueblo; masticarlas o tomarlas en infusión ayuda con los síntomas de la altura",
        "**Etiqueta fotográfica**: algunas piezas del museo pueden tener restricciones — prestá atención a la señalización"
      ] },
      essentials: [
        { icon: "🫁", title: "Altura", text: "A ~2.465m, tomala con calma al llegar, bebé abundante agua y masticá coca para aliviar síntomas." },
        { icon: "☀️", title: "Protección solar", text: "El sol andino es extremo — usá anteojos, sombrero de ala ancha y protector solar alto." },
        { icon: "👟", title: "Calzado", text: "Todos los senderos son de piedra suelta; nada de tacos — se recomienda calzado de trekking." },
        { icon: "💧", title: "Hidratación", text: "El clima de altura es muy seco; llevá al menos 1 litro de agua por persona." }
      ]
    },
    transportation: {
      title: "Guía de Transporte Precisa",
      airport: { title: "✈️ Desde la Capital / Aeropuerto de Jujuy", content: "El aeropuerto más cercano es el Aeropuerto Internacional Gobernador Horacio Guzmán (JUJ), a unos 113 km de Tilcara. El Aeropuerto de Salta (SLA) es una alternativa, a unos 210 km.", options: [
        { name: "Auto propio / alquilado (Recomendado)", price: "aprox. 1,5 hs", time: "113 km", steps: ["Desde el aeropuerto de Jujuy tomar la Ruta Nacional 9 (RN-9) hacia el norte", "Recorrer la Quebrada de Humahuaca pasando por Volcán, Tumbaya y otros pueblos", "Tras unos 113 km llegar a Tilcara; la entrada al sitio está en la ladera al sudeste del centro"] }
      ]},
      city: { title: "🏘️ A Pie desde el Pueblo de Tilcara", content: "El sitio está a una breve caminata de **10–15 minutos** desde la plaza principal de Tilcara, con una suave pendiente ascendente. Es la forma más directa de llegar.", steps: ["Desde la plaza principal de Tilcara seguir la señalización hacia el Pucará", "Caminar en leve subida unos 10–15 minutos", "Llegar a la boletería y la entrada"] },
      tips: { title: "Transporte y Altura", items: [
        "**Altura**: Tilcara está a ~2.465m, la misma altura que el sitio — conviene aclimatarse medio día al llegar",
        "San Salvador de Jujuy está a ~85 km de Tilcara (≈1 hora en auto)",
        "La Ruta Nacional 9 (RN-9) está en buen estado y el paisaje es espectacular — uno de los recorridos más escénicos de Argentina",
        "Ómnibus directos van desde la ciudad de Salta hasta Tilcara (aprox. 3,5–4 horas)",
        "Combinar con Purmamarca (Cerro de los Siete Colores), Humahuaca e Iruya para un itinerario de varios días"
      ] }
    },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps", categories: [ { key: "fortress", label: "Fortaleza" }, { key: "artifacts", label: "Artefactos" }, { key: "cactus", label: "Jardín de Cactus" }, { key: "canyon", label: "Panorama de la Quebrada" } ] },
    reviews: {
      title: "Reseñas de Visitantes y Exploración Cercana",
      subtitle: "Voces del Pucará de Tilcara: Testimonios Reales de Google Maps",
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas que Vale la Pena Visitar",
      nearbyIntro: "Después de recorrer la fortaleza milenaria, podés visitar fácilmente los siguientes destinos cercanos:",
      nearbyItems: [
        { name: "Cerro de los Siete Colores", description: "Ubicado en Purmamarca, a unos 25 km de Tilcara. Famoso por sus franjas de colores rojo, naranja, amarillo, verde y púrpura — uno de los puntos fotográficos más icónicos del noroeste argentino." },
        { name: "Quebrada de Humahuaca", description: "Valle de 155 km declarado Patrimonio de la Humanidad por la UNESCO, que une Tilcara, Humahuaca, Purmamarca y muchos otros pueblos encantadores con paisajes multicolores." },
        { name: "Salinas Grandes", description: "Enorme salar en el límite entre Jujuy y Salta, a unos 3.450 m de altitud. La costra blanca deslumbrante contra un cielo azul cobalto crea un paisaje surrealista — una de las maravillas naturales más impresionantes del altiplano andino." }
      ]
    },
    faq: { title: "Preguntas Frecuentes", subtitle: "Conocé Más Sobre el Pucará de Tilcara", items: [
      { question: "¿Qué significa 'Pucará de Tilcara'?", answer: "'Pucará' proviene del quechua y significa 'fortaleza' o 'bastión'. 'Tilcara' es el nombre del pueblo donde se encuentra el sitio. Por lo tanto, Pucará de Tilcara puede traducirse como 'la fortaleza de Tilcara'. Es una fortaleza defensiva de montaña construida por el pueblo omaguaca en los siglos XII–XIII d.C." },
      { question: "¿Cuáles son los horarios y el precio de la entrada?", answer: "Está abierto de martes a domingo, 09:00–18:30 (cerrado los lunes excepto feriados); en temporada alta o verano el horario puede variar y se recomienda ingresar antes de las 17:30. Se cobra entrada; las tarifas varían según residencia. El sitio es administrado por la Universidad de Buenos Aires — consultá tilcara.filo.uba.ar para información actualizada." },
      { question: "¿Qué debo tener en cuenta al visitar?", answer: "El sitio está a ~2.465m; tomate tiempo para aclimatarte. El sol es extremo — usá protección solar. No trepes ni toques los muros, andá por senderos señalizados, llevate toda la basura y respetá este Patrimonio Mundial. Usá calzado firme y antideslizante." },
      { question: "¿Cómo llego a Tilcara desde Buenos Aires?", answer: "Volá de Buenos Aires al Aeropuerto Internacional de Jujuy (JUJ, ≈2 hs), luego manejá o tomá un micro por la Ruta Nacional 9 hacia el norte unos 113 km (1,5 hs) hasta Tilcara. Alternativamente, volá a Salta (SLA) y viajá unos 210 km (3,5–4 hs)." },
      { question: "¿Cuál es la relación entre el Pucará y la Quebrada de Humahuaca?", answer: "El Pucará de Tilcara está ubicado en el tramo medio de la Quebrada de Humahuaca. La quebrada fue declarada Patrimonio de la Humanidad por la UNESCO en 2003, y el Pucará es el sitio arqueológico preincaico más grande y mejor conservado dentro de la quebrada." }
    ]},
    location: { title: "Ubicación", address: "Y4624 Tilcara\nProvincia de Jujuy\nArgentina", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "El Pucará de Tilcara es una joya de la Quebrada de Humahuaca, Patrimonio de la Humanidad, y un testimonio extraordinario de la civilización preincaica. Sumate a nosotros para proteger esta fortaleza milenaria y que la historia siga resonando entre sus muros de piedra.", text: "© 2026 Guía de Pucará de Tilcara · Todos los derechos reservados.\nEste sitio web es una guía educativa independiente sin fines de lucro dedicada a difundir información precisa sobre el Pucará de Tilcara. No estamos afiliados con el gobierno argentino, la Universidad de Buenos Aires ni ninguna autoridad oficial.", made: "Este es un proyecto educativo independiente sin fines de lucro, creado para exploradores, aprendices y amantes de la cultura.", linksTitle: "Enlaces Amigos", links: PUCA_LINKS },
    siteMap: {
      title: "Mapa Interactivo del Sitio",
      intro: "Pasá el cursor (o tocá) sobre los marcadores del mapa para explorar las cinco áreas centrales del Pucará de Tilcara.",
      hint: "Pasá el cursor · Tocá para fijar",
      cta: "Ver el mapa completo del sitio",
      zones: [
        { key: "entrada", name: "Barrio de la Entrada", desc: "La puerta defensiva principal de la fortaleza, con obras complejas, dominando la garganta norte–sur de la quebrada." },
        { key: "iglesia", name: "Iglesia", desc: "Un edificio ceremonial restaurado arqueológicamente, que revela la mezcla de rito y vida cotidiana en el sitio." },
        { key: "monumento", name: "Barrio del Monumento", desc: "Donde se alza la Pirámide truncada de 1935, en homenaje a dos arqueólogos fundacionales." },
        { key: "corrales", name: "Corrales", desc: "Restos de los recintos donde se criaban llamas y guanacos — eco de la leyenda de Coquena resguardando los rebaños." },
        { key: "necrópolis", name: "Necrópolis", desc: "El antiguo cementerio omaguaca, clave para entender la cultura funeraria y las creencias preincaicas." }
      ]
    },
    itinerary: {
      title: "Itinerario Sugerido",
      intro: "Con medio día alcanza para una visita profunda. Usá la línea de tiempo como guía y ajustala a tu ritmo y la luz.",
      steps: [
        { time: "09:00", title: "Llegada al sitio", text: "Con la luz aún suave, empezá por el barrio de entrada y recorré el núcleo y los callejones de piedra." },
        { time: "10:30", title: "Subí a la Pirámide", text: "Subí al alto del monumento para fotos panorámicas de la Quebrada y el Cerro de los Siete Colores." },
        { time: "11:00", title: "Jardín Botánico de Altura", text: "Caminá el jardín de cactus y admirá las curiosas formas de la flora xerófila andina sobre los muros." },
        { time: "11:30", title: "Bajada al pueblo", text: "Bajá al pueblo de Tilcara y visitá el Museo Arqueológico Dr. Eduardo Casanova." },
        { time: "13:00", title: "Almuerzo en el pueblo", text: "Disfrutá un almuerzo norteño en el pueblo y cerrá tu media jornada cultural." }
      ]
    },
    ctaBand: {
      title: "Planificá tu Viaje a Tilcara",
      subtitle: "Desde las entradas hasta el guía, hacé tu visita a la fortaleza milenaria relajada y en profundidad.",
      buttons: ["Entradas y Horarios", "Reservá Guía Oficial en Inglés", "Ver Ubicación en Maps"]
    }
  },
  it: {
    nav: { history: "Storia e Archeologia", architecture: "Struttura del Sito", monuments: "Cosa Fare", eco: "Tutela Patrimoniale", visiting: "Info Visita", transportation: "Trasporti", gallery: "Galleria", reviews: "Recensioni", faq: "FAQ", location: "Posizione" },
    hero: {
      tags: ["Patrimonio UNESCO", "Sito Preincaico", "Altitudine 2.465m"],
      tagline: "Argentina · Provincia di Jujuy",
      title: "Pucará de Tilcara",
      subtitle: "Fortezza Preincaica · Quebrada de Humahuaca · Ande",
      cta: "Esplora la Fortezza Millenaria",
      description: {
        address: "Y4624 Tilcara, Provincia di Jujuy, Argentina",
        phone: "+54 388 422-1325",
        category: "Sito Storico · Rovine Archeologiche"
      }
    },
    rating: { reviews: "recensioni", source: "Recensioni Google" },
    history: {
      title: "Echi di una Fortezza Millenaria",
      intro: `Il Pucará de Tilcara sorge nel cuore della Quebrada de Humahuaca a circa **2.465 metri** di altitudine, ed è uno dei siti archeologici preincaici più importanti ed estesi del nord-ovest argentino.\n\n**Il Bastione Strategico degli Omaguacas**\n"Pucará" significa "fortezza" o "bastione" in quechua. Questa cittadella di pietra fu costruita dal popolo omaguaca tra il **XII e il XIII secolo** d.C., su un promontorio naturale che si eleva circa 80 metri sopra la confluenza del Río Grande e del Río Huasamayo, dominando il corridoio strategico nord–sud della gola.\n\n**Lo Scavo Pionieristico di Ambrosetti**\nNel **1908**, il pioniere dell'archeologia argentina **Juan Bautista Ambrosetti** guidò il primo scavo sistematico del sito con il Museo Etnografico dell'Università di Buenos Aires. Negli anni '10 del Novecento, Ambrosetti realizzò il restauro parziale di alcuni muri e abitazioni — un approccio rivoluzionario per l'archeologia sudamericana dell'epoca. Oggi il sito è gestito dal Centro Universitario Tilcara dell'UBA.\n\n**Parte di un Patrimonio Mondiale UNESCO**\nNel **2003**, la Quebrada de Humahuaca, dove si trova il Pucará de Tilcara, è stata dichiarata **Patrimonio dell'Umanità dall'UNESCO**. Questa valle lunga 155 km testimonia 10.000 anni di evoluzione culturale: dai cacciatori-raccoglitori preistorici, attraverso l'Impero Inca, fino all'epoca coloniale spagnola.

**Il Breve Dominio dell'Impero Inca**
Gli omaguacas non furono gli ultimi governanti di questa terra. Alla fine del XV secolo d.C. (pochi decenni prima dell'arrivo degli spagnoli), l'Impero Inca si espanse verso sud da nord e conquistò la Quebrada de Humahuaca. Il Pucará de Tilcara divenne così un importante nodo amministrativo e militare della celebre rete stradale incaica — il **Qhapaq Ñan**. Questo spiega anche perché alcuni reperti rinvenuti nel sito mostrano uno stile incaico marcato: dalla ceramica agli oggetti metallici, le civiltà preincaica e incaica qui si incontrarono, si sovrapposero e si fusero.`
    },
    myths: {
      title: "Leggende Andine e Miti della Quebrada",
      intro: "Nella cosmovisione andina, montagne, fiumi e pietre sono esseri viventi con un'anima. Queste leggende conferiscono una dimensione spirituale più profonda alla fortezza millenaria.",
      items: [
        {
          title: "La Madre Terra: Pachamama",
          content: "Nel sistema di credenze andino, la Pachamama è la dea madre suprema che presiede la fertilità, l'agricoltura e tutta la vita terrena. Ogni 1° agosto, Tilcara e l'intera provincia di Jujuy celebrano la cerimonia della Pachamama.\n\nDurante il rituale si scava una buca nella terra e si offrono cibo, foglie di coca, chicha e tabacco alla Madre Terra, ringraziandola per i raccolti dell'anno passato e chiedendo prosperità per l'anno a venire.\n\nAll'interno del Pucará de Tilcara, la connessione spirituale con la terra è ancora palpabile — ogni muro di pietra, ogni gradino sembra un omaggio silenzioso alla Pachamama. Ogni agosto, la gente del posto celebra anche il rito dell'«offerta alla terra» (Corpachada) intorno al sito, seppellendo foglie di coca, chicha e cibo nel suolo — mantenendo vivo il patto più ancestrale con la Madre Terra."
        },
        {
          title: "Il Dio Sole Inti e la Luce della Quebrada",
          content: "Gli Inca consideravano Inti, il dio sole, come la divinità suprema e credevano che l'imperatore inca fosse figlio del sole. Quando l'Impero Inca si espanse nella Quebrada de Humahuaca a metà del XV secolo, fuse i suoi rituali solari con le tradizioni locali.\n\nSi dice che alcuni muri del Pucará fossero orientati per catturare i primi raggi del sole nel solstizio d'inverno (Inti Raymi). Quando la luce dorata attraversa la nebbia mattutina e cade sulla pietra antica, gli abitanti credono che Inti stia benedicendo la terra e la sua gente.\n\nAncora oggi, ogni giugno il paese di Tilcara celebra festività legate al culto solare, mantenendo viva una tradizione millenaria. Si racconta che all'alba del solstizio d'inverno (Inti Raymi), il primo raggio di sole cada proprio sul punto più alto della fortezza — questo belvedere, a quasi 2.500 metri, non fu solo un bastione difensivo, ma anche un «osservatorio» naturale."
        },
        {
          title: "Il Guardiano della Quebrada: Coquena",
          content: "Nel folclore del nord-ovest argentino, Coquena è un piccolo spirito protettore degli animali selvatici, in particolare vigogne e guanachi. Indossa un poncho e un cappello a tesa larga, e vaga silenziosamente negli angoli più profondi della quebrada.\n\nLa leggenda narra che Coquena punisca i cacciatori che uccidono animali senza necessità, ma guidi i pastori dal cuore buono verso i loro greggi perduti. Sulle colline vicino al Pucará si possono avvistare branchi di guanachi selvatici, e la gente del posto mormora: 'Coquena li sta pascolando.'\n\nQuesta leggenda riecheggia i valori di conservazione odierni — trattare con gentilezza le creature di questa terra significa onorare il lascito degli antenati. Nel sito del Pucará, gli archeologi hanno effettivamente rinvenuto gli antichi recinti (Corrales) dove si allevavano le lama; le lama erano il principale mezzo di trasporto e fonte di calore degli omaguacas, e si crede che sia Coquena a custodire segretamente questi greggi dentro la fortezza."
        }
      ]
    },
    curiosities: {
      title: "Curiosità Archeologiche e Vignette Culturali",
      content: `La parola "Pucará" deriva dal quechua e significa "fortezza" o "opera difensiva". In tutta la regione andina del Sudamerica, quasi ogni sito con il prefisso "Pucará" è una fortezza strategica precolombiana.\n\n**La Piramide di Tilcara**\nL'elemento moderno più visibile all'interno del sito è una piramide di pietra costruita dalla Commissione d'Omaggio di Jujuy il **9 marzo 1935**, per onorare due archeologi che hanno dato contributi eccezionali allo scavo e al restauro del sito:\n\n• Targa sinistra rende omaggio a **Juan B. Ambrosetti (1865–1917)** — pioniere dell'archeologia argentina che guidò il primo scavo sistematico del Pucará de Tilcara nel 1908.\n• Targa destra rende omaggio a **Salvador Debenedetti (1884–1930)** — discepolo e successore archeologico di Ambrosetti, che continuò il restauro e la ricerca.\n\nIl pannello centrale del monumento porta un'iscrizione profondamente poetica:\n\n*"De entre las cenizas muertas de un pueblo muerto, exhumaron las culturas aborígenes, dando eco al silencio. El Museo Etnográfico, la Cátedra y el Libro resumieron la obra."*\n\n(Dalle ceneri morte di un popolo morto, dissotterrarono le culture indigene, dando eco al silenzio. Il Museo Etnografico, la Cattedra Universitaria e il Libro riassunsero l'opera.)\n\n**Una Nota di Controversia Accademica**
Va notato che questa piramide (Piramide trunca, la piramide troncata) presenta uno spiccato **stile azteco mesoamericano** che non ha alcun legame, nel linguaggio architettonico, con la cultura omaguaca preincaica locale. Gli storici dell'architettura concordano nel ritenerla una «traccia della sua epoca» lasciata dai restauratori di inizio Novecento, non parte del tessuto originale del sito. Oggi, questa controversa costruzione moderna è divenuta un testimone vivo della sovrapposizione storica del Pucará de Tilcara — da fortezza indigena a patrimonio culturale moderno.

**Targa Commemorativa «Memoria, Verità e Giustizia»**\nUna significativa targa commemorativa moderna è stata installata nel sito dal Centro Universitario di Tilcara (Facoltà di Filosofia e Lettere, Università di Buenos Aires) il **24 marzo 2015**, in omaggio alle vittime della dittatura militare argentina (la «Guerra Sporca», 1976–1983):\n\n• Oltre 420 studenti, docenti e personale non docente detenuti-scomparsi della Facoltà di Filosofia e Lettere dell'UBA.\n• Oltre 200 detenuti-scomparsi della provincia di Jujuy.\n• Oltre 30.000 detenuti-scomparsi in tutta l'Argentina durante il Terrorismo di Stato, 1976–1983.\n• Popoli Originari, vittime del genocidio dal 1492.\n\nLa targa porta la forte iscrizione: **«¡Nunca Más!» (Mai Più!)**, testimonianza del confronto collettivo dell'Argentina con il trauma storico e l'incessante ricerca di giustizia.\n\n**Giardino Botanico d'Alta Quota**\nIl giardino coltiva centinaia di specie di cactus e piante succulente del nord-ovest argentino e delle Ande, formando una comunità vegetale xerofila unica a quasi 2.500 metri sul livello del mare.`
    },
    eco: {
      title: "Tutela del Patrimonio",
      intro: "Il Pucará de Tilcara non è solo un sito archeologico — è parte di un'area dichiarata Patrimonio dell'Umanità dall'UNESCO. Come guida educativa indipendente non profit, promuoviamo la visita più rispettosa possibile a questo monumento millenario.",
      items: [
        "**Non toccare i muri**: non arrampicarsi né appoggiarsi sulle strutture di pietra — sono secolari e fragili",
        "**Percorrere i sentieri segnalati**: seguire i camminamenti e la segnaletica; non entrare in aree riservate",
        "**Non lasciare tracce**: portare via tutti i rifiuti; mantenere il sito nel suo stato originale",
        "**Rispettare il patrimonio culturale**: non incidere né dipingere i muri — sono beni culturali insostituibili",
        "**Esplorazione silenziosa**: il sito è un'area attiva di ricerca archeologica; mantenere basso il volume della voce",
        "**Sostenere l'ente gestore**: il sito è amministrato dall'UBA; il biglietto finanzia direttamente conservazione e ricerca"
      ]
    },
    architecture: {
      title: "Struttura del Sito e Scoperte Archeologiche",
      intro: "Il Pucará de Tilcara è una delle cittadelle preincaiche di montagna meglio conservate. Sebbene sia stato parzialmente restaurato all'inizio del XX secolo, il suo impianto di base riflette fedelmente la maestria degli omaguacas nella costruzione megalitica.",
      specs: {
        structure: { title: "Distribuzione dell'Insediamento", content: "Il sito copre circa 15 ettari, disposto a terrazze lungo il crinale. Secondo la mappa incisa su pietra nel sito stesso (Croquis del Pucará), cinque settori sono stati restaurati e sono aperti al pubblico: ① Barrio de la Entrada (Area d'Ingresso) — l'accesso difensivo principale alla fortezza; ② Iglesia (Chiesa) — edificio cerimoniale restaurato archeologicamente; ③ Barrio del Monumento (Area del Monumento) — dove sorge la Piramide del 1935; ④ Corrales (Recinti) — vestigia dei recinti per lama e guanachi; ⑤ Necrópolis (Necropoli) — l'antico cimitero omaguaca.\n\nLe abitazioni in pietra (oltre 100 unità) hanno muri a secco in granito e calcare locale, da 0,5 a 1,5 metri di spessore. Diversi accessi presentano complesse opere difensive, dimostrando una sofisticata architettura militare." },
        design: { title: "Tecnica Costruttiva", content: "Gli omaguacas impiegavano la tecnica della 'pietra a secco' (pirca) — incastrando le pietre con precisione senza malta. Questo metodo offre una notevole resistenza sismica nella regione andina. I muri di solito si inclinano leggermente verso l'interno per maggiore stabilità, e l'insieme sfrutta al massimo il terreno naturale in un disegno terrazzato." },
        optics: { title: "Museo e Giardino Botanico", content: "Il Museo Arqueológico Dr. Eduardo Casanova, situato all'interno del sito, espone una ricca collezione di reperti — ceramiche, utensili litici, strumenti in osso e ornamenti metallici — ricostruendo vividamente la vita quotidiana del popolo omaguaca. Il giardino botanico d'alta quota mostra la flora xerofila unica della regione andina." }
      },
      plaque: {
        title: "Informazioni di Base",
        items: [
          { label: "Nome", value: "Pucará de Tilcara" },
          { label: "Posizione", value: "Tilcara, Provincia di Jujuy, Argentina" },
          { label: "Costruito", value: "Secoli XII–XIII d.C. (preincaico)" },
          { label: "Altitudine", value: "ca. 2.465 m" },
          { label: "Superficie", value: "ca. 15 ettari" },
          { label: "Gestito da", value: "Università di Buenos Aires (UBA)" },
          { label: "Patrimonio Mondiale", value: "Quebrada de Humahuaca (UNESCO 2003)" }
        ]
      }
    },
    monuments: {
      title: "Cosa Fare al Pucará de Tilcara",
      intro: "Questo sito coniuga esplorazione archeologica, immersione culturale e paesaggi andini mozzafiato. Le esperienze seguenti sono apprezzate da appassionati di storia, fotografi e viaggiatori culturali.",
      items: [
        { name: "Esplorare le Rovine", description: "Serpeggiare lungo i sentieri di pietra tra vicoli e piazzette della fortezza, toccando muri levigati da mille anni di vento e intemperie. Dal punto più alto, ammirare la confluenza del Río Grande e del Huasamayo — immaginare i guerrieri omaguacas che scrutavano l'orizzonte da questo stesso luogo un millennio fa." },
        { name: "Visitare il Museo Archeologico", description: "Il Museo Arqueológico Dr. Eduardo Casanova ospita una preziosa collezione di reperti provenienti dal sito e dai dintorni, dagli utensili quotidiani agli oggetti rituali — una finestra vivida sulla civiltà precolombiana dell'altopiano andino." },
        { name: "Giardino Botanico d'Alta Quota", description: "A quasi 2.500 metri, il Jardín Botánico de Altura è uno dei giardini xerofili più caratteristici dell'Argentina. Centinaia di cactus e piante succulente, in ogni forma immaginabile, si stagliano contro cieli blu intenso e muri di pietra antica — un meraviglioso quadro di vita." },
        { name: "Vista Panoramica sulla Quebrada", description: "Dalle alture della fortezza, la Quebrada de Humahuaca si dispiega in tutta la sua grandezza. Verso nord-est, il famoso Cerro de los Siete Colores rivela le sue impressionanti sfumature alla luce del sole — una delle vedute più iconiche delle Ande." }
      ]
    },
    contrast: {
      title: "Muri di Pietra e Quebrada Infinita",
      intro: "La magia del Pucará de Tilcara risiede nel profondo dialogo tra il patrimonio umano e la natura spettacolare. Da un lato, muri di pietra silenziosi; dall'altro, la Quebrada eterna — due immagini catturano questo dialogo attraverso i secoli.",
      before: "Muri Millenari",
      after: "Panorama della Quebrada"
    },
    visiting: {
      title: "Pianifica la Tua Visita",
      intro: "Il Pucará de Tilcara è aperto al pubblico tutto l'anno. Si consiglia una visita di mezza giornata per esplorarlo in profondità. Le seguenti informazioni ti aiutano a pianificare con serenità.",
      hours: { title: "Orari", content: "Da martedì a domenica: **09:00–18:30**\nChiuso il lunedì (eccetto festivi)\nNella stagione alta o estiva l'orario può variare; si consiglia l'ingresso entro le 17:30.", note: "Gli orari possono variare in base alla stagione e agli eventi speciali; consultare il sito web ufficiale prima della visita." },
      price: { title: "Biglietto", content: "L'ingresso è a pagamento; il prezzo esatto dipende dalla residenza ed è esposto in loco e sul sito web. I residenti argentini, gli studenti e gli over 65 hanno solitamente tariffe ridotte.\nIl ricavato finanzia conservazione e ricerca accademica.", note: "Gestito dal Centro Universitario Tilcara (UBA). Consultare tilcara.filo.uba.ar per i prezzi aggiornati." },
      duration: { title: "Durata Consigliata", content: "Sito principale + museo: circa **2–3 ore**.\nEsplorazione approfondita + giardino botanico + fotografia: **4–5 ore**.", note: "Combinare con il paese di Tilcara, il Cerro de los Siete Colores (Purmamarca) e la Quebrada de Humahuaca per un viaggio culturale di 2–3 giorni nel nord-ovest." },
      tips: { title: "Consigli e Raccomandazioni", items: [
        "**Acclimatamento all'altitudine**: il sito è a ~2.465m. Prendila con calma, bevi molta acqua ed evita sforzi intensi all'arrivo",
        "**Protezione solare indispensabile**: il sole andino è intenso in quota — usa crema solare ad alto fattore, occhiali da sole e cappello a tesa larga",
        "**Scarpe comode**: si raccomandano scarpe basse antiscivolo; ci sono molti gradini di pietra e sentieri sterrati",
        "**Idratazione**: il clima d'alta quota è molto secco; porta almeno 1 litro d'acqua a persona",
        "**Foglie di coca**: disponibili in paese; masticarle o prepararle in infuso aiuta con i sintomi dell'altitudine",
        "**Etichetta fotografica**: alcuni pezzi del museo potrebbero avere restrizioni — presta attenzione alla segnaletica"
      ] },
      essentials: [
        { icon: "🫁", title: "Altitudine", text: "A ~2.465m, prendila con calma all'arrivo, bevi abbondante acqua e mastica foglie di coca per alleviare i sintomi." },
        { icon: "☀️", title: "Protezione solare", text: "Il sole andino è estremo — indossa occhiali da sole, cappello a tesa larga e crema solare ad alto fattore." },
        { icon: "👟", title: "Calzature", text: "Tutti i sentieri sono di pietra irregolare; niente tacchi — si raccomandano scarpe da trekking robuste." },
        { icon: "💧", title: "Idratazione", text: "Il clima d'alta quota è molto secco; porta almeno 1 litro d'acqua a persona." }
      ]
    },
    transportation: {
      title: "Guida Precisa ai Trasporti",
      airport: { title: "✈️ Dalla Capitale / Aeroporto di Jujuy", content: "L'aeroporto più vicino è l'Aeroporto Internazionale Gobernador Horacio Guzmán (JUJ), a circa 113 km da Tilcara. L'Aeroporto di Salta (SLA) è un'alternativa, a circa 210 km.", options: [
        { name: "Auto propria / a noleggio (Consigliato)", price: "ca. 1,5 ore", time: "113 km", steps: ["Dall'aeroporto di Jujuy prendere la Ruta Nacional 9 (RN-9) verso nord", "Percorrere la Quebrada de Humahuaca passando per Volcán, Tumbaya e altri villaggi", "Dopo circa 113 km arrivare a Tilcara; l'ingresso del sito è sul pendio a sud-est del centro"] }
      ]},
      city: { title: "🏘️ A Piedi dal Paese di Tilcara", content: "Il sito dista una breve camminata di **10–15 minuti** dalla piazza principale di Tilcara, con una leggera salita. È il modo più diretto per raggiungere l'ingresso.", steps: ["Dalla piazza principale di Tilcara seguire le indicazioni per il Pucará", "Camminare in leggera salita per 10–15 minuti", "Arrivare alla biglietteria e all'ingresso"] },
      tips: { title: "Trasporti e Altitudine", items: [
        "**Altitudine**: Tilcara è a ~2.465m, la stessa quota del sito — conviene acclimatarsi per mezza giornata all'arrivo",
        "San Salvador de Jujuy dista ~85 km da Tilcara (≈1 ora in auto)",
        "La Ruta Nacional 9 (RN-9) è in buone condizioni e il paesaggio è spettacolare — uno dei percorsi più panoramici dell'Argentina",
        "Autobus diretti collegano la città di Salta a Tilcara (ca. 3,5–4 ore)",
        "Combinare con Purmamarca (Cerro de los Siete Colores), Humahuaca e Iruya per un itinerario di più giorni"
      ] }
    },
    gallery: { title: "Galleria Fotografica", viewMore: "Vedi Altre Foto su Google Maps", categories: [ { key: "fortress", label: "Fortezza" }, { key: "artifacts", label: "Reperti" }, { key: "cactus", label: "Giardino di Cactus" }, { key: "canyon", label: "Panorama della Quebrada" } ] },
    reviews: {
      title: "Recensioni dei Visitatori ed Esplorazione dei Dintorni",
      subtitle: "Voci dal Pucará de Tilcara: Testimonianze Reali da Google Maps",
      viewMore: "Vedi Altre Recensioni su Google Maps",
      nearbyTitle: "Attrazioni Vicine che Vale la Pena Visitare",
      nearbyIntro: "Dopo aver esplorato la fortezza millenaria, puoi visitare facilmente le seguenti destinazioni vicine:",
      nearbyItems: [
        { name: "Cerro de los Siete Colores (Collina dei Sette Colori)", description: "Situato a Purmamarca, a circa 25 km da Tilcara. Famoso per le sue fasce di colori rosso, arancione, giallo, verde e porpora — uno dei punti fotografici più iconici del nord-ovest argentino." },
        { name: "Quebrada de Humahuaca", description: "Valle di 155 km dichiarato Patrimonio dell'Umanità dall'UNESCO, che unisce Tilcara, Humahuaca, Purmamarca e tanti altri villaggi incantevoli dai paesaggi multicolori." },
        { name: "Salinas Grandes (Grandi Saline)", description: "Enorme distesa di sale al confine tra Jujuy e Salta, a circa 3.450 m di altitudine. La crosta bianca abbagliante contro un cielo blu cobalto crea un paesaggio surreale — una delle meraviglie naturali più impressionanti dell'altopiano andino." }
      ]
    },
    faq: { title: "Domande Frequenti", subtitle: "Scopri di Più sul Pucará de Tilcara", items: [
      { question: "Cosa significa 'Pucará de Tilcara'?", answer: "'Pucará' deriva dal quechua e significa 'fortezza' o 'bastione'. 'Tilcara' è il nome del paese dove si trova il sito. Quindi Pucará de Tilcara può essere tradotto come 'la fortezza di Tilcara'. È una fortezza difensiva di montagna costruita dal popolo omaguaca nei secoli XII–XIII d.C." },
      { question: "Quali sono gli orari e il prezzo del biglietto?", answer: "È aperto da martedì a domenica, 09:00–18:30 (chiuso il lunedì eccetto festivi); nella stagione alta o estiva l'orario può variare e si consiglia l'ingresso entro le 17:30. L'ingresso è a pagamento; le tariffe variano in base alla residenza. Il sito è gestito dall'Università di Buenos Aires — consulta tilcara.filo.uba.ar per informazioni aggiornate." },
      { question: "Cosa devo tenere presente durante la visita?", answer: "Il sito è a ~2.465m; prenditi tempo per acclimatarti. Il sole è estremo — usa protezione solare. Non arrampicarti né toccare i muri, cammina sui sentieri segnalati, porta via tutti i rifiuti e rispetta questo Patrimonio Mondiale. Usa scarpe robuste e antiscivolo." },
      { question: "Come arrivo a Tilcara da Buenos Aires?", answer: "Vola da Buenos Aires all'Aeroporto Internazionale di Jujuy (JUJ, ≈2 ore), poi guida o prendi un autobus sulla Ruta Nacional 9 verso nord per circa 113 km (1,5 ore) fino a Tilcara. In alternativa, vola a Salta (SLA) e viaggia per circa 210 km (3,5–4 ore)." },
      { question: "Qual è la relazione tra il Pucará e la Quebrada de Humahuaca?", answer: "Il Pucará de Tilcara si trova nel tratto medio della Quebrada de Humahuaca. La quebrada è stata dichiarata Patrimonio dell'Umanità dall'UNESCO nel 2003, e il Pucará è il sito archeologico preincaico più grande e meglio conservato all'interno della quebrada." }
    ]},
    location: { title: "Posizione", address: "Y4624 Tilcara\nProvincia di Jujuy\nArgentina", openMaps: "Vedi su Google Maps" },
    footer: { callToAction: "Il Pucará de Tilcara è un gioiello della Quebrada de Humahuaca, Patrimonio dell'Umanità, e una straordinaria testimonianza della civiltà preincaica. Unisciti a noi per proteggere questa fortezza millenaria affinché la storia continui a risuonare tra le sue mura di pietra.", text: "© 2026 Guida di Pucará de Tilcara · Tutti i diritti riservati.\nQuesto sito è una guida educativa indipendente senza scopo di lucro dedicata a diffondere informazioni accurate sul Pucará de Tilcara. Non siamo affiliati con il governo argentino, l'Università di Buenos Aires né alcuna autorità ufficiale.", made: "Questo è un progetto educativo indipendente non profit, creato per esploratori, apprendisti e amanti della cultura.", linksTitle: "Link Amici", links: PUCA_LINKS },
    siteMap: {
      title: "Mappa Interattiva del Sito",
      intro: "Passa il cursore (o tocca) sui marcatori della mappa per esplorare le cinque aree centrali del Pucará de Tilcara.",
      hint: "Passa il cursore · Tocca per fissare",
      cta: "Vedi la mappa completa del sito",
      zones: [
        { key: "entrada", name: "Barrio de la Entrada", desc: "Il principale accesso difensivo della fortezza, con opere complesse, domina la gola nord–sud della quebrada." },
        { key: "iglesia", name: "Iglesia (Chiesa)", desc: "Un edificio cerimoniale restaurato archeologicamente, che rivela l'intreccio di rito e vita quotidiana nel sito." },
        { key: "monumento", name: "Barrio del Monumento", desc: "Dove sorge la Piramide troncata del 1935, in omaggio a due archeologi fondamentali." },
        { key: "corrales", name: "Corrales (Recinti)", desc: "Resti dei recinti dove si allevavano lama e guanachi — eco della leggenda di Coquena che protegge i greggi." },
        { key: "necrópolis", name: "Necrópolis", desc: "L'antico cimitero omaguaca, chiave per comprendere la cultura funeraria e le credenze preincaiche." }
      ]
    },
    itinerary: {
      title: "Itinerario Suggerito",
      intro: "Mezza giornata basta per una visita approfondita. Usa la linea del tempo come guida e adattala al tuo ritmo e alla luce.",
      steps: [
        { time: "09:00", title: "Arrivo al sito", text: "Con la luce ancora morbida, parti dal barrio d'ingresso e esplora il nucleo e i vicoli di pietra." },
        { time: "10:30", title: "Sali alla Piramide", text: "Sali al punto più alto del monumento per scatti panoramici della Quebrada e del Cerro de los Siete Colores." },
        { time: "11:00", title: "Giardino Botanico d'Altura", text: "Passeggia tra i cactus e ammira le curiose forme della flora xerofila andina sui muri di pietra." },
        { time: "11:30", title: "Discesa al paese", text: "Scendi al paese di Tilcara e visita il Museo Archeologico Dr. Eduardo Casanova." },
        { time: "13:00", title: "Pranzo al paese", text: "Gustati un pranzo andino nel paese e concludi la tua mezza giornata culturale." }
      ]
    },
    ctaBand: {
      title: "Pianifica il Tuo Viaggio a Tilcara",
      subtitle: "Dai biglietti alla guida, rendi la tua visita alla fortezza millenaria rilassata e approfondita.",
      buttons: ["Biglietti e Orari", "Prenota Guida Ufficiale in Inglese", "Vedi Posizione su Maps"]
    }
  }
};
