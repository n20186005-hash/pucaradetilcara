export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}`;

  const name =
    locale === 'es'
      ? 'Pucará de Tilcara'
      : locale === 'zh'
        ? '蒂尔卡拉古堡'
        : locale === 'it'
          ? 'Pucará de Tilcara'
          : 'Pucará de Tilcara';

  const description =
    locale === 'es'
      ? 'Pucará de Tilcara en Jujuy, Argentina. Fortaleza preincaica en la Quebrada de Humahuaca, Patrimonio de la Humanidad UNESCO.'
      : locale === 'zh'
        ? '阿根廷胡胡伊省的蒂尔卡拉古堡（Pucará de Tilcara），乌马瓦卡峡谷中的前印加时期堡垒，联合国教科文组织世界遗产。'
        : locale === 'it'
          ? 'Pucará de Tilcara a Jujuy, Argentina. Fortezza preincaica nella Quebrada de Humahuaca, Patrimonio UNESCO.'
          : 'Pucará de Tilcara in Jujuy, Argentina. A pre-Inca fortress in the Quebrada de Humahuaca, UNESCO World Heritage Site.';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place', 'LandmarksOrHistoricalBuildings'],
        name,
        alternateName: ['Pucará de Tilcara', 'Pucará', '蒂尔卡拉古堡', 'Fortaleza de Tilcara'],
        description,
        url: localUrl,
        image: `${baseUrl}/gallery/pucara-de-tilcara-03.jpg`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -23.588,
          longitude: -65.403,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Y4624 Tilcara',
          addressLocality: 'Tilcara',
          addressRegion: 'Jujuy',
          addressCountry: 'AR',
        },
        telephone: '+543884221325',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '18:00',
        },
        priceRange: 'ARS',
        isAccessibleForFree: false,
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: 'CH7W+JG Tilcara, Jujuy' },
          { '@type': 'PropertyValue', name: 'altitude', value: '2.465 metros' },
          { '@type': 'PropertyValue', name: 'period', value: 'Siglo XII-XIII (preincaico)' },
          { '@type': 'PropertyValue', name: 'worldHeritage', value: 'Quebrada de Humahuaca (UNESCO 2003)' },
        ],
        sameAs: [
          'https://maps.app.goo.gl/Lph5S4oK351NebtFA',
          'https://tilcara.filo.uba.ar/pucará-de-tilcara',
          'https://www.argentina.gob.ar/capital-humano/cultura/monumentos/sitio-arqueologico-pucara-de-tilcara',
          'https://whc.unesco.org/es/list/1116/',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '17015',
          bestRating: '5',
        },
      },
      {
        '@type': 'WebSite',
        url: localUrl,
        name,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        isAccessibleForFree: true,
        publisher: {
          '@type': 'Organization',
          name: 'Pucará de Tilcara Guide',
        },
      },
    ],
  };
}
