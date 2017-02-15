var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');

function findPackages(selector) {
    return Object.keys(pkg.dependencies).filter(selector);
}

var entry = {
    'main': './src/main.browser.ts',
    '@angular': findPackages(pkg => pkg.startsWith('@angular')),
    'rxjs': findPackages(pkg => pkg.startsWith('rxjs')),
    'polyfills': findPackages(pkg => pkg.startsWith('reflect') || pkg.startsWith('core') || pkg.startsWith('zone')),
};

module.exports = {
    devtool: 'cheap-module-source-map',
    entry,
    cache: true,
    debug: true,
    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['awesome-typescript-loader']}
        ]
    },
    output: {
        path: './',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({name: Object.keys(entry), minChunks: Infinity})
    ],
    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js']
    },
    devServer: {
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 1000}
    },
    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    }
};
