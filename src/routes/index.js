const express = require('express');
const router = express.Router();
const controller = require('../controller/index');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', controller.index);
router.post('/url', urlencodedParser, controller.url);

module.exports = router;