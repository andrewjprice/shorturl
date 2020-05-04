const { wrap: async } = require('co');
const mongoose = require('mongoose');
const btoa = require('btoa');
const atob = require('atob');
const Url = mongoose.model('Url');

exports.index = async((req, res) => {
    res.render('index.pug');
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

exports.hash = function(req, res) {
    const id = atob(req.params.hash);
    Url.findOne({ _id: id }, function(err, record) {
        if (record) {
            console.log('url: ' + record.url);
            res.status(301).redirect(record.url);
        } else {
            res.redirect('/');
        }
    });
}