/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  darkMode: 'class',
  theme: { //Theme içine yazmamın sebebi sürekli bu özelliği olmasını istediğim için. Tüm container classları bu özellikte olacak
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: { //Font family,color gibi benim istediğim şeyler bunları ben ekledim kullanmak için
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },

      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },

      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};