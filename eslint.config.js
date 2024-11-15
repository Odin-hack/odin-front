import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    rules: {
      'quotes': ['error', 'single'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'vue/multi-word-component-names': 0,
      'no-irregular-whitespace': 0,
      '@stylistic/max-statements-per-line': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'vue/no-v-html': 0,
      'vue/no-multiple-template-root': 0,
      'no-constant-binary-expression': 0,
      '@typescript-eslint/no-unused-expressions': 0,
    },
  },
];
