import {CleanWebpackPlugin} from "clean-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { resolve } from 'path'
import {Configuration, ProgressPlugin} from "webpack"

const commonConfig: Configuration = {
  entry: {
    app: resolve(__dirname, "../src", "app")
  },
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/i,
        include: /node_modules/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "[file]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".less", ".css"]
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: "index.html"})
  ]
}

export default commonConfig
