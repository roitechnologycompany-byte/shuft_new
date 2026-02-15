'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
  { href: '/admin', label: 'Дашборд', icon: '📊' },
  { href: '/admin/products', label: 'Товары', icon: '📦' },
  { href: '/admin/applications', label: 'Заявки', icon: '📋' },
  { href: '/admin/blog', label: 'Блог', icon: '📝' },
  { href: '/admin/faq', label: 'FAQ', icon: '❓' },
  { href: '/admin/projects', label: 'Проекты', icon: '🏗️' },
  { href: '/admin/reviews', label: 'Отзывы', icon: '⭐' },
  { href: '/admin/subscribers', label: 'Подписчики', icon: '📬' },
  { href: '/admin/settings', label: 'Настройки', icon: '⚙️' },
]

export default function AdminSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Не показываем сайдбар на странице логина
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  async function handleLogout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Сайдбар */}
      <aside style={{
        width: sidebarOpen ? '240px' : '60px',
        background: '#1A1A1A',
        color: '#fff',
        flexShrink: 0,
        transition: 'width 0.2s',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 100,
        overflow: 'hidden',
      }}>
        {/* Лого */}
        <div style={{ padding: '16px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '18px', lineHeight: 1 }}
          >
            ☰
          </button>
          {sidebarOpen && (
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0066CC', whiteSpace: 'nowrap' }}>Shuft.Online</span>
          )}
        </div>

        {/* Навигация */}
        <nav style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
          {navItems.map(item => {
            const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: sidebarOpen ? '10px 16px' : '10px',
                  justifyContent: sidebarOpen ? 'flex-start' : 'center',
                  background: active ? '#0066CC' : 'transparent',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  borderRadius: '4px',
                  margin: '2px 8px',
                  transition: 'background 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.icon}</span>
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Ссылка на сайт */}
        {sidebarOpen && (
          <div style={{ padding: '8px 16px', borderTop: '1px solid #333' }}>
            <a href="/" target="_blank" style={{ color: '#aaa', fontSize: '12px', textDecoration: 'none' }}>
              ↗ Открыть сайт
            </a>
          </div>
        )}

        {/* Кнопка выхода */}
        <div style={{ padding: '12px 8px', borderTop: '1px solid #333' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: sidebarOpen ? '8px 12px' : '8px',
              background: 'none',
              border: '1px solid #444',
              color: '#aaa',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: sidebarOpen ? 'flex-start' : 'center',
              gap: '6px',
            }}
          >
            <span>🚪</span>
            {sidebarOpen && <span>Выйти</span>}
          </button>
        </div>
      </aside>

      {/* Основной контент */}
      <main style={{
        flex: 1,
        marginLeft: sidebarOpen ? '240px' : '60px',
        transition: 'margin-left 0.2s',
        minHeight: '100vh',
        background: '#F5F5F5',
      }}>
        {children}
      </main>
    </div>
  )
}
