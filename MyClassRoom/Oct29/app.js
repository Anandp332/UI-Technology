var studentDetailsList=[];

function register() {
	var data = {};
	data.name = $("#sname").val();
	data.age = $("#sage").val();
	data.loc = $("#sloc").val();
	studentDetailsList.push(data);
	clearData();
	var length = studentDetailsList.length;
	var currentObj = data;
	var currentObj = studentDetailsList[length-1];
	addDataToTable(currentObj, length);
}

function clearData() {
	$("#sname").val('');
	$("#sage").val('');
	$("#sloc").val('');
}

function addDataToTable(data, position) {
	$("table").show();
	var tr = $("<tr></tr>");
	tr.attr("id", "row_" + position);
	var td1 = $("<td></td>").html(position);
	var td2 = $("<td></td>").html(data.name)
	var td3 = $("<td></td>").html(data.age)
	var td4 = $("<td></td>").html(data.loc);
	var td5 = $("<td></td>");
	var editInput = document.createElement('input');
	editInput.setAttribute("type", 'button');
	editInput.setAttribute("value", 'Edit');
	td5.append(editInput);
	var delInput = document.createElement('input');
	delInput.setAttribute("type", 'button');
	delInput.setAttribute("value", 'Delete');
	delInput.addEventListener("click", function(){
		deleteDetails(position);
	})
	td5.append(delInput);

	tr.append(td1);
	tr.append(td2);
	tr.append(td3);
	tr.append(td4);
	tr.append(td5);
	$("tbody").append(tr);
}

function deleteDetails(index) {
	studentDetailsList.splice(index-1, 1);
	var id = "row_" + index;
	console.log(id)
	$(id).remove();
}