'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

// Статические данные моделей Shuft для сравнения
const ALL_MODELS = [
  {
    id: 'sfh-500-v3', name: 'Shuft SFH-500 V3', type: 'Настенный', category: 'nastennye',
    price: 56960, priceLabel: '56 960 ₽',
    image: null,
    specs: {
      'Тип': 'Настенный',
      'Мощность охлаждения': '4,51 кВт',
      'Мощность обогрева': '6,77 кВт',
      'Расход воздуха': '841 м³/ч',
      'Уровень шума': '26 дБА',
      'Площадь': 'до 45 м²',
      'Напряжение': '220 В / 50 Гц',
      'Вес': '15 кг',
      'Гарантия': '3 года',
      'В наличии': 'Да',
    },
    advantages: ['Тихая работа 26 дБА', 'ИК-пульт в комплекте', 'Компактный размер'],
    href: '/catalog/fankoily/nastennye/',
  },
  {
    id: 'sfh-800-v3', name: 'Shuft SFH-800 V3', type: 'Настенный', category: 'nastennye',
    price: 68450, priceLabel: '68 450 ₽',
    image: null,
    specs: {
      'Тип': 'Настенный',
      'Мощность охлаждения': '7,0 кВт',
      'Мощность обогрева': '9,2 кВт',
      'Расход воздуха': '1 200 м³/ч',
      'Уровень шума': '28 дБА',
      'Площадь': 'до 70 м²',
      'Напряжение': '220 В / 50 Гц',
      'Вес': '19 кг',
      'Гарантия': '3 года',
      'В наличии': 'Да',
    },
    advantages: ['Мощность 7 кВт', 'Большие офисы до 70 м²', 'Монтаж за 1 день'],
    href: '/catalog/fankoily/nastennye/',
  },
  {
    id: 'sfh-1200-v3', name: 'Shuft SFH-1200 V3', type: 'Настенный', category: 'nastennye',
    price: 98900, priceLabel: '98 900 ₽',
    image: null,
    specs: {
      'Тип': 'Настенный',
      'Мощность охлаждения': '11,0 кВт',
      'Мощность обогрева': '14,4 кВт',
      'Расход воздуха': '1 800 м³/ч',
      'Уровень шума': '31 дБА',
      'Площадь': 'до 110 м²',
      'Напряжение': '220 В / 50 Гц',
      'Вес': '26 кг',
      'Гарантия': '3 года',
      'В наличии': 'Да',
    },
    advantages: ['Мощность 11 кВт', 'Большие залы до 110 м²', 'Надёжный двигатель'],
    href: '/catalog/fankoily/nastennye/',
  },
  {
    id: 'sfr-950f', name: 'Shuft SFR-950F', type: 'Кассетный', category: 'kassetnye',
    price: 72450, priceLabel: '72 450 ₽',
    image: null,
    specs: {
      'Тип': 'Кассетный',
      'Мощность охлаждения': '9,5 кВт',
      'Мощность обогрева': '12,6 кВт',
      'Расход воздуха': '1 600 м³/ч',
      'Уровень шума': '32 дБА',
      'Площадь': 'до 90 м²',
      'Напряжение': '220 В / 50 Гц',
      'Вес': '18 кг',
      'Гарантия': '3 года',
      'В наличии': 'Да',
    },
    advantages: ['Скрытый монтаж', 'Воздух в 4 стороны', 'Для ТЦ и офисов'],
    href: '/catalog/fankoily/kassetnye/',
  },
  {
    id: 'sfr-1200f', name: 'Shuft SFR-1200F', type: 'Кассетный', category: 'kassetnye',
    price: 89500, priceLabel: '89 500 ₽',
    image: null,
    specs: {
      'Тип': 'Кассетный',
      'Мощность охлаждения': '12,0 кВт',
      'Мощность обогрева': '15,8 кВт',
      'Расход воздуха': '2 000 м³/ч',
      'Уровень шума': '33 дБА',
      'Площадь': 'до 120 м²',
      'Напряжение': '220 В / 50 Гц',
      'Вес': '22 кг',
      'Гарантия': '3 года',
      'В наличии': 'Да',
    },
    advantages: ['Мощность 12 кВт', 'Торговые залы', 'Равномерный поток'],
    href: '/catalog/fankoily/kassetnye/',
  },
  {
    id: 'sff-300g50', name: 'Shuft SFF-300G50', type: 'Канальный', category: 'kanalnye',
    price: 42180, priceLabel: '42 180 ₽',
    image: null,
    specs: {
      'Тип': 'Канальный',
      'Мощность охлаждения': '3,0 кВт',
      'Мощность обогрева': '3,6 кВт',
      'Расход воздуха': '500 м³/ч',
      'Уровень шума': '22 дБА',
      'Площадь': 'до 30 м²',
      'Напряжение': '220 В / 50 Гц',
      'Вес': '12 кг',
      'Гарантия': '3 года',
      'В наличии': 'Да',
    },
    advantages: ['Полностью скрыт', 'Тихий 22 дБА', 'Для квартир'],
    href: '/catalog/fankoily/kanalnye/',
  },
  {
    id: 'sff-400', name: 'Shuft SFF-400', type: 'Напольно-потолочный', category: 'napolno-potolochnye',
    price: 43930, priceLabel: '43 930 ₽',
    image: null,
    specs: {
      'Тип': 'Напольно-потолочный',
      'Мощность охлаждения': '4,0 кВт',
      'Мощность обогрева': '5,2 кВт',
      'Расход воздуха': '700 м³/ч',
      'Уровень шума': '24 дБА',
      'Площадь': 'до 40 м²',
      'Напряжение': '220 В / 50 Гц',
      'Вес': '14 кг',
      'Гарантия': '3 года',
      'В наличии': 'Да',
    },
    advantages: ['2-в-1: пол/потолок', 'Универсальный монтаж', 'Торговые помещения'],
    href: '/catalog/fankoily/napolno-potolochnye/',
  },
]

