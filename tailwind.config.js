const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        dark: "#020723",
        iceBlue: "#D8F2F2",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      gridTemplateRows: {
        "2af": "auto 1fr",
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["hover"],
      fontWeight: ["hover"],
      padding: ["hover"],
    },
  },
  plugins: [],
};
