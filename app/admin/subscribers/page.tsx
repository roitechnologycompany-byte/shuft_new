'use client'

import { useEffect, useState } from 'react'

interface Subscriber {
  id: number
  email: string
  name: string | null
  createdAt: string
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  function load() {
    setLoading(true)
    fetch('/api/admin/subscribers').then(r => r.json()).then(d => {
      setSubscribers(d.subscribers || [])
      setTotal(d.total || 0)
      setLoading(false)
    })
  }

  useEffect(() => { load() }, [])

  async function handleUnsubscribe(id: number, email: string) {
    if (!confirm(`Отписать ${email}?`)) return
    await fetch('/api/admin/subscribers', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    load()
  }

  function exportCSV() {
    window.open('/api/admin/subscribers?format=csv')
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Подписчики рассылки <span style={{ color: '#999', fontSize: '16px' }}>({total})</span></h1>
        <button onClick={exportCSV} style={{ background: '#28A745', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}>
          Экспорт CSV
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Загрузка...</div> :
          subscribers.length === 0 ? <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Подписчиков пока нет</div> : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                  {['#', 'Email', 'Имя', 'Дата подписки', 'Действия'].map(h => (
                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subscribers.map(s => (
                  <tr key={s.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '10px 16px', color: '#999', fontSize: '12px' }}>{s.id}</td>
                    <td style={{ padding: '10px 16px', fontWeight: 600 }}>{s.email}</td>
                    <td style={{ padding: '10px 16px', color: '#666' }}>{s.name || '—'}</td>
                    <td style={{ padding: '10px 16px', color: '#999', fontSize: '12px' }}>
                      {new Date(s.createdAt).toLocaleDateString('ru-RU')}
                    </td>
                    <td style={{ padding: '10px 16px' }}>
                      <button onClick={() => handleUnsubscribe(s.id, s.email)} style={{ color: '#DC3545', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>
                        Отписать
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>
    </div>
  )
}
