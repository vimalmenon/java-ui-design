const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./webpack/config");

module.exports = {
    watch: false,
    mode: "production",
    entry: {
        main : config.main
    },
    output: config.output,
    module: {
        rules: [
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
            dry: false,
            verbose: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['**/*']
        }),
    ],
    resolve: {
        extensions: config.extensions,
        modules: config.modules,
        alias : config.alias,
    },    
};
