/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#606060",
      "light-primary": "#D9D9D9",
      "dark-text": "#00000099",
      dark: "#000",
      light: "#fff",
    },
    extend: {
      fontFamily: {
        "druk-wide": ["Druk Wide Bold", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
