/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        accentCyan: '#38bdf8',
        accentBlue: '#3b82f6',
        accentIndigo: '#818cf8',
        accentEmerald: '#34d399',
      }
    },
  },
  plugins: [],
}
