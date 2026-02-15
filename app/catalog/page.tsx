import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Каталог оборудования Shuft — купить в Москве',
  description: 'Полный каталог климатического оборудования Shuft: фанкойлы, чиллеры, VRF-системы, вентиляция. Официальный дилер в Москве.',
}

const categories = [
  {
    title: 'Фанкойлы Shuft',
    desc: 'Кассетные, канальные, настенные, напольно-потолочные. Мощность 1.6–22 кВт.',
    href: '/catalog/fankoily',
    icon: '❄️',
    price: 'от 42 180 ₽',
    count: '15+ моделей',
    subcategories: ['Кассетные', 'Канальные', 'Настенные', 'Напольно-потолочные'],
  },
  {
    title: 'Чиллеры Shuft',
    desc: 'Воздушные и водяные чиллеры для систем охлаждения любого масштаба.',
    href: '/catalog/chillery',
    icon: '🌡️',
    price: 'от 180 000 ₽',
    count: '8+ моделей',
    subcategories: ['Воздушные', 'Водяные'],
  },
  {
    title: 'Вентиляция Shuft',
    desc: 'Канальная и кровельная вентиляция для промышленных и коммерческих объектов.',
    href: '/catalog/ventilyaciya',
    icon: '💨',
    price: 'от 25 000 ₽',
    count: '12+ моделей',
    subcategories: ['Канальная', 'Кровельная'],
  },
  {
    title: 'VRF-системы Shuft',
    desc: 'Мультизональные системы кондиционирования для крупных объектов.',
    href: '/catalog/vrf-sistemy',
    icon: '🏢',
    price: 'от 450 000 ₽',
    count: '6+ моделей',
    subcategories: ['Внешние блоки', 'Внутренние блоки'],
  },
  {
    title: 'Аксессуары',
    desc: 'Термостаты, клапаны, фильтры, изоляция и комплектующие для фанкойлов Shuft.',
    href: '/catalog/aksessuary',
    icon: '🔩',
    price: 'от 500 ₽',
    count: '30+ позиций',
    subcategories: ['Термостаты', 'Клапаны', 'Фильтры', 'Изоляция'],
  },
  {
    title: 'Запчасти Shuft',
    desc: 'Оригинальные запчасти и расходные материалы для всех моделей Shuft.',
    href: '/catalog/zapchasti',
    icon: '🔧',
    price: 'от 200 ₽',
    count: '50+ позиций',
    subcategories: [],
  },
]

export default function CatalogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Каталог оборудования Shuft</h1>
      <p className="text-gray-600 text-lg mb-10">
        Официальный дилер Shuft в Москве. Всё климатическое оборудование в наличии на складе.
        Гарантия производителя 3 года, доставка за 24 часа, монтаж за 1–3 дня.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <Link key={i} href={cat.href} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6">
              <div className="text-5xl mb-3">{cat.icon}</div>
              <h2 className="font-bold text-xl">{cat.title}</h2>
              <div className="flex items-center justify-between mt-2">
                <span className="text-blue-200 text-sm">{cat.count}</span>
                <span className="bg-white text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">{cat.price}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
              {cat.subcategories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {cat.subcategories.map((sub, si) => (
                    <span key={si} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{sub}</span>
                  ))}
                </div>
              )}
              <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800 flex items-center gap-1">
                Смотреть каталог <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
