module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-native"],
  env: {
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
  ],
  rules: {
    "react-native/no-color-literals": 0,
    "no-unused-vars": 0,
    "react/prop-types": 0,
    "react-native/sort-styles": 0,
    "react-native/no-inline-styles": 0,
  },
};
