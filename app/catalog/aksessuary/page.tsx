import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Аксессуары для фанкойлов Shuft — купить в Москве 2026',
  description: 'Оригинальные термостаты, клапаны, фильтры и изоляция для фанкойлов Shuft. Гарантия 1 год. Доставка по Москве за 24 часа. Официальный дилер.',
  alternates: { canonical: 'https://shuft.online/catalog/aksessuary/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Аксессуары', item: 'https://shuft.online/catalog/aksessuary/' },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Аксессуары для фанкойлов Shuft',
  url: 'https://shuft.online/catalog/aksessuary/',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Термостаты Shuft', url: 'https://shuft.online/catalog/aksessuary/termostaty/' },
    { '@type': 'ListItem', position: 2, name: 'Клапаны для фанкойлов', url: 'https://shuft.online/catalog/aksessuary/klapany/' },
    { '@type': 'ListItem', position: 3, name: 'Воздушные фильтры Shuft', url: 'https://shuft.online/catalog/aksessuary/filtry/' },
    { '@type': 'ListItem', position: 4, name: 'Теплоизоляция трубопровода', url: 'https://shuft.online/catalog/aksessuary/izolyantsiya/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Как часто нужно менять фильтры в фанкойле Shuft?',
      acceptedAnswer: { '@type': 'Answer', text: 'При нормальном использовании — раз в 3 месяца. В запылённых помещениях — раз в 1–2 месяца. Грязный фильтр снижает производительность до 30% и увеличивает шум.' },
    },
    {
      '@type': 'Question',
      name: 'Подходят ли термостаты Shuft ко всем моделям фанкойлов?',
      acceptedAnswer: { '@type': 'Answer', text: 'Термостаты серии Shuft TC-100, TC-200T, TC-300W совместимы со всеми настенными (SFH), кассетными (SFR) и канальными (SFF) фанкойлами Shuft. Для интеграции в BMS-системы требуется TC-400BMS.' },
    },
    {
      '@type': 'Question',
      name: 'Нужны ли клапаны для каждого фанкойла?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, на каждый фанкойл необходимо установить два запорных шаровых крана и регулирующий клапан с электроприводом для управления мощностью по сигналу термостата.' },
    },
    {
      '@type': 'Question',
      name: 'Какая изоляция нужна для трубопроводов системы чиллер-фанкойл?',
      acceptedAnswer: { '@type': 'Answer', text: 'Для трубопроводов (+7…+12°C) требуется теплоизоляция толщиной 13–19 мм из вспененного каучука. Предотвращает конденсацию влаги и теплопотери.' },
    },
    {
      '@type': 'Question',
      name: 'Можно ли заказать аксессуары с доставкой в регионы?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да. Отправляем СДЭК, Деловыми Линиями, ПЭК по всей России. Минимальная сумма заказа с доставкой — 3 000 ₽.' },
    },
  ],
}

