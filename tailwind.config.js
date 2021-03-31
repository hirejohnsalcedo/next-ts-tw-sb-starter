const COLORS = require("./styles/colors");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui"],
    },
    colors: {
      "primary-purple": COLORS.primaryPurple,
      "primary-purple-semantic-2": COLORS.primaryPurpleSemantic2,
      "primary-purple-semantic-4": COLORS.primaryPurpleSemantic4,
      "primary-white": COLORS.primaryWhite,
      "grey-1": COLORS.grey1,
      "grey-5": COLORS.grey5,
    },
    boxShadow: {
      sm: "2px 4px 6px 0 rgba(35, 34, 58, 0.2)",
      md: "3px 6px 10px 0 rgba(35, 34, 58, 0.2)",
      none: "0 0 #000",
      inner: "inset 0 0 6px 0 rgba(10, 9, 16, 0.2)"
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      boxShadow: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [],
};