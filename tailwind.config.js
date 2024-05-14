/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freeman: "'Freeman', sans-serif",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

