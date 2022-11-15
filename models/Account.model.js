var mongoose = require("mongoose");
//const { stringify } = require("querystring");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Admin:Tuannv2000@admin.d0ki5dy.mongodb.net/test";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    email : String,
    password: String,
    role : {
        type : String,
        default : "fishing"
    },
},
{
    collection: 'account'
});

var AccountModel = mongoose.model('account', AccountSchema);
module.exports = AccountModel