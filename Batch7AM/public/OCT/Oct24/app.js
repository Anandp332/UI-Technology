var count = 0;
var utils = "hello";
alert(utils.msg)
utils.displayData();
function doOperation(type) {
	count++;
	var fval = document.querySelector("#fval").value;
	var sval = document.querySelector("#sval").value;
	fval = parseInt(fval);
	sval = +sval;
	var result ;
	switch(type) {
		case 'add':
			result = utils.addValues(fval, sval);
			break;
		case 'mul':
			result = utils.mulValues(fval, sval);
			break;
		case 'div':
			result = divValues(fval, sval);
			break;
		case 'sub':
			result = subValues(fval, sval);
			break;
	}
	document.querySelector("#rBlock").innerHTML = " The " + type + ' is : ' + result;
	document.querySelector("span").innerHTML = count;
}