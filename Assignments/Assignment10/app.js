var schoolDetails = {
        schoolName: 'SPPU PUNE',
        schoolLocation: 'PUNE',
        address: 'MAHARASTRA'
    }
    //delete schoolDetails.address;
schoolDetails.sAddress = 'MAHARASTRA';

function saveDetails() {
    var sDetails = Object.create(schoolDetails);

    sDetails.name = document.querySelector("#uname").value;
    if (sDetails.name == '') {
        document.querySelector(".errblock").style.display = 'block';
        return;
    }
    sDetails.age = document.querySelector("#uAge").value;
    sDetails.uCountry = document.querySelector("#ucountry").value;
    sDetails.classOpted = document.querySelector(".uclass").value;

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
    divContainer.setAttribute("class", 'block');
    for (var temp in sDetails) {
        var divElement = document.createElement("div");
        divElement.innerHTML = temp + ' : ' + sDetails[temp];
        divContainer.appendChild(divElement);
    }



    document.querySelector(".detailsContainer").appendChild(divContainer);

}

function deleteDetails(sDetails) {
    document.querySelector(".block").style.display = "none";
    clearData();
    showStudentDetails(sDetails);
    return;
}