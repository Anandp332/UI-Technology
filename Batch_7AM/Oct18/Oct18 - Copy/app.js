

var schoolDetails = {
	schoolName: 'Abc Scool',
	schoolLocation: 'Hyderbad',
	address: 'hyderbad'
}
//delete schoolDetails.address;
schoolDetails.sAddress = 'Hyderbad';

function saveDetails() {
	/* var sDetails = {
	 	"hno": '345'
	 }; */
	var sDetails = Object.create(schoolDetails);

	sDetails.name =  document.querySelector("#uname").value;
	if (sDetails.name == '') {
		document.querySelector(".errblock").style.display = 'block';
		return;
	}
	sDetails.age =  document.querySelector("#uAge").value;
	sDetails.uCountry =  document.querySelector("#ucountry").value;
	sDetails.classOpted =  document.querySelector(".uclass").value;
	
	console.log(sDetails);
	showStudentDetails(sDetails);
	clearData();

}
function clearData() {
	document.querySelector("#uname").value = '';
	document.querySelector("#uAge").value = '';
	document.querySelector("#ucountry").selectedIndex = 2;
}

function showStudentDetails(sDetails) {
	var divContainer = document.createElement("div");
	divContainer.setAttribute("class", 'block')
	
	/*var div1 = document.createElement("div");
	div1.innerHTML =  "Name :" + sDetails.name;
	divContainer.appendChild(div1);

	var div2 = document.createElement("div");
	div2.innerHTML =  "Age :" + sDetails.age;
	divContainer.appendChild(div2);

	var div3 = document.createElement("div");
	div3.innerHTML =  "Country :" + sDetails.uCountry;
	divContainer.appendChild(div3);

	var div4 = document.createElement("div");
	div4.innerHTML =  "Class :" + sDetails.classOpted;
	divContainer.appendChild(div4);*/

	for (var  temp in   sDetails) {
		var divElement = document.createElement("div");
		divElement.innerHTML = temp + ' : ' + sDetails[temp];
		divContainer.appendChild(divElement);
	}
	document.querySelector(".detailsContainer").appendChild(divContainer);
}

