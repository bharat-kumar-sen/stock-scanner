/**
 * Name: Global.services.
 * @description : Here is define some common and global function.
 */

const async = require("async");
const fs = require("fs");
const axios = require("axios");
const sgMail = require("@sendgrid/mail");
var request = require("request");
var cron = require("node-cron");
var moment = require("moment");
const nodemailer = require('nodemailer');

require("dotenv").config();

var CRYPTOSYMBOL = require("../models/cryptoSymbol.model");
var CRYPTODETAILS = require("../models/cryptoDetails.model");
const {
  ConnectionBase
} = require("mongoose");
// var User = require("../models/users.model");

exports.getCryptoCoinByID = (callback) => {
  let coinGeckoCoinsAPI = process.env.COINGECKO_COINS_API;
  let allCoinParam = process.env.ALL_COIN_PARAM;
  var vsCurrency = process.env.VS_CURRENCY;
  var noOfDaysForMarketChart = process.env.NO_OF_DAYS_FOR_MARKETCHART;
  var daysInterval = process.env.DAYS_INTERVAL;
  let allCoins = [];

  axios
    .get(coinGeckoCoinsAPI + allCoinParam)
    .then((response) => {
      if (response.status === 200) {
        allCoins = response.data;
        // allCoins = [
        //   response.data[0],
        //   response.data[2],
        //   response.data[3],
        //   response.data[4],
        //   response.data[5],
        // ];
        if (allCoins.length) {
          async.forEachSeries(
            allCoins,
            (obj, forEachSeriesCb) => {
              let qualified = false;
              let symbolObj = {};
              async.waterfall(
                [
                  (cb) => {
                    if (obj) {
                      setTimeout(() => {
                        axios
                          .get(
                            coinGeckoCoinsAPI +
                            obj.id +
                            vsCurrency +
                            noOfDaysForMarketChart +
                            daysInterval
                          )
                          .then((response) => {
                            if (response.status === 200) {
                              let symbolMarketDetails = null;
                              symbolMarketDetails = response.data;
                              // console.log("symbolMarketDetails===", symbolMarketDetails);
                              let noOfDays = process.env.NO_OF_DAYS;
                              let total_volumes =
                                symbolMarketDetails.total_volumes;
                              let volumeAdditionOf20Days = 0;
                              total_volumes.map(
                                (volume) =>
                                (volumeAdditionOf20Days += volume[1])
                              );
                              let totalVolVs20Days =
                                symbolMarketDetails.total_volumes[
                                  symbolMarketDetails.total_volumes.length - 1
                                ][1] -
                                volumeAdditionOf20Days / noOfDays;
                              let todayMarketCapOfCoin =
                                symbolMarketDetails.market_caps[
                                  symbolMarketDetails.market_caps.length - 1
                                ][1];
                              /* console.log(
                                "============market details price",
                                symbolMarketDetails.prices

                              ); */
                              //started here
                              let yesterdayPrice =
                                symbolMarketDetails.prices[
                                  symbolMarketDetails.prices.length - 2
                                ][1];
                              let todayPrice =
                                symbolMarketDetails.prices[
                                  symbolMarketDetails.prices.length - 1
                                ][1];
                              let sevenDayPreviousPrice =
                                symbolMarketDetails.prices[
                                  symbolMarketDetails.prices.length - 8
                                ][1];
                              /*  let change24Hrs =
                                 (((todayPrice - yesterdayPrice) / todayPrice) *
                                   100).toFixed(2);
                               let change7Day =
                                 (((todayPrice - sevenDayPreviousPrice) /
                                     todayPrice) *
                                   100).toFixed(2); */
                              let change24Hrs =
                                (((todayPrice - yesterdayPrice) / yesterdayPrice) *
                                  100).toFixed(2);
                              let change7Day =
                                (((todayPrice - sevenDayPreviousPrice) /
                                    sevenDayPreviousPrice) *
                                  100).toFixed(2);
                              /* console.log(yesterdayPrice, todayPrice, sevenDayPreviousPrice);
                              console.log(change24Hrs, change7Day, obj.id); */
                              //ended here

                              symbolObj = {
                                id: obj.id,
                                shortName: obj.symbol,
                                symbol: obj.name,
                                codeType: "Crypto",
                                volAvgof20Days: (
                                  volumeAdditionOf20Days / noOfDays
                                ).toFixed(2),
                                todayVol: symbolMarketDetails.total_volumes[
                                  symbolMarketDetails.total_volumes.length - 1
                                ][1].toFixed(2),
                                todayVolVsvolAvgof20Days: (
                                  (totalVolVs20Days /
                                    symbolMarketDetails.total_volumes[
                                      symbolMarketDetails.total_volumes.length -
                                      1
                                    ][1]) *
                                  100
                                ).toFixed(2),
                                change24Hrs,
                                change7Day
                              };
                              if (
                                // Number(symbolObj.todayVolVsvolAvgof20Days) >= 20
                                Number(symbolObj.todayVolVsvolAvgof20Days) >=
                                process.env.THREESHOLD_PERCENTAGE &&
                                Number(todayMarketCapOfCoin) >=
                                process.env.THREESHOLD_MARKETCAP
                              ) {
                                console.log("coin passed ");
                                qualified = true;
                                cb(null, symbolObj);
                              } else {
                                console.log("coin failed");
                                qualified = false;
                                cb(null, obj);
                              }
                            } else {
                              cb(null, obj);
                            }
                          })
                          .catch((error) => {
                            cb(null, obj);
                          });
                      }, 2000);
                    } else {
                      cb(null, obj);
                    }
                  },
                  (updatedData, cb) => {
                    if (qualified) {
                      var newSymbol = new CRYPTOSYMBOL();
                      newSymbol.name = obj.name;
                      newSymbol.coinId = obj.id;
                      newSymbol.shortName = obj.symbol;
                      newSymbol.updatedAt = new Date();
                      newSymbol.createdAt = new Date();
                      newSymbol.save((newSymbolErr, newSymbolResp) => {
                        if (!newSymbolErr) {
                          console.log("coin added");
                          cb(null, obj);
                        } else {
                          console.log("coin failed to add");
                          cb(null, obj);
                        }
                      });
                    } else {
                      cb(null, obj);
                    }
                  },
                  (updatedData, cb) => {
                    CRYPTOSYMBOL.find({
                      coinId: symbolObj.id,
                    }).exec((existedErr, existedSymbol) => {
                      if (!existedErr) {
                        if (qualified || existedSymbol.length) {
                          let todayDate = new Date();
                          let date = todayDate.getDate();
                          let month = todayDate.getMonth();
                          let year = todayDate.getFullYear();
                          CRYPTODETAILS.find({
                            name: obj.name,
                            createdAt: {
                              $gte: new Date(year, month, date),
                              $lt: new Date(year, month, date + 1),
                            },
                          }).exec(
                            (cryptoSymbolfoundErr, cryptoSymbolfoundData) => {
                              if (cryptoSymbolfoundData.length) {
                                cb(null, obj);
                              } else {
                                var newDetailsCrypto = new CRYPTODETAILS();
                                newDetailsCrypto.name = obj.name;
                                newDetailsCrypto.shortName = obj.symbol;
                                newDetailsCrypto.coinId = obj.coinId;
                                newDetailsCrypto.cryptoSymbolId = obj._id;

                                newDetailsCrypto.change24Hrs = symbolObj.change24Hrs;
                                newDetailsCrypto.change7Day = symbolObj.change7Day;

                                newDetailsCrypto.details = JSON.stringify(
                                  symbolObj
                                );
                                newDetailsCrypto.volAvgof20Days =
                                  symbolObj.volAvgof20Days;
                                newDetailsCrypto.todayVol = symbolObj.todayVol;
                                newDetailsCrypto.todayVolVsvolAvgof20Days =
                                  symbolObj.todayVolVsvolAvgof20Days;

                                newDetailsCrypto.updatedAt = new Date();
                                newDetailsCrypto.createdAt = new Date();
                                newDetailsCrypto.save(
                                  (symDetailsErr, symDetailsResp) => {
                                    if (symDetailsErr) {
                                      cb(null, obj);
                                    } else {
                                      console.log("coin details added");
                                      cb(null, obj);
                                    }
                                  }
                                );
                              }
                            }
                          );
                        } else {
                          cb(null, obj);
                        }
                      } else {
                        cb(null, obj);
                      }
                    });
                  },
                ],
                () => {
                  forEachSeriesCb();
                }
              );
            },
            () => {
              exports.getEleminateCoin(() => {
                console.log("started coin elemination.");
              });
              callback();
            }
          );
        } else {
          callback();
        }
      }
    })
    .catch((err) => {
      callback();
    });
};

