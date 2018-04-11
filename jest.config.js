module.exports = {
  // verbose: true,
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\]((?!@material).)*[/\\\\].+\\.(js|jsx)$',
  ],
  setupTestFrameworkScriptFile: './setupTests.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
