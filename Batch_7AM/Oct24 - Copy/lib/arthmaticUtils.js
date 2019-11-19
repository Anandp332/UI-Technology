var utils = (function(){
	var count = 10;

	

	function multiValues(a1, a2) {
		count++;
		var result;
		result = a1 * a2;
		return result;
	}

	function subValues(a1, a2) {
		count++;
		var result;
		result = a1 - a2;
		return result;
	}

	function divValues(a1, a2) {
		count++;
		var result;
		result = a1 / a2;
		return result;
	}

	function getCount() {
		return count;
	}

	return {
		msg: 'hello...',
		displayData: function() {
			console.log("am frm display data");
		},
		addValues: function(a1, a2) {
			count++;
			var result;
			result = a1 + a2;
			return result;
		},
		mulValues: function(a1, a2){
			var r = multiValues(a1, a2);
			return r;
		}
	}

})();
