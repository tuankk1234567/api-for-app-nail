var express = require("express");
var router = express.Router();
var {
  do_create_account,
  login,
  test
} = require("../controller/Account.controller");
var { isEmail } = require('../middleware/middleware');

// router.post('/dologin', loginController),
router.post("/doRegister",isEmail, do_create_account),
router.post("/login", login),
router.post("/test", test),
(module.exports = router);
