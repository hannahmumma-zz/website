const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
  devServer: {
    contentBase: "dist"
  },  
  entry: {
    app: "./src/index.js"
  },  
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },    
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        use: {
          loader: "file-loader",
        options: {
          name: '[name].[ext]',
        },          
        }
      }     
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/img/favicon.ico",
      template: "./src/index.html",
      filename: "./index.html",
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,        
        uglifyOptions: {
          output: {
            comments: false,
          }       
        },
      }),
    ],
  },
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist")
  },
};