import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Запчасти для фанкойлов Shuft — цены 2026 | Москва',
  description: 'Оригинальные запчасти для фанкойлов Shuft: вентиляторы, двигатели, платы управления, поддоны. Гарантия 1 год. Доставка по Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/zapchasti/' },
}

const categories = [
  {
    name: 'Вентиляторы и двигатели',
    items: [
      { name: 'Вентилятор для SFH-800 V3 (оригинал)', price: '3 200 ₽', sku: 'SFH800-FAN', inStock: true },
      { name: 'Вентилятор для SFH-1200 V3 (оригинал)', price: '3 800 ₽', sku: 'SFH1200-FAN', inStock: true },
      { name: 'Электродвигатель вентилятора 12W', price: '4 500 ₽', sku: 'MOT-12W', inStock: true },
      { name: 'Электродвигатель вентилятора 18W', price: '5 200 ₽', sku: 'MOT-18W', inStock: false },
    ],
  },
  {
    name: 'Платы управления',
    items: [
      { name: 'Плата управления SFH V3 (серия 2024+)', price: '6 800 ₽', sku: 'PCB-SFH-V3', inStock: true },
      { name: 'Плата управления SFR (кассетные)', price: '8 200 ₽', sku: 'PCB-SFR', inStock: false },
      { name: 'Плата управления SFF (канальные/напол.)', price: '7 500 ₽', sku: 'PCB-SFF', inStock: true },
    ],
  },
  {
    name: 'Теплообменники',
    items: [
      { name: 'Теплообменник SFH-800 (медь+алюм.)', price: '9 800 ₽', sku: 'HX-SFH800', inStock: false },
      { name: 'Теплообменник SFH-1200 (медь+алюм.)', price: '12 500 ₽', sku: 'HX-SFH1200', inStock: false },
    ],
  },
  {
    name: 'Поддоны и дренаж',
    items: [
      { name: 'Поддон конденсата SFR-950F', price: '2 100 ₽', sku: 'TRAY-SFR950', inStock: true },
      { name: 'Поддон конденсата SFR-1200F', price: '2 400 ₽', sku: 'TRAY-SFR1200', inStock: true },
      { name: 'Помпа дренажная 7 л/ч (universal)', price: '3 900 ₽', sku: 'PUMP-7L', inStock: true },
      { name: 'Датчик уровня воды в поддоне', price: '890 ₽', sku: 'WLS-01', inStock: true },
    ],
  },
]

export default function ZapchastiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Запчасти' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Запчасти для фанкойлов Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Оригинальные запасные части для всех моделей фанкойлов Shuft. Гарантия на запчасти — 1 год.
        Часть позиций в наличии на складе, остальное под заказ от 5 рабочих дней.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-10">
        <div className="flex items-start gap-3">
          <div className="text-red-500 text-2xl">🔧</div>
          <div>
            <div className="font-semibold text-gray-900">Как заказать запчасть</div>
            <div className="text-gray-700 text-sm mt-1">
              Укажите модель фанкойла (например, SFH-1200 V3) и описание неисправности.
              Менеджер уточнит артикул и наличие на складе. Гарантийный ремонт — бесплатно при наличии гарантийного талона.
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 mb-12">
        {categories.map((cat, ci) => (
          <div key={ci}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{cat.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item, ii) => (
                <div key={ii} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-400 mt-1">Арт: {item.sku}</div>
                    <div className={`text-xs font-medium mt-1 ${item.inStock ? 'text-green-600' : 'text-orange-500'}`}>
                      {item.inStock ? 'В наличии' : 'Под заказ 5–7 дней'}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-xl font-bold text-blue-600 whitespace-nowrap">{item.price}</div>
                    <Link href="/contacts#form" className="text-xs text-blue-600 hover:underline mt-1 block">
                      Заказать →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: 'Гарантийный ремонт', desc: 'Бесплатная замена запчастей при наличии гарантийного талона в течение 3 лет' },
          { title: 'Диагностика', desc: 'Выезд мастера и диагностика неисправности — от 1 500 ₽ (засчитывается при ремонте)' },
          { title: 'Срочный заказ', desc: 'Экспресс-доставка запчастей со склада — в день заказа при наличии' },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl p-6">
            <div className="font-bold text-gray-900 mb-2">{item.title}</div>
            <div className="text-gray-600 text-sm">{item.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Не нашли нужную запчасть?</h2>
        <p className="text-blue-100 mb-6">Назовите модель и артикул — найдём и доставим</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Написать менеджеру
          </Link>
        </div>
      </div>
    </div>
  )
}
