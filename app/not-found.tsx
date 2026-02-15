import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <div className="text-8xl mb-6">❄️</div>
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Страница не найдена</h2>
      <p className="text-gray-600 text-lg mb-8">Такой страницы не существует. Возможно, она была перемещена или удалена.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary text-lg px-8 py-4">На главную</Link>
        <Link href="/catalog/fankoily" className="btn-secondary text-lg px-8 py-4">Каталог фанкойлов</Link>
        <a href="tel:+74951203375" className="btn-accent text-lg px-8 py-4">📞 Позвонить</a>
      </div>
    </div>
  )
}
