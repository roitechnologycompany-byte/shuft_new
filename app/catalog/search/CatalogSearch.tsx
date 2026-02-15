'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CompareButton from '@/components/CompareButton'

// Все модели для поиска и фильтрации
const CATALOG = [
  // Настенные
  { id: 'sfh-500-v3', name: 'Shuft SFH-500 V3', type: 'nastennye', typeLabel: 'Настенный', power: 4.51, area: 45, noise: 26, price: 56960, inStock: true },
  { id: 'sfh-800-v3', name: 'Shuft SFH-800 V3', type: 'nastennye', typeLabel: 'Настенный', power: 7.0, area: 70, noise: 28, price: 68450, inStock: true },
  { id: 'sfh-1200-v3', name: 'Shuft SFH-1200 V3', type: 'nastennye', typeLabel: 'Настенный', power: 11.0, area: 110, noise: 31, price: 98900, inStock: true },
  // Кассетные
  { id: 'sfr-950f', name: 'Shuft SFR-950F', type: 'kassetnye', typeLabel: 'Кассетный', power: 9.5, area: 90, noise: 32, price: 72450, inStock: true },
  { id: 'sfr-1200f', name: 'Shuft SFR-1200F', type: 'kassetnye', typeLabel: 'Кассетный', power: 12.0, area: 120, noise: 33, price: 89500, inStock: true },
  { id: 'sfr-1500f', name: 'Shuft SFR-1500F', type: 'kassetnye', typeLabel: 'Кассетный', power: 15.0, area: 150, noise: 35, price: 118500, inStock: false },
  // Канальные
  { id: 'sff-300g50', name: 'Shuft SFF-300G50', type: 'kanalnye', typeLabel: 'Канальный', power: 3.0, area: 30, noise: 22, price: 42180, inStock: true },
  { id: 'sff-500g50', name: 'Shuft SFF-500G50', type: 'kanalnye', typeLabel: 'Канальный', power: 5.0, area: 50, noise: 24, price: 56800, inStock: true },
  { id: 'sff-800g50', name: 'Shuft SFF-800G50', type: 'kanalnye', typeLabel: 'Канальный', power: 8.0, area: 80, noise: 26, price: 71200, inStock: true },
  { id: 'sff-1400g50', name: 'Shuft SFF-1400G50', type: 'kanalnye', typeLabel: 'Канальный', power: 14.0, area: 140, noise: 29, price: 124000, inStock: false },
  // Напольно-потолочные
  { id: 'sff-200', name: 'Shuft SFF-200', type: 'napolno-potolochnye', typeLabel: 'Напольно-потолочный', power: 1.6, area: 16, noise: 19, price: 43930, inStock: true },
  { id: 'sff-400', name: 'Shuft SFF-400', type: 'napolno-potolochnye', typeLabel: 'Напольно-потолочный', power: 4.0, area: 40, noise: 24, price: 52500, inStock: true },
  { id: 'sff-600', name: 'Shuft SFF-600', type: 'napolno-potolochnye', typeLabel: 'Напольно-потолочный', power: 6.0, area: 60, noise: 26, price: 67800, inStock: true },
  { id: 'sff-1000', name: 'Shuft SFF-1000', type: 'napolno-potolochnye', typeLabel: 'Напольно-потолочный', power: 9.5, area: 95, noise: 30, price: 86400, inStock: false },
]

const typeHref: Record<string, string> = {
  nastennye: '/catalog/fankoily/nastennye/',
  kassetnye: '/catalog/fankoily/kassetnye/',
  kanalnye: '/catalog/fankoily/kanalnye/',
  'napolno-potolochnye': '/catalog/fankoily/napolno-potolochnye/',
}

const typeColors: Record<string, string> = {
  nastennye: '#0066CC', kassetnye: '#17A2B8', kanalnye: '#28A745', 'napolno-potolochnye': '#FF6600',
}

type SortKey = 'price_asc' | 'price_desc' | 'power_asc' | 'power_desc' | 'noise_asc'

