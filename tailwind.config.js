const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        dark: "#020723",
        light: "#D8F2F2",
        primary: "#AEEEFF",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      gridTemplateRows: {
        "2af": "auto 1fr",
      },
      borderWidth: {
        16: "16px",
        32: "32px",
      },
      letterSpacing: {
        xwide: ".125em",
        "2xwide": ".15em",
        "3xwide": ".2em",
      },
    },
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
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
