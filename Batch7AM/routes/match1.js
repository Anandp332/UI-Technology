var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		type: 'T20',
		date: new Date(),
		betwn: 'India vs Bangladesh',
		location: 'Delhi',
		stadiumName: 'ArunJaitly Stadium',
		time: '6 PM IST'
	};
	setTimeout(function(){
		res.send( JSON.stringify(data));
	}, 9000);
	
	
	
});

module.exports = router;
