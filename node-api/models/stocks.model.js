var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
// Define collection and schema for Items
var Stocks = new Schema({
    stockName: {
        type: String
    },
    stockDetails: Any,
    updatedAt: Any,
    createdAt: Any,
}, {
    collection: 'stocks'
});

module.exports = mongoose.model('Stocks', Stocks);