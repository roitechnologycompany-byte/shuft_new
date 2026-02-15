import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Как выбрать фанкойл Shuft для офиса — гайд 2026 | Shuft.Online',
  description: 'Выбираем фанкойл для офиса по площади и мощности. Примеры для офисов разных размеров, рекомендации по моделям Shuft, расчёты с формулами. Гайд 2026.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Как выбрать фанкойл Shuft для офиса — полный гайд 2026',
  description: 'Выбираем фанкойл для офиса по площади, мощности и типу помещения. Примеры расчётов и рекомендации по моделям Shuft.',
  datePublished: '2026-01-15T10:00:00Z',
  dateModified: '2026-01-15T15:30:00Z',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: {
    '@type': 'Organization',
    name: 'Shuft.Online',
    logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' },
  },
}

export default function ArticleKakVybrat() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Блог', href: '/blog' },
          { name: 'Как выбрать фанкойл для офиса' },
        ]} />

        <div className="mb-6">
          <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Подбор оборудования</span>
          <span className="text-gray-400 text-sm ml-3">15 января 2026 • 8 мин чтения</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Как выбрать фанкойл Shuft для офиса — полный гайд 2026
        </h1>

        <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold">И</span>
          </div>
          <div>
            <div className="font-medium text-gray-900">Иван Петров</div>
            <div className="text-gray-500 text-sm">Главный инженер Shuft.Online, 12 лет в HVAC</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-xl text-gray-600 font-medium">
            Правильный выбор фанкойла для офиса — это баланс между мощностью, уровнем шума и типом установки. 
            В этом гайде я объясню, как рассчитать нужную мощность и какую модель Shuft выбрать для вашего офиса.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">1. Почему фанкойлы лучше обычных кондиционеров для офисов</h2>
          <p>Фанкойлы принципиально отличаются от сплит-систем. Они не используют хладагент напрямую — вместо этого они охлаждают или нагревают воздух через водяной контур, подключённый к чиллеру. Это даёт ряд преимуществ для офисного применения:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Один чиллер обслуживает несколько фанкойлов — экономия на оборудовании</li>
            <li>Фанкойлы тише кондиционеров при одинаковой мощности</li>
            <li>Работают и на охлаждение, и на обогрев</li>
            <li>Проще обслуживать — нет хладагента, только вода</li>
            <li>Долговечнее: срок службы 15–20 лет vs 7–10 у кондиционеров</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">2. Как рассчитать нужную мощность фанкойла</h2>
          <p>Базовая формула: <strong>1 кВт на 10 м²</strong> при стандартной высоте потолков 2.7 м. Но это приблизительно. Реальный расчёт учитывает:</p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-gray-900 mb-3">Формула расчёта мощности</h3>
            <p className="font-mono bg-white p-3 rounded-lg text-sm">
              Q = S × h × 40 Вт/м³ + Qоб + Qлюди
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>S — площадь помещения (м²)</li>
              <li>h — высота потолков (м)</li>
              <li>Qоб — тепловыделение техники (ПК: 0.1–0.3 кВт/шт)</li>
              <li>Qлюди — тепло от людей (0.1 кВт/чел)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">3. Типы фанкойлов для офиса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { type: 'Настенные (SFH)', best: 'Небольшие офисы, переговорные', pros: 'Простой монтаж, пульт ДУ, дизайн' },
              { type: 'Кассетные (SFR)', best: 'Большие открытые офисы, open-space', pros: 'Равномерный обдув, скрытый монтаж' },
              { type: 'Канальные (SFC)', best: 'Офисы с подвесными потолками', pros: 'Невидимые, гибкое зонирование' },
              { type: 'Напольно-потолочные (SFF)', best: 'Кабинеты руководителей', pros: 'Нет требований к потолку' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="font-bold text-gray-900 mb-1">{t.type}</div>
                <div className="text-sm text-gray-500 mb-2">Лучше для: {t.best}</div>
                <div className="text-sm text-green-700">+ {t.pros}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900">4. Пример расчёта для офиса 50 м²</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="font-medium text-gray-900 mb-3">Исходные данные:</p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Площадь: 50 м², высота потолков: 2.7 м</li>
              <li>• Сотрудников: 8 человек</li>
              <li>• Компьютеров: 8 шт. (по 0.2 кВт каждый)</li>
              <li>• Окна на юг (большое остекление)</li>
            </ul>
            <p className="font-medium text-gray-900 mb-3">Расчёт:</p>
            <div className="font-mono text-sm bg-white p-3 rounded-lg space-y-1">
              <div>Q = 50 × 2.7 × 40 = 5 400 Вт (базовая)</div>
              <div>+ 8 × 200 = 1 600 Вт (техника)</div>
              <div>+ 8 × 100 = 800 Вт (люди)</div>
              <div>+ 20% (остекление) = 1 560 Вт</div>
              <div className="font-bold border-t pt-1">Итого: ≈ 9 400 Вт ≈ 9.5 кВт</div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Рекомендация:</strong> Для такого офиса подойдёт 1 кассетный фанкойл Shuft SFR-1200F (7.5 кВт) 
              + 1 настенный SFH-500 V3 (4.5 кВт), либо 2 настенных SFH-800 V3 (7.24 кВт каждый).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">5. Сравнительная таблица моделей Shuft для офисов</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">Модель</th>
                  <th className="p-3 text-left">Мощность</th>
                  <th className="p-3 text-left">Площадь</th>
                  <th className="p-3 text-left">Шум</th>
                  <th className="p-3 text-left">Цена</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SFH-500 V3', '4.5 кВт', '30–45 м²', '26 дБА', '56 960 ₽'],
                  ['SFH-800 V3', '7.2 кВт', '50–72 м²', '28 дБА', '74 500 ₽'],
                  ['SFR-950F', '5.0 кВт', '40–50 м²', '30 дБА', '72 450 ₽'],
                  ['SFR-1200F', '7.5 кВт', '60–75 м²', '32 дБА', '89 900 ₽'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`p-3 border-b border-gray-100 ${ci === 0 ? 'font-medium text-blue-700' : 'text-gray-700'} ${ci === 4 ? 'font-bold' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">6. Чек-лист выбора фанкойла для офиса</h2>
          <div className="space-y-3">
            {[
              'Измерьте площадь и высоту потолков',
              'Посчитайте количество людей и техники',
              'Учтите ориентацию окон (южная = больше тепла)',
              'Определитесь с типом установки (настенный/кассетный/канальный)',
              'Уточните требования к уровню шума (переговорные — макс. 30 дБА)',
              'Выберите модель по нашему калькулятору или позвоните инженеру',
              'Закажите выезд специалиста для точного обмера',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i+1}</div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Нужна помощь с подбором?</h2>
          <p className="text-blue-100 mb-6">Наши инженеры подберут фанкойл бесплатно — звоните!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50">📞 +7 (495) 120-33-75</a>
            <Link href="/calc/fankoil" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600">Калькулятор подбора</Link>
          </div>
        </div>
      </div>
    </>
  )
}
