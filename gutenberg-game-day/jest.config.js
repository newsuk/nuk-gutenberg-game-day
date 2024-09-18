module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(@wordpress/block-editor|parsel-js)/)',
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
      },
  };