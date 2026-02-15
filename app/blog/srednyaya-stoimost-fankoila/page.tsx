import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Средняя стоимость фанкойла Shuft в 2026 году | Цены и расчёты',
  description: 'Сколько стоит фанкойл Shuft в 2026 году: цены на настенные, кассетные, канальные модели. Стоимость монтажа и обслуживания. Реальные примеры из проектов.',
  alternates: { canonical: 'https://shuft.online/blog/srednyaya-stoimost-fankoila/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Средняя стоимость фанкойла Shuft в 2026 году — цены, монтаж, обслуживание',
  description: 'Разбираем реальные цены на фанкойлы Shuft в 2026 году: оборудование, монтаж и ТО.',
  datePublished: '2026-02-01T10:00:00Z',
  dateModified: '2026-02-01T12:00:00Z',
  author: { '@type': 'Person', name: 'Мария Соколова', jobTitle: 'Менеджер по продажам Shuft.Online' },
  publisher: {
    '@type': 'Organization',
    name: 'Shuft.Online',
    logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' },
  },
}

const priceTable = [
  { model: 'SFH-800 V3 (настенный)', type: 'Настенный', power: '0.8 кВт', area: 'до 30 м²', price: '18 900 ₽', install: '8 000 ₽', total: '26 900 ₽' },
  { model: 'SFH-1200 V3 (настенный)', type: 'Настенный', power: '1.2 кВт', area: 'до 50 м²', price: '22 500 ₽', install: '8 000 ₽', total: '30 500 ₽' },
  { model: 'SFR-950F (кассетный)', type: 'Кассетный 4-поточный', power: '0.95 кВт', area: 'до 40 м²', price: '32 800 ₽', install: '12 000 ₽', total: '44 800 ₽' },
  { model: 'SFR-1200F (кассетный)', type: 'Кассетный 4-поточный', power: '1.2 кВт', area: 'до 55 м²', price: '38 500 ₽', install: '12 000 ₽', total: '50 500 ₽' },
  { model: 'SFR-1500F (кассетный)', type: 'Кассетный 4-поточный', power: '1.5 кВт', area: 'до 70 м²', price: '44 900 ₽', install: '14 000 ₽', total: '58 900 ₽' },
  { model: 'SFF-150 (напольно-потолочный)', type: 'Напольно-потолочный', power: '1.5 кВт', area: 'до 70 м²', price: '31 200 ₽', install: '10 000 ₽', total: '41 200 ₽' },
  { model: 'SFF-300G50 (канальный)', type: 'Канальный', power: '3.0 кВт', area: 'до 140 м²', price: '48 500 ₽', install: '16 000 ₽', total: '64 500 ₽' },
  { model: 'SFF-800G50 (канальный)', type: 'Канальный', power: '8.0 кВт', area: 'до 400 м²', price: '78 900 ₽', install: '22 000 ₽', total: '100 900 ₽' },
]

