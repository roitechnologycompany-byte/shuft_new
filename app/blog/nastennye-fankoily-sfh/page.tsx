import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Настенные фанкойлы Shuft SFH V3 — полный обзор | Shuft.Online',
  description: 'Обзор настенных фанкойлов Shuft серии SFH V3: SFH-500, SFH-800, SFH-1200. Характеристики, цены, применение, отзывы. Официальный дилер.',
  alternates: { canonical: 'https://shuft.online/blog/nastennye-fankoily-sfh/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Настенные фанкойлы Shuft SFH V3 — полный обзор',
  description: 'Обзор настенных фанкойлов Shuft серии SFH V3: SFH-500, SFH-800, SFH-1200. Характеристики, цены, применение.',
  datePublished: '2026-01-08T10:00:00+03:00',
  dateModified: '2026-01-08T10:00:00+03:00',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online', logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://shuft.online/blog/nastennye-fankoily-sfh/' },
}

const models = [
  {
    name: 'Shuft SFH-500 V3',
    power: '4.51 кВт',
    heat: '6.77 кВт',
    area: 'до 45 м²',
    noise: '19–26 дБА',
    price: '56 960 ₽',
    href: '/catalog/fankoily/nastennye/sfh-500-v3',
    badge: 'Хит продаж',
    desc: 'Оптимальный выбор для офисов 30–45 м². Самый популярный настенный фанкойл Shuft.',
  },
  {
    name: 'Shuft SFH-800 V3',
    power: '7.24 кВт',
    heat: '11.12 кВт',
    area: 'до 75 м²',
    noise: '22–32 дБА',
    price: '74 500 ₽',
    href: '/catalog/fankoily/nastennye',
    badge: '',
    desc: 'Мощная модель для крупных офисных помещений, залов переговоров, магазинов.',
  },
  {
    name: 'Shuft SFH-1200 V3',
    power: '11.0 кВт',
    heat: '16.5 кВт',
    area: 'до 110 м²',
    noise: '25–35 дБА',
    price: '98 900 ₽',
    href: '/catalog/fankoily/nastennye',
    badge: '',
    desc: 'Максимальная мощность в настенном исполнении. Для торговых залов и крупных офисов.',
  },
]

export default function NastennieSFHPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Блог', href: '/blog' },
        { name: 'Обзор настенных фанкойлов SFH V3' },
      ]} />

      <div className="mb-8">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Обзоры</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Полный обзор настенных фанкойлов Shuft серии SFH V3</h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>8 января 2026</span>
          <span>•</span>
          <span>7 мин чтения</span>
          <span>•</span>
          <span>Инженеры Shuft.Online</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <p className="text-gray-700">
          Серия SFH V3 — самые популярные настенные фанкойлы Shuft. Обновлённые в 2023 году, они получили
          более тихие вентиляторы, улучшенный теплообменник и современный дизайн. В этой статье разберём
          все три модели и поможем выбрать подходящую.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Что изменилось в версии V3</h2>
        <p className="text-gray-700 mb-4">По сравнению с предыдущим поколением SFH V2:</p>
        <ul className="space-y-2 mb-6">
          {[
            'Уровень шума снижен на 3–5 дБА (19–26 дБА на минимальной скорости)',
            'Новый ламельный теплообменник с эффективностью +12%',
            'Встроенный ИК-приёмник заменён на двухстороннее управление',
            'Корпус из матового пластика (не собирает отпечатки)',
            'Возможность подключения к умному дому через опциональный модуль Wi-Fi',
            'Обновлённый дренажный поддон с антикоррозийным покрытием',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500 font-bold mt-0.5">✓</span> {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Сравнение моделей SFH V3</h2>
        <div className="space-y-6 mb-8">
          {models.map((model, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl">{model.name}</h3>
                  <p className="text-blue-200 text-sm mt-1">{model.desc}</p>
                </div>
                {model.badge && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">{model.badge}</span>
                )}
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Охлаждение', value: model.power },
                    { label: 'Обогрев', value: model.heat },
                    { label: 'Площадь', value: model.area },
                    { label: 'Шум', value: model.noise },
                  ].map((spec, si) => (
                    <div key={si} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{spec.label}</div>
                      <div className="font-bold text-gray-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">{model.price}</div>
                  <Link href={model.href} className="btn-primary py-2 px-4 text-sm">
                    Подробнее →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Как выбрать правильную модель</h2>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <p className="text-gray-700 mb-4">Простое правило: <strong>100 Вт мощности = ~10 м² площади</strong>. Однако необходимо учитывать:</p>
          <ul className="space-y-2">
            {[
              'Южная сторона и большие окна — берите модель мощнее на 20%',
              'Серверная или производство — умножьте площадь на 1.5–2',
              'Квартира или дом — стандартный расчёт, без коэффициентов',
              'Высокие потолки (3+ м) — пересчитайте по объёму: 30–40 Вт/м³',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-500 font-bold">→</span> {tip}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/calc/fankoil" className="btn-accent text-sm py-2">
              Использовать калькулятор подбора →
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Монтаж настенных фанкойлов SFH</h2>
        <p className="text-gray-700 mb-4">
          Настенные фанкойлы — самые простые в монтаже. Установка занимает 1–2 часа на одну единицу.
          Потребуется:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: '🔧', title: 'Монтажная планка', desc: 'Крепится к стене, фанкойл навешивается на неё. Стена должна выдержать 20–25 кг.' },
            { icon: '💧', title: 'Трубы водяного контура', desc: 'Ø 1/2 дюйма. Подача +7°C, обратка +12°C. Изоляция обязательна.' },
            { icon: '🔌', title: 'Электропитание', desc: '220В / 10А. Рекомендуется отдельный автомат.' },
            { icon: '🌊', title: 'Дренажный слив', desc: 'Конденсат отводится через трубку Ø 16 мм в канализацию или на улицу.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-white border border-gray-100 rounded-xl">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Гарантия и сервис</h2>
        <p className="text-gray-700 mb-4">
          Все фанкойлы серии SFH V3 поставляются с официальной гарантией производителя 3 года.
          Оригинальные запчасти (фильтры, теплообменники, вентиляторы) всегда в наличии на складе в Москве.
          Техподдержка работает 24/7.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-8">
          <h3 className="font-bold text-gray-900 mb-3">Купить настенный фанкойл Shuft SFH V3</h3>
          <p className="text-gray-700 mb-4">
            Официальный дилер Shuft в Москве. Наличие на складе, доставка за 24 часа, монтаж за 1–3 дня.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/catalog/fankoily/nastennye" className="btn-primary">Смотреть каталог</Link>
            <Link href="/catalog/fankoily/nastennye/sfh-500-v3" className="btn-secondary">SFH-500 V3 — 56 960 ₽</Link>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t pt-8">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Читайте также</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/blog/kak-vybrat-fankoil', title: 'Как выбрать фанкойл Shuft для офиса — полный гайд' },
            { href: '/blog/shum-fankoila', title: 'Уровень шума фанкойлов Shuft — насколько тихо?' },
            { href: '/blog/shuft-vs-carrier-daikin', title: 'Shuft vs Carrier vs Daikin — сравнение' },
            { href: '/catalog/fankoily/nastennye/sfh-500-v3', title: 'SFH-500 V3 — купить за 56 960 ₽' },
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
