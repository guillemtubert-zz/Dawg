var express = require('express');
var router = express.Router();

const authRouter = require("./auth");
const siteRouter = require ('./site-routes')

router.use("/auth", authRouter);
router.use("/profile", siteRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DAWG' });
});

module.exports = router;