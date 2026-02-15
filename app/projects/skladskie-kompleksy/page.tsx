import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Климатизация складских комплексов Москвы | Проекты Shuft',
  description: 'Проекты монтажа промышленных систем охлаждения Shuft на складах Москвы и МО. Поддержание температурного режима хранения.',
  alternates: { canonical: 'https://shuft.online/projects/skladskie-kompleksy/' },
}

const projects = [
  {
    title: 'Складской комплекс, Домодедово',
    area: '5 000 м²',
    type: 'Продуктовый склад',
    task: 'Поддержание T +5...+15°C для хранения продовольствия',
    solution: '8 × канальных SFF-1400G50 + 2 чиллера Shuft SCH-060A',
    result: 'T +5...+15°C в любую погоду, потери продукции снизились на 30%',
    cost: '1 800 000 ₽',
    date: 'Июнь 2025',
  },
  {
    title: 'Фармацевтический склад, Химки',
    area: '2 200 м²',
    type: 'Фармхранилище',
    task: 'Хранение медикаментов: T +15...+25°C, RH 40–60%, мониторинг 24/7',
    solution: '6 × SFF-800G50 + прецизионные кондиционеры + система мониторинга',
    result: 'Соответствие требованиям GDP, сертификация пройдена',
    cost: '3 200 000 ₽',
    date: 'Сентябрь 2025',
  },
  {
    title: 'Тёмный магазин, Бутово',
    area: '1 200 м²',
    type: 'Даркстор',
    task: 'Зонирование: +4°C (заморозка), +6°C (охлаждение), +18°C (сухие товары)',
    solution: 'Три независимые системы фанкойлов + отдельные чиллеры для каждой зоны',
    result: '3 температурные зоны, автоматическое переключение по расписанию',
    cost: '2 800 000 ₽',
    date: 'Ноябрь 2025',
  },
  {
    title: 'Логистический центр, МКАД',
    area: '12 000 м²',
    type: 'Логистика',
    task: 'Охлаждение зоны сортировки при высоких тепловыделениях от конвейеров',
    solution: '16 × SFF-1400G50 + централизованный чиллер + рекуперация тепла',
    result: 'T +18°C при работе конвейеров, утилизация тепла для обогрева офиса',
    cost: '6 500 000 ₽',
    date: 'Январь 2026',
  },
]

export default function SkladskieKompleksyProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Проекты', href: '/projects' },
        { name: 'Складские комплексы' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Климатизация складских комплексов</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Промышленные системы охлаждения Shuft для складов и логистических центров:
        поддержание заданного температурного режима хранения 24/7.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '25+', label: 'складских проектов' },
          { value: '12 000 м²', label: 'макс. площадь' },
          { value: '+4°C…+25°C', label: 'диапазон температур' },
          { value: '99.9%', label: 'uptime системы' },
        ].map((s, i) => (
          <div key={i} className="bg-green-600 text-white rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-green-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Специфика складского климата</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Большие объёмы — высота потолков 8–12 м, канальные фанкойлы обеспечивают равномерность</li>
          <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Непрерывная работа 24/7 — резервирование оборудования</li>
          <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Зонирование по температурным режимам хранения</li>
          <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Мониторинг и сигнализация при выходе T за допустимые пределы</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-green-700 to-green-900 text-white p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-green-500 bg-opacity-50 text-xs px-3 py-1 rounded-full">{p.type}</span>
                <span className="text-green-200 text-sm">{p.date}</span>
              </div>
              <h2 className="font-bold text-xl">{p.title}</h2>
              <p className="text-green-200 text-sm mt-1">{p.area}</p>
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
                <span className="font-bold text-green-600 text-lg">{p.cost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Проектирование климата для вашего склада</h2>
        <p className="text-green-100 mb-6">Рассчитаем нагрузку, подберём оборудование, составим проект</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Запросить расчёт
          </Link>
        </div>
      </div>
    </div>
  )
}
