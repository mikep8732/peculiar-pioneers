import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          50: '#F7F1DC',
          100: '#F2E8C7',
          200: '#E8D69E',
          300: '#DEC474',
          400: '#D4B34B',
          500: '#C9A227',
          600: '#9C7E1E',
          700: '#6F5A15',
          800: '#42360D',
          900: '#151204',
        },
        dark: {
          DEFAULT: '#111111',
          50: '#2A2A2A',
          100: '#242424',
          200: '#1E1E1E',
          300: '#181818',
          400: '#141414',
          500: '#111111',
          600: '#0D0D0D',
          700: '#0A0A0A',
          800: '#060606',
          900: '#030303',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

export default config
