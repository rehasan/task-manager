module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  },
  env: {
    node: true
  }
};