/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loop: {
          from: { "background-position": "0% center" },
          to: { "background-position": "-200% center" },
        },
      },
    },
  },
  plugins: [],
};
