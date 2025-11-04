/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        santa: ['Santa Catalina', 'cursive'],
      },
    },
  },
  plugins: [],
}
