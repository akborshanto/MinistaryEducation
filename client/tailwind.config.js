/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors:{
blackBold:"#000000",
whiteBOld:"#ffffee",
footer:"#767381",
green:"#95e17d",
headerb:'#67af63'



},
backgroundColor:{

  headerGray:'#eeeeee',
  headerGreen:"#007814",
  borderGray:"#c8c8c8",
  footer:'#F2F2F2',
  inputBg:'#f4f0f2',
  gradeBg:"#afb7be"
}


    },
  },
plugins: [
    require('daisyui'),
  ],
}









