/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6', // refined violet
        secondary: '#a78bfa', // lighter violet
        accent: '#c084fc', // soft purple accent
        dark: '#0f172a',
        darker: '#020617',
      }
    },
  },
  plugins: [],
}
