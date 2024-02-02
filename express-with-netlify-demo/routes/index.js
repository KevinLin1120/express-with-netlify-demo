var express = require('express');
var router = express.Router();
var path = require("path");
// 指定靜態文件目錄
router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html', {root: 'public'}, (err) => {
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

router.get('/static', function(req, res, next) {
  res.sendFile(path.join(process.cwd(),  'html.html'), (err) => {
    if (err) {
      console.error(`Error sending file: ${err}`);
      res.status(500).send('Internal Server Error');
    }
  });
});

module.exports = router;
