import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'VRF-системы Shuft — купить в Москве | Проектирование и монтаж 2026',
  description: 'Мультизональные VRF-системы Shuft для крупных объектов. Один внешний блок — до 50 внутренних. Официальный дилер, проектирование, поставка и монтаж. Гарантия 3 года.',
  alternates: { canonical: 'https://shuft.online/catalog/vrf-sistemy/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'VRF-системы', item: 'https://shuft.online/catalog/vrf-sistemy/' },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'VRF-системы Shuft',
  description: 'Мультизональные VRF-системы Shuft для крупных коммерческих объектов',
  url: 'https://shuft.online/catalog/vrf-sistemy/',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Внешние блоки VRF Shuft', url: 'https://shuft.online/catalog/vrf-sistemy/vneshnie-bloki/' },
    { '@type': 'ListItem', position: 2, name: 'Внутренние блоки VRF Shuft', url: 'https://shuft.online/catalog/vrf-sistemy/vnutrennie-bloki/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Что такое VRF-система и чем она отличается от обычного кондиционера?',
      acceptedAnswer: { '@type': 'Answer', text: 'VRF (Variable Refrigerant Flow) — мультизональная система кондиционирования. Один внешний блок подключает от 2 до 50 внутренних блоков по трубопроводу хладагента. Это экономичнее, чем отдельный кондиционер в каждое помещение: одна компрессорная установка вместо многих. Для здания 2 000 м² VRF выгоднее обычных кондиционеров на 30–40%.' },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит VRF-система Shuft?',
      acceptedAnswer: { '@type': 'Answer', text: 'Внешние блоки Shuft — от 450 000 ₽ (10 кВт) до 2 500 000 ₽ (100 кВт). Внутренние блоки — от 35 000 ₽ за единицу. Проект на 10–20 внутренних блоков для офиса 500–1000 м² обойдётся под ключ в 1,5–4 млн ₽. Точная стоимость рассчитывается индивидуально.' },
    },
    {
      '@type': 'Question',
      name: 'Как долго длится монтаж VRF-системы?',
      acceptedAnswer: { '@type': 'Answer', text: 'Монтаж VRF-системы на объект 500–1000 м² занимает 5–14 рабочих дней в зависимости от сложности схемы разводки и количества блоков. Для крупных объектов от 3 000 м² — 3–6 недель. Пусконаладка включена в стоимость монтажа.' },
    },
    {
      '@type': 'Question',
      name: 'Нужно ли проектировать VRF-систему заранее?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, проектирование обязательно. Инженер рассчитывает мощности всех блоков, длину трубопровода, схему разводки хладагента. Без проекта система будет работать неэффективно или выйдет из строя досрочно. Мы разрабатываем проект за 3–5 рабочих дней.' },
    },
    {
      '@type': 'Question',
      name: 'Можно ли подключить разные типы внутренних блоков к одной VRF?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да. В одну VRF-систему Shuft можно подключить кассетные, канальные, настенные и напольно-потолочные внутренние блоки одновременно. Это позволяет оптимизировать интерьер каждого помещения по-своему.' },
    },
  ],
}

const vrfCategories = [
  {
    title: 'Внешние блоки VRF',
    href: '/catalog/vrf-sistemy/vneshnie-bloki',
    desc: 'Наружные агрегаты с переменным расходом хладагента. Обслуживают от 2 до 50 внутренних блоков. Инверторная технология снижает энергопотребление до 40% по сравнению с традиционными системами.',
    specs: [
      { label: 'Мощность', value: '10–100 кВт' },
      { label: 'Внутренних блоков', value: 'до 50 шт.' },
      { label: 'Длина трассы', value: 'до 150 м' },
      { label: 'Хладагент', value: 'R410A / R32' },
    ],
    price: 'от 450 000 ₽',
    icon: '🏗️',
    color: 'from-blue-700 to-blue-900',
    useCases: ['Офисные центры', 'Гостиницы', 'Торговые комплексы', 'Бизнес-центры'],
  },
  {
    title: 'Внутренние блоки VRF',
    href: '/catalog/vrf-sistemy/vnutrennie-bloki',
    desc: 'Кассетные, канальные и настенные блоки для подключения к VRF-системе. Каждый блок управляется независимо — разные температуры в разных помещениях одновременно.',
    specs: [
      { label: 'Мощность', value: '2–16 кВт' },
      { label: 'Типы', value: 'кассет, канал, настен.' },
      { label: 'Шум', value: '25–40 дБА' },
      { label: 'Управление', value: 'BMS / пульт' },
    ],
    price: 'от 35 000 ₽',
    icon: '❄️',
    color: 'from-sky-600 to-sky-800',
    useCases: ['Переговорные комнаты', 'Рестораны', 'Номера гостиниц', 'Торговые павильоны'],
  },
  {
    title: 'Проектирование VRF',
    href: '/services/proektirovanie-vrf',
    desc: 'Разработка рабочего проекта системы VRF: расчёт мощностей, схема разводки хладагента, подбор оборудования, согласование с архитектурным проектом.',
    specs: [
      { label: 'Срок проекта', value: '3–5 рабочих дней' },
      { label: 'Состав', value: 'чертежи + спецификация' },
      { label: 'Гарантия', value: 'на проект + монтаж' },
      { label: 'Площадь', value: 'от 200 м²' },
    ],
    price: 'от 50 000 ₽',
    icon: '📐',
    color: 'from-orange-600 to-orange-800',
    useCases: ['Новое строительство', 'Реконструкция', 'Замена старых систем', 'Расширение объекта'],
  },
]

