const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const mimeTypes = require('mime-types');

const devServerConfig = {
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    },
    warnings: false,
    historyApiFallback: true,
    disableHostCheck: true,
    overlay: true,
    before: (app) => {
        app.use('/static-dj/js/node_modules/**', (req, res) => {
            const modulesPath = req.baseUrl.replace(constants.DEV_ASSET_PATH, '');
            const stream = fs.createReadStream(path.resolve(__dirname, '..', modulesPath));

            res.writeHead(200, {
                'Content-Type' : mimeTypes.lookup(modulesPath)
            });

            stream.pipe(res);
        });
    },
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
};

new WebpackDevServer(webpack(config), devServerConfig).listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Webpack dev server Listening at localhost:3000');
});
