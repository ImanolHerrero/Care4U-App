/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'blue': '#0F679B',
        'red': '#FD99A3',
        'deepBlue': '#0B3954',
        'deepRed': '#E33142'
      }
    },
  },
  plugins: [],
}

