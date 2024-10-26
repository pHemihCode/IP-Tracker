/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "desktopBG":"url(/images/pattern-bg-desktop.png)",
         "mobileBG":"url(/images/pattern-bg-mobile.png)"
      }
    },
  },
  plugins: [],
}