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
        // DARKER background palette
        background: {
          DEFAULT: '#0a0a0f',    // Almost black
          secondary: '#0f0f17',   // Slightly lighter
        },
        surface: {
          DEFAULT: '#14141d',     // Dark card background
          elevated: '#1a1a26',    // Slightly lighter card
          hover: '#222233',       // Hover state
        },
        border: {
          DEFAULT: '#2a2a35',     // Visible but subtle borders
          subtle: '#1e1e28',      // Very subtle borders
          glow: 'rgba(139, 92, 246, 0.3)',
        },
        // Brighter accent colors for better visibility
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
        // BRIGHTER text colors for better contrast
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',    // Brighter secondary text
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0a0a0f',
        },
        text: {
          primary: '#ffffff',     // Pure white for main text
          secondary: '#d4d4d8',   // Very light gray
          muted: '#a1a1aa',       // Brighter muted text
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
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
      },
      animation: {
        'pulse-delayed': 'pulse 2s ease-in-out 1s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      }
    },
  },
  plugins: [],
}

export default config