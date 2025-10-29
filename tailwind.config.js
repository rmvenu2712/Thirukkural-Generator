/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-cl' : '#f6c510',
        'center-cl' : '#dc990c',
      },
      backgroundImage: {
        'main-bg': "url('./image/bg.png')",
        'main-bg1': "url('./image/bg1.png')",
        'main-bg2': "url('./image/bg2.png')",
        'board': "url('./image/board.png')",

      },
      boxShadow: {
        '3xl': '0 0px 40px -5px #dc990c',
      }
    },
  },
  plugins: [],
  
  

}