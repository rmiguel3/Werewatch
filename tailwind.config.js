/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      gray: {
        500: '#6B7280',
      },
      white: '#FFFFFF',
      red: '#A22727'
    },
    extend: {},
  },
  plugins: [],
}