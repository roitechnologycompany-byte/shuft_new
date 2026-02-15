import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Контакты — Shuft.Online | Официальный дилер Shuft в Москве',
  description: 'Адрес: пл. Спартаковская, д. 14, стр. 3, Москва. Телефон: +7 (495) 120-33-75. Официальный дилер Shuft — фанкойлы, чиллеры, VRF-системы.',
  alternates: { canonical: 'https://shuft.online/contacts/' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shuft.Online — Официальный дилер Shuft',
  legalName: 'ООО АСПРОМСИСТЕМ',
  url: 'https://shuft.online',
  telephone: '+7-495-120-33-75',
  email: 'info@shuft.online',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'пл. Спартаковская, д. 14, стр. 3, помещ. 3Н',
    addressLocality: 'Москва',
    postalCode: '105082',
    addressCountry: 'RU',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '55.7723', longitude: '37.6794' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '₽₽',
}

export default function ContactsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Контакты' }]} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты официального дилера Shuft в Москве</h1>
        <p className="text-gray-600 text-lg mb-10">
          Мы находимся в центре Москвы. Приезжайте в шоурум, чтобы посмотреть образцы фанкойлов Shuft.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">пл. Спартаковская, д. 14, стр. 3, пом. 3Н</p>
              <p className="text-gray-600">Москва, 105082</p>
              <p className="text-gray-500 text-sm mt-2">5 мин от м. Красносельская</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Телефон</h3>
              <a href="tel:+74951203375" className="text-blue-600 font-bold text-xl hover:text-blue-800">
                +7 (495) 120-33-75
              </a>
              <p className="text-gray-500 text-sm mt-2">Пн–Сб, 10:00–20:00</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@shuft.online" className="text-blue-600 hover:text-blue-800">
                info@shuft.online
              </a>
              <p className="text-gray-500 text-sm mt-2">Ответим в течение часа</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="font-bold text-gray-900 mb-2">Режим работы</h3>
              <p className="text-gray-700">Пн–Пт: 9:00–18:00</p>
              <p className="text-gray-500 text-sm mt-1">Технический отдел 24/7</p>
            </div>
          </div>

          {/* Map — Yandex Maps embed */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden h-96 shadow-md relative">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.679400%2C55.772300&z=16&pt=37.679400%2C55.772300,pmwtm1&text=%D0%BF%D0%BB.%20%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C%20%D0%B4.%2014%2C%20%D1%81%D1%82%D1%80.%203&lang=ru_RU"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Офис Shuft.Online на Яндекс.Картах"
                style={{ border: 0 }}
              />
            </div>
            <div className="mt-3 flex gap-4 text-sm text-gray-600">
              <span>📍 5 мин от м. Красносельская (МЦК)</span>
              <a
                href="https://yandex.ru/maps/?pt=37.679400,55.772300&z=16&l=map"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Открыть на Яндекс.Картах →
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div id="form" className="bg-gray-50 rounded-3xl p-8">
          <ContactForm />
        </div>
      </div>
    </>
  )
}
