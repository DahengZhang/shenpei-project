const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Uglify = require('uglify-es')
const CleanCSS = require('clean-css')
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin')

const { ip: target, prefix } = require('./config/server')
const isDev = process.env.NODE_ENV === 'development'
const publicPath = '/'
const htmlOption = {
    isDev,
    template: 'ejs-loader!template.html',
    inject: true,
    minify: {
        removeComments: false,
        collapseWhitespace: false
    }
}

module.exports = {
    devtool: isDev ? 'cheap-source-map' : 'source-maps',
    entry: {
        app: [path.resolve(__dirname, 'src', 'index.js')]
    },
    output: {
        filename: '[name].bundle.[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'root': path.resolve(__dirname),
            'src': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.(c|sa|sc)ss$/,
            use: [
                isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: path.resolve(__dirname, 'src', 'assets', 'mixin.scss')
                    }
                }
            ]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff',
            options: {
                limit: 1000,
                name: 'static/font/[name].[hash:6].[ext]',
                publicPath
            }
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
                limit: 1000,
                name: 'static/font/[name].[hash:6].[ext]',
                publicPath
            }
        }, {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: 'static/img/[name].[hash:6].[ext]',
                publicPath
            }
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 7000,
        hot: true,
        overlay: true,
        noInfo: true,
        clientLogLevel: 'error',
        historyApiFallback: true,
        proxy: {
            ['/api' + prefix]: {
                target,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'ENV.SERVER': JSON.stringify(target),
            'ENV.PREFIX': JSON.stringify(prefix),
            'ENV.FULL': JSON.stringify(target + prefix)
        }),
        new CleanPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            publicPath,
            filename: '[name].bundle.[hash:6].css'
        }),
        new CopyPlugin(!isDev && [{
            from: path.resolve(__dirname, 'static'),
            to: 'static',
            ignore: ['*.js', '*.css']
        }, {
            from: path.resolve(__dirname, 'static/**/*.css'),
            to: '',
            transform (content) {
                return new CleanCSS({}).minify(content).styles
            }
        }, {
            from: path.resolve(__dirname, 'static/**/*.js'),
            to: '',
            transform (content) {
                return Uglify.minify(content.toString()).code
            }
        }] || []),
        new HtmlPlugin(Object.assign({
            filename: 'index.html',
            chunks: ['app']
        }, htmlOption))
    ]
}
