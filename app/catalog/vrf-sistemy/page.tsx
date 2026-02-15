import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'VRF-системы Shuft — купить в Москве | Цены и проектирование',
  description: 'Мультизональные VRF-системы Shuft для крупных объектов. Проектирование, поставка, монтаж. Официальный дилер в Москве, гарантия 3 года.',
  alternates: { canonical: 'https://shuft.online/catalog/vrf-sistemy/' },
}

export default function VRFPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'VRF-системы' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">VRF-системы Shuft — купить в Москве</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        VRF (Variable Refrigerant Flow) — мультизональные системы кондиционирования для крупных объектов.
        Один внешний блок обслуживает до 30–50 внутренних блоков. Идеально для офисных центров,
        гостиниц, торговых комплексов.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: 'Внешние блоки VRF', power: '10–100 кВт', desc: 'Наружные агрегаты с переменным расходом хладагента. Обслуживают до 50 внутренних блоков.', price: 'от 450 000 ₽' },
          { title: 'Внутренние блоки', power: '2–16 кВт', desc: 'Кассетные, канальные, настенные блоки для подключения к VRF-системе.', price: 'от 35 000 ₽' },
          { title: 'Проектирование VRF', power: 'Любой масштаб', desc: 'Разработка проекта системы с расчётом мощностей, схемой разводки и подбором оборудования.', price: 'Индивидуально' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h2 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h2>
            <div className="text-blue-600 font-medium text-sm mb-3">{item.power}</div>
            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            <div className="border-t pt-4 flex items-center justify-between">
              <div className="font-bold text-blue-600">{item.price}</div>
              <a href="tel:+74951203375" className="btn-primary text-sm py-2 px-3">Узнать цену</a>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Нужен расчёт VRF-системы?</h2>
        <p className="text-blue-100 mb-6">Наши инженеры разработают проект под ваш объект. Сроки: 3–5 рабочих дней. Стоимость проектирования — от 50 000 ₽.</p>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl">📞 Позвонить</a>
          <Link href="/services/proektirovanie-vrf" className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl">Узнать об услуге</Link>
        </div>
      </div>
    </div>
  )
}
