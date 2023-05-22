/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.{html,js}",
            "./index.html",],  
  theme: {
    screens :{
      xs :"540px",
      ...defaultTheme.screens,
    },

    extend: {},
  },
  variants:{},
  plugins: [],
  // tailwind.config.js

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },



}

