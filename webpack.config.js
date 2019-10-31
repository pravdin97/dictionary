const path = require('path')

module.exports = {
    mode: 'production',
    entry: ['babel-polyfill', './src/client/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public', 'js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    devtool: 'eval-source-map'
}