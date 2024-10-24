/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryGray: "#18191F",
        PrimaryGreen: "#4CAF4F",
        Silver: "#F5F7FA",
      },
    },
  },
  plugins: [],
};
