const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'multilingual-word-dictionaries.js',
    library: "multilingualWordDictionaries",
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
};