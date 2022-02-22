var express = require('express');
var router = express.Router();
const CRYPTO = require('../controllers/crypto.controller.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//Router getCrypto  
// router.get('/getCryptoSymbol',CRYPTO.getCryptoSymbol);
// router.get('/getCryptoData',CRYPTO.getCryptoData);
router.post('/saveCryptoSymbol', CRYPTO.saveCryptoSymbol);
router.post('/deleteCryptoSymbol', CRYPTO.deleteCryptoSymbol);
router.get('/getCryptoSymbolDetails', CRYPTO.getCryptoSymbolDetails);
router.get('/watchList', CRYPTO.watchList);


// router.post('/list', STOCKS.list);

module.exports = router;