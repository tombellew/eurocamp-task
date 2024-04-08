const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    target: 'web',
    devtool: false,
    mode: 'development',
    entry: {
      'js/index.js': './src/client/js/index.tsx',
      'styles/style': './src/client/styles/styles.scss'
    },
    output: {
      path: path.resolve(__dirname, `./public/`),
      filename: '[name]'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `[name].css`,
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        fix: true
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(css|scss)/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: [
                    require('autoprefixer')(),
                  ]
                }
              }
            },
            'sass-loader'
          ],
        },
      ]
    }
  };
};