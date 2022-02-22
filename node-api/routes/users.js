var express = require('express');
var router = express.Router();
const users = require('../controllers/users.controller.js');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/doSignup', users.doSignup);
router.post('/doSignin', users.doSignin);
router.post('/emailAlreadyExits', users.emailAlreadyExits);
router.post('/forgotPassword', users.forgotPassword);
router.post('/authentication', users.authentication);
router.post('/logout', users.logout);

module.exports = router;
