/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        accent: ["'Playfair Display'", "serif"],
      },
      colors: {
        cream: { 50: "#fefdf8", 100: "#fdf9ec", 200: "#f9f0d0" },
        gold: { 300: "#d4af6e", 400: "#c49a4e", 500: "#b8862e" },
        sage: { 100: "#eef1ec", 200: "#d4ddd0", 400: "#8fa885" },
        charcoal: { 800: "#1a1a1a", 900: "#0f0f0f" },
      },
    },
  },
  plugins: [],
};

