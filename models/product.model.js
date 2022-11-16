var mongoose = require("mongoose");
//const { stringify } = require("querystring");
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Admin:Tuannv2000@admin.d0ki5dy.mongodb.net/test"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    image: [{type: String}],
    like:[{
        type: mongoose.Schema.Types.ObjectId,
            ref : 'account'
    }],
    describe: String,
    price: String,
    discount: String,
    reducedPrice: String,
    comment : [{
        userID : {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'account'
        },
        writeComment : String,
        date: String,
        time: String,
    }],

},
{
    collection: 'product'
});

var ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel