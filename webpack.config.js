const path = require('path');
const webpack = require('webpack'); //访问内置的插件
const HtmlwebpackPlugin = require('html-webpack-plugin');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
console.log('process.env==========>', process.env.env)
module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader:'postcss-loader'
                    }
                    
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new uglifyjsPlugin(),
        new HtmlwebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ]
}

