import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Реализованные проекты Shuft в Москве | Shuft.Online',
  description: 'Более 150 реализованных проектов монтажа фанкойлов, чиллеров и VRF-систем Shuft в Москве. Офисы, ТЦ, рестораны, производство.',
  alternates: { canonical: 'https://shuft.online/projects/' },
}

const projects = [
  {
    title: 'Офис IT-компании',
    type: 'Офис',
    address: 'ул. Петровка, бизнес-центр',
    area: '280 м², 3 этажа',
    task: 'Охлаждение офиса на 28 человек с минимальным уровнем шума',
    solution: '3 × настенных SFH-800 V3 + 1 × SFF-400 напольно-потолочный',
    result: 'Температура 22–23°C, уровень шума 22 дБА, монтаж за 2 дня',
    cost: '185 000 ₽',
    date: 'Ноябрь 2025',
  },
  {
    title: 'Торговый центр',
    type: 'ТЦ',
    address: 'пр. Комсомольский',
    area: '4 000 м²',
    task: 'Охлаждение торговых павильонов и ресторанной зоны',
    solution: '12 × кассетных SFR-1200F + 4 чиллера Shuft',
    result: 'Равномерная температура по всей площади, экономия э/э 15%',
    cost: '1 250 000 ₽',
    date: 'Октябрь 2025',
  },
  {
    title: 'Производственный цех',
    type: 'Производство',
    address: 'Люберецкий район МО',
    area: '1 500 м²',
    task: 'Охлаждение, контроль влажности, вентиляция',
    solution: 'VRF-система Shuft + 6 внутренних блоков + 2 канальных фанкойла',
    result: 'Температурная стабилизация ±1°C, влажность 45–55%',
    cost: '2 100 000 ₽',
    date: 'Сентябрь 2025',
  },
  {
    title: 'Ресторан в центре',
    type: 'Ресторан',
    address: 'ул. Тверская',
    area: '350 м²',
    task: 'Климат-контроль для кухни и зала. Требования к уровню шума.',
    solution: '4 × кассетных SFR-950F + отдельная система для кухни',
    result: 'Разные температурные зоны: зал 22°C, кухня 18°C',
    cost: '485 000 ₽',
    date: 'Август 2025',
  },
  {
    title: 'Бизнес-центр',
    type: 'Офис',
    address: 'Пресненская набережная',
    area: '1 200 м², 5 этажей',
    task: 'Замена устаревшей системы кондиционирования',
    solution: 'VRF Shuft + 18 внутренних блоков разных типов',
    result: 'Энергосбережение 25% по сравнению со старой системой',
    cost: '3 400 000 ₽',
    date: 'Июль 2025',
  },
  {
    title: 'Складской комплекс',
    type: 'Склад',
    address: 'Домодедовский район МО',
    area: '5 000 м²',
    task: 'Охлаждение складских помещений с регулируемой температурой',
    solution: '8 × канальных фанкойлов + 2 чиллера Shuft',
    result: 'Поддержание температуры +5°C...+15°C для хранения продукции',
    cost: '1 800 000 ₽',
    date: 'Июнь 2025',
  },
]

const typeColors: Record<string, string> = {
  'Офис': 'bg-blue-100 text-blue-700',
  'ТЦ': 'bg-purple-100 text-purple-700',
  'Производство': 'bg-orange-100 text-orange-700',
  'Ресторан': 'bg-red-100 text-red-700',
  'Склад': 'bg-green-100 text-green-700',
}

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Проекты' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Реализованные проекты Shuft в Москве</h1>
      <p className="text-gray-600 text-lg mb-10">
        Более 150 успешных проектов в офисах, торговых центрах, ресторанах, производственных 
        помещениях и складах Москвы и МО.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '150+', label: 'проектов' },
          { value: '8 лет', label: 'опыта' },
          { value: '500+', label: 'клиентов' },
          { value: '100%', label: 'гарантия' },
        ].map((s, i) => (
          <div key={i} className="bg-blue-600 text-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-blue-200 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[p.type] || 'bg-gray-100 text-gray-700'}`}>
                  {p.type}
                </span>
                <span className="text-gray-400 text-sm">{p.date}</span>
              </div>
              <h2 className="font-bold text-xl mb-1">{p.title}</h2>
              <p className="text-gray-400 text-sm">{p.address} • {p.area}</p>
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
              <div className="border-t pt-3 flex items-center justify-between">
                <div className="text-sm text-gray-500">Стоимость проекта</div>
                <div className="font-bold text-blue-600 text-lg">{p.cost}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Хотите реализовать похожий проект?</h2>
        <p className="text-blue-100 mb-6">Оставьте заявку — инженер перезвонит в течение 15 минут</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            📞 +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Оставить заявку
          </Link>
        </div>
      </div>
    </div>
  )
}
