var mongoose = require("mongoose");
//const { stringify } = require("querystring");
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Admin:Tuannv2000@admin.d0ki5dy.mongodb.net/test"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    email : String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String,
    dob: String,
    dateOff: Array,
    role: {
        type: String,
        default: 'user'
    },
    status: Boolean,
    avata: {
        type : String,
        default : "https://res.cloudinary.com/delgfxzy9/image/upload/v1668566836/image_defaut_vj2idn.jpg"
    }
},
{
    collection: 'account'
});

var AccountModel = mongoose.model('account', AccountSchema);
module.exports = AccountModel