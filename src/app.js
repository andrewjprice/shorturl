const express = require('express');
const pug = require('pug');
const models = require('./models/url');
const routes = require('./routes/index');

const app = express();
app.use('*/js', express.static('public/js'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(routes);

module.exports = app;