/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#001529',
        'warm-sand': '#fff7d6',
        'bright-blue': '#00c6b9',
        'warm-bg': '#D6DEFF',
      },
    },
  },
  plugins: [],
}

