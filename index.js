const { defineConfig } = require('eslint-define-config');

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = defineConfig({
  root: true,
  extends: ['@vkontakte/eslint-config/typescript/react'],
  rules: {
    'no-inline-comments': 0,
    'spaced-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'curly': 0,
    'no-duplicate-imports': 0,
    'react-hooks/rules-of-hooks': 0,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
});
