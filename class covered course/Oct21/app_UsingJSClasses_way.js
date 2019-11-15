function StudentDetails(data) {
	this.name = data.name;
	this.age = data.age;
	this.marks = data.marks;
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
		document.querySelector(".gradeCardContainer").appendChild(mainDiv);
	}
}

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
}