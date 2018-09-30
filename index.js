const rupture = require('rupture');

module.exports = function(API) {
  return API.configureWebpack(function() {
    return {
      module: {
        rules: [
          {
            test: /\.(styl|sss|stylus)$/,
            loader: 'stylus-loader',
            import: [
              '~rupture/rupture/index.styl'
            ]
          }
        ]
      }
    }
  });
};
