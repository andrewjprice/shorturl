const express = require('express');
const router = express.Router();
const controller = require('../controller/index');

router.get('/', controller.index);
router.post('/url', controller.url);

module.exports = router;