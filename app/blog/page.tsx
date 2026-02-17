import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Блог про фанкойлы Shuft — статьи и гайды | Shuft.Online',
  description: 'Экспертные статьи про фанкойлы Shuft: как выбрать, сравнение брендов, монтаж, энергоэффективность, история бренда. Гайды 2026.',
  alternates: { canonical: 'https://shuft.online/blog/' },
}

const articles = [
  {
    slug: 'kak-vybrat-fankoil',
    title: 'Как выбрать фанкойл Shuft для офиса — полный гайд 2026',
    excerpt: 'Выбираем фанкойл по площади, мощности и типу помещения. Примеры расчётов и рекомендации по моделям Shuft для разных задач.',
    category: 'Подбор оборудования',
    readTime: '8 мин',
    date: '15 января 2026',
    tags: ['подбор', 'офис', 'мощность'],
  },
  {
    slug: 'shuft-vs-carrier-daikin',
    title: 'Shuft vs Carrier vs Daikin — сравнение фанкойлов 2026',
    excerpt: 'Подробное сравнение фанкойлов Shuft, Carrier и Daikin по цене, качеству, энергоэффективности и доступности сервиса в России.',
    category: 'Сравнения',
    readTime: '10 мин',
    date: '10 января 2026',
    tags: ['сравнение', 'Carrier', 'Daikin'],
  },
  {
    slug: 'nastennye-fankoily-sfh',
    title: 'Полный обзор настенных фанкойлов Shuft серии SFH V3',
    excerpt: 'Обзор настенных фанкойлов SFH-500, SFH-800, SFH-1200 V3. Характеристики, цены, отзывы и рекомендации по применению.',
    category: 'Обзоры',
    readTime: '7 мин',
    date: '8 января 2026',
    tags: ['SFH', 'настенные', 'V3'],
  },
  {
    slug: 'istoriya-brenda-shuft',
    title: 'История бренда Shuft: от Дании до России',
    excerpt: 'Как Shuft прошёл путь от датского стартапа до одного из лидеров климатического рынка в России. Полная история с 1994 года.',
    category: 'О бренде',
    readTime: '6 мин',
    date: '5 января 2026',
    tags: ['история', 'Дания', 'производство'],
  },
  {
    slug: 'chiller-fankoil-sistema',
    title: 'Система чиллер-фанкойл Shuft: как это работает',
    excerpt: 'Подробно объясняем принцип работы системы чиллер-фанкойл, схему подключения и преимущества для разных типов объектов.',
    category: 'Технологии',
    readTime: '9 мин',
    date: '2 января 2026',
    tags: ['чиллер', 'принцип работы', 'схема'],
  },
  {
    slug: 'ustanovka-fankoila-v-ofise',
    title: 'Установка фанкойла Shuft в офисе: пошаговая инструкция',
    excerpt: 'Пошаговое руководство по монтажу настенного фанкойла Shuft: выбор места, крепление, подключение, пусконаладка.',
    category: 'Монтаж',
    readTime: '12 мин',
    date: '28 декабря 2025',
    tags: ['монтаж', 'инструкция', 'пошагово'],
  },
  {
    slug: 'energoeffektivnost-shuft',
    title: 'Энергоэффективность фанкойлов Shuft — сколько они экономят',
    excerpt: 'Расчёт потребления электроэнергии фанкойлами Shuft, сравнение с кондиционерами, реальная экономия в рублях.',
    category: 'Экономика',
    readTime: '7 мин',
    date: '25 декабря 2025',
    tags: ['энергосбережение', 'экономия', 'расчёт'],
  },
  {
    slug: 'shum-fankoila',
    title: 'Уровень шума фанкойлов Shuft — насколько тихо?',
    excerpt: 'Замеры уровня шума всех моделей Shuft, сравнение с конкурентами. Какие модели выбрать для переговорных и спален.',
    category: 'Характеристики',
    readTime: '5 мин',
    date: '20 декабря 2025',
    tags: ['шум', 'дБА', 'тихий'],
  },
  {
    slug: 'vrf-sistema-chto-eto',
    title: 'VRF-системы Shuft: что это и когда они нужны',
    excerpt: 'Что такое VRF-система, отличие от чиллер-фанкойла, для каких объектов подходит. Модельный ряд VRF Shuft и стоимость.',
    category: 'Технологии',
    readTime: '8 мин',
    date: '15 декабря 2025',
    tags: ['VRF', 'мультизональный', 'крупные объекты'],
  },
  {
    slug: 'kak-vybrat-dlya-magazina',
    title: 'Как выбрать фанкойл Shuft для магазина — советы экспертов',
    excerpt: 'Какой тип фанкойла лучше для торгового зала, бутика или торгового центра. Расчёт мощности, примеры и цены.',
    category: 'Подбор оборудования',
    readTime: '7 мин',
    date: '10 декабря 2025',
    tags: ['магазин', 'торговый зал', 'кассетный'],
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Блог', item: 'https://shuft.online/blog/' },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Блог — экспертные статьи про фанкойлы Shuft',
  url: 'https://shuft.online/blog/',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Как выбрать фанкойл Shuft для офиса — полный гайд 2026', url: 'https://shuft.online/blog/kak-vybrat-fankoil' },
    { '@type': 'ListItem', position: 2, name: 'Shuft vs Carrier vs Daikin — сравнение фанкойлов 2026', url: 'https://shuft.online/blog/shuft-vs-carrier-daikin' },
    { '@type': 'ListItem', position: 3, name: 'Полный обзор настенных фанкойлов Shuft серии SFH V3', url: 'https://shuft.online/blog/nastennye-fankoily-sfh' },
    { '@type': 'ListItem', position: 4, name: 'История бренда Shuft: от Дании до России', url: 'https://shuft.online/blog/istoriya-brenda-shuft' },
    { '@type': 'ListItem', position: 5, name: 'Система чиллер-фанкойл Shuft: как это работает', url: 'https://shuft.online/blog/chiller-fankoil-sistema' },
    { '@type': 'ListItem', position: 6, name: 'Установка фанкойла Shuft в офисе: пошаговая инструкция', url: 'https://shuft.online/blog/ustanovka-fankoila-v-ofise' },
    { '@type': 'ListItem', position: 7, name: 'Энергоэффективность фанкойлов Shuft — сколько они экономят', url: 'https://shuft.online/blog/energoeffektivnost-shuft' },
    { '@type': 'ListItem', position: 8, name: 'Уровень шума фанкойлов Shuft — насколько тихо?', url: 'https://shuft.online/blog/shum-fankoila' },
    { '@type': 'ListItem', position: 9, name: 'VRF-системы Shuft: что это и когда они нужны', url: 'https://shuft.online/blog/vrf-sistema-chto-eto' },
    { '@type': 'ListItem', position: 10, name: 'Как выбрать фанкойл Shuft для магазина — советы экспертов', url: 'https://shuft.online/blog/kak-vybrat-dlya-magazina' },
  ],
}

