import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Фильтры для фанкойлов Shuft — цены 2026 | Купить в Москве',
  description: 'Фильтры для фанкойлов Shuft: G3, G4, F7. Замена раз в 3 месяца. Оригинальные фильтры в наличии, доставка по Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/aksessuary/filtry/' },
}

const products = [
  {
    name: 'Фильтр Shuft G3 (грубая очистка)',
    class: 'G3',
    efficiency: '50% частицы >10 мкм',
    change: 'Каждые 1–3 мес.',
    compatible: 'Все модели Shuft',
    price: '490 ₽',
    minQty: 'от 1 шт.',
    inStock: true,
  },
  {
    name: 'Фильтр Shuft G4 (стандарт)',
    class: 'G4',
    efficiency: '90% частицы >10 мкм',
    change: 'Каждые 3 мес.',
    compatible: 'Все модели Shuft',
    price: '690 ₽',
    minQty: 'от 1 шт.',
    inStock: true,
  },
  {
    name: 'Фильтр Shuft F7 (тонкая очистка)',
    class: 'F7',
    efficiency: '90% частицы >1 мкм',
    change: 'Каждые 6 мес.',
    compatible: 'SFH, SFR, SFF с модулем F7',
    price: '1 290 ₽',
    minQty: 'от 1 шт.',
    inStock: true,
  },
  {
    name: 'Комплект фильтров на год (G4×4)',
    class: 'G4',
    efficiency: '4 замены в год',
    change: 'Готовый комплект',
    compatible: 'Все модели Shuft',
    price: '2 490 ₽',
    minQty: '1 комплект',
    inStock: true,
  },
]

export default function FiltryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Аксессуары', href: '/catalog/aksessuary' },
        { name: 'Фильтры' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Фильтры для фанкойлов Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Оригинальные сменные фильтры для всех моделей фанкойлов Shuft. Классы G3, G4 и F7.
        Регулярная замена фильтра — основа нормальной работы и долгого срока службы фанкойла.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-10">
        <div className="flex items-start gap-3">
          <div className="text-yellow-500 text-2xl">⚠️</div>
          <div>
            <div className="font-semibold text-gray-900">Как часто менять фильтр?</div>
            <div className="text-gray-700 text-sm mt-1">
              В офисах и квартирах — каждые 3 месяца (G4). На производстве и в пыльных помещениях — ежемесячно (G3).
              Засорённый фильтр снижает производительность на 30–50% и увеличивает расход электроэнергии.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                  Класс {p.class}
                </span>
                <h2 className="font-bold text-lg text-gray-900 mt-2">{p.name}</h2>
              </div>
              {p.inStock && <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">В наличии</span>}
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: 'Эффективность', value: p.efficiency },
                { label: 'Замена', value: p.change },
                { label: 'Совместимость', value: p.compatible },
                { label: 'Кол-во', value: p.minQty },
              ].map((spec, j) => (
                <div key={j} className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500">{spec.label}</div>
                  <div className="font-medium text-gray-900 text-sm">{spec.value}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <div className="text-2xl font-bold text-blue-600">{p.price}</div>
              <Link href="/contacts#form" className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm">
                Заказать
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Признаки засорённого фильтра</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { sign: 'Снизилась подача воздуха', action: 'Проверьте и замените фильтр' },
            { sign: 'Фанкойл не охлаждает/нагревает', action: 'Грязный фильтр блокирует теплообмен' },
            { sign: 'Необычный шум и вибрация', action: 'Фильтр деформирован — замените' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
              <div className="text-red-500 font-medium text-sm mb-1">{item.sign}</div>
              <div className="text-gray-600 text-sm">{item.action}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Закажите фильтры с доставкой по Москве</h2>
        <p className="text-blue-100 mb-6">Доставка в день заказа при наличии на складе</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  )
}
