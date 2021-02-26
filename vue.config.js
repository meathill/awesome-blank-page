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
  devServer: {
    proxy: {
      '^/wallpaper': {
        target: 'https://www.bing.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/wallpaper': '',
        },
      },
    },
  },
};
