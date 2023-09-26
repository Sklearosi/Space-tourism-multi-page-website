/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        gradientColor: 'linear-gradient(0deg, #0B0D17, #0B0D17), linear-gradient(0deg, #616476, #616476)',
      }
    },
  },
  plugins: [],
}

