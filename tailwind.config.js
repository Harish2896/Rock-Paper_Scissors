/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/{GameBtnContainer.js,GameOn.js,GameButton.js}",
    "./src/Components/Rules.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      current: "currentColor",
      veryDarkBlue: "hsl(229, 25%, 31%)",
      navy: "hsl(229, 64%, 46%)",
      outline: "hsl(217, 16%, 45%)",
      lightGray: "hsl(0, 0%, 82%)",
      darkGray: "hsl(0, 0%, 49%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    extend: {},
  },
  plugins: [],
};
