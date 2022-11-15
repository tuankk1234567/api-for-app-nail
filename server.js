const express = require("express");
const app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const Account = require("./routers/Account.router");
// parse application/json


app.use('/account',Account);

const http = require('http');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


