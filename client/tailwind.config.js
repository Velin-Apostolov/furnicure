/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(48, 50%, 90%)',
          dark: 'hsl(48, 50%, 10%)',
        },
        secondary: {
          DEFAULT: 'hsl(48, 50%, 10%)',
          dark: 'hsl(48, 50%, 90%)',
        },
        tertiary: {
          DEFAULT: 'hsl(108, 80%, 20%)',
          dark: 'hsl(108, 80%, 80%)',
        },
        accent: {
          DEFAULT: 'hsl(348, 80%, 20%)',
          dark: 'hsl(348, 80%, 80%)',
        },
        filler: {
          DEFAULT: '#5B6634',
        }
      },
    },
  },
  plugins: [],
}

