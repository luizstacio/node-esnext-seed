const Babel = require('babel-core');

module.exports = [
  { 
    ext: '.js',
    transform: (content, filename) => {
      const config = {
        sourceMap: 'inline',
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-commonjs', 'babel-plugin-transform-decorators-legacy', 'transform-class-properties'],
        filename: filename,
        sourceFileName: filename,
        auxiliaryCommentBefore: '$lab:coverage:off$',
        auxiliaryCommentAfter: '$lab:coverage:on$'
      };

      if (filename.indexOf('node_modules') === -1) {
        content = Babel.transform(content, config).code;
        content = content.replace('$lab:coverage:on$', '');
        content = content.replace('$lab:coverage:off$', '');
        return content;
      }

      return content;
    }
  }
];
