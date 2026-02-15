import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Кассетные фанкойлы Shuft SFR — купить в Москве | Цены 2026',
  description: 'Встраиваемые кассетные фанкойлы Shuft для больших офисов и ТЦ. Мощность 5–20 кВт, распределение воздуха в 4 стороны. Гарантия 3 года.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/kassetnye/' },
}

const models = [
  { name: 'Shuft SFR-950F', cooling: 5.0, heating: 7.5, airflow: 950, noise: 30, area: 50, price: 72450, inStock: true },
  { name: 'Shuft SFR-1200F', cooling: 7.5, heating: 10.2, airflow: 1200, noise: 32, area: 75, price: 89900, inStock: true },
  { name: 'Shuft SFR-1500F', cooling: 10.0, heating: 13.8, airflow: 1500, noise: 35, area: 100, price: 118500, inStock: false },
]

export default function KassetnyePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Фанкойлы', href: '/catalog/fankoily' },
        { name: 'Кассетные' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Кассетные фанкойлы Shuft SFR — купить в Москве</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Кассетные фанкойлы встраиваются в подвесной потолок и равномерно распределяют воздух в 4 стороны. 
        Идеальное решение для офисов, торговых центров, банков и ресторанов с подвесными потолками.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {models.map((model, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl">
              <h2 className="font-bold text-xl mb-2">{model.name}</h2>
              <span className={`inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full ${model.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                {model.inStock ? '✓ В наличии' : '✗ Под заказ'}
              </span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Охлаждение</div>
                  <div className="font-bold">{model.cooling} кВт</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Обогрев</div>
                  <div className="font-bold">{model.heating} кВт</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Шум</div>
                  <div className="font-bold">{model.noise} дБА</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Площадь</div>
                  <div className="font-bold">до {model.area} м²</div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-3">{model.price.toLocaleString('ru-RU')} ₽</div>
                <a href="tel:+74951203375" className="btn-primary w-full justify-center text-sm py-3">Заказать консультацию</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Преимущества кассетных фанкойлов Shuft</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Встраиваются в подвесной потолок — не видны в интерьере', '4-стороннее распределение воздуха по всему помещению', 'Для помещений от 50 до 200 м²', 'Автоматические жалюзи для регулировки потока', 'Совместимы с любым чиллером от 5 кВт', 'Гарантия производителя 3 года'].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
              <span className="text-gray-700">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
