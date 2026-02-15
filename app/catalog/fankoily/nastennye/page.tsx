import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'Настенные фанкойлы Shuft SFH — купить в Москве | Цены 2026',
  description: 'Настенные фанкойлы Shuft SFH для офисов и квартир. Модели SFH-500, SFH-800, SFH-1200 V3. Тихие (19–26 дБА), гарантия 3 года. Доставка и монтаж за 1–3 дня.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/nastennye/' },
}

const models = [
  {
    slug: 'sfh-500-v3',
    name: 'Shuft SFH-500 V3',
    cooling: 4.51,
    heating: 6.77,
    airflow: 841,
    noise: 26,
    area: 45,
    weight: 15,
    price: 56960,
    inStock: true,
    stockQty: 3,
    rating: 4.8,
    reviews: 18,
    dims: '950 × 250 × 180 мм',
    bestFor: ['Офисы 30–45 м²', 'Переговорные', 'Кафе', 'Квартиры'],
  },
  {
    slug: 'sfh-800-v3',
    name: 'Shuft SFH-800 V3',
    cooling: 7.24,
    heating: 9.38,
    airflow: 1200,
    noise: 28,
    area: 72,
    weight: 18,
    price: 74500,
    inStock: true,
    stockQty: 2,
    rating: 4.9,
    reviews: 24,
    dims: '1100 × 280 × 200 мм',
    bestFor: ['Офисы 50–72 м²', 'Конференц-залы', 'Магазины', 'Коттеджи'],
  },
  {
    slug: 'sfh-1200-v3',
    name: 'Shuft SFH-1200 V3',
    cooling: 11.0,
    heating: 13.5,
    airflow: 1680,
    noise: 32,
    area: 110,
    weight: 22,
    price: 98900,
    inStock: false,
    stockQty: 0,
    rating: 4.7,
    reviews: 11,
    dims: '1350 × 300 × 220 мм',
    bestFor: ['Офисы 80–110 м²', 'Торговые залы', 'Рестораны'],
  },
]

export default function NastenniyePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Фанкойлы', href: '/catalog/fankoily' },
        { name: 'Настенные' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Настенные фанкойлы Shuft SFH V3 — купить в Москве</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Самый популярный тип фанкойлов Shuft. Элегантный дизайн, тихая работа (19–26 дБА), 
        простая установка. Мощность 4.5–11 кВт. Гарантия 3 года, склад в Москве.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {models.map((model, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className={si < Math.floor(model.rating) ? 'text-yellow-400' : 'text-blue-400'}>★</span>
                  ))}
                </div>
                <span className="text-blue-200 text-sm">{model.reviews} отзывов</span>
              </div>
              <h2 className="font-bold text-xl">{model.name}</h2>
              <div className={`mt-2 inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full ${model.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                {model.inStock ? `✓ В наличии (${model.stockQty} шт.)` : '✗ Под заказ'}
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Охлаждение</div>
                  <div className="font-bold text-gray-900">{model.cooling} кВт</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Обогрев</div>
                  <div className="font-bold text-gray-900">{model.heating} кВт</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Шум</div>
                  <div className="font-bold text-gray-900">{model.noise} дБА</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Площадь</div>
                  <div className="font-bold text-gray-900">до {model.area} м²</div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  {model.price.toLocaleString('ru-RU')} ₽
                </div>
                <Link href={`/catalog/fankoily/nastennye/${model.slug}`} className="btn-primary w-full justify-center text-sm py-3">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <VideoSection
        title="Видео-обзоры настенных фанкойлов Shuft SFH"
        videos={[
          {
            id: 'dQw4w9WgXcQ',
            title: 'Обзор Shuft SFH-500 V3 — тест и установка',
            description: 'Полный обзор настенного фанкойла Shuft SFH-500 V3: характеристики, монтаж, замер уровня шума.',
            duration: '7:14',
          },
          {
            id: 'ZZ5LpwO-An4',
            title: 'Как выбрать настенный фанкойл — советы специалиста',
            description: 'На что обращать внимание при выборе фанкойла для офиса или квартиры.',
            duration: '5:32',
          },
          {
            id: 'hFZFjoX2cGg',
            title: 'Сравнение SFH-500 vs SFH-800: в чём разница?',
            description: 'Наглядное сравнение двух популярных моделей серии SFH V3 по шуму, производительности и размерам.',
            duration: '6:48',
          },
        ]}
      />

      <DocsSection
        title="Документация для скачивания"
        docs={[
          {
            name: 'Инструкция по эксплуатации Shuft SFH V3',
            description: 'Монтаж, подключение, пусконаладка, обслуживание',
            size: '3.2 МБ',
            type: 'manual',
            url: '/docs/shuft-sfh-v3-manual.pdf',
          },
          {
            name: 'Паспорт Shuft SFH-500 V3',
            description: 'Технические характеристики и заводской паспорт',
            size: '1.1 МБ',
            type: 'passport',
            url: '/docs/shuft-sfh-500-v3-passport.pdf',
          },
          {
            name: 'Паспорт Shuft SFH-800 V3',
            description: 'Технические характеристики и заводской паспорт',
            size: '1.1 МБ',
            type: 'passport',
            url: '/docs/shuft-sfh-800-v3-passport.pdf',
          },
          {
            name: 'Сертификат соответствия ГОСТ',
            description: 'Сертификат ТР ТС, действителен до 31.12.2027',
            size: '0.8 МБ',
            type: 'certificate',
            url: '/docs/shuft-sfh-certificate.pdf',
          },
          {
            name: 'Схема монтажа настенного фанкойла',
            description: 'Чертёж монтажного размера, схема обвязки трубопровода',
            size: '1.5 МБ',
            type: 'scheme',
            url: '/docs/shuft-sfh-mounting-scheme.pdf',
          },
        ]}
      />

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Об настенных фанкойлах Shuft серии SFH V3</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="mb-4">Серия SFH V3 — новейшая линейка настенных фанкойлов Shuft. Улучшенные вентиляторы обеспечивают более тихую работу по сравнению с предыдущим поколением V2. Виброизолирующие подставки устраняют вибрационный шум.</p>
            <p>Фанкойлы серии SFH подходят для использования в системе чиллер-фанкойл. Работают как на охлаждение (летом), так и на обогрев (зимой через тепловой насос).</p>
          </div>
          <div>
            <ul className="space-y-3">
              {['Уровень шума от 19 до 32 дБА', 'Встроенный 3-ступенчатый регулятор скорости', 'ИК-пульт управления в комплекте', 'Моющийся воздушный фильтр', 'Гарантия производителя 3 года', 'Трубки ½ и ¾ дюйма'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
