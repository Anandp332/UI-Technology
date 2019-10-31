function createBlock() {
	var divElement = document.createElement("div");
	divElement.setAttribute("class", "taskContainer");
	divElement.setAttribute("id", "tContainer");
	document.querySelector("#container").appendChild(divElement);
}

function showTaskToUser() {
	var task = "Make sure you submit all the assignments of todays class.";
	try {
		console.log("one");
		document.querySelector("#tContainer").innerHTML = "<b>" +  task + "</b>";
		console.log("two");
	} catch(exception ){
		console.log(exception);
		console.log("missing order of button click");
	}
	finally {
		console.log("hello");
		document.querySelector("#abc").value = ' test';
		console.log("don e");
		setTimeout(function(){
			showWelcomeBlock();
		}, 3000);
	}
	
	
}

function showWelcomeBlock() {
	var msg = "Welcome to group, have a great time";
	document.querySelector("#wlcmBlock").innerHTML = msg; 
	document.querySelector("#wlcmBlock").style.display = 'block';
}