const path = require('path');
const { ProvidePlugin } = require('webpack');

module.exports = {
    entry: {
        'bundle-top': './src/main-top.tsx',
        'bundle-middle': './src/main-middle.tsx',
        'bundle-right': './src/main-right.tsx',
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            url: require.resolve("url/"),
            os: require.resolve("os-browserify/browser"),
            http: require.resolve("http-browserify"),
            https: require.resolve("https-browserify"),
            stream: require.resolve("stream-browserify"),
            assert: require.resolve("assert/"),
            crypto: require.resolve("crypto-browserify")
        },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser',
        }),
    ],
};
