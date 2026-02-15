import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Проектирование VRF-систем Shuft в Москве | Shuft.Online',
  description: 'Разработка проекта VRF-системы Shuft для вашего объекта. Расчёт мощностей, схема разводки, подбор оборудования. Сроки: 3–5 дней.',
}

export default function ProektirovaniePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Проектирование VRF' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Проектирование VRF-систем Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Наши инженеры разработают полный проект мультизональной системы кондиционирования для вашего объекта.
        Расчёт мощностей, схема разводки, подбор оборудования, спецификация.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Что входит в проектирование</h2>
          <div className="space-y-4">
            {['Анализ объекта и требований заказчика', 'Расчёт тепловых нагрузок каждой зоны', 'Подбор внешних и внутренних блоков VRF', 'Разработка схемы разводки трубопроводов', 'Расчёт длин трубопроводов и перепадов высот', 'Составление спецификации оборудования и материалов', 'Разработка монтажного чертежа', 'Согласование с заказчиком'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">Сроки и стоимость</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Малые объекты (до 500 м²)</span><span className="font-bold text-blue-600">3–5 дней / от 50 000 ₽</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Средние объекты (500–2000 м²)</span><span className="font-bold text-blue-600">5–10 дней / от 100 000 ₽</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Крупные объекты (от 2000 м²)</span><span className="font-bold text-blue-600">10–20 дней / Договорная</span></div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm title="Запросить проектирование VRF" subtitle="Опишите объект — подготовим предварительный расчёт бесплатно" variant="sidebar" />
        </div>
      </div>
    </div>
  )
}
