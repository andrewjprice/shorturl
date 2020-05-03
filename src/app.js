const express = require('express');
const models = require('./models/url');
const routes = require('./routes/index');

const app = express();
app.use(express.static('public'))
app.use(routes);

module.exports = app;