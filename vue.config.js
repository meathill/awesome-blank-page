const CopyPlugin = require('copy-webpack-plugin');
const {DefinePlugin} = require('webpack');

module.exports = {
  lintOnSave: false,
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
    config.plugin('define')
      .use(DefinePlugin, [
        {
          isDev: process.env.NODE_ENV === 'development',
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
