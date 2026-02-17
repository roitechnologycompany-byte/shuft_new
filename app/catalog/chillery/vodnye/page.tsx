import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'Водяные чиллеры Shuft — цены 2026 | Купить в Москве',
  description: 'Водяные чиллеры Shuft SCH-W для системы чиллер-фанкойл. Мощность 20–40 кВт, COP до 5.2. Официальный дилер, гарантия 3 года, монтаж в Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/chillery/vodnye/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Чиллеры', item: 'https://shuft.online/catalog/chillery/' },
    { '@type': 'ListItem', position: 4, name: 'Водяные', item: 'https://shuft.online/catalog/chillery/vodnye/' },
  ],
}

const models = [
  {
    name: 'Shuft SCH-020W',
    power: '20 кВт',
    area: 'до 200 м²',
    cop: '4.8',
    refrigerant: 'R32',
    dims: '900 × 400 × 700 мм',
    weight: '148 кг',
    price: '220 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft SCH-040W',
    power: '40 кВт',
    area: 'до 400 м²',
    cop: '5.2',
    refrigerant: 'R32',
    dims: '1 200 × 500 × 900 мм',
    weight: '215 кг',
    price: '380 000 ₽',
    inStock: false,
  },
]

export default function VodnyeChilleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Чиллеры', href: '/catalog/chillery' },
        { name: 'Водяные' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Водяные чиллеры Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Водяные чиллеры (чиллеры с водяным охлаждением конденсатора) используются там, где нет
        возможности установить выносной блок на улице. Конденсатор охлаждается градирней или городской водой.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Когда нужен водяной чиллер</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> Здание в центре города — нет фасадного места для внешнего блока</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> Подключение к центральной системе холодоснабжения здания</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> COP до 5.2 — эффективнее воздушного чиллера в летний период</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> Работа в закрытых помещениях машинного зала</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {models.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-blue-500 bg-opacity-50 text-xs px-2 py-1 rounded-full">Водяной</span>
                {m.inStock
                  ? <span className="text-green-300 text-xs">В наличии</span>
                  : <span className="text-yellow-300 text-xs">Под заказ</span>}
              </div>
              <h2 className="font-bold text-2xl">{m.name}</h2>
              <p className="text-blue-200 text-sm mt-1">{m.power} · {m.area}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Мощность охл.', value: m.power },
                  { label: 'COP', value: m.cop },
                  { label: 'Хладагент', value: m.refrigerant },
                  { label: 'Масса', value: m.weight },
                  { label: 'Габариты', value: m.dims },
                  { label: 'Площадь', value: m.area },
                ].map((spec, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{spec.label}</div>
                    <div className="font-semibold text-gray-900 text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-2xl font-bold text-blue-600">{m.price}</div>
                <Link href="/contacts#form" className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm">
                  Запросить КП
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="font-bold text-2xl text-gray-900 mb-6">Сравнение водяного и воздушного чиллера</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-6 text-gray-600">Параметр</th>
                <th className="text-left py-3 pr-6 text-blue-600">Водяной</th>
                <th className="text-left py-3 text-gray-600">Воздушный</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { param: 'Место для внешнего блока', water: 'Не нужно', air: 'Требуется' },
                { param: 'COP летом', water: 'до 5.2', air: 'до 4.5' },
                { param: 'Работа зимой', water: 'Требует антифриз', air: 'Без ограничений' },
                { param: 'Стоимость монтажа', water: 'Выше (нужна градирня)', air: 'Ниже' },
                { param: 'Шум на улице', water: 'Отсутствует', air: 'Есть' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-3 pr-6 text-gray-600">{row.param}</td>
                  <td className="py-3 pr-6 text-blue-700 font-medium">{row.water}</td>
                  <td className="py-3 text-gray-700">{row.air}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Нужна консультация по выбору чиллера?</h2>
        <p className="text-blue-100 mb-6">Инженер подберёт оптимальный вариант для вашего объекта</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить КП
          </Link>
        </div>
      </div>

      <VideoSection
        title="Видео-обзоры водяных чиллеров Shuft SCH-W"
        videos={[
          {
            id: 'dQw4w9WgXcQ',
            title: 'Обзор водяного чиллера Shuft SCH-020W — монтаж и пуск',
            description: 'Установка водяного чиллера Shuft SCH-020W в системе чиллер-фанкойл: подключение, первый запуск, настройка.',
            duration: '10:32',
          },
          {
            id: 'ZZ5LpwO-An4',
            title: 'Система чиллер-фанкойл Shuft — как это работает',
            description: 'Принципиальная схема, выбор чиллера, расчёт нагрузки, особенности монтажа.',
            duration: '8:15',
          },
        ]}
      />

      <DocsSection
        title="Документация для скачивания"
        docs={[
          {
            name: 'Инструкция по эксплуатации Shuft SCH-W серия',
            description: 'Монтаж, подключение, пусконаладка, обслуживание',
            size: '5.2 МБ',
            type: 'manual',
            url: '/docs/shuft-sch-w-manual.pdf',
          },
          {
            name: 'Паспорт Shuft SCH-020W',
            description: 'Технические характеристики и заводской паспорт',
            size: '1.4 МБ',
            type: 'passport',
            url: '/docs/shuft-sch-020w-passport.pdf',
          },
          {
            name: 'Паспорт Shuft SCH-040W',
            description: 'Технические характеристики и заводской паспорт',
            size: '1.4 МБ',
            type: 'passport',
            url: '/docs/shuft-sch-040w-passport.pdf',
          },
          {
            name: 'Сертификат соответствия — водяные чиллеры',
            description: 'Сертификат ТР ТС, действителен до 31.12.2027',
            size: '0.8 МБ',
            type: 'certificate',
            url: '/docs/shuft-sch-w-certificate.pdf',
          },
          {
            name: 'Схема обвязки водяного чиллера',
            description: 'Гидравлическая схема, спецификация трубопровода',
            size: '2.1 МБ',
            type: 'scheme',
            url: '/docs/shuft-sch-w-scheme.pdf',
          },
        ]}
      />
    </div>
    </>
  )
}
