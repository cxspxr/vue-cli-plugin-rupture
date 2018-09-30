const rupture = require('rupture');

module.exports = function(API) {
  return API.configureWebpack(function() {
    {
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
