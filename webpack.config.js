const webpack = require('webpack'),
HtmlWebPackPlugin = require("html-webpack-plugin"),
MiniCssExtractPlugin = require('mini-css-extract-plugin'),
path = require('path');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                {
                    loader: 'astroturf/loader',
                    options: { extension: '.module.scss' },
                }
            ]
        },
        {
            test: /\.module\.scss$/,
            use: ['style-loader', 'astroturf/css-loader', 'sass-loader'],
        },
        {
            test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
            use: [{ loader: 'file-loader' }],
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        }
        ]
    },
    devtool : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        }),
        new MiniCssExtractPlugin({
            filename: dev ? '[name].css' : '[name].[hash].css',
            chunkFilename: dev ? '[id].css' : '[id].[hash].css'
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        alias: {
            "@Components": path.resolve(__dirname, 'src/js/components/'),
            "@Containers": path.resolve(__dirname, 'src/js/containers/'),
            "@hooks": path.resolve(__dirname, 'src/js/hooks/'),
            "@theme": path.resolve(__dirname, 'src/theme/')
        },
        extensions: ['.js', '.jsx', '.scss']
    }
};