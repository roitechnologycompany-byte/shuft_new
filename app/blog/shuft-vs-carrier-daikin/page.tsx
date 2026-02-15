import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Shuft vs Carrier vs Daikin — какой фанкойл выбрать в 2026 | Shuft.Online',
  description: 'Подробное сравнение фанкойлов Shuft, Carrier и Daikin по цене, качеству, энергоэффективности и обслуживанию в России. Гайд 2026.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shuft vs Carrier vs Daikin — какой фанкойл выбрать в 2026',
  datePublished: '2026-01-10T10:00:00Z',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online', logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' } },
}

const comparison = [
  { param: 'Цена (настенный, ~5 кВт)', shuft: '56 960 ₽', carrier: '89 000 ₽', daikin: '95 000 ₽', winner: 'shuft' },
  { param: 'Гарантия', shuft: '3 года', carrier: '2 года', daikin: '2 года', winner: 'shuft' },
  { param: 'Производство', shuft: 'Россия', carrier: 'США/Китай', daikin: 'Япония', winner: 'none' },
  { param: 'Уровень шума', shuft: '19–26 дБА', carrier: '22–30 дБА', daikin: '20–28 дБА', winner: 'shuft' },
  { param: 'Запчасти в РФ', shuft: 'Всегда в наличии', carrier: 'Ограничено', daikin: 'Ограничено', winner: 'shuft' },
  { param: 'Техподдержка', shuft: '24/7 на русском', carrier: 'В раб. часы', daikin: 'В раб. часы', winner: 'shuft' },
  { param: 'Стоимость ТО', shuft: '2 500–4 000 ₽', carrier: '5 000–8 000 ₽', daikin: '5 000–9 000 ₽', winner: 'shuft' },
  { param: 'Бренд-история', shuft: 'с 1994', carrier: 'с 1915', daikin: 'с 1924', winner: 'none' },
]

export default function ShufftVsCarrierDaikinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Блог', href: '/blog' }, { name: 'Shuft vs Carrier vs Daikin' }]} />
        <div className="mb-6">
          <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Сравнения</span>
          <span className="text-gray-400 text-sm ml-3">10 января 2026 • 10 мин чтения</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Shuft vs Carrier vs Daikin — какой фанкойл выбрать в 2026</h1>
        <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"><span className="text-blue-600 font-bold">И</span></div>
          <div><div className="font-medium text-gray-900">Иван Петров</div><div className="text-gray-500 text-sm">Главный инженер, 12 лет в HVAC</div></div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-xl text-gray-600 font-medium">
            Три главных вопроса при выборе фанкойла: цена, надёжность и доступность сервиса в России.
            Разберём честно, чем Shuft лучше или хуже Carrier и Daikin.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Сравнительная таблица: Shuft vs Carrier vs Daikin</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 text-left">Параметр</th>
                  <th className="p-3 text-center bg-blue-700">Shuft</th>
                  <th className="p-3 text-center">Carrier</th>
                  <th className="p-3 text-center">Daikin</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-gray-700 border-b border-gray-100">{row.param}</td>
                    <td className={`p-3 text-center border-b border-gray-100 ${row.winner === 'shuft' ? 'bg-green-50 text-green-800 font-bold' : 'text-gray-700'}`}>
                      {row.winner === 'shuft' && <span className="mr-1">🏆</span>}{row.shuft}
                    </td>
                    <td className="p-3 text-center border-b border-gray-100 text-gray-700">{row.carrier}</td>
                    <td className="p-3 text-center border-b border-gray-100 text-gray-700">{row.daikin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">1. Цена — Shuft выигрывает</h2>
          <p>Настенный фанкойл Shuft SFH-500 V3 стоит 56 960 ₽. Аналогичный Carrier — около 89 000 ₽, Daikin — от 95 000 ₽. Разница составляет 30–40%. При закупке нескольких фанкойлов для офиса или ТЦ это тысячи рублей экономии.</p>
          <div className="bg-blue-50 rounded-xl p-6">
            <p className="font-bold text-gray-900 mb-2">Пример: офис 300 м² (6 фанкойлов)</p>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              {[['Shuft', '341 760 ₽', 'text-blue-700'], ['Carrier', '534 000 ₽', 'text-gray-700'], ['Daikin', '570 000 ₽', 'text-gray-700']].map(([brand, price, color], i) => (
                <div key={i} className="bg-white rounded-lg p-3"><div className={`font-bold text-lg ${color}`}>{price}</div><div className="text-gray-500">{brand}</div></div>
              ))}
            </div>
            <p className="text-center text-green-700 font-medium mt-3">Экономия с Shuft: 190 000–230 000 ₽</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">2. Надёжность и качество</h2>
          <p>Carrier и Daikin — признанные мировые бренды с историей 100+ лет. Shuft моложе (с 1994), но производство в России по европейским стандартам обеспечивает стабильное качество. По статистике наших клиентов за 8 лет, уровень отказов у Shuft сопоставим с иностранными аналогами.</p>

          <h2 className="text-2xl font-bold text-gray-900">3. Сервис и запчасти в России</h2>
          <p>После 2022 года поставки Carrier и Daikin в Россию существенно ограничены. Запчасти — через параллельный импорт, сроки 2–8 недель. У Shuft производство в России, запчасти всегда есть на складе, замена в течение 1–3 дней.</p>

          <h2 className="text-2xl font-bold text-gray-900">Итог: кому что выбирать</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { brand: 'Shuft', for: 'Большинству российских покупателей', pros: 'Доступная цена, быстрый сервис, гарантия 3 года, русская техподдержка', color: 'border-blue-500 bg-blue-50' },
              { brand: 'Carrier', for: 'Международным компаниям', pros: 'Мировая репутация, совместимость с иностранными стандартами', color: 'border-gray-300' },
              { brand: 'Daikin', for: 'Проектам с японскими инвестициями', pros: 'Очень высокое качество, японская надёжность', color: 'border-gray-300' },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border-2 p-4 ${item.color}`}>
                <div className="font-bold text-gray-900 mb-1">{item.brand}</div>
                <div className="text-blue-600 text-sm mb-2">Лучше для: {item.for}</div>
                <div className="text-gray-600 text-sm">{item.pros}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Купить фанкойл Shuft в Москве</h2>
          <p className="text-blue-100 mb-6">Официальный дилер. Гарантия 3 года. Монтаж за 1–3 дня.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/catalog/fankoily" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl">Смотреть каталог</Link>
            <a href="tel:+74951203375" className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl">📞 Позвонить</a>
          </div>
        </div>
      </div>
    </>
  )
}
