/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: {
    files: ["*.html", "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        'smol': 'repeat(auto-fit, minmax(min(100%, var(--min)), 1fr))'
      },
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  daisyui: {
    themes: [
      {
        hoc: {
          neutral: '#090606',
          'base-100': '#f7f3f3',
          primary: '#7ea6a9',
          secondary: '#dac9c8',
          accent: '#567e81',
        },
        dark: {
          'neutral': '#e9f0f1',
          'base-100': '#121a1c',
          'accent': '#4c2946',
          'secondary': '#061518',
          'primary': '#907e5a',
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
