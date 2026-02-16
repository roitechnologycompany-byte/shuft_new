import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'VRF-системы Shuft: что это и когда они нужны | Shuft.Online',
  description: 'Что такое VRF-система Shuft, отличие от чиллер-фанкойла, для каких объектов подходит. Модельный ряд VRF Shuft, стоимость и сравнение.',
  alternates: { canonical: 'https://shuft.online/blog/vrf-sistema-chto-eto/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'VRF-системы Shuft: что это и когда они нужны',
  description: 'Что такое VRF-система Shuft, отличие от чиллер-фанкойла, для каких объектов подходит. Модельный ряд VRF Shuft.',
  datePublished: '2025-12-15T10:00:00+03:00',
  dateModified: '2025-12-15T10:00:00+03:00',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online', logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://shuft.online/blog/vrf-sistema-chto-eto/' },
}

export default function VrfSistemaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Блог', href: '/blog' },
        { name: 'VRF-системы Shuft: что это' },
      ]} />

      <div className="mb-8">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Технологии</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">VRF-системы Shuft: что это и когда они нужны</h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>15 декабря 2025</span>
          <span>•</span>
          <span>8 мин чтения</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <p className="text-gray-700">
          <strong>VRF (Variable Refrigerant Flow)</strong> — система с переменным расходом хладагента.
          Один внешний блок обслуживает от 2 до 64 внутренних блоков. Хладагент (фреон R32) течёт
          напрямую к каждому внутреннему блоку, без промежуточного контура воды.
        </p>
      </div>

      <article>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Принцип работы VRF Shuft</h2>
        <div className="space-y-4 mb-8">
          {[
            { step: '1', title: 'Внешний блок компрессирует хладагент', desc: 'Мощный инверторный компрессор регулирует производительность от 15 до 100%. Фреон R32 охлаждается в конденсаторе.' },
            { step: '2', title: 'Хладагент распределяется по внутренним блокам', desc: 'По медным трубам (до 150 м длиной) фреон поступает к каждому внутреннему блоку. Электронные расширительные вентили дозируют подачу.' },
            { step: '3', title: 'Каждый внутренний блок работает независимо', desc: 'Кассетный, канальный или настенный внутренний блок охлаждает или обогревает своё помещение.' },
            { step: '4', title: 'Система адаптируется под нагрузку', desc: 'Если включены только 3 из 10 блоков, компрессор снижает мощность и экономит до 40% электроэнергии.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
              <div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-gray-600 text-sm mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">VRF vs Чиллер-фанкойл: детальное сравнение</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Параметр</th>
                <th className="p-3 text-left">VRF Shuft</th>
                <th className="p-3 text-left">Чиллер-фанкойл Shuft</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Хладагент', 'R32 (фреон)', 'Вода'],
                ['Макс. длина трасс', '150 м (фреон)', 'Без ограничений (вода)'],
                ['Кол-во внутренних блоков', 'До 64 шт.', 'Сотни'],
                ['Стоимость монтажа', 'Ниже', 'Выше'],
                ['Энергоэффективность', 'SEER до 7', 'EER чиллера 3.5–4.5'],
                ['Для объектов площадью', 'До 3 000 м²', 'От 500 м² и более'],
                ['Рекуперация тепла', 'Да (модели HR)', 'Требует отдельного контура'],
                ['Утечка хладагента', 'Возможна', 'Нет (вода не опасна)'],
                ['Пуско-наладка', 'Сложнее', 'Проще'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, j) => (
                    <td key={j} className="p-3 border border-gray-200">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Когда выбрать VRF Shuft</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { title: 'Офисные здания 500–3000 м²', desc: 'VRF оптимален для многозональных офисов, где у каждого арендатора свой климат-контроль.' },
            { title: 'Гостиницы и апарт-отели', desc: 'До 64 номеров на один внешний блок. Каждый гость управляет своей температурой.' },
            { title: 'Торговые центры (средние)', desc: 'Для ТЦ до 3000 м² VRF дешевле в монтаже, чем чиллер с насосной станцией.' },
            { title: 'Бизнес-центры класса B', desc: 'Экономия на монтаже по сравнению с чиллером. Высокая энергоэффективность.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-white border border-gray-100 rounded-xl">
              <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
              <div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Модельный ряд VRF Shuft</h2>
        <div className="space-y-3 mb-8">
          {[
            { name: 'Shuft VRF Серия V', power: '8–56 кВт', blocks: 'до 16 внутренних блоков', price: 'от 280 000 ₽' },
            { name: 'Shuft VRF Серия V+', power: '22–130 кВт', blocks: 'до 40 внутренних блоков', price: 'от 520 000 ₽' },
            { name: 'Shuft VRF HR (рекуперация)', power: '22–130 кВт', blocks: 'до 64 внутренних блоков', price: 'от 680 000 ₽' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <div className="font-semibold text-gray-900">{item.name}</div>
                <div className="text-gray-500 text-sm">{item.power} | {item.blocks}</div>
              </div>
              <div className="text-blue-600 font-bold">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Проектирование VRF-системы Shuft</h3>
          <p className="text-gray-700 mb-4">
            Наши инженеры разработают проект VRF-системы с подбором оборудования и гидравлическим расчётом.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/proektirovanie-vrf" className="btn-primary">Проектирование VRF</Link>
            <a href="tel:+74951203375" className="btn-secondary">📞 +7 (495) 120-33-75</a>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t pt-8">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Читайте также</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/blog/chiller-fankoil-sistema', title: 'Система чиллер-фанкойл: как это работает' },
            { href: '/catalog/vrf-sistemy', title: 'VRF-системы Shuft — каталог' },
            { href: '/services/proektirovanie-vrf', title: 'Проектирование VRF-систем' },
            { href: '/blog/energoeffektivnost-shuft', title: 'Энергоэффективность фанкойлов Shuft' },
          ].map((link, i) => (
            <Link key={i} href={link.href} className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600 font-medium text-sm">
              → {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
