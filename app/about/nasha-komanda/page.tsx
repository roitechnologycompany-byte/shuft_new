import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Наша команда — специалисты по климатическому оборудованию Shuft | Shuft.Online',
  description: 'Команда ООО АСПРОМСИСТЕМ: инженеры HVAC, монтажники, сервисные специалисты. 5–12 лет опыта с Shuft. 150+ успешных проектов по Москве и МО.',
  alternates: { canonical: 'https://shuft.online/about/nasha-komanda/' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
  url: 'https://shuft.online',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
  employee: [
    { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Главный инженер', worksFor: { '@type': 'Organization', name: 'ООО АСПРОМСИСТЕМ' } },
    { '@type': 'Person', name: 'Мария Соколова', jobTitle: 'Руководитель отдела продаж', worksFor: { '@type': 'Organization', name: 'ООО АСПРОМСИСТЕМ' } },
    { '@type': 'Person', name: 'Алексей Смирнов', jobTitle: 'Руководитель монтажной бригады', worksFor: { '@type': 'Organization', name: 'ООО АСПРОМСИСТЕМ' } },
  ],
}

const team = [
  {
    name: 'Иван Петров',
    role: 'Главный инженер',
    exp: '12 лет в HVAC',
    avatar: 'И',
    color: 'bg-blue-600',
    desc: 'Проектирование систем чиллер-фанкойл и VRF. Сертифицированный специалист Shuft уровня Expert. Автор 80+ крупных климатических проектов для офисов, ТЦ и производственных объектов.',
    skills: ['Проектирование VRF', 'Расчёт тепловых нагрузок', 'BMS-интеграция'],
  },
  {
    name: 'Мария Соколова',
    role: 'Руководитель отдела продаж',
    exp: '8 лет опыта',
    avatar: 'М',
    color: 'bg-orange-500',
    desc: 'Подбирает оптимальное оборудование под бюджет и задачи клиента. Рассчитывает коммерческие предложения. Ведёт крупных корпоративных клиентов: сети магазинов, девелоперы, рестораны.',
    skills: ['Подбор оборудования', 'Коммерческие предложения', 'Работа с B2B'],
  },
  {
    name: 'Алексей Смирнов',
    role: 'Рук. монтажной бригады',
    exp: '10 лет монтажа',
    avatar: 'А',
    color: 'bg-green-600',
    desc: 'Руководит монтажом фанкойлов, чиллеров и VRF-систем на объектах. Лицензированный специалист СРО. Под его руководством выполнено более 150 монтажей без единой рекламации.',
    skills: ['Монтаж VRF', 'Монтаж фанкойлов', 'Пуск-наладка'],
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Инженер сервисного отдела',
    exp: '7 лет сервиса',
    avatar: 'Д',
    color: 'bg-purple-600',
    desc: 'Специалист по диагностике и ремонту климатической техники Shuft. Ведёт гарантийные и послегарантийные случаи. Знает каждую модель изнутри.',
    skills: ['Диагностика', 'Гарантийный ремонт', 'Запчасти Shuft'],
  },
  {
    name: 'Анна Морозова',
    role: 'Менеджер по клиентам',
    exp: '5 лет опыта',
    avatar: 'А',
    color: 'bg-pink-500',
    desc: 'Координирует весь цикл заказа — от первого звонка до финального акта. Обеспечивает техподдержку 24/7 в нерабочее время. Ни один клиент не остаётся без ответа.',
    skills: ['CRM', 'Техподдержка 24/7', 'Документооборот'],
  },
  {
    name: 'Сергей Новиков',
    role: 'Монтажник-электрик',
    exp: '9 лет опыта',
    avatar: 'С',
    color: 'bg-indigo-600',
    desc: 'Выполняет электрическую часть монтажа: подключение фанкойлов, термостатов, VRF-систем. Допуск до 1000 В. Специалист по управляющим шинам и интеграции в BMS.',
    skills: ['Электромонтаж', 'Управляющие шины', 'Допуск до 1000 В'],
  },
]

const stats = [
  { val: '12', lbl: 'Специалистов в команде' },
  { val: '150+', lbl: 'Реализованных проектов' },
  { val: '8 лет', lbl: 'Работаем с Shuft' },
  { val: '24/7', lbl: 'Техподдержка' },
]

export default function NashaKomandaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании', href: '/about' }, { name: 'Наша команда' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Профессионалы с 5–12-летним опытом в климатическом оборудовании Shuft. Инженеры, монтажники и менеджеры,
          которым доверяют сотни клиентов — от небольших офисов до крупных торговых центров.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold">{s.val}</div>
              <div className="text-blue-200 text-sm mt-1">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 ${member.color} text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                  {member.avatar}
                </div>
                <div>
                  <h2 className="font-bold text-lg text-gray-900">{member.name}</h2>
                  <div className="text-blue-600 font-medium text-sm">{member.role}</div>
                  <div className="text-gray-400 text-xs">{member.exp}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.desc}</p>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, si) => (
                  <span key={si} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Принципы нашей работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Компетентность', desc: 'Каждый специалист — узкий эксперт в своей области. Не берёмся за задачи, в которых не уверены.' },
              { icon: '🤝', title: 'Честность', desc: 'Называем реальные сроки и цены. Не обещаем невозможного. Говорим о рисках заранее.' },
              { icon: '🔄', title: 'Ответственность', desc: 'Каждый проект — под личную ответственность руководителя направления. Гарантируем результат.' },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Работайте с профессионалами</h2>
          <p className="text-gray-600 mb-6">Свяжитесь с нашим инженером — подберём оборудование и рассчитаем стоимость проекта</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951203375" className="btn-primary">
              📞 +7 (495) 120-33-75
            </a>
            <Link href="/contacts" className="btn-secondary">
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
