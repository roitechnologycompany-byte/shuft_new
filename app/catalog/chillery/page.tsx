import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'Чиллеры Shuft — купить в Москве | Воздушные и водяные чиллеры 2026',
  description: 'Чиллеры Shuft для систем центрального охлаждения. Воздушный и водяной типы, мощность 20–60 кВт, площадь обслуживания до 600 м². Официальный дилер, гарантия 3 года, монтаж и пусконаладка.',
  alternates: { canonical: 'https://shuft.online/catalog/chillery/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Чиллеры', item: 'https://shuft.online/catalog/chillery/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Что такое чиллер и зачем он нужен?',
      acceptedAnswer: { '@type': 'Answer', text: 'Чиллер — это холодильная машина, которая охлаждает воду до +7…+12°C и подаёт её по трубопроводу к фанкойлам. В системе чиллер-фанкойл один агрегат обслуживает 5–50 фанкойлов. Это экономичнее отдельных кондиционеров при площади объекта от 300 м².' },
    },
    {
      '@type': 'Question',
      name: 'Чем воздушный чиллер отличается от водяного?',
      acceptedAnswer: { '@type': 'Answer', text: 'Воздушный чиллер (Air Cooled) охлаждает конденсатор потоком воздуха — его устанавливают снаружи здания или на крыше. Проще в монтаже, не требует градирни. Водяной чиллер (Water Cooled) охлаждается через теплообменник с водой и требует установку градирни или охладителя воды, но работает эффективнее при высоких мощностях.' },
    },
    {
      '@type': 'Question',
      name: 'Какой мощности чиллер нужен для офиса?',
      acceptedAnswer: { '@type': 'Answer', text: 'Приблизительный расчёт: 1 кВт холодопроизводительности на каждые 10–12 м² офисного помещения. Офис 200 м² — чиллер 16–20 кВт, офис 500 м² — 40–50 кВт. Для точного расчёта необходим тепловой расчёт здания с учётом остекления, инсоляции и числа людей.' },
    },
    {
      '@type': 'Question',
      name: 'Можно ли использовать чиллер для отопления?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, чиллеры Shuft в режиме теплового насоса могут работать на отопление при температуре наружного воздуха до -15°C. Эффективность (COP) = 3–4, то есть на 1 кВт электроэнергии производится 3–4 кВт тепла. Значительная экономия по сравнению с электрическим обогревом.' },
    },
    {
      '@type': 'Question',
      name: 'Сколько стоит обслуживание чиллера?',
      acceptedAnswer: { '@type': 'Answer', text: 'Регламентное ТО чиллера Shuft — 2 раза в год (перед летним и зимним сезонами). Стоимость одного ТО — от 8 000 до 25 000 ₽ в зависимости от мощности агрегата. В ТО входят: чистка конденсатора, проверка давления хладагента, промывка испарителя, диагностика электрики.' },
    },
  ],
}

const models = [
  { name: 'Shuft SCH-020A', type: 'Воздушный', power: '20 кВт', area: 'до 200 м²', price: '185 000 ₽', inStock: true, fans: 2, noise: 58, cop: 3.2 },
  { name: 'Shuft SCH-040A', type: 'Воздушный', power: '40 кВт', area: 'до 400 м²', price: '310 000 ₽', inStock: true, fans: 4, noise: 62, cop: 3.0 },
  { name: 'Shuft SCH-060A', type: 'Воздушный', power: '60 кВт', area: 'до 600 м²', price: '450 000 ₽', inStock: false, fans: 6, noise: 65, cop: 2.9 },
  { name: 'Shuft SCH-020W', type: 'Водяной', power: '20 кВт', area: 'до 200 м²', price: '220 000 ₽', inStock: true, fans: 0, noise: 45, cop: 4.1 },
  { name: 'Shuft SCH-040W', type: 'Водяной', power: '40 кВт', area: 'до 400 м²', price: '380 000 ₽', inStock: false, fans: 0, noise: 48, cop: 3.9 },
]

const advantages = [
  { icon: '🌡️', title: 'Охлаждение и отопление', desc: 'Тепловой насос — чиллер работает и на охлаждение, и на отопление. COP 3–4: экономия до 75% vs электрообогрев.' },
  { icon: '📦', title: 'Один агрегат вместо многих', desc: 'Один чиллер обслуживает 5–50 фанкойлов. Вместо 20 кондиционеров — один компрессорный блок.' },
  { icon: '🔇', title: 'Тишина в помещении', desc: 'Чиллер устанавливается на улице или на крыше. Внутри — только тихие фанкойлы (19–35 дБА).' },
  { icon: '⚡', title: 'Энергоэффективность', desc: 'Инверторный компрессор регулирует мощность. EER класс A/A+. Экономия электроэнергии 25–35%.' },
  { icon: '🛡️', title: 'Гарантия 3 года', desc: 'Официальная заводская гарантия производителя. Склад запчастей в Москве.' },
  { icon: '🔧', title: 'Монтаж и сервис', desc: 'Пусконаладка и ввод в эксплуатацию. Регламентное ТО 2 раза в год.' },
]

