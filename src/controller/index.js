const path = require('path');

const index = (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}

const url = (req, res) => {
    res.send(req.body.url);
}

module.exports = { index, url };