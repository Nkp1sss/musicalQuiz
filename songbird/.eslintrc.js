module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-plusplus": 'off',
    "no-shadow": "off",
    "comma-dangle": "off",
    "arrow-parens": "off",
    "linebreak-style": ["error", "windows"],
    "indent": ["error", 4],
    "no-use-before-define": ["error", {
      "functions": false,
    }],
  },
};
