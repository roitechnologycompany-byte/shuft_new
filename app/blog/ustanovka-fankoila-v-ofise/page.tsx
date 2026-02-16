import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Установка фанкойла Shuft в офисе: пошаговая инструкция | Shuft.Online',
  description: 'Пошаговое руководство по монтажу настенного фанкойла Shuft в офисе: выбор места, крепление, подключение водяного контура, пусконаладка.',
  alternates: { canonical: 'https://shuft.online/blog/ustanovka-fankoila-v-ofise/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Установка фанкойла Shuft в офисе: пошаговая инструкция',
  description: 'Пошаговое руководство по монтажу настенного фанкойла Shuft в офисе: выбор места, крепление, подключение, пусконаладка.',
  datePublished: '2025-12-28T10:00:00+03:00',
  dateModified: '2025-12-28T10:00:00+03:00',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online', logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://shuft.online/blog/ustanovka-fankoila-v-ofise/' },
}

export default function UstanovkaFankoilaPage() {
  const steps = [
    {
      step: 1,
      title: 'Выбор места установки',
      desc: 'Фанкойл крепится на несущую стену. Расстояние от потолка — не менее 15 см, от боковых стен — не менее 20 см. Удобный доступ к трубам и слив конденсата — обязательны.',
      tips: ['Не устанавливать напротив сквозняков', 'Избегать прямых солнечных лучей на датчик температуры', 'Учитывайте длину подводящих труб — чем короче, тем лучше'],
    },
    {
      step: 2,
      title: 'Монтаж крепёжной планки',
      desc: 'На стену вешается монтажная планка. Она идёт в комплекте. Горизонтальность проверяйте уровнем. Крепёж: дюбели 8×60 мм (в кирпич или бетон), расстояние 400 мм.',
      tips: ['Планка должна выдержать вес 20–25 кг с динамической нагрузкой', 'Для гипсокартона — обязательно в профиль или анкерные болты'],
    },
    {
      step: 3,
      title: 'Прокладка трубопровода',
      desc: 'Трубы водяного контура диаметром ½ дюйма (подача) и ½ дюйма (обратка) прокладываются от чиллера к фанкойлу. Обязательна теплоизоляция труб 9 мм минимум.',
      tips: ['Уклон труб не критичен для водяных систем', 'Краны отсечения — обязательны рядом с каждым фанкойлом', 'Шаровый кран на подаче и обратке — для удобства обслуживания'],
    },
    {
      step: 4,
      title: 'Навеска и подключение фанкойла',
      desc: 'Фанкойл навешивается на планку. Подключаются шланги водяного контура через гибкие вставки. Подключается дренажная трубка диаметром 16 мм.',
      tips: ['Гибкие подводки снимают вибрацию', 'Момент затяжки фитингов — не более 25 Нм', 'Дренаж — самотёком или через кондиционерный насос'],
    },
    {
      step: 5,
      title: 'Электрическое подключение',
      desc: 'Питание 220В / 10А через автоматический выключатель. Отдельный кабель 3×1.5 мм² от щитка. Подключается пульт управления или термостат.',
      tips: ['Отдельный автомат на каждый фанкойл', 'УЗО 30 мА обязательно для влажных помещений', 'Экранированный кабель управления для термостата'],
    },
    {
      step: 6,
      title: 'Гидравлическое испытание',
      desc: 'Перед пуском система заполняется водой и испытывается давлением 6–8 бар в течение 30 минут. Проверяются все соединения на течь.',
      tips: ['Используйте воду без хлора или дистиллированную', 'Добавьте антифриз при риске замерзания', 'Проверьте манометр — давление не должно падать'],
    },
    {
      step: 7,
      title: 'Пусконаладка и проверка',
      desc: 'Включается чиллер, затем фанкойлы. Проверяется работа на всех скоростях вентилятора, корректность показаний термостата, слив конденсата.',
      tips: ['Температура подачи чиллера +7°C ± 1°C', 'Воздушный поток должен быть равномерным', 'Шум — не выше заявленного + 2 дБА'],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Блог', href: '/blog' },
        { name: 'Установка фанкойла в офисе' },
      ]} />

      <div className="mb-8">
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Монтаж</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Установка фанкойла Shuft в офисе: пошаговая инструкция</h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>28 декабря 2025</span>
          <span>•</span>
          <span>12 мин чтения</span>
          <span>•</span>
          <span>Инженеры Shuft.Online</span>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-8 flex gap-3">
        <div className="text-yellow-500 text-xl flex-shrink-0">⚠️</div>
        <div>
          <div className="font-semibold text-gray-900">Важно</div>
          <p className="text-gray-700 text-sm mt-1">
            Монтаж фанкойлов должен выполняться квалифицированными специалистами.
            Самостоятельная установка может привести к потере гарантии и протечкам.
            Наши мастера приедут и установят за 1–3 дня.{' '}
            <Link href="/services/montazh-fankoilov" className="text-blue-600 hover:underline">Подробнее об услуге монтажа →</Link>
          </p>
        </div>
      </div>

      <article>
        <p className="text-gray-700 text-lg mb-8">
          Данная инструкция описывает монтаж настенного фанкойла Shuft серии SFH в рамках
          системы чиллер-фанкойл. Каждый шаг проверен нашими инженерами на более чем 150 объектах.
        </p>

        <div className="space-y-6 mb-10">
          {steps.map((item) => (
            <div key={item.step} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 bg-gray-50 p-5 border-b border-gray-100">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <h2 className="font-bold text-xl text-gray-900">{item.title}</h2>
              </div>
              <div className="p-5">
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-sm font-semibold text-blue-700 mb-2">Советы специалиста:</div>
                  <ul className="space-y-1">
                    {item.tips.map((tip, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-400 mt-0.5">→</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Типичные ошибки при монтаже</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { error: 'Не изолированы трубы', consequence: 'Конденсат на трубах, потёки на потолке, плесень' },
            { error: 'Нет шаровых кранов', consequence: 'Нельзя отключить один фанкойл без слива всей системы' },
            { error: 'Слабое крепление планки', consequence: 'Вибрация, шум, риск падения фанкойла' },
            { error: 'Неправильный слив конденсата', consequence: 'Перелив, затопление потолка или пола' },
            { error: 'Нет воздухоотводчиков', consequence: 'Воздушные пробки, плохая теплоотдача, шум в трубах' },
            { error: 'Общий автомат на несколько фанкойлов', consequence: 'Частые отключения, риск перегрузки' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
              <span className="text-red-500 text-lg flex-shrink-0">✗</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.error}</div>
                <div className="text-red-700 text-xs mt-1">→ {item.consequence}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Стоимость монтажа фанкойла Shuft</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Работа</th>
                <th className="p-3 text-left">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Монтаж настенного фанкойла', '5 000 – 7 000 ₽'],
                ['Монтаж кассетного фанкойла', '8 000 – 12 000 ₽'],
                ['Монтаж канального фанкойла', '10 000 – 15 000 ₽'],
                ['Прокладка трубопровода (п/м)', '400 – 600 ₽'],
                ['Гидравлическое испытание системы', '3 000 – 5 000 ₽'],
                ['Пусконаладочные работы', '2 000 – 4 000 ₽'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 border border-gray-200">{row[0]}</td>
                  <td className="p-3 border border-gray-200 font-semibold text-blue-600">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">Заказать профессиональный монтаж</h3>
          <p className="text-gray-700 mb-4">
            Наши лицензированные специалисты установят фанкойл за 1–3 дня. Гарантия на работы.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/montazh-fankoilov" className="btn-primary">Подробнее о монтаже</Link>
            <a href="tel:+74951203375" className="btn-secondary">📞 +7 (495) 120-33-75</a>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t pt-8">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Читайте также</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/blog/kak-vybrat-fankoil', title: 'Как выбрать фанкойл Shuft для офиса' },
            { href: '/blog/chiller-fankoil-sistema', title: 'Система чиллер-фанкойл: как это работает' },
            { href: '/services/montazh-fankoilov', title: 'Услуга монтажа фанкойлов Shuft' },
            { href: '/catalog/fankoily/nastennye', title: 'Настенные фанкойлы Shuft — каталог' },
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
