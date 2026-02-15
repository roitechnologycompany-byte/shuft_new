import type { Metadata } from 'next'
import AdminSidebar from './AdminSidebar'

export const metadata: Metadata = {
  title: 'Админ-панель | Shuft.Online',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, fontFamily: 'Open Sans, sans-serif', background: '#F5F5F5' }}>
        <AdminSidebar>{children}</AdminSidebar>
      </body>
    </html>
  )
}
