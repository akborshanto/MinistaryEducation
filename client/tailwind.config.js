/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors:{
blackBold:"#699fcb",
whiteBOld:"#ffffee",
footer:"#767381"



},
backgroundColor:{

  headerGray:'#eeeeee',
  headerGreen:"#95e17d",
  borderGray:"#c8c8c8",
  footer:'#F2F2F2'
}


    },
  },
plugins: [
    require('daisyui'),
  ],
}