export default function CatalogSearch() {
  const [query, setQuery] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [maxArea, setMaxArea] = useState('')
  const [minPower, setMinPower] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [onlyInStock, setOnlyInStock] = useState(false)
  const [sort, setSort] = useState<SortKey>('price_asc')

  const filtered = useMemo(() => {
    return CATALOG
      .filter(p => {
        if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false
        if (selectedTypes.length > 0 && !selectedTypes.includes(p.type)) return false
        if (maxArea && p.area < Number(maxArea)) return false
        if (minPower && p.power < Number(minPower)) return false
        if (maxPrice && p.price > Number(maxPrice)) return false
        if (onlyInStock && !p.inStock) return false
        return true
      })
      .sort((a, b) => {
        if (sort === 'price_asc') return a.price - b.price
        if (sort === 'price_desc') return b.price - a.price
        if (sort === 'power_asc') return a.power - b.power
        if (sort === 'power_desc') return b.power - a.power
        if (sort === 'noise_asc') return a.noise - b.noise
        return 0
      })
  }, [query, selectedTypes, maxArea, minPower, maxPrice, onlyInStock, sort])

  function toggleType(t: string) {
    setSelectedTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  }

  function resetFilters() {
    setQuery(''); setSelectedTypes([]); setMaxArea(''); setMinPower(''); setMaxPrice(''); setOnlyInStock(false); setSort('price_asc')
  }

  const types = [
    { value: 'nastennye', label: 'Настенные' },
    { value: 'kassetnye', label: 'Кассетные' },
    { value: 'kanalnye', label: 'Канальные' },
    { value: 'napolno-potolochnye', label: 'Напольно-потолочные' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Каталог', href: '/catalog/' }, { name: 'Поиск по каталогу' }]} />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Поиск по каталогу Shuft</h1>
          <p className="text-gray-500 mt-1">Найдено: <strong>{filtered.length}</strong> моделей</p>
        </div>
        <Link href="/catalog/compare/" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          ⚖️ Перейти к сравнению →
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Фильтры — левая панель */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sticky top-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-900">Фильтры</h2>
              <button onClick={resetFilters} className="text-xs text-gray-400 hover:text-red-500">Сбросить</button>
            </div>

            {/* Поиск */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Поиск</label>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="SFH-500, настенный..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Тип */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase">Тип</label>
              <div className="space-y-1.5">
                {types.map(t => (
                  <label key={t.value} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(t.value)}
                      onChange={() => toggleType(t.value)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: typeColors[t.value] }} />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Мощность */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Мощность от (кВт)</label>
              <input
                type="number"
                value={minPower}
                onChange={e => setMinPower(e.target.value)}
                placeholder="напр. 4"
                min={0}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Площадь */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Площадь помещения (м²)</label>
              <input
                type="number"
                value={maxArea}
                onChange={e => setMaxArea(e.target.value)}
                placeholder="напр. 50"
                min={0}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Цена */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Цена до (₽)</label>
              <input
                type="number"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                placeholder="напр. 80000"
                min={0}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Наличие */}
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={e => setOnlyInStock(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              Только в наличии
            </label>
          </div>
        </aside>

        {/* Результаты */}
        <div className="flex-1">
          {/* Сортировка */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-sm text-gray-500">Сортировка:</span>
            {([
              ['price_asc', 'Цена ↑'],
              ['price_desc', 'Цена ↓'],
              ['power_asc', 'Мощность ↑'],
              ['power_desc', 'Мощность ↓'],
              ['noise_asc', 'Шум ↑'],
            ] as [SortKey, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSort(key)}
                className={`text-sm px-3 py-1.5 rounded border transition-colors ${sort === key ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
              >
                {label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-gray-500">Ничего не найдено. Попробуйте изменить фильтры.</p>
              <button onClick={resetFilters} className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                Сбросить все фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map(p => (
                <div key={p.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {/* Шапка карточки */}
                  <div className="px-4 py-3" style={{ borderLeft: `4px solid ${typeColors[p.type]}` }}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold" style={{ color: typeColors[p.type] }}>{p.typeLabel}</span>
                        <h3 className="font-bold text-gray-900 text-sm mt-0.5">{p.name}</h3>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded font-medium flex-shrink-0 ${p.inStock ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {p.inStock ? 'В наличии' : 'Под заказ'}
                      </span>
                    </div>
                  </div>

                  {/* Характеристики */}
                  <div className="px-4 py-3 grid grid-cols-3 gap-2 text-center border-t border-gray-50">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{p.power}</div>
                      <div className="text-xs text-gray-400">кВт</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{p.area}</div>
                      <div className="text-xs text-gray-400">м²</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-700">{p.noise}</div>
                      <div className="text-xs text-gray-400">дБА</div>
                    </div>
                  </div>

                  {/* Цена и кнопки */}
                  <div className="px-4 pb-4">
                    <div className="text-xl font-bold text-gray-900 mb-3">
                      {p.price.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href={typeHref[p.type] || '/catalog/fankoily/'}
                        className="block text-center text-white text-sm font-semibold py-2 rounded-lg"
                        style={{ background: '#0066CC' }}
                      >
                        Подробнее
                      </Link>
                      <CompareButton modelId={p.id} modelName={p.name} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
