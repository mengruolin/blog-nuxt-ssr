module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "camelcase": ["error", {"allow": ["aa_bb"]}],
    "no-console": "off",
    "no-undef": "off",
    "no-var": "off",
    "standard/no-callback-literal": "off",

  }
}
