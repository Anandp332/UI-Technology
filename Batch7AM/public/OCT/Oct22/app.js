function createBlock() {
	var divElement = document.createElement("div");
	divElement.setAttribute("class", "taskContainer");
	divElement.setAttribute("id", "tContainer");
	document.querySelector("#container").appendChild(divElement);
}

function showTaskToUser() {
	var task = "Make sure you submit all the assignments of todays class.";
	document.querySelector("#tContainer").innerHTML = "<b>" +  task + "</b>";
	setTimeout(function(){
		showWelcomeBlock();
	}, 3000);
	
}

function showWelcomeBlock() {
	var msg = "Welcome to group, have a great time";
	document.querySelector("#wlcmBlock").innerHTML = msg; 
	document.querySelector("#wlcmBlock").style.display = 'block';
}