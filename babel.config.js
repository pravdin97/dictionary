const presets = [
    [
      "@babel/env",
      {
        targets: {
          node: 'current',
          esmodules: true,
        },
        useBuiltIns: "usage",
      },
    ],
    [
        '@babel/preset-flow',
    ],
  ];
const plugins = [
    [
        "@babel/plugin-proposal-class-properties",
    ],
]
  
  module.exports = { presets, plugins };