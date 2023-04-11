/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          6: "#0047FF"
        },
        text: {
          6: "#5A5B80"
        },
        fill: {
          1: "#ebf0ff",
          2: "#d8e3fe",
        }
      }
    },
  },
  plugins: [],
}
