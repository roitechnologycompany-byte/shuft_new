import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Сервис и ремонт фанкойлов Shuft в Москве | Shuft.Online',
  description: 'Техническое обслуживание и ремонт фанкойлов Shuft в Москве. Чистка, замена фильтров, диагностика. Оригинальные запчасти, гарантия на работы.',
}

const services = [
  { name: 'Чистка воздушного фильтра', time: '30 мин', price: '1 500 ₽' },
  { name: 'Промывка теплообменника', time: '1–2 часа', price: '3 500 ₽' },
  { name: 'Диагностика неисправностей', time: '1 час', price: '2 500 ₽' },
  { name: 'Техническое обслуживание (ТО)', time: '2–3 часа', price: '4 000 ₽' },
  { name: 'Замена вентилятора', time: '2 часа', price: '5 000–8 000 ₽' },
  { name: 'Замена термостата', time: '1 час', price: '3 000–6 000 ₽' },
  { name: 'Замена дренажного насоса', time: '1.5 часа', price: '4 000–7 000 ₽' },
]

export default function ServisIRemontPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Сервис и ремонт' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Сервис и ремонт фанкойлов Shuft в Москве</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">Профессиональное ТО и ремонт фанкойлов Shuft. Оригинальные запчасти, гарантия на работы. Выезд в день обращения.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-8">
            <div className="bg-gray-800 text-white p-6"><h2 className="text-xl font-bold">Прайс-лист на сервисные работы</h2><p className="text-gray-400 text-sm mt-1">Цены без учёта запчастей</p></div>
            <table className="w-full"><thead className="bg-gray-50"><tr><th className="text-left p-4 text-gray-600">Услуга</th><th className="text-left p-4 text-gray-600">Время</th><th className="text-left p-4 text-gray-600">Стоимость</th></tr></thead>
              <tbody>{services.map((s, i) => (<tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="p-4 text-gray-900">{s.name}</td><td className="p-4 text-gray-500">{s.time}</td><td className="p-4 font-bold text-blue-600">{s.price}</td></tr>))}</tbody>
            </table>
          </div>
          <ContactForm title="Вызвать мастера по ремонту Shuft" subtitle="Мастер приедет в течение суток в рабочие дни" />
        </div>
        <div>
          <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-20">
            <h3 className="font-bold text-xl mb-4">Почему доверяют нам</h3>
            <ul className="space-y-3 text-sm">{['Официальный дилер Shuft', 'Оригинальные запчасти на складе', 'Гарантия на все работы', 'Выезд в день обращения', 'Диагностика бесплатно при ремонте', 'Работаем с юрлицами (договор, акт)'].map((item, i) => (<li key={i} className="flex items-center gap-2"><span className="text-green-300">✓</span>{item}</li>))}</ul>
            <a href="tel:+74951203375" className="block text-center bg-white text-blue-600 font-bold py-3 rounded-xl mt-6">📞 +7 (495) 120-33-75</a>
          </div>
        </div>
      </div>
    </div>
  )
}
