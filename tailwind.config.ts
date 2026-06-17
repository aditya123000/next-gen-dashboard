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
        background: 'rgb(10, 10, 15)',
        foreground: 'rgb(250, 250, 250)',
        border: 'rgb(38, 38, 44)',
      }
    }
  },
  plugins: [],
}

export default config