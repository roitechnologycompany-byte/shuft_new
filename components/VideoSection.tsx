'use client'

import { useState } from 'react'

interface Video {
  id: string        // YouTube video ID
  title: string
  description?: string
  duration?: string // e.g. "5:32"
}

interface VideoSectionProps {
  title?: string
  videos: Video[]
}

export default function VideoSection({ title = 'Видео-обзоры', videos }: VideoSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [playing, setPlaying] = useState(false)

  if (!videos || videos.length === 0) return null

  const active = videos[activeIdx]

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main player */}
        <div className="flex-1">
          <div className="relative bg-black rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            {playing ? (
              <iframe
                key={active.id}
                src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label={`Смотреть видео: ${active.title}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${active.id}/hqdefault.jpg`}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {active.duration && (
                  <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                    {active.duration}
                  </span>
                )}
              </button>
            )}
          </div>
          <div className="mt-3">
            <h3 className="font-bold text-gray-900 text-lg">{active.title}</h3>
            {active.description && (
              <p className="text-gray-500 text-sm mt-1">{active.description}</p>
            )}
          </div>
        </div>

        {/* Playlist — show only if multiple videos */}
        {videos.length > 1 && (
          <div className="lg:w-64 flex-shrink-0 space-y-2">
            {videos.map((v, i) => (
              <button
                key={v.id}
                onClick={() => { setActiveIdx(i); setPlaying(false) }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                  i === activeIdx
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-100 bg-white hover:border-blue-200 hover:bg-gray-50'
                }`}
              >
                <div className="relative flex-shrink-0 w-20 h-12 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover"
                  />
                  {v.duration && (
                    <span className="absolute bottom-0.5 right-0.5 bg-black/80 text-white text-[10px] px-1 rounded">
                      {v.duration}
                    </span>
                  )}
                </div>
                <span className={`text-xs font-medium line-clamp-2 ${i === activeIdx ? 'text-blue-700' : 'text-gray-700'}`}>
                  {v.title}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
