/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1120px',
        '2xl': '1312px',
      },
    },
    colors: {
      primary: "#78350F",
      secondary: "#0F172A",
      white: "#fff"
    }
  },
  plugins: [],
}