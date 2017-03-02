module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        reporters: ['mocha', 'growl'],
        port: 9876,
        colors: false,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatchBatchDelay: 300,
        files: [
            'test/tests.bundle.js'
        ],
        preprocessors: {
            './test/tests.bundle.js': ['webpack']
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        test: /\.js?$/
                    }
                ],
            }
        },
        webpackMiddleware: {
            noInfo: true,
        }
    });
};
