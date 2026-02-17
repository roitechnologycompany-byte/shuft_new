import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Клапаны для фанкойлов Shuft — цены 2026 | Купить в Москве',
  description: 'Двух- и трёхходовые клапаны для фанкойлов Shuft: шаровые, регулирующие, с электроприводом. Официальный дилер, доставка по Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/aksessuary/klapany/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Аксессуары', item: 'https://shuft.online/catalog/aksessuary/' },
    { '@type': 'ListItem', position: 4, name: 'Клапаны', item: 'https://shuft.online/catalog/aksessuary/klapany/' },
  ],
}

const products = [
  {
    name: 'Шаровый кран 3/4" (2 шт.)',
    type: 'Запорный',
    connection: '3/4"',
    actuator: 'Ручной',
    use: 'Подача и обратка фанкойла',
    price: '1 200 ₽',
    inStock: true,
  },
  {
    name: 'Двухходовой клапан 3/4" с приводом',
    type: '2-ходовой регулирующий',
    connection: '3/4"',
    actuator: 'Электропривод 24V',
    use: 'Регулировка подачи воды в фанкойл',
    price: '4 800 ₽',
    inStock: true,
  },
  {
    name: 'Трёхходовой клапан 3/4" с приводом',
    type: '3-ходовой регулирующий',
    connection: '3/4"',
    actuator: 'Электропривод 24V',
    use: 'Переключение нагрев/охлаждение',
    price: '6 200 ₽',
    inStock: true,
  },
  {
    name: 'Двухходовой клапан 1" с приводом',
    type: '2-ходовой регулирующий',
    connection: '1"',
    actuator: 'Электропривод 24V',
    use: 'Крупные фанкойлы (мощность >3 кВт)',
    price: '5 900 ₽',
    inStock: false,
  },
]

export default function KlapanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Аксессуары', href: '/catalog/aksessuary' },
        { name: 'Клапаны' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Клапаны для фанкойлов Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Запорные и регулирующие клапаны для монтажа фанкойлов. Двух- и трёхходовые модели
        с электроприводом позволяют автоматически управлять подачей воды к каждому фанкойлу.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Зачем нужны клапаны с приводом</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Двухходовой клапан</div>
            <div className="text-gray-700 text-sm">
              Открывает / закрывает подачу воды к фанкойлу. Когда помещение нагрелось до заданной температуры,
              клапан закрывается — вода в фанкойл не поступает. Экономия тепло- или холодоносителя.
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-1">Трёхходовой клапан</div>
            <div className="text-gray-700 text-sm">
              Переключает фанкойл между нагревом (горячая вода) и охлаждением (холодная вода).
              Используется в системах, где один фанкойл должен работать в обоих режимах.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                {p.type}
              </span>
              {p.inStock
                ? <span className="text-green-600 text-xs font-medium">В наличии</span>
                : <span className="text-orange-500 text-xs font-medium">Под заказ</span>}
            </div>
            <h2 className="font-bold text-lg text-gray-900 mb-3">{p.name}</h2>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: 'Подключение', value: p.connection },
                { label: 'Привод', value: p.actuator },
                { label: 'Применение', value: p.use },
              ].map((spec, j) => (
                <div key={j} className={`bg-gray-50 rounded-lg p-3 ${j === 2 ? 'col-span-2' : ''}`}>
                  <div className="text-xs text-gray-500">{spec.label}</div>
                  <div className="font-medium text-gray-900 text-sm">{spec.value}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <div className="text-2xl font-bold text-blue-600">{p.price}</div>
              <Link href="/contacts#form" className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm">
                Заказать
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Подберём клапаны для вашей системы</h2>
        <p className="text-blue-100 mb-6">Уточните тип фанкойла и диаметр трубопровода</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
