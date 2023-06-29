module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 1,
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'comma-dangle': ['error', 'never']
  }
}
