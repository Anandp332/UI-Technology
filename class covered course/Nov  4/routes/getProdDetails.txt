var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	console.log("response");
	console.log(req.query);
	var data = {	
		"pDetails": [
			{
				"name": "Smart Mobile",
				"price": 500,
				"manu": "HTC",
				"image": "https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg"
			},
			{
				"name": "Marker",
				"price": 200,
				"manu": "Camlin",
				"image": "https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg"
			},
			{
				"name": "Bag",
				"price": 1900,
				"manu": "Wildcraft",
				"image": "https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg"
			}
		]
	};


	/*var filterdData = {pDetails: []};
	for (var i = 0; i < data.pDetails.length; i++) {
		if ( data.pDetails[i].price >req.query.priceRange ) {
			filterdData.pDetails.push(data.pDetails[i]);
		}
	} */
	setTimeout(function(){
		res.end(JSON.stringify(data));	
	}, 4000);
	
});

module.exports = router;
