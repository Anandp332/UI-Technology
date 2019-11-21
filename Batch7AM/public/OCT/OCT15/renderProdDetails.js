var productDetails = [
	{
		name: 'Smart Mobile',
		price: 24000,
		manu: 'HTC',
		image: 'https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg'
	},
	{
		name: 'Marker',
		price: 200,
		manu: 'Camlin',
		image: 'https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg'
	},
	{
		name: 'Bag',
		price: 1900,
		manu: 'Wildcraft',
		image: 'https://assets.mspimages.in/wp-content/uploads/2019/03/Redmi-7-2-696x435.jpg'
	}
];

function  renderProductDetails(product) {
	var ulTag = document.createElement("ul");
	ulTag.setAttribute("class", 'block');

	var li1 = document.createElement("li");
	var span1 = document.createElement("span");
	span1.setAttribute('class', 'sTitle');
	span1.innerText = 'Product Name : ';

	var span2 = document.createElement("span");
	span2.innerText = product.name;
	li1.appendChild(span1);
	li1.appendChild(span2);
	ulTag.appendChild(li1);
	
	var li2 = document.createElement("li");
	var span11 = document.createElement("span");
	span11.setAttribute("class", 'sTitle');
	span11.innerText = 'Price : ';
	var span12 = document.createElement("span");
	span12.innerText =  product.price;
	li2.appendChild(span11);
	li2.appendChild(span12);
	ulTag.appendChild(li2);
	console.log(ulTag);

	var li3 = document.createElement("li");
	var span21 = document.createElement("span");
	span21.setAttribute("class", 'sTitle');
	span21.innerText = 'Manufacturer : ';
	var span22 = document.createElement("span");
	span22.innerText =  product.manu;
	li3.appendChild(span21);
	li3.appendChild(span22);
	ulTag.appendChild(li3);

	var li4 = document.createElement("li");
	var imgTag = document.createElement("img");
	imgTag.setAttribute("src", product.image);
	li4.appendChild(imgTag);
	ulTag.appendChild(li4);


	document.querySelector(".container").appendChild(ulTag);
}

function showProductDetails() {
	for (var i = 0; i < productDetails.length; i++) {
		renderProductDetails(productDetails[i]);
	}
}