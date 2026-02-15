import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Фанкойлы Shuft в Москве — официальный дилер Shuft.Online',
  description: 'Официальный дилер Shuft в Москве. Фанкойлы, чиллеры, VRF-системы. Гарантия 3 года, монтаж за 1–3 дня, техподдержка 24/7. Склад в наличии.',
  alternates: { canonical: 'https://shuft.online/' },
}

const fancoilTypes = [
  {
    title: 'Кассетные фанкойлы',
    description: 'Встраиваются в подвесной потолок. Идеальны для больших офисов, ТЦ, банков. Распределяют воздух равномерно во все четыре стороны.',
    power: '5–20 кВт',
    price: 'от 72 450 ₽',
    href: '/catalog/fankoily/kassetnye',
    icon: '⬛',
    features: ['Равномерное распределение воздуха', 'Встраивается в потолок', 'Для больших помещений'],
  },
  {
    title: 'Канальные фанкойлы',
    description: 'Спрятаны внутри воздуховодов. Компактны, не видны в интерьере. Используются в квартирах, малых офисах, магазинах.',
    power: '2–22 кВт',
    price: 'от 42 180 ₽',
    href: '/catalog/fankoily/kanalnye',
    icon: '🔲',
    features: ['Скрытая установка', 'Не виден в интерьере', 'Гибкая разводка воздуха'],
  },
  {
    title: 'Настенные фанкойлы',
    description: 'Крепятся на стену. Самый популярный тип — видны все управления. Простая установка, хороший дизайн.',
    power: '4.5–7 кВт',
    price: 'от 56 960 ₽',
    href: '/catalog/fankoily/nastennye',
    icon: '🟦',
    features: ['Простой монтаж', 'Пульт ДУ в комплекте', 'Тихий режим 19–26 дБА'],
  },
  {
    title: 'Напольно-потолочные',
    description: 'Универсальные — ставятся на пол или подвешиваются к потолку. Для средних помещений (офисы 20–50 м²).',
    power: '1.6–3.5 кВт',
    price: 'от 43 930 ₽',
    href: '/catalog/fankoily/napolno-potolochnye',
    icon: '🔷',
    features: ['Гибкая установка', 'Охлаждение и обогрев', 'Для 20–50 м²'],
  },
]

const advantages = [
  {
    icon: '🏆',
    title: 'Официальный партнёр Shuft',
    desc: 'Сертификаты от производителя, прямые поставки без посредников, 8+ лет сотрудничества.',
  },
  {
    icon: '🔧',
    title: 'Гарантия 3 года + 24/7',
    desc: 'Официальная гарантия производителя на всё оборудование. Техподдержка круглосуточно.',
  },
  {
    icon: '🚚',
    title: 'Монтаж за 1–3 дня',
    desc: 'Лицензированные монтажники, склад в Москве. Доставка в пределах МКАД за 24 часа.',
  },
  {
    icon: '📦',
    title: 'Оригинальные запчасти',
    desc: 'Фильтры, вентили, датчики для любой модели Shuft всегда есть на нашем складе.',
  },
  {
    icon: '💰',
    title: 'Европейское качество',
    desc: 'Технологии датских инженеров по российской цене. Дешевле Carrier и Daikin на 30–40%.',
  },
  {
    icon: '📐',
    title: 'Бесплатный подбор',
    desc: 'Наши инженеры подберут оптимальное решение под ваш объект бесплатно.',
  },
]

const projects = [
  {
    title: 'Офис IT-компании',
    address: 'ул. Петровка, бизнес-центр (280 м², 3 этажа)',
    task: 'Охлаждение офиса на 28 человек с минимальным уровнем шума',
    solution: '3 × SFH-800 V3 + 1 × SFF-400',
    result: 'Температура 22–23°C, шум 22 дБА, монтаж за 2 дня',
    cost: '185 000 ₽',
  },
  {
    title: 'Торговый центр',
    address: 'пр. Комсомольский, ТЦ на 4 000 м²',
    task: 'Охлаждение торговых павильонов и ресторанной зоны',
    solution: '12 × SFR-1200F + 4 чиллера',
    result: 'Равномерная температура, экономия электроэнергии 15%',
    cost: '1 250 000 ₽',
  },
  {
    title: 'Производственный цех',
    address: 'Люберецкий район (1 500 м²)',
    task: 'Охлаждение, контроль влажности, вентиляция',
    solution: 'VRF Shuft + 6 внутренних блоков + 2 канальных фанкойла',
    result: 'Стабилизация ±1°C, влажность 45–55%',
    cost: '2 100 000 ₽',
  },
]

