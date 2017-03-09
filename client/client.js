/**
 * Created by Sidney on 2017-02-28.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(8000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('一切准备就绪……');
    console.log('Listening at http://localhost:8000');
});