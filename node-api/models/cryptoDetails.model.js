var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
// Define collection and schema for Items
var cryptoDetails = new Schema(
  {
    name: {
      type: String,
      // unique: true,
    },
    coinId: {
      type: String,
      // unique: true,
    },
    volAvgof20Days: {
      type: String,
    },
    todayVol: {
      type: String,
    },
    todayVolVsvolAvgof20Days: {
      type: String,
    },
    details: {
      type: String,
    },
    cryptoSymbolId: {
      type: String,
    },
    shortName: {
      type: String,
      // unique: true,
    },
    change24Hrs: {
      type: String,
      // unique: true,
    },
    change7Day: {
      type: String,
      // unique: true,
    },
    updatedAt: Any,
    createdAt: Any,
  },
  {
    collection: "cryptoDetails",
  }
);

module.exports = mongoose.model("cryptoDetails", cryptoDetails);
