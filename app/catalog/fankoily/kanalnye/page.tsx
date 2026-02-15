import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Канальные фанкойлы Shuft SFC — купить в Москве | Цены 2026',
  description: 'Скрытые канальные фанкойлы Shuft для квартир и офисов. Не видны в интерьере, мощность 2–22 кВт. Официальный дилер, гарантия 3 года.',
}

const models = [
  { name: 'Shuft SFF-300G50', cooling: 2.8, heating: 4.2, airflow: 620, noise: 25, area: 28, price: 42180, inStock: true },
  { name: 'Shuft SFF-500G50', cooling: 4.5, heating: 6.8, airflow: 960, noise: 27, area: 45, price: 58900, inStock: true },
  { name: 'Shuft SFF-800G50', cooling: 7.2, heating: 10.5, airflow: 1400, noise: 30, area: 72, price: 79500, inStock: true },
  { name: 'Shuft SFF-1400G50', cooling: 12.0, heating: 16.8, airflow: 2100, noise: 34, area: 120, price: 124000, inStock: false },
]

export default function KanalnyePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Фанкойлы', href: '/catalog/fankoily' },
        { name: 'Канальные' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Канальные фанкойлы Shuft — купить в Москве</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Канальные фанкойлы полностью скрыты за отделкой. Распределяют воздух через систему воздуховодов,
        позволяя создать комфортный климат во всём помещении без видимого оборудования.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {models.map((model, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex">
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-l-2xl flex flex-col justify-between min-w-[160px]">
              <div>
                <div className="font-bold text-lg">{model.name.split(' ').slice(1).join(' ')}</div>
                <div className="text-blue-200 text-sm">Shuft</div>
              </div>
              <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${model.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                {model.inStock ? '✓ Есть' : '✗ Заказ'}
              </span>
            </div>
            <div className="p-6 flex-1">
              <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                <div><span className="text-gray-500">Охл.: </span><span className="font-bold">{model.cooling} кВт</span></div>
                <div><span className="text-gray-500">Обогр.: </span><span className="font-bold">{model.heating} кВт</span></div>
                <div><span className="text-gray-500">Шум: </span><span className="font-bold">{model.noise} дБА</span></div>
                <div><span className="text-gray-500">Площадь: </span><span className="font-bold">до {model.area} м²</span></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-bold text-blue-600">{model.price.toLocaleString('ru-RU')} ₽</div>
                <a href="tel:+74951203375" className="btn-primary py-2 px-3 text-xs">Заказать</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
