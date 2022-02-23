module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    'semi': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_' },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  },
};
