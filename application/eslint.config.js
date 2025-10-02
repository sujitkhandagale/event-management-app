const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'no-unused-vars': 'error',
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'always'],
    },
  },
]);
