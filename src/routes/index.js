const express = require('express');
const router = express.Router();
const url = require('../controller/url/index');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', url.index);
router.post('/shorten', urlencodedParser, url.shorten);
router.get('/:hash', url.hash);

module.exports = router;