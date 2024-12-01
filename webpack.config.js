const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    frontend: './js/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/[name].bundle.js',
  },

  module: {
    rules: [
      //Existing rules
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../fonts',
              outputPath: 'fonts',
            },
          },
        ],
      },
      {
        test: /\.html$/, 
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false, 
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Existing plugins
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
    }),
    // new HtmlWebpackPlugin({
    //   filename: path.resolve(__dirname, 'index.html'), // Specify the output path relative to the `output.path` directory
    //   minify: false, // Ensure the output is minified
    // }),
  ],

  mode: 'development',
};