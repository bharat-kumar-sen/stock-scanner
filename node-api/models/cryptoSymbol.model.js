var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
// Define collection and schema for Items
var Crypto = new Schema({
    name: {
        type: String,
        unique: true
    },
    coinId: {
        type: String,
        unique: true
    },
    shortName:{
        type:String,
        unique: true
    },
    updatedAt: Any,
    createdAt: Any,
}, {
    collection: 'CryptoSymbol'
});

module.exports = mongoose.model('CryptoSymbol', Crypto);