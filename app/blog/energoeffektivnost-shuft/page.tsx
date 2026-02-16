import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Энергоэффективность фанкойлов Shuft — сколько они экономят | Shuft.Online',
  description: 'Расчёт потребления электроэнергии фанкойлами Shuft. Сравнение с кондиционерами. Реальная экономия в рублях за сезон. Примеры расчётов.',
  alternates: { canonical: 'https://shuft.online/blog/energoeffektivnost-shuft/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Энергоэффективность фанкойлов Shuft — сколько они экономят',
  description: 'Расчёт потребления электроэнергии фанкойлами Shuft. Сравнение с кондиционерами. Реальная экономия в рублях.',
  datePublished: '2025-12-25T10:00:00+03:00',
  dateModified: '2025-12-25T10:00:00+03:00',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online', logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://shuft.online/blog/energoeffektivnost-shuft/' },
}

export default function EnergoEffektivnostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Блог', href: '/blog' },
        { name: 'Энергоэффективность фанкойлов Shuft' },
      ]} />

      <div className="mb-8">
        <span className="inline-block bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Экономика</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Энергоэффективность фанкойлов Shuft — сколько они экономят</h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>25 декабря 2025</span>
          <span>•</span>
          <span>7 мин чтения</span>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
        <p className="text-gray-700">
          <strong>Главный вывод:</strong> Система чиллер-фанкойл Shuft потребляет на 25–40% меньше электроэнергии,
          чем аналогичное количество сплит-систем. Для офиса 500 м² экономия составит 150 000–250 000 ₽ в год.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Как работает экономия в системе чиллер-фанкойл</h2>
        <p className="text-gray-700 mb-4">
          В системе чиллер-фанкойл фанкойл — это просто вентилятор с теплообменником.
          Он потребляет 50–200 Вт (в зависимости от размера). Вся «тяжёлая» работа —
          охлаждение холодоносителя — выполняется одним чиллером с высоким КПД.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Потребление электроэнергии фанкойлов Shuft</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Модель</th>
                <th className="p-3 text-left">Мощность охл.</th>
                <th className="p-3 text-left">Эл. потребл.</th>
                <th className="p-3 text-left">Расход за сезон*</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['SFH-500 V3', '4.51 кВт', '65–130 Вт', '~50 кВт·ч'],
                ['SFH-800 V3', '7.24 кВт', '100–200 Вт', '~80 кВт·ч'],
                ['SFH-1200 V3', '11.0 кВт', '150–290 Вт', '~115 кВт·ч'],
                ['SFR-950F кассетный', '5.0 кВт', '75–150 Вт', '~60 кВт·ч'],
                ['SFR-1200F кассетный', '7.5 кВт', '100–200 Вт', '~80 кВт·ч'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, j) => (
                    <td key={j} className="p-3 border border-gray-200">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-500 text-xs mt-2">* Летний сезон охлаждения ~800 часов, средняя загрузка 50%</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Сравнение: фанкойл Shuft vs сплит-система</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-700 mb-3">✓ Система чиллер-фанкойл Shuft</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>→ Чиллер: EER 3.5–4.5 (кВт холода / кВт эл.)</li>
              <li>→ Фанкойл: 50–200 Вт электро</li>
              <li>→ Централизованное управление</li>
              <li>→ Один контур обслуживания</li>
              <li>→ Одна газовая заправка на всё здание</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-600 text-white rounded-xl text-center">
              <div className="text-2xl font-bold">25–40%</div>
              <div className="text-sm">экономия электроэнергии</div>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h3 className="font-bold text-gray-700 mb-3">○ Сплит-системы (аналогичная мощность)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>→ SEER 4–6 (только в идеальных условиях)</li>
              <li>→ Каждый блок 800–3000 Вт</li>
              <li>→ Раздельное управление каждым</li>
              <li>→ Отдельное обслуживание каждого</li>
              <li>→ Заправка каждого блока отдельно</li>
            </ul>
            <div className="mt-4 p-3 bg-gray-400 text-white rounded-xl text-center">
              <div className="text-2xl font-bold">+25–40%</div>
              <div className="text-sm">к счёту за электроэнергию</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Расчёт экономии для офиса 200 м²</h2>
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Исходные данные:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Площадь офиса: 200 м²</li>
                <li>• Потребность в холоде: ~20 кВт</li>
                <li>• Время работы в год: ~800 часов</li>
                <li>• Тариф электроэнергии: 7 ₽/кВт·ч</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Результат:</h3>
              <div className="space-y-2">
                {[
                  { label: 'Сплит-системы (5 шт.)', cost: '44 800 ₽/год', highlight: false },
                  { label: 'Чиллер-фанкойл Shuft', cost: '28 000 ₽/год', highlight: true },
                  { label: 'Экономия в год', cost: '16 800 ₽', highlight: true },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between p-3 rounded-lg ${item.highlight ? 'bg-green-100 text-green-800 font-semibold' : 'bg-white text-gray-700'}`}>
                    <span>{item.label}</span>
                    <span>{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Хотите точный расчёт для вашего объекта?</h3>
          <p className="text-gray-700 mb-4">Наши инженеры подготовят технико-экономическое обоснование бесплатно.</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+74951203375" className="btn-primary">📞 Позвонить инженеру</a>
            <Link href="/contacts#form" className="btn-secondary">Оставить заявку</Link>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t pt-8">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Читайте также</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/blog/chiller-fankoil-sistema', title: 'Как работает система чиллер-фанкойл' },
            { href: '/blog/shuft-vs-carrier-daikin', title: 'Shuft vs Carrier vs Daikin — что дешевле' },
            { href: '/calc/fankoil', title: 'Калькулятор подбора фанкойла' },
            { href: '/catalog/fankoily', title: 'Все фанкойлы Shuft — каталог' },
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
