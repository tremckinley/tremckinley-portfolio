/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ["Montserrat", "sans-serif"],
        'roboto': ['Roboto', "sans-serif"]
      },
      colors: {
        'accent': '#66bb88',
        'accent-secondary': '#1F3A5F',
        'neutral-light': '',
        'neutral-dark': '',
      }
    },
  },
  plugins: [],
}