var express = require('express');
var router = express.Router();
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Amanda thinks you're wicked smart!",
  "Britney Jo is sooo proud of you! :)",
  "Sean would totally hire you.",
  "It's almost beer o'clock!"
]
function getRandomCompliments(){
  var item = compliments[Math.floor(Math.random()*compliments.length)];
  return item;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hey there!', compliment: getRandomCompliments() });
});

router.get('/:name', function(req, res, next) {
  res.render('index', { title: 'Hey there, ' +  req.params.name,  compliment: getRandomCompliments() });
});


module.exports = router;
