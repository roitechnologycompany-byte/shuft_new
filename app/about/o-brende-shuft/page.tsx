import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'О бренде Shuft — история от Дании до России | Shuft.Online',
  description: 'История бренда Shuft: основан в Дании в 1994 году, сейчас производство полностью в России. Технологии, качество, линейки продуктов.',
}

export default function OBrendeShuftPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'О компании', href: '/about' },
        { name: 'О бренде Shuft' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">О бренде Shuft — история и технологии</h1>

      <div className="space-y-10 text-gray-700">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[['1994', 'Год основания'], ['Дания', 'Страна происхождения'], ['Россия', 'Производство'], ['ISO', 'Стандарт качества']].map(([val, lbl], i) => (
              <div key={i}><div className="text-3xl font-bold">{val}</div><div className="text-blue-200 text-sm mt-1">{lbl}</div></div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">История бренда Shuft</h2>
          <p className="mb-4">Бренд Shuft был основан в Дании в 1994 году командой инженеров, специализирующихся на системах вентиляции и климат-контроля. С самого начала компания сделала ставку на высокое качество производства и инновационные конструктивные решения.</p>
          <p className="mb-4">В 2000-е годы Shuft вышел на европейский рынок и завоевал репутацию надёжного поставщика климатического оборудования для коммерческих объектов. В эти годы были разработаны основные продуктовые линейки: настенные, кассетные и канальные фанкойлы.</p>
          <p>В 2010-е годы бренд Shuft пришёл на российский рынок и стремительно завоевал популярность. Производство было перенесено в Россию (Московская область), что позволило значительно снизить стоимость продукции при сохранении европейского уровня качества.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Линейки продуктов Shuft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Фанкойлы SFH', desc: 'Настенные фанкойлы. Самая популярная серия для офисов, кафе и квартир.' },
              { name: 'Фанкойлы SFR', desc: 'Кассетные фанкойлы для встройки в подвесной потолок.' },
              { name: 'Фанкойлы SFF', desc: 'Канальные и напольно-потолочные для скрытого монтажа.' },
              { name: 'Чиллеры SCH', desc: 'Воздушные и водяные чиллеры для систем центрального охлаждения.' },
            ].map((line, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4">
                <div className="font-bold text-gray-900 mb-1">{line.name}</div>
                <div className="text-gray-600 text-sm">{line.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Почему Shuft выбирают в России?</h2>
          <ul className="space-y-2">
            {['Производство в России — быстрая доставка и доступные цены', 'Европейские технологии и стандарты качества', 'Русскоязычные инструкции и техподдержка', 'Запчасти всегда в наличии на складах по России', 'Дешевле европейских аналогов на 30–40%'].map((item, i) => (
              <li key={i} className="flex items-center gap-2"><span className="text-green-500">✓</span><span className="text-gray-700">{item}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <Link href="/catalog/fankoily" className="btn-primary">Смотреть каталог Shuft</Link>
        <Link href="/blog/istoriya-brenda-shuft" className="btn-secondary">Полная история бренда →</Link>
      </div>
    </div>
  )
}
