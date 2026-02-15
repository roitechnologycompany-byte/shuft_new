import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Shuft.Online',
  description: 'Политика конфиденциальности сайта shuft.online. ООО АСПРОМСИСТЕМ.',
  alternates: { canonical: 'https://shuft.online/privacy-policy/' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Политика конфиденциальности' }]} />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p><strong>Действует с:</strong> 1 января 2026 г.</p>
        <p>Настоящая Политика конфиденциальности регулирует порядок обработки персональных данных пользователей сайта shuft.online, принадлежащего ООО «АСПРОМСИСТЕМ» (ИНН 9729019077).</p>
        <h2 className="text-xl font-bold text-gray-900">1. Собираемые данные</h2>
        <p>Мы собираем следующие персональные данные при заполнении форм: ФИО, номер телефона, email, адрес объекта, тип и площадь помещения. Также автоматически собираются технические данные: IP-адрес, данные cookies, статистика посещений.</p>
        <h2 className="text-xl font-bold text-gray-900">2. Цель обработки данных</h2>
        <p>Персональные данные обрабатываются для: ответа на запросы и консультаций, подготовки коммерческих предложений, выполнения договорных обязательств, улучшения качества сервиса.</p>
        <h2 className="text-xl font-bold text-gray-900">3. Передача данных третьим лицам</h2>
        <p>Мы не передаём персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ.</p>
        <h2 className="text-xl font-bold text-gray-900">4. Хранение данных</h2>
        <p>Персональные данные хранятся не более 3 лет с момента последнего взаимодействия. По вашему запросу данные будут удалены в течение 30 дней.</p>
        <h2 className="text-xl font-bold text-gray-900">5. Контакты</h2>
        <p>По вопросам обработки персональных данных: <a href="mailto:info@shuft.online" className="text-blue-600">info@shuft.online</a>, тел. <a href="tel:+74951203375" className="text-blue-600">+7 (495) 120-33-75</a></p>
      </div>
    </div>
  )
}
