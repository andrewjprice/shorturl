const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    count: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

const urlSchema = new mongoose.Schema({
    _id: Number,
    url: String,
    created_at: Date
});

urlSchema.pre('save', function(next) {
    var url = this;
    Counter.findOneAndUpdate({ _id: 'url_counter' }, { $inc: { count: 1} }, { upsert: true, new: true }, (err, counter) => {
        if (err) {
            console.log('ERROR urlSchema.pre("save"): Counter.findByIdAndUpdate');
            return next(err);
        }
        url._id = counter.count;
        url.created_at = Date();
        next();
    });
});

mongoose.model('Url', urlSchema);