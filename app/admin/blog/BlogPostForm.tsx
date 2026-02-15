'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PostData {
  id?: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  category: string
  tags: string
  seoTitle: string
  seoDesc: string
  seoKeywords: string
  isPublished: boolean
}

const defaultData: PostData = {
  slug: '', title: '', excerpt: '', content: '', image: '',
  author: 'Редакция Shuft.Online', category: 'guides',
  tags: '[]', seoTitle: '', seoDesc: '', seoKeywords: '', isPublished: false,
}

export default function BlogPostForm({ initial }: { initial?: Partial<PostData> }) {
  const router = useRouter()
  const [data, setData] = useState<PostData>({ ...defaultData, ...initial })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function set(field: keyof PostData, value: unknown) {
    setData(prev => ({ ...prev, [field]: value }))
  }

  async function handleSave() {
    setSaving(true)
    setError('')
    const url = data.id ? `/api/admin/blog/${data.id}` : '/api/admin/blog'
    const method = data.id ? 'PUT' : 'POST'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    setSaving(false)
    if (res.ok) { router.push('/admin/blog'); router.refresh() }
    else { const e = await res.json(); setError(e.error || 'Ошибка') }
  }

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' as const }

  return (
    <div style={{ padding: '24px', maxWidth: '900px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>{data.id ? 'Редактировать статью' : 'Новая статья'}</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => router.back()} style={{ padding: '10px 20px', border: '1px solid #ccc', background: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Отмена</button>
          <button onClick={handleSave} disabled={saving} style={{ padding: '10px 20px', background: '#0066CC', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 }}>
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </div>
      {error && <div style={{ background: '#FFF5F5', border: '1px solid #DC3545', color: '#DC3545', padding: '10px 14px', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

      <Block title="Основное">
        <Field label="Заголовок *"><input style={inputStyle} value={data.title} onChange={e => set('title', e.target.value)} /></Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <Field label="Slug (URL)"><input style={inputStyle} value={data.slug} onChange={e => set('slug', e.target.value)} /></Field>
          <Field label="Категория">
            <select style={inputStyle} value={data.category} onChange={e => set('category', e.target.value)}>
              <option value="guides">Гайды</option>
              <option value="reviews">Обзоры</option>
              <option value="cases">Кейсы</option>
              <option value="news">Новости</option>
            </select>
          </Field>
          <Field label="Автор"><input style={inputStyle} value={data.author} onChange={e => set('author', e.target.value)} /></Field>
          <Field label="Изображение (URL)"><input style={inputStyle} value={data.image} onChange={e => set('image', e.target.value)} /></Field>
        </div>
        <Field label="Краткое описание"><textarea style={{ ...inputStyle, height: '70px' }} value={data.excerpt} onChange={e => set('excerpt', e.target.value)} /></Field>
        <Field label="Опубликована">
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
            <input type="checkbox" checked={data.isPublished} onChange={e => set('isPublished', e.target.checked)} />
            Опубликовать статью
          </label>
        </Field>
      </Block>

      <Block title="Содержание">
        <Field label="Текст статьи *">
          <textarea style={{ ...inputStyle, height: '400px', resize: 'vertical', fontFamily: 'monospace', fontSize: '13px' }} value={data.content} onChange={e => set('content', e.target.value)} placeholder="HTML или Markdown..." />
        </Field>
      </Block>

      <Block title="SEO">
        <Field label="SEO Title"><input style={inputStyle} value={data.seoTitle} onChange={e => set('seoTitle', e.target.value)} maxLength={70} /></Field>
        <Field label="SEO Description"><textarea style={{ ...inputStyle, height: '70px' }} value={data.seoDesc} onChange={e => set('seoDesc', e.target.value)} maxLength={160} /></Field>
        <Field label="Keywords"><input style={inputStyle} value={data.seoKeywords} onChange={e => set('seoKeywords', e.target.value)} /></Field>
      </Block>
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginBottom: '20px', overflow: 'hidden' }}>
      <div style={{ padding: '12px 20px', background: '#f9f9f9', borderBottom: '1px solid #eee', fontSize: '14px', fontWeight: 700 }}>{title}</div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>{children}</div>
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
