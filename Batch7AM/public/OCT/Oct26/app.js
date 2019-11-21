
function showMsg() {
	alert("hello all");

}

$(document).ready(function(){
	alert("about to add listener");
	document.querySelector("#container").addEventListener('click', function(){
		showMsg();
	});	
});``

