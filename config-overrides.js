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
  addBabelPlugin('babel-plugin-detective', { regex: true }),
  addBabelPlugin('@babel/plugin-transform-named-capturing-groups-regex'),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules')
  ])
);
