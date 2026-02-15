'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    setLoading(false)
    if (res.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      setError(data.error || 'Ошибка входа')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#F5F5F5' }}>
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold" style={{ color: '#0066CC', fontFamily: 'Roboto, sans-serif' }}>
            Shuft.Online
          </div>
          <div className="text-gray-500 text-sm mt-1">Панель управления</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600"
              style={{ height: '48px' }}
              placeholder="admin@shuft.online"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600"
              style={{ height: '48px' }}
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white font-medium rounded py-3 transition-opacity"
            style={{ background: '#0066CC', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  )
}