const comparison = [
  { param: 'Площадь обслуживания', vozduh: 'до 600 м²', voda: 'до 1 000+ м²' },
  { param: 'Монтаж', vozduh: 'Простой, снаружи', voda: 'Требует градирни' },
  { param: 'Эффективность (COP)', vozduh: '2,9–3,2', voda: '3,9–4,5' },
  { param: 'Шум', vozduh: '58–65 дБА', voda: '45–50 дБА' },
  { param: 'Обслуживание', vozduh: 'Стандартное', voda: 'Сложнее' },
  { param: 'Цена', vozduh: 'Дешевле', voda: 'Дороже' },
]

const faqItems = [
  {
    q: 'Что такое чиллер и зачем он нужен?',
    a: 'Чиллер охлаждает воду до +7…+12°C и подаёт её к фанкойлам. Один агрегат обслуживает 5–50 фанкойлов. Выгоднее отдельных кондиционеров при площади от 300 м².',
  },
  {
    q: 'Чем воздушный чиллер отличается от водяного?',
    a: 'Воздушный — охлаждает конденсатор воздухом, устанавливается снаружи, прост в монтаже. Водяной — охлаждается через теплообменник с водой, нужна градирня, но работает эффективнее (COP до 4,5).',
  },
  {
    q: 'Какой мощности чиллер нужен для офиса?',
    a: 'Примерно 1 кВт на 10–12 м² офиса. Офис 200 м² — чиллер 16–20 кВт, офис 500 м² — 40–50 кВт. Для точного расчёта нужен тепловой расчёт здания.',
  },
  {
    q: 'Можно ли использовать чиллер для отопления?',
    a: 'Да, чиллеры Shuft с режимом теплового насоса работают на отопление до -15°C. COP = 3–4 — значительная экономия по сравнению с электрообогревом.',
  },
  {
    q: 'Сколько стоит обслуживание чиллера?',
    a: 'ТО 2 раза в год, стоимость — от 8 000 до 25 000 ₽ за одно ТО. Включает чистку конденсатора, проверку хладагента, промывку испарителя, диагностику электрики.',
  },
]

