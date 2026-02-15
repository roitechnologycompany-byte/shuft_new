import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'О бренде Shuft — история от Дании до России | Shuft.Online',
  description: 'История бренда Shuft: основан в Дании в 1994 году, сейчас производство полностью в России. Технологии, качество, линейки продуктов фанкойлов и чиллеров.',
  alternates: { canonical: 'https://shuft.online/about/o-brende-shuft/' },
}

const brandSchema = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  name: 'Shuft',
  url: 'https://shuft.online',
  description: 'Бренд климатического оборудования: фанкойлы, чиллеры, VRF-системы. Основан в Дании в 1994 году, производство в России.',
  logo: 'https://shuft.online/logo.svg',
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
  url: 'https://shuft.online',
  description: 'Официальный дилер бренда Shuft в Москве. Продажа, монтаж и сервис климатического оборудования Shuft с 2016 года.',
  foundingDate: '2016',
  brand: { '@type': 'Brand', name: 'Shuft' },
}

const timeline = [
  { year: '1994', title: 'Основание в Дании', desc: 'Команда инженеров основывает Shuft в Дании. Специализация — системы вентиляции и климат-контроля для коммерческих объектов.' },
  { year: '2000е', title: 'Выход на европейский рынок', desc: 'Shuft завоёвывает репутацию в Европе. Разрабатываются ключевые линейки: настенные, кассетные и канальные фанкойлы серий SFH, SFR, SFF.' },
  { year: '2010е', title: 'Приход в Россию', desc: 'Бренд Shuft стремительно завоёвывает популярность на российском рынке. Производство переносится в Московскую область.' },
  { year: '2016', title: 'ООО АСПРОМСИСТЕМ', desc: 'Мы становимся официальным авторизованным дилером Shuft в Москве. Начало партнёрства, которое длится уже более 8 лет.' },
  { year: '2020е', title: 'Расширение линейки', desc: 'Shuft запускает обновлённые серии с поддержкой BMS-интеграции, инверторными приводами и улучшенными показателями EER/COP.' },
]

const productLines = [
  { name: 'SFH — Настенные фанкойлы', desc: 'Самая популярная серия для офисов, кафе, магазинов и квартир. Элегантный дизайн, тихая работа. Мощность 2–10 кВт.', href: '/catalog/fankoily/nastennye', badge: 'Хит продаж' },
  { name: 'SFR — Кассетные фанкойлы', desc: 'Встраиваются в подвесной потолок. Обдув в 4 стороны, равномерное распределение воздуха. Мощность 3–15 кВт.', href: '/catalog/fankoily/kassetnye', badge: null },
  { name: 'SFF — Канальные / напольно-потолочные', desc: 'Для скрытого монтажа за подшивным потолком или в полу. Оптимальны для ресторанов, гостиниц, производств.', href: '/catalog/fankoily/kanalnye', badge: null },
  { name: 'SCH — Чиллеры', desc: 'Воздушные и водяные чиллеры для систем центрального охлаждения больших объектов: ТЦ, бизнес-центры, производства.', href: '/catalog/chillery', badge: null },
]

const advantages = [
  { icon: '🏭', title: 'Производство в России', desc: 'Собственный завод в Московской области. Быстрые сроки поставки, запчасти всегда в наличии.' },
  { icon: '🇩🇰', title: 'Европейские технологии', desc: 'Датская инженерная школа и строгие стандарты качества сохранены при локализации производства.' },
  { icon: '📋', title: 'Сертификация ГОСТ', desc: 'Всё оборудование сертифицировано по ГОСТ и техрегламентам ЕАЭС. Подходит для объектов госзаказа.' },
  { icon: '💰', title: 'Цены ниже аналогов', desc: 'Российское производство позволяет держать цены на 30–40% ниже европейских аналогов при том же качестве.' },
  { icon: '🔧', title: 'Русскоязычная поддержка', desc: 'Документация, ПО, техподдержка — всё на русском языке. Запчасти по всей России.' },
  { icon: '⚡', title: 'Высокая энергоэффективность', desc: 'EER до 4.2, COP до 4.5 у современных серий. Инверторные приводы вентиляторов снижают потребление на 25–30%.' },
]

export default function OBrendeShuftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'О компании', href: '/about' },
          { name: 'О бренде Shuft' },
        ]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-6">О бренде Shuft — история и технологии</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Shuft — российский бренд климатического оборудования с датскими корнями. Основан в 1994 году,
          производство локализовано в России. Официальный дилер в Москве — ООО АСПРОМСИСТЕМ с 2016 года.
        </p>

        {/* Key facts */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['1994', 'Год основания'],
              ['Дания', 'Страна происхождения'],
              ['Россия', 'Производство'],
              ['ISO 9001', 'Стандарт качества'],
            ].map(([val, lbl], i) => (
              <div key={i}>
                <div className="text-3xl font-bold">{val}</div>
                <div className="text-blue-200 text-sm mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">История бренда</h2>
        <div className="space-y-4 mb-12">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="w-16 text-center flex-shrink-0">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg">{item.year}</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Product lines */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Линейки продуктов Shuft</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {productLines.map((line, i) => (
            <Link key={i} href={line.href} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all block">
              <div className="flex items-start justify-between mb-2">
                <div className="font-bold text-gray-900">{line.name}</div>
                {line.badge && (
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-2">{line.badge}</span>
                )}
              </div>
              <div className="text-gray-600 text-sm">{line.desc}</div>
              <div className="text-blue-600 text-sm font-medium mt-3">Смотреть каталог →</div>
            </Link>
          ))}
        </div>

        {/* Why Shuft */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Почему Shuft выбирают в России</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {advantages.map((adv, i) => (
            <div key={i} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="text-3xl flex-shrink-0">{adv.icon}</div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{adv.title}</div>
                <div className="text-gray-600 text-sm">{adv.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* We are dealer */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Мы — официальный дилер Shuft в Москве</h2>
          <p className="text-gray-700 mb-4">
            ООО АСПРОМСИСТЕМ является авторизованным партнёром Shuft с 2016 года. Прямые поставки с завода,
            гарантия производителя 3 года, оригинальные запчасти. Более 150 реализованных проектов по Москве и МО.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '8 лет', lbl: 'Как официальный дилер' },
              { val: '150+', lbl: 'Реализованных проектов' },
              { val: '3 года', lbl: 'Гарантия' },
              { val: '24/7', lbl: 'Техподдержка' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">{s.val}</div>
                <div className="text-gray-500 text-xs mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/catalog/fankoily" className="btn-primary">Смотреть каталог Shuft</Link>
          <Link href="/blog/istoriya-brenda-shuft" className="btn-secondary">Полная история бренда →</Link>
          <Link href="/about/sertifikaty" className="btn-secondary">Наши сертификаты</Link>
        </div>
      </div>
    </>
  )
}
