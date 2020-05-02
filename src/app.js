const express = require('express');
const routes = require('./routes/index');
const path = require('path');

const app = express();
app.use(express.static('public'))
app.use(routes);

module.exports = app;