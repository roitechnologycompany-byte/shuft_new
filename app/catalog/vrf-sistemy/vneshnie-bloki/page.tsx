import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'Внешние блоки VRF Shuft — цены 2026 | Купить в Москве',
  description: 'Внешние блоки VRF-систем Shuft. Мощность 8–56 кВт, до 16 внутренних блоков. Официальный дилер, гарантия 3 года, монтаж в Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/vrf-sistemy/vneshnie-bloki/' },
}

const models = [
  {
    name: 'Shuft VRF-080',
    coolingPower: '8 кВт',
    heatingPower: '9 кВт',
    maxIndoor: 4,
    refrigerant: 'R410A',
    minTemp: '−20°C',
    price: '185 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft VRF-140',
    coolingPower: '14 кВт',
    heatingPower: '16 кВт',
    maxIndoor: 6,
    refrigerant: 'R410A',
    minTemp: '−25°C',
    price: '285 000 ₽',
    inStock: true,
  },
  {
    name: 'Shuft VRF-280',
    coolingPower: '28 кВт',
    heatingPower: '31.5 кВт',
    maxIndoor: 10,
    refrigerant: 'R410A',
    minTemp: '−25°C',
    price: '510 000 ₽',
    inStock: false,
  },
  {
    name: 'Shuft VRF-560',
    coolingPower: '56 кВт',
    heatingPower: '63 кВт',
    maxIndoor: 16,
    refrigerant: 'R410A',
    minTemp: '−25°C',
    price: '980 000 ₽',
    inStock: false,
  },
]

export default function VneshnieBlokyVRFPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'VRF-системы', href: '/catalog/vrf-sistemy' },
        { name: 'Внешние блоки' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Внешние блоки VRF-систем Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Внешние блоки VRF (Variable Refrigerant Flow) Shuft обеспечивают хладагентом до 16 внутренних блоков.
        Один внешний блок — полноценная система климата для офиса или бизнес-центра.
      </p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-xl text-gray-900 mb-3">Как работает VRF-система</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          VRF (Variable Refrigerant Flow) — система с переменным расходом хладагента. Один внешний блок
          по трубопроводам с хладагентом подключён к нескольким внутренним. Инверторный компрессор
          регулирует производительность точно под текущую нагрузку — экономия электроэнергии до 40%
          по сравнению с традиционными кондиционерами.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {models.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-indigo-500 bg-opacity-50 text-xs px-2 py-1 rounded-full">Внешний блок</span>
                {m.inStock
                  ? <span className="text-green-300 text-xs">В наличии</span>
                  : <span className="text-yellow-300 text-xs">Под заказ 21 день</span>}
              </div>
              <h2 className="font-bold text-2xl">{m.name}</h2>
              <p className="text-indigo-200 text-sm mt-1">до {m.maxIndoor} внутренних блоков</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Охлаждение', value: m.coolingPower },
                  { label: 'Нагрев', value: m.heatingPower },
                  { label: 'Вн. блоки', value: `до ${m.maxIndoor}` },
                  { label: 'Мин. T', value: m.minTemp },
                  { label: 'Хладагент', value: m.refrigerant },
                ].map((spec, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{spec.label}</div>
                    <div className="font-semibold text-gray-900 text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-2xl font-bold text-indigo-600">{m.price}</div>
                <Link href="/contacts#form" className="bg-indigo-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-indigo-700 transition-colors text-sm">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-indigo-50 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Преимущества VRF Shuft</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex gap-2"><span className="text-indigo-500">✓</span> Экономия до 40% электроэнергии (инвертор)</li>
            <li className="flex gap-2"><span className="text-indigo-500">✓</span> Одновременное охлаждение и нагрев разных зон</li>
            <li className="flex gap-2"><span className="text-indigo-500">✓</span> Длина трубопровода до 150 м</li>
            <li className="flex gap-2"><span className="text-indigo-500">✓</span> Работа при −25°C на улице</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Для каких объектов</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex gap-2"><span className="text-gray-400">→</span> Офисные центры от 500 м²</li>
            <li className="flex gap-2"><span className="text-gray-400">→</span> Гостиницы и апартаменты</li>
            <li className="flex gap-2"><span className="text-gray-400">→</span> Торговые галереи</li>
            <li className="flex gap-2"><span className="text-gray-400">→</span> Производственно-офисные комплексы</li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Проектирование VRF-системы для вашего объекта</h2>
        <p className="text-indigo-100 mb-6">Инженер рассчитает схему и подберёт внешний блок — бесплатно</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Получить проект
          </Link>
        </div>
      </div>

      <VideoSection
        title="Видео об VRF-системах Shuft"
        videos={[
          {
            id: 'dQw4w9WgXcQ',
            title: 'Обзор VRF-системы Shuft: внешний блок и монтаж',
            description: 'Установка внешнего VRF-блока Shuft на кровле бизнес-центра: монтаж, подключение хладагентных трубок, пуск.',
            duration: '11:20',
          },
          {
            id: 'ZZ5LpwO-An4',
            title: 'VRF vs чиллер-фанкойл — что выгоднее для офиса?',
            description: 'Сравнение двух систем по инвестициям, эксплуатации и масштабируемости.',
            duration: '7:33',
          },
        ]}
      />

      <DocsSection
        title="Документация для скачивания"
        docs={[
          {
            name: 'Инструкция по монтажу VRF Shuft — внешние блоки',
            description: 'Кровельный монтаж, хладагентные линии, электроподключение',
            size: '6.5 МБ',
            type: 'manual',
            url: '/docs/shuft-vrf-outdoor-manual.pdf',
          },
          {
            name: 'Паспорт Shuft SVF-200',
            description: 'Технические характеристики внешнего VRF-блока 20 кВт',
            size: '1.6 МБ',
            type: 'passport',
            url: '/docs/shuft-svf-200-passport.pdf',
          },
          {
            name: 'Паспорт Shuft SVF-400',
            description: 'Технические характеристики внешнего VRF-блока 40 кВт',
            size: '1.6 МБ',
            type: 'passport',
            url: '/docs/shuft-svf-400-passport.pdf',
          },
          {
            name: 'Сертификат VRF-системы Shuft',
            description: 'Сертификат ТР ТС, допуск к применению в РФ',
            size: '0.9 МБ',
            type: 'certificate',
            url: '/docs/shuft-vrf-certificate.pdf',
          },
          {
            name: 'Схема монтажа VRF — кровельный вариант',
            description: 'Монтажный чертёж, виброизоляция, крепёж',
            size: '2.4 МБ',
            type: 'scheme',
            url: '/docs/shuft-vrf-roof-scheme.pdf',
          },
        ]}
      />
    </div>
  )
}
