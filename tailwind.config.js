/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './App.js',
  ],
  theme: {
    extend: {
    fontFamily :{
      'sans' : [' DM Sans',' sans-serif '],
    },
      colors :{
        primary1 :"hsl(10, 79%, 65%)",
        primary2 :"hsl(186, 34%, 60%)",
        Neutral1 :"hsl(25, 47%, 15%)",
        Neutral2 :"hsl(28, 10%, 53%)",
        Neutral3 :"hsl(27, 66%, 92%)",
        Neutral4 :"hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};