'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  category: string
  sku: string | null
  price: number
  inStock: boolean
  isActive: boolean
  createdAt: string
}

const categoryLabels: Record<string, string> = {
  nastennye: 'Настенные',
  kassetnye: 'Кассетные',
  kanalnye: 'Канальные',
  'napolno-potolochnye': 'Напольно-потолочные',
  chillery: 'Чиллеры',
  vrf: 'VRF-системы',
  ventilyaciya: 'Вентиляция',
  aksessuary: 'Аксессуары',
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)

  function load() {
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), limit: '20' })
    if (search) params.set('search', search)
    if (category) params.set('category', category)
    fetch('/api/admin/products?' + params)
      .then(r => r.json())
      .then(d => { setProducts(d.products); setTotal(d.total); setLoading(false) })
  }

  useEffect(() => { load() }, [page, category])

  async function handleDelete(id: number) {
    if (!confirm('Удалить товар?')) return
    await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Товары <span style={{ color: '#999', fontSize: '16px' }}>({total})</span></h1>
        <Link href="/admin/products/new" style={{ background: '#0066CC', color: '#fff', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
          + Добавить товар
        </Link>
      </div>

      {/* Фильтры */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && load()}
          placeholder="Поиск по названию..."
          style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', width: '250px', fontSize: '14px' }}
        />
        <select
          value={category}
          onChange={e => { setCategory(e.target.value); setPage(1) }}
          style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
        >
          <option value="">Все категории</option>
          {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <button onClick={load} style={{ padding: '8px 16px', background: '#0066CC', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>
          Найти
        </button>
      </div>

      {/* Таблица */}
      <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Загрузка...</div>
        ) : products.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Товаров нет. <Link href="/admin/products/new" style={{ color: '#0066CC' }}>Добавить первый товар</Link></div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                <th style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>ID</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>Название</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>Категория</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>Артикул</th>
                <th style={{ padding: '10px 16px', textAlign: 'right', color: '#666', fontWeight: 600, fontSize: '12px' }}>Цена</th>
                <th style={{ padding: '10px 16px', textAlign: 'center', color: '#666', fontWeight: 600, fontSize: '12px' }}>Наличие</th>
                <th style={{ padding: '10px 16px', textAlign: 'center', color: '#666', fontWeight: 600, fontSize: '12px' }}>Активен</th>
                <th style={{ padding: '10px 16px', textAlign: 'right', color: '#666', fontWeight: 600, fontSize: '12px' }}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 16px', color: '#999' }}>{p.id}</td>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{p.name}</td>
                  <td style={{ padding: '12px 16px', color: '#666' }}>{categoryLabels[p.category] || p.category}</td>
                  <td style={{ padding: '12px 16px', color: '#666', fontFamily: 'monospace', fontSize: '12px' }}>{p.sku || '—'}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 600 }}>{p.price.toLocaleString('ru-RU')} ₽</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <span style={{ color: p.inStock ? '#28A745' : '#DC3545', fontWeight: 600 }}>{p.inStock ? '✓' : '✗'}</span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <span style={{ color: p.isActive ? '#28A745' : '#DC3545', fontWeight: 600 }}>{p.isActive ? '✓' : '✗'}</span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <Link href={`/admin/products/${p.id}`} style={{ color: '#0066CC', marginRight: '12px', fontSize: '13px' }}>Ред.</Link>
                    <button onClick={() => handleDelete(p.id)} style={{ color: '#DC3545', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Пагинация */}
      {total > 20 && (
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
          {Array.from({ length: Math.ceil(total / 20) }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{ padding: '6px 12px', background: p === page ? '#0066CC' : '#fff', color: p === page ? '#fff' : '#333', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', fontWeight: p === page ? 700 : 400 }}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
