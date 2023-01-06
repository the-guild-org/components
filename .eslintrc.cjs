module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@theguild',
    '@theguild/eslint-config/react',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // import of react no longer required
    'tailwindcss/classnames-order': 'off', // conflicts with official prettier-plugin-tailwindcss and tailwind v3
    // set more strict to highlight in editor
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'no-unused-expressions': 'error',
    'react/self-closing-comp': 'error',
    'no-implicit-coercion': 'error',
    'react/no-unescaped-entities': 'off',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { object: true }],
    'prefer-template': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    '@typescript-eslint/array-type': ['error', { readonly: 'generic' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
    'tailwindcss/no-custom-classname': 'warn',
  },
  settings: {
    tailwindcss: {
      config: 'tailwind.config.cjs',
      whitelist: [
        'aa-ItemLink',
        'aa-ItemContent',
        'aa-ItemContentBody',
        'aa-ItemContentTitle',
        'aa-ItemContentSubtitle',
        'aa-SourceHeader',
        'aa-SourceHeaderTitle',
      ],
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['postcss.config.cjs', 'rollup.config.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['**/*.stories.tsx', 'tsup.config.ts', '.storybook/main.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['packages/**'],
      excludedFiles: ['packages/algolia/**'],
      rules: {
        'import/extensions': ['error', 'never'],
      },
    },
  ],
};
