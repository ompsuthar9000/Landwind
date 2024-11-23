/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem"
      },
      colors:{
        primary:["#7E3AF2"],
        feature:['#F9FAFB']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}