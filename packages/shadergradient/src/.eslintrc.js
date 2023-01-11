module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    'react/display-name': 'off',
  },
}
