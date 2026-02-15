'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface SettingsGrouped {
  general: Record<string, string>
  contacts: Record<string, string>
  seo: Record<string, string>
  integrations: Record<string, string>
}

const defaultSettings: SettingsGrouped = {
  general: {
    company_name: 'ООО "АСПРОМСИСТЕМ"',
    site_name: 'Shuft.Online',
    site_description: 'Официальный дилер Shuft в Москве',
  },
  contacts: {
    phone: '+7 (495) 120-33-75',
    email: 'info@shuft.online',
    address: 'г. Москва, пл. Спартаковская, д. 14, стр. 3, пом. 3Н',
    working_hours: 'Пн–Пт: 9:00–18:00',
  },
  seo: {
    meta_title: 'Фанкойлы Shuft в Москве — официальный дилер Shuft.Online',
    meta_description: 'Официальный дилер Shuft в Москве. Фанкойлы, чиллеры, VRF-системы. Гарантия 3 года, монтаж за 1–3 дня.',
    meta_keywords: 'фанкойлы shuft, shuft москва, официальный дилер shuft',
    yandex_metrika: '',
    google_analytics: '',
  },
  integrations: {
    telegram_bot_token: '',
    telegram_chat_id: '',
    sendgrid_api_key: '',
    amocRM_token: '',
  },
}

const groupLabels: Record<string, string> = {
  general: 'Основные настройки',
  contacts: 'Контактная информация',
  seo: 'SEO и аналитика',
  integrations: 'Интеграции',
}

