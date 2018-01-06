var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection(config);

/* GET users listing. */
router.get('/candidate/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var canId = req.params.id;
  connection.query(`SELECT chName, enName, chSkill, enSkill FROM candidates WHERE candidateId = ${canId};`, (err, result) => {
  	const{ chName, enName, chSkill, enSkill } = result[0]
    res.send(JSON.stringify({
      chName: chName,
      enName: enName,
      chSkill: chSkill,
      enSkill: enSkill
    }));
  });
});

module.exports = router;
