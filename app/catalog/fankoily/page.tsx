import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Фанкойлы Shuft — купить в Москве с гарантией 3 года',
  description: 'Все модели фанкойлов Shuft: настенные, канальные, кассетные, напольно-потолочные. Цены, характеристики, доставка, монтаж. Официальный дилер в Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/' },
}

const types = [
  {
    slug: 'kassetnye',
    title: 'Кассетные фанкойлы Shuft SFR',
    shortTitle: 'Кассетные',
    desc: 'Встраиваются в подвесной потолок, распределяют воздух равномерно в 4 стороны. Идеальны для офисов, торговых центров и банков с подвесными потолками.',
    power: '5–20 кВт',
    area: '50–200 м²',
    price: 'от 72 450 ₽',
    icon: '⬛',
    models: ['SFR-950F', 'SFR-1200F', 'SFR-1500F'],
    pros: ['Скрытый монтаж в потолок', '4-стороннее распределение воздуха', 'Для больших помещений', 'Автоматические жалюзи'],
  },
  {
    slug: 'kanalnye',
    title: 'Канальные фанкойлы Shuft SFC',
    shortTitle: 'Канальные',
    desc: 'Скрыты внутри воздуховодов, невидимы в интерьере. Подходят для квартир, небольших офисов, магазинов с подвесными потолками.',
    power: '2–22 кВт',
    area: '20–220 м²',
    price: 'от 42 180 ₽',
    icon: '📦',
    models: ['SFF-300G50', 'SFF-500G50', 'SFF-800G50', 'SFF-1400G50'],
    pros: ['Полностью скрытый монтаж', 'Гибкая разводка воздуха', 'Тихая работа', 'Для любой планировки'],
  },
  {
    slug: 'nastennye',
    title: 'Настенные фанкойлы Shuft SFH',
    shortTitle: 'Настенные',
    desc: 'Самый популярный тип. Крепятся на стену, имеют привлекательный дизайн. Простой монтаж и эксплуатация. Пульт ДУ в комплекте.',
    power: '4.5–7 кВт',
    area: '30–70 м²',
    price: 'от 56 960 ₽',
    icon: '🏠',
    models: ['SFH-500 V3', 'SFH-800 V3', 'SFH-1200 V3'],
    pros: ['Простая установка', 'Элегантный дизайн', 'Тихий режим 19–26 дБА', 'ИК-пульт в комплекте'],
  },
  {
    slug: 'napolno-potolochnye',
    title: 'Напольно-потолочные фанкойлы Shuft SFF',
    shortTitle: 'Напольно-потолочные',
    desc: 'Универсальные — монтируются на пол или подвешиваются к потолку. Хорошо подходят для помещений без подвесных потолков.',
    power: '1.6–3.5 кВт',
    area: '16–35 м²',
    price: 'от 43 930 ₽',
    icon: '↕️',
    models: ['SFF-150', 'SFF-300', 'SFF-400', 'SFF-600'],
    pros: ['Гибкая установка (пол/потолок)', 'Охлаждение и обогрев', 'Для средних помещений', 'Компактный корпус'],
  },
]

export default function FancoilsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Фанкойлы' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Фанкойлы Shuft — каталог и цены в Москве</h1>
      <p className="text-gray-600 text-lg mb-8 max-w-3xl">
        Официальный дилер Shuft — все типы фанкойлов в наличии на складе. Гарантия 3 года, 
        монтаж за 1–3 дня. Бесплатная консультация и подбор по вашему объекту.
      </p>

      {/* Comparison table */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Сравнение типов фанкойлов Shuft</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="text-left p-3 rounded-tl-lg">Тип</th>
                <th className="text-left p-3">Мощность</th>
                <th className="text-left p-3">Площадь</th>
                <th className="text-left p-3">Цена от</th>
                <th className="text-left p-3 rounded-tr-lg">Лучше всего для</th>
              </tr>
            </thead>
            <tbody>
              {types.map((t, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-25'}>
                  <td className="p-3 font-medium">
                    <Link href={`/catalog/fankoily/${t.slug}`} className="text-blue-600 hover:underline">
                      {t.shortTitle}
                    </Link>
                  </td>
                  <td className="p-3 text-gray-600">{t.power}</td>
                  <td className="p-3 text-gray-600">{t.area}</td>
                  <td className="p-3 font-semibold text-blue-700">{t.price}</td>
                  <td className="p-3 text-gray-600">{
                    t.slug === 'kassetnye' ? 'ТЦ, банки, большие офисы' :
                    t.slug === 'kanalnye' ? 'Квартиры, малые офисы' :
                    t.slug === 'nastennye' ? 'Офисы, кафе, квартиры' :
                    'Помещения 20–35 м²'
                  }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Types grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {types.map((type, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-6 flex items-center gap-4">
              <div className="text-4xl">{type.icon}</div>
              <div>
                <h2 className="font-bold text-xl">{type.title}</h2>
                <div className="text-blue-200 text-sm">{type.models.join(', ')}</div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{type.desc}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Мощность</div>
                  <div className="font-bold text-gray-900">{type.power}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Площадь</div>
                  <div className="font-bold text-gray-900">{type.area}</div>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {type.pros.map((p, pi) => (
                  <li key={pi} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500">✓</span> {p}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="font-bold text-blue-600 text-lg">{type.price}</div>
                <Link href={`/catalog/fankoily/${type.slug}`} className="btn-primary py-2 px-4 text-sm">
                  Смотреть →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Нужна помощь с выбором?</h2>
        <p className="text-gray-600 mb-6">Наши инженеры подберут оптимальный фанкойл под ваш объект бесплатно</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/calc/fankoil" className="btn-accent">Калькулятор подбора</Link>
          <Link href="/catalog/compare/" className="btn-secondary">⚖️ Сравнить модели</Link>
          <a href="tel:+74951203375" className="btn-secondary">+7 (495) 120-33-75</a>
        </div>
      </div>
    </div>
  )
}
