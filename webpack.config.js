const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.ENV || 'development';

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
},
target: 'web',
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '',
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "babel-plugin-styled-components",
              "@babel/plugin-syntax-dynamic-import"
            ]
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 244000,
      minSize: 19500,
      cacheGroups: {
        defaultVendors: {
          filename: '[name].bundle.js',
          enforce: true
        }
      }
    }
  }
}