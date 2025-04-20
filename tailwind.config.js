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
        'primary': '#c9e6c070 ',
        'secondary': '#001733',
        'accent': '',
        'neutral-light': '',
        'neutral-dark': '',
        'accent': {
          DEFAULT: 'peru',
          secondary: 'darkcyan',
        },
      }
    },
  },
  plugins: [],
}