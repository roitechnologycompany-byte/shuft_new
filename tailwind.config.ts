import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          50: '#E5F0FA',
          100: '#CCE0F5',
          200: '#99C2EB',
          300: '#66A3E0',
          400: '#3385D6',
          500: '#0066CC',
          600: '#0052A3',
          700: '#003D7A',
          800: '#002952',
          900: '#001429',
        },
        accent: {
          DEFAULT: '#FF6600',
          50: '#FFF0E5',
          100: '#FFE0CC',
          200: '#FFC299',
          300: '#FFA366',
          400: '#FF8433',
          500: '#FF6600',
          600: '#CC5200',
          700: '#993D00',
          800: '#662900',
          900: '#331400',
        },
        dark: '#1A1A1A',
        light: '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Open Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0,0,0,0.1)',
        'card-hover': '0px 4px 16px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
}
export default config
