'use client'

import { useEffect, useState } from 'react'

interface Review {
  id: number
  name: string
  company: string | null
  city: string | null
  rating: number
  text: string
  isApproved: boolean
  product: { name: string } | null
  createdAt: string
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  function load() {
    setLoading(true)
    fetch('/api/admin/reviews').then(r => r.json()).then(d => { setReviews(d); setLoading(false) })
  }
  useEffect(() => { load() }, [])

  async function toggleApprove(r: Review) {
    await fetch(`/api/admin/reviews/${r.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...r, isApproved: !r.isApproved }),
    })
    load()
  }

  async function handleDelete(id: number) {
    if (!confirm('Удалить отзыв?')) return
    await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>
          Отзывы <span style={{ color: '#999', fontSize: '16px' }}>({reviews.length})</span>
        </h1>
        <div style={{ fontSize: '13px', color: '#666' }}>
          {reviews.filter(r => !r.isApproved).length} ожидают модерации
        </div>
      </div>

      {loading ? <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Загрузка...</div> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {reviews.map(r => (
            <div key={r.id} style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: '16px 20px', borderLeft: `4px solid ${r.isApproved ? '#28A745' : '#FFC107'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '14px' }}>{r.name}</span>
                  {r.company && <span style={{ color: '#666', fontSize: '13px', marginLeft: '8px' }}>{r.company}</span>}
                  {r.city && <span style={{ color: '#999', fontSize: '12px', marginLeft: '6px' }}>• {r.city}</span>}
                  <div style={{ marginTop: '2px', fontSize: '13px', color: '#FF6600' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {!r.isApproved && <span style={{ background: '#FFF3CD', color: '#856404', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>На модерации</span>}
                  {r.product && <span style={{ background: '#E8F4FD', color: '#0066CC', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>{r.product.name}</span>}
                  <span style={{ fontSize: '12px', color: '#999' }}>{new Date(r.createdAt).toLocaleDateString('ru-RU')}</span>
                </div>
              </div>
              <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#444', lineHeight: 1.5 }}>{r.text}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => toggleApprove(r)} style={{ padding: '5px 14px', background: r.isApproved ? '#f0f0f0' : '#28A745', color: r.isApproved ? '#666' : '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
                  {r.isApproved ? 'Скрыть' : '✓ Одобрить'}
                </button>
                <button onClick={() => handleDelete(r.id)} style={{ padding: '5px 14px', background: 'none', border: '1px solid #DC3545', color: '#DC3545', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>
                  Удалить
                </button>
              </div>
            </div>
          ))}
          {reviews.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Отзывов нет</div>}
        </div>
      )}
    </div>
  )
}
