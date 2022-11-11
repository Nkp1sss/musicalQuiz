const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';


const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}
console.log(mode + ' mode');

const config = {
    entry: { 
        // точка входа, какие скрипты вставлять
        index: './src/scripts/main/index.js',
        quiz: './src/scripts/quiz/quiz.js',
        gallery: './src/scripts/gallery/gallery.js',
    },
    devtool: 'source-map', // отображение страницы в браузере как в VSCode
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html',
            chunks: ['index'], // какие скрипты подключать к странице
            inject: 'body', // вставить скрипт в конец тега body
            // minify: false,  отменить минификацию
        }),
        new HtmlWebpackPlugin({
            filename: 'quiz.html',
            template: './src/pages/quiz.html',
            chunks: ['quiz'],
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: 'gallery.html',
            template: './src/pages/gallery.html',
            chunks: ['gallery'],
            inject: 'body',
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "assets" },
            ],
        }),
        // new CleanWebpackPlugin(), очищает всю папку dist при запуске лайв сервера
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                // подгрузка аудио
                test: /\.(mp3|wav)$/i,
                type: 'asset',
                generator: {
                    filename: 'audio/[name][ext]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};