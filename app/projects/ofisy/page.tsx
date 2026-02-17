import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Монтаж фанкойлов в офисах Москвы | Проекты Shuft',
  description: 'Реализованные проекты установки фанкойлов Shuft в офисах Москвы. Тихая работа, зональный климат-контроль, гарантия 3 года.',
  alternates: { canonical: 'https://shuft.online/projects/ofisy/' },
}

const projects = [
  {
    title: 'IT-компания, Петровка',
    area: '280 м², 3 этажа',
    employees: '28 человек',
    task: 'Охлаждение open-space и переговорных с минимальным шумом (≤22 дБА)',
    solution: '3 × SFH-800 V3 + 1 × SFF-400',
    result: 'T = 22–23°C, шум 22 дБА, монтаж за 2 дня',
    cost: '185 000 ₽',
    date: 'Ноябрь 2025',
  },
  {
    title: 'Бизнес-центр, Пресненская наб.',
    area: '1 200 м², 5 этажей',
    employees: '120 человек',
    task: 'Замена устаревшей VRV-системы, сокращение затрат на эл/энергию',
    solution: 'VRF Shuft + 18 внутренних блоков разных типов',
    result: 'Экономия электроэнергии 25%, ROI — 18 мес.',
    cost: '3 400 000 ₽',
    date: 'Июль 2025',
  },
  {
    title: 'Юридическая фирма, Садовое',
    area: '180 м², 1 этаж',
    employees: '15 человек',
    task: 'Скрытый монтаж, сохранение интерьера премиум-класса',
    solution: '2 × кассетных SFR-950F в подвесной потолок',
    result: 'Полностью скрытая система, управление с планшета',
    cost: '210 000 ₽',
    date: 'Март 2026',
  },
  {
    title: 'Коворкинг, м. Курская',
    area: '600 м², 2 зоны',
    employees: '80 рабочих мест',
    task: 'Разные температурные зоны: тихая зона и переговорные',
    solution: '4 × SFR-1200F + зонирование по контроллерам',
    result: 'Тихая зона 21°C, переговорные 20°C, экономия на отоплении',
    cost: '540 000 ₽',
    date: 'Январь 2026',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Проекты', item: 'https://shuft.online/projects/' },
    { '@type': 'ListItem', position: 3, name: 'Офисы', item: 'https://shuft.online/projects/ofisy/' },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Проекты монтажа фанкойлов в офисах Москвы',
  url: 'https://shuft.online/projects/ofisy/',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'IT-компания, Петровка — 3 × SFH-800 V3, 185 000 ₽' },
    { '@type': 'ListItem', position: 2, name: 'Бизнес-центр, Пресненская наб. — VRF Shuft + 18 блоков, 3 400 000 ₽' },
    { '@type': 'ListItem', position: 3, name: 'Юридическая фирма, Садовое — 2 × SFR-950F, 210 000 ₽' },
    { '@type': 'ListItem', position: 4, name: 'Коворкинг, м. Курская — 4 × SFR-1200F, 540 000 ₽' },
  ],
}

export default function OfisyProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Проекты', href: '/projects' },
        { name: 'Офисы' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Монтаж фанкойлов в офисах Москвы</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Специализируемся на климатизации офисных помещений: от небольших кабинетов до бизнес-центров.
        Тихая работа, зональный контроль температуры, скрытый монтаж.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '45+', label: 'офисных проектов' },
          { value: '22 дБА', label: 'минимальный шум' },
          { value: '2–5 дней', label: 'срок монтажа' },
          { value: '3 года', label: 'гарантия' },
        ].map((s, i) => (
          <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-blue-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Почему офисы выбирают фанкойлы Shuft</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> Уровень шума от 22 дБА — не мешает переговорам и звонкам</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> Зональное управление: разные температуры в open-space и переговорных</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> Кассетные модели полностью скрыты в подвесном потолке</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span> Интеграция с BMS и управление со смартфона</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-blue-500 bg-opacity-50 text-xs px-3 py-1 rounded-full">Офис</span>
                <span className="text-gray-300 text-sm">{p.date}</span>
              </div>
              <h2 className="font-bold text-xl">{p.title}</h2>
              <p className="text-blue-200 text-sm mt-1">{p.area} · {p.employees}</p>
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
                <span className="font-bold text-blue-600 text-lg">{p.cost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Рассчитайте стоимость для вашего офиса</h2>
        <p className="text-blue-100 mb-6">Инженер перезвонит в течение 15 минут и составит КП бесплатно</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить КП
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
