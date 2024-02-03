var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html', { root: path.join(__dirname, 'public') }, (err) => {
    if (err) {
      console.error(`Error sending file: ${err}`);
      res.status(500).send('Internal Server Error');
    }
  });
});

router.get('/html', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.sendFile('test.html', {root: 'views'}, (err) => {
  res.sendFile(path.join(process.cwd(), '../views', 'test.html'), (err) => {
    if (err) {
      console.error(`Error sending file: ${err}`);
      res.status(500).send('Internal Server Error');
    }
  });
});

module.exports = router;
