'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  slug: string
  category: string
  area: string | null
  cost: string | null
  isPublished: boolean
  createdAt: string
}

const catLabels: Record<string, string> = {
  ofisy: 'Офисы', 'torgovye-centry': 'Торговые центры', proizvodstvo: 'Производство', restorany: 'Рестораны', sklady: 'Склады'
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  function load() {
    setLoading(true)
    fetch('/api/admin/projects').then(r => r.json()).then(d => { setProjects(d); setLoading(false) })
  }
  useEffect(() => { load() }, [])

  async function handleDelete(id: number) {
    if (!confirm('Удалить проект?')) return
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Проекты <span style={{ color: '#999', fontSize: '16px' }}>({projects.length})</span></h1>
        <Link href="/admin/projects/new" style={{ background: '#0066CC', color: '#fff', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
          + Добавить проект
        </Link>
      </div>
      <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Загрузка...</div> :
          projects.length === 0 ? <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Проектов нет</div> : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                  {['Название', 'Категория', 'Площадь', 'Стоимость', 'Опубликован', 'Действия'].map(h => (
                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: '#666', fontWeight: 600, fontSize: '12px' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projects.map(p => (
                  <tr key={p.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>{p.title}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{catLabels[p.category] || p.category}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{p.area || '—'}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{p.cost || '—'}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ color: p.isPublished ? '#28A745' : '#DC3545', fontWeight: 600 }}>{p.isPublished ? '✓' : '✗'}</span>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <Link href={`/admin/projects/${p.id}`} style={{ color: '#0066CC', marginRight: '12px', fontSize: '13px' }}>Ред.</Link>
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
