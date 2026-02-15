import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'История бренда Shuft — от датского стартапа до лидера в России | Shuft.Online',
  description: 'Как бренд Shuft прошёл путь от основания в Дании в 1994 году до полной локализации производства в России. История, технологии, достижения.',
  alternates: { canonical: 'https://shuft.online/blog/istoriya-brenda-shuft/' },
}

const timeline = [
  { year: '1994', title: 'Основание в Дании', desc: 'Бренд Shuft основан командой датских инженеров. Первые продукты — канальные вентиляторы для скандинавского рынка.' },
  { year: '2000-е', title: 'Выход на европейский рынок', desc: 'Расширение линейки: появляются фанкойлы, приточно-вытяжные установки. Продажи в 15+ странах Европы.' },
  { year: '2010', title: 'Приход в Россию', desc: 'Первые поставки Shuft на российский рынок. Быстро завоёвывает популярность у проектировщиков HVAC.' },
  { year: '2014', title: 'Локализация производства', desc: 'Открытие завода в Московской области. Снижение цен при сохранении европейского качества.' },
  { year: '2018', title: 'Расширение модельного ряда', desc: 'Запуск VRF-систем Shuft, новые серии SFH V2, SFR, SFF для разных типов объектов.' },
  { year: '2022–2026', title: 'Лидерство на российском рынке', desc: 'На фоне ухода зарубежных брендов Shuft занимает топовые позиции. Запуск серии SFH V3.' },
]

export default function IstoriyaBrendaShuftPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Блог', href: '/blog' }, { name: 'История бренда Shuft' }]} />
      <div className="mb-6"><span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">О бренде</span><span className="text-gray-400 text-sm ml-3">5 января 2026 • 6 мин чтения</span></div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">История бренда Shuft: от Дании до России</h1>
      <p className="text-xl text-gray-600 mb-10">Shuft прошёл путь от небольшой датской компании до одного из ведущих производителей климатической техники в России.</p>
      <div className="relative pl-8 space-y-8 mb-12 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-200">
        {timeline.map((event, i) => (
          <div key={i} className="relative">
            <div className="absolute left-[-26px] w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="text-blue-600 font-bold text-lg mb-1">{event.year}</div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Shuft сегодня</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[['30+', 'лет на рынке'], ['5 000+', 'объектов в России'], ['100+', 'моделей'], ['24/7', 'техподдержка']].map(([val, lbl], i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm"><div className="text-2xl font-bold text-blue-600">{val}</div><div className="text-gray-500 text-sm mt-1">{lbl}</div></div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/catalog/fankoily" className="btn-primary">Смотреть каталог Shuft</Link>
        <Link href="/about/o-brende-shuft" className="btn-secondary">О бренде подробнее →</Link>
      </div>
    </div>
  )
}
