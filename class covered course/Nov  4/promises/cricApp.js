function loadMatchDetails() {
	$(".loadingContainer").show();
	var match1Url =  "http://localhost:8081/crick/details/match1";
	var match2Url = "http://localhost:8081/crick/match2";
	var match1Promise = $.ajax({
		url: match1Url,
		dataType: 'JSON',
		method: 'GET'
	});

	var match2Promise = $.ajax({
		url: match2Url,
		dataType: 'JSON',
		method: 'GET'
	});

	$.when(match1Promise, match2Promise).then(function(res1, res2){
		$(".loadingContainer").hide();
		loadView("match1", res1[0]);
		loadView("match2", res2[0]);
	});
	

}

function loadView(matchType, data) { 
	var ref = "." + matchType + "Container";
	$(ref).loadTemplate($("#matchTemplate"), data);
}