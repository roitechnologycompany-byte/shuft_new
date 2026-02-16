import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Как выбрать фанкойл Shuft для магазина — советы экспертов | Shuft.Online',
  description: 'Какой тип фанкойла выбрать для торгового зала, бутика или торгового центра. Расчёт мощности, схемы расстановки, примеры и цены. Официальный дилер.',
  alternates: { canonical: 'https://shuft.online/blog/kak-vybrat-dlya-magazina/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Как выбрать фанкойл Shuft для магазина — советы экспертов',
  description: 'Какой тип фанкойла выбрать для торгового зала, бутика или торгового центра. Расчёт мощности и схемы расстановки.',
  datePublished: '2025-12-10T10:00:00+03:00',
  dateModified: '2025-12-10T10:00:00+03:00',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online', logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://shuft.online/blog/kak-vybrat-dlya-magazina/' },
}

export default function KakVybratDlyaMagazinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Блог', href: '/blog' },
        { name: 'Фанкойл для магазина' },
      ]} />

      <div className="mb-8">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Подбор оборудования</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Как выбрать фанкойл Shuft для магазина — советы экспертов</h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>10 декабря 2025</span>
          <span>•</span>
          <span>7 мин чтения</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <p className="text-gray-700">
          Торговые помещения предъявляют особые требования к климатическому оборудованию: большая
          проходимость людей, открывающиеся двери, большие витринные окна. В этой статье разберём,
          какой тип фанкойла Shuft подходит для каждого типа магазина.
        </p>
      </div>

      <article>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Особенности климата в торговых помещениях</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: '👥', title: 'Высокая плотность людей', desc: 'Каждый человек выделяет 100–150 Вт тепла. При 50 посетителях это +5–7 кВт дополнительной нагрузки.' },
            { icon: '🪟', title: 'Большие витринные окна', desc: 'Южные фасады дают до +30% нагрузки. Обязательно учитывайте в расчёте.' },
            { icon: '🚪', title: 'Открывающиеся двери', desc: 'Каждое открытие двери — приток горячего уличного воздуха. Особенно критично для магазинов с высокой проходимостью.' },
            { icon: '💡', title: 'Освещение', desc: 'Торговые залы часто перенасыщены светом: 50–100 Вт/м². Освещение на 200 м² = +10–20 кВт тепла.' },
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

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Выбор типа фанкойла по формату магазина</h2>
        <div className="space-y-6 mb-8">
          {[
            {
              type: 'Кассетные фанкойлы SFR',
              badge: 'Лучший выбор для ТЦ',
              badgeColor: 'bg-blue-600',
              formats: 'Торговые центры, супермаркеты, гипермаркеты (от 200 м²)',
              pros: ['Равномерное распределение воздуха на 4 стороны', 'Скрыты в подвесном потолке — не портят интерьер', 'Высокая производительность', 'Автоматические жалюзи'],
              models: 'SFR-950F, SFR-1200F, SFR-1500F',
              price: 'от 72 450 ₽',
              href: '/catalog/fankoily/kassetnye',
            },
            {
              type: 'Канальные фанкойлы SFF',
              badge: 'Для скрытого монтажа',
              badgeColor: 'bg-indigo-600',
              formats: 'Бутики, premium-магазины, ресторанные зоны',
              pros: ['Полностью скрыты — никаких видимых блоков', 'Воздуховоды можно завести в любую точку', 'Равномерное распределение через диффузоры', 'Идеален для сложных планировок'],
              models: 'SFF-500G50, SFF-800G50, SFF-1400G50',
              price: 'от 52 000 ₽',
              href: '/catalog/fankoily/kanalnye',
            },
            {
              type: 'Настенные фанкойлы SFH',
              badge: 'Для малых магазинов',
              badgeColor: 'bg-gray-600',
              formats: 'Небольшие магазины, шоу-румы, островки в ТЦ (до 80 м²)',
              pros: ['Быстрый монтаж', 'Недорогое решение', 'Простое управление', 'Пульт ДУ в комплекте'],
              models: 'SFH-500 V3, SFH-800 V3',
              price: 'от 56 960 ₽',
              href: '/catalog/fankoily/nastennye',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-xl text-gray-900">{item.type}</h3>
                <span className={`${item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{item.badge}</span>
              </div>
              <div className="p-5">
                <div className="text-gray-500 text-sm mb-3 italic">Подходит для: {item.formats}</div>
                <ul className="space-y-1 mb-4">
                  {item.pros.map((pro, pi) => (
                    <li key={pi} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span> {pro}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <div className="text-xs text-gray-500">Модели: {item.models}</div>
                    <div className="font-bold text-blue-600">{item.price}</div>
                  </div>
                  <Link href={item.href} className="btn-primary py-2 px-4 text-sm">Смотреть →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Расчёт мощности для торгового помещения</h2>
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <p className="text-gray-700 mb-4">Формула для торговых помещений:</p>
          <div className="bg-white border-2 border-blue-300 rounded-xl p-4 text-center mb-4">
            <code className="text-blue-700 font-bold text-lg">
              P = S × 60 + N × 150 + W_свет × 0.9
            </code>
          </div>
          <ul className="space-y-1 text-sm text-gray-700 mb-4">
            <li><strong>P</strong> — требуемая мощность охлаждения (Вт)</li>
            <li><strong>S</strong> — площадь помещения (м²)</li>
            <li><strong>N</strong> — максимальное количество посетителей</li>
            <li><strong>W_свет</strong> — суммарная мощность освещения (Вт)</li>
          </ul>
          <div className="bg-blue-50 rounded-lg p-3 text-sm">
            <strong>Пример:</strong> магазин 100 м², 20 покупателей, 8 кВт освещения<br />
            P = 100×60 + 20×150 + 8000×0.9 = 6000 + 3000 + 7200 = <strong>16.2 кВт</strong>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Бесплатный подбор для вашего магазина</h3>
          <p className="text-gray-700 mb-4">Пришлите план помещения — наши инженеры подберут оптимальную схему за 1 рабочий день.</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+74951203375" className="btn-accent">📞 +7 (495) 120-33-75</a>
            <Link href="/contacts#form" className="btn-secondary">Отправить план</Link>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t pt-8">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Читайте также</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/blog/kak-vybrat-fankoil', title: 'Как выбрать фанкойл Shuft для офиса' },
            { href: '/catalog/fankoily/kassetnye', title: 'Кассетные фанкойлы — каталог и цены' },
            { href: '/calc/fankoil', title: 'Калькулятор подбора фанкойла' },
            { href: '/services/podbor-oborudovaniya', title: 'Бесплатный подбор оборудования' },
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
