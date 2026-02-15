import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Система чиллер-фанкойл Shuft: как это работает | Shuft.Online',
  description: 'Принцип работы системы чиллер-фанкойл, схема подключения, преимущества и отличия от VRF. Когда выгодно выбрать чиллер-фанкойл Shuft.',
  alternates: { canonical: 'https://shuft.online/blog/chiller-fankoil-sistema' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Система чиллер-фанкойл Shuft: как это работает',
  datePublished: '2026-01-02',
  dateModified: '2026-01-02',
  author: { '@type': 'Organization', name: 'Shuft.Online' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online' },
}

export default function ChillerFankoilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Блог', href: '/blog' },
          { name: 'Система чиллер-фанкойл' },
        ]} />

        <div className="mb-8">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Технологии</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Система чиллер-фанкойл Shuft: как это работает</h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>2 января 2026</span>
            <span>•</span>
            <span>9 мин чтения</span>
            <span>•</span>
            <span>Инженеры Shuft.Online</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-2">Коротко о главном</h2>
          <p className="text-gray-700">
            Система чиллер-фанкойл — это центральная система кондиционирования, где чиллер охлаждает воду,
            а фанкойлы в каждом помещении обмениваются теплом с этой водой. Главное преимущество —
            масштабируемость: одним чиллером можно обслуживать сотни помещений.
          </p>
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Что такое система чиллер-фанкойл</h2>
          <p className="text-gray-700 mb-4">
            Система чиллер-фанкойл — это двухконтурная система централизованного климат-контроля.
            Она состоит из двух ключевых компонентов:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: 'Чиллер', desc: 'Центральная холодильная машина, которая охлаждает (или нагревает) воду.' },
              { title: 'Фанкойлы', desc: 'Терминальные блоки в каждом помещении, через которые проходит охлаждённая (нагретая) вода.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span className="text-gray-700"><strong>{item.title}</strong>: {item.desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Принцип работы: шаг за шагом</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '1', title: 'Чиллер охлаждает воду', desc: 'Чиллер Shuft охлаждает воду до +7°C (летом) или нагревает до +45°C (зимой). Процесс аналогичен работе холодильника.' },
              { step: '2', title: 'Насосная станция прокачивает воду', desc: 'Насосы гоняют воду по системе трубопроводов по всему зданию. Трубы прокладываются скрыто — в стенах или за подвесными потолками.' },
              { step: '3', title: 'Фанкойл забирает тепло (или холод)', desc: 'В каждом помещении установлен фанкойл. Встроенный вентилятор прогоняет комнатный воздух через теплообменник с холодной водой. Воздух охлаждается.' },
              { step: '4', title: 'Пользователь управляет температурой', desc: 'У каждого фанкойла свой пульт или термостат. Можно задать нужную температуру в каждом помещении независимо.' },
              { step: '5', title: 'Вода возвращается обратно в чиллер', desc: 'Нагревшаяся вода (+12°C) по обратному трубопроводу возвращается к чиллеру, где снова охлаждается до +7°C.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-gray-600 text-sm mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Преимущества системы чиллер-фанкойл</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🏢', title: 'Масштабируемость', desc: 'Один чиллер обслуживает от 5 до 500+ помещений. Идеально для бизнес-центров.' },
              { icon: '🎛️', title: 'Независимый контроль', desc: 'В каждом помещении своя температура — жильцы/арендаторы управляют сами.' },
              { icon: '🔧', title: 'Простой сервис', desc: 'Фанкойлы обслуживать легко. Поломка одного не влияет на остальные.' },
              { icon: '💧', title: 'Безопасность', desc: 'По трубам течёт обычная вода, а не фреон. Нет риска утечки хладагента.' },
              { icon: '❄️🔥', title: 'Охлаждение и обогрев', desc: 'Та же система зимой переключается в режим обогрева.' },
              { icon: '📏', title: 'Любая длина трасс', desc: 'Трубопровод можно провести на сотни метров, VRF — максимум 150 м.' },
            ].map((adv, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-gray-100 rounded-xl">
                <div className="text-2xl">{adv.icon}</div>
                <div>
                  <div className="font-semibold text-gray-900">{adv.title}</div>
                  <div className="text-gray-600 text-sm">{adv.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Чиллер-фанкойл vs VRF: что выбрать</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">Параметр</th>
                  <th className="p-3 text-left">Чиллер-фанкойл</th>
                  <th className="p-3 text-left">VRF-система</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Хладагент', 'Вода (безопасно)', 'Фреон R32/R410A'],
                  ['Длина трасс', 'Не ограничена', 'До 150 м'],
                  ['Количество зон', 'Сотни', 'До 64'],
                  ['Стоимость монтажа', 'Дороже', 'Дешевле'],
                  ['Энергоэффективность', 'Высокая', 'Очень высокая'],
                  ['Для каких объектов', 'Крупные, 2000+ м²', 'Средние, до 2000 м²'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 border border-gray-200">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Какие фанкойлы Shuft подходят для чиллер-систем</h2>
          <p className="text-gray-700 mb-4">
            Все фанкойлы Shuft работают в системах чиллер-фанкойл. Наиболее популярны:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'SFR-серия (кассетные)', desc: 'Для торговых центров и крупных офисов. Монтируются в потолок.', href: '/catalog/fankoily/kassetnye' },
              { name: 'SFC-серия (канальные)', desc: 'Скрытый монтаж в воздуховоды. Для отелей и апартаментов.', href: '/catalog/fankoily/kanalnye' },
              { name: 'SFH-серия (настенные)', desc: 'Быстрый монтаж, удобное управление. Для офисных помещений.', href: '/catalog/fankoily/nastennye' },
              { name: 'SFF-серия (нап.-потолочные)', desc: 'Универсальный монтаж. Для административных зданий.', href: '/catalog/fankoily/napolno-potolochnye' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block p-4 bg-blue-50 border border-blue-100 rounded-xl hover:border-blue-300 transition-colors">
                <div className="font-semibold text-blue-700 mb-1">{item.name}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </Link>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-8">
            <h3 className="font-bold text-gray-900 mb-3">Нужна консультация по системе чиллер-фанкойл?</h3>
            <p className="text-gray-700 mb-4">
              Наши инженеры рассчитают оптимальную конфигурацию для вашего объекта бесплатно.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+74951203375" className="btn-accent">📞 +7 (495) 120-33-75</a>
              <Link href="/contacts#form" className="btn-secondary">Оставить заявку</Link>
            </div>
          </div>
        </article>

        <div className="mt-12 border-t pt-8">
          <h2 className="font-bold text-xl text-gray-900 mb-4">Читайте также</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/blog/kak-vybrat-fankoil', title: 'Как выбрать фанкойл Shuft для офиса — полный гайд 2026' },
              { href: '/blog/shuft-vs-carrier-daikin', title: 'Shuft vs Carrier vs Daikin — сравнение фанкойлов' },
              { href: '/blog/vrf-sistema-chto-eto', title: 'VRF-системы Shuft: что это и когда они нужны' },
              { href: '/catalog/fankoily', title: 'Все фанкойлы Shuft — каталог и цены' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600 font-medium text-sm">
                → {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
