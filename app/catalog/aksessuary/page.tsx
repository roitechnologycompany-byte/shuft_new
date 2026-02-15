import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Аксессуары и комплектующие Shuft — купить в Москве',
  description: 'Термостаты, клапаны, фильтры, изоляция и другие аксессуары для фанкойлов Shuft. Официальный дилер, всегда в наличии.',
}

const categories = [
  { name: 'Термостаты', items: ['Термостат Shuft Basic (проводной)', 'Термостат Shuft Smart (WiFi)', 'Термостат Shuft Comfort'], price: 'от 3 500 ₽' },
  { name: 'Клапаны', items: ['Двухходовой клапан DN15', 'Трёхходовой клапан DN20', 'Балансировочный клапан'], price: 'от 1 200 ₽' },
  { name: 'Фильтры', items: ['Воздушный фильтр G4 (SFH-500)', 'Воздушный фильтр G4 (SFH-800)', 'Воздушный фильтр G4 (SFR-1200F)'], price: 'от 500 ₽' },
  { name: 'Изоляция', items: ['Теплоизоляция трубопровода Ø15мм', 'Теплоизоляция трубопровода Ø22мм', 'Изоляционная лента'], price: 'от 200 ₽' },
]

export default function AksessuuryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'Аксессуары' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Аксессуары и комплектующие для фанкойлов Shuft</h1>
      <p className="text-gray-600 text-lg mb-10">Оригинальные аксессуары и расходные материалы для всех моделей Shuft. Всегда в наличии на складе в Москве.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
              <h2 className="font-bold text-lg">{cat.name}</h2>
              <span className="text-gray-300 text-sm">{cat.price}</span>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {cat.items.map((item, ii) => (
                  <li key={ii} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item}</span>
                    <a href="tel:+74951203375" className="text-blue-600 text-sm hover:underline">Цена</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
