var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    title: "Welcome",
    message: "This is a dummy server"
  });
});

module.exports = router;
