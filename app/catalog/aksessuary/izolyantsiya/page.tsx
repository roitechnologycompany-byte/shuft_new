import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Теплоизоляция для трубопроводов Shuft — цены 2026',
  description: 'Теплоизоляция для медных трубопроводов фанкойлов и чиллеров Shuft: K-Flex, трубки Armaflex. Предотвращает конденсат. Доставка по Москве.',
}

const products = [
  {
    name: 'Изоляция K-Flex ST d15/9мм (2м)',
    diameter: '15 мм',
    thickness: '9 мм',
    material: 'Вспененный каучук',
    use: 'Трубки ¾" фанкойлов',
    price: '320 ₽',
    unit: 'за 2 м',
    inStock: true,
  },
  {
    name: 'Изоляция K-Flex ST d22/9мм (2м)',
    diameter: '22 мм',
    thickness: '9 мм',
    material: 'Вспененный каучук',
    use: 'Трубки 1" фанкойлов',
    price: '390 ₽',
    unit: 'за 2 м',
    inStock: true,
  },
  {
    name: 'Изоляция K-Flex ST d28/13мм (2м)',
    diameter: '28 мм',
    thickness: '13 мм',
    material: 'Вспененный каучук',
    use: 'Магистральные трубы',
    price: '520 ₽',
    unit: 'за 2 м',
    inStock: true,
  },
  {
    name: 'Изоляция K-Flex ST d35/13мм (2м)',
    diameter: '35 мм',
    thickness: '13 мм',
    material: 'Вспененный каучук',
    use: 'Магистральные трубы',
    price: '680 ₽',
    unit: 'за 2 м',
    inStock: false,
  },
  {
    name: 'Клей K-Flex 520 (520 мл)',
    diameter: '—',
    thickness: '—',
    material: 'Клей для K-Flex',
    use: 'Стыки и зазоры изоляции',
    price: '890 ₽',
    unit: 'за баллон',
    inStock: true,
  },
]

export default function IzolyanciyaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Аксессуары', href: '/catalog/aksessuary' },
        { name: 'Изоляция' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Теплоизоляция для трубопроводов</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Трубчатая теплоизоляция из вспененного каучука K-Flex для медных трубопроводов систем
        фанкойлов и чиллеров. Предотвращает образование конденсата и снижает теплопотери.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
        <div className="flex items-start gap-3">
          <div className="text-amber-500 text-2xl">💡</div>
          <div>
            <div className="font-semibold text-gray-900">Зачем нужна изоляция трубопроводов?</div>
            <div className="text-gray-700 text-sm mt-1">
              Без изоляции на холодных трубах образуется конденсат, который капает на потолок и вызывает
              плесень. Изоляция также снижает теплопотери и повышает эффективность системы.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded-full">
                {p.material}
              </span>
              {p.inStock
                ? <span className="text-green-600 text-xs font-medium">В наличии</span>
                : <span className="text-orange-500 text-xs font-medium">Под заказ</span>}
            </div>
            <h2 className="font-bold text-gray-900 mb-3">{p.name}</h2>
            <div className="space-y-2 mb-4">
              {p.diameter !== '—' && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Диаметр трубы</span>
                  <span className="font-medium text-gray-900">{p.diameter}</span>
                </div>
              )}
              {p.thickness !== '—' && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Толщина</span>
                  <span className="font-medium text-gray-900">{p.thickness}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Применение</span>
                <span className="font-medium text-gray-900 text-right">{p.use}</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <div className="text-xl font-bold text-amber-600">{p.price}</div>
                <div className="text-xs text-gray-400">{p.unit}</div>
              </div>
              <Link href="/contacts#form" className="bg-amber-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-amber-600 transition-colors text-sm">
                Заказать
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Рассчитаем количество изоляции для монтажа</h2>
        <p className="text-amber-100 mb-6">Укажите количество фанкойлов и длину трубопровода</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-amber-700 font-bold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  )
}
