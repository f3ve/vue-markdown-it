module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'warn',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/extensions': ['.js', '.vue', '.ts', '.json'],
    'import/alias': {
      '@': './src/',
    },
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/__tests__/*.{j,t}s?(x)',
        '**/__tests__/*.spec.{j,t}s?(x)',
        '**__mocks__/*',
        '**/setup.js',
        '**/utils.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
  globals: {
    module: 'readonly',
  },
};