const categories = [
  {
    title: 'Термостаты',
    href: '/catalog/aksessuary/termostaty',
    desc: 'Проводные и Wi-Fi термостаты для управления фанкойлами Shuft. Сенсорные дисплеи, приложение для смартфона, интеграция с BMS.',
    icon: '🌡️',
    items: ['Термостат Shuft TC-100 (базовый, проводной)', 'Термостат Shuft TC-200T (сенсорный)', 'Термостат Shuft TC-300W (Wi-Fi, приложение)', 'Термостат Shuft TC-400BMS (Modbus/BACnet)'],
    price: 'от 3 200 ₽',
    color: 'from-blue-600 to-blue-800',
    count: 4,
    note: 'Совместимы со всеми моделями Shuft',
  },
  {
    title: 'Клапаны',
    href: '/catalog/aksessuary/klapany',
    desc: 'Двух- и трёхходовые клапаны с электроприводами для регулировки мощности охлаждения и отопления фанкойлов.',
    icon: '🔩',
    items: ['Шаровый кран 3/4" (запорный)', 'Двухходовой клапан 3/4" с приводом', 'Трёхходовой клапан 3/4" с приводом', 'Балансировочный клапан для системы'],
    price: 'от 1 200 ₽',
    color: 'from-slate-600 to-slate-800',
    count: 8,
    note: 'Для каждого фанкойла нужно 2–3 клапана',
  },
  {
    title: 'Воздушные фильтры',
    href: '/catalog/aksessuary/filtry',
    desc: 'Сменные воздушные фильтры класса G4 для всех моделей настенных, кассетных и канальных фанкойлов Shuft.',
    icon: '💨',
    items: ['Фильтр G4 для SFH-500 V3', 'Фильтр G4 для SFH-800 V3', 'Фильтр G4 для SFH-1200 V3', 'Фильтр G4 для SFR-1200F / SFR-1500F'],
    price: 'от 450 ₽',
    color: 'from-emerald-600 to-emerald-800',
    count: 12,
    note: 'Замена раз в 3 месяца',
  },
  {
    title: 'Теплоизоляция',
    href: '/catalog/aksessuary/izolyantsiya',
    desc: 'Теплоизоляция трубопроводов систем чиллер-фанкойл из вспененного каучука. Предотвращает конденсацию и теплопотери.',
    icon: '🔥',
    items: ['Изоляция трубопровода Ø15мм', 'Изоляция трубопровода Ø22мм', 'Изоляция трубопровода Ø28мм', 'Самоклеящаяся изоляционная лента'],
    price: 'от 150 ₽',
    color: 'from-orange-600 to-orange-800',
    count: 10,
    note: 'Толщина 13–19 мм для охлаждающих систем',
  },
]

const whyOriginal = [
  { icon: '✅', title: 'Гарантированная совместимость', desc: 'Оригинальные аксессуары разработаны специально под модели Shuft. Никакого риска несовместимости.' },
  { icon: '🛡️', title: 'Гарантия 1 год', desc: 'Официальная гарантия на все аксессуары и расходные материалы Shuft.' },
  { icon: '🚀', title: 'Всегда в наличии', desc: 'Склад в Москве. Более 200 позиций. Доставка за 24 часа.' },
  { icon: '💡', title: 'Совет инженера', desc: 'Не знаете, что нужно? Инженер подберёт правильные аксессуары по вашей модели.' },
]

const maintenanceTips = [
  { step: 1, title: 'Фильтр', freq: 'раз в 3 месяца', warn: 'Грязный фильтр → рост шума, падение КПД' },
  { step: 2, title: 'Термостат', freq: 'по мере износа', warn: 'Сбои настроек → нестабильная температура' },
  { step: 3, title: 'Клапаны', freq: 'раз в 5–7 лет', warn: 'Заклинивший клапан → нет охлаждения' },
  { step: 4, title: 'Изоляция', freq: 'раз в 10+ лет', warn: 'Повреждение → конденсат, промокание' },
]

const faqItems = [
  {
    q: 'Как часто нужно менять фильтры в фанкойле Shuft?',
    a: 'При нормальном использовании — раз в 3 месяца. В запылённых помещениях — раз в 1–2 месяца. Грязный фильтр снижает производительность до 30% и увеличивает шум.',
  },
  {
    q: 'Подходят ли термостаты Shuft ко всем моделям фанкойлов?',
    a: 'Термостаты TC-100, TC-200T, TC-300W совместимы со всеми фанкойлами Shuft (SFH, SFR, SFF). Для BMS-интеграции нужен TC-400BMS с поддержкой Modbus/BACnet.',
  },
  {
    q: 'Нужны ли клапаны для каждого фанкойла?',
    a: 'Да, на каждый фанкойл устанавливают 2 запорных крана (подача и обратка) и регулирующий клапан с электроприводом для управления мощностью по сигналу термостата.',
  },
  {
    q: 'Какая изоляция нужна для трубопроводов?',
    a: 'Для систем охлаждения (+7…+12°C) — теплоизоляция 13–19 мм из вспененного каучука. Предотвращает конденсацию и теплопотери. Размер выбирается по диаметру трубы.',
  },
  {
    q: 'Можно ли заказать аксессуары с доставкой в регионы?',
    a: 'Да. Отправляем СДЭК, Деловыми Линиями, ПЭК по всей России. Минимальная сумма заказа с доставкой — 3 000 ₽.',
  },
]

