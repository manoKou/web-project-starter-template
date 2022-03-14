var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var theme = new ExtractTextPlugin({
            filename: '../css/theme.css',
            allChunks: true
        });

module.exports = {
    entry: ['./src/js/index.js', './src/scss/theme.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/js')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: theme.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&emitFile=false'
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../images/&emitFile=false'
            }
        ]
    },
    plugins: [
        theme,
    ]
};
