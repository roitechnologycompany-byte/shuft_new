import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Климатизация торговых центров Москвы | Проекты Shuft',
  description: 'Проекты монтажа фанкойлов и чиллеров Shuft в торговых центрах Москвы. Кассетные модели, центральная система, экономия до 20%.',
  alternates: { canonical: 'https://shuft.online/projects/torgovye-centry/' },
}

const projects = [
  {
    title: 'ТЦ «Комсомольский»',
    area: '4 000 м²',
    zones: 'Торговые павильоны, ресторанная зона, парковка',
    task: 'Централизованное охлаждение всей площади ТЦ',
    solution: '12 × кассетных SFR-1200F + 4 чиллера Shuft SCH-040A',
    result: 'Равномерная T по всей площади, экономия э/э 15%',
    cost: '1 250 000 ₽',
    date: 'Октябрь 2025',
  },
  {
    title: 'Торговый павильон, Садовод',
    area: '800 м², 2 этажа',
    zones: 'Торговый зал, склад, офис арендатора',
    task: 'Разделение климатических зон, экономичное решение',
    solution: '6 × SFR-950F + 1 чиллер Shuft SCH-020W',
    result: 'Снижение эксплуатационных расходов на 18%, окупаемость 2 года',
    cost: '480 000 ₽',
    date: 'Август 2025',
  },
  {
    title: 'Фудхолл, Красный Октябрь',
    area: '1 200 м²',
    zones: 'Ресторанная зона, кухни, административные помещения',
    task: 'Климат-контроль с учётом выделения тепла от кухонного оборудования',
    solution: '8 × SFR-1500F + мощная вытяжная вентиляция',
    result: 'T зала 22°C при интенсивной работе кухни',
    cost: '920 000 ₽',
    date: 'Апрель 2026',
  },
  {
    title: 'Гипермаркет, МКАД',
    area: '8 000 м²',
    zones: 'Торговый зал, зона касс, служебные помещения',
    task: 'Замена старой системы кондиционирования без закрытия магазина',
    solution: '20 × канальных SFF-1400G50 + система рекуперации тепла',
    result: 'Монтаж за 5 ночей без остановки торговли, экономия 22%',
    cost: '4 100 000 ₽',
    date: 'Февраль 2026',
  },
]

export default function TorgovyeCentryProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Проекты', href: '/projects' },
        { name: 'Торговые центры' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Климатизация торговых центров Москвы</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Системы чиллер-фанкойл Shuft для ТЦ и торговых павильонов: централизованное управление,
        зонирование, монтаж без остановки торговли.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '30+', label: 'проектов в ТЦ' },
          { value: '8 000 м²', label: 'макс. площадь' },
          { value: '20%', label: 'экономия э/э' },
          { value: '24/7', label: 'сервисная поддержка' },
        ].map((s, i) => (
          <div key={i} className="bg-purple-600 text-white rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-purple-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Особенности климатизации торговых объектов</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">✓</span> Большие открытые пространства — только кассетные или канальные фанкойлы</li>
          <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">✓</span> Высокие тепловые нагрузки от посетителей и оборудования</li>
          <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">✓</span> Монтаж в нерабочее время — не мешает торговле</li>
          <li className="flex items-start gap-2"><span className="text-purple-500 mt-1">✓</span> Диспетчеризация и дистанционный мониторинг всей системы</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-purple-700 to-purple-900 text-white p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-purple-500 bg-opacity-50 text-xs px-3 py-1 rounded-full">ТЦ</span>
                <span className="text-gray-300 text-sm">{p.date}</span>
              </div>
              <h2 className="font-bold text-xl">{p.title}</h2>
              <p className="text-purple-200 text-sm mt-1">{p.area}</p>
            </div>
            <div className="p-6 space-y-3">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Зоны</div>
                <div className="text-gray-700 text-sm">{p.zones}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Задача</div>
                <div className="text-gray-700 text-sm">{p.task}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Решение</div>
                <div className="text-gray-700 text-sm">{p.solution}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Результат</div>
                <div className="text-gray-700 text-sm">{p.result}</div>
              </div>
              <div className="border-t pt-3 flex justify-between items-center">
                <span className="text-sm text-gray-500">Стоимость</span>
                <span className="font-bold text-purple-600 text-lg">{p.cost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-purple-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Обсудим ваш объект</h2>
        <p className="text-purple-100 mb-6">Выезд инженера для обследования — бесплатно</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-purple-700 font-bold px-8 py-3 rounded-xl hover:bg-purple-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Оставить заявку
          </Link>
        </div>
      </div>
    </div>
  )
}
