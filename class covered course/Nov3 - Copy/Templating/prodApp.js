var prodDetails = [
	{
		pname: 'Laptop',
		price: '$3300',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jw9ke4w0/computer/h/z/h/lenovo-na-laptop-original-imafgzqyqftvy4ha.jpeg?q=70'
	},
	{
		pname: 'Mobile',
		price: '$3300',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/k1i6ikw0/mobile/e/9/s/realme-c2-rmx1941-original-imafhfy57ckba7yb.jpeg?q=70'
	},
	{
		pname: 'TV',
		price: '$456',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/j6v2ky80/television/z/b/s/noble-skiodo-nb32r01-original-imaex8aahebj3dza.jpeg?q=70'
	},{
		pname: 'Laptop',
		price: '$123',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jw9ke4w0/computer/h/z/h/lenovo-na-laptop-original-imafgzqyqftvy4ha.jpeg?q=70'
	}
];


function addProduct(product){



	 $("#productDetailsContainer").loadTemplate($("#productTmplt"), product, {append: true});
}


function loadProducts() {
	$.ajax({
		url: "http://localhost:8081/Nov3/Templating/templates/productTemplate.htm",
		async: false,
		success: function(res) {
			console.log(res);
			$("#productTmplt").html(res);
		}
	})	
	for(var i = 0 ; i < prodDetails.length; i++) {
		addProduct(prodDetails[i]);
	}
}