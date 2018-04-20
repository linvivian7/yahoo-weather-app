const path = require('path');
const express = require('express');
const app = express();

const port = (process.env.PORT || 8080);
const indexPath = path.join(__dirname, './index.html');
const publicPath = express.static(path.join(__dirname, './'));

if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('./webpack.dev.config.js');
    const compiler = webpack(config);

    app.use(webpackHotMiddleware(compiler));
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        before: (app) => {
            app.use('/node_modules/**', (req, res) => {
                const modulesPath = req.baseUrl.replace('/', '');
                const stream = fs.createReadStream(path.resolve(__dirname, '..', modulesPath));

                res.writeHead(200, {'Content-Type': mimeTypes.lookup(modulesPath)});

                stream.pipe(res);
            });
        }
    }));
    app.use('/', publicPath);
    app.get('/', function(_, res) {
        res.sendFile(indexPath);
    });

} else {
    app.use('/', publicPath);

    app.get('*', (req, res) => res.sendFile(HTML_FILE));
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
