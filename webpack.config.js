'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'teachers.html',
      template: path.resolve(__dirname, 'src', 'teachers.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'parents.html',
      template: path.resolve(__dirname, 'src', 'parents.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'events.html',
      template: path.resolve(__dirname, 'src', 'events.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'event.html',
      template: path.resolve(__dirname, 'src', 'event.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'add_material.html',
      template: path.resolve(__dirname, 'src', 'add_material.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'auth.html',
      template: path.resolve(__dirname, 'src', 'auth.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'manage_materials.html',
      template: path.resolve(__dirname, 'src', 'manage_materials.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
module: {
  rules: [
    {
      test: /\.html$/i,
      use: ['html-loader', '@joyzl/html-include-loader'],
    },
    {
      test: /\.(c|sa|sc)ss$/i,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')],
            },
          },
        },
        'group-css-media-queries-loader',
        {
          loader: 'resolve-url-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            api: "modern",
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.woff2?$/i,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name][ext]',
      },
    },
    {
      test: /\.(jpe?g|png|webp|gif|svg|avif)$/i,
      use: devMode
        ? []
        : [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      type: 'asset/resource',
      generator: {
        filename: 'assets/images/[name].[ext]'
      }
    },
    {
      test: /\.m?js$/i,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
  },
};
