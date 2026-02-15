import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Онлайн-калькуляторы подбора оборудования Shuft | Shuft.Online',
  description: 'Бесплатные онлайн-калькуляторы для подбора фанкойлов и чиллеров Shuft. Введите площадь помещения — получите рекомендацию модели и стоимость.',
}

const calculators = [
  {
    href: '/calc/fankoil',
    title: 'Калькулятор подбора фанкойла',
    desc: 'Введите площадь, тип помещения и высоту потолков — получите рекомендацию подходящего фанкойла Shuft с ценой.',
    time: '2 минуты',
    steps: ['Тип помещения', 'Площадь и высота потолков', 'Рекомендованная модель'],
    badge: 'Популярный',
    badgeColor: 'bg-blue-600',
  },
]

const steps = [
  { step: '1', title: 'Выберите калькулятор', desc: 'Фанкойл, чиллер или VRF-система — выберите нужный раздел' },
  { step: '2', title: 'Введите параметры', desc: 'Площадь, тип помещения, высота потолков, количество окон' },
  { step: '3', title: 'Получите результат', desc: 'Рекомендованная модель, мощность, цена — сразу на экране' },
  { step: '4', title: 'Закажите КП', desc: 'Инженер уточнит детали и пришлёт полное коммерческое предложение' },
]

export default function CalcPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Калькуляторы подбора' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Онлайн-калькуляторы подбора оборудования Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Не знаете, какой фанкойл или чиллер вам нужен? Воспользуйтесь бесплатным калькулятором.
        Введите площадь помещения — получите рекомендацию за 2 минуты.
      </p>

      {/* How it works */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {steps.map((s, i) => (
          <div key={i} className="bg-blue-50 rounded-2xl p-5">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-3">
              {s.step}
            </div>
            <div className="font-semibold text-gray-900 text-sm mb-1">{s.title}</div>
            <div className="text-gray-600 text-xs leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Calculators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {calculators.map((calc, i) => (
          <Link key={i} href={calc.href} className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${calc.badgeColor} bg-opacity-80`}>
                  {calc.badge}
                </span>
                <span className="text-blue-200 text-xs">{calc.time}</span>
              </div>
              <h2 className="font-bold text-xl group-hover:text-blue-100 transition-colors">{calc.title}</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{calc.desc}</p>
              <div className="space-y-1 mb-5">
                {calc.steps.map((step, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">{j + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold text-sm group-hover:underline">Открыть калькулятор →</span>
                <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">Бесплатно</span>
              </div>
            </div>
          </Link>
        ))}

        {/* Placeholder: coming soon */}
        {[
          { title: 'Калькулятор чиллера', desc: 'Подбор чиллера Shuft по площади объекта и числу фанкойлов' },
          { title: 'Калькулятор VRF-системы', desc: 'Расчёт мощности внешнего блока и количества внутренних' },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 border-dashed p-6 flex flex-col items-center justify-center text-center min-h-[220px]">
            <div className="text-gray-300 text-4xl mb-3">🔧</div>
            <div className="font-semibold text-gray-500 mb-1">{item.title}</div>
            <div className="text-gray-400 text-sm mb-3">{item.desc}</div>
            <span className="bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">Скоро</span>
          </div>
        ))}
      </div>

      {/* Why use calculator */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="font-bold text-2xl text-gray-900 mb-6">Зачем использовать калькулятор</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Точный подбор мощности',
              desc: 'Калькулятор учитывает площадь, тип помещения, высоту потолков и тепловые нагрузки. Не переплатите за избыточную мощность.',
            },
            {
              title: 'Экономия времени',
              desc: 'За 2 минуты получите рекомендацию, которую инженер рассчитывает вручную за 30–60 минут. Результат сразу на экране.',
            },
            {
              title: 'Отправная точка для КП',
              desc: 'Результат калькулятора — основа для коммерческого предложения. Наш инженер уточнит детали и добавит стоимость монтажа.',
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Нужен точный расчёт инженера?</h2>
        <p className="text-blue-100 mb-6">Расчёт с учётом конкретного объекта — бесплатно, за 30 минут</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
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
