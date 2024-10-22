/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "desktopBG":"url(./src/assets/images/pattern-bg-desktop.png)",
         "mobileBG":"url(./src/assets/images/pattern-bg-mobile.png)"
      }
    },
  },
  plugins: [],
}