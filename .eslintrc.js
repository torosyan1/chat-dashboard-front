module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["prettier", "airbnb-base"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["pretter"],
  rules: {
    "prettier/prettier": "error",
  },
};
