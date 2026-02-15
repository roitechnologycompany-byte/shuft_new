import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const roomTypeLabels: Record<string, string> = {
  office: 'Офис', shop: 'Магазин/бутик', warehouse: 'Склад',
  apartment: 'Квартира', cafe: 'Кафе/ресторан', production: 'Производство', other: 'Другое',
}

async function sendTelegramNotification(app: {
  id: number; name: string; phone: string; email?: string | null
  roomType?: string | null; area?: string | null; message?: string | null; source: string
}) {
  const tokenSetting = await prisma.setting.findUnique({ where: { key: 'telegram_bot_token' } })
  const chatSetting = await prisma.setting.findUnique({ where: { key: 'telegram_chat_id' } })

  const botToken = tokenSetting?.value || process.env.TELEGRAM_BOT_TOKEN
  const chatId = chatSetting?.value || process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) return

  const roomLabel = app.roomType ? (roomTypeLabels[app.roomType] || app.roomType) : '—'
  const text = [
    `🔔 *Новая заявка #${app.id}* с shuft.online`,
    '',
    `👤 *Имя:* ${app.name}`,
    `📞 *Телефон:* ${app.phone}`,
    app.email ? `📧 *Email:* ${app.email}` : null,
    `🏠 *Тип помещения:* ${roomLabel}`,
    app.area ? `📐 *Площадь:* ${app.area} м²` : null,
    app.message ? `💬 *Сообщение:* ${app.message}` : null,
    `📍 *Источник:* ${app.source}`,
    '',
    `🔗 [Открыть в админке](https://shuft.online/admin/applications)`,
  ].filter(Boolean).join('\n')

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    })
  } catch {
    // Не блокируем ответ если Telegram недоступен
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { name, phone, email, address, roomType, area, message, source } = data

  if (!name || !phone) {
    return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
  }

  const app = await prisma.application.create({
    data: { name, phone, email, address, roomType, area, message, source: source || 'contact_form' },
  })

  // Асинхронно отправляем уведомление в Telegram (не блокируем ответ)
  sendTelegramNotification(app).catch(() => {})

  return NextResponse.json({ ok: true, id: app.id }, { status: 201 })
}
