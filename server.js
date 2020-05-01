const app = require('./src/app');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log('App is running at http://localhost:%d in %s mode. Press CTRL-C to stop\n', port, app.get('env'));
});
