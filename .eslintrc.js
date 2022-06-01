module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  rules: {
    "vue/html-closing-bracket-newline": [2, {"multiline": "never"}],
    "no-extra-parens": 1,
    "no-multi-spaces": 2,
    "no-multiple-empty-lines": [2, {"max": 1}],
    semi: [2, "never"],
  },
}
