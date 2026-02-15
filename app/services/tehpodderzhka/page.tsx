import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Техническая поддержка 24/7 фанкойлов Shuft | Shuft.Online',
  description: 'Круглосуточная техподдержка по фанкойлам Shuft. Консультации по настройке и устранению неисправностей. Бесплатно.',
}

export default function TehpodderzhkaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Техподдержка 24/7' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Техническая поддержка 24/7</h1>
      <p className="text-gray-600 text-lg mb-10">Наши специалисты доступны круглосуточно. Помогаем с настройкой, диагностикой и вопросами по эксплуатации всех фанкойлов и чиллеров Shuft.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-600 text-white rounded-2xl p-6 text-center"><div className="text-4xl mb-3">📞</div><h3 className="font-bold text-xl mb-2">Телефон</h3><a href="tel:+74951203375" className="text-2xl font-bold">+7 (495) 120-33-75</a><p className="text-blue-200 text-sm mt-2">Доступен 24/7</p></div>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center"><div className="text-4xl mb-3">✉️</div><h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3><a href="mailto:info@shuft.online" className="text-blue-600 font-medium">info@shuft.online</a><p className="text-gray-500 text-sm mt-2">Ответ в течение 2 часов</p></div>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center"><div className="text-4xl mb-3">🔧</div><h3 className="font-bold text-xl mb-2 text-gray-900">Выезд мастера</h3><p className="text-gray-600">При необходимости — в течение суток</p><p className="text-gray-500 text-sm mt-2">По Москве и МО</p></div>
      </div>
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Что мы помогаем решить</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Настройка термостата и режимов работы', 'Диагностика неисправностей по телефону', 'Рекомендации по техническому обслуживанию', 'Подбор запчастей и расходных материалов', 'Помощь при аварийных ситуациях', 'Консультации по модернизации системы'].map((item, i) => (
            <div key={i} className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">{item}</span></div>
          ))}
        </div>
      </div>
    </div>
  )
}