const reviews = [
  {
    name: 'Игорь Петров',
    company: 'ООО "ВебСтудия"',
    text: 'Прекрасный фанкойл, быстро охлаждает, тихий. Монтаж за один день. Рекомендую всем!',
    model: 'Shuft SFH-500 V3',
    rating: 5,
  },
  {
    name: 'Мария Соколова',
    company: 'ООО "ТорговаяСеть", ТЦ "Азбука"',
    text: 'Работаем с фанкойлами Shuft в торговом центре уже 3 года. Ни одной поломки. Отличное соотношение цены и качества.',
    model: 'Shuft SFR-1200F (кассетные)',
    rating: 5,
  },
  {
    name: 'Максим Иванов',
    company: 'Частный клиент, Дом, МО',
    text: 'Купили 3 настенных фанкойла для коттеджа. Работают бесшумно, очень экономичны. Весь дом комфортно охлаждается.',
    model: 'Shuft SFH-800 V3 (x3)',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Где купить оригинальный фанкойл Shuft в Москве?',
    a: 'Оригинальные фанкойлы Shuft покупают здесь — на shuft.online. Мы официальный дилер с сертификатом от производителя. Гарантия 3 года, доставка за 24 часа, монтаж за 1–3 дня.',
  },
  {
    q: 'Какой фанкойл выбрать для офиса 50 м²?',
    a: 'Для офиса 50 м² рекомендуем настенный фанкойл Shuft SFH-500 V3 (4.5 кВт). Охладит за 15–20 минут, уровень шума всего 26 дБА.',
  },
  {
    q: 'Сколько стоит монтаж фанкойла?',
    a: 'Монтаж одного фанкойла стоит 5 000–8 000 ₽. Окончательная цена определяется после осмотра помещения. Даём гарантию на все работы.',
  },
  {
    q: 'Есть ли гарантия на фанкойлы Shuft?',
    a: 'Гарантия производителя — 3 года. Техподдержка 24/7. Оригинальные запчасти всегда в наличии на нашем складе в Москве.',
  },
  {
    q: 'Фанкойлы Shuft шумят?',
    a: 'Нет, фанкойлы Shuft — одни из самых тихих на рынке. Уровень шума: 19–26 дБА. Тише холодильника.',
  },
  {
    q: 'Чем Shuft отличается от Carrier, Daikin?',
    a: 'Shuft дешевле на 30–40% при похожем качестве. Русскоязычные инструкции, запчасти в наличии, техподдержка 24/7 на русском языке.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '30px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600 bg-opacity-50 border border-blue-400 rounded-full px-4 py-2 text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Официальный дилер Shuft в Москве
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Фанкойлы Shuft в Москве — официальный дилер с гарантией 3 года
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Охлаждение и обогрев для офисов, магазинов и частных помещений. Оригинальное оборудование, монтаж за 1–3 дня.
              </p>
              <p className="text-blue-200 mb-8">
                Мы — официальный дилер бренда Shuft в Москве. На складе всегда в наличии кассетные, канальные, настенные и напольно-потолочные фанкойлы. Продаём оригинальное оборудование с гарантией производителя 3 года. Монтаж выполняют лицензированные специалисты.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/calc/fankoil" className="btn-accent text-lg px-8 py-4">
                  Подобрать фанкойл
                </Link>
                <Link href="/catalog/fankoily" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-800">
                  Смотреть каталог
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-blue-600">
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-blue-300 text-sm">реализованных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">8 лет</div>
                  <div className="text-blue-300 text-sm">на рынке HVAC</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">3 года</div>
                  <div className="text-blue-300 text-sm">гарантия</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white bg-opacity-10 rounded-3xl flex items-center justify-center border border-blue-400 border-opacity-30 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-8xl mb-4">❄️</div>
                    <div className="text-2xl font-bold text-white">Shuft</div>
                    <div className="text-blue-300">Климатическое оборудование</div>
                    <div className="mt-4 space-y-2">
                      <div className="bg-blue-600 bg-opacity-50 rounded-lg px-4 py-2 text-sm">✓ Настенные SFH</div>
                      <div className="bg-blue-600 bg-opacity-50 rounded-lg px-4 py-2 text-sm">✓ Кассетные SFR</div>
                      <div className="bg-blue-600 bg-opacity-50 rounded-lg px-4 py-2 text-sm">✓ Канальные SFC</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg">
                  Склад в наличии
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg">
                  Гарантия 3 года
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>Официальный дилер Shuft</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>Гарантия производителя 3 года</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>Доставка по Москве за 24 часа</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>Монтаж за 1–3 дня</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <span>Техподдержка 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему выбирают именно нас</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">ООО «АСПРОМСИСТЕМ» — официальный дилер Shuft с 2016 года. Более 150 реализованных проектов в Москве и области.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">{adv.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about/sertifikaty" className="btn-secondary">
              Смотреть сертификаты →
            </Link>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Основные типы фанкойлов Shuft</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Выбирайте подходящий тип для вашего помещения. Поможем с подбором бесплатно.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {fancoilTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 text-center">
                  <div className="text-5xl mb-3">{type.icon === '⬛' ? '🔲' : type.icon === '🔲' ? '📦' : type.icon === '🟦' ? '🏠' : '↕️'}</div>
                  <h3 className="font-bold text-lg">{type.title}</h3>
                  <div className="mt-2 text-blue-200 text-sm">{type.power}</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-4">
                    {type.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500 font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="text-lg font-bold text-blue-600 mb-3">{type.price}</div>
                    <Link href={type.href} className="block text-center btn-primary w-full justify-center text-sm py-2">
                      Смотреть модели
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/catalog/fankoily" className="btn-secondary text-lg px-8 py-4">
              Весь каталог фанкойлов Shuft →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SHUFT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Почему выбирают Shuft</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Shuft — европейский бренд с датскими корнями (с 1994 года). Сейчас полностью локализованное производство в России. Это означает, что вы получаете европейское качество и технологии с российской ценой и быстрым сервисом.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Европейские технологии по российской цене', desc: 'Компактные размеры, надёжные компоненты, низкий уровень шума.' },
                  { title: 'Оригинальные запчасти в наличии', desc: 'Для любой модели Shuft найдутся фильтры, вентили, датчики.' },
                  { title: 'Официально представлены по всей РФ', desc: 'Техподдержка, сервисные центры, гарантия производителя.' },
                  { title: 'Доступная стоимость содержания', desc: 'Дешевле в обслуживании, чем иностранные аналоги.' },
                  { title: 'Простая установка', desc: 'Монтаж стандартным инструментом, трубы ½ и ¾ дюйма.' },
                  { title: 'Гарантия 3 года + техподдержка 24/7', desc: 'После монтажа — полная забота о вашем оборудовании.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-gray-900">Производство Shuft</h3>
                <p className="text-gray-600 mt-2">Заводы в Московской области, контроль качества по международным стандартам</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1994', label: 'Год основания бренда' },
                  { value: 'Россия', label: 'Производство' },
                  { value: '30–40%', label: 'Дешевле импортных' },
                  { value: 'ISO', label: 'Стандарты качества' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/about/o-brende-shuft" className="btn-primary w-full justify-center">
                  История бренда Shuft →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Подберём фанкойл Shuft за 1 минуту</h2>
          <p className="text-orange-100 text-lg mb-8">
            Укажите площадь помещения, тип объекта — получите 2–3 рекомендуемые модели с ценами
          </p>
          <Link href="/calc/fankoil" className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold text-lg px-10 py-5 rounded-xl hover:bg-orange-50 transition-colors">
            <span>🔢</span>
            Открыть калькулятор подбора
          </Link>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Реализованные проекты в Москве</h2>
            <p className="text-gray-600 text-lg">Более 150 успешных проектов в офисах, торговых центрах и производственных помещениях</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6">
                  <h3 className="font-bold text-xl mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm">{p.address}</p>
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
                    <div className="font-bold text-blue-600">{p.cost}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="btn-secondary text-lg px-8 py-4">
              Все реализованные проекты →
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, si) => (
                    <span key={si} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{r.name}</div>
                  <div className="text-gray-500 text-sm">{r.company}</div>
                  <div className="text-blue-600 text-sm font-medium mt-1">{r.model}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Частые вопросы про фанкойлы Shuft</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-blue-600">
                  <span>{faq.q}</span>
                  <span className="text-blue-600 ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-secondary text-lg px-8 py-4">
              Все вопросы и ответы →
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="form" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