export default function ChilleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog' }, { name: 'Чиллеры' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Чиллеры Shuft — купить в Москве</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Воздушные и водяные чиллеры Shuft для систем центрального кондиционирования. Мощность 20–60 кВт,
          площадь обслуживания до 600 м². Официальный дилер в Москве, гарантия 3 года, монтаж и пусконаладка.
        </p>

        {/* Что такое чиллер */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Что такое чиллер и как работает система чиллер-фанкойл</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700 space-y-3">
              <p>Чиллер — это холодильная машина, которая охлаждает воду до +7…+12°C. Охлаждённая вода циркулирует по трубам к фанкойлам — климатическим установкам в каждом помещении.</p>
              <p>Преимущество системы: один чиллер вместо 10–50 отдельных кондиционеров. Меньше обслуживания, централизованное управление, значительная экономия электроэнергии.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏢', text: 'Офисные и бизнес-центры от 300 м²' },
                { icon: '🏥', text: 'Клиники и медицинские учреждения' },
                { icon: '🏨', text: 'Гостиницы и отели' },
                { icon: '🏭', text: 'Производственные помещения' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Модели */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Модели чиллеров Shuft — цены и наличие</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6">
                  <div className="text-xs font-medium bg-blue-500/50 inline-block px-3 py-1 rounded-full mb-2">{model.type}</div>
                  <h3 className="font-bold text-xl">{model.name}</h3>
                  <span className={`mt-2 inline-block text-sm px-3 py-1 rounded-full ${model.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                    {model.inStock ? '✓ В наличии' : '✗ Под заказ 2–3 нед.'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3"><div className="text-gray-500 text-xs">Мощность</div><div className="font-bold">{model.power}</div></div>
                    <div className="bg-gray-50 rounded-lg p-3"><div className="text-gray-500 text-xs">Площадь</div><div className="font-bold">{model.area}</div></div>
                    <div className="bg-gray-50 rounded-lg p-3"><div className="text-gray-500 text-xs">Шум</div><div className="font-bold">{model.noise} дБА</div></div>
                    <div className="bg-gray-50 rounded-lg p-3"><div className="text-gray-500 text-xs">COP (эфф.)</div><div className="font-bold">{model.cop}</div></div>
                  </div>
                  <div className="border-t pt-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{model.price}</div>
                    <a href="tel:+74951203375" className="btn-primary text-sm py-2 px-4">Заказать</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
            <strong>Нужна другая мощность?</strong> Мы подбираем чиллеры на заказ под любые требования. Свяжитесь с нашим инженером.
          </div>
        </section>

        {/* Воздушный vs Водяной */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Воздушный или водяной чиллер — что выбрать?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Параметр</th>
                  <th className="p-4 text-center">Воздушный чиллер</th>
                  <th className="p-4 text-center">Водяной чиллер</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-100">{row.param}</td>
                    <td className="p-4 text-center text-gray-700 border-b border-gray-100">{row.vozduh}</td>
                    <td className="p-4 text-center text-gray-700 border-b border-gray-100">{row.voda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">Выбирайте воздушный чиллер, если:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Объект до 600 м² с несложной инфраструктурой</li>
                <li>• Нет возможности установить градирню</li>
                <li>• Важна простота монтажа и обслуживания</li>
                <li>• Ограничен бюджет на первоначальные вложения</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Выбирайте водяной чиллер, если:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Площадь объекта превышает 600–1 000 м²</li>
                <li>• Требуется максимальная энергоэффективность</li>
                <li>• Важна низкая шумность на улице</li>
                <li>• Есть возможность установить систему оборотного водоснабжения</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества чиллеров Shuft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-4xl mb-3">{adv.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-600 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Подкатегории */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Чиллеры Shuft по типу охлаждения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Воздушные чиллеры Shuft', href: '/catalog/chillery/vozdushnye', desc: 'SCH-020A, SCH-040A, SCH-060A. Мощность 20–60 кВт. Устанавливаются снаружи здания или на крыше. Простой монтаж, не требуют градирни.', price: 'от 185 000 ₽', icon: '💨' },
              { title: 'Водяные чиллеры Shuft', href: '/catalog/chillery/vodnye', desc: 'SCH-020W, SCH-040W. Мощность 20–40 кВт. Работают с системой оборотного водоснабжения. Высокий COP 3,9–4,5.', price: 'от 220 000 ₽', icon: '💧' },
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{cat.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{cat.desc}</p>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="font-bold text-blue-600 text-lg">{cat.price}</div>
                  <Link href={cat.href} className="btn-primary">Смотреть модели →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Видео */}
        <VideoSection
          title="Видео-обзоры чиллеров Shuft"
          videos={[
            {
              id: 'hFZFjoX2cGg',
              title: 'Воздушный чиллер Shuft SCH-040A — обзор и монтаж',
              description: 'Установка воздушного чиллера Shuft на кровле офисного здания. Подключение к фанкойлам, пусконаладка.',
              duration: '11:42',
            },
            {
              id: 'ZZ5LpwO-An4',
              title: 'Система чиллер-фанкойл — как это работает',
              description: 'Принцип работы системы чиллер-фанкойл, расчёт мощности, схема монтажа трубопровода.',
              duration: '8:19',
            },
          ]}
        />

        {/* Документация */}
        <DocsSection
          title="Документация по чиллерам Shuft"
          docs={[
            {
              name: 'Каталог чиллеров Shuft SCH-серия 2026',
              description: 'Модели, технические характеристики, цены на воздушные и водяные чиллеры',
              size: '5.8 МБ',
              type: 'manual',
              url: '/docs/shuft-chillers-catalog-2026.pdf',
            },
            {
              name: 'Инструкция по монтажу чиллеров Shuft',
              description: 'Установка, подключение трубопровода, заправка хладагентом, пусконаладка',
              size: '4.3 МБ',
              type: 'manual',
              url: '/docs/shuft-chiller-install-manual.pdf',
            },
            {
              name: 'Схема системы чиллер-фанкойл',
              description: 'Монтажная схема системы: чиллер, насос, коллектор, фанкойлы',
              size: '2.7 МБ',
              type: 'scheme',
              url: '/docs/shuft-chiller-fancoil-scheme.pdf',
            },
            {
              name: 'Сертификаты чиллеров Shuft',
              description: 'Сертификаты ТР ТС, энергоэффективность, паспорта моделей',
              size: '1.9 МБ',
              type: 'certificate',
              url: '/docs/shuft-chiller-certificates.pdf',
            },
          ]}
        />

        {/* FAQ */}
        <section className="mt-14 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы о чиллерах Shuft</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-gray-900 list-none">
                  {item.q}
                  <span className="ml-4 text-blue-600 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Подобрать чиллер под ваш объект</h2>
          <p className="text-gray-600 mb-6">
            Расскажите о вашем проекте — инженер рассчитает мощность, выберет тип чиллера и составит коммерческое предложение.
            Выезд на объект и консультация — бесплатно.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+74951203375" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg">📞 +7 (495) 120-33-75</a>
            <Link href="/contacts" className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-lg">Оставить заявку</Link>
          </div>
        </div>
      </div>
    </>
  )
}
