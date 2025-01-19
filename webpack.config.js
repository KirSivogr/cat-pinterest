const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: path.resolve(__dirname, 'src/index.tsx'),
   devtool: 'inline-source-map',
   output: {
      filename: '[name].[contenthash].js', // Для лучшего кэширования
      path: path.resolve(__dirname, 'build'),
      clean: true, // Очищает папку build перед сборкой
   },
   mode: 'production',
   module: {
      rules: [
         {
            test: /\.module.css$/,
            use: [
               {
                  loader: 'css-loader',
                  options: {
                     modules: true, // Раз — и готово
                  },
               },
            ],
         },
         {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'ts-loader'],
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource', // Рекомендуется использовать asset/resource
            generator: {
               filename: 'images/[name].[hash][ext]',
            },
         },
      ],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, 'build'),
      },
      port: 3001,
      historyApiFallback: true, // Для работы с React Router
   },
   resolve: {
      fallback: {
         process: require.resolve('process/browser'),
      },
      plugins: [
         new TsconfigPathsPlugin({
            configFile: path.join(__dirname, './tsconfig.json'),
         }),
      ],
      alias: {
         '@/*': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
      }),
      new HtmlWebpackPlugin({
         title: 'Cat Pinterest',
         template: path.join(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css',
      }),
      new dotenv(),
   ],
};
