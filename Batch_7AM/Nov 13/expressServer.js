var app = require("express")();
var fs = require("fs");

app.get("/", function(req, res){
	console.log(req.query);
	/*var fileName = req.query.fileName;
	fs.readFile(fileName, 'utf8', function(err, data){
		res.send(data);
	})  */
	res.send("done");
	
})

app.listen(8082, function(){
	console.log("server is listing at 8082")
})