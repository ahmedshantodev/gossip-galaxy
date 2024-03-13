/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#11102f",
        "primary-text": "#222222",
        "secondary-text": "#7a7a7a"
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}