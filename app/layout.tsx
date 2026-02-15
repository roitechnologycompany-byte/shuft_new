import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Фанкойлы Shuft в Москве — официальный дилер Shuft.Online',
    template: '%s | Shuft.Online',
  },
  description: 'Официальный дилер Shuft в Москве. Фанкойлы, чиллеры, VRF-системы. Гарантия 3 года, монтаж за 1–3 дня, техподдержка 24/7. Склад в наличии.',
  keywords: ['фанкойлы Shuft', 'купить фанкойл Москва', 'официальный дилер Shuft', 'Shuft Москва', 'кассетный фанкойл', 'настенный фанкойл', 'канальный фанкойл'],
  authors: [{ name: 'Shuft.Online — ООО АСПРОМСИСТЕМ' }],
  creator: 'Shuft.Online',
  publisher: 'Shuft.Online',
  metadataBase: new URL('https://shuft.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Фанкойлы Shuft в Москве — официальный дилер Shuft.Online',
    description: 'Официальный дилер Shuft в Москве. Фанкойлы, чиллеры, VRF-системы. Гарантия 3 года, монтаж за 1–3 дня.',
    url: 'https://shuft.online',
    siteName: 'Shuft.Online',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shuft.Online — Официальный дилер Shuft в Москве',
  legalName: 'ООО АСПРОМСИСТЕМ',
  url: 'https://shuft.online',
  logo: 'https://shuft.online/logo.svg',
  description: 'Продажа и монтаж фанкойлов, чиллеров, VRF-систем Shuft в Москве. Официальный дилер, гарантия 3 года, склад в наличии.',
  telephone: '+7-495-120-33-75',
  email: 'info@shuft.online',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'пл. Спартаковская, д. 14, стр. 3, помещ. 3Н',
    addressLocality: 'Москва',
    addressRegion: 'Москва',
    postalCode: '105082',
    addressCountry: 'RU',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
