var mongoose = require("mongoose");
//const { stringify } = require("querystring");
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Admin:Tuannv2000@admin.d0ki5dy.mongodb.net/test"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const Schema = mongoose.Schema;
const BookingSchema = new Schema({
   date: String,
   booking: [{
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'account'
    },
    slot : String,
    productID : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'product'
    },
    status: String,
}],
},
{
    collection: 'booking'
});

var BookingModel = mongoose.model('booking', BookingSchema);
module.exports = BookingModel