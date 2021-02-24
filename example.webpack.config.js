let webpack = require('webpack');
let path = require('path');


module.exports = {
    entry: './resources/js/app.js',

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js',
       publicPath: './public'
    },

    module : {
      rules : [
          {
               test: /\.js&/,
               exclude: /node_modules/,
               loader: 'babel-loader'
          }
      ]
    },

    plugins : []
}

if(process.env.NODE_ENV === 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPLugin({
            sourcemap : true,
            compress: {
                warning : false
            }
        })
    )
}
