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
	// var ulTag = document.createElement("ul");
	var ulTag = $("<ul></ul>");
	ulTag.attr("class", 'block');

	var li1 = $("<li></li>");
	var span1 = $("<span></span>").addClass('sTitle').text('Product Name : ');

	var span2 = $("<span></span>").text(product.name);
	li1.append(span1);
	li1.append(span2);
	ulTag.append(li1);
	
	var li2 = $("<li></li>");
	var span11 = $("<span></span>").addClass('sTitle').text('Price : ');
	var span12 = $("<span></span>").text(product.price);
	li2.append(span11);
	li2.append(span12);
	ulTag.append(li2);
	
	var li3 = $("<li></li>");
	var span21 = $("<span></span>").addClass('sTitle').text('Manufacturer : ');
	var span22 = $("<span></span>").text(product.manu);
	li3.append(span21);
	li3.append(span22);
	ulTag.append(li3);

	var li4 = $("<li></li>");
	var imgTag = $("<img/>").attr("src", product.image);
	li4.append(imgTag);
	ulTag.append(li4);

	$(".container").append(ulTag);
}

function showProductDetails() {
	for (var i = 0; i < productDetails.length; i++) {
		renderProductDetails(productDetails[i]);
	}
}