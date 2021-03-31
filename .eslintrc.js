module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: ["**/*.stories.tsx"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
  },
};
