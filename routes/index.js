var express = require('express');
var router = express.Router();
var path = require('path');

const home = '/public/app/index.html';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join('../'+__dirname + home));
});

module.exports = router;
