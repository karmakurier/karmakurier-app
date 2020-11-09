module.exports = {
  extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/static-property-placement': 0,
  },
}
