var webpack = require('webpack');

module.exports = {
    entry: {
      app: './src/index.js'
    },
    output: {
        filename: '../public/build/bundle.js',
        sourceMapFilename: '../public/build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ],
                        plugins: [
                            require('@babel/plugin-transform-runtime'), 
                            require('@babel/plugin-proposal-class-properties')
                        ]
                    }
                } 
            }
        ]
    }
}