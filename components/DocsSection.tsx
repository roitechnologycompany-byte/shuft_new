interface DocFile {
  name: string
  description: string
  size: string        // e.g. "2.4 МБ"
  type: 'manual' | 'passport' | 'certificate' | 'scheme'
  url: string         // PDF URL (can be relative or absolute)
}

interface DocsSectionProps {
  title?: string
  docs: DocFile[]
}

const typeConfig: Record<DocFile['type'], { label: string; color: string; icon: string }> = {
  manual:      { label: 'Инструкция',  color: '#0066CC', icon: '📘' },
  passport:    { label: 'Паспорт',     color: '#28A745', icon: '📗' },
  certificate: { label: 'Сертификат',  color: '#FF6600', icon: '🏅' },
  scheme:      { label: 'Схема',       color: '#6F42C1', icon: '📐' },
}

export default function DocsSection({ title = 'Документация', docs }: DocsSectionProps) {
  if (!docs || docs.length === 0) return null

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map((doc, i) => {
          const cfg = typeConfig[doc.type]
          return (
            <a
              key={i}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div
                className="flex-shrink-0 w-12 h-14 rounded-lg flex flex-col items-center justify-center text-white text-lg font-bold"
                style={{ background: cfg.color }}
              >
                <span className="text-xl">{cfg.icon}</span>
                <span className="text-[9px] font-semibold uppercase tracking-tight mt-0.5">PDF</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold mb-0.5" style={{ color: cfg.color }}>{cfg.label}</div>
                <div className="font-bold text-gray-900 text-sm group-hover:text-blue-700 transition-colors line-clamp-2">
                  {doc.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">{doc.description}</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-400">{doc.size}</span>
                  <span className="text-xs font-semibold text-blue-600 group-hover:underline">↓ Скачать</span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
      <p className="text-xs text-gray-400 mt-4">
        Документы в формате PDF. Для просмотра необходим Adobe Acrobat Reader или другой PDF-ридер.
      </p>
    </section>
  )
}
