var productDetails = [];

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


function getProductDetails() {
	$(".loadingBlock").show();
	
	var dataUrl = 'http://localhost:8081/get/product/details';
	//var dataUrl = 'https://www.flipkart.com/api/4/discover/autosuggest';
	$.ajax({
		url: dataUrl,
		method: 'GET',
		dataType: 'JSON',
		
		data: {"priceRange": 200, "category": 'mobile'},
		success: function(response) {
			$(".loadingBlock").hide();
			console.log("Successful communication");
			console.log(response.pDetails);
			productDetails = response.pDetails;
			showProductDetails();
		},
		error: function(){
			$(".loadingBlock").hide();
			console.log("error");
			$(".errorBlock").show();
		}
	});
	

}

function showProductDetails() {
	for (var i = 0; i < productDetails.length; i++) {
		renderProductDetails(productDetails[i]);
	}
}