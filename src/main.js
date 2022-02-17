/**
 * Web Maple Bot
 *  => https://www.webmaplebot.ml
 */


/** dependencias iniciales */
const express = require('express');
// const mongoose = require('mongoose');

/** dependencias secundarias */

const path = require('path');

/** variables secretas */
require('dotenv').config()

let port = parseInt(process.env['PORT'])

/** conexion a mongoose */

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//     console.log('Database conected');
// });

/** express app */

let app = express();

app.set('port', port || 3000);
app.set('views', path.join(__dirname, 'express/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require('./express/index.js'))

app.use('/api/public', express.static(path.join(__dirname, 'express/public')))

app.get('/api/*', (req, res) => {
    var pageIncial = `${req.protocol}://${req.get('host')}/`
    res.json({
        statusCode: 404,
        description: 'Elemento no encontrado',
        link_inicial: `${pageIncial}`
    })
})

app.get('*', (req, res) => {
    res.render('errors/error404.html', {
        pathName: req.path
    })
})

app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
})