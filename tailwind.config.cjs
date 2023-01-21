/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        orbitron:["Orbitron","sans-serif"]
      }
    },
    screens: {

      'custombp':'1429px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'se':'667px',
      //iphone landscape

      'xr':'896px',
      //iphone landscape
      
      'pro':'844px',
      //iphone landscape

      'mini':'1024px',
      //ipad landscape

      'gx':'915px',
      //galaxy landscape

      'su':'1368px',
      //surface landscape

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}