exports.getEleminateCoin = (callback) => {
  CRYPTOSYMBOL.find({}).exec((err, allCoins) => {
    if (allCoins) {
      async.forEachSeries(
        allCoins,
        (obj, forEachSeriesCb) => {
          async.waterfall(
            [
              (cb) => {
                if (obj) {
                  CRYPTODETAILS.find({
                    name: obj.name,
                  }).exec((detailsErr, detailsResp) => {
                    if (detailsResp.length) {
                      let previousMonth = moment().format("M") - 1;
                      let filterLastMonthDetails = detailsResp.filter(
                        (x) =>
                        Number(moment(x.createdAt).format("M")) ===
                        previousMonth
                      );
                      if (filterLastMonthDetails.length) {
                        let filterLastMonthDetailsWithPassThreshold = filterLastMonthDetails.filter(
                          (x) =>
                          x.todayVolVsvolAvgof20Days >=
                          process.env.THREESHOLD_PERCENTAGE
                        );
                        if (
                          filterLastMonthDetailsWithPassThreshold.length <
                          process.env.LASTMONTH_MINCOUNT
                        ) {
                          CRYPTOSYMBOL.deleteOne({
                            name: obj.name
                          }).exec(
                            (err, res) => {
                              if (res) {
                                console.log("coin deleted", obj.name);
                                CRYPTODETAILS.deleteMany({
                                  name: obj.name,
                                }).exec((errDes, resDes) => {
                                  if (errDes) {
                                    cb(null, obj);
                                  } else {
                                    console.log("description and coin deleted");
                                    cb(null, obj);
                                  }
                                });
                              } else {
                                cb(null, obj);
                              }
                            }
                          );
                        } else {
                          cb(null, obj);
                        }
                      } else {
                        cb(null, obj);
                      }
                    } else {
                      cb(null, obj);
                    }
                  });
                } else {
                  cb(null, obj);
                }
              },
            ],
            () => {
              forEachSeriesCb();
            }
          );
        },
        () => {
          callback();
        }
      );
    }
  });
};

