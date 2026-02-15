import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Чиллеры Shuft — купить в Москве | Цены 2026',
  description: 'Воздушные и водяные чиллеры Shuft для систем центрального охлаждения. Официальный дилер в Москве, гарантия 3 года, монтаж и пусконаладка.',
  alternates: { canonical: 'https://shuft.online/catalog/chillery/' },
}

const models = [
  { name: 'Shuft SCH-020A', type: 'Воздушный', power: '20 кВт', area: 'до 200 м²', price: '185 000 ₽', inStock: true },
  { name: 'Shuft SCH-040A', type: 'Воздушный', power: '40 кВт', area: 'до 400 м²', price: '310 000 ₽', inStock: true },
  { name: 'Shuft SCH-060A', type: 'Воздушный', power: '60 кВт', area: 'до 600 м²', price: '450 000 ₽', inStock: false },
  { name: 'Shuft SCH-020W', type: 'Водяной', power: '20 кВт', area: 'до 200 м²', price: '220 000 ₽', inStock: true },
  { name: 'Shuft SCH-040W', type: 'Водяной', power: '40 кВт', area: 'до 400 м²', price: '380 000 ₽', inStock: false },
]

export default function ChilleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'Чиллеры' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Чиллеры Shuft — купить в Москве</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Чиллеры Shuft — центральные агрегаты для систем чиллер-фанкойл. Один чиллер обеспечивает охлаждение
        нескольких фанкойлов одновременно. Мощность: 20–60 кВт, площадь обслуживания: до 600 м².
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Что такое чиллер и зачем он нужен</h2>
        <p className="text-gray-700">
          Чиллер — это холодильная машина, которая охлаждает воду, циркулирующую по трубам к фанкойлам.
          В системе чиллер-фанкойл один чиллер может обслуживать от 5 до 50 фанкойлов.
          Это экономичнее, чем устанавливать отдельный кондиционер в каждое помещение.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {models.map((model, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6">
              <div className="text-xs font-medium bg-blue-500 bg-opacity-50 inline-block px-2 py-1 rounded-full mb-2">{model.type}</div>
              <h2 className="font-bold text-xl">{model.name}</h2>
              <span className={`mt-2 inline-block text-sm px-3 py-1 rounded-full ${model.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                {model.inStock ? '✓ В наличии' : '✗ Под заказ'}
              </span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3"><div className="text-gray-500 text-xs">Мощность</div><div className="font-bold">{model.power}</div></div>
                <div className="bg-gray-50 rounded-lg p-3"><div className="text-gray-500 text-xs">Площадь</div><div className="font-bold">{model.area}</div></div>
              </div>
              <div className="border-t pt-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">{model.price}</div>
                <a href="tel:+74951203375" className="btn-primary text-sm py-2 px-4">Заказать</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Подобрать чиллер под ваш объект</h2>
        <p className="text-gray-600 mb-6">Расскажите о вашем проекте — инженер рассчитает мощность и предложит оптимальный вариант</p>
        <a href="tel:+74951203375" className="btn-primary text-lg px-8 py-4">📞 +7 (495) 120-33-75</a>
      </div>
    </div>
  )
}
