import type { Config } from 'tailwindcss'

const config:Config={
  content:[
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    extend:{
      colors:{
        background: {
          DEFAULT: '#0a0a0f',
          secondary: '#12121a',
        },
        surface: {
          DEFAULT: '#14141b',
          elevated: '#1a1a24',
          hover: '#222233',
        },
        border: {
          DEFAULT: '#26262c',
          subtle: '#1e1e26',
          glow: 'rgba(139, 92, 246, 0.3)',
        },
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        pink: {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0a0a0f',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#52525b',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow': '0 0 30px -10px rgba(139, 92, 246, 0.15)',
        'glow-lg': '0 0 60px -15px rgba(139, 92, 246, 0.25)',
      },
      backgroundImage: {
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow':'linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236, 72, 153, 0.05))',
      }
    },
  },
  plugins: [],
}

export default config