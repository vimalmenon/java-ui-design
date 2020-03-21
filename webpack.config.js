const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./webpack/config");

module.exports = {
    watch: true,
    mode: "development",
    entry: {
        main : config.main,
        sw : config.sw
    },
    output: config.output,
    devtool: "source-map",
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, "/public"),
        inline: true,
        port: 8082,
        historyApiFallback: true,
        watchOptions: {
            poll: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api': {
                 target: {
                    host: "0.0.0.0",
                    protocol: 'http:',
                    port: 8081
                 },
                 pathRewrite: {
                    '^/api': '/api'
                 }
            }
        }
    },
     module: {
        rules: [
            {
                test: config.tsxExpression,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      eslintPath: require.resolve('eslint'),
            
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.worker\.ts(x?)$/,
				use : {
                    loader: 'worker-loader',
                    options: { 
                        name: 'worker.js'
                    }
				}
            },
            {
                test: config.fileExpression,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: config.scssExpression,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: config.tsxExpression,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'babel-loader'
                    },
                    {
                        loader: "ts-loader",
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]  
    },
    plugins: [
        new MiniCssExtractPlugin({            
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: "Application Title",
            base : {
                "href": "/static"
            },
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['**/*']
        }),
        new webpack.DefinePlugin(config.definePlugin)
    ],
    resolve: {
        extensions: config.extensions,
        modules: config.modules,
        alias : config.alias,
    }
};
