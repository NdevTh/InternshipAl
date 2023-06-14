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

    extend: {
      spacing :{
        'some_key' :{
          '1,5' : 'value',
        }   
      },
    },
  },
  variants:{},
  plugins: [],
}

