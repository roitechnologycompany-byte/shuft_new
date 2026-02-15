import nodemailer from 'nodemailer'
import { prisma } from './prisma'

async function getSmtpConfig() {
  const keys = ['smtp_host', 'smtp_port', 'smtp_user', 'smtp_password', 'smtp_from', 'notify_email']
  const settings = await prisma.setting.findMany({ where: { key: { in: keys } } })
  const map: Record<string, string> = {}
  settings.forEach(s => { map[s.key] = s.value || '' })
  return map
}

interface EmailPayload {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  try {
    const cfg = await getSmtpConfig()

    const host = cfg['smtp_host'] || process.env.SMTP_HOST
    const port = parseInt(cfg['smtp_port'] || process.env.SMTP_PORT || '587', 10)
    const user = cfg['smtp_user'] || process.env.SMTP_USER
    const pass = cfg['smtp_password'] || process.env.SMTP_PASSWORD
    const from = cfg['smtp_from'] || process.env.SMTP_FROM || 'noreply@shuft.online'

    if (!host || !user || !pass) return false

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"Shuft.Online" <${from}>`,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    })

    return true
  } catch {
    return false
  }
}

const roomTypeLabels: Record<string, string> = {
  office: 'Офис', shop: 'Магазин/бутик', warehouse: 'Склад',
  apartment: 'Квартира', cafe: 'Кафе/ресторан', production: 'Производство', other: 'Другое',
}

export async function sendApplicationEmail(app: {
  id: number; name: string; phone: string; email?: string | null
  roomType?: string | null; area?: string | null; message?: string | null; source: string
}): Promise<void> {
  const cfg = await getSmtpConfig()
  const notifyEmail = cfg['notify_email'] || process.env.NOTIFY_EMAIL
  if (!notifyEmail) return

  const roomLabel = app.roomType ? (roomTypeLabels[app.roomType] || app.roomType) : '—'

  const html = `
<!DOCTYPE html>
<html lang="ru">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:24px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
    <div style="background:linear-gradient(135deg,#0066CC,#004499);padding:24px 32px;">
      <h1 style="color:#fff;margin:0;font-size:20px;">🔔 Новая заявка с shuft.online</h1>
      <p style="color:#99bbff;margin:6px 0 0;font-size:14px;">Заявка #${app.id} • ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</p>
    </div>
    <div style="padding:24px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;color:#666;font-size:14px;width:40%;">👤 Имя</td>
          <td style="padding:8px 0;font-weight:bold;font-size:14px;color:#111;">${app.name}</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 0;color:#666;font-size:14px;">📞 Телефон</td>
          <td style="padding:8px 0;font-weight:bold;font-size:14px;"><a href="tel:${app.phone}" style="color:#0066CC;">${app.phone}</a></td>
        </tr>
        ${app.email ? `
        <tr>
          <td style="padding:8px 0;color:#666;font-size:14px;">📧 Email</td>
          <td style="padding:8px 0;font-size:14px;"><a href="mailto:${app.email}" style="color:#0066CC;">${app.email}</a></td>
        </tr>` : ''}
        <tr style="background:#f8fafc;">
          <td style="padding:8px 0;color:#666;font-size:14px;">🏠 Тип помещения</td>
          <td style="padding:8px 0;font-size:14px;color:#111;">${roomLabel}</td>
        </tr>
        ${app.area ? `
        <tr>
          <td style="padding:8px 0;color:#666;font-size:14px;">📐 Площадь</td>
          <td style="padding:8px 0;font-size:14px;color:#111;">${app.area} м²</td>
        </tr>` : ''}
        ${app.message ? `
        <tr style="background:#f8fafc;">
          <td style="padding:8px 0;color:#666;font-size:14px;vertical-align:top;">💬 Сообщение</td>
          <td style="padding:8px 0;font-size:14px;color:#111;">${app.message}</td>
        </tr>` : ''}
        <tr>
          <td style="padding:8px 0;color:#666;font-size:14px;">📍 Источник</td>
          <td style="padding:8px 0;font-size:14px;color:#111;">${app.source}</td>
        </tr>
      </table>
    </div>
    <div style="padding:16px 32px 24px;border-top:1px solid #eee;">
      <a href="https://shuft.online/admin/applications" style="display:inline-block;background:#0066CC;color:#fff;text-decoration:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:bold;">
        Открыть в админке →
      </a>
    </div>
    <div style="padding:12px 32px;background:#f8fafc;border-top:1px solid #eee;">
      <p style="margin:0;font-size:12px;color:#999;">Это автоматическое уведомление от shuft.online. Не отвечайте на это письмо.</p>
    </div>
  </div>
</body>
</html>
  `.trim()

  const text = [
    `Новая заявка #${app.id} с shuft.online`,
    '',
    `Имя: ${app.name}`,
    `Телефон: ${app.phone}`,
    app.email ? `Email: ${app.email}` : null,
    `Тип помещения: ${roomLabel}`,
    app.area ? `Площадь: ${app.area} м²` : null,
    app.message ? `Сообщение: ${app.message}` : null,
    `Источник: ${app.source}`,
    '',
    'Открыть в админке: https://shuft.online/admin/applications',
  ].filter(Boolean).join('\n')

  await sendEmail({
    to: notifyEmail,
    subject: `[shuft.online] Новая заявка #${app.id} от ${app.name}`,
    html,
    text,
  })
}
