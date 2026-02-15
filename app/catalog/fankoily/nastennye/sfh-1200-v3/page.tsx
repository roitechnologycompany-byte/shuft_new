import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Настенный фанкойл Shuft SFH-1200 V3 — купить в Москве | 98 900 ₽',
  description: 'SFH-1200 V3 — настенный фанкойл 11 кВт для помещений до 110 м². Минимальный шум 25 дБА. Гарантия 3 года, монтаж за 1–3 дня. Официальный дилер Shuft.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/nastennye/sfh-1200-v3/' },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Настенный фанкойл Shuft SFH-1200 V3',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Настенный фанкойл мощностью 11.0 кВт для крупных помещений до 110 м². Уровень шума от 25 до 35 дБА.',
  sku: 'SFH-1200-V3',
  mpn: 'SFH-1200-V3',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/nastennye/sfh-1200-v3/',
    priceCurrency: 'RUB',
    price: '98900',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '14',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog' },
    { '@type': 'ListItem', position: 3, name: 'Фанкойлы', item: 'https://shuft.online/catalog/fankoily' },
    { '@type': 'ListItem', position: 4, name: 'Настенные', item: 'https://shuft.online/catalog/fankoily/nastennye' },
    { '@type': 'ListItem', position: 5, name: 'SFH-1200 V3', item: 'https://shuft.online/catalog/fankoily/nastennye/sfh-1200-v3' },
  ],
}

