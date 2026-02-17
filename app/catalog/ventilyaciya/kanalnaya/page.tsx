import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'Канальная вентиляция Shuft — цены 2026 | Купить в Москве',
  description: 'Канальные вентиляционные установки Shuft для офисов, ресторанов и производства. Приточка, вытяжка, рекуперация. Официальный дилер в Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/ventilyaciya/kanalnaya/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Вентиляция', item: 'https://shuft.online/catalog/ventilyaciya/' },
    { '@type': 'ListItem', position: 4, name: 'Канальная', item: 'https://shuft.online/catalog/ventilyaciya/kanalnaya/' },
  ],
}

const models = [
  {
    name: 'Shuft AHU-1000',
    airflow: '1 000 м³/ч',
    area: 'до 100 м²',
    type: 'Приточная',
    features: ['Нагрев', 'Фильтрация G4+F7', 'Бесплатная доставка'],
    price: '48 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft AHU-2000R',
    airflow: '2 000 м³/ч',
    area: 'до 200 м²',
    type: 'Приточно-вытяжная',
    features: ['Рекуперация 70%', 'Нагрев', 'Охлаждение', 'Фильтрация F9'],
    price: '95 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft AHU-4000R',
    airflow: '4 000 м³/ч',
    area: 'до 400 м²',
    type: 'Приточно-вытяжная',
    features: ['Рекуперация 75%', 'EC-мотор', 'Удалённое управление', 'Фильтрация F9'],
    price: '165 000 ₽',
    inStock: false,
  },
]

export default function KanalnajaVentilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Вентиляция', href: '/catalog/ventilyaciya' },
        { name: 'Канальная' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Канальная вентиляция Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Канальные вентиляционные установки Shuft обеспечивают приток свежего воздуха и вытяжку.
        Модели с рекуперацией тепла экономят до 75% тепловой энергии.
      </p>

      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Что такое канальная вентиляция</h2>
        <p className="text-gray-700 mb-3">
          Канальная система — воздух подаётся по скрытым воздуховодам к каждому помещению.
          В отличие от настенных рекуператоров, канальная установка обслуживает весь этаж или здание
          из одной точки. Идеальна для офисов, ресторанов и производств.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {models.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-teal-500 bg-opacity-50 text-xs px-2 py-1 rounded-full">{m.type}</span>
                {m.inStock
                  ? <span className="text-green-300 text-xs">В наличии</span>
                  : <span className="text-yellow-300 text-xs">Под заказ</span>}
              </div>
              <h2 className="font-bold text-xl">{m.name}</h2>
              <p className="text-teal-200 text-sm mt-1">{m.airflow} · {m.area}</p>
            </div>
            <div className="p-6">
              <ul className="space-y-1 mb-5">
                {m.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-teal-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-2xl font-bold text-teal-600">{m.price}</div>
                <Link href="/contacts#form" className="bg-teal-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-teal-700 transition-colors text-sm">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-teal-50 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Когда нужна канальная вентиляция</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex gap-2"><span className="text-teal-500">→</span> Площадь более 100 м²</li>
            <li className="flex gap-2"><span className="text-teal-500">→</span> Требуется подача воздуха в несколько зон</li>
            <li className="flex gap-2"><span className="text-teal-500">→</span> Нужна фильтрация (офис, медицина, фарм. производство)</li>
            <li className="flex gap-2"><span className="text-teal-500">→</span> Требования по нормам СанПиН к воздухообмену</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Что входит в монтаж</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex gap-2"><span className="text-gray-400">1.</span> Проектирование воздуховодной сети</li>
            <li className="flex gap-2"><span className="text-gray-400">2.</span> Установка и подключение агрегата</li>
            <li className="flex gap-2"><span className="text-gray-400">3.</span> Монтаж воздуховодов и диффузоров</li>
            <li className="flex gap-2"><span className="text-gray-400">4.</span> Пусконаладка, балансировка, сдача</li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Рассчитаем вентиляцию для вашего объекта</h2>
        <p className="text-teal-100 mb-6">Учтём СанПиН, нормы воздухообмена и особенности помещения</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить расчёт
          </Link>
        </div>
      </div>

      <VideoSection
        title="Видео-обзоры канальных вентиляторов Shuft"
        videos={[
          {
            id: 'dQw4w9WgXcQ',
            title: 'Обзор канального вентилятора Shuft SВF-200 — монтаж',
            description: 'Установка канального вентилятора в воздуховод, электроподключение, настройка скорости.',
            duration: '6:42',
          },
        ]}
      />

      <DocsSection
        title="Документация для скачивания"
        docs={[
          {
            name: 'Инструкция канальные вентиляторы Shuft SВF',
            description: 'Монтаж в воздуховод, электроподключение, обслуживание',
            size: '2.8 МБ',
            type: 'manual',
            url: '/docs/shuft-sbf-manual.pdf',
          },
          {
            name: 'Паспорт Shuft SBF-200',
            description: 'Технические характеристики и заводской паспорт',
            size: '0.9 МБ',
            type: 'passport',
            url: '/docs/shuft-sbf-200-passport.pdf',
          },
          {
            name: 'Сертификат соответствия — канальные вентиляторы',
            description: 'Сертификат ТР ТС, действителен до 31.12.2027',
            size: '0.7 МБ',
            type: 'certificate',
            url: '/docs/shuft-sbf-certificate.pdf',
          },
        ]}
      />
    </div>
    </>
  )
}
