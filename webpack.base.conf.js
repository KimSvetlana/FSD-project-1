const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pages/`
const PAGES = [];
fs.readdirSync(PAGES_DIR).forEach(pageDir => {
    const pageName = fs.readdirSync(`${PAGES_DIR}/${pageDir}/`).find(filename => filename.endsWith('.pug'));
    PAGES.push(`${PAGES_DIR}/${pageDir}/${pageName}`);
});
console.log("PAGES = " + PAGES.toString());
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: './'
    },
    module: {
        rules: [
        {
            test: /\.pug$/,
            loader: 'pug-loader'
        },  {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './assets/fonts/',    // where the fonts will go
                publicPath: '../fonts/'       // override the default path
              }
            }]
        }, {
             test: /\.(png|jpg|gif|svg)$/,
             loader: 'file-loader',
             options: {
             name: '[name].[ext]',
             outputPath: './img/',
             publicPath: '../img/'
            }
        },  {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: './postcss.config.js' } }
                }
            ] 
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: './postcss.config.js' } }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ] 
        }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new MiniCssExtractPlugin({
          filename: `${PATHS.assets}css/[name].css`,
        }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: page,
            filename: `./${path.basename(page).replace(/\.pug/,'.html')}`
        })),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/fonts/font-awesome-4.7.0/fonts`, to: `${PATHS.assets}fonts/fonts` },
            { from: `${PATHS.src}/fonts/font-awesome-4.7.0/css`, to: `${PATHS.assets}fonts/css` },
            { from: `${PATHS.src}/static`, to: `${PATHS.assets}` },
        ]),
    ]
} 