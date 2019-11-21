function StudentDetails(data) {
	this.name = data.name;
	this.age = data.age;
	this.marks = data.marks;
	this.index = '';
	this.getTotalAndAvg = function() {
		this.total = 0;
		for (var i = 0; i < this.marks.length; i++) {
			this.total +=  this.marks[i];
		}
		this.avg = this.total/this.marks.length;
	}
	this.getGrade = function() {
		if (this.avg >= 40) {
			this.grade = "Passed";
		} else {
			this.grade = "Fail";
		}
	}
	this.displayGradeCard = function() {
		this.index = sDetailsObjList.length;
		this.getTotalAndAvg();
		this.getGrade();
		 var mainDiv = document.createElement("div");
		 mainDiv.setAttribute("class", 'block');

		for (var temp in this) {
			if (typeof(this[temp]) != 'function') {
			 	var div = document.createElement("div");
			 	div.innerHTML = temp + ' : ' +  this[temp];
			 	mainDiv.appendChild(div);
			}
		}
		var button = document.createElement("input");
		button.setAttribute("type", "Button")
		button.setAttribute("value", "Edit");
		button.setAttribute("id", 'edit_' + this.index);
		button.addEventListener("click", function(event){
			alert(event.target.getAttribute("id"));
		})
		mainDiv.appendChild(button);

		document.querySelector(".gradeCardContainer").appendChild(mainDiv);
	}
}

var sDetailsObjList = [];

function generateGradeCard() {
	// Reading User data
	var sdata = {};
	sdata.name = document.querySelector('#sname').value;
	sdata.age = document.querySelector('#age').value;
	sdata.marks  = [];
	for (var i = 1 ; i <= 5; i ++) {
		var id = '#s' + i;
		var m = document.querySelector(id).value;
		m = parseInt(m);
		sdata.marks.push(m);
	}
	var s1 = new StudentDetails(sdata);
	s1.displayGradeCard();
	sDetailsObjList.push(s1);
}