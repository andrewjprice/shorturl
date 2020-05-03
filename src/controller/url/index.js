const { wrap: async } = require('co');
const mongoose = require('mongoose');
const btoa = require('btoa');
const Url = mongoose.model('Url');

exports.index = async((req, res) => {
    res.sendFile('./index.html', { root: 'public' });
});

exports.shorten = async((req, res) => {
    const urlData = req.body.url;

    Url.findOne({ url: urlData }, (err, record) => {
        if (record) {
            res.send({
                'hash': btoa(record._id),
                'status': 200,
                'statusText': 'OK'
            });
        } else {
            var url = new Url({ url: urlData });
            url.save((err) => {
                if (err) { console.log(err); }
                res.send({
                    url: urlData,
                    hash: btoa(url._id),
                    status: 200,
                    statusText: 'OK'
                });
            })
        }
    })
});