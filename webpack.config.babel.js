const path = require('path')
const version = require('./package.json').version
var webpack = require('webpack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
export default () => (
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vm-log.min.js',
      libraryTarget: 'umd',
      library: 'vmLog'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: function (options) {
              options = options || {}

              var cssLoader = {
                loader: 'css-loader',
                options: {
                  minimize: process.env.NODE_ENV === 'production',
                  sourceMap: options.sourceMap
                }
              }

  // generate loader string to be used with extract text plugin
              function generateLoaders (loader, loaderOptions) {
                var loaders = [cssLoader]
                if (loader) {
                  loaders.push({
                    loader: loader + '-loader',
                    options: Object.assign({}, loaderOptions, {
                      sourceMap: options.sourceMap
                    })
                  })
                }

                return ['vue-style-loader'].concat(loaders)
              }

              return {
                css: generateLoaders(),
                postcss: generateLoaders(),
                sass: generateLoaders('sass', { indentedSyntax: true }),
                scss: generateLoaders('sass')
              }
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'}
      ]
    },
    plugins: [
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(version)
      })
    ]
  }
)
