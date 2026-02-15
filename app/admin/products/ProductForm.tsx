'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const categories = [
  { value: 'nastennye', label: 'Настенные фанкойлы' },
  { value: 'kassetnye', label: 'Кассетные фанкойлы' },
  { value: 'kanalnye', label: 'Канальные фанкойлы' },
  { value: 'napolno-potolochnye', label: 'Напольно-потолочные' },
  { value: 'chillery', label: 'Чиллеры' },
  { value: 'vrf', label: 'VRF-системы' },
  { value: 'ventilyaciya', label: 'Вентиляция' },
  { value: 'aksessuary', label: 'Аксессуары' },
]

interface ProductData {
  id?: number
  slug: string
  name: string
  category: string
  subcategory: string
  sku: string
  price: number
  priceOld: number
  inStock: boolean
  stockCount: number
  description: string
  shortDesc: string
  images: string
  videoUrl: string
  specs: string
  features: string
  included: string
  seoTitle: string
  seoDesc: string
  seoKeywords: string
  isActive: boolean
  sortOrder: number
}

const defaultData: ProductData = {
  slug: '', name: '', category: 'nastennye', subcategory: '', sku: '',
  price: 0, priceOld: 0, inStock: true, stockCount: 0,
  description: '', shortDesc: '', images: '[]', videoUrl: '',
  specs: '{}', features: '[]', included: '[]',
  seoTitle: '', seoDesc: '', seoKeywords: '',
  isActive: true, sortOrder: 0,
}

