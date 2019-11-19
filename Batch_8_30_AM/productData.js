function showProductData() {
	var mainDiv = document.createElement("div");
	mainDiv.setAttribute("class", "block");
	var ulTag = document.createElement("ul");

	var li1 = document.createElement("li");
	li1.innerHTML =  'product Name: ';
	var span1 = document.createElement("span");
	span1.innerHTML = 'Laptop';
	li1.append(span1);
	ulTag.append(li1);
	console.log(ulTag);
}

showProductData();