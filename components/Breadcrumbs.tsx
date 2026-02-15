import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `https://shuft.online${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Хлебные крошки" className="text-sm text-gray-500 py-3">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <span className="text-gray-400">›</span>}
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className={index === items.length - 1 ? 'text-gray-800' : ''}>{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
