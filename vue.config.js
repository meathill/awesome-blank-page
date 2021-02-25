const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  chainWebpack(config) {
    config.plugin('copy')
      .use(CopyPlugin, [
        {
          patterns: [
            {
              from: 'manifest.json',
            },
          ],
        },
      ]);
  },
};
