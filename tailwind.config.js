/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryGray: "#18191F",
        PrimaryGreen: "#4CAF4F",
        Silver: "#F5F7FA",
        TitleGray: "#4D4D4D",
        TextGray: "#717171",
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      },
    },
  },
  plugins: [],
};
