var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var config = require('../config/database')

var connection = mysql.createConnection(config);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/vote_info_check', (req, res, next) => {
  const token = req.body;

  res.render('vote_info_check', {
    session: '第一場',
    group: 'A組',
    name: '無威鄰大大'
  });
});

router.get('/show_candidate', (req, res, next) => {
  res.render('show_candidate', {

  });
});

module.exports = router;
