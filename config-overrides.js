const { override, addBabelPlugin, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
  addBabelPlugin([
    '@babel/plugin-proposal-private-methods',
    { loose: true }
  ]),
  addBabelPlugin([
    '@babel/plugin-proposal-class-properties',
    { loose: true }
  ]),
  addBabelPlugin([
    '@babel/plugin-proposal-private-property-in-object',
    { loose: true }
  ]),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules')
  ])
);
