var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var config = require('../config/database')

var connection = mysql.createConnection(config);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const { token } = req.body;

  // FIXME: avoid SQL injection
  connection.query(`select roundId from voters where token = '${token}'`, (err, result) => {
    const { roundId } = result[0];

    if (result.length == 0) {
      res.render('index', {
        token: token,
        error: {
          message: "Wrong token format."
        }
      });
    }
    else {
      res.render('post_redirect', {
        r_id: rountId,
        token: token
      })
    }

  })

});

router.post('/vote_info_check', (req, res, next) => {
  const { token, r_id } = req.body;

  connection.query(``, (err, result) => {
    res.render('vote_info_check', {
      token: token,
      r_id: r_id,
      session: '第一場',
      group: 'A組',
      name: '無威鄰大大'
    });
  })
});

router.get('/show_candidate', (req, res, next) => {
  const { token, r_id } = req.body;

  connection.query(`select candidateId, chName from candidatesForVote natural join candidates where roundId = 1 ;`, (err, result) => {
    res.render('show_candidate', {
      r_id: r_id,
      token: token,
      candidates: result
    });
  });
});

module.exports = router;
