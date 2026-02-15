'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface DashboardData {
  stats: {
    products: number
    applications: number
    newApplications: number
    blog: number
    faq: number
    projects: number
    reviews: number
    pendingReviews: number
  }
  recentApplications: Array<{
    id: number
    name: string
    phone: string
    roomType: string | null
    status: string
    createdAt: string
  }>
}

const statusLabel: Record<string, { label: string; color: string }> = {
  new: { label: 'Новая', color: '#0066CC' },
  in_progress: { label: 'В работе', color: '#FFC107' },
  done: { label: 'Выполнена', color: '#28A745' },
  cancelled: { label: 'Отменена', color: '#DC3545' },
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Загрузка...</div>

  const statCards = [
    { label: 'Товаров', value: data?.stats.products ?? 0, icon: '📦', href: '/admin/products', color: '#0066CC' },
    { label: 'Заявок', value: data?.stats.applications ?? 0, icon: '📋', href: '/admin/applications', color: '#6610f2', badge: data?.stats.newApplications },
    { label: 'Статей блога', value: data?.stats.blog ?? 0, icon: '📝', href: '/admin/blog', color: '#17A2B8' },
    { label: 'FAQ вопросов', value: data?.stats.faq ?? 0, icon: '❓', href: '/admin/faq', color: '#FF6600' },
    { label: 'Проектов', value: data?.stats.projects ?? 0, icon: '🏗️', href: '/admin/projects', color: '#28A745' },
    { label: 'Отзывов', value: data?.stats.reviews ?? 0, icon: '⭐', href: '/admin/reviews', color: '#FFC107', badge: data?.stats.pendingReviews },
  ]

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Roboto, sans-serif' }}>
        Дашборд
      </h1>

      {/* Карточки статистики */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {statCards.map(card => (
          <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              borderLeft: `4px solid ${card.color}`,
              position: 'relative',
              transition: 'box-shadow 0.15s',
              cursor: 'pointer',
            }}>
              {card.badge !== undefined && card.badge > 0 && (
                <span style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: '#DC3545', color: '#fff', borderRadius: '12px',
                  fontSize: '11px', padding: '2px 7px', fontWeight: 700,
                }}>
                  {card.badge} новых
                </span>
              )}
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{card.icon}</div>
              <div style={{ fontSize: '32px', fontWeight: 700, color: card.color, lineHeight: 1, marginBottom: '4px' }}>
                {card.value}
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>{card.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Последние заявки */}
      <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Последние заявки</h2>
          <Link href="/admin/applications" style={{ color: '#0066CC', fontSize: '13px', textDecoration: 'none' }}>
            Все заявки →
          </Link>
        </div>
        {!data?.recentApplications?.length ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#999' }}>Заявок пока нет</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9f9f9', fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>№</th>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>Имя</th>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>Телефон</th>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>Тип помещения</th>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>Статус</th>
                <th style={{ padding: '10px 16px', textAlign: 'left' }}>Дата</th>
              </tr>
            </thead>
            <tbody>
              {data.recentApplications.map(app => {
                const st = statusLabel[app.status] ?? { label: app.status, color: '#666' }
                return (
                  <tr key={app.id} style={{ borderTop: '1px solid #eee', fontSize: '14px' }}>
                    <td style={{ padding: '12px 16px', color: '#999' }}>#{app.id}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>{app.name}</td>
                    <td style={{ padding: '12px 16px' }}>{app.phone}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{app.roomType || '—'}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ background: st.color + '20', color: st.color, padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>
                        {st.label}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#666', fontSize: '12px' }}>
                      {new Date(app.createdAt).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Быстрые действия */}
      <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
        {[
          { href: '/admin/products/new', label: '+ Добавить товар', color: '#0066CC' },
          { href: '/admin/blog/new', label: '+ Написать статью', color: '#17A2B8' },
          { href: '/admin/faq', label: '+ Добавить вопрос FAQ', color: '#FF6600' },
          { href: '/admin/projects/new', label: '+ Добавить проект', color: '#28A745' },
        ].map(action => (
          <Link
            key={action.href}
            href={action.href}
            style={{
              display: 'block',
              padding: '12px 16px',
              background: action.color,
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
