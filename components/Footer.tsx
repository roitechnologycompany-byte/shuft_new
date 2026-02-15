import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white font-bold text-xl px-3 py-1 rounded">S</div>
              <div>
                <div className="font-bold text-xl text-white leading-tight">Shuft.Online</div>
                <div className="text-xs text-gray-400 leading-tight">Официальный дилер</div>
              </div>
            </div>
            <p className="text-sm mb-4 text-gray-400 leading-relaxed">
              ООО «АСПРОМСИСТЕМ» — официальный дилер климатической техники Shuft в Москве.
              Продажа, монтаж и сервис фанкойлов, чиллеров и VRF-систем.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>пл. Спартаковская, д. 14, стр. 3, пом. 3Н, Москва, 105082</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+74951203375" className="hover:text-white transition-colors">+7 (495) 120-33-75</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@shuft.online" className="hover:text-white transition-colors">info@shuft.online</a>
              </div>
              <div className="text-gray-400 text-sm">Пн–Пт, 9:00–18:00</div>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-bold text-white mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalog/fankoily" className="hover:text-white transition-colors">Все фанкойлы</Link></li>
              <li><Link href="/catalog/fankoily/kassetnye" className="hover:text-white transition-colors">— Кассетные</Link></li>
              <li><Link href="/catalog/fankoily/kanalnye" className="hover:text-white transition-colors">— Канальные</Link></li>
              <li><Link href="/catalog/fankoily/nastennye" className="hover:text-white transition-colors">— Настенные</Link></li>
              <li><Link href="/catalog/fankoily/napolno-potolochnye" className="hover:text-white transition-colors">— Напольно-потолочные</Link></li>
              <li><Link href="/catalog/chillery" className="hover:text-white transition-colors">Чиллеры</Link></li>
              <li><Link href="/catalog/vrf-sistemy" className="hover:text-white transition-colors">VRF-системы</Link></li>
              <li><Link href="/catalog/ventilyaciya" className="hover:text-white transition-colors">Вентиляция</Link></li>
              <li><Link href="/catalog/aksessuary" className="hover:text-white transition-colors">Аксессуары</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/podbor-oborudovaniya" className="hover:text-white transition-colors">Подбор оборудования</Link></li>
              <li><Link href="/services/montazh-fankoilov" className="hover:text-white transition-colors">Монтаж фанкойлов</Link></li>
              <li><Link href="/services/proektirovanie-vrf" className="hover:text-white transition-colors">Проектирование VRF</Link></li>
              <li><Link href="/services/servis-i-remont" className="hover:text-white transition-colors">Сервис и ремонт</Link></li>
              <li><Link href="/services/tehpodderzhka" className="hover:text-white transition-colors">Техподдержка 24/7</Link></li>
              <li><Link href="/calc/fankoil" className="hover:text-white transition-colors">Калькулятор подбора</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link href="/about/o-brende-shuft" className="hover:text-white transition-colors">О бренде Shuft</Link></li>
              <li><Link href="/about/garantii" className="hover:text-white transition-colors">Гарантийные условия</Link></li>
              <li><Link href="/about/sertifikaty" className="hover:text-white transition-colors">Сертификаты</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Реализованные проекты</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Блог</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Конфиденциальность</Link></li>
              <li><Link href="/offer" className="hover:text-white transition-colors">Публичная оферта</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Возврат и обмен</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-500">
              <p>© 2024–2026 shuft.online | ООО «АСПРОМСИСТЕМ»</p>
              <p className="mt-1">ИНН: 9729019077 | КПП: 770901001 | ОГРН: 1167746725662</p>
            </div>
            <div className="text-sm text-gray-500 md:text-right">
              <p>Банк: ПАО «Сбербанк» | БИК: 044525225</p>
              <p>Р/с: 40702810038000120661</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
