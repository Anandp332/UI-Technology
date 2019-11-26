if (sessionStorage.getItem('userName') != null) {

	var name = sessionStorage.getItem('userName');
	showWelcomeBlock(name);
}

if (sessionStorage.getItem("uColor") != null) {
	var colorName = sessionStorage.getItem("uColor");
	applyTheme(colorName);
}

function readData() {
	var name = document.querySelector("#uName").value;
	sessionStorage.setItem("userName",  name);
	showWelcomeBlock(name);
	
}

function showWelcomeBlock (uname) {
	document.querySelector("span").innerHTML = "<b>" + uname + '</b>';
	document.querySelector(".welcmBlock").style.display  = 'block';
}

function getTheme() {
	var selectedColor = document.querySelector("#themeName").value;
	sessionStorage.setItem("uColor", selectedColor);
	applyTheme(selectedColor);
}

function applyTheme(colorName) {
	document.querySelector("body").style.background = colorName;
}