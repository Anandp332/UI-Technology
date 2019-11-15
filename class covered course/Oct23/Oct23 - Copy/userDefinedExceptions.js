function saveDetails() {
	var data = {};
	data.name = document.querySelector("#uname").value;
	data.age = document.querySelector("#uage").value;
	data.age = parseInt(data.age);
	/*if (data.age <= 10 || data.age  > 21) {
		 console.log("error - In age validation");
		 document.querySelector("#ageErr").style.display = 'block';
	}*/
	try {
		data.age = parseInt(data.age);
		
		if (data.name == '') {
			throw 'nameErr';
		}
		if (data.age <= 10 || data.age  > 21) {
			throw 'ageErr';
		}
	} catch (e) {
		console.log(e);
		if (e == 'ageErr') {
		 	document.querySelector("#ageErr").style.display = 'block';
		} else {
			 document.querySelector("#nameErr").style.display = 'block';
		}
		
	}
	finally {
		console.log("hello frm f inally");
	}
	return;
	console.log("extra job ")
}