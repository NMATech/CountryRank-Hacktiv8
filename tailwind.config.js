/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alatsi: ["Alatsi", "sans-serif"],
      },
      colors: {
        main: {
          primary: "#2C3E50",
          secondary: "#ECF0F1",
          accent: "#3498DB",
          higlight: "#27AE60",
        },
        modern: {
          dark_accent: "#34495E",
          vibrant_accent: "#E68E22",
          background: "#F8F9FA",
          text: "#4A4A4A",
        },
      },
    },
  },
  plugins: [],
};
