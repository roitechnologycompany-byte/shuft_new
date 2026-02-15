'use client'
import { useState } from 'react'

interface ContactFormProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'sidebar'
}

export default function ContactForm({ 
  title = 'Подберём фанкойлы Shuft под ваш объект за 15 минут',
  subtitle = 'Оставьте заявку — и в течение 15 минут наш специалист позвонит вам.',
  variant = 'default'
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    roomType: '',
    area: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-600">Мы перезвоним вам в течение 15 минут в рабочее время (10:00–20:00).</p>
      </div>
    )
  }

  return (
    <div>
      {title && (
        <div className="mb-6">
          <h2 className={`font-bold text-gray-900 mb-2 ${variant === 'sidebar' ? 'text-xl' : 'text-2xl md:text-3xl'}`}>{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={variant === 'default' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              ФИО <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Иван Иванов"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+7 (495) 000-00-00"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {variant === 'default' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Адрес объекта</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Москва, ул. Ленина, д. 1"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">Тип помещения</label>
                <select
                  id="roomType"
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Выберите тип...</option>
                  <option value="office">Офис</option>
                  <option value="shop">Магазин/бутик</option>
                  <option value="warehouse">Склад</option>
                  <option value="apartment">Квартира</option>
                  <option value="cafe">Кафе/ресторан</option>
                  <option value="production">Производство</option>
                  <option value="other">Другое</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Примерная площадь (м²)</label>
              <input
                type="number"
                id="area"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                placeholder="50"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Ваш вопрос</label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Опишите вашу задачу или задайте вопрос..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <button type="submit" className="btn-accent w-full justify-center text-base py-4">
          Отправить заявку
        </button>
        <p className="text-xs text-gray-500 text-center">
          Гарантируем конфиденциальность ваших данных. Звоним только в рабочее время (10:00–20:00, Пн–Сб).
        </p>
      </form>
    </div>
  )
}
