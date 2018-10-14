const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    performance: {
        maxEntrypointSize: 800000,
        maxAssetSize: 800000
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            importLoaders: 2
                        },
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/html/*.html', flatten: true },
            { from: 'src/images/*', to: 'images/', flatten: true }
        ])
    ]
};
