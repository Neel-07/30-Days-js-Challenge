const path = require('path');

module.exports = {
  entry: {
    file1: './file1.js',
    file2: './file2.js',
    file3: './file3.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
   mode: 'development',
};
