var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		"username": "Prasad",
		"location": 'Hyderabad'
	}
	res.render('sample', data);
	// res.send("bye for today");
});

module.exports = router;
