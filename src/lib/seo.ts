export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  keywords: string[];
}

export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Pucará de Tilcara — Sitio Arqueológico en Jujuy, Argentina',
      description:
        'Guía de viaje al Pucará de Tilcara en la Quebrada de Humahuaca, Jujuy, Argentina. Fortaleza preincaica, Patrimonio de la Humanidad UNESCO.',
      ogTitle: 'Pucará de Tilcara — Sitio Arqueológico en Jujuy, Argentina',
      ogDescription:
        'Guía de viaje al Pucará de Tilcara. Fortaleza preincaica en la Quebrada de Humahuaca, Patrimonio de la Humanidad UNESCO.',
      siteName: 'Guía de Pucará de Tilcara',
      keywords: [
        'Pucará de Tilcara',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        '蒂尔卡拉古堡',
        '胡胡伊旅游',
        'preincaico',
        'sitio arqueológico',
      ],
    },
    en: {
      title: 'Pucará de Tilcara — Archaeological Site in Jujuy, Argentina',
      description:
        'A travel guide to Pucará de Tilcara in the Quebrada de Humahuaca, Jujuy, Argentina. A pre-Inca fortress and UNESCO World Heritage Site.',
      ogTitle: 'Pucará de Tilcara — Archaeological Site in Jujuy, Argentina',
      ogDescription: 'A travel guide to Pucará de Tilcara. A pre-Inca fortress in the Quebrada de Humahuaca, UNESCO World Heritage.',
      siteName: 'Pucará de Tilcara Travel Guide',
      keywords: [
        'Pucará de Tilcara',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        '蒂尔卡拉古堡',
        '胡胡伊旅游',
        'pre-Inca',
        'archaeological site',
      ],
    },
    zh: {
      title: '蒂尔卡拉古堡（Pucará de Tilcara）— 阿根廷胡胡伊省考古遗址',
      description:
        '蒂尔卡拉古堡（Pucará de Tilcara）旅行指南——探索阿根廷胡胡伊省乌马瓦卡峡谷中的前印加时期堡垒，联合国教科文组织世界遗产。',
      ogTitle: '蒂尔卡拉古堡（Pucará de Tilcara）— 阿根廷胡胡伊省考古遗址',
      ogDescription: '蒂尔卡拉古堡旅行指南——探索阿根廷乌马瓦卡峡谷中的前印加时期堡垒，联合国教科文组织世界遗产。',
      siteName: '蒂尔卡拉古堡旅行指南',
      keywords: [
        'Pucará de Tilcara',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        '蒂尔卡拉古堡',
        '胡胡伊旅游',
        '前印加',
        '考古遗址',
      ],
    },
    it: {
      title: 'Pucará de Tilcara — Sito Archeologico a Jujuy, Argentina',
      description:
        'Guida al Pucará de Tilcara nella Quebrada de Humahuaca, Jujuy, Argentina. Fortezza preincaica, Patrimonio dell\'Umanità UNESCO.',
      ogTitle: 'Pucará de Tilcara — Sito Archeologico a Jujuy, Argentina',
      ogDescription: 'Guida al Pucará de Tilcara. Fortezza preincaica nella Quebrada de Humahuaca, Patrimonio UNESCO.',
      siteName: 'Guida di Pucará de Tilcara',
      keywords: [
        'Pucará de Tilcara',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        '蒂尔卡拉古堡',
        '胡胡伊旅游',
        'preincaico',
        'sito archeologico',
      ],
    },
  };
  return map[locale] || map.es;
}
