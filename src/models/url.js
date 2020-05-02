const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    hash: String,
    originalUrl: String
});

mongoose.model('Url', urlSchema);