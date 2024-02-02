var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html', { root: views });
});

router.get('/html', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('test.html', { root: views });
});

module.exports = router;
