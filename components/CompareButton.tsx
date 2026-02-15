'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface CompareButtonProps {
  modelId: string
  modelName: string
}

const MAX_COMPARE = 5

export default function CompareButton({ modelId, modelName }: CompareButtonProps) {
  const [inCompare, setInCompare] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('shuft_compare')
    const list: string[] = saved ? JSON.parse(saved) : []
    setInCompare(list.includes(modelId))
    setCount(list.length)
  }, [modelId])

  function toggle() {
    const saved = localStorage.getItem('shuft_compare')
    let list: string[] = saved ? JSON.parse(saved) : []

    if (list.includes(modelId)) {
      list = list.filter(id => id !== modelId)
      setInCompare(false)
    } else {
      if (list.length >= MAX_COMPARE) {
        alert(`Можно сравнивать не более ${MAX_COMPARE} моделей`)
        return
      }
      list = [...list, modelId]
      setInCompare(true)
    }
    localStorage.setItem('shuft_compare', JSON.stringify(list))
    setCount(list.length)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggle}
        title={inCompare ? `Убрать ${modelName} из сравнения` : `Добавить ${modelName} в сравнение`}
        className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded border transition-colors ${
          inCompare
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-500 border-gray-300 hover:border-blue-400 hover:text-blue-600'
        }`}
      >
        <span>⚖️</span>
        <span>{inCompare ? 'В сравнении' : 'Сравнить'}</span>
      </button>
      {count > 1 && (
        <Link
          href="/catalog/compare/"
          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          Сравнить ({count}) →
        </Link>
      )}
    </div>
  )
}
