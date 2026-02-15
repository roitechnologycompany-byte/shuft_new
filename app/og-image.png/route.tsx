import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0033AA 0%, #0066CC 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 80px',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', right: 100, top: 80,
          width: 380, height: 380,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
        }} />
        <div style={{
          position: 'absolute', right: 200, top: 0,
          width: 280, height: 280,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 24 }}>
          <span style={{ fontSize: 72, fontWeight: 900, color: 'white', letterSpacing: '-2px', lineHeight: 1 }}>
            SHUFT
          </span>
          <span style={{ fontSize: 24, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>
            .ONLINE — Официальный дилер
          </span>
        </div>

        {/* Divider */}
        <div style={{
          width: 100, height: 5, borderRadius: 3,
          background: '#FF6600', marginBottom: 36,
        }} />

        {/* Headline */}
        <div style={{ fontSize: 52, fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
          Фанкойлы Shuft в Москве
        </div>
        <div style={{ fontSize: 34, color: 'rgba(255,255,255,0.8)', marginBottom: 40 }}>
          Настенные, кассетные, канальные, VRF-системы
        </div>

        {/* Features */}
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.7)', marginBottom: 32, display: 'flex', gap: 40 }}>
          <span>✓ Гарантия 3 года</span>
          <span>✓ Монтаж за 1–3 дня</span>
          <span>✓ Склад в Москве</span>
        </div>

        {/* Phone */}
        <div style={{ fontSize: 30, fontWeight: 600, color: '#FFB347' }}>
          +7 (495) 120-33-75
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
