const rupture = require('rupture');

module.exports = function(API) {
  return API.configureWebpack(function() {
    {
      module: {
        rules: [
          {
            test: /\.(styl|sss)$/,
            loader: 'stylus-loader',
            use: [rupture()]
          }
        ]
      }
    }
  });
};
