/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22c55e'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
