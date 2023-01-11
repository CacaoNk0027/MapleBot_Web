/**
 * Web Maple Bot
 *  => https://www.webmaplebot.ml
 */


/** dependencias iniciales */

const express = require('express');
const cors = require('cors')

/** dependencias secundarias */

const path = require('path');

/** variables secretas */
require('dotenv').config()

let port = parseInt(process.env['PORT'])

/** express app */

let app = express();

app.set('port', port || 3000);
app.set('views', path.join(__dirname, 'express/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use(require('./express/index.js'))

app.use('/', express.static(path.join(__dirname, 'express/public')))

app.get('/api/*', (req, res) => {
    var pageIncial = `${req.protocol}://${req.get('host')}/`
    res.status(404).json({
        statusCode: 404,
        description: 'Elemento no encontrado',
        link_inicial: `${pageIncial}`
    })
})

app.get('*', (req, res) => {
    res.status(404).render('errors/error404.html', {
        pathName: req.path
    })
})

app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
})