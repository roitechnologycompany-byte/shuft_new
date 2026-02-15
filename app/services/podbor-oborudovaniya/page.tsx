import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Подбор оборудования Shuft — бесплатная консультация | Shuft.Online',
  description: 'Бесплатный подбор фанкойлов, чиллеров и VRF-систем Shuft под ваш объект. Расчёт мощности, сравнение моделей, коммерческое предложение за 24 часа.',
  alternates: { canonical: 'https://shuft.online/services/podbor-oborudovaniya/' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Подбор климатического оборудования Shuft',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
    url: 'https://shuft.online',
    telephone: '+74951203375',
  },
  description: 'Бесплатный подбор фанкойлов, чиллеров и VRF-систем Shuft под любой объект. Расчёт тепловых нагрузок, сравнение моделей, коммерческое предложение за 24 часа.',
  areaServed: { '@type': 'City', name: 'Москва' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB', description: 'Бесплатно' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Подбор оборудования платный?', acceptedAnswer: { '@type': 'Answer', text: 'Нет, подбор полностью бесплатный. Инженер рассчитает мощность, подберёт модели и подготовит коммерческое предложение без каких-либо обязательств.' } },
    { '@type': 'Question', name: 'Что нужно для расчёта мощности фанкойла?', acceptedAnswer: { '@type': 'Answer', text: 'Площадь помещения, высота потолков, количество окон и их ориентация, число людей, наличие источников тепла. Чем точнее данные — тем точнее расчёт.' } },
    { '@type': 'Question', name: 'Сколько времени занимает подбор?', acceptedAnswer: { '@type': 'Answer', text: 'Простые объекты (1–3 помещения) — в течение нескольких часов. Многозональные системы для офисов и ТЦ — 1–3 рабочих дня. Коммерческое предложение готовим за 24 часа.' } },
  ],
}

const faqs = [
  { q: 'Подбор оборудования платный?', a: 'Нет, подбор полностью бесплатный. Инженер рассчитает мощность, подберёт модели и подготовит коммерческое предложение без каких-либо обязательств с вашей стороны.' },
  { q: 'Что нужно для расчёта мощности фанкойла?', a: 'Площадь помещения, высота потолков, количество окон и их ориентация по сторонам света, число постоянно находящихся людей, наличие оборудования, выделяющего тепло. Чем точнее исходные данные — тем точнее расчёт и оптимальнее выбор оборудования.' },
  { q: 'Сколько времени занимает подбор?', a: 'Простые объекты (1–3 помещения) — в течение нескольких часов после заявки. Многозональные системы для офисов, ТЦ, ресторанов — 1–3 рабочих дня. Готовое коммерческое предложение — за 24 часа после получения всех данных.' },
  { q: 'Подбираете только фанкойлы или другие системы тоже?', a: 'Подбираем весь спектр оборудования Shuft: настенные, кассетные, канальные и напольно-потолочные фанкойлы; чиллеры; VRF-системы; вентиляционные агрегаты. Также проектируем комбинированные системы.' },
  { q: 'Можно ли заказать подбор удалённо (не из Москвы)?', a: 'Да. Подбор оборудования и расчёт мощностей выполняем для любого региона России. Нам потребуются планы помещений или просто описание объекта. Монтаж выполняем только по Москве и МО.' },
  { q: 'Обязательно ли покупать после подбора?', a: 'Нет никаких обязательств. Подбор — это консультация, а не договор. Если вас устроит наше предложение — оформим заказ. Если нет — информация остаётся у вас.' },
]

const objectTypes = [
  { icon: '🏢', name: 'Офис', desc: 'Кабинеты, переговорные, open space' },
  { icon: '🏪', name: 'Торговый зал', desc: 'Магазины, шоурумы, ТЦ' },
  { icon: '🍽️', name: 'Ресторан / кафе', desc: 'Зал, кухня, подсобные помещения' },
  { icon: '🏭', name: 'Производство', desc: 'Цеха, склады, технические помещения' },
  { icon: '🏨', name: 'Гостиница', desc: 'Номера, коридоры, лобби' },
  { icon: '🏠', name: 'Квартира / дом', desc: 'Жилые помещения любого метража' },
]

export default function PodborPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Подбор оборудования' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Бесплатный подбор оборудования Shuft</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Наши инженеры подберут оптимальное климатическое оборудование для вашего объекта бесплатно.
          Расчёт мощности, выбор типа и модели фанкойла, коммерческое предложение — всё за 24 часа.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { val: 'Бесплатно', lbl: 'Подбор оборудования' },
                { val: '24ч', lbl: 'Готовое КП' },
                { val: '12 лет', lbl: 'Опыт инженера' },
                { val: '150+', lbl: 'Реализованных проектов' },
              ].map((s, i) => (
                <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold">{s.val}</div>
                  <div className="text-blue-200 text-xs mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* How it works */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Как работает подбор</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { step: '1', title: 'Заявка', desc: 'Оставьте заявку — укажите тип объекта, площадь, задачу (охлаждение/обогрев/и то, и другое)' },
                { step: '2', title: 'Расчёт', desc: 'Инженер рассчитает тепловые нагрузки, сравнит подходящие модели, учтёт ваш бюджет' },
                { step: '3', title: 'КП за 24 часа', desc: 'Получите детальное коммерческое предложение с ценами, сроками и рекомендациями' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Object types */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Для каких объектов подбираем</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {objectTypes.map((obj, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-3 shadow-sm">
                  <span className="text-2xl">{obj.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{obj.name}</div>
                    <div className="text-gray-500 text-xs">{obj.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculator promo */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Нужна оценка прямо сейчас?</h2>
              <p className="text-gray-600 mb-4">Воспользуйтесь онлайн-калькулятором — получите предварительные рекомендации за 1 минуту без ожидания звонка</p>
              <Link href="/calc/fankoil" className="btn-primary">Открыть калькулятор →</Link>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4 mb-10">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl group shadow-sm">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900 hover:text-blue-600">
                    <span>{faq.q}</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                </details>
              ))}
            </div>

            <ContactForm title="Заявка на подбор оборудования" subtitle="Опишите ваш объект — ответим с рекомендациями за 24 часа" />
          </div>

          <div>
            <div className="sticky top-20 space-y-6">
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-4">Почему выбирают нас</h3>
                <ul className="space-y-3 text-sm mb-6">
                  {[
                    'Подбор бесплатно — без обязательств',
                    '12 лет опыта главного инженера',
                    'Официальный дилер Shuft',
                    '150+ реализованных проектов',
                    'Коммерческое предложение за 24 часа',
                    'Гарантия 3 года на оборудование',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:+74951203375" className="block text-center bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                  📞 +7 (495) 120-33-75
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Каталог оборудования</h3>
                <p className="text-gray-600 text-sm mb-4">Изучите линейки Shuft самостоятельно — все модели с характеристиками и ценами</p>
                <Link href="/catalog/fankoily" className="btn-secondary w-full text-center block text-sm">
                  Смотреть каталог →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
