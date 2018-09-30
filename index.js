const rupture = require('rupture');

module.exports = function(API) {
  return API.configureWebpack(function() {
    {
      module: {
        rules: [
          {
            loader: 'stylus-loader',
            use: [rupture()]
          }
        ]
      }
    }
  });
};