const categoryColors: Record<string, string> = {
  'Подбор оборудования': 'bg-blue-100 text-blue-700',
  'Сравнения': 'bg-purple-100 text-purple-700',
  'Обзоры': 'bg-green-100 text-green-700',
  'О бренде': 'bg-yellow-100 text-yellow-700',
  'Технологии': 'bg-indigo-100 text-indigo-700',
  'Монтаж': 'bg-orange-100 text-orange-700',
  'Экономика': 'bg-teal-100 text-teal-700',
  'Характеристики': 'bg-red-100 text-red-700',
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Блог' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог — экспертные статьи про фанкойлы Shuft</h1>
      <p className="text-gray-600 text-lg mb-10">
        Инженеры Shuft.Online пишут о выборе, монтаже, эксплуатации и сравнении климатического оборудования.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <Link key={i} href={`/blog/${article.slug}`} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-40 flex items-center justify-center">
              <div className="text-6xl">{
                article.category === 'Подбор оборудования' ? '📋' :
                article.category === 'Сравнения' ? '⚖️' :
                article.category === 'Обзоры' ? '🔍' :
                article.category === 'О бренде' ? '🏭' :
                article.category === 'Технологии' ? '⚙️' :
                article.category === 'Монтаж' ? '🔧' :
                article.category === 'Экономика' ? '💰' : '📊'
              }</div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
                  {article.category}
                </span>
                <span className="text-gray-400 text-xs">{article.readTime}</span>
              </div>
              <h2 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-auto border-t pt-4">
                <span className="text-gray-400 text-xs">{article.date}</span>
                <span className="text-blue-600 text-sm font-medium group-hover:text-blue-800">Читать →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}
