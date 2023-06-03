/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
      night: "#16213A",
      "moon-light": "#BDF4EA",
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
      backgroundImage: {
        "head-shooter": "url('/src/assets/img/head_shooter.png')",
        "our-people": "url('/src/assets/img/Our_people1.png')",
        "sport-broadcast": "url('/src/assets/img/sport-broadcast.png')",
        "love-story": "url('/src/assets/img/Our_birds1.png')",
        "power-shooter": "url('/src/assets/img/power_shooter.png')",
        "sharp-shooter": "url('/src/assets/img/sharp_shooter.png')",
        "summer-time": "url('/src/assets/img/summer-time.png')",
        "beach-cam": "url('/src/assets/img/beach-cam.png')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("flowbite/plugin"),
  ],
};