const advantages = [
  { icon: '💡', title: 'Экономия до 40% электроэнергии', desc: 'Инверторный привод компрессора регулирует мощность точно под потребность. Значительная экономия по сравнению с включением/выключением.' },
  { icon: '🎯', title: 'Индивидуальное управление зонами', desc: 'Каждый внутренний блок управляется независимо. В переговорной — 20°C, в серверной — 16°C, в приёмной — 23°C.' },
  { icon: '🔇', title: 'Тихая работа', desc: 'Компрессор на улице — в помещении только тихий внутренний блок (25–40 дБА). Идеально для офисов и гостиниц.' },
  { icon: '📡', title: 'Централизованное управление', desc: 'Интеграция с BMS-системой здания. Управление всеми блоками с одного пульта или смартфона.' },
  { icon: '🛡️', title: 'Гарантия 3 года', desc: 'Официальная заводская гарантия производителя на внешние и внутренние блоки.' },
  { icon: '🔧', title: 'Сервис и запчасти', desc: 'Завод в России, склад запчастей в Москве. Ремонт и ТО без длительного ожидания деталей.' },
]

const projects = [
  { name: 'Бизнес-центр 3 000 м²', solution: '2 × внешних блока 60 кВт + 24 внутренних блока', result: 'Охлаждение всего здания, экономия электроэнергии 35%', cost: '3 800 000 ₽' },
  { name: 'Гостиница 60 номеров', solution: '3 × внешних блока 80 кВт + 60 кассетных блоков', result: 'Индивидуальная температура в каждом номере', cost: '5 200 000 ₽' },
  { name: 'Торговый центр 1 500 м²', solution: '1 × внешний блок 100 кВт + 18 кассетных блоков', result: 'Равномерное охлаждение торгового зала', cost: '2 450 000 ₽' },
]

const faqItems = [
  {
    q: 'Что такое VRF-система и чем она отличается от обычного кондиционера?',
    a: 'VRF (Variable Refrigerant Flow) — мультизональная система. Один внешний блок подключает до 50 внутренних по трубопроводу хладагента. Для здания 2 000 м² VRF выгоднее обычных кондиционеров на 30–40%.',
  },
  {
    q: 'Сколько стоит VRF-система Shuft?',
    a: 'Внешние блоки — от 450 000 ₽ до 2,5 млн ₽. Внутренние блоки — от 35 000 ₽/шт. Проект на 10–20 блоков для офиса 500–1000 м² обойдётся под ключ в 1,5–4 млн ₽.',
  },
  {
    q: 'Как долго длится монтаж VRF-системы?',
    a: 'Для объекта 500–1000 м² — 5–14 рабочих дней. Для крупных объектов от 3 000 м² — 3–6 недель. Пусконаладка включена в стоимость монтажа.',
  },
  {
    q: 'Нужно ли проектировать VRF-систему заранее?',
    a: 'Да, проектирование обязательно. Инженер рассчитывает мощности блоков, длину трубопровода, схему разводки. Без проекта система будет работать неэффективно. Мы разрабатываем проект за 3–5 рабочих дней.',
  },
  {
    q: 'Можно ли подключить разные типы внутренних блоков к одной VRF?',
    a: 'Да. В одну VRF-систему Shuft можно подключить кассетные, канальные, настенные и напольно-потолочные блоки одновременно.',
  },
]

const process = [
  { step: '01', title: 'Выезд инженера', desc: 'Обмер объекта, анализ нагрузок, консультация' },
  { step: '02', title: 'Разработка проекта', desc: 'Расчёт мощностей, схема разводки, спецификация' },
  { step: '03', title: 'Согласование и поставка', desc: 'Утверждение проекта, заказ и доставка оборудования' },
  { step: '04', title: 'Монтаж и пусконаладка', desc: 'Установка, пуск, настройка, обучение персонала' },
]

