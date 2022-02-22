var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
// Define collection and schema for Items
var cryptoMonitoringTable = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    details: {
      type: String,
    },
    cryptoSymbolId: { type: String },
    updatedAt: Any,
    createdAt: Any,
  },
  {
    collection: "cryptoMonitoringTable",
  }
);

module.exports = mongoose.model("cryptoMonitoringTable", cryptoMonitoringTable);
