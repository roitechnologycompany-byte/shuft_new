import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Кровельная вентиляция Shuft — цены 2026 | Купить в Москве',
  description: 'Кровельные вентиляционные установки и вентиляторы Shuft. Монтаж на крыше без нарушения интерьера. Официальный дилер в Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/ventilyaciya/krovelnaya/' },
}

const models = [
  {
    name: 'Shuft RF-800',
    airflow: '800 м³/ч',
    area: 'до 80 м²',
    power: '0.25 кВт',
    type: 'Крышный вентилятор',
    protection: 'IP54',
    price: '28 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft RF-2000',
    airflow: '2 000 м³/ч',
    area: 'до 200 м²',
    power: '0.55 кВт',
    type: 'Крышный вентилятор',
    protection: 'IP54',
    price: '52 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft RFU-3000',
    airflow: '3 000 м³/ч',
    area: 'до 300 м²',
    power: '1.1 кВт',
    type: 'Крышная установка',
    protection: 'IP55',
    price: '98 000 ₽',
    inStock: false,
  },
]

export default function KrovelnajaVentilPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Вентиляция', href: '/catalog/ventilyaciya' },
        { name: 'Кровельная' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Кровельная вентиляция Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Кровельные вентиляторы и установки Shuft монтируются на крыше здания. Воздух удаляется вертикально
        вверх — без воздуховодов и без нарушения интерьера помещений. Идеальны для ресторанов,
        супермаркетов и производственных цехов.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { value: 'IP54/55', label: 'защита от влаги' },
          { value: '−40°C', label: 'мин. температура' },
          { value: '48 дБА', label: 'уровень шума' },
          { value: '10 лет', label: 'срок службы' },
        ].map((s, i) => (
          <div key={i} className="bg-slate-600 text-white rounded-2xl p-5 text-center">
            <div className="text-xl font-bold">{s.value}</div>
            <div className="text-slate-300 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {models.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-slate-500 bg-opacity-50 text-xs px-2 py-1 rounded-full">{m.type}</span>
                {m.inStock
                  ? <span className="text-green-300 text-xs">В наличии</span>
                  : <span className="text-yellow-300 text-xs">Под заказ</span>}
              </div>
              <h2 className="font-bold text-xl">{m.name}</h2>
              <p className="text-slate-300 text-sm mt-1">{m.airflow} · {m.area}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Расход воздуха', value: m.airflow },
                  { label: 'Мощность', value: m.power },
                  { label: 'Защита', value: m.protection },
                  { label: 'Площадь', value: m.area },
                ].map((spec, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{spec.label}</div>
                    <div className="font-semibold text-gray-900 text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-2xl font-bold text-slate-700">{m.price}</div>
                <Link href="/contacts#form" className="bg-slate-700 text-white px-5 py-2 rounded-xl font-medium hover:bg-slate-800 transition-colors text-sm">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Когда применяется кровельная вентиляция</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Рестораны и кухни', desc: 'Удаление горячего воздуха и запахов с кухни без воздуховодов через потолок зала' },
            { title: 'Торговые залы', desc: 'Вытяжка из больших помещений без нарушения дизайна интерьера' },
            { title: 'Производственные цеха', desc: 'Удаление тепловыделений от оборудования через крышу' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
              <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
              <div className="text-gray-600 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-700 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Подберём кровельную вентиляцию</h2>
        <p className="text-slate-300 mb-6">Расчёт воздухообмена по нормам и подбор модели — бесплатно</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-slate-700 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить КП
          </Link>
        </div>
      </div>
    </div>
  )
}
