'use client'
import Link from 'next/link'
import { useState } from 'react'

const catalogMenu = [
  {
    title: 'Фанкойлы',
    href: '/catalog/fankoily',
    items: [
      { name: 'Кассетные', href: '/catalog/fankoily/kassetnye' },
      { name: 'Канальные', href: '/catalog/fankoily/kanalnye' },
      { name: 'Настенные', href: '/catalog/fankoily/nastennye' },
      { name: 'Напольно-потолочные', href: '/catalog/fankoily/napolno-potolochnye' },
    ]
  },
  { title: 'Чиллеры', href: '/catalog/chillery' },
  { title: 'Вентиляция', href: '/catalog/ventilyaciya' },
  { title: 'VRF-системы', href: '/catalog/vrf-sistemy' },
  { title: 'Аксессуары', href: '/catalog/aksessuary' },
]

const servicesMenu = [
  { name: 'Подбор оборудования', href: '/services/podbor-oborudovaniya' },
  { name: 'Монтаж фанкойлов', href: '/services/montazh-fankoilov' },
  { name: 'Проектирование VRF', href: '/services/proektirovanie-vrf' },
  { name: 'Сервис и ремонт', href: '/services/servis-i-remont' },
]

const blogMenu = [
  { name: 'Как выбрать фанкойл', href: '/blog/kak-vybrat-fankoil' },
  { name: 'Shuft vs Carrier vs Daikin', href: '/blog/shuft-vs-carrier-daikin' },
  { name: 'Система чиллер-фанкойл', href: '/blog/chiller-fankoil-sistema' },
  { name: 'История бренда Shuft', href: '/blog/istoriya-brenda-shuft' },
]

const aboutMenu = [
  { name: 'О бренде Shuft', href: '/about/o-brende-shuft' },
  { name: 'Сертификаты', href: '/about/sertifikaty' },
  { name: 'Наша команда', href: '/about/nasha-komanda' },
  { name: 'Гарантии', href: '/about/garantii' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="hidden md:block">Официальный дилер Shuft в Москве</span>
          <div className="flex items-center gap-6">
            <a href="mailto:info@shuft.online" className="hover:text-blue-300 transition-colors">info@shuft.online</a>
            <a href="tel:+74951203375" className="font-semibold hover:text-blue-300 transition-colors">+7 (495) 120-33-75</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-bold text-xl px-3 py-1 rounded">S</div>
            <div>
              <div className="font-bold text-xl text-blue-600 leading-tight">Shuft.Online</div>
              <div className="text-xs text-gray-500 leading-tight">Официальный дилер</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Каталог */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setOpenMenu('catalog')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                Каталог
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === 'catalog' && (
                <div
                  className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-4 min-w-[220px] border border-gray-100"
                  onMouseEnter={() => setOpenMenu('catalog')}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {catalogMenu.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded font-medium"
                      >
                        {item.title}
                      </Link>
                      {item.items && (
                        <div className="ml-3 border-l border-gray-200 pl-3 mb-2">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Услуги */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setOpenMenu('services')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                Услуги
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === 'services' && (
                <div
                  className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-4 min-w-[220px] border border-gray-100"
                  onMouseEnter={() => setOpenMenu('services')}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Проекты
            </Link>

            {/* Блог */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setOpenMenu('blog')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                Блог
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === 'blog' && (
                <div
                  className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-4 min-w-[220px] border border-gray-100"
                  onMouseEnter={() => setOpenMenu('blog')}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {blogMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/faq" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </Link>

            {/* О компании */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setOpenMenu('about')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                О компании
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenu === 'about' && (
                <div
                  className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-4 min-w-[220px] border border-gray-100"
                  onMouseEnter={() => setOpenMenu('about')}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {aboutMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contacts" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Контакты
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+74951203375" className="flex items-center gap-2 text-blue-600 font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (495) 120-33-75
            </a>
            <Link href="/contacts#form" className="btn-accent text-sm py-2">
              Заявка
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-2 max-h-[70vh] overflow-y-auto">
          <div className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-2">Каталог</div>
          {catalogMenu.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
              {item.items && (
                <div className="ml-4 space-y-1">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      — {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="border-t pt-2">
            <div className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-2">Услуги</div>
            {servicesMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t pt-2 space-y-2">
            <Link href="/projects" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Проекты</Link>
            <Link href="/faq" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>О компании</Link>
            <Link href="/contacts" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileOpen(false)}>Контакты</Link>
          </div>
          <div className="border-t pt-4">
            <a href="tel:+74951203375" className="block text-center btn-primary w-full justify-center mb-2">
              +7 (495) 120-33-75
            </a>
            <Link href="/contacts#form" className="block text-center btn-accent w-full justify-center" onClick={() => setMobileOpen(false)}>
              Оставить заявку
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
