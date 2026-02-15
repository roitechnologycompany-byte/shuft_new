'use client'

import { useState } from 'react'

const MODELS = [
  'Shuft SFH-500 V3 (настенный)',
  'Shuft SFH-800 V3 (настенный)',
  'Shuft SFH-1200 V3 (настенный)',
  'Shuft SFR-950F (кассетный)',
  'Shuft SFR-1200F (кассетный)',
  'Shuft SFR-1500F (кассетный)',
  'Shuft SFF-300G50 (канальный)',
  'Shuft SFF-500G50 (канальный)',
  'Shuft SFF-800G50 (канальный)',
  'Shuft SFF-1400G50 (канальный)',
  'Shuft SFF-150 (напольно-потолочный)',
  'Shuft SFF-300 (напольно-потолочный)',
  'Shuft SFF-400 (напольно-потолочный)',
  'Shuft SFF-600 (напольно-потолочный)',
  'VRF-система Shuft',
  'Другая модель',
]

export default function ReviewForm() {
  const [form, setForm] = useState({
    name: '', company: '', city: '', model: '', rating: 5, text: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', company: '', city: '', model: '', rating: 5, text: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Ошибка отправки')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Ошибка соединения. Попробуйте позже.')
    }
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Оставить отзыв</h2>
      <p className="text-gray-500 text-sm mb-6">
        Отзыв будет опубликован после модерации (обычно в течение 24 часов).
      </p>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="font-bold text-green-800 text-lg mb-2">Спасибо за ваш отзыв!</h3>
          <p className="text-green-700">
            Ваш отзыв отправлен на модерацию и будет опубликован в ближайшее время.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm text-green-600 underline hover:no-underline"
          >
            Оставить ещё один отзыв
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Оценка *</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, rating: star }))}
                  className={`text-3xl transition-transform hover:scale-110 ${
                    star <= form.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  aria-label={`${star} звезд`}
                >
                  ★
                </button>
              ))}
              <span className="ml-2 text-gray-500 self-center text-sm">
                {['', 'Плохо', 'Ниже среднего', 'Нормально', 'Хорошо', 'Отлично'][form.rating]}
              </span>
            </div>
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Модель</label>
            <select
              value={form.model}
              onChange={e => setForm(f => ({ ...f, model: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Выберите модель...</option>
              {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          {/* Name + City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше имя *</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Иван Петров"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Город</label>
              <input
                type="text"
                value={form.city}
                onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                placeholder="Москва"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Компания / тип объекта</label>
            <input
              type="text"
              value={form.company}
              onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
              placeholder="ООО «Пример» / Офис / Ресторан"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Text */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ваш отзыв *</label>
            <textarea
              value={form.text}
              onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
              rows={5}
              placeholder="Расскажите о вашем опыте: как выбрали, как работает, что нравится, что можно улучшить..."
              required
              minLength={30}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <div className="text-xs text-gray-400 mt-1">Минимум 30 символов</div>
          </div>

          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading' || !form.name || !form.text}
            className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? '⏳ Отправляем...' : '✉️ Отправить отзыв'}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Нажимая «Отправить», вы соглашаетесь с{' '}
            <a href="/privacy-policy" className="text-blue-500 hover:underline">политикой конфиденциальности</a>
          </p>
        </form>
      )}
    </div>
  )
}
