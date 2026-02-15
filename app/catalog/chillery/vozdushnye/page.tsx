import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Воздушные чиллеры Shuft — цены 2026 | Купить в Москве',
  description: 'Воздушные чиллеры Shuft SCH-A для систем чиллер-фанкойл. Мощность 20–60 кВт, работа до −25°C. Официальный дилер, гарантия 3 года.',
}

const models = [
  {
    name: 'Shuft SCH-020A',
    power: '20 кВт',
    area: 'до 200 м²',
    cop: '4.2',
    minTemp: '−15°C',
    refrigerant: 'R410A',
    weight: '165 кг',
    price: '185 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft SCH-040A',
    power: '40 кВт',
    area: 'до 400 м²',
    cop: '4.5',
    minTemp: '−20°C',
    refrigerant: 'R410A',
    weight: '240 кг',
    price: '310 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft SCH-060A',
    power: '60 кВт',
    area: 'до 600 м²',
    cop: '4.4',
    minTemp: '−25°C',
    refrigerant: 'R410A',
    weight: '320 кг',
    price: '450 000 ₽',
    inStock: false,
  },
]

export default function VozdushnyeChilleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Чиллеры', href: '/catalog/chillery' },
        { name: 'Воздушные' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Воздушные чиллеры Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Воздушные чиллеры (с воздушным охлаждением конденсатора) — наиболее распространённое решение.
        Устанавливаются на крыше или рядом со зданием. Работают при температуре наружного воздуха до −25°C.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { value: '20–60 кВт', label: 'диапазон мощностей' },
          { value: '−25°C', label: 'минимальная T улицы' },
          { value: 'COP 4.5', label: 'энергоэффективность' },
          { value: '3 года', label: 'гарантия' },
        ].map((s, i) => (
          <div key={i} className="bg-sky-600 text-white rounded-2xl p-5 text-center">
            <div className="text-xl font-bold">{s.value}</div>
            <div className="text-sky-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {models.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-sky-700 to-sky-900 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-sky-500 bg-opacity-50 text-xs px-2 py-1 rounded-full">Воздушный</span>
                {m.inStock
                  ? <span className="text-green-300 text-xs">В наличии</span>
                  : <span className="text-yellow-300 text-xs">Под заказ 14 дней</span>}
              </div>
              <h2 className="font-bold text-2xl">{m.name}</h2>
              <p className="text-sky-200 text-sm mt-1">{m.power} · {m.area}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Мощность охл.', value: m.power },
                  { label: 'COP', value: m.cop },
                  { label: 'Мин. T улицы', value: m.minTemp },
                  { label: 'Хладагент', value: m.refrigerant },
                  { label: 'Масса', value: m.weight },
                  { label: 'Площадь', value: m.area },
                ].map((spec, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{spec.label}</div>
                    <div className="font-semibold text-gray-900 text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-2xl font-bold text-sky-600">{m.price}</div>
                <Link href="/contacts#form" className="bg-sky-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-sky-700 transition-colors text-sm">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-12">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Преимущества воздушного чиллера</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Простой монтаж', desc: 'Не нужна градирня или подключение к водопроводу' },
            { title: 'Круглогодичная работа', desc: 'Работает при T наружного воздуха до −25°C' },
            { title: 'Низкие эксплуатационные расходы', desc: 'Нет расхода воды, минимальное обслуживание' },
            { title: 'Масштабируемость', desc: 'Можно добавить второй чиллер в резерв или для расширения' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className="text-sky-500 text-xl mt-0.5">✓</div>
              <div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-sky-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Подберём чиллер для вашего объекта</h2>
        <p className="text-sky-100 mb-6">Бесплатный расчёт нагрузки и подбор модели — за 30 минут</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-sky-600 font-bold px-8 py-3 rounded-xl hover:bg-sky-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить расчёт
          </Link>
        </div>
      </div>
    </div>
  )
}