const fieldLabels: Record<string, string> = {
  company_name: 'Название компании',
  site_name: 'Название сайта',
  site_description: 'Описание сайта',
  phone: 'Телефон',
  email: 'Email',
  address: 'Адрес',
  working_hours: 'Часы работы',
  meta_title: 'Заголовок сайта (Title)',
  meta_description: 'Описание сайта (Description)',
  meta_keywords: 'Ключевые слова',
  yandex_metrika: 'Яндекс.Метрика ID',
  google_analytics: 'Google Analytics ID',
  telegram_bot_token: 'Telegram Bot Token',
  telegram_chat_id: 'Telegram Chat ID',
  sendgrid_api_key: 'SendGrid API Key',
  amocRM_token: 'amoCRM Token',
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsGrouped>(defaultSettings)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [activeTab, setActiveTab] = useState('general')

  // Вкладка пользователей
  const [users, setUsers] = useState<Array<{ id: number; email: string; name: string; role: string }>>([])
  const [newUser, setNewUser] = useState({ email: '', name: '', password: '', role: 'editor' })
  const [userError, setUserError] = useState('')

  useEffect(() => {
    fetch('/api/admin/settings')
      .then(r => r.json())
      .then(d => {
        if (d.grouped) {
          setSettings(prev => {
            const merged = { ...prev }
            for (const [g, vals] of Object.entries(d.grouped)) {
              merged[g as keyof SettingsGrouped] = { ...prev[g as keyof SettingsGrouped], ...(vals as Record<string, string>) }
            }
            return merged
          })
        }
        setLoading(false)
      })
    fetch('/api/admin/users').then(r => r.ok ? r.json() : []).then(d => setUsers(Array.isArray(d) ? d : []))
  }, [])

  function setVal(group: keyof SettingsGrouped, key: string, val: string) {
    setSettings(prev => ({ ...prev, [group]: { ...prev[group], [key]: val } }))
  }

  async function handleSave() {
    setSaving(true)
    const updates: Record<string, string> = {}
    for (const [group, vals] of Object.entries(settings)) {
      for (const [key, val] of Object.entries(vals as Record<string, string>)) {
        updates[key] = val
      }
    }
    await fetch('/api/admin/settings', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ updates }) })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  async function handleAddUser() {
    setUserError('')
    const res = await fetch('/api/admin/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newUser) })
    if (res.ok) {
      const u = await res.json()
      setUsers(prev => [...prev, u])
      setNewUser({ email: '', name: '', password: '', role: 'editor' })
    } else {
      const e = await res.json()
      setUserError(e.error || 'Ошибка')
    }
  }

  async function handleDeleteUser(id: number) {
    if (!confirm('Удалить пользователя?')) return
    await fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  const tabs = [
    { key: 'general', label: 'Основные' },
    { key: 'contacts', label: 'Контакты' },
    { key: 'seo', label: 'SEO' },
    { key: 'integrations', label: 'Интеграции' },
    { key: 'users', label: 'Пользователи' },
  ]

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' as const }

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Настройки</h1>
        {activeTab !== 'users' && (
          <button onClick={handleSave} disabled={saving} style={{ background: saving ? '#aaa' : '#0066CC', color: '#fff', padding: '10px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>
            {saving ? 'Сохранение...' : saved ? '✓ Сохранено!' : 'Сохранить'}
          </button>
        )}
      </div>

      {/* Табы */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', background: '#fff', padding: '4px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', flexWrap: 'wrap' }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setActiveTab(t.key)} style={{ padding: '8px 16px', background: activeTab === t.key ? '#0066CC' : 'transparent', color: activeTab === t.key ? '#fff' : '#666', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
            {t.label}
          </button>
        ))}
      </div>

      {loading ? <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Загрузка...</div> : (
        activeTab === 'users' ? (
          <div>
            {/* Список пользователей */}
            <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '20px' }}>
              <div style={{ padding: '12px 20px', background: '#f9f9f9', borderBottom: '1px solid #eee', fontWeight: 700, fontSize: '14px' }}>Пользователи системы</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#fafafa', borderBottom: '1px solid #eee' }}>
                    {['Имя', 'Email', 'Роль', 'Действия'].map(h => <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600 }}>{u.name}</td>
                      <td style={{ padding: '10px 16px', color: '#666' }}>{u.email}</td>
                      <td style={{ padding: '10px 16px' }}>
                        <span style={{ background: u.role === 'admin' ? '#0066CC20' : '#f0f0f0', color: u.role === 'admin' ? '#0066CC' : '#666', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{u.role}</span>
                      </td>
                      <td style={{ padding: '10px 16px' }}>
                        <button onClick={() => handleDeleteUser(u.id)} style={{ color: '#DC3545', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>Удалить</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Добавить пользователя */}
            <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              <div style={{ padding: '12px 20px', background: '#f9f9f9', borderBottom: '1px solid #eee', fontWeight: 700, fontSize: '14px' }}>Добавить пользователя</div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {userError && <div style={{ background: '#FFF5F5', border: '1px solid #DC3545', color: '#DC3545', padding: '8px 12px', borderRadius: '4px', fontSize: '13px' }}>{userError}</div>}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[['Имя', 'name', 'text'], ['Email', 'email', 'email'], ['Пароль', 'password', 'password']].map(([l, f, t]) => (
                    <div key={f}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>{l}</label>
                      <input type={t} style={inputStyle} value={newUser[f as keyof typeof newUser]} onChange={e => setNewUser(p => ({ ...p, [f]: e.target.value }))} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Роль</label>
                    <select style={inputStyle} value={newUser.role} onChange={e => setNewUser(p => ({ ...p, role: e.target.value }))}>
                      <option value="admin">Администратор</option>
                      <option value="editor">Редактор</option>
                      <option value="viewer">Наблюдатель</option>
                    </select>
                  </div>
                </div>
                <button onClick={handleAddUser} style={{ padding: '10px 20px', background: '#0066CC', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', alignSelf: 'flex-start' }}>
                  Добавить пользователя
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            <div style={{ padding: '12px 20px', background: '#f9f9f9', borderBottom: '1px solid #eee', fontWeight: 700, fontSize: '14px' }}>
              {groupLabels[activeTab] || activeTab}
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {Object.entries(settings[activeTab as keyof SettingsGrouped] || {}).map(([key, val]) => (
                <div key={key}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '4px' }}>
                    {fieldLabels[key] || key}
                  </label>
                  {(key.includes('description') || key.includes('meta_description')) ? (
                    <textarea
                      style={{ ...inputStyle, height: '70px', resize: 'vertical' }}
                      value={val}
                      onChange={e => setVal(activeTab as keyof SettingsGrouped, key, e.target.value)}
                    />
                  ) : (
                    <input
                      style={inputStyle}
                      type={key.includes('token') || key.includes('key') ? 'password' : 'text'}
                      value={val}
                      onChange={e => setVal(activeTab as keyof SettingsGrouped, key, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}
