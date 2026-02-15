import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'dev.db')
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` })
const prisma = new PrismaClient({ adapter } as any)

async function main() {
  console.log('Seeding database...')

  // Создаём администратора
  const adminPassword = await bcrypt.hash('admin123', 12)
  await prisma.user.upsert({
    where: { email: 'admin@shuft.online' },
    update: {},
    create: { email: 'admin@shuft.online', password: adminPassword, name: 'Администратор', role: 'admin' },
  })
  console.log('✓ Admin user created: admin@shuft.online / admin123')

  // Создаём настройки компании
  const companySettings = [
    { key: 'company_name', value: 'ООО "АСПРОМСИСТЕМ"', group: 'general', label: 'Название компании' },
    { key: 'site_name', value: 'Shuft.Online', group: 'general', label: 'Название сайта' },
    { key: 'site_description', value: 'Официальный дилер Shuft в Москве', group: 'general', label: 'Описание сайта' },
    { key: 'phone', value: '+7 (495) 120-33-75', group: 'contacts', label: 'Телефон' },
    { key: 'email', value: 'info@shuft.online', group: 'contacts', label: 'Email' },
    { key: 'address', value: 'г. Москва, пл. Спартаковская, д. 14, стр. 3, пом. 3Н', group: 'contacts', label: 'Адрес' },
    { key: 'working_hours', value: 'Пн–Пт: 9:00–18:00', group: 'contacts', label: 'Часы работы' },
    { key: 'meta_title', value: 'Фанкойлы Shuft в Москве — официальный дилер Shuft.Online', group: 'seo', label: 'SEO Title' },
    { key: 'meta_description', value: 'Официальный дилер Shuft в Москве. Фанкойлы, чиллеры, VRF-системы. Гарантия 3 года, монтаж за 1–3 дня.', group: 'seo', label: 'SEO Description' },
    { key: 'meta_keywords', value: 'фанкойлы shuft, shuft москва, официальный дилер shuft', group: 'seo', label: 'Keywords' },
    { key: 'yandex_metrika', value: '', group: 'seo', label: 'Яндекс.Метрика ID' },
    { key: 'google_analytics', value: '', group: 'seo', label: 'Google Analytics ID' },
    { key: 'telegram_bot_token', value: '', group: 'integrations', label: 'Telegram Bot Token' },
    { key: 'telegram_chat_id', value: '', group: 'integrations', label: 'Telegram Chat ID' },
  ]
  for (const s of companySettings) {
    await prisma.setting.upsert({ where: { key: s.key }, update: {}, create: s })
  }
  console.log('✓ Company settings created')

  // Создаём товары
  const products = [
    {
      slug: 'sfh-500-v3', name: 'Настенный фанкойл Shuft SFH-500 V3', category: 'nastennye', sku: 'SFH-500-V3',
      price: 56960, inStock: true, stockCount: 3,
      shortDesc: 'Настенный фанкойл для офисов и квартир до 45 м²',
      description: 'Настенный фанкойл Shuft SFH-500 V3 — современное климатическое оборудование для офисов, магазинов и квартир площадью до 45 м². Уровень шума 26 дБА. Гарантия 3 года.',
      specs: JSON.stringify({ 'Мощность охлаждения': '4.51 кВт', 'Мощность обогрева': '6.77 кВт', 'Расход воздуха': '841 м³/ч', 'Уровень шума': '26 дБА', 'Площадь': 'до 45 м²', 'Вес': '15 кг', 'Напряжение': '220 В, 50 Гц' }),
      included: JSON.stringify(['ИК-пульт управления', 'Монтажная планка', 'Комплект крепежа', 'Дренажный шланг 1.5 м', 'Воздушный фильтр', 'Руководство по эксплуатации', 'Гарантийный талон']),
      seoTitle: 'Shuft SFH-500 V3 — настенный фанкойл 4.5 кВт | Цена 56 960 ₽',
      seoDesc: 'SFH-500 V3 — настенный фанкойл 4.5 кВт для офисов 30–45 м². Тихий режим 26 дБА. Гарантия 3 года, монтаж за 1–3 дня.',
      sortOrder: 1,
    },
    {
      slug: 'sfh-800-v3', name: 'Настенный фанкойл Shuft SFH-800 V3', category: 'nastennye', sku: 'SFH-800-V3',
      price: 68450, inStock: true, stockCount: 2,
      shortDesc: 'Настенный фанкойл для офисов и магазинов до 70 м²',
      description: 'Настенный фанкойл Shuft SFH-800 V3 мощностью 7 кВт для помещений площадью до 70 м². Низкий уровень шума, высокая надёжность. Гарантия 3 года.',
      specs: JSON.stringify({ 'Мощность охлаждения': '7.0 кВт', 'Мощность обогрева': '9.2 кВт', 'Расход воздуха': '1200 м³/ч', 'Уровень шума': '28 дБА', 'Площадь': 'до 70 м²' }),
      seoTitle: 'Shuft SFH-800 V3 — настенный фанкойл 7 кВт | Купить в Москве',
      seoDesc: 'SFH-800 V3 — мощный настенный фанкойл для офисов 50–70 м². Гарантия 3 года.',
      sortOrder: 2,
    },
    {
      slug: 'sfr-950f', name: 'Кассетный фанкойл Shuft SFR-950F', category: 'kassetnye', sku: 'SFR-950F',
      price: 72450, inStock: true, stockCount: 1,
      shortDesc: 'Встраиваемый кассетный фанкойл для офисов и ТЦ',
      description: 'Кассетный фанкойл Shuft SFR-950F встраивается в подвесной потолок. Равномерное распределение воздуха в 4 стороны. Для офисов и торговых помещений.',
      specs: JSON.stringify({ 'Мощность охлаждения': '9.5 кВт', 'Расход воздуха': '1600 м³/ч', 'Площадь': 'до 90 м²', 'Уровень шума': '32 дБА' }),
      seoTitle: 'Shuft SFR-950F — кассетный фанкойл | Купить в Москве',
      seoDesc: 'Кассетный фанкойл SFR-950F для офисов до 90 м². Встроен в потолок, воздух во все 4 стороны.',
      sortOrder: 10,
    },
    {
      slug: 'sff-300g50', name: 'Канальный фанкойл Shuft SFF-300G50', category: 'kanalnye', sku: 'SFF-300G50',
      price: 42180, inStock: true, stockCount: 5,
      shortDesc: 'Скрытый канальный фанкойл для квартир и малых офисов',
      description: 'Канальный фанкойл Shuft SFF-300G50 монтируется внутри воздуховодов и не виден в интерьере. Идеален для квартир и небольших офисов.',
      specs: JSON.stringify({ 'Мощность охлаждения': '3.0 кВт', 'Расход воздуха': '500 м³/ч', 'Площадь': 'до 30 м²', 'Уровень шума': '22 дБА' }),
      seoTitle: 'Shuft SFF-300G50 — канальный фанкойл | Купить в Москве',
      seoDesc: 'Канальный скрытый фанкойл SFF-300G50 для квартир и офисов. Не виден в интерьере.',
      sortOrder: 20,
    },
    {
      slug: 'sff-400', name: 'Напольно-потолочный фанкойл Shuft SFF-400', category: 'napolno-potolochnye', sku: 'SFF-400',
      price: 43930, inStock: true, stockCount: 4,
      shortDesc: 'Универсальный напольно-потолочный фанкойл',
      description: 'Напольно-потолочный фанкойл Shuft SFF-400 устанавливается на пол или подвешивается к потолку. Универсальное решение для офисов и торговых помещений.',
      specs: JSON.stringify({ 'Мощность охлаждения': '4.0 кВт', 'Расход воздуха': '700 м³/ч', 'Площадь': 'до 40 м²', 'Уровень шума': '24 дБА' }),
      seoTitle: 'Shuft SFF-400 — напольно-потолочный фанкойл | Москва',
      seoDesc: 'Универсальный SFF-400: монтаж на пол или потолок. Для офисов 30–40 м².',
      sortOrder: 30,
    },
  ]

  for (const p of products) {
    await prisma.product.upsert({ where: { slug: p.slug }, update: {}, create: { ...p, images: '[]', features: '[]', included: p.included || '[]' } })
  }
  console.log('✓ Products created')

  // FAQ
  const faqs = [
    { question: 'Где купить фанкойлы Shuft в Москве с гарантией?', answer: 'Фанкойлы Shuft с гарантией производителя 3 года покупают на нашем сайте shuft.online или по телефону +7 (495) 120-33-75. Мы — официальный дилер Shuft в Москве. Доставка по Москве за 24 часа, монтаж за 1–3 дня.', category: 'general', sortOrder: 1 },
    { question: 'Какой фанкойл Shuft выбрать для офиса 50 м²?', answer: 'Для офиса площадью 50 м² рекомендуем настенный фанкойл Shuft SFH-500 V3 мощностью 4.5 кВт. Он охладит помещение за 15–20 минут, работает тихо (уровень шума 26 дБА). Цена 56 960 рублей.', category: 'products', sortOrder: 2 },
    { question: 'Сколько стоит монтаж фанкойла Shuft?', answer: 'Монтаж одного фанкойла Shuft стоит от 5 000 до 8 000 рублей в зависимости от типа и сложности установки. Монтаж выполняют лицензированные специалисты за 1–3 дня. Даём гарантию на работы.', category: 'installation', sortOrder: 3 },
    { question: 'Есть ли гарантия на фанкойлы Shuft?', answer: 'Да, гарантия производителя Shuft — 3 года на все фанкойлы, чиллеры и VRF-системы. Техническая поддержка 24/7. Запчасти всегда в наличии на складе.', category: 'warranty', sortOrder: 4 },
    { question: 'Фанкойлы Shuft шумные?', answer: 'Нет, фанкойлы Shuft — одни из самых тихих на рынке. Уровень шума: 19–26 дБА. Это тише, чем работающий холодильник. Можно ставить в переговорных и спальнях.', category: 'products', sortOrder: 5 },
    { question: 'Где производят фанкойлы Shuft?', answer: 'Shuft — европейский бренд, основанный в Дании в 1994 году. Сейчас производство полностью локализовано в России (Московская область). Европейское качество по российской цене.', category: 'general', sortOrder: 6 },
    { question: 'Как быстро доставят фанкойл Shuft в Москве?', answer: 'Доставка по Москве в пределах МКАД занимает 24 часа с момента оплаты. Популярные модели всегда есть на складе. Можем доставить в день заказа.', category: 'delivery', sortOrder: 7 },
  ]

  for (let i = 0; i < faqs.length; i++) {
    const f = faqs[i]
    const existing = await prisma.faq.findFirst({ where: { question: f.question } })
    if (!existing) await prisma.faq.create({ data: f })
  }
  console.log('✓ FAQ created')

  // Отзывы
  const reviews = [
    { name: 'Игорь Петров', company: 'ООО ВебСтудия', city: 'Москва', rating: 5, text: 'Прекрасный фанкойл, быстро охлаждает, тихий. Монтаж за день. Рекомендую всем!', isApproved: true },
    { name: 'Мария Соколова', company: 'ООО ТорговаяСеть', city: 'Москва', rating: 5, text: 'Работаем с фанкойлами Shuft в ТЦ уже 3 года. Ни одной поломки. Очень довольны качеством.', isApproved: true },
    { name: 'Максим Иванов', city: 'Московская область', rating: 5, text: 'Купили 3 настенных фанкойла для коттеджа. Работают бесшумно, экономичны. Отличное качество!', isApproved: true },
  ]

  for (const r of reviews) {
    const existing = await prisma.review.findFirst({ where: { name: r.name } })
    if (!existing) await prisma.review.create({ data: r })
  }
  console.log('✓ Reviews created')

  // Тестовая заявка
  const existing = await prisma.application.findFirst()
  if (!existing) {
    await prisma.application.create({
      data: { name: 'Тест Тестов', phone: '+7 (900) 000-00-00', email: 'test@test.ru', roomType: 'office', area: '50', message: 'Тестовая заявка для проверки системы', source: 'contact_form', status: 'new' }
    })
    console.log('✓ Test application created')
  }

  console.log('\n✅ Database seeded successfully!')
  console.log('Login: admin@shuft.online / admin123')
}

main().catch(console.error).finally(() => prisma.$disconnect())
