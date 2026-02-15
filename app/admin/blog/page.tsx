'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  slug: string
  category: string
  author: string
  isPublished: boolean
  createdAt: string
}

const categoryLabels: Record<string, string> = {
  guides: 'Гайды',
  reviews: 'Обзоры',
  cases: 'Кейсы',
  news: 'Новости',
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  function load() {
    setLoading(true)
    fetch('/api/admin/blog').then(r => r.json()).then(d => { setPosts(d.posts); setTotal(d.total); setLoading(false) })
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id: number) {
    if (!confirm('Удалить статью?')) return
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Блог <span style={{ color: '#999', fontSize: '16px' }}>({total})</span></h1>
        <Link href="/admin/blog/new" style={{ background: '#0066CC', color: '#fff', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
          + Написать статью
        </Link>
      </div>
      <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Загрузка...</div> :
          posts.length === 0 ? <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Статей нет</div> : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                  {['Заголовок', 'Категория', 'Автор', 'Опубликована', 'Дата', 'Действия'].map(h => (
                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {posts.map(p => (
                  <tr key={p.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, maxWidth: '300px' }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</span>
                      <span style={{ fontSize: '11px', color: '#999' }}>/blog/{p.slug}</span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{categoryLabels[p.category] || p.category}</td>
                    <td style={{ padding: '12px 16px', color: '#666', fontSize: '12px' }}>{p.author}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ color: p.isPublished ? '#28A745' : '#DC3545', fontWeight: 600, fontSize: '13px' }}>
                        {p.isPublished ? '✓ Да' : '✗ Нет'}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#999', fontSize: '12px' }}>
                      {new Date(p.createdAt).toLocaleDateString('ru-RU')}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <Link href={`/admin/blog/${p.id}`} style={{ color: '#0066CC', marginRight: '12px', fontSize: '13px' }}>Ред.</Link>
                      <button onClick={() => handleDelete(p.id)} style={{ color: '#DC3545', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>Удалить</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>
    </div>
  )
}
