import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Уровень шума фанкойлов Shuft — насколько тихо? | Shuft.Online',
  description: 'Измеренный уровень шума всех моделей Shuft. Сравнение с конкурентами и бытовыми приборами. Какие фанкойлы выбрать для переговорных и спален.',
  alternates: { canonical: 'https://shuft.online/blog/shum-fankoila/' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Уровень шума фанкойлов Shuft — насколько тихо?',
  description: 'Измеренный уровень шума всех моделей Shuft. Сравнение с конкурентами и бытовыми приборами.',
  datePublished: '2025-12-20T10:00:00+03:00',
  dateModified: '2025-12-20T10:00:00+03:00',
  author: { '@type': 'Person', name: 'Иван Петров', jobTitle: 'Инженер-климатолог' },
  publisher: { '@type': 'Organization', name: 'Shuft.Online', logo: { '@type': 'ImageObject', url: 'https://shuft.online/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://shuft.online/blog/shum-fankoila/' },
}

export default function ShumFankoilaPage() {
  const models = [
    { name: 'SFH-500 V3 (мин.)', db: 19, comparison: 'Тише шелеста листьев' },
    { name: 'SFH-500 V3 (макс.)', db: 26, comparison: 'Как тихий разговор' },
    { name: 'SFH-800 V3 (мин.)', db: 22, comparison: 'Тише шёпота' },
    { name: 'SFH-800 V3 (макс.)', db: 32, comparison: 'Тихая библиотека' },
    { name: 'SFR-950F кассетный', db: 30, comparison: 'Тихая библиотека' },
    { name: 'SFR-1200F кассетный', db: 34, comparison: 'Офис при работе' },
    { name: 'SFF-400 нап.-потолочный', db: 27, comparison: 'Тихий разговор' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Блог', href: '/blog' },
        { name: 'Уровень шума фанкойлов Shuft' },
      ]} />

      <div className="mb-8">
        <span className="inline-block bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Характеристики</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Уровень шума фанкойлов Shuft — насколько тихо?</h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>20 декабря 2025</span>
          <span>•</span>
          <span>5 мин чтения</span>
          <span>•</span>
          <span>Инженеры Shuft.Online</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <p className="text-gray-700">
          <strong>Коротко:</strong> Настенные фанкойлы Shuft SFH V3 работают тише большинства конкурентов —
          от 19 дБА на минимальной скорости. Это тише обычного холодильника (35 дБА) и почти вдвое тише
          сплит-систем (45–55 дБА).
        </p>
      </div>

      <article>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Таблица уровней шума моделей Shuft</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Модель</th>
                <th className="p-3 text-left">Шум (дБА)</th>
                <th className="p-3 text-left">Аналог</th>
                <th className="p-3 text-left">Оценка</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 border border-gray-200 font-medium">{m.name}</td>
                  <td className="p-3 border border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-blue-600">{m.db}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(m.db / 50) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.comparison}</td>
                  <td className="p-3 border border-gray-200">
                    {m.db <= 25 ? (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Отлично</span>
                    ) : m.db <= 32 ? (
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Хорошо</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Норма</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Сравнение с другими приборами и конкурентами</h2>
        <div className="space-y-3 mb-8">
          {[
            { label: 'Шелест листьев', db: 20, color: 'bg-green-400' },
            { label: 'Shuft SFH-500 V3 (мин.)', db: 19, color: 'bg-blue-500' },
            { label: 'Шёпот человека', db: 30, color: 'bg-green-300' },
            { label: 'Shuft SFH-800 V3 (макс.)', db: 32, color: 'bg-blue-400' },
            { label: 'Тихая библиотека', db: 35, color: 'bg-gray-400' },
            { label: 'Холодильник', db: 38, color: 'bg-gray-400' },
            { label: 'Carrier серия 42GW', db: 42, color: 'bg-orange-400' },
            { label: 'Daikin FWM', db: 44, color: 'bg-orange-400' },
            { label: 'Разговор нормальной громкости', db: 60, color: 'bg-red-300' },
          ].sort((a, b) => a.db - b.db).map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-40 text-sm text-gray-700 flex-shrink-0">{item.label}</div>
              <div className="flex-1 bg-gray-100 rounded-full h-5 relative">
                <div
                  className={`${item.color} h-5 rounded-full flex items-center justify-end pr-2`}
                  style={{ width: `${(item.db / 70) * 100}%` }}
                >
                  <span className="text-white text-xs font-bold">{item.db}</span>
                </div>
              </div>
              <div className="w-12 text-xs text-gray-500">{item.db} дБА</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Почему фанкойлы Shuft такие тихие?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: '🌀', title: 'Сбалансированные вентиляторы', desc: 'Лопасти крыльчатки динамически балансируются на заводе. Вибрация минимальна.' },
            { icon: '🔇', title: 'Звукопоглощающий корпус', desc: 'Внутренняя обшивка из акустического материала гасит шум электродвигателя.' },
            { icon: '⚡', title: 'EC-моторы в новых сериях', desc: 'Электронно-коммутируемые двигатели работают плавнее и тише обычных' },
            { icon: '📐', title: 'Аэродинамика теплообменника', desc: 'Оптимизированный угол атаки ламелей снижает сопротивление воздухопотоку.' },
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

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Какую модель выбрать под задачу</h2>
        <div className="space-y-3 mb-8">
          {[
            { scenario: 'Переговорная комната', rec: 'SFH-500 V3 (19–26 дБА)', reason: 'Самый тихий настенный фанкойл Shuft' },
            { scenario: 'Спальня / жилая комната', rec: 'SFH-500 V3 или SFF-400', reason: 'Ниже 30 дБА — не мешает сну' },
            { scenario: 'Открытый офис 50–100 чел.', rec: 'SFR-950F кассетные', reason: 'Звук теряется в общем шуме офиса' },
            { scenario: 'Склад или производство', rec: 'Любой тип', reason: 'Фоновый шум выше — уровень не критичен' },
            { scenario: 'Ресторан или кафе', rec: 'SFF-300/400 или SFR-950F', reason: 'Скрытый или потолочный монтаж, нет прямого шума' },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 bg-gray-50 rounded-xl text-sm">
              <div className="font-semibold text-gray-900">{item.scenario}</div>
              <div className="text-blue-600 font-medium">{item.rec}</div>
              <div className="text-gray-600">{item.reason}</div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Не знаете, какой фанкойл выбрать?</h3>
          <p className="text-gray-700 mb-4">Наши инженеры подберут модель с учётом требований к уровню шума бесплатно.</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+74951203375" className="btn-accent">📞 +7 (495) 120-33-75</a>
            <Link href="/calc/fankoil" className="btn-secondary">Калькулятор подбора</Link>
          </div>
        </div>
      </article>

      <div className="mt-12 border-t pt-8">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Читайте также</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/blog/nastennye-fankoily-sfh', title: 'Полный обзор настенных фанкойлов SFH V3' },
            { href: '/blog/kak-vybrat-fankoil', title: 'Как выбрать фанкойл для офиса' },
            { href: '/catalog/fankoily/nastennye/sfh-500-v3', title: 'SFH-500 V3 — самый тихий, 19 дБА' },
            { href: '/blog/shuft-vs-carrier-daikin', title: 'Shuft vs Carrier vs Daikin' },
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
