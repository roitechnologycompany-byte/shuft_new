'use client'
import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const roomTypes = ['Офис', 'Магазин/бутик', 'Склад', 'Квартира', 'Кафе/ресторан', 'Серверная', 'Производство']

const recommendations = [
  {
    condition: (area: number, _type: string) => area <= 45,
    models: [
      { name: 'Shuft SFH-500 V3', type: 'Настенный', power: '4.51 кВт', price: '56 960 ₽', href: '/catalog/fankoily/nastennye/sfh-500-v3', noise: '26 дБА', badge: 'Рекомендуем' },
      { name: 'Shuft SFF-400', type: 'Напольно-потолочный', power: '3.5 кВт', price: '58 200 ₽', href: '/catalog/fankoily/napolno-potolochnye', noise: '27 дБА', badge: '' },
    ],
  },
  {
    condition: (area: number, _type: string) => area > 45 && area <= 75,
    models: [
      { name: 'Shuft SFH-800 V3', type: 'Настенный', power: '7.24 кВт', price: '74 500 ₽', href: '/catalog/fankoily/nastennye', noise: '28 дБА', badge: 'Рекомендуем' },
      { name: 'Shuft SFR-950F', type: 'Кассетный', power: '5.0 кВт', price: '72 450 ₽', href: '/catalog/fankoily/kassetnye', noise: '30 дБА', badge: '' },
    ],
  },
  {
    condition: (area: number, _type: string) => area > 75,
    models: [
      { name: 'Shuft SFR-1200F', type: 'Кассетный', power: '7.5 кВт', price: '89 900 ₽', href: '/catalog/fankoily/kassetnye', noise: '32 дБА', badge: 'Рекомендуем' },
      { name: 'Shuft SFH-1200 V3', type: 'Настенный', power: '11.0 кВт', price: '98 900 ₽', href: '/catalog/fankoily/nastennye', noise: '32 дБА', badge: '' },
    ],
  },
]

export default function CalcPage() {
  const [area, setArea] = useState('')
  const [height, setHeight] = useState('2.7')
  const [roomType, setRoomType] = useState('')
  const [people, setPeople] = useState('')
  const [computers, setComputers] = useState('')
  const [result, setResult] = useState<null | { power: number; models: typeof recommendations[0]['models'] }>(null)

  const calculate = () => {
    const areaNum = parseFloat(area) || 0
    const heightNum = parseFloat(height) || 2.7
    const peopleNum = parseFloat(people) || 0
    const computersNum = parseFloat(computers) || 0

    const basePower = areaNum * heightNum * 40
    const peoplePower = peopleNum * 100
    const computerPower = computersNum * 200
    const southBonus = 1.15
    const totalPower = (basePower + peoplePower + computerPower) * southBonus / 1000

    const rec = recommendations.find(r => r.condition(areaNum, roomType))
    setResult({ power: Math.round(totalPower * 10) / 10, models: rec?.models || recommendations[2].models })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Калькулятор подбора' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор подбора фанкойла Shuft</h1>
      <p className="text-gray-600 text-lg mb-10">
        Введите параметры вашего помещения — получите рекомендации по подходящим моделям Shuft с ценами.
      </p>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Параметры помещения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Площадь помещения (м²) *</label>
            <input
              type="number"
              value={area}
              onChange={e => setArea(e.target.value)}
              placeholder="Например: 50"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Высота потолков (м)</label>
            <input
              type="number"
              step="0.1"
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="2.7"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Тип помещения</label>
            <select
              value={roomType}
              onChange={e => setRoomType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Выберите тип...</option>
              {roomTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Количество человек</label>
            <input
              type="number"
              value={people}
              onChange={e => setPeople(e.target.value)}
              placeholder="0"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Количество компьютеров</label>
            <input
              type="number"
              value={computers}
              onChange={e => setComputers(e.target.value)}
              placeholder="0"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          onClick={calculate}
          disabled={!area}
          className="mt-8 btn-accent w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🔢 Подобрать фанкойл
        </button>
      </div>

      {result && (
        <div className="bg-white rounded-2xl shadow-md border border-blue-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Результат расчёта</h2>
              <p className="text-gray-500">Рекомендуемая мощность охлаждения: <strong className="text-blue-600">{result.power} кВт</strong></p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-4">Рекомендуемые модели Shuft:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.models.map((model, i) => (
              <div key={i} className={`rounded-xl border-2 p-6 ${i === 0 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                {model.badge && (
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-3">{model.badge}</span>
                )}
                <h4 className="font-bold text-xl text-gray-900 mb-1">{model.name}</h4>
                <div className="text-gray-500 text-sm mb-3">{model.type}</div>
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="bg-white rounded-lg p-2"><span className="text-gray-500">Мощность: </span><span className="font-bold">{model.power}</span></div>
                  <div className="bg-white rounded-lg p-2"><span className="text-gray-500">Шум: </span><span className="font-bold">{model.noise}</span></div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-3">{model.price}</div>
                <Link href={model.href} className="block text-center btn-primary w-full justify-center py-2 text-sm">
                  Подробнее →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Нужна точная консультация?</h2>
        <p className="text-gray-600 mb-6">Наш инженер рассчитает оптимальное решение бесплатно</p>
        <a href="tel:+74951203375" className="btn-primary text-lg px-8 py-4">
          📞 Позвонить инженеру
        </a>
      </div>
    </div>
  )
}
