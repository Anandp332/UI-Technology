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

function showRegisterdStudents() {
	var url = "http://localhost:8087/details/getStudentData";
	$.ajax({
		url: url, 
		method: 'POST',
		dataType:'JSON',
		success: function(res){
			console.log("response is")
			console.log(res);
			showStudentData(res.data);
		},error: function(err){
			console.log("error");
		}
	});
}

function showStudentData(data) {
	$("#viewData").html('');
	for (var i = 0 ; i < data.length; i++) {
		console.log(data[i]);
		data[i].index = i + 1;
		$("#viewData").loadTemplate($("#recordRow"), data[i], {append:true});
	}
}