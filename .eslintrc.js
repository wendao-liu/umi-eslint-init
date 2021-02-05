module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-ali/react', 'prettier'],
  rules: {
    'react/prop-types': [0],
    'generator-star-spacing': ['error', { before: false, after: false }],
    'no-nested-ternary': 0,
  },
};
