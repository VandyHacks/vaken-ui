const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true, // Open browser on 'npm start'
        hot: true, // Enable hot module replacement
        quiet: true, // Pretty console output
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Auto-refresh on changes
        new ErrorOverlayPlugin(), // Error overlay in browser
        new FriendlyErrorsPlugin(), // Pretty console output
    ]
});
