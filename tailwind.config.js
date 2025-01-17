const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
      heebo: ['Heebo', 'sans-serif'],
      },
      colors:{
        'primary': '#FF6464',
        'secondary':'#00A8CC',
        'dark':'#21243D',
      },
    },
  },
  plugins: [heroui()],
}

