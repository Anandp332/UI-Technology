function registerDetails() {
	var userDetails = {};
	userDetails.uname = document.querySelector("#uname").value;
	if (userDetails.uname == '') {
		document.querySelector(".nameErr").style.display = 'block';
	}
	userDetails.passowrd = document.querySelector("#upwd").value;
	userDetails.rPwd = document.querySelector("#rPwd").value;
	if (userDetails.passowrd != userDetails.rPwd) {
		document.querySelector(".pwdMisMatch").style.display = 'block';
	}
	userDetails.age = document.querySelector("#uage").value;
	userDetails.country = document.querySelector("#country").value;
	userDetails.gender = '';
	userDetails.languages = [];
	console.log(userDetails);
}
