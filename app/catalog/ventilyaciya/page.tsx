import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'Вентиляция Shuft — купить в Москве | Канальная и кровельная 2026',
  description: 'Канальная и кровельная вентиляция Shuft для офисов, складов и производства. Производительность до 15 000 м³/ч. Официальный дилер, гарантия 3 года, монтаж за 1–5 дней.',
  alternates: { canonical: 'https://shuft.online/catalog/ventilyaciya/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Вентиляция', item: 'https://shuft.online/catalog/ventilyaciya/' },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Вентиляция Shuft',
  description: 'Канальные и кровельные вентиляционные системы Shuft',
  url: 'https://shuft.online/catalog/ventilyaciya/',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Канальная вентиляция Shuft', url: 'https://shuft.online/catalog/ventilyaciya/kanalnaya/' },
    { '@type': 'ListItem', position: 2, name: 'Кровельная вентиляция Shuft', url: 'https://shuft.online/catalog/ventilyaciya/krovelnaya/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Чем канальная вентиляция отличается от кровельной?',
      acceptedAnswer: { '@type': 'Answer', text: 'Канальные вентиляторы Shuft монтируются внутри воздуховодов в помещении — скрыты в потолке или за перегородками. Кровельные вентиляторы устанавливаются на крыше и обслуживают большие объёмы воздуха (до 15 000 м³/ч) для промышленных и складских помещений.' },
    },
    {
      '@type': 'Question',
      name: 'Какую производительность вентиляции нужно выбирать?',
      acceptedAnswer: { '@type': 'Answer', text: 'Норма — минимум 3 объёма помещения в час. Для офиса 100 м² с высотой потолков 3 м (объём 300 м³) минимальная производительность = 900 м³/ч. Для ресторанов и кухонь норма выше — 10–20 объёмов в час. Наши инженеры сделают бесплатный расчёт.' },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит монтаж вентиляции Shuft?',
      acceptedAnswer: { '@type': 'Answer', text: 'Монтаж канального вентилятора — от 3 500 ₽, кровельного вентилятора — от 8 000 ₽ (с подключением). Полный монтаж системы вентиляции с воздуховодами — от 15 000 ₽ за помещение. Точная стоимость зависит от сложности объекта.' },
    },
    {
      '@type': 'Question',
      name: 'Есть ли у вентиляции Shuft сертификаты?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, всё вентиляционное оборудование Shuft сертифицировано по ТР ТС 004/2011 и ТР ТС 020/2011. Сертификаты предоставляются по запросу вместе с технической документацией.' },
    },
    {
      '@type': 'Question',
      name: 'Можно ли подобрать вентиляцию дистанционно?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да. Нам нужна площадь помещения, высота потолков, тип объекта (офис, склад, ресторан), наличие воздуховодов. По этим данным инженер подберёт модели и сделает коммерческое предложение по телефону или email.' },
    },
  ],
}

const categories = [
  {
    title: 'Канальная вентиляция',
    href: '/catalog/ventilyaciya/kanalnaya',
    desc: 'Приточно-вытяжные вентиляторы и установки, монтируемые в воздуховоды. Применяются в офисах, ресторанах, магазинах и жилых домах. Скрытая установка в потолке.',
    specs: [
      { label: 'Производительность', value: 'до 5 000 м³/ч' },
      { label: 'Давление', value: 'до 250 Па' },
      { label: 'Шум', value: '28–45 дБА' },
      { label: 'Питание', value: '220 В / 380 В' },
    ],
    price: 'от 25 000 ₽',
    models: 12,
    icon: '💨',
    color: 'from-blue-600 to-blue-800',
    useCases: ['Офисы и бизнес-центры', 'Рестораны и кафе', 'Магазины и торговые залы', 'Квартиры и коттеджи'],
  },
  {
    title: 'Кровельная вентиляция',
    href: '/catalog/ventilyaciya/krovelnaya',
    desc: 'Крышные вентиляторы для общеобменной вентиляции промышленных, складских и торговых объектов. Устанавливаются снаружи — шум внутри помещения минимален.',
    specs: [
      { label: 'Производительность', value: 'до 15 000 м³/ч' },
      { label: 'Давление', value: 'до 400 Па' },
      { label: 'Шум', value: '45–65 дБА' },
      { label: 'Питание', value: '380 В (трёхфазное)' },
    ],
    price: 'от 45 000 ₽',
    models: 8,
    icon: '🏭',
    color: 'from-slate-700 to-slate-900',
    useCases: ['Производственные цеха', 'Склады и логистические комплексы', 'Торговые центры', 'Спортивные объекты'],
  },
]