export default function ArticleSrednyayaStoimost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Блог', href: '/blog' },
          { name: 'Средняя стоимость фанкойла 2026' },
        ]} />

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">Цены</span>
          <span className="text-gray-400 text-sm">1 февраля 2026 · 7 мин чтения</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Средняя стоимость фанкойла Shuft в 2026 году — реальные цены
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Один из главных вопросов перед покупкой: сколько стоит фанкойл Shuft?
          Разбираем цены на все типы моделей, стоимость монтажа и годового обслуживания.
          Данные актуальны на февраль 2026 года.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-2xl mb-8">
          <div className="font-semibold text-gray-900 mb-1">Вывод для нетерпеливых</div>
          <div className="text-gray-700">
            Фанкойл Shuft под ключ (с монтажом) стоит от <strong>27 000 ₽</strong> (настенный, комната 30 м²)
            до <strong>100 000+ ₽</strong> (канальный, помещение 400 м²). Средний бюджет офисного проекта —
            40 000–60 000 ₽ на один фанкойл.
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Таблица цен: оборудование + монтаж 2026</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-3 font-semibold text-gray-700">Модель</th>
                <th className="text-left p-3 font-semibold text-gray-700">Площадь</th>
                <th className="text-left p-3 font-semibold text-gray-700">Оборудование</th>
                <th className="text-left p-3 font-semibold text-gray-700">Монтаж</th>
                <th className="text-left p-3 font-semibold text-blue-600">Итого</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {priceTable.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3">
                    <div className="font-medium text-gray-900">{row.model}</div>
                    <div className="text-xs text-gray-500">{row.type}</div>
                  </td>
                  <td className="p-3 text-gray-700">{row.area}</td>
                  <td className="p-3 text-gray-700">{row.price}</td>
                  <td className="p-3 text-gray-700">{row.install}</td>
                  <td className="p-3 font-bold text-blue-600">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Из чего складывается цена</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Стоимость оборудования</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Цена фанкойла зависит от типа, мощности и серии. Настенные модели — самые доступные:
          от 18 900 ₽ за SFH-800 V3. Кассетные стоят дороже за счёт сложности конструкции: от 32 800 ₽.
          Канальные — широкий диапазон: от 48 500 ₽ до 98 000 ₽ в зависимости от мощности.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Стоимость монтажа</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Стандартный монтаж одного настенного фанкойла в Москве — 8 000–10 000 ₽.
          В эту сумму входит: подключение к трубопроводу, электрике, настройка и тест-запуск.
          Монтаж кассетного или канального фанкойла дороже: 12 000–22 000 ₽, так как требует
          работ в подвесном потолке.
        </p>
        <div className="bg-gray-50 rounded-2xl p-5 mb-6">
          <div className="font-semibold text-gray-900 mb-3">Что влияет на стоимость монтажа:</div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex gap-2"><span className="text-blue-500">→</span> Тип фанкойла (настенный дешевле, кассетный/канальный дороже)</li>
            <li className="flex gap-2"><span className="text-blue-500">→</span> Длина трубопровода (стандарт — до 5 м; каждый доп. метр +500–800 ₽)</li>
            <li className="flex gap-2"><span className="text-blue-500">→</span> Сложность прокладки (через несколько помещений, сложная трасса)</li>
            <li className="flex gap-2"><span className="text-blue-500">→</span> Количество фанкойлов (монтаж от 3 штук — скидка 10%)</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Стоимость подключения к системе</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Если у вас уже есть система чиллер-фанкойл — новый фанкойл просто подключается к
          существующей разводке. Если системы нет — нужно добавить чиллер (от 185 000 ₽)
          или использовать двухтрубную схему с котлом и охладителем.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Стоимость годового обслуживания</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { service: 'Замена фильтров (4 раза в год)', cost: '2 000–4 000 ₽/год' },
            { service: 'Чистка теплообменника (1 раз в год)', cost: '3 000–5 000 ₽' },
            { service: 'Технический осмотр + настройка', cost: '4 000–6 000 ₽/год' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="text-sm text-gray-600 mb-2">{item.service}</div>
              <div className="font-bold text-gray-900">{item.cost}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Итого обслуживание одного фанкойла обойдётся в <strong>9 000–15 000 ₽ в год</strong>.
          При заключении договора на ТО стоимость снижается на 15–20%.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Реальные примеры бюджетов проектов</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              title: 'Офис 100 м² (4 помещения)',
              solution: '4 × SFH-800 V3 настенных',
              equipment: '75 600 ₽',
              install: '32 000 ₽',
              total: '107 600 ₽',
            },
            {
              title: 'Ресторан 300 м² (открытое пространство)',
              solution: '3 × SFR-1200F кассетных',
              equipment: '115 500 ₽',
              install: '36 000 ₽',
              total: '151 500 ₽',
            },
            {
              title: 'Бизнес-центр 1 200 м² (5 этажей)',
              solution: '18 фанкойлов разных типов + VRF',
              equipment: '~850 000 ₽',
              install: '~180 000 ₽',
              total: '~1 030 000 ₽',
            },
          ].map((ex, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-gray-900 mb-1">{ex.title}</div>
              <div className="text-sm text-gray-600 mb-3">{ex.solution}</div>
              <div className="flex gap-6 text-sm">
                <div><span className="text-gray-500">Оборудование: </span><span className="font-medium">{ex.equipment}</span></div>
                <div><span className="text-gray-500">Монтаж: </span><span className="font-medium">{ex.install}</span></div>
                <div><span className="text-gray-500">Итого: </span><span className="font-bold text-blue-600">{ex.total}</span></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">На чём можно сэкономить</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> <strong>Покупать больше 3 фанкойлов</strong> — скидка 10% на монтаж</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> <strong>Монтаж зимой</strong> — скидка 10% в январе–феврале (сезонная акция)</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> <strong>Договор на ТО</strong> — обслуживание на 20% дешевле разовых вызовов</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> <strong>Правильный выбор мощности</strong> — не переплачивать за избыточную мощность</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-3xl p-8 text-white text-center mt-10">
          <h2 className="text-2xl font-bold mb-3">Рассчитайте стоимость для вашего объекта</h2>
          <p className="text-blue-100 mb-6">Инженер составит смету бесплатно — в течение 30 минут</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              +7 (495) 120-33-75
            </a>
            <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
              Получить смету
            </Link>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/blog/kak-vybrat-fankoil', title: 'Как выбрать фанкойл Shuft для офиса — гайд 2026' },
              { href: '/blog/ustanovka-fankoila-v-ofise', title: 'Установка фанкойла в офисе — этапы монтажа' },
              { href: '/blog/energoeffektivnost-shuft', title: 'Энергоэффективность фанкойлов Shuft' },
              { href: '/blog/shuft-vs-carrier-daikin', title: 'Shuft vs Carrier vs Daikin — сравнение 2026' },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors text-gray-800 hover:text-blue-700 font-medium text-sm">
                {a.title} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
