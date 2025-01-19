/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      bodyColor: "#09090B",
      mainBg : "#202124",
      topBarBgColor : "#202124",
      sndIconColor : "#c9c9c9",
      mainIconColor : "#2db12d",
      topBarTextColor : "#c9c9c9",
      sndTextColor: "#afafaf",
      navebarBgColor : "#111111",
      navigatorBg : "#c9c9c9",
      navigatorTextColor : "#202124",
      textDarkColor : "#0c0c0c"
    }
  },
  plugins: [],
}

