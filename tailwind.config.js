/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/features/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#FFE1E0',
        'primary-300': '#FFA6A3',
        'primary-500': '#FF6B66',
        'secondary-400': '#FFCD58',
        'secondary-500': '#FFC132'
      },
      backgroundImage: () => ({
        'mobile-home': "url('../images/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      content: {
        evolvetext: "url('../images/EvolveText.png')",
        abstractwaves: "url('../images/AbstractWaves.png')",
        sparkles: "url('../images/Sparkles.png')",
        circles: "url('../images/Circles.png')"
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: []
}
