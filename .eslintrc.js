module.exports = {
  root: true,
  extends: ['@react-native', '@rocketseat/eslint-config/react'],
  rules: {
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
    camelcase: 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
