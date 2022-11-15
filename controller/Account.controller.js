const AccountModel = require("../models/Account.model");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const multer = require("multer");
const fs = require("fs");
const saltRounds = 10;

let do_create_account = async (req, res) => {
  var password = req.body.password;
  var email = req.body.email;
  var role = req.body.role;
  if (email && password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    try {
      AccountModel.create(
        {
          email: email,
          password: hash,
          role: role,
        },
        (err, data) => {
          console.log(data);
          if (!err) {
            return res.json({
              data: data,
              status: 200,
            });
          } else {
            return res.json({
              data: data,
              status: 401,
            });
          }
        }
      );
    } catch (error) {
      return res.json({
        status: 401,
      });
    }
  }
};

let login = async (req, res, next) => {
  try {
    let user = req.body.email;
    await AccountModel.findOne({
      email: user,
    }).then((user) => {
      if (!user) {
        return res.json({ status: 401 });
      } else {
        bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (err) {
              return res.json({ status: 401 });
            }
            if (result) {
              res.json({ data: user, status: 200 });
            } else {
              res.json({ status: 401 });
            }
          }
        );
      }
    });
  } catch (error) {
    res.json({ status: 401 });
  }
};

module.exports = {
  do_create_account,
  login,
};
