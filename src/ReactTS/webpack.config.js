/// <binding AfterBuild='Run - Development' />
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'wwwroot'),
    entry: {
        server: './js/server',
        client: './js/client'
    },
    output: {
        path: path.join(__dirname, 'wwwroot/js'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            // Transform JSX in .jsx files
            { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader?harmony' }
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.ts', '.tsx', '.js']
    },
    externals: {
        // Use external version of React (from CDN for client-side, or
        // bundled with ReactJS.NET for server-side)
        react: 'React',
        jquery: 'jQuery'
    }
};