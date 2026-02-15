import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shuft.online'
  const now = new Date()

  return [
    // Главная
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Каталог — верхний уровень
    { url: `${baseUrl}/catalog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // Фанкойлы
    { url: `${baseUrl}/catalog/fankoily`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/catalog/fankoily/nastennye`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/catalog/fankoily/nastennye/sfh-800-v3`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/nastennye/sfh-1200-v3`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/kassetnye`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/catalog/fankoily/kassetnye/sfr-950f`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/kassetnye/sfr-1200f`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/kassetnye/sfr-1500f`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/kanalnye`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/catalog/fankoily/kanalnye/sff-300g50`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/kanalnye/sff-500g50`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/kanalnye/sff-800g50`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/kanalnye/sff-1400g50`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/napolno-potolochnye`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/catalog/fankoily/napolno-potolochnye/sff-150`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/napolno-potolochnye/sff-300`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/napolno-potolochnye/sff-400`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/napolno-potolochnye/sff-600`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/fankoily/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // Чиллеры
    { url: `${baseUrl}/catalog/chillery`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/chillery/vozdushnye`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/catalog/chillery/vodnye`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // VRF-системы
    { url: `${baseUrl}/catalog/vrf-sistemy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/catalog/vrf-sistemy/vneshnie-bloki`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/catalog/vrf-sistemy/vnutrennie-bloki`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // Вентиляция
    { url: `${baseUrl}/catalog/ventilyaciya`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/catalog/ventilyaciya/kanalnaya`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/catalog/ventilyaciya/krovelnaya`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },

    // Аксессуары
    { url: `${baseUrl}/catalog/aksessuary`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/catalog/aksessuary/filtry`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/catalog/aksessuary/izolyantsiya`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/catalog/aksessuary/klapany`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/catalog/aksessuary/termostaty`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Запчасти
    { url: `${baseUrl}/catalog/zapchasti`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Услуги
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/montazh-fankoilov`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/podbor-oborudovaniya`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/services/proektirovanie-vrf`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/services/servis-i-remont`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/services/tehpodderzhka`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Калькуляторы
    { url: `${baseUrl}/calc`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/calc/fankoil`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // Проекты
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/projects/ofisy`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projects/torgovye-centry`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projects/proizvodstvo`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projects/restorany-i-cafe`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projects/skladskie-kompleksy`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // FAQ
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // Блог
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/kak-vybrat-fankoil`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/blog/shuft-vs-carrier-daikin`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/blog/nastennye-fankoily-sfh`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/istoriya-brenda-shuft`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/blog/kak-vybrat-dlya-magazina`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/ustanovka-fankoila-v-ofise`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/blog/energoeffektivnost-shuft`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/shum-fankoila`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/chiller-fankoil-sistema`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/vrf-sistema-chto-eto`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/srednyaya-stoimost-fankoila`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // О компании
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/about/o-brende-shuft`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/nasha-komanda`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/garantii`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/sertifikaty`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/about/history`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/news`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 },

    // Контакты
    { url: `${baseUrl}/contacts`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // Инструменты
    { url: `${baseUrl}/catalog/search`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/catalog/compare`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },

    // Юридические
    { url: `${baseUrl}/offer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/returns`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
