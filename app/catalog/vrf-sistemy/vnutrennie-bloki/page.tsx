import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Внутренние блоки VRF Shuft — цены 2026 | Купить в Москве',
  description: 'Внутренние блоки VRF-систем Shuft: настенные, кассетные, канальные, напольно-потолочные. Официальный дилер, гарантия 3 года.',
  alternates: { canonical: 'https://shuft.online/catalog/vrf-sistemy/vnutrennie-bloki/' },
}

const types = [
  {
    type: 'Настенный',
    model: 'Shuft VRF-IW-25',
    power: '2.5 кВт',
    noise: '22 дБА',
    control: 'Проводной пульт + Wi-Fi',
    use: 'Офисы, переговорные',
    price: '42 000 ₽',
    inStock: true,
  },
  {
    type: 'Кассетный (4-поточный)',
    model: 'Shuft VRF-IC-40',
    power: '4.0 кВт',
    noise: '28 дБА',
    control: 'Проводной пульт',
    use: 'Открытые пространства, торговля',
    price: '68 000 ₽',
    inStock: true,
  },
  {
    type: 'Канальный',
    model: 'Shuft VRF-ID-50',
    power: '5.0 кВт',
    noise: '30 дБА',
    control: 'Проводной пульт',
    use: 'Скрытый монтаж, залы',
    price: '75 000 ₽',
    inStock: true,
  },
  {
    type: 'Напольно-потолочный',
    model: 'Shuft VRF-IF-60',
    power: '6.0 кВт',
    noise: '35 дБА',
    control: 'Проводной пульт',
    use: 'Высокие помещения, лобби',
    price: '88 000 ₽',
    inStock: false,
  },
]

export default function VnutrennieBlokyVRFPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'VRF-системы', href: '/catalog/vrf-sistemy' },
        { name: 'Внутренние блоки' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Внутренние блоки VRF-систем Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Внутренние блоки подключаются к внешнему VRF-агрегату. Выпускаются четырёх типов: настенные,
        кассетные, канальные и напольно-потолочные. Каждый блок управляется независимо.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {types.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-violet-700 to-violet-900 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-violet-500 bg-opacity-50 text-xs px-2 py-1 rounded-full">{m.type}</span>
                {m.inStock
                  ? <span className="text-green-300 text-xs">В наличии</span>
                  : <span className="text-yellow-300 text-xs">Под заказ</span>}
              </div>
              <h2 className="font-bold text-xl">{m.model}</h2>
              <p className="text-violet-200 text-sm mt-1">{m.power} · {m.noise}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Мощность', value: m.power },
                  { label: 'Шум', value: m.noise },
                  { label: 'Управление', value: m.control },
                  { label: 'Применение', value: m.use },
                ].map((spec, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{spec.label}</div>
                    <div className="font-medium text-gray-900 text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-2xl font-bold text-violet-600">{m.price}</div>
                <Link href="/contacts#form" className="bg-violet-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-violet-700 transition-colors text-sm">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-12">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Как выбрать тип внутреннего блока</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-violet-200">
                <th className="text-left py-3 pr-4 text-gray-600">Тип</th>
                <th className="text-left py-3 pr-4 text-gray-600">Монтаж</th>
                <th className="text-left py-3 text-gray-600">Лучше всего для</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-violet-100">
              {[
                { type: 'Настенный', install: 'На стену', best: 'Кабинеты, небольшие помещения' },
                { type: 'Кассетный', install: 'В подвесной потолок', best: 'Open-space, торговые залы' },
                { type: 'Канальный', install: 'За подвесным потолком', best: 'Скрытый монтаж, коридоры' },
                { type: 'Напольно-потолочный', install: 'Пол или потолок', best: 'Высокие помещения, лобби' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-3 pr-4 font-medium text-violet-700">{row.type}</td>
                  <td className="py-3 pr-4 text-gray-700">{row.install}</td>
                  <td className="py-3 text-gray-700">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-violet-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Подберём внутренние блоки для вашего проекта</h2>
        <p className="text-violet-100 mb-6">Учтём тип помещений, высоту потолков и требования к дизайну</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-violet-600 font-bold px-8 py-3 rounded-xl hover:bg-violet-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить схему
          </Link>
        </div>
      </div>
    </div>
  )
}
