var express = require("express");
//var mongodb = require("mongodb");
// var mongoClient = mongodb.MongoClient;

var mongoClient = require("mongodb").MongoClient;
var mongoDbUrl = 'mongodb://localhost:27017';

var router = express.Router();

/*
router.get("/", function(req, res, next){
	console.log("got user req");
	console.log(req.query);
	var responseData = {msg: "success fly..."};
	res.send(JSON.stringify(responseData));
}); */

router.post("/", function(req, res, next){
	mongoClient.connect(mongoDbUrl, function(err, client){
		var db  = client.db("StudentData");
		var collection = db.collection("studentRegDetails");
		/*collection.find().toArray(function(err, items){
			console.log("items are ")
			console.log(items);
			res.send({"data": "done"});
		}) */

		collection.insertOne(req.body, function(err){
			if (err) {
				res.send({"msg": "Getting Error while inserting data to collection"});
			} else {
				res.send({"msg": "successfly user got registerd"});
			}
		});
		console.log(client);
		client.close();
	});
	/*console.log("got user req");
	console.log(req.body);
	var responseData = {msg: "success fly..."};
	res.send(JSON.stringify(responseData));*/
});
module.exports = router;