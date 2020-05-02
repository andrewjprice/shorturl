
const index = (req, res) => {
    res.sendFile('./index.html', { root: 'public' });
}

const url = (req, res) => {
    res.send(req.body.url);
}

module.exports = { index, url };