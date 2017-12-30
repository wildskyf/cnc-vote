var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/vote_info_check', function(req, res, next) {
  res.render('vote_info_check', {
    session: '第一場',
    group: 'A組',
    name: '無威鄰大大'
  });
});

router.get('/show_candidate', function(req, res, next) {
  res.render('show_candidate', {

  });
});

module.exports = router;
