import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import VideoSection from '@/components/VideoSection'
import DocsSection from '@/components/DocsSection'

export const metadata: Metadata = {
  title: 'Напольно-потолочные фанкойлы Shuft SFF — купить в Москве',
  description: 'Универсальные напольно-потолочные фанкойлы Shuft. Гибкая установка, мощность 1.6–3.5 кВт. Для офисов 20–50 м². Гарантия 3 года.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/' },
}

const models = [
  { name: 'Shuft SFF-150', cooling: 1.6, heating: 2.4, airflow: 380, noise: 22, area: 16, price: 43930, inStock: true },
  { name: 'Shuft SFF-300', cooling: 2.8, heating: 4.2, airflow: 620, noise: 25, area: 28, price: 54800, inStock: true },
  { name: 'Shuft SFF-400', cooling: 3.5, heating: 5.2, airflow: 780, noise: 27, area: 35, price: 58200, inStock: true },
  { name: 'Shuft SFF-600', cooling: 5.8, heating: 8.2, airflow: 1100, noise: 30, area: 58, price: 76500, inStock: false },
]

export default function NapolnoPotolochnyePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Фанкойлы', href: '/catalog/fankoily' },
        { name: 'Напольно-потолочные' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Напольно-потолочные фанкойлы Shuft SFF</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Универсальный тип фанкойла — монтируется вертикально на пол или горизонтально к потолку.
        Не требует подвесного потолка или специальных воздуховодов. Идеален для помещений 16–58 м².
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {models.map((model, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl">
              <h2 className="font-bold text-xl">{model.name}</h2>
              <span className={`mt-2 inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full ${model.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                {model.inStock ? '✓ В наличии' : '✗ Под заказ'}
              </span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Охлаждение</div>
                  <div className="font-bold">{model.cooling} кВт</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Обогрев</div>
                  <div className="font-bold">{model.heating} кВт</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Шум</div>
                  <div className="font-bold">{model.noise} дБА</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs">Площадь</div>
                  <div className="font-bold">до {model.area} м²</div>
                </div>
              </div>
              <div className="border-t pt-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">{model.price.toLocaleString('ru-RU')} ₽</div>
                <a href="tel:+74951203375" className="btn-primary py-2 px-4 text-sm">Заказать</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <VideoSection
        title="Видео-обзоры напольно-потолочных фанкойлов Shuft"
        videos={[
          {
            id: 'hFZFjoX2cGg',
            title: 'Обзор Shuft SFF-400 — напольно-потолочный фанкойл',
            description: 'Два режима монтажа: напольный и потолочный. Обзор возможностей и характеристик модели SFF-400.',
            duration: '7:44',
          },
        ]}
      />

      <DocsSection
        title="Документация для скачивания"
        docs={[
          {
            name: 'Инструкция по эксплуатации Shuft SFF-серия',
            description: 'Монтаж в напольном и потолочном исполнении, подключение',
            size: '3.5 МБ',
            type: 'manual',
            url: '/docs/shuft-sff-floor-manual.pdf',
          },
          {
            name: 'Паспорт Shuft SFF-200',
            description: 'Технические характеристики и заводской паспорт',
            size: '1.0 МБ',
            type: 'passport',
            url: '/docs/shuft-sff-200-passport.pdf',
          },
          {
            name: 'Паспорт Shuft SFF-400',
            description: 'Технические характеристики и заводской паспорт',
            size: '1.0 МБ',
            type: 'passport',
            url: '/docs/shuft-sff-400-passport.pdf',
          },
          {
            name: 'Сертификат соответствия — напольно-потолочные',
            description: 'Сертификат ТР ТС, действителен до 31.12.2027',
            size: '0.8 МБ',
            type: 'certificate',
            url: '/docs/shuft-sff-floor-certificate.pdf',
          },
        ]}
      />
    </div>
  )
}
