import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Возврат и обмен товара | Shuft.Online',
  description: 'Условия возврата и обмена климатической техники Shuft. 14 дней на возврат исправного товара, гарантийный обмен в течение 3 лет.',
  alternates: { canonical: 'https://shuft.online/returns/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Возврат и обмен', item: 'https://shuft.online/returns/' },
  ],
}

export default function ReturnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Возврат и обмен' },
      ]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Возврат и обмен товара</h1>
      <p className="text-gray-500 mb-8">Актуально на 2026 год</p>

      {/* Quick cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { icon: '📅', title: '14 дней', desc: 'Возврат исправного товара без объяснений' },
          { icon: '🔧', title: '3 года', desc: 'Гарантийный обмен при заводском браке' },
          { icon: '🚚', title: 'Бесплатно', desc: 'Самовывоз возврата со склада в Москве' },
        ].map((card, i) => (
          <div key={i} className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
            <div className="text-3xl mb-2">{card.icon}</div>
            <div className="font-bold text-xl text-blue-700">{card.title}</div>
            <div className="text-gray-600 text-sm mt-1">{card.desc}</div>
          </div>
        ))}
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Возврат исправного товара (14 дней)</h2>
          <p>
            В соответствии со статьёй 26.1 Закона РФ «О защите прав потребителей»
            Вы имеете право вернуть товар надлежащего качества в течение 14 дней с даты получения.
          </p>
          <div className="bg-gray-50 rounded-2xl p-5 mt-4">
            <div className="font-semibold text-gray-900 mb-2">Условия возврата исправного товара:</div>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-green-500">✓</span> Товар не был в употреблении и не имеет следов монтажа</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Сохранена оригинальная упаковка (допускаются следы вскрытия)</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Сохранены все комплектующие, документация, гарантийный талон</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Заявление на возврат подано в течение 14 дней с даты получения</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mt-4">
            <div className="font-semibold text-gray-900 mb-1">Обратите внимание</div>
            <div className="text-sm text-gray-700">
              Оборудование, которое уже было подключено к трубопроводу или электрике, считается
              бывшим в употреблении и не подлежит возврату по данному основанию.
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Гарантийный обмен (3 года)</h2>
          <p>
            При обнаружении заводского дефекта в течение гарантийного срока (36 месяцев) мы
            произведём бесплатный ремонт или замену оборудования.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 rounded-2xl p-5">
              <div className="font-semibold text-gray-900 mb-2">Гарантийный случай:</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Заводской дефект компрессора, двигателя</li>
                <li>• Неисправность платы управления</li>
                <li>• Течь теплообменника по вине производителя</li>
                <li>• Выход из строя при нормальной эксплуатации</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-5">
              <div className="font-semibold text-gray-900 mb-2">Не гарантийный случай:</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Механические повреждения</li>
                <li>• Нарушение правил монтажа</li>
                <li>• Попадание воды, посторонних предметов</li>
                <li>• Перепады напряжения без защиты</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Как оформить возврат или гарантийный ремонт</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Свяжитесь с нами', desc: 'Позвоните по номеру +7 (495) 120-33-75 или заполните форму на сайте. Объясните причину возврата/ремонта.' },
              { step: '2', title: 'Подготовьте документы', desc: 'Товарная накладная / чек, гарантийный талон, паспорт покупателя (для физических лиц).' },
              { step: '3', title: 'Привезите товар на склад', desc: 'Адрес: г. Москва, ул. Павловская, д. 18, стр. 2. Пн–Пт 9:00–18:00. Возможна курьерская доставка за ваш счёт.' },
              { step: '4', title: 'Получите деньги или замену', desc: 'Возврат денег — в течение 10 рабочих дней. Замена товара или ремонт — по согласованным срокам.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-gray-600 text-sm mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Сроки возврата денежных средств</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200">Способ оплаты</th>
                  <th className="text-left p-3 border border-gray-200">Срок возврата</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: 'Банковский перевод (юр. лицо)', term: '10 рабочих дней' },
                  { method: 'Банковская карта физ. лица', term: '10 рабочих дней (зависит от банка)' },
                  { method: 'Наличными при самовывозе', term: 'В день обращения' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-3 border border-gray-200 text-gray-700">{row.method}</td>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center mt-10">
        <h2 className="text-2xl font-bold mb-3">Нужна помощь с возвратом?</h2>
        <p className="text-blue-100 mb-6">Звоните — менеджер ответит на все вопросы</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Написать нам
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
