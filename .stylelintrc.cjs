module.exports = {
  plugins: ['stylelint-less', 'stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  defaultSeverity: "warning",
  rules: {
    'prettier/prettier': true
  }
}