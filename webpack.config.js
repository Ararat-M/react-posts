const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css/;
const MODULE_CSS_REGEXP = /\.module\.css/;

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
    {
      test: /\.[tj]sx?$/,
      use: ["ts-loader"]
    },
    {
      test: MODULE_CSS_REGEXP,
      use: ["style-loader", {
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            localIdentName: "[name]__[local]--[hash:base64:5]"
          }
        }
      }],
    },
    {
      test: GLOBAL_CSS_REGEXP,
      use: ["style-loader", "css-loader"]
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src/index.html" )})
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: NODE_ENV === "development" ? true : false 
  },
  devtool: NODE_ENV === "development" ? "eval" : false

};