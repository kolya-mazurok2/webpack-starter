const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss']
  },
  plugins: [new MiniCssExtractPlugin(), new ESLintPlugin({ extensions: ['js', 'ts'] })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
};
