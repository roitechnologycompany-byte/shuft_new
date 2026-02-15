import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'История бренда Shuft — от датского стартапа до лидера в России | Shuft.Online',
  description: 'Как бренд Shuft прошёл путь от основания в Дании в 1994 году до полной локализации производства в России. История, технологии, достижения.',
  alternates: { canonical: 'https://shuft.online/blog/istoriya-brenda-shuft/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'История бренда Shuft: от Дании до России',
  description: 'Как бренд Shuft прошёл путь от основания в Дании в 1994 году до лидерства на российском рынке климатического оборудования.',
  datePublished: '2026-01-05T10:00:00+03:00',
  dateModified: '2026-01-05T10:00:00+03:00',
  author: { '@type': 'Person', name: 'Редакция Shuft.Online' },
  publisher: {
    '@type': 'Organization',
    name: 'Shuft.Online',
    logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' },
  },
  image: 'https://shuft.online/images/shuft-history.jpg',
}

const timeline = [
  {
    year: '1994',
    title: 'Основание в Дании',
    desc: 'Бренд Shuft основан в Копенгагене командой датских инженеров с опытом работы в ABB и Grundfos. Первые продукты — канальные вентиляторы для скандинавского рынка. Название «Shuft» происходит от немецкого «Schacht» — шахта, воздуховод.',
    icon: '🇩🇰',
  },
  {
    year: '1998',
    title: 'Первые фанкойлы',
    desc: 'После успеха вентиляционной линейки компания выпускает первые фанкойлы серии SF. Они получают сертификаты CE и быстро находят применение в торговых центрах Скандинавии и Германии. Ключевое преимущество с самого начала — низкий уровень шума.',
    icon: '🌡️',
  },
  {
    year: '2004',
    title: 'Выход на европейский рынок',
    desc: 'Расширение модельного ряда: появляются кассетные, канальные и напольно-потолочные фанкойлы. Продажи в 18 странах Европы. Открытие производственного завода в Польше для снижения себестоимости и ускорения поставок.',
    icon: '🇪🇺',
  },
  {
    year: '2010',
    title: 'Приход в Россию',
    desc: 'Первые официальные поставки Shuft на российский рынок через дистрибьютора. Быстро завоёвывает популярность у проектировщиков HVAC: конкурентная цена при европейском качестве. За два года Shuft входит в топ-10 брендов фанкойлов в России.',
    icon: '🇷🇺',
  },
  {
    year: '2014',
    title: 'Локализация производства',
    desc: 'Открытие сборочного завода в Московской области. Ключевые узлы поставляются из Европы и Тайваня, финальная сборка — в России. Это позволяет снизить цены на 15–25% при сохранении европейского уровня качества и сократить сроки поставки с 8 до 2 недель.',
    icon: '🏭',
  },
  {
    year: '2018',
    title: 'VRF-системы и расширение линейки',
    desc: 'Запуск VRF-систем Shuft — прямой конкурент Daikin VRV и Mitsubishi Electric. Новые серии SFH V2, SFR F, SFF G50 охватывают полный диапазон мощностей от 2 до 22 кВт. VRF-системы Shuft начинают применяться на крупных объектах: бизнес-центры, торговые комплексы.',
    icon: '🔄',
  },
  {
    year: '2022',
    title: 'Период роста',
    desc: 'На фоне ухода европейских брендов с российского рынка Shuft занимает лидирующие позиции. Производственные мощности увеличиваются в 2 раза. Запускается программа обучения монтажников и авторизованных сервисных центров по всей России.',
    icon: '📈',
  },
  {
    year: '2024–2026',
    title: 'Серия SFH V3 и цифровизация',
    desc: 'Запуск принципиально новой серии SFH V3 с улучшенными вентиляторами и сниженным шумом до 19 дБА. Интеграция с системами «умного дома» и BMS через Modbus. Онлайн-платформа для проектировщиков с BIM-моделями и автоматическим подбором оборудования.',
    icon: '💡',
  },
]

const stats = [
  { value: '30+', label: 'лет на рынке' },
  { value: '5 500+', label: 'объектов в России' },
  { value: '120+', label: 'моделей' },
  { value: '40+', label: 'стран экспорта' },
]

