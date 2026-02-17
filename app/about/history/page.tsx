import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'История компании Shuft.Online | С 2016 года в Москве',
  description: 'История ООО АСПРОМСИСТЕМ — официального дилера Shuft в Москве. Основана в 2016 году, более 150 реализованных проектов, партнёр года Shuft 2023.',
  alternates: { canonical: 'https://shuft.online/about/history/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'О компании', item: 'https://shuft.online/about/' },
    { '@type': 'ListItem', position: 3, name: 'История', item: 'https://shuft.online/about/history/' },
  ],
}

const timeline = [
  {
    year: '2016',
    title: 'Основание компании',
    desc: 'ООО «АСПРОМСИСТЕМ» зарегистрировано в Москве. Первый договор с производителем Shuft на дистрибуцию в Москве и МО. Штат: 3 человека.',
  },
  {
    year: '2017',
    title: 'Первые крупные проекты',
    desc: 'Реализованы первые объекты площадью более 1 000 м²: офисный центр на Садовом кольце и торговый павильон. Команда выросла до 8 человек.',
  },
  {
    year: '2018',
    title: 'Расширение склада',
    desc: 'Открыт собственный склад в Москве площадью 500 м². Постоянный запас 50+ моделей фанкойлов. Время поставки клиенту — 1 день.',
  },
  {
    year: '2019',
    title: 'Сервисный центр',
    desc: 'Открыт авторизованный сервисный центр Shuft. Гарантийный и постгарантийный ремонт в Москве и МО. Штат вырос до 15 человек.',
  },
  {
    year: '2020',
    title: 'Сложный год — устойчивый рост',
    desc: 'Несмотря на пандемию, выручка выросла на 18%. Увеличился спрос на климатизацию офисов после перехода компаний к гибридному формату работы.',
  },
  {
    year: '2021',
    title: '100-й реализованный проект',
    desc: 'Торжественная сдача юбилейного, 100-го проекта — VRF-система в бизнес-центре «Дмитровский». 20+ специалистов в команде.',
  },
  {
    year: '2022',
    title: 'Адаптация к новым условиям',
    desc: 'Расширение склада до 1 000 м². Увеличение складских запасов на фоне изменений в цепочках поставок. Заключение прямых контрактов с фабриками Shuft.',
  },
  {
    year: '2023',
    title: 'Партнёр года Shuft 2023',
    desc: 'Компания получила звание «Лучший дилер Shuft в России 2023» по итогам года. 130+ реализованных проектов за год. 30 специалистов.',
  },
  {
    year: '2024',
    title: '150+ проектов и выход в регионы',
    desc: 'Преодолён рубеж 150 реализованных проектов. Первые поставки и монтаж в регионах: Санкт-Петербург, Екатеринбург, Краснодар.',
  },
  {
    year: '2025–2026',
    title: 'Сегодня',
    desc: 'Более 500 клиентов, 35 специалистов, 8 монтажных бригад. Запуск онлайн-каталога и сервиса онлайн-подбора оборудования Shuft.Online.',
  },
]

export default function HistoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'О компании', href: '/about' },
        { name: 'История' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">История компании Shuft.Online</h1>
      <p className="text-gray-600 text-lg mb-12 max-w-3xl">
        С 2016 года мы специализируемся на поставке и монтаже климатической техники Shuft в Москве и МО.
        За 8 лет прошли путь от небольшой команды из 3 человек до ведущего дилера Shuft в России.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '2016', label: 'год основания' },
          { value: '150+', label: 'реализованных проектов' },
          { value: '35', label: 'специалистов' },
          { value: '№1', label: 'дилер Shuft в России 2023' },
        ].map((s, i) => (
          <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-blue-200 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative mb-16">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-sm z-10 relative">
                  {item.year}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex-1 hover:shadow-md transition-shadow">
                <h2 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
        <h2 className="font-bold text-2xl text-gray-900 mb-4">Наши принципы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Только оригинал', desc: 'Работаем напрямую с производителем Shuft. Никаких аналогов и подделок.' },
            { title: 'Монтаж под ключ', desc: 'От расчёта и подбора до сдачи объекта и последующего сервисного обслуживания.' },
            { title: 'Честная цена', desc: 'Цены производителя без наценки за «посредника». Прямой контракт с фабрикой.' },
          ].map((item, i) => (
            <div key={i}>
              <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
              <div className="text-gray-600 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Стать частью нашей истории</h2>
        <p className="text-blue-100 mb-6">Обсудим ваш проект — звоните или пишите</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Написать нам
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
