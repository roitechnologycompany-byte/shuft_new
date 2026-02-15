import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Монтаж фанкойлов Shuft в Москве — цены и сроки',
  description: 'Профессиональный монтаж фанкойлов Shuft в Москве. Лицензированные специалисты, установка за 1–3 дня. Цена монтажа от 5 000 ₽. Гарантия на работы.',
}

const prices = [
  { type: 'Настенный фанкойл', time: '1 день', price: '5 000–7 000 ₽' },
  { type: 'Канальный фанкойл', time: '1–2 дня', price: '7 000–12 000 ₽' },
  { type: 'Кассетный фанкойл', time: '2–3 дня', price: '10 000–16 000 ₽' },
  { type: 'Напольно-потолочный', time: '1 день', price: '6 000–9 000 ₽' },
  { type: 'Система чиллер + фанкойлы', time: '3–7 дней', price: 'Индивидуально' },
]

const steps = [
  { num: '01', title: 'Заявка', desc: 'Оставьте заявку на сайте или позвоните. Уточним детали проекта.' },
  { num: '02', title: 'Выезд инженера', desc: 'Бесплатный выезд специалиста для обмера и оценки объёма работ.' },
  { num: '03', title: 'Коммерческое предложение', desc: 'Готовим смету в течение 24 часов. Фиксируем стоимость.' },
  { num: '04', title: 'Монтаж', desc: 'Лицензированные монтажники выполняют установку за 1–3 дня.' },
  { num: '05', title: 'Пусконаладка', desc: 'Проверяем работу системы, настраиваем параметры, объясняем управление.' },
  { num: '06', title: 'Гарантия', desc: 'Выдаём гарантию на монтажные работы и оборудование Shuft (3 года).' },
]

export default function MontazhPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Услуги', href: '/services' },
        { name: 'Монтаж фанкойлов' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Монтаж фанкойлов Shuft в Москве</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Профессиональная установка фанкойлов Shuft лицензированными специалистами. Монтаж за 1–3 дня, 
        гарантия на работы, пусконаладка в комплекте.
      </p>

      {/* Price table */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-12">
        <div className="bg-blue-600 text-white p-6">
          <h2 className="text-2xl font-bold">Стоимость монтажа фанкойлов Shuft</h2>
          <p className="text-blue-100 mt-1">Окончательная цена определяется после осмотра помещения</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Тип фанкойла</th>
                <th className="text-left p-4 font-semibold text-gray-700">Срок монтажа</th>
                <th className="text-left p-4 font-semibold text-gray-700">Стоимость</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4 font-medium text-gray-900">{p.type}</td>
                  <td className="p-4 text-gray-600">{p.time}</td>
                  <td className="p-4 font-bold text-blue-600">{p.price}</td>
                  <td className="p-4">
                    <a href="tel:+74951203375" className="btn-primary text-sm py-2">Заказать</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Steps */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как проходит монтаж</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-4xl font-black text-blue-100 mb-2">{step.num}</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-3xl p-8">
        <ContactForm title="Заказать монтаж фанкойла Shuft" subtitle="Бесплатный выезд инженера для обмера и оценки. Смета за 24 часа." />
      </div>
    </div>
  )
}