const advantages = [
  { icon: '🇷🇺', title: 'Производство в России', desc: 'Собственный завод Shuft в России. Запчасти всегда в наличии на складе в Москве.' },
  { icon: '🛡️', title: 'Гарантия 3 года', desc: 'Официальная заводская гарантия на всё вентиляционное оборудование Shuft.' },
  { icon: '📐', title: 'Бесплатный расчёт', desc: 'Инженер рассчитает производительность, давление и схему воздуховодов бесплатно.' },
  { icon: '🔧', title: 'Монтаж за 1–5 дней', desc: 'Лицензированные монтажники. Пусконаладка и ввод в эксплуатацию включены в стоимость.' },
  { icon: '📞', title: 'Поддержка 24/7', desc: 'Круглосуточная техподдержка по телефону и мессенджерам для решения вопросов.' },
  { icon: '📄', title: 'Полная документация', desc: 'Паспорта, инструкции, сертификаты и схемы монтажа для каждой модели.' },
]

const typicalProjects = [
  { name: 'Офис 200 м²', solution: '4 × канальный вентилятор SCH-1200', result: 'Обеспечивает 3-кратный воздухообмен, шум 30 дБА', cost: '~120 000 ₽' },
  { name: 'Ресторан 350 м²', solution: '2 × приточная установка + кровельный вытяжной', result: '10-кратный воздухообмен, очистка и подогрев воздуха', cost: '~280 000 ₽' },
  { name: 'Склад 1 500 м²', solution: '3 × кровельный вентилятор SCR-5000', result: 'Производительность 15 000 м³/ч, равномерный воздухообмен', cost: '~195 000 ₽' },
]

const faqItems = [
  {
    q: 'Чем канальная вентиляция отличается от кровельной?',
    a: 'Канальные вентиляторы монтируются внутри воздуховодов — скрыты в потолке или за перегородками. Кровельные вентиляторы устанавливаются на крыше и обслуживают большие объёмы воздуха (до 15 000 м³/ч) для складов и производства.',
  },
  {
    q: 'Какую производительность вентиляции нужно выбирать?',
    a: 'Норма — минимум 3 объёма помещения в час. Для офиса 100 м² с высотой 3 м минимум = 900 м³/ч. Для кухонь и ресторанов — 10–20 объёмов в час. Наши инженеры сделают бесплатный расчёт.',
  },
  {
    q: 'Сколько стоит монтаж вентиляции Shuft?',
    a: 'Монтаж канального вентилятора — от 3 500 ₽, кровельного — от 8 000 ₽. Полный монтаж системы с воздуховодами — от 15 000 ₽ за помещение. Точная стоимость зависит от объекта.',
  },
  {
    q: 'Есть ли у вентиляции Shuft сертификаты?',
    a: 'Да, всё оборудование Shuft сертифицировано по ТР ТС 004/2011 и ТР ТС 020/2011. Сертификаты предоставляются вместе с технической документацией.',
  },
  {
    q: 'Можно ли подобрать вентиляцию дистанционно?',
    a: 'Да. Нам нужна площадь помещения, высота потолков, тип объекта. По этим данным инженер подберёт модели и сделает коммерческое предложение по телефону или email.',
  },
]

