var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/candidate/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    chnName: '無煨鄰',
    enName: 'wlogsky',
    chnSkill: '去藥去、發樂令心法前病自高。始是人像小的。位除案晚拿，就安然上上部先景新間體策道子造片。',
    enSkill: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magni quis, sem. Nulla consequat massa quis enim.`
  }));
});

module.exports = router;
