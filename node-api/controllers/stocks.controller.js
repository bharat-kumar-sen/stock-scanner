var User = require("../models/users.model");
var cryptoSymbol = require("../models/cryptoSymbol.model");
var MD5 = require("md5");
const GlobalService = require("../core/global.service.js");
var async = require('async');
var request = require('request');
require("dotenv").config();


exports.list = (req, res) => { // SIGNUP
  postData = req.body;
  var url = process.env.STOCK_API
  // console.log("url===========", url);
  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {}
  };
  request(options, function (error, response) {
    if (error) {
      return res.json({
				status: 500,
				message: "there are some error in getting stocks.",
				data: error
			});
    } else {
      var addressData = JSON.parse(response.body);
      // console.log("addressData===========", addressData);
      return res.json({
        status: 200,
        message: "Fetched stocks succesfully.",
        data: addressData
      });
    }
  });
};
