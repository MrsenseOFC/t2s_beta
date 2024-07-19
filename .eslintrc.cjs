module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': ['off'],
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
