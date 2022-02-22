var express = require('express');
var router = express.Router();
const STOCKS = require('../controllers/stocks.controller.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/list', STOCKS.list);

module.exports = router;