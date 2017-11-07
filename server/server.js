const _           = require('lodash');
const config      = require('nconf');
const compression = require('compression');
const recursive   = require('recursive-readdir');
const importJsx   = require('import-jsx');
const express     = require('express');
const app         = express();

require.extensions['.jsx'] = require.extensions['.js'];

console.log(require.extensions)

app.use(compression());
app.use(express.static(`${__dirname}/../build`));

config.argv()
    .env({ lowerCase: true })
    .file('environment', { file: `config/${process.env.NODE_ENV}.json` })
    .file('defaults', { file: 'config/default.json' });

const pageTemplate = require('./page.template.js');
const render = require('vitreum/steps/render');

recursive('client/pages')
    .then((files) => {
        const routeTable = {};
    
        _.forEach(files, (file) => {
            const validPath = /client\/pages\/.+\.jsx/;
            let path = file.slice(12, -4);
            
            console.log('Beta', path)
            
            if (!path.match(validPath)) {
                //return;
            }
            
            console.log('Gamma', file)
            
            if (path.slice(-6) === '/index') {
                path = path.slice(-5);
            }
            
            routeTable[path] = importJsx('../' + file.slice(0, -4));
        });
    
        console.log('Alpha', routeTable)
        
        app.get('*', (req, res) => {
            render('main', pageTemplate, {
                url: req.url,
                routeTable,
            })
                .then((page) => res.send(page))
                .catch((err) => console.log(err));
        });
        
    })
    .catch((err) => {
        console.log('Err', err)
    })

const PORT = config.get('port');
app.listen(PORT);
console.log(`server on port:${PORT}`);
