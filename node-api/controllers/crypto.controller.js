var User = require("../models/users.model");
var cryptoSymbol = require("../models/cryptoSymbol.model");
var cryptoDetails = require("../models/cryptoDetails.model");

var MD5 = require("md5");
var axios = require("axios");
const GlobalService = require("../core/global.service.js");
var async = require("async");
var moment = require("moment");

var request = require("request");
require("dotenv").config();

// exports.list = (req, res) => {
//   // SIGNUP
//   postData = req.body;
//   var url = process.env.STOCK_API;
//   var options = {
//     method: "GET",
//     url: url,
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     form: {},
//   };
//   request(options, function (error, response) {
//     if (error) {
//       return res.json({
//         status: 500,
//         message: "there are some error in getting stocks.",
//         data: error,
//       });
//     } else {
//       var addressData = JSON.parse(response.body);
//       return res.json({
//         status: 200,
//         message: "Fetched stocks succesfully.",
//         data: addressData,
//       });
//     }
//   });
// };

// exports.getCryptoSymbol = (req, res) => {
//   postData = req.body;
//   cryptoSymbol.find().exec((err, obj) => {
//     if (err) {
//       return res.json({
//         status: 500,
//         message: "There are some error in getting Crypto Symbol.",
//         data: err,
//       });
//     } else {
//       return res.json({
//         status: 200,
//         message: "Crypto Symbol Data",
//         data: obj,
//       });
//     }
//   });
// };

// exports.getCryptoData = (req, res) => {
//   postData = req.body;
//   cryptoDetails.find().exec((err, obj) => {
//     if (err) {
//       return res.json({
//         status: 500,
//         message: "there are some error in getting Crypto Symbol.",
//         data: err,
//       });
//     } else {
//       return res.json({
//         status: 200,
//         message: "Crypto Symbol Data",
//         data: obj,
//       });
//     }
//   });
// };

exports.saveCryptoSymbol = (req, res) => {
  var postData = req.body;
  var coinGeckoCoinsAPI = process.env.COINGECKO_COINS_API;
  var coinName = postData.name;
  var findCoinConfig = process.env.FIND_COIN_CONFIG;

  axios
    .get(coinGeckoCoinsAPI + coinName + findCoinConfig)
    .then((response) => {
      if (response.status === 200) {
        if (postData._id) {
          postData.updatedAt = new Date();
          delete postData.createdAt;
          cryptoSymbol.updateOne({
              _id: postData._id,
            },
            postData,
            (err, obj) => {
              if (err) {
                return res.json({
                  status: 500,
                  message: "Failed to create Symbol.",
                  data: err,
                });
              } else {
                return res.json({
                  status: 200,
                  message: "Symbol created succesfully.",
                  data: obj,
                });
              }
            }
          );
        } else {
          let cryptoSym = new cryptoSymbol(postData);
          cryptoSym.updatedAt = new Date();
          cryptoSym.createdAt = new Date();
          cryptoSym.save((err, data) => {
            if (err) {
              return res.json({
                status: 500,
                message: "Failed to create Symbol.",
                data: err,
              });
            } else {
              return res.json({
                status: 200,
                message: "Symbol created succesfully.",
                data: data,
              });
            }
          });
        }
      }
    })
    .catch((err) => {
      return res.json({
        status: 422,
        message: "Coin Not Found, Error.",
        data: "This coin name is not valid.",
      });
    });
};

exports.deleteCryptoSymbol = (req, res) => {
  var postData = req.body;
  cryptoSymbol.deleteOne({
      _id: postData._id,
    },
    (err, obj) => {
      if (err) {
        return res.json({
          status: 500,
          message: "Failed to Delete Symbol.",
          data: err,
        });
      } else {
        return res.json({
          status: 200,
          message: "Symbol Deleted succesfully.",
          data: postData,
        });
      }
    }
  );
};


