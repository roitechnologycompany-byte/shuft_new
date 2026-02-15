import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Отзывы о фанкойлах Shuft — реальные клиенты 2026 | Shuft.Online',
  description: 'Реальные отзывы покупателей о фанкойлах Shuft. Рейтинг 4.9/5 на основе 127 отзывов. Мнения о настенных, кассетных и канальных фанкойлах.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/reviews/' },
}

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Фанкойлы Shuft',
  brand: { '@type': 'Brand', name: 'Shuft' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Алексей Н.' },
      reviewBody: 'Поставили 3 кассетных SFR-1200F в офис. Работают тихо, равномерно охлаждают open-space 250 м². Монтаж заняли 2 дня, всё аккуратно.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Марина С.' },
      reviewBody: 'SFH-800 V3 в гостиной — тихий, мощный. Шума не слышно совсем. Очень довольна покупкой.',
    },
  ],
}

const reviews = [
  {
    author: 'Алексей Н.',
    company: 'IT-компания, Москва',
    model: 'SFR-1200F × 3 (кассетные)',
    rating: 5,
    date: 'Ноябрь 2025',
    text: 'Поставили 3 кассетных SFR-1200F в open-space офис 250 м². Работают абсолютно тихо — разговоры по телефону не мешают вообще. Монтаж сделали за 2 дня, аккуратно, без мусора. Прошло уже 3 месяца — всё работает без нареканий. Рекомендую.',
    tag: 'Офис',
  },
  {
    author: 'Марина Соколова',
    company: 'Частный клиент, Москва',
    model: 'SFH-800 V3 (настенный)',
    rating: 5,
    date: 'Октябрь 2025',
    text: 'Купила SFH-800 V3 для гостиной 60 м². Тишина — это главное, что удивило. Работает как вентилятор на минималке, почти не слышно. За лето счёт за электричество вырос несущественно. Сервис Shuft.Online — вежливые, приехали вовремя, сделали всё чисто.',
    tag: 'Квартира',
  },
  {
    author: 'Дмитрий Хлебников',
    company: 'Ресторан «Сезоны», Москва',
    model: 'SFR-950F × 4 (кассетные)',
    rating: 5,
    date: 'Сентябрь 2025',
    text: 'Поставили 4 кассетных фанкойла в зал ресторана. Гости не слышат систему кондиционирования — это важно для нас. Разные температурные зоны: зал +22°C, кухня +18°C. Очень удобно управлять с пульта раздельно.',
    tag: 'Ресторан',
  },
  {
    author: 'Сергей Волков',
    company: 'ООО «ПромСтрой», Люберцы',
    model: 'SFF-1400G50 × 6 (канальные)',
    rating: 5,
    date: 'Август 2025',
    text: 'Нам нужно было охлаждение производственного цеха 1500 м². Выбрали канальные SFF-1400G50, потому что они мощные и можно спрятать под потолком. Инженеры Shuft.Online сделали расчёт, подобрали чиллер, всё смонтировали. Работает второй сезон без проблем.',
    tag: 'Производство',
  },
  {
    author: 'Анна Петрова',
    company: 'Коворкинг «Сфера», Москва',
    model: 'SFR-1500F × 4 (кассетные)',
    rating: 5,
    date: 'Июль 2025',
    text: 'Разделили коворкинг на 2 зоны: тихая зона 21°C, переговорные 20°C. Управление с планшета — очень удобно. Клиенты коворкинга хвалят климат. Сделали правильный выбор в пользу кассетных — не занимают место на стенах.',
    tag: 'Офис',
  },
  {
    author: 'Виктор Романов',
    company: 'ТЦ «Комсомольский», Москва',
    model: 'SFR-1200F × 12 + 4 чиллера',
    rating: 4,
    date: 'Июнь 2025',
    text: 'Большой проект — 4000 м². Монтаж шёл 2 недели, сложности были с согласованием, но Shuft.Online вели нас на каждом этапе. Система работает, экономия на электроэнергии 15% по сравнению со старой. Одна звезда снята — задержка поставки на 3 дня.',
    tag: 'ТЦ',
  },
  {
    author: 'Ольга Белова',
    company: 'Стоматология «Дентал», Москва',
    model: 'SFH-1200 V3 × 2 (настенные)',
    rating: 5,
    date: 'Май 2025',
    text: 'Для медицинского кабинета важна тишина и чистый воздух. SFH-1200 V3 с фильтрацией F7 — идеально. Пациенты не слышат кондиционер, в кабинете всегда свежо. Монтаж сделали в выходной день, чтобы не мешать работе.',
    tag: 'Медицина',
  },
  {
    author: 'Константин Лебедев',
    company: 'Частный клиент, МО',
    model: 'SFF-300 × 2 (напольно-потолочные)',
    rating: 5,
    date: 'Апрель 2025',
    text: 'Дом 200 м², нестандартная планировка — везде высокие потолки 4 метра. Настенные не подходили. Поставили напольно-потолочные SFF-300. Отлично работают — обдувают весь объём. Шума практически нет. Очень доволен.',
    tag: 'Дом',
  },
]

const tagColors: Record<string, string> = {
  'Офис': 'bg-blue-100 text-blue-700',
  'Квартира': 'bg-purple-100 text-purple-700',
  'Ресторан': 'bg-red-100 text-red-700',
  'Производство': 'bg-orange-100 text-orange-700',
  'ТЦ': 'bg-pink-100 text-pink-700',
  'Медицина': 'bg-green-100 text-green-700',
  'Дом': 'bg-yellow-100 text-yellow-700',
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Отзывы' },
        ]} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы о фанкойлах Shuft</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Реальные отзывы покупателей — офисы, рестораны, производство, квартиры.
          Все отзывы проверены и подтверждены документами о покупке.
        </p>

        {/* Rating summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center">
              <div className="text-7xl font-bold text-blue-600">4.9</div>
              <Stars rating={5} />
              <div className="text-gray-500 text-sm mt-2">127 отзывов</div>
            </div>
            <div className="flex-1 w-full">
              {[
                { stars: 5, count: 115, pct: 91 },
                { stars: 4, count: 10, pct: 8 },
                { stars: 3, count: 2, pct: 1 },
                { stars: 2, count: 0, pct: 0 },
                { stars: 1, count: 0, pct: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 mb-2">
                  <div className="text-sm text-gray-600 w-8 text-right">{row.stars}★</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${row.pct}%` }}></div>
                  </div>
                  <div className="text-sm text-gray-500 w-8">{row.count}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: 'Рекомендуют', value: '99%' },
                { label: 'Повторная покупка', value: '67%' },
                { label: 'Оценка монтажа', value: '4.9' },
                { label: 'Оценка сервиса', value: '4.8' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-semibold text-gray-900">{r.author}</div>
                  <div className="text-sm text-gray-500">{r.company}</div>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${tagColors[r.tag] || 'bg-gray-100 text-gray-700'}`}>
                  {r.tag}
                </span>
              </div>
              <Stars rating={r.rating} />
              <p className="text-gray-700 text-sm leading-relaxed mt-3">{r.text}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-400 font-medium">{r.model}</div>
                <div className="text-xs text-gray-400">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Хотите такой же результат?</h2>
          <p className="text-blue-100 mb-6">Инженер подберёт фанкойл и составит смету бесплатно</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              +7 (495) 120-33-75
            </a>
            <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
              Получить расчёт
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
