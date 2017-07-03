//vendor库：第三方的代码的意思（其他供应商提供的代码）
var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var EVN; // 环境变量

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

// 根据传入参数区分开发和生产环境
if (process.env.NODE_ENV == 'dev') {
    EVN = {
        'process.env.NODE_ENV': JSON.stringify('development')
    }
} else {
    EVN = {
        'process.env.NODE_ENV': JSON.stringify('production')
    }
}

var plugins = [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin(EVN),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['core/core', 'vendor', 'mainfest'], // 自动加载到html中的顺序是按照这个相反的方向顺序
        minChunks: Infinity,
    }),
    new ManifestPlugin(),
    new WebpackMd5Hash()
];

// 自动生成entryJs和HtmlWebpackPlugin配置---begin----
var entryJs = {
    'vendor': ['lodash', 'moment'],
    'core/core': './src/core/core.js'
};
var getFiles = function(filepath) {
    var files = glob.sync(filepath);
    var entries = {};
    files.forEach(function(item) {
        var pathname = path.basename(item, path.extname(item))
        entries[pathname] = item;
    });
    return entries;
}
var pages = getFiles('src/**/*.html');
// 生成html，插入依赖
Object.keys(pages).forEach(function(pageName) {
    if (pageName == 'index') {
        plugins.push(
            new HtmlWebpackPlugin({
                template: './src/' + pageName + '/' + pageName + '.html',
                filename: './' + pageName + '.html',
                chunks: ['core/core', 'vendor', 'mainfest', pageName + '/' + pageName],
            })
        );
    } else {
        plugins.push(
            new HtmlWebpackPlugin({
                template: './src/' + pageName + '/' + pageName + '.html',
                filename: './' + pageName + '/' + pageName + '.html',
                chunks: ['core/core', 'vendor', 'mainfest', pageName + '/' + pageName],
            })
        );
    }
    entryJs[pageName + '/' + pageName] = './src/' + pageName + '/' + pageName + '.js';
});
// 自动生成entryJs和HtmlWebpackPlugin配置----end----
module.exports = {
    entry: entryJs,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'asset')],
        publicPath: '/',
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.html$/,
            use: [
                'html-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    devtool: 'cheap-eval-source-map',
    plugins: plugins
};

// 使用js自动生成了，结构如下
// plugins.push(new HtmlWebpackPlugin({
//         template: './src/index/index.html',
//         filename: './index/index.html',
//         chunks: ['vendor', 'mainfest', 'index/index'], // 只允许这几个模块被打包进入自动生成的html中
//     }),
//     new HtmlWebpackPlugin({
//         template: './src/list/list.html',
//         filename: './list/list.html',
//         chunks: ['vendor', 'mainfest', 'list/list'],
//     })
// );
// var entryJs = {
//     'index/index': './src/index/index.js',
//     'list/list': './src/list/list.js',
//     'vendor': ['lodash', 'moment']
// };
