const path = require('path');
const public_dir = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: public_dir,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: public_dir
    }
};
