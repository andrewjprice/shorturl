const mongoose = require('mongoose');
const app = require('./src/app');
const port = process.env.PORT || 3000;

function listen() {
    app.listen(port);
    console.log('App is running at http://localhost:%d in %s mode. Press CTRL-C to stop\n', port, app.get('env'));
}

connect();

function connect() {
    mongoose.connection
        .on('error', console.log)
        .on('disconnected', connect)
        .once('open', listen);
    return mongoose.connect('mongodb://localhost/test', {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}