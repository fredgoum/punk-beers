module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  // add your custom rules here
  rules: {
    //end of lines windows / unix
    'linebreak-style': 'off',
    'max-len': ['error', 200],
    'space-unary-ops': [2, {
      "words": true,
      "nonwords": false,
      "overrides": {
        "!": true
      }
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
