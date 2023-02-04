/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      orange:'#D87D4A',
      semiBlack:'#101010',
      lightGray:'#F1F1F1',
      veryLightGray:'#FAFAFA',
      lightOrange:'#fbaf85',
      pureWhite:'#ffffff',
      pureBlack:'#000000',
      darkGray:'hsl(0, 0%, 60%)',
      veryDarkGray:'hsl(0, 0%, 25%)',
      grayishBlack:'#4C4C4C',
      semiDarkText:'hsla(0, 0%, 0%, 1)',
      borderColor:'hsla(0, 0%, 81%, 1)',
      error:'CD2C2C',
    },
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes:false,
  }
}
