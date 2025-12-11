/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#020617', // slate-950
        surface: '#0f172a',    // slate-900
        border: '#1e293b',     // slate-800
        primary: {
          DEFAULT: '#06b6d4',  // cyan-500
          foreground: '#083344',
        },
        secondary: {
          DEFAULT: '#f59e0b',  // amber-500
          foreground: '#451a03',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