exports.stockCronJob = () => {
  var CronJob = require("cron").CronJob;
  var cronjob = new CronJob({
    // cronTime: '*/1 * * * * *', // every second
    cronTime: "0 0 0 * * *", // Mid night
    onTick: function () {
      console.log("started cron -------------midnight");
      exports.getCryptoCoinByID(() => {
        console.log("cron job has been run successfully.");
      });
    },
    start: false,
  });
  cronjob.start();
  console.log(cronjob.running);
  /*  exports.getCryptoCoinByID(() => {
     console.log("cron job has been run successfully.");
   }) */
  /* exports.getEleminateCoin(() => {
     console.log("started coin elemination.");
   }); */
};

exports.prepareEmailData = (EmailConfig, callBack) => {
  async.waterfall(
    [
      (cb) => {
        /** Get email messages template by template path*/
        exports.getEmailMessages(EmailConfig.templatePath, (err, html) => {
          if (err) {
            cb(true, null);
          } else {
            cb(null, html);
          }
        });
      },
      (messages, cb) => {
        if (messages) {
          /**this function call for replace marker under email messages*/
          exports.replaceMarker(
            EmailConfig.markerData,
            messages,
            (err, html) => {
              if (err) {
                cb(true, null);
              } else {
                EmailConfig.html = html;
                cb(null, html);
              }
            }
          );
        } else {
          cb(null, true);
        }
      },
      (messages, cb) => {
        if (messages) {
          /** finally call send email service for send email */
          exports.emailSend(EmailConfig, function () {
            cb(null, true);
          });
        } else {
          cb(null, true);
        }
      },
    ],
    (error, finalResp) => {
      callBack();
    }
  );
};

exports.replaceMarker = (markerData, messages, callBack) => {
  var keys = Object.keys(markerData);
  async.forEach(
    keys,
    (key, cb) => {
      var marker = "##" + key.toUpperCase() + "##";
      messages = messages.replace(new RegExp(marker, "g"), markerData[key]);
      cb();
    },
    () => {
      callBack(null, messages);
    }
  );
};

exports.getEmailMessages = (templatePath, callback) => {
  fs.readFile(
    templatePath, {
      encoding: "utf-8",
    },
    function (err, html) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, html);
      }
    }
  );
};

exports.emailSend = async (emailData, mainCb) => {
  /* 	sgMail.setApiKey(process.env.SEND_GRID_API);
  	const msg = {
  		from: process.env.SEND_GRID_FROM_EMAIL,
  		to: emailData.email,
  		subject: emailData.subject,
  		html: emailData.html
  	};
  	var sendEamilResponse = await sgMail.send(msg);
  	console.log("Message sent: %s", JSON.stringify(sendEamilResponse));
  	mainCb(); */

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_API,
      pass: process.env.GMAIL_PASSWORD,
    }
  });

  let mailDetails = {
    from: 'noreply@gmail.com',
    to: emailData.email,
    subject: emailData.subject,
    html: emailData.html
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('Error Occurs', err);
      mainCb();
    } else {
      console.log('Email sent successfully');
      mainCb();
    }
  });
}

exports.capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

exports.changeStringTotime = (string) => {
  const time = string.split("");
  return time[0] + "" + time[1] + ":" + time[2] + "" + time[3];
};