// const webpack = require('webpack')
// const merge = require('webpack-merge')
// const baseWebpackConfig = require('./webpack.base.conf.js')

// const devWebpackConfig = merge(baseWebpackConfig, {
//   // DEV settings gonna be here
//     mode: 'development',
//     devtool: '#cheap-module-eval-source-map',
//     devServer: {
//     // historyApiFallback: true,
//     // noInfo: true,
//         overlay: {
//             warnings: true,
//             errors: true
//         },
//         contentBase: baseWebpackConfig.externals.paths.dist,   //'./src',
//         port: 8081,
//     },
//     plugins: [
//         new webpack.SourceMapDevToolPlugin({
//             filename: '[file].map'
//         })
//     ]
// });

// // export devWebpackConfig
// module.exports = new Promise((resolve, reject) => {
//  resolve(devWebpackConfig)
// })

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    devServer: {
    // historyApiFallback: true,
    // noInfo: true,
        overlay: {
            warnings: true,
            errors: true
        },
        contentBase: baseWebpackConfig.externals.paths.dist,
        // './dist',
        port: 8081,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
 resolve(devWebpackConfig)
})