export default function ProductForm({ initial }: { initial?: Partial<ProductData> }) {
  const router = useRouter()
  const [data, setData] = useState<ProductData>({ ...defaultData, ...initial })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function set(field: keyof ProductData, value: unknown) {
    setData(prev => ({ ...prev, [field]: value }))
  }

  async function handleSave() {
    setSaving(true)
    setError('')
    try {
      const url = data.id ? `/api/admin/products/${data.id}` : '/api/admin/products'
      const method = data.id ? 'PUT' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, price: Number(data.price), priceOld: Number(data.priceOld) || null }),
      })
      if (!res.ok) {
        const err = await res.json()
        setError(err.error || 'Ошибка сохранения')
        return
      }
      router.push('/admin/products')
      router.refresh()
    } catch {
      setError('Ошибка сети')
    } finally {
      setSaving(false)
    }
  }

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' as const }
  const labelStyle = { display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '4px' }

  return (
    <div style={{ padding: '24px', maxWidth: '900px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>
          {data.id ? 'Редактировать товар' : 'Добавить товар'}
        </h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => router.back()} style={{ padding: '10px 20px', border: '1px solid #ccc', background: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>
            Отмена
          </button>
          <button onClick={handleSave} disabled={saving} style={{ padding: '10px 20px', background: '#0066CC', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}>
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </div>
      {error && <div style={{ background: '#FFF5F5', border: '1px solid #DC3545', color: '#DC3545', padding: '10px 14px', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

      {/* Секция: Основное */}
      <Section title="Основная информация">
        <Grid>
          <Field label="Название *"><input style={inputStyle} value={data.name} onChange={e => set('name', e.target.value)} /></Field>
          <Field label="Slug (URL) *"><input style={inputStyle} value={data.slug} onChange={e => set('slug', e.target.value)} placeholder="sfh-500-v3" /></Field>
          <Field label="Категория *">
            <select style={inputStyle} value={data.category} onChange={e => set('category', e.target.value)}>
              {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </Field>
          <Field label="Артикул (SKU)"><input style={inputStyle} value={data.sku} onChange={e => set('sku', e.target.value)} /></Field>
          <Field label="Цена (₽) *"><input style={inputStyle} type="number" value={data.price} onChange={e => set('price', e.target.value)} /></Field>
          <Field label="Старая цена (₽)"><input style={inputStyle} type="number" value={data.priceOld} onChange={e => set('priceOld', e.target.value)} /></Field>
        </Grid>
        <Grid cols={3}>
          <Field label="В наличии">
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
              <input type="checkbox" checked={data.inStock} onChange={e => set('inStock', e.target.checked)} />
              Есть в наличии
            </label>
          </Field>
          <Field label="Кол-во на складе"><input style={inputStyle} type="number" value={data.stockCount} onChange={e => set('stockCount', Number(e.target.value))} /></Field>
          <Field label="Активен">
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
              <input type="checkbox" checked={data.isActive} onChange={e => set('isActive', e.target.checked)} />
              Показывать на сайте
            </label>
          </Field>
        </Grid>
        <Field label="Краткое описание"><input style={inputStyle} value={data.shortDesc} onChange={e => set('shortDesc', e.target.value)} /></Field>
        <Field label="Описание *">
          <textarea style={{ ...inputStyle, height: '120px', resize: 'vertical' }} value={data.description} onChange={e => set('description', e.target.value)} />
        </Field>
      </Section>

      {/* Секция: Медиа */}
      <Section title="Медиа">
        <Field label="Изображения (JSON массив URL)">
          <textarea style={{ ...inputStyle, height: '80px', fontFamily: 'monospace', fontSize: '12px' }} value={data.images} onChange={e => set('images', e.target.value)} />
        </Field>
        <Field label="Видео URL (YouTube)"><input style={inputStyle} value={data.videoUrl} onChange={e => set('videoUrl', e.target.value)} placeholder="https://youtube.com/..." /></Field>
      </Section>

      {/* Секция: Характеристики */}
      <Section title="Характеристики и комплектация">
        <Field label="Характеристики (JSON объект)">
          <textarea
            style={{ ...inputStyle, height: '120px', fontFamily: 'monospace', fontSize: '12px' }}
            value={data.specs}
            onChange={e => set('specs', e.target.value)}
            placeholder={'{"Мощность охлаждения": "4.51 кВт", "Уровень шума": "26 дБА"}'}
          />
        </Field>
        <Field label="Особенности (JSON массив строк)">
          <textarea
            style={{ ...inputStyle, height: '80px', fontFamily: 'monospace', fontSize: '12px' }}
            value={data.features}
            onChange={e => set('features', e.target.value)}
            placeholder='["Тихий режим", "Инвертор"]'
          />
        </Field>
        <Field label="Комплектация (JSON массив строк)">
          <textarea
            style={{ ...inputStyle, height: '80px', fontFamily: 'monospace', fontSize: '12px' }}
            value={data.included}
            onChange={e => set('included', e.target.value)}
            placeholder='["ИК-пульт", "Монтажная планка"]'
          />
        </Field>
      </Section>

      {/* Секция: SEO */}
      <Section title="SEO">
        <Field label="SEO Title"><input style={inputStyle} value={data.seoTitle} onChange={e => set('seoTitle', e.target.value)} maxLength={70} placeholder="До 70 символов" /></Field>
        <Field label="SEO Description"><textarea style={{ ...inputStyle, height: '70px' }} value={data.seoDesc} onChange={e => set('seoDesc', e.target.value)} maxLength={160} placeholder="До 160 символов" /></Field>
        <Field label="Keywords"><input style={inputStyle} value={data.seoKeywords} onChange={e => set('seoKeywords', e.target.value)} /></Field>
        <Field label="Порядок сортировки"><input style={inputStyle} type="number" value={data.sortOrder} onChange={e => set('sortOrder', Number(e.target.value))} /></Field>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginBottom: '20px', overflow: 'hidden' }}>
      <div style={{ padding: '12px 20px', background: '#f9f9f9', borderBottom: '1px solid #eee', fontSize: '14px', fontWeight: 700, color: '#1A1A1A' }}>{title}</div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>{children}</div>
    </div>
  )
}

function Grid({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '14px' }}>
      {children}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '4px' }}>{label}</label>
      {children}
    </div>
  )
}
