const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./public/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        dark: "#020723",
        light: "#D8F2F2",
        primary: "#AEEEFF",
        "vivid": "#73E0FC",
        "vivid-darker": "#60B2D8",
        "vivid-lighter": "#96e9fd",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      gridTemplateRows: {
        "2af": "auto 1fr",
        "2fa": "1fr auto",
        "3afa": "auto 1fr auto",
      },
      gridTemplateColumns: {
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
      margin: {
        18: "4.5rem",
      },
    },
    minWidth: {
      0: "0px",
      "1/10": "10%",
      "1/5": "20%",
      "1/4": "25%",
      "1/3": "33.3333%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      min: "min-content",
      max: "max-content",
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
      borderWidth: ["hover"],
      width: ["hover"],
      scale: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
