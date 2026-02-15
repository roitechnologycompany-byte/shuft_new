import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Климат-контроль в ресторанах и кафе Москвы | Проекты Shuft',
  description: 'Проекты монтажа бесшумных фанкойлов Shuft в ресторанах и кафе Москвы. Раздельные зоны кухни и зала, скрытый монтаж.',
  alternates: { canonical: 'https://shuft.online/projects/restorany-i-cafe/' },
}

const projects = [
  {
    title: 'Ресторан на Тверской',
    area: '350 м²',
    seats: '80 посадочных мест',
    task: 'Климат-контроль зала и кухни. Требования к шуму: ≤24 дБА в зале.',
    solution: '4 × кассетных SFR-950F + отдельная система для кухни',
    result: 'Зал 22°C / кухня 18°C, шум в зале 23 дБА',
    cost: '485 000 ₽',
    date: 'Август 2025',
  },
  {
    title: 'Кофейня, м. Арбатская',
    area: '120 м²',
    seats: '45 посадочных мест',
    task: 'Минималистичный интерьер — никаких видимых элементов HVAC',
    solution: '2 × кассетных SFR-950F в подвесной потолок',
    result: 'Климат скрыт полностью, T 21°C, управление с iPad',
    cost: '185 000 ₽',
    date: 'Октябрь 2025',
  },
  {
    title: 'Банкетный зал, Замоскворечье',
    area: '600 м², 3 зала',
    seats: '220 посадочных мест',
    task: 'Независимый климат-контроль в каждом зале + кухня + пищевой склад',
    solution: '6 × SFR-1200F + 2 × канальных SFF-800G50 + чиллер SCH-020W',
    result: 'Каждый зал — независимая зона, T от +8°C (склад) до +22°C (зал)',
    cost: '940 000 ₽',
    date: 'Декабрь 2025',
  },
  {
    title: 'Фуд-корт в ТЦ',
    area: '1 800 м², 12 арендаторов',
    seats: '400 посадочных мест',
    task: 'Единая система для зоны питания с зонированием по арендаторам',
    solution: '10 × SFR-1500F + централизованный чиллер + система учёта',
    result: 'Каждый арендатор платит за своё потребление, T +21°C',
    cost: '2 200 000 ₽',
    date: 'Февраль 2026',
  },
]

export default function RestoranyCafeProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Проекты', href: '/projects' },
        { name: 'Рестораны и кафе' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Климат-контроль в ресторанах и кафе Москвы</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Кассетные фанкойлы Shuft — идеальное решение для HoReCa: скрытый монтаж,
        бесшумная работа, раздельные зоны кухни и зала.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '40+', label: 'объектов HoReCa' },
          { value: '23 дБА', label: 'шум в зале' },
          { value: '100%', label: 'скрытый монтаж' },
          { value: '3 зоны', label: 'зал / кухня / склад' },
        ].map((s, i) => (
          <div key={i} className="bg-red-600 text-white rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-red-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Требования ресторанного климата</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✓</span> Уровень шума ≤24 дБА — гости не слышат систему кондиционирования</li>
          <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✓</span> Раздельные зоны: зал +22°C, кухня +18°C, холодильный склад +4°C</li>
          <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✓</span> Кассетные модели не нарушают дизайн-концепцию интерьера</li>
          <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✓</span> Монтаж в нерабочее время — ресторан не закрывается</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-red-700 to-red-900 text-white p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-red-500 bg-opacity-50 text-xs px-3 py-1 rounded-full">HoReCa</span>
                <span className="text-red-200 text-sm">{p.date}</span>
              </div>
              <h2 className="font-bold text-xl">{p.title}</h2>
              <p className="text-red-200 text-sm mt-1">{p.area} · {p.seats}</p>
            </div>
            <div className="p-6 space-y-3">
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
                <span className="font-bold text-red-600 text-lg">{p.cost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Расчёт для вашего ресторана</h2>
        <p className="text-red-100 mb-6">Учтём нагрузку от кухонного оборудования и требования к шуму</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-red-700 font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить расчёт
          </Link>
        </div>
      </div>
    </div>
  )
}
