// this file isn't transpiled, so must use CommunJS and ES5

// Register babel to transpile before running the test
require('babel-register')();

// Disable webpack features that Mocha doesn't undersatnd
require.extensions['.css'] = function() {}
