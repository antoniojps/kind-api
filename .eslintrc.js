module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Trailing comma
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ['error', { varsIgnorePattern: '(React)' }]
  },
  globals: {
    expect: true,
    test: true,
    describe: true,
    beforeEach: true,
    afterEach: true,
    afterAll: true,
    React: true
  }
}
