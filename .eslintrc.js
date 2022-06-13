module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: {
    semi: [2, 'never'],
    'vue/html-closing-bracket-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'no-extra-parens': 1,
    'no-multi-spaces': 2,
  },
}
