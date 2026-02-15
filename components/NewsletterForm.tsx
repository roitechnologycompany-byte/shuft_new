'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant?: 'default' | 'minimal' | 'footer'
}

export default function NewsletterForm({ variant = 'default' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()

    if (res.ok) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
      setErrorMsg(data.error || 'Ошибка. Попробуйте позже.')
    }
  }

  if (status === 'success') {
    if (variant === 'footer' || variant === 'minimal') {
      return (
        <span className="text-green-400 text-sm font-medium">
          ✓ Вы подписаны на новости Shuft!
        </span>
      )
    }
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-bold text-gray-900 text-lg">Вы подписаны!</p>
        <p className="text-gray-500 text-sm mt-1">
          Будем присылать только полезные материалы: обзоры, гайды, акции Shuft.
        </p>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Ваш email"
          className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          {status === 'loading' ? '...' : 'Подписаться'}
        </button>
      </form>
    )
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Введите ваш email"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{ background: '#0066CC' }}
          className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          {status === 'loading' ? 'Подписка...' : 'Подписаться'}
        </button>
        {status === 'error' && <p className="text-red-500 text-sm">{errorMsg}</p>}
      </form>
    )
  }

  // Default full variant
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
      <div className="text-4xl mb-4">📧</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Подпишитесь на новости Shuft
      </h2>
      <p className="text-blue-100 mb-6 max-w-lg mx-auto">
        Обзоры новых моделей, гайды по выбору и монтажу, эксклюзивные акции для подписчиков.
        Не спам — только полезный контент.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Ваш email-адрес"
          className="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
        >
          {status === 'loading' ? 'Подписка...' : 'Подписаться бесплатно'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-200 text-sm mt-3">{errorMsg}</p>
      )}
      <p className="text-blue-200 text-xs mt-4">Отписаться можно в любое время. Ваши данные защищены.</p>
    </div>
  )
}
