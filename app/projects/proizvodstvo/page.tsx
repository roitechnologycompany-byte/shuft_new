import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Климатизация производственных помещений | Проекты Shuft',
  description: 'Проекты монтажа промышленных систем охлаждения Shuft на производстве. Контроль температуры и влажности, взрывобезопасные исполнения.',
}

const projects = [
  {
    title: 'Производственный цех, Люберцы',
    area: '1 500 м²',
    type: 'Металлообработка',
    task: 'Охлаждение, контроль влажности 45–55%, вентиляция рабочих зон',
    solution: 'VRF Shuft + 6 внутренних блоков + 2 × канальных SFF-1400G50',
    result: 'T ±1°C, влажность 45–55%, снижение брака на 8%',
    cost: '2 100 000 ₽',
    date: 'Сентябрь 2025',
  },
  {
    title: 'Фармацевтический завод, Зеленоград',
    area: '3 200 м², чистые комнаты',
    type: 'Фармацевтика',
    task: 'Поддержание класса чистоты ISO 7, T = 20±1°C, RH = 50±5%',
    solution: '12 × канальных SFF-800G50 + HEPA-фильтрация + рекуператоры',
    result: 'Сертифицировано по GMP, стабильный микроклимат 24/7',
    cost: '5 800 000 ₽',
    date: 'Ноябрь 2025',
  },
  {
    title: 'Пищевое производство, Домодедово',
    area: '2 000 м²',
    type: 'Пищепром',
    task: 'Охлаждение цеха до +12°C при работе тепловыделяющего оборудования',
    solution: '4 чиллера Shuft SCH-060A + 14 × напольно-потолочных SFF-600',
    result: 'T +12°C в зоне производства, +20°C в административных помещениях',
    cost: '3 400 000 ₽',
    date: 'Январь 2026',
  },
  {
    title: 'Типография, Подольск',
    area: '900 м²',
    type: 'Полиграфия',
    task: 'Строгий контроль T и влажности для печатных машин',
    solution: '6 × SFF-500G50 (канальные) + осушители + система автоматики',
    result: 'T 21±0.5°C, RH 50±3% — снижение брака на 12%',
    cost: '1 100 000 ₽',
    date: 'Март 2026',
  },
]

export default function ProizvodstvoProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Проекты', href: '/projects' },
        { name: 'Производство' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Климатизация производственных помещений</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Промышленные системы охлаждения и климат-контроля для заводов, цехов и чистых комнат.
        Точное поддержание температуры и влажности по требованиям технологического процесса.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '35+', label: 'промышленных объектов' },
          { value: '±0.5°C', label: 'точность поддержания T' },
          { value: 'ISO 7', label: 'чистые комнаты' },
          { value: '8 760 ч', label: 'работа в году' },
        ].map((s, i) => (
          <div key={i} className="bg-orange-600 text-white rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-orange-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Особенности промышленных систем</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> Высокие тепловые нагрузки от оборудования — требуется мощность от 20 до 200 кВт</li>
          <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> Непрерывная работа 24/7 — повышенные требования к надёжности</li>
          <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> Контроль влажности — критично для металлообработки, пищепрома, фарм. производства</li>
          <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">✓</span> Интеграция в АСУ ТП — управление климатом из единой системы автоматики</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-orange-700 to-orange-900 text-white p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-orange-500 bg-opacity-50 text-xs px-3 py-1 rounded-full">{p.type}</span>
                <span className="text-orange-200 text-sm">{p.date}</span>
              </div>
              <h2 className="font-bold text-xl">{p.title}</h2>
              <p className="text-orange-200 text-sm mt-1">{p.area}</p>
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
                <span className="font-bold text-orange-600 text-lg">{p.cost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-orange-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Разработаем техническое решение для вашего производства</h2>
        <p className="text-orange-100 mb-6">Инженер-технолог выедет на объект и составит проект бесплатно</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-orange-700 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            Запросить КП
          </Link>
        </div>
      </div>
    </div>
  )
}