export default function AksessuuryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'Аксессуары' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Аксессуары и комплектующие для фанкойлов Shuft</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Оригинальные термостаты, клапаны, фильтры и изоляция для всех моделей Shuft. Гарантированная совместимость,
          гарантия 1 год, склад в Москве. Доставка за 24 часа.
        </p>

        {/* Категории */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
              <div className={`bg-gradient-to-br ${cat.color} text-white p-6`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl">{cat.icon}</div>
                  <span className="text-white/70 text-sm">{cat.count} позиций</span>
                </div>
                <h2 className="font-bold text-2xl">{cat.title}</h2>
                <div className="text-white/80 text-sm mt-1">{cat.note}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                <ul className="space-y-2 mb-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between border-t pt-4">
                  <div className="font-bold text-blue-600 text-lg">{cat.price}</div>
                  <Link href={cat.href} className="btn-primary">Смотреть →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Почему оригинальные */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Почему важно использовать оригинальные аксессуары Shuft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOriginal.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Сроки замены */}
        <section className="mb-14 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Как часто менять аксессуары — памятка</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {maintenanceTips.map((tip, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{tip.step}</div>
                  <div className="font-bold text-gray-900">{tip.title}</div>
                </div>
                <div className="text-blue-600 font-medium text-sm mb-2">{tip.freq}</div>
                <div className="text-xs text-red-600 bg-red-50 rounded-lg p-2">{tip.warn}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Быстрый выбор по модели */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Подбор аксессуаров по модели фанкойла</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Модель фанкойла</th>
                  <th className="p-4 text-center">Фильтр</th>
                  <th className="p-4 text-center">Клапан</th>
                  <th className="p-4 text-center">Термостат</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: 'SFH-500 V3 (настенный)', filter: 'G4-SFH500', valve: '3/4"', therm: 'TC-100 / TC-300W' },
                  { model: 'SFH-800 V3 (настенный)', filter: 'G4-SFH800', valve: '3/4"', therm: 'TC-100 / TC-300W' },
                  { model: 'SFH-1200 V3 (настенный)', filter: 'G4-SFH1200', valve: '3/4"', therm: 'TC-200T / TC-300W' },
                  { model: 'SFR-950F (кассетный)', filter: 'G4-SFR950', valve: '3/4"', therm: 'TC-200T' },
                  { model: 'SFR-1200F (кассетный)', filter: 'G4-SFR1200', valve: '3/4"', therm: 'TC-200T / TC-400BMS' },
                  { model: 'SFF-300G50 (канальный)', filter: 'G4-SFF300', valve: '3/4"', therm: 'TC-100 / TC-300W' },
                  { model: 'SFF-1400G50 (канальный)', filter: 'G4-SFF1400', valve: '1"', therm: 'TC-400BMS' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-gray-800 border-b border-gray-100">{row.model}</td>
                    <td className="p-4 text-center text-gray-600 border-b border-gray-100">{row.filter}</td>
                    <td className="p-4 text-center text-gray-600 border-b border-gray-100">{row.valve}</td>
                    <td className="p-4 text-center text-gray-600 border-b border-gray-100">{row.therm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">Не нашли свою модель? Позвоните — поможем подобрать правильные аксессуары.</p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы об аксессуарах Shuft</h2>
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
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Нужна помощь с выбором аксессуаров?</h2>
          <p className="text-gray-600 mb-6">
            Скажите нашему инженеру модель вашего фанкойла — он составит полный список необходимых аксессуаров и расходников.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951203375" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg">📞 +7 (495) 120-33-75</a>
            <Link href="/contacts" className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-lg">Написать нам</Link>
          </div>
        </div>
      </div>
    </>
  )
}
