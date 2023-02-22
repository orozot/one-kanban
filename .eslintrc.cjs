module.exports = {
  env: {
    'browser': true,
    'node': true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:vue/vue3-recommended',
    "prettier"
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js'],
      },
    },
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/multi-word-component-names': 0,
    'import/no-extraneous-dependencies': 0,
    'no-debugger': 1,
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'vue*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  }
}
