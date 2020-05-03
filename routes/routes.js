var express = require('express');
var router = express.Router();

router.use('/', require(__dirname + '/index'));

module.exports = router;
