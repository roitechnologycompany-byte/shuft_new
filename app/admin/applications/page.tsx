'use client'

import { useEffect, useState } from 'react'

interface Application {
  id: number
  name: string
  phone: string
  email: string | null
  address: string | null
  roomType: string | null
  area: string | null
  message: string | null
  source: string
  status: string
  adminNote: string | null
  createdAt: string
}

const statusOptions = [
  { value: 'new', label: 'Новая', color: '#0066CC' },
  { value: 'in_progress', label: 'В работе', color: '#FFC107' },
  { value: 'done', label: 'Выполнена', color: '#28A745' },
  { value: 'cancelled', label: 'Отменена', color: '#DC3545' },
]

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Application | null>(null)
  const [noteText, setNoteText] = useState('')
  const [newStatus, setNewStatus] = useState('')

  function load() {
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), limit: '20' })
    if (statusFilter) params.set('status', statusFilter)
    fetch('/api/admin/applications?' + params)
      .then(r => r.json())
      .then(d => { setApps(d.applications); setTotal(d.total); setLoading(false) })
  }

  useEffect(() => { load() }, [page, statusFilter])

  function openApp(app: Application) {
    setSelected(app)
    setNewStatus(app.status)
    setNoteText(app.adminNote || '')
  }

  async function saveStatus() {
    if (!selected) return
    const res = await fetch(`/api/admin/applications/${selected.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus, adminNote: noteText }),
    })
    if (res.ok) {
      setSelected(null)
      load()
    }
  }

  function exportCSV() {
    const params = new URLSearchParams({ format: 'csv' })
    if (statusFilter) params.set('status', statusFilter)
    window.open('/api/admin/applications?' + params)
  }

  const statusMap = Object.fromEntries(statusOptions.map(s => [s.value, s]))

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Заявки <span style={{ color: '#999', fontSize: '16px' }}>({total})</span></h1>
        <button onClick={exportCSV} style={{ background: '#28A745', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}>
          Экспорт CSV
        </button>
      </div>

      {/* Фильтры статусов */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <button onClick={() => { setStatusFilter(''); setPage(1) }} style={{ padding: '6px 14px', border: '1px solid #ddd', background: !statusFilter ? '#0066CC' : '#fff', color: !statusFilter ? '#fff' : '#333', borderRadius: '20px', cursor: 'pointer', fontSize: '13px' }}>
          Все
        </button>
        {statusOptions.map(s => (
          <button key={s.value} onClick={() => { setStatusFilter(s.value); setPage(1) }}
            style={{ padding: '6px 14px', border: `1px solid ${s.color}`, background: statusFilter === s.value ? s.color : '#fff', color: statusFilter === s.value ? '#fff' : s.color, borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Загрузка...</div>
        ) : apps.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Заявок нет</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                {['#', 'Имя', 'Телефон', 'Email', 'Помещение', 'Источник', 'Статус', 'Дата', 'Действия'].map(h => (
                  <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {apps.map(app => {
                const st = statusMap[app.status]
                return (
                  <tr key={app.id} style={{ borderTop: '1px solid #f0f0f0', cursor: 'pointer' }} onClick={() => openApp(app)}>
                    <td style={{ padding: '10px 14px', color: '#999', fontSize: '12px' }}>#{app.id}</td>
                    <td style={{ padding: '10px 14px', fontWeight: 600 }}>{app.name}</td>
                    <td style={{ padding: '10px 14px' }}>{app.phone}</td>
                    <td style={{ padding: '10px 14px', color: '#666', fontSize: '12px' }}>{app.email || '—'}</td>
                    <td style={{ padding: '10px 14px', color: '#666' }}>{app.roomType || '—'}</td>
                    <td style={{ padding: '10px 14px', color: '#999', fontSize: '12px' }}>{app.source}</td>
                    <td style={{ padding: '10px 14px' }}>
                      {st && <span style={{ background: st.color + '20', color: st.color, padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{st.label}</span>}
                    </td>
                    <td style={{ padding: '10px 14px', color: '#999', fontSize: '12px', whiteSpace: 'nowrap' }}>
                      {new Date(app.createdAt).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td style={{ padding: '10px 14px' }}>
                      <button onClick={e => { e.stopPropagation(); openApp(app) }} style={{ color: '#0066CC', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>Открыть</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Пагинация */}
      {total > 20 && (
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
          {Array.from({ length: Math.ceil(total / 20) }, (_, i) => i + 1).map(p => (
            <button key={p} onClick={() => setPage(p)} style={{ padding: '6px 12px', background: p === page ? '#0066CC' : '#fff', color: p === page ? '#fff' : '#333', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>{p}</button>
          ))}
        </div>
      )}

      {/* Модальное окно */}
      {selected && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', borderRadius: '8px', width: '100%', maxWidth: '560px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 700, fontSize: '16px' }}>Заявка #{selected.id}</span>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#999' }}>✕</button>
            </div>
            <div style={{ padding: '20px', fontSize: '14px', lineHeight: 1.7 }}>
              {[
                ['Имя', selected.name], ['Телефон', selected.phone], ['Email', selected.email],
                ['Адрес', selected.address], ['Тип помещения', selected.roomType], ['Площадь', selected.area ? selected.area + ' м²' : null],
                ['Сообщение', selected.message], ['Источник', selected.source],
              ].map(([k, v]) => v ? (
                <div key={k as string} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ color: '#666', minWidth: '140px' }}>{k}:</span>
                  <span style={{ fontWeight: 500 }}>{v as string}</span>
                </div>
              ) : null)}
            </div>
            <div style={{ padding: '0 20px 20px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Статус</label>
                <select value={newStatus} onChange={e => setNewStatus(e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}>
                  {statusOptions.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Заметка менеджера</label>
                <textarea value={noteText} onChange={e => setNoteText(e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', height: '80px', resize: 'none', boxSizing: 'border-box' }} />
              </div>
              <button onClick={saveStatus} style={{ background: '#0066CC', color: '#fff', padding: '10px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', width: '100%' }}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
