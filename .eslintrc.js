module.exports = {
  root: true,
  extends: ['@react-native', '@rocketseat/eslint-config/react'],
  rules: {
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  },
}