export default function VentilyaciyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'Вентиляция' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Вентиляция Shuft — купить в Москве</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Канальные и кровельные вентиляционные системы Shuft для офисов, ресторанов, складов и производства.
          Производительность от 500 до 15 000 м³/ч. Официальный дилер, гарантия 3 года, монтаж за 1–5 дней.
        </p>

        {/* Категории */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
              <div className={`bg-gradient-to-br ${cat.color} text-white p-8`}>
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h2 className="font-bold text-2xl mb-2">{cat.title}</h2>
                <p className="text-white/80 text-sm">{cat.models} моделей в каталоге</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-5">{cat.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {cat.specs.map((s, j) => (
                    <div key={j} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500">{s.label}</div>
                      <div className="font-bold text-sm text-gray-900">{s.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-5">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Применение</div>
                  <div className="flex flex-wrap gap-2">
                    {cat.useCases.map((u, j) => (
                      <span key={j} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{u}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between border-t pt-4">
                  <div className="font-bold text-blue-600 text-xl">{cat.price}</div>
                  <Link href={cat.href} className="btn-primary">Смотреть каталог →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Преимущества */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Почему выбирают вентиляцию Shuft</h2>
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

        {/* Типовые проекты */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Примеры реализованных проектов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typicalProjects.map((proj, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4">{proj.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-20 shrink-0">Решение:</span>
                    <span className="text-gray-800 font-medium">{proj.solution}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-20 shrink-0">Результат:</span>
                    <span className="text-gray-700">{proj.result}</span>
                  </div>
                  <div className="flex gap-2 pt-2 border-t">
                    <span className="text-gray-500 w-20 shrink-0">Стоимость:</span>
                    <span className="text-blue-600 font-bold">{proj.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Как работает вентиляция Shuft */}
        <section className="mb-14 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Как устроена система вентиляции Shuft</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Забор воздуха', desc: 'Свежий воздух с улицы через решётку или воздухозаборный клапан' },
              { step: '02', title: 'Очистка', desc: 'Фильтрация через фильтры G4/F7, удаление пыли и крупных частиц' },
              { step: '03', title: 'Нагрев/охлаждение', desc: 'Водяной или электрический нагреватель, летом — охлаждение от чиллера' },
              { step: '04', title: 'Распределение', desc: 'Подача в помещение через воздуховоды и вентиляционные решётки' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Видео */}
        <VideoSection
          title="Видео-обзоры вентиляции Shuft"
          videos={[
            {
              id: 'hFZFjoX2cGg',
              title: 'Канальная вентиляция Shuft — монтаж и настройка',
              description: 'Пошаговый монтаж канального вентилятора Shuft: крепление, подключение воздуховодов, электрика, пуск.',
              duration: '9:14',
            },
            {
              id: 'ZZ5LpwO-An4',
              title: 'Кровельный вентилятор Shuft — обзор и установка',
              description: 'Как выбрать и установить кровельный вентилятор Shuft для склада или производственного помещения.',
              duration: '7:33',
            },
          ]}
        />

        {/* Документация */}
        <DocsSection
          title="Документация по вентиляции Shuft"
          docs={[
            {
              name: 'Каталог вентиляционного оборудования Shuft 2026',
              description: 'Полный каталог канальных и кровельных вентиляторов с техническими характеристиками',
              size: '6.2 МБ',
              type: 'manual',
              url: '/docs/shuft-ventilation-catalog-2026.pdf',
            },
            {
              name: 'Инструкция по монтажу канальных вентиляторов',
              description: 'Порядок установки, подключения и ввода в эксплуатацию',
              size: '3.4 МБ',
              type: 'manual',
              url: '/docs/shuft-canal-ventilator-manual.pdf',
            },
            {
              name: 'Сертификаты соответствия — вентиляция',
              description: 'Сертификаты ТР ТС 004/2011, ТР ТС 020/2011',
              size: '1.5 МБ',
              type: 'certificate',
              url: '/docs/shuft-ventilation-certificates.pdf',
            },
            {
              name: 'Расчёт вентиляции — методика Shuft',
              description: 'Методика расчёта воздухообмена для разных типов помещений',
              size: '2.1 МБ',
              type: 'scheme',
              url: '/docs/shuft-ventilation-calculation.pdf',
            },
          ]}
        />

        {/* FAQ */}
        <section className="mt-14 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы о вентиляции Shuft</h2>
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
        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Подобрать вентиляцию под ваш объект</h2>
          <p className="text-blue-100 mb-6">Бесплатная консультация инженера. Расчёт и КП — за 1 рабочий день.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl text-lg">📞 +7 (495) 120-33-75</a>
            <Link href="/contacts" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl text-lg">Оставить заявку</Link>
          </div>
        </div>
      </div>
    </>
  )
}