export default function VRFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'VRF-системы' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">VRF-системы Shuft — купить в Москве</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Мультизональные VRF-системы кондиционирования для офисных центров, гостиниц и торговых комплексов.
          Один внешний блок — до 50 внутренних. Проектирование, поставка и монтаж под ключ. Гарантия 3 года.
        </p>

        {/* Что такое VRF */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое VRF-система и когда она нужна</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700 space-y-3">
              <p>VRF (Variable Refrigerant Flow) — система с переменным расходом хладагента. Один мощный внешний компрессорный блок подаёт хладагент по трубопроводу к множеству внутренних блоков.</p>
              <p>Каждый внутренний блок управляется независимо — в разных помещениях одновременно разные температуры. Инверторный компрессор регулирует мощность плавно, что снижает энергопотребление до 40%.</p>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-3">VRF выгодна, если у вас:</div>
              <div className="space-y-2">
                {[
                  'Объект от 500 м² и больше',
                  'Много помещений с разными нагрузками',
                  'Несколько этажей или зон',
                  'Требования к централизованному управлению',
                  'Гостиница, офисный центр, ТЦ',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Категории */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {vrfCategories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
              <div className={`bg-gradient-to-br ${cat.color} text-white p-6`}>
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h2 className="font-bold text-xl">{cat.title}</h2>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {cat.specs.map((s, j) => (
                    <div key={j} className="bg-gray-50 rounded-lg p-2">
                      <div className="text-xs text-gray-500">{s.label}</div>
                      <div className="font-bold text-xs text-gray-900">{s.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {cat.useCases.map((u, j) => (
                    <span key={j} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{u}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between border-t pt-4">
                  <div className="font-bold text-blue-600">{cat.price}</div>
                  <Link href={cat.href} className="btn-primary text-sm py-2 px-3">Подробнее →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Преимущества VRF Shuft */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества VRF-систем Shuft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-4xl mb-3">{adv.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-600 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Процесс работы */}
        <section className="mb-14 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Как мы реализуем VRF-проект</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Проекты */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Реализованные VRF-проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4">{proj.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Решение:</div>
                    <div className="text-gray-800 font-medium">{proj.solution}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Результат:</div>
                    <div className="text-gray-700">{proj.result}</div>
                  </div>
                  <div className="pt-2 border-t flex items-center justify-between">
                    <span className="text-xs text-gray-500">Стоимость под ключ:</span>
                    <span className="text-blue-600 font-bold">{proj.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Видео */}
        <VideoSection
          title="Видео о VRF-системах Shuft"
          videos={[
            {
              id: 'hFZFjoX2cGg',
              title: 'VRF-система Shuft — как это работает',
              description: 'Объяснение принципа работы VRF-системы, монтаж внешнего блока и подключение внутренних блоков.',
              duration: '12:18',
            },
            {
              id: 'ZZ5LpwO-An4',
              title: 'VRF для бизнес-центра — кейс монтажа',
              description: 'Реализованный проект VRF-системы на 3 000 м² в московском бизнес-центре. Результаты и экономия.',
              duration: '9:45',
            },
          ]}
        />

        {/* Документация */}
        <DocsSection
          title="Документация по VRF-системам Shuft"
          docs={[
            {
              name: 'Каталог VRF-систем Shuft 2026',
              description: 'Внешние и внутренние блоки VRF — модели, характеристики, цены',
              size: '8.3 МБ',
              type: 'manual',
              url: '/docs/shuft-vrf-catalog-2026.pdf',
            },
            {
              name: 'Руководство по проектированию VRF Shuft',
              description: 'Методика расчёта мощностей, схемы разводки трубопровода',
              size: '5.7 МБ',
              type: 'scheme',
              url: '/docs/shuft-vrf-design-guide.pdf',
            },
            {
              name: 'Инструкция по монтажу внешних блоков VRF',
              description: 'Установка, подключение, пусконаладка внешних агрегатов',
              size: '4.1 МБ',
              type: 'manual',
              url: '/docs/shuft-vrf-external-unit-manual.pdf',
            },
            {
              name: 'Сертификаты VRF-систем Shuft',
              description: 'Сертификаты ТР ТС, энергоэффективность класса А',
              size: '2.0 МБ',
              type: 'certificate',
              url: '/docs/shuft-vrf-certificates.pdf',
            },
          ]}
        />

        {/* FAQ */}
        <section className="mt-14 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы о VRF-системах</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-gray-900 list-none">
                  {item.q}
                  <span className="ml-4 text-blue-600 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-3">Нужен расчёт VRF-системы?</h2>
            <p className="text-blue-100 mb-6">Инженер выедет на объект, снимет замеры и разработает проект за 3–5 рабочих дней. Консультация и выезд — бесплатно.</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl text-lg">📞 +7 (495) 120-33-75</a>
              <Link href="/services/proektirovanie-vrf" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl text-lg">Узнать об услуге</Link>
              <Link href="/contacts" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl text-lg">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
