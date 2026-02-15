'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface ProjectData {
  id?: number
  slug: string; title: string; description: string; address: string; area: string
  task: string; solution: string; result: string; cost: string; category: string
  images: string; products: string; seoTitle: string; seoDesc: string; isPublished: boolean; sortOrder: number
}

const defaults: ProjectData = {
  slug:'',title:'',description:'',address:'',area:'',task:'',solution:'',result:'',cost:'',
  category:'ofisy',images:'[]',products:'[]',seoTitle:'',seoDesc:'',isPublished:true,sortOrder:0
}

export default function ProjectForm({ initial }: { initial?: Partial<ProjectData> }) {
  const router = useRouter()
  const [data, setData] = useState<ProjectData>({ ...defaults, ...initial })
  const [saving, setSaving] = useState(false)
  const set = (f: keyof ProjectData, v: unknown) => setData(p => ({...p,[f]:v}))
  const inputStyle = { width:'100%',padding:'10px 12px',border:'1px solid #ccc',borderRadius:'4px',fontSize:'14px',boxSizing:'border-box' as const }

  async function handleSave() {
    setSaving(true)
    const url = data.id ? `/api/admin/projects/${data.id}` : '/api/admin/projects'
    const res = await fetch(url,{method:data.id?'PUT':'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
    setSaving(false)
    if (res.ok) { router.push('/admin/projects'); router.refresh() }
  }

  return (
    <div style={{padding:'24px',maxWidth:'900px'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'24px'}}>
        <h1 style={{fontSize:'22px',fontWeight:700,margin:0}}>{data.id?'Редактировать проект':'Новый проект'}</h1>
        <div style={{display:'flex',gap:'10px'}}>
          <button onClick={()=>router.back()} style={{padding:'10px 20px',border:'1px solid #ccc',background:'#fff',borderRadius:'4px',cursor:'pointer'}}>Отмена</button>
          <button onClick={handleSave} disabled={saving} style={{padding:'10px 20px',background:'#0066CC',color:'#fff',border:'none',borderRadius:'4px',cursor:'pointer',fontWeight:600}}>
            {saving?'Сохранение...':'Сохранить'}
          </button>
        </div>
      </div>

      {[
        ['Основное', [
          ['grid2',[['Название *','title','input'],['Slug','slug','input']]],
          ['grid2',[['Категория','category','select'],['Адрес','address','input']]],
          ['grid2',[['Площадь','area','input'],['Стоимость','cost','input']]],
          ['full',['Описание','description','textarea']],
        ]],
        ['Детали проекта', [
          ['full',['Задача','task','textarea']],
          ['full',['Решение','solution','textarea']],
          ['full',['Результат','result','textarea']],
        ]],
        ['Медиа и SEO', [
          ['full',['Изображения (JSON)','images','textarea']],
          ['full',['Использованные товары (JSON)','products','textarea']],
          ['full',['SEO Title','seoTitle','input']],
          ['full',['SEO Description','seoDesc','textarea']],
        ]],
      ].map(([sTitle, fields]) => (
        <div key={sTitle as string} style={{background:'#fff',borderRadius:'8px',boxShadow:'0 1px 4px rgba(0,0,0,0.08)',marginBottom:'20px',overflow:'hidden'}}>
          <div style={{padding:'12px 20px',background:'#f9f9f9',borderBottom:'1px solid #eee',fontWeight:700,fontSize:'14px'}}>{sTitle as string}</div>
          <div style={{padding:'20px',display:'flex',flexDirection:'column',gap:'14px'}}>
            {(fields as unknown[]).map((f: unknown) => {
              const field = f as unknown[]
              if (field[0] === 'grid2') {
                return (
                  <div key={String(field[1])} style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
                    {(field[1] as unknown[]).map((ff: unknown) => {
                      const fld = ff as string[]
                      return (
                        <div key={fld[1]}>
                          <label style={{display:'block',fontSize:'13px',fontWeight:600,marginBottom:'4px'}}>{fld[0]}</label>
                          {fld[1]==='category'?<select style={inputStyle} value={data.category} onChange={e=>set('category',e.target.value)}>
                            {[['ofisy','Офисы'],['torgovye-centry','Торговые центры'],['proizvodstvo','Производство'],['restorany','Рестораны'],['sklady','Склады']].map(([v,l])=><option key={v} value={v}>{l}</option>)}
                          </select>:<input style={inputStyle} value={String(data[fld[1] as keyof ProjectData]||'')} onChange={e=>set(fld[1] as keyof ProjectData,e.target.value)}/>}
                        </div>
                      )
                    })}
                  </div>
                )
              }
              const fld = field[1] as string[]
              return (
                <div key={fld[1]}>
                  <label style={{display:'block',fontSize:'13px',fontWeight:600,marginBottom:'4px'}}>{fld[0]}</label>
                  {fld[2]==='textarea'?<textarea style={{...inputStyle,height:'80px',resize:'vertical'}} value={String(data[fld[1] as keyof ProjectData]||'')} onChange={e=>set(fld[1] as keyof ProjectData,e.target.value)}/>
                  :<input style={inputStyle} value={String(data[fld[1] as keyof ProjectData]||'')} onChange={e=>set(fld[1] as keyof ProjectData,e.target.value)}/>}
                </div>
              )
            })}
            {sTitle==='Медиа и SEO'&&<div>
              <label style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',cursor:'pointer'}}>
                <input type="checkbox" checked={data.isPublished} onChange={e=>set('isPublished',e.target.checked)}/>Опубликован
              </label>
            </div>}
          </div>
        </div>
      ))}
    </div>
  )
}
