/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
       animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      colors: {
        primary: '#60A5FA',       // blue-400 - bright enough for dark bg
        dark: '#0F172A',          // slate-900 - deep dark bg
        surface: '#1E293B',       // slate-800 - card bg
        border: '#334155',        // slate-700 - borders
        muted: '#94A3B8',         // slate-400 - muted text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