const MAX_COMPARE = 5

const categoryColors: Record<string, string> = {
  nastennye: '#0066CC', kassetnye: '#17A2B8', kanalnye: '#28A745', 'napolno-potolochnye': '#FF6600',
}

export default function CompareClient() {
  const [selected, setSelected] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showDiff, setShowDiff] = useState(false)

  // Восстанавливаем сравнение из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('shuft_compare')
    if (saved) {
      try { setSelected(JSON.parse(saved)) } catch {}
    }
  }, [])

  function toggleModel(id: string) {
    setSelected(prev => {
      let next: string[]
      if (prev.includes(id)) {
        next = prev.filter(x => x !== id)
      } else if (prev.length >= MAX_COMPARE) {
        alert(`Можно сравнивать не более ${MAX_COMPARE} моделей`)
        return prev
      } else {
        next = [...prev, id]
      }
      localStorage.setItem('shuft_compare', JSON.stringify(next))
      return next
    })
  }

  const selectedModels = ALL_MODELS.filter(m => selected.includes(m.id))
  const filteredModels = ALL_MODELS.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Определяем строки, где значения отличаются
  const allSpecKeys = Array.from(new Set(selectedModels.flatMap(m => Object.keys(m.specs))))
  const diffKeys = showDiff
    ? allSpecKeys.filter(key => {
        const vals = selectedModels.map(m => m.specs[key as keyof typeof m.specs] || '—')
        return new Set(vals).size > 1
      })
    : allSpecKeys

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog/' }, { name: 'Сравнение моделей' }]} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Сравнение моделей Shuft</h1>
          <p className="text-gray-500 mt-1">Выберите до 5 моделей для сравнения</p>
        </div>
        {selectedModels.length > 1 && (
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" checked={showDiff} onChange={e => setShowDiff(e.target.checked)} className="w-4 h-4" />
            Показать только различия
          </label>
        )}
      </div>

      {/* Таблица сравнения */}
      {selectedModels.length > 0 ? (
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="p-4 text-left text-gray-500 font-medium w-40 min-w-40">Характеристика</th>
                  {selectedModels.map(model => (
                    <th key={model.id} className="p-4 text-center min-w-48">
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className="w-full rounded-lg px-3 py-2 text-white text-sm font-bold"
                          style={{ background: categoryColors[model.category] || '#0066CC' }}
                        >
                          {model.name}
                        </div>
                        <div className="text-gray-500 text-xs">{model.type}</div>
                        <div className="text-blue-600 font-bold text-base">{model.priceLabel}</div>
                        <button
                          onClick={() => toggleModel(model.id)}
                          className="text-red-400 hover:text-red-600 text-xs border border-red-200 px-2 py-1 rounded"
                        >
                          ✕ Убрать
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {diffKeys.map((key, i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 pl-4 text-gray-600 font-medium text-xs">{key}</td>
                    {selectedModels.map(model => {
                      const val = model.specs[key as keyof typeof model.specs] || '—'
                      const allVals = selectedModels.map(m => m.specs[key as keyof typeof m.specs] || '—')
                      const isUnique = allVals.filter(v => v === val).length === 1
                      return (
                        <td key={model.id} className="p-3 text-center">
                          <span
                            className={`text-sm font-medium ${isUnique && selectedModels.length > 1 ? 'text-blue-600' : 'text-gray-700'}`}
                          >
                            {val}
                          </span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
                {/* Преимущества */}
                <tr className="bg-blue-50 border-t">
                  <td className="p-3 pl-4 text-gray-600 font-medium text-xs">Преимущества</td>
                  {selectedModels.map(model => (
                    <td key={model.id} className="p-3">
                      <ul className="text-xs text-gray-600 space-y-1">
                        {model.advantages.map(a => (
                          <li key={a} className="flex items-start gap-1">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                {/* Кнопки */}
                <tr className="border-t">
                  <td className="p-4"></td>
                  {selectedModels.map(model => (
                    <td key={model.id} className="p-4 text-center">
                      <Link
                        href={model.href}
                        className="inline-block text-white text-sm font-semibold px-4 py-2 rounded-lg"
                        style={{ background: '#0066CC' }}
                      >
                        Подробнее →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-12 text-center mb-10 border-2 border-dashed border-gray-200">
          <div className="text-5xl mb-4">⚖️</div>
          <p className="text-gray-500 text-lg">Выберите модели из списка ниже для сравнения</p>
          <p className="text-gray-400 text-sm mt-2">До {MAX_COMPARE} моделей одновременно</p>
        </div>
      )}

      {/* Счётчик выбранных */}
      {selectedModels.length > 0 && (
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600 text-sm">Выбрано: <strong>{selectedModels.length}</strong> из {MAX_COMPARE}</p>
          <button
            onClick={() => { setSelected([]); localStorage.removeItem('shuft_compare') }}
            className="text-red-400 hover:text-red-600 text-sm"
          >
            Очистить всё
          </button>
        </div>
      )}

      {/* Список всех моделей для добавления */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Добавить модели для сравнения</h2>

      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Поиск по названию или типу..."
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-sm"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredModels.map(model => {
          const isSelected = selected.includes(model.id)
          const isDisabled = !isSelected && selected.length >= MAX_COMPARE
          return (
            <div
              key={model.id}
              onClick={() => !isDisabled && toggleModel(model.id)}
              className={`bg-white rounded-xl border-2 p-4 cursor-pointer transition-all ${
                isSelected
                  ? 'border-blue-500 shadow-md'
                  : isDisabled
                  ? 'border-gray-200 opacity-50 cursor-not-allowed'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-xs text-white px-2 py-1 rounded font-semibold"
                  style={{ background: categoryColors[model.category] || '#0066CC' }}
                >
                  {model.type}
                </span>
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                  {isSelected && <span className="text-white text-xs">✓</span>}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{model.name}</h3>
              <div className="space-y-1 text-xs text-gray-500 mb-3">
                <div>Охлаждение: <strong className="text-gray-700">{model.specs['Мощность охлаждения']}</strong></div>
                <div>Шум: <strong className="text-gray-700">{model.specs['Уровень шума']}</strong></div>
                <div>Площадь: <strong className="text-gray-700">{model.specs['Площадь']}</strong></div>
              </div>
              <div className="font-bold text-blue-600">{model.priceLabel}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
