import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Новости компании Shuft.Online | Москва 2026',
  description: 'Последние новости официального дилера Shuft в Москве: новые модели, акции, завершённые проекты, изменения в ценах.',
}

const news = [
  {
    date: '10 февраля 2026',
    category: 'Новые модели',
    title: 'Поступили в продажу фанкойлы серии SFH V3 — обновлённая линейка 2026',
    excerpt: 'Обновлённые настенные фанкойлы SFH-800 V3 и SFH-1200 V3 с новым блоком управления: Wi-Fi-модуль включён в комплект, уровень шума снижен до 22 дБА. Доступны в наличии на складе.',
    tag: 'new',
  },
  {
    date: '28 января 2026',
    category: 'Акции',
    title: 'Зимняя акция: скидка 10% на монтаж при заказе оборудования в январе–феврале',
    excerpt: 'До 28 февраля 2026 года при покупке фанкойлов Shuft на сумму от 100 000 ₽ стоимость монтажа снижается на 10%. Заявки принимаем по телефону или через сайт.',
    tag: 'promo',
  },
  {
    date: '15 января 2026',
    category: 'Проекты',
    title: 'Завершён монтаж системы чиллер-фанкойл в логистическом центре на МКАД',
    excerpt: 'Сданы работы по климатизации складского комплекса площадью 12 000 м²: 16 канальных фанкойлов SFF-1400G50 и централизованный чиллер. Срок монтажа — 3 недели.',
    tag: 'project',
  },
  {
    date: '1 января 2026',
    category: 'Цены',
    title: 'Актуализированы цены на оборудование Shuft на 2026 год',
    excerpt: 'С 1 января 2026 года вступили в силу новые прайс-листы производителя. Средний рост цен — 5–8%. Фанкойлы SFH-800 V3 и SFH-1200 V3 без изменений — склад пополнен в декабре.',
    tag: 'price',
  },
  {
    date: '20 декабря 2025',
    category: 'Компания',
    title: 'Shuft.Online — «Лучший дилер Shuft» по итогам 2025 года',
    excerpt: 'По итогам 2025 года компания Shuft.Online (ООО АСПРОМСИСТЕМ) признана лучшим дилером Shuft в России второй год подряд. Критерии: объём продаж, качество монтажа, удовлетворённость клиентов.',
    tag: 'award',
  },
  {
    date: '5 декабря 2025',
    category: 'Сервис',
    title: 'Запущен онлайн-сервис диагностики: опишите неисправность — получите решение',
    excerpt: 'На сайте появился онлайн-помощник по неисправностям фанкойлов. Опишите проблему в форме — инженер перезвонит в течение 1 часа с рекомендациями.',
    tag: 'service',
  },
  {
    date: '15 ноября 2025',
    category: 'Проекты',
    title: 'Монтаж 3 настенных SFH-800 V3 в IT-офисе — кейс с описанием работ',
    excerpt: 'Опубликован детальный разбор проекта климатизации офиса IT-компании на ул. Петровка: выбор моделей, расчёт нагрузки, фотографии монтажа.',
    tag: 'project',
  },
  {
    date: '1 октября 2025',
    category: 'Склад',
    title: 'Расширен складской запас: 80+ моделей Shuft в наличии',
    excerpt: 'Склад пополнен на 150 единиц оборудования. В наличии: все популярные серии настенных, кассетных, канальных и напольно-потолочных фанкойлов. Доставка — 1 день.',
    tag: 'stock',
  },
]

const tagColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  promo: 'bg-orange-100 text-orange-700',
  project: 'bg-green-100 text-green-700',
  price: 'bg-red-100 text-red-700',
  award: 'bg-yellow-100 text-yellow-700',
  service: 'bg-purple-100 text-purple-700',
  stock: 'bg-teal-100 text-teal-700',
}

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'О компании', href: '/about' },
        { name: 'Новости' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Новости Shuft.Online</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Актуальная информация о новых моделях оборудования Shuft, акциях, реализованных проектах
        и изменениях в работе компании.
      </p>

      <div className="space-y-6 mb-12">
        {news.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[item.tag] || 'bg-gray-100 text-gray-700'}`}>
                {item.category}
              </span>
              <span className="text-gray-400 text-sm">{item.date}</span>
            </div>
            <h2 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{item.excerpt}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Подпишитесь на обновления</h2>
        <p className="text-blue-100 mb-6">Новости о новых моделях и акциях — по телефону или email</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Написать нам
          </Link>
        </div>
      </div>
    </div>
  )
}
