const { fontFamily } = require('tailwindcss/defaultTheme')
const forms = require('@tailwindcss/forms')
const type = require('@tailwindcss/typography')
const prettier = require('prettier-plugin-tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    forms,
    type,
    prettier
  ],
}
