const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const outputPath = path.join(__dirname, 'dist');
module.exports = (env, argv) => {
    const isDevelopment = argv.mode !== 'production';
    return {
        entry: './src/client/index.tsx',
        output: {
            path: outputPath,
            filename: '[name].js'
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                camelCase: true,
                                sourceMap: isDevelopment
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                }, {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                }, {
                    test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.scss', '.js']
        },
        devServer: {
            port: 3000,
            open: true,
            proxy: {
                '/api': 'http://localhost:8080'
            }
        },
        plugins: [
            new CleanWebpackPlugin([outputPath]),
            new HtmlWebPackPlugin({
                template: './public/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
            }),
        ]
    };
};
