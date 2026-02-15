import { NextResponse } from 'next/server'

const BASE_URL = 'https://shuft.online'

interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string  // human-readable Russian date
  isoDate: string
}

// Статьи блога с ISO-датами для RSS
const ARTICLES: Article[] = [
  {
    slug: 'kak-vybrat-fankoil',
    title: 'Как выбрать фанкойл Shuft для офиса — полный гайд 2026',
    excerpt: 'Выбираем фанкойл по площади, мощности и типу помещения. Примеры расчётов и рекомендации по моделям Shuft для разных задач.',
    category: 'Подбор оборудования',
    date: '15 января 2026',
    isoDate: '2026-01-15T10:00:00+03:00',
  },
  {
    slug: 'shuft-vs-carrier-daikin',
    title: 'Shuft vs Carrier vs Daikin — сравнение фанкойлов 2026',
    excerpt: 'Подробное сравнение фанкойлов Shuft, Carrier и Daikin по цене, качеству, энергоэффективности и доступности сервиса в России.',
    category: 'Сравнения',
    date: '10 января 2026',
    isoDate: '2026-01-10T10:00:00+03:00',
  },
  {
    slug: 'nastennye-fankoily-sfh',
    title: 'Полный обзор настенных фанкойлов Shuft серии SFH V3',
    excerpt: 'Обзор настенных фанкойлов SFH-500, SFH-800, SFH-1200 V3. Характеристики, цены, отзывы и рекомендации по применению.',
    category: 'Обзоры',
    date: '8 января 2026',
    isoDate: '2026-01-08T10:00:00+03:00',
  },
  {
    slug: 'istoriya-brenda-shuft',
    title: 'История бренда Shuft: от Дании до России',
    excerpt: 'Как Shuft прошёл путь от датского стартапа до одного из лидеров климатического рынка в России. Полная история с 1994 года.',
    category: 'О бренде',
    date: '5 января 2026',
    isoDate: '2026-01-05T10:00:00+03:00',
  },
  {
    slug: 'chiller-fankoil-sistema',
    title: 'Система чиллер-фанкойл Shuft: как это работает',
    excerpt: 'Подробно объясняем принцип работы системы чиллер-фанкойл, схему подключения и преимущества для разных типов объектов.',
    category: 'Технологии',
    date: '2 января 2026',
    isoDate: '2026-01-02T10:00:00+03:00',
  },
  {
    slug: 'ustanovka-fankoila-v-ofise',
    title: 'Установка фанкойла Shuft в офисе: пошаговая инструкция',
    excerpt: 'Пошаговое руководство по монтажу настенного фанкойла Shuft: выбор места, крепление, подключение, пусконаладка.',
    category: 'Монтаж',
    date: '28 декабря 2025',
    isoDate: '2025-12-28T10:00:00+03:00',
  },
  {
    slug: 'energoeffektivnost-shuft',
    title: 'Энергоэффективность фанкойлов Shuft — сколько они экономят',
    excerpt: 'Расчёт потребления электроэнергии фанкойлами Shuft, сравнение с кондиционерами, реальная экономия в рублях.',
    category: 'Технологии',
    date: '25 декабря 2025',
    isoDate: '2025-12-25T10:00:00+03:00',
  },
  {
    slug: 'shum-fankoila',
    title: 'Уровень шума фанкойлов Shuft — насколько тихо?',
    excerpt: 'Замеры уровня шума всех моделей Shuft, сравнение с конкурентами. Какие модели выбрать для переговорных и спален.',
    category: 'Обзоры',
    date: '20 декабря 2025',
    isoDate: '2025-12-20T10:00:00+03:00',
  },
  {
    slug: 'vrf-sistema-chto-eto',
    title: 'VRF-системы Shuft: что это и когда они нужны',
    excerpt: 'Что такое VRF-система, отличие от чиллер-фанкойла, для каких объектов подходит. Модельный ряд VRF Shuft и стоимость.',
    category: 'Технологии',
    date: '15 декабря 2025',
    isoDate: '2025-12-15T10:00:00+03:00',
  },
  {
    slug: 'kak-vybrat-dlya-magazina',
    title: 'Как выбрать фанкойл Shuft для магазина — советы экспертов',
    excerpt: 'Какой тип фанкойла лучше для торгового зала, бутика или торгового центра. Расчёт мощности, примеры и цены.',
    category: 'Подбор оборудования',
    date: '10 декабря 2025',
    isoDate: '2025-12-10T10:00:00+03:00',
  },
]

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildItemXml(article: Article): string {
  const url = `${BASE_URL}/blog/${article.slug}/`
  const content = `
    <p>${escapeXml(article.excerpt)}</p>
    <p>Читать полную статью: <a href="${url}">${escapeXml(article.title)}</a></p>
    <p>Категория: ${escapeXml(article.category)}</p>
  `.trim()

  return `
  <item>
    <title>${escapeXml(article.title)}</title>
    <link>${url}</link>
    <description>${escapeXml(article.excerpt)}</description>
    <pubDate>${new Date(article.isoDate).toUTCString()}</pubDate>
    <category>${escapeXml(article.category)}</category>
    <turbo:content>
      <![CDATA[
        <header>
          <h1>${escapeXml(article.title)}</h1>
        </header>
        <p>${escapeXml(article.excerpt)}</p>
        <p>
          Полная версия статьи доступна на сайте Shuft.Online —
          официального дилера фанкойлов Shuft в России.
        </p>
        <p>
          <a href="${url}">Читать полностью →</a>
        </p>
        <p>
          По вопросам подбора оборудования звоните:
          <a href="tel:+74951203375">+7 (495) 120-33-75</a>
        </p>
      ]]>
    </turbo:content>
  </item>`
}

export async function GET() {
  const lastBuildDate = new Date(ARTICLES[0].isoDate).toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss
  version="2.0"
  xmlns:turbo="http://turbo.yandex.ru"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
>
  <channel>
    <title>Блог Shuft.Online — статьи о фанкойлах</title>
    <link>${BASE_URL}/blog/</link>
    <description>Экспертные статьи о фанкойлах Shuft: подбор, монтаж, сравнения, технологии.</description>
    <language>ru</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/blog/turbo.xml" rel="self" type="application/rss+xml"/>
    <turbo:analytics type="Yandex" id=""/>
${ARTICLES.map(buildItemXml).join('\n')}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
