/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#0D9488',
        primary: '#3B82F6',
        success: '#16A34A',
      },
    },
  },
  plugins: [],
}