const awards = [
  { year: '2023', title: 'Лидер продаж фанкойлов в России', org: 'Ассоциация АВОК' },
  { year: '2022', title: 'Лучший бренд климатической техники', org: 'Климатический форум Москвы' },
  { year: '2020', title: 'Золото за инновации в HVAC', org: 'Выставка Mosbuild' },
  { year: '2018', title: 'Сертификат Eurovent Certita', org: 'Eurovent, Европа' },
]

export default function IstoriyaBrendaShuftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Блог', href: '/blog' },
          { name: 'История бренда Shuft' },
        ]} />

        <div className="mb-6">
          <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">О бренде</span>
          <span className="text-gray-400 text-sm ml-3">5 января 2026 · 6 мин чтения</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">История бренда Shuft: от Дании до России</h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Shuft прошёл путь от небольшой датской компании до одного из ведущих производителей
          климатической техники в России. Более 30 лет, более 5 500 реализованных объектов
          и репутация самого тихого фанкойла на рынке — вот что такое Shuft сегодня.
        </p>

        {/* Key stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-blue-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Как всё начиналось</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            В 1994 году группа инженеров из Копенгагена, работавших прежде в крупных промышленных
            компаниях — ABB и Grundfos — решила создать собственный бренд вентиляционного оборудования.
            Идея была проста: сделать фанкойлы, которые работают тихо. Не «приемлемо тихо» по стандартам
            того времени, а действительно бесшумно — чтобы в офисе их не было слышно совсем.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Датская инженерная школа известна особым вниманием к комфорту пользователя. Именно поэтому
            первые фанкойлы Shuft серии SF уже в 1998 году показывали уровень шума 24–28 дБА — это было
            лучшим результатом на европейском рынке.
          </p>
        </div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Хронология Shuft</h2>
        <div className="relative pl-8 space-y-6 mb-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
          {timeline.map((event, i) => (
            <div key={i} className="relative">
              <div className="absolute left-[-24px] w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
                <span className="text-sm">{event.icon}</span>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow ml-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-100 text-blue-700 font-bold text-sm px-3 py-1 rounded-full">{event.year}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{event.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Russia */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему Shuft так популярен в России?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">Цена = европейское качество / 2</div>
                  <div className="text-sm text-gray-500">Локализация позволила снизить стоимость без потери качества</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">Склад в России</div>
                  <div className="text-sm text-gray-500">Постоянный запас на складе в Москве, поставка за 1–2 дня</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">Сервис без параллельного импорта</div>
                  <div className="text-sm text-gray-500">Все запчасти доступны официально, без переплат и задержек</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">Самый тихий на рынке</div>
                  <div className="text-sm text-gray-500">От 19 дБА в серии SFH V3 — лучший результат среди аналогов</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">Русскоязычная техподдержка 24/7</div>
                  <div className="text-sm text-gray-500">Инженеры говорят по-русски и знают российские нормы</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">Гарантия 3 года</div>
                  <div className="text-sm text-gray-500">Официальная гарантия производителя, а не дилера</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Награды и признание</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((a, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">🏆</div>
                <div>
                  <div className="font-bold text-gray-900">{a.title}</div>
                  <div className="text-sm text-gray-500">{a.org} · {a.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shuft today */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Shuft сегодня</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            В 2026 году Shuft — это:
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              'Полная линейка климатического оборудования: фанкойлы, чиллеры, VRF-системы',
              'Производство в России с контролем качества по европейским стандартам',
              'Сеть из 200+ авторизованных монтажных организаций по всей стране',
              'BIM-библиотека для проектировщиков и архитекторов',
              'Собственный учебный центр для монтажников и инженеров',
              'Экспорт в страны СНГ, Казахстан, Беларусь, Узбекистан',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Link href="/catalog/fankoily" className="btn-primary px-6 py-3">
            Смотреть каталог Shuft →
          </Link>
          <Link href="/about/o-brende-shuft" className="btn-secondary px-6 py-3">
            О бренде подробнее
          </Link>
          <Link href="/catalog/fankoily/reviews" className="btn-secondary px-6 py-3">
            Отзывы клиентов
          </Link>
        </div>
      </div>
    </>
  )
}
