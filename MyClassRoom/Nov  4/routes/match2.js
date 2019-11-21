var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	var data = {
		type: '1 Day',
		date: new Date(),
		betwn: 'India vs Aus',
		location: 'Hyderabad',
		stadiumName: 'ABC Stadium',
		time: '10 AM IST'
	};
	setTimeout(function(){
		res.send( JSON.stringify(data));	
	}, 5000);
	
});

module.exports = router;