exports.getCryptoSymbolDetails = (req, res) => {
  let todayDate = new Date();
  let date = todayDate.getDate();
  let month = todayDate.getMonth();
  let year = todayDate.getFullYear();

  cryptoDetails
    .find({
      createdAt: {
        $gte: new Date(year, month, date),
        $lt: new Date(year, month, date + 1),
      },
    })
    .exec((err, cryptoSymbolfoundData) => {
      if (err) {
        return res.json({
          status: 500,
          message: "Error.",
        });
      } else {
        if (cryptoSymbolfoundData.length) {
          let coinHistoryData = JSON.parse(
            JSON.stringify(cryptoSymbolfoundData)
          );
          async.forEachSeries(
            coinHistoryData,
            (obj, historyCb) => {
              cryptoDetails
                .find({
                  name: obj.name,
                })
                .exec((historyErr, historyRecord) => {
                  if (historyRecord.length) {
                    historyRecord.sort((a, b) => {
                      return new Date(a.createdAt) - new Date(b.createdAt);
                    });
                    /*  const UniqueHistoryRecord = [...new Map(historyRecord.map(item => [moment(item['createdAt']).format('dd/MM/yyyy'), item])).values()];
                     obj.history = UniqueHistoryRecord; */
                    obj.history = historyRecord;
                    obj.details = JSON.parse(obj.details);
                    historyCb();
                  } else {
                    obj.history = [];
                    historyCb();
                  }
                });
            },
            () => {
              // console.log("coinHistoryData=======", coinHistoryData);
              return res.json({
                status: 200,
                message: "Success.",
                data: coinHistoryData,
              });
            }
          );
        } else {
          return res.json({
            status: 500,
            message: "Error.",
          });
        }
      }
    });
};

exports.watchList = (req, res) => {
  // console.log("process.env.LASTMONTH_MINCOUNT - 1========", process.env.LASTMONTH_MINCOUNT - 1);
  cryptoDetails
    .find({
      todayVolVsvolAvgof20Days: {
        $gte: process.env.THREESHOLD_PERCENTAGE - 1 + Number('.99')
      },
    })
    .exec(async (err, cryptoSymbolfoundData) => {
      if (err) {
        return res.json({
          status: 500,
          message: "Error.",
        });
      } else {

        if (cryptoSymbolfoundData.length) {
          const UniqueRecord = await [...new Map(cryptoSymbolfoundData.map(item => [item['name'], item])).values()];
          let coinHistoryData = JSON.parse(
            JSON.stringify(UniqueRecord)
          );
          let preparedWatchList = []
          async.forEachSeries(
            coinHistoryData,
            (obj, historyCb) => {
              cryptoDetails
                .find({
                  name: obj.name,
                  todayVolVsvolAvgof20Days: {
                    $gte: process.env.THREESHOLD_PERCENTAGE - 1 + Number('.99'),
                  },
                })
                .exec((historyErr, historyRecord) => {
                  historyRecord = historyRecord.filter((element) => {
                    return Number(element.todayVolVsvolAvgof20Days) > process.env.THREESHOLD_PERCENTAGE - 1 + Number('.99')
                  });
                  // if (historyRecord.length && historyRecord.length > 1) {
                  if (historyRecord.length && historyRecord.length > process.env.LASTMONTH_MINCOUNT - 1) {
                    // if (historyRecord.length) {
                    historyRecord.sort((a, b) => {
                      return new Date(a.createdAt) - new Date(b.createdAt);
                    });
                    obj.history = historyRecord;
                    obj.details = JSON.parse(obj.details);
                    preparedWatchList.push(obj);
                    historyCb();
                  } else {
                    obj.history = [];
                    historyCb();
                  }
                });
            },
            () => {
              return res.json({
                status: 200,
                message: "Success.",
                data: preparedWatchList,
              });
            }
          );
        } else {
          return res.json({
            status: 500,
            message: "Error.",
          });
        }
      }
    });
};