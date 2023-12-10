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
      },
      colors: {
        mint: {
          50: '#f7f3f3',
          100: '#dac9c8',
          300: '#7ea6a9',
          600: '#567e81',
          900: '#090606',
        },
        sand: {
          50: '#fbfcfd',
          300: '#f0d39d',
          600: '#ab905f',
          900: '#0e1520',
        }
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
          'neutral': '#fbfcfd',
          'base-100': '#0e1520',
          'primary': '#f0d39d',
          'secondary': '#151c28',
          'accent': '#ab905f',
          'primary-content': '#0e1520',
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
}
