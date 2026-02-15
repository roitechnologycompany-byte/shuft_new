import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Вентиляция Shuft — купить в Москве | Канальная и кровельная',
  description: 'Канальная и кровельная вентиляция Shuft для коммерческих объектов. Официальный дилер в Москве, гарантия 3 года.',
}

export default function VentilyaciyaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'Вентиляция' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Вентиляция Shuft — каталог и цены</h1>
      <p className="text-gray-600 text-lg mb-10">Канальные и кровельные вентиляционные системы Shuft для коммерческих и промышленных объектов.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Канальная вентиляция', desc: 'Вентиляторы, приточно-вытяжные установки для монтажа в воздуховодах. Производительность до 5 000 м³/ч.', price: 'от 25 000 ₽', icon: '💨' },
          { title: 'Кровельная вентиляция', desc: 'Крышные вентиляторы для общеобменной вентиляции производственных и складских помещений. До 15 000 м³/ч.', price: 'от 45 000 ₽', icon: '🏭' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h2 className="font-bold text-2xl text-gray-900 mb-3">{item.title}</h2>
            <p className="text-gray-600 mb-6">{item.desc}</p>
            <div className="flex items-center justify-between">
              <div className="font-bold text-blue-600 text-xl">{item.price}</div>
              <a href="tel:+74951203375" className="btn-primary">Узнать цену</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
