function readUserData() {
	var data = {};
	data.name = $("#uname").val();
	data.age = $("#uage").val();
	data.country = $("#ucountry").val();
	console.log(data);
	registerDetails(data);
}

function registerDetails(stdData) {
	$.ajax({
		url: 'http://localhost:8087/details/student',
		dataType: 'JSON',
		method: 'POST',
		data: stdData,
		success: function(res) {
			console.log("Success");
			console.log(res);
		},
		error: function(err) {
			console.log("error");
		}
	})
}