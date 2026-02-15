import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Подбор оборудования Shuft — бесплатная консультация | Shuft.Online',
  description: 'Бесплатный подбор фанкойлов, чиллеров и VRF-систем Shuft под ваш объект. Расчёт мощности, сравнение моделей, коммерческое предложение за 24 часа.',
}

export default function PodborPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Подбор оборудования' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Бесплатный подбор оборудования Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Наши инженеры подберут оптимальное климатическое оборудование для вашего объекта бесплатно.
        Расчёт мощности, выбор типа фанкойла, коммерческое предложение — всё за 24 часа.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { step: '1', title: 'Заявка', desc: 'Оставьте заявку — укажите площадь и тип помещения' },
              { step: '2', title: 'Расчёт', desc: 'Инженер рассчитает мощность и подберёт модели' },
              { step: '3', title: 'Предложение', desc: 'Получите КП с ценами за 24 часа' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Также попробуйте калькулятор</h2>
            <p className="text-gray-600 mb-4">Получите предварительные рекомендации за 1 минуту — без ожидания звонка</p>
            <Link href="/calc/fankoil" className="btn-primary">Открыть калькулятор →</Link>
          </div>
          <ContactForm title="Заявка на подбор оборудования" subtitle="Опишите ваш объект — ответим с рекомендациями за 24 часа" />
        </div>
        <div>
          <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-20">
            <h3 className="font-bold text-xl mb-4">Почему мы</h3>
            <ul className="space-y-3 text-sm">
              {['Подбор бесплатно', '12 лет опыта главного инженера', 'Официальный дилер Shuft', '150+ реализованных проектов', 'КП за 24 часа', 'Гарантия 3 года'].map((item, i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-green-300">✓</span>{item}</li>
              ))}
            </ul>
            <a href="tel:+74951203375" className="block text-center bg-white text-blue-600 font-bold py-3 rounded-xl mt-6 hover:bg-blue-50">📞 +7 (495) 120-33-75</a>
          </div>
        </div>
      </div>
    </div>
  )
}
