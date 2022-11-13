/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    mytheme: {
          
      "primary": "#0FCFEC",
               
      "secondary": "#4F5B7A",
               
      "light": "#65EAFB",
               
      "lighter": "AFB7CA",
               
      "base-100": "#FFFFFF",
               
      "info": "#3ABFF8",
               
      "success": "#36D399",
               
      "warning": "#FBBD23",
               
      "error": "#F87272",
               },
  },
  plugins: [require("daisyui")],
}