const specs = [
  { label: 'Тип', value: 'Настенный фанкойл' },
  { label: 'Мощность охлаждения', value: '11.0 кВт' },
  { label: 'Мощность обогрева', value: '16.5 кВт' },
  { label: 'Расход воздуха', value: '1800 м³/ч' },
  { label: 'Уровень шума (мин/макс)', value: '25 / 35 дБА' },
  { label: 'Площадь помещения', value: 'до 110 м²' },
  { label: 'Управление', value: 'ИК-пульт в комплекте' },
  { label: 'Габариты (Ш×В×Г)', value: '1500 × 310 × 215 мм' },
  { label: 'Вес', value: '28 кг' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Производитель', value: 'Shuft (Россия)' },
  { label: 'Артикул', value: 'SFH-1200-V3' },
]

const kit = [
  'Настенный фанкойл Shuft SFH-1200 V3',
  'ИК-пульт управления',
  'Монтажная планка',
  'Комплект крепежа',
  'Дренажный шланг (2.0 м)',
  'Воздушный фильтр',
  'Руководство по эксплуатации (рус.)',
  'Гарантийный талон (3 года)',
]

const faqs = [
  { q: 'Для каких помещений подходит SFH-1200 V3?', a: 'Это флагманская настенная модель для крупных помещений площадью до 110 м²: большие офисы, торговые залы, рестораны, банкетные залы.' },
  { q: 'Насколько тихо работает в минимальном режиме?', a: 'В минимальном режиме шум составляет 25 дБА — очень тихо. В максимальном режиме — 35 дБА, обеспечивая мощный воздухообмен.' },
  { q: 'Выдержит ли стена вес 28 кг?', a: 'Да, монтажная планка распределяет нагрузку. Монтаж выполняется в несущую стену или на специальную усиленную конструкцию. Наши специалисты оценят стену при осмотре объекта.' },
  { q: 'Какой чиллер нужен?', a: 'Рекомендуется чиллер мощностью от 12 кВт. Подберём оптимальную комплектацию под ваш объект.' },
  { q: 'Можно ли управлять несколькими фанкойлами с одного пульта?', a: 'Да, при использовании централизованной системы управления можно объединить несколько агрегатов. Уточните у менеджера.' },
]

const reviews = [
  { author: 'Григорий Н.', city: 'Москва', date: 'Январь 2026', rating: 5, text: 'Поставили в ресторанный зал 100 м². Мощность отличная — охлаждает быстро даже в жару 35°C на улице.' },
  { author: 'Татьяна К.', city: 'Москва', date: 'Декабрь 2025', rating: 4, text: 'Большой и мощный фанкойл. Монтаж занял полтора дня. Работает хорошо, тихо на минимуме.' },
  { author: 'Андрей Ю.', city: 'Мытищи', date: 'Ноябрь 2025', rating: 5, text: 'Для большого офиса — идеальный выбор. Регулировка шума от 25 дБА — можно говорить по телефону спокойно.' },
]

export default function SFH1200V3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Настенные', href: '/catalog/fankoily/nastennye' },
          { name: 'SFH-1200 V3' },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-8xl mb-4">❄️</div>
                <div className="font-bold text-2xl text-gray-700">Shuft SFH-1200 V3</div>
                <div className="text-gray-500">Настенный фанкойл</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Вид спереди', 'Вид сбоку', 'Монтаж'].map((view, i) => (
                <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors">
                  {view}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 5 ? 'text-yellow-400 text-xl' : 'text-yellow-200 text-xl'}>★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.8/5 (14 отзывов)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Настенный фанкойл Shuft SFH-1200 V3 — купить в Москве</h1>
            <div className="text-gray-500 text-sm mb-6">Артикул: SFH-1200-V3 | Производитель: Shuft (Россия)</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-blue-600">98 900 ₽</div>
              <div className="text-gray-400 text-sm">включая НДС</div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-lg font-medium">
                <span>✓</span> В наличии
              </span>
              <span className="text-gray-500 text-sm">Доставка за 24 часа</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Охлаждение', value: '11.0 кВт' },
                { label: 'Шум', value: '35 дБА (мин. 25)' },
                { label: 'Площадь', value: 'до 110 м²' },
                { label: 'Гарантия', value: '3 года' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                  <div className="font-bold text-gray-900 text-lg">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <a href="tel:+74951203375" className="btn-accent w-full justify-center text-lg py-4">
                Заказать консультацию
              </a>
              <Link href="/contacts#form" className="btn-secondary w-full justify-center py-3">
                Оставить заявку
              </Link>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
              <div className="font-semibold text-gray-900 mb-2">Гарантии покупки:</div>
              <ul className="space-y-1">
                <li>✓ Официальный дилер Shuft — оригинальное оборудование</li>
                <li>✓ Гарантия производителя 3 года</li>
                <li>✓ Монтаж лицензированными специалистами за 1–3 дня</li>
                <li>✓ Техподдержка 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание</h2>
              <p className="text-gray-700 mb-4">
                Настенный фанкойл Shuft SFH-1200 V3 — топовая модель настенной линейки для крупных коммерческих
                помещений площадью до 110 м². Производительность 1800 м³/ч обеспечивает интенсивный воздухообмен
                даже в залах с большим потоком людей.
              </p>
              <p className="text-gray-700 mb-4">
                Мощность обогрева 16.5 кВт делает модель эффективным решением для зимнего периода.
                Регулируемый диапазон шума от 25 до 35 дБА позволяет настроить работу под любую задачу:
                тихий режим для переговоров или мощный режим для быстрого охлаждения.
              </p>
              <h3 className="font-bold text-gray-900 mb-3">Применение:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Крупные офисы (до 110 м²)', 'Рестораны и банкетные залы', 'Торговые залы', 'Конференц-залы', 'Фитнес-центры', 'Промышленные объекты'].map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">•</span> {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Технические характеристики</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 text-gray-500 font-medium w-1/2">{spec.label}</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Комплектация</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kit.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Частые вопросы по модели</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="border border-gray-200 rounded-xl group">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 hover:text-blue-600">
                      <span>{faq.q}</span>
                      <span className="text-blue-600 group-open:rotate-180 transition-transform ml-2">▼</span>
                    </summary>
                    <div className="px-4 pb-4 text-gray-600">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Отзывы покупателей</h2>
              <div className="space-y-4">
                {reviews.map((r, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-gray-900">{r.author}</span>
                        <span className="text-gray-400 text-sm ml-2">— {r.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(r.rating)].map((_, si) => (
                            <span key={si} className="text-yellow-400">★</span>
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-20">
              <h3 className="font-bold text-xl mb-4">Официальный дилер Shuft</h3>
              <ul className="space-y-3 text-sm mb-6">
                {['Сертификаты от производителя', 'Прямые поставки с завода', 'Гарантия 3 года', 'Техподдержка 24/7', 'Склад в Москве', 'Монтаж за 1–3 дня'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-300">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:+74951203375" className="block text-center bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors mb-3">
                +7 (495) 120-33-75
              </a>
              <Link href="/contacts#form" className="block text-center bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors">
                Оставить заявку
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Похожие модели</h3>
              <div className="space-y-3">
                {[
                  { name: 'SFH-800 V3', power: '7.24 кВт', price: '74 500 ₽', href: '/catalog/fankoily/nastennye/sfh-800-v3' },
                  { name: 'SFH-500 V3', power: '4.51 кВт', price: '56 960 ₽', href: '/catalog/fankoily/nastennye/sfh-500-v3' },
                  { name: 'SFR-1200F (кассетный)', power: '7.5 кВт', price: '89 900 ₽', href: '/catalog/fankoily/kassetnye/sfr-1200f' },
                ].map((m, i) => (
                  <Link key={i} href={m.href} className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{m.name}</div>
                      <div className="text-gray-500 text-xs">{m.power}</div>
                    </div>
                    <div className="text-blue-600 font-semibold text-sm">{m.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
