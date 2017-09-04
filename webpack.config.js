/**
 * Created by liu.jianfei on 2017/9/4.
 */
var webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.js$/ }
        ]
    }
};
