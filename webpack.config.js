const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  console.log('process.env: ', argv.mode);
  const isPro = argv.mode === 'production'

  return {
    // entry 入口，output出口，module模块，plugins 插件  mode工作模式，devServer开发服务器
    //  mode 工作模式
    // mode: isPro ? 'production' : 'development',
    devtool: 'source-map',
    // 入口 
    entry: './src/index.tsx',
    //  服务器
    devServer: {
      port: 3004,
      open: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: ['./src', './node_modules'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    //  出口 
    output: {
      filename: './bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    // 模块 
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif)$/,
          // 通用资源类型
          type: 'asset',
          // 现在，webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择：
          // 小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。
          // 自定义设置
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024
            }
          }
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.module\.css$/i,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isPro ? "[hash:base64:5]" : "[path][name]__[local]",
                }
              }
            },
          ],
        },
      ]
    },

    //  插件 
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }
}