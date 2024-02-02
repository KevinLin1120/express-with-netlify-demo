var express = require('express');
const path = require('path');
var router = express.Router();
// 指定靜態文件目錄
router.use(express.static('views'));

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html', {root: 'views'}, (err) => {
    if (err) {
      console.error(`Error sending file: ${err}`);
      res.status(500).send('Internal Server Error');
    }
  });
});

router.get('/html', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, 'views', 'test.html'), (err) => {
    if (err) {
      console.error(`Error sending file: ${err}`);
      res.status(500).send('Internal Server Error');
    }
  });
});

module.exports = router;
