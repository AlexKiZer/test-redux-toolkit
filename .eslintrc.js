module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: [
        '*.ts',
        '*.tsx',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          },
        ],
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'max-len': [
          2,
          {
            code: 120,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
          },
        ],
        'react/require-default-props': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/no-array-index-key': 0,
        'class-methods-use-this': 0,
        '@typescript-eslint/object-curly-spacing': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/button-has-type': 'off',
  },
};
