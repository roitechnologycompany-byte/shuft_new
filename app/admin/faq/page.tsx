'use client'

import { useEffect, useState } from 'react'

interface FaqItem {
  id: number
  question: string
  answer: string
  category: string
  sortOrder: number
  isActive: boolean
}

const catLabels: Record<string, string> = {
  general: 'Общие', products: 'Товары', delivery: 'Доставка', installation: 'Монтаж', warranty: 'Гарантия'
}

export default function FaqAdminPage() {
  const [items, setItems] = useState<FaqItem[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<FaqItem | null>(null)
  const [isNew, setIsNew] = useState(false)

  function load() {
    setLoading(true)
    fetch('/api/admin/faq').then(r => r.json()).then(d => { setItems(d); setLoading(false) })
  }
  useEffect(() => { load() }, [])

  function openNew() {
    setEditing({ id: 0, question: '', answer: '', category: 'general', sortOrder: 0, isActive: true })
    setIsNew(true)
  }

  function openEdit(item: FaqItem) {
    setEditing({ ...item })
    setIsNew(false)
  }

  async function handleSave() {
    if (!editing) return
    if (isNew) {
      await fetch('/api/admin/faq', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editing) })
    } else {
      await fetch(`/api/admin/faq/${editing.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editing) })
    }
    setEditing(null)
    load()
  }

  async function handleDelete(id: number) {
    if (!confirm('Удалить вопрос?')) return
    await fetch(`/api/admin/faq/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>FAQ <span style={{ color: '#999', fontSize: '16px' }}>({items.length})</span></h1>
        <button onClick={openNew} style={{ background: '#0066CC', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}>
          + Добавить вопрос
        </button>
      </div>

      {loading ? <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Загрузка...</div> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {items.map(item => (
            <div key={item.id} style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: '16px 20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 700, fontSize: '14px' }}>{item.question}</span>
                  <span style={{ background: '#f0f0f0', padding: '1px 7px', borderRadius: '10px', fontSize: '11px', color: '#666' }}>{catLabels[item.category] || item.category}</span>
                  {!item.isActive && <span style={{ background: '#FFF3CD', color: '#856404', padding: '1px 7px', borderRadius: '10px', fontSize: '11px' }}>Скрыт</span>}
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: '#666', lineHeight: 1.5 }}>{item.answer.substring(0, 120)}{item.answer.length > 120 ? '...' : ''}</p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <button onClick={() => openEdit(item)} style={{ color: '#0066CC', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>Ред.</button>
                <button onClick={() => handleDelete(item.id)} style={{ color: '#DC3545', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>Удалить</button>
              </div>
            </div>
          ))}
          {items.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>FAQ-вопросов нет. Добавьте первый!</div>}
        </div>
      )}

      {/* Модальное редактирование */}
      {editing && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', borderRadius: '8px', width: '100%', maxWidth: '600px' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '16px' }}>
              <span>{isNew ? 'Новый вопрос' : 'Редактировать вопрос'}</span>
              <button onClick={() => setEditing(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '18px' }}>✕</button>
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Вопрос *</label>
                <input value={editing.question} onChange={e => setEditing({ ...editing, question: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Ответ *</label>
                <textarea value={editing.answer} onChange={e => setEditing({ ...editing, answer: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', height: '120px', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Категория</label>
                  <select value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value })} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}>
                    {Object.entries(catLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Порядок</label>
                  <input type="number" value={editing.sortOrder} onChange={e => setEditing({ ...editing, sortOrder: Number(e.target.value) })} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Показывать</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', marginTop: '10px' }}>
                    <input type="checkbox" checked={editing.isActive} onChange={e => setEditing({ ...editing, isActive: e.target.checked })} />
                    Активен
                  </label>
                </div>
              </div>
              <button onClick={handleSave} style={{ background: '#0066CC', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
