var express = require("express");

var router = express.Router();

/*
router.get("/", function(req, res, next){
	console.log("got user req");
	console.log(req.query);
	var responseData = {msg: "success fly..."};
	res.send(JSON.stringify(responseData));
}); */

router.post("/", function(req, res, next){
	console.log("got user req");
	console.log(req.body);
	var responseData = {msg: "success fly..."};
	res.send(JSON.stringify(responseData));
});
module.exports = router;