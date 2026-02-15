import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Гарантийные условия на оборудование Shuft | Shuft.Online',
  description: 'Гарантия производителя 3 года на все фанкойлы, чиллеры и VRF-системы Shuft. Условия гарантии, что включено, техподдержка 24/7.',
}

export default function GarantiiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании', href: '/about' }, { name: 'Гарантии' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Гарантийные условия на оборудование Shuft</h1>
      <p className="text-gray-600 text-lg mb-10">Мы обеспечиваем полную гарантийную поддержку на всё оборудование Shuft, приобретённое у нас.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[{ val: '3 года', lbl: 'Гарантия производителя' }, { val: '24/7', lbl: 'Техническая поддержка' }, { val: '150+', lbl: 'Позиций запчастей в наличии' }].map((s, i) => (
          <div key={i} className="bg-blue-600 text-white rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold">{s.val}</div>
            <div className="text-blue-200 mt-1">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Что входит в гарантию</h2>
          <ul className="space-y-3">
            {['Бесплатный ремонт или замена оборудования при заводском браке', 'Бесплатная диагностика неисправностей', 'Оригинальные запчасти Shuft по гарантии', 'Выезд специалиста на объект в пределах Москвы', 'Гарантия распространяется на все компоненты фанкойла'].map((item, i) => (
              <li key={i} className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span><span className="text-gray-700">{item}</span></li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Условия действия гарантии</h2>
          <ul className="space-y-3">
            {['Монтаж выполнен сертифицированными специалистами', 'Оборудование эксплуатировалось согласно инструкции', 'Регулярное техническое обслуживание (1–2 раза в год)', 'Сохранён гарантийный талон', 'Подключение к правильным параметрам водяного контура'].map((item, i) => (
              <li key={i} className="flex items-center gap-3"><span className="text-blue-500">•</span><span className="text-gray-700">{item}</span></li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Техническая поддержка 24/7</h2>
          <p className="text-gray-700 mb-4">Наши специалисты помогут с вопросами по настройке, эксплуатации и обслуживанию фанкойлов Shuft в любое время суток.</p>
          <div className="flex gap-4">
            <a href="tel:+74951203375" className="btn-primary">📞 +7 (495) 120-33-75</a>
            <a href="mailto:info@shuft.online" className="btn-secondary">info@shuft.online</a>
          </div>
        </div>
      </div>
    </div>
  )
}
