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
        // Slate Blue background palette
        background: {
          DEFAULT: '#09090b',    // #09090B
          secondary: '#0f0f13',  // #0F0F13
        },
        surface: {
          DEFAULT: '#121216',     // Zinc 900-ish dark
          elevated: '#1a1a22',    // Zinc 800-ish dark
          hover: '#1c1c24',       // Hover state
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',     // rgba(255,255,255,0.08)
          subtle: 'rgba(255, 255, 255, 0.04)',      // Subtler border
          glow: 'rgba(91, 108, 255, 0.1)',
        },
        // Slate Blue primary and hover accent colors
        brand: {
          DEFAULT: '#5B6CFF',
          hover: '#7C8CFF',
          accent: '#5B6CFF',
        },
        // Keep purple mapping but update to Slate Blue tones for safety/retro-compatibility
        purple: {
          50: '#f0f2ff',
          100: '#e0e4ff',
          200: '#c5cbff',
          300: '#9fa8ff',
          400: '#7c8cff', // Hover Accent
          500: '#5b6cff', // Primary Accent
          600: '#4656e6',
          700: '#3543cc',
          800: '#2733b0',
          900: '#1d2791',
          950: '#11175c',
        },
        pink: {
          400: '#7c8cff',
          500: '#5b6cff',
          600: '#4656e6',
        },
        // BRIGHTER text colors for better contrast
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',    // Secondary text #A1A1AA
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0a0a0f',
        },
        text: {
          primary: '#fafafa',     // #FAFAFA
          secondary: '#a1a1aa',   // #A1A1AA
          muted: '#71717a',       // Muted gray
        },
        glow: {
          purple: 'rgba(91, 108, 255, 0.04)',
          pink: 'rgba(255, 255, 255, 0.01)',
          blue: 'rgba(255, 255, 255, 0.01)',
          orange: 'rgba(255, 255, 255, 0.01)',
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
        // Card shadows - increasing elevation
        'card': '0 1px 2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        'card-elevated': '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        
        // Glow shadows mapped to Slate Blue accents
        'glow-purple': '0 4px 16px -4px rgba(91, 108, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        'glow-pink': '0 4px 16px -4px rgba(255, 255, 255, 0.01), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        'glow-blue': '0 4px 16px -4px rgba(255, 255, 255, 0.01), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        'glow-orange': '0 4px 16px -4px rgba(255, 255, 255, 0.01), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        
        // Inner glow for special cards
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.03)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
        'glow-radial': 'radial-gradient(ellipse at 50% 0%, var(--tw-gradient-stops))',
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