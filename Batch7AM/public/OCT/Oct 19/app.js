function StudentDetails(){
	this.sname = '';
	this.sage = '';
	this.marks = [];
	this.avg = 0;
	this.total = 0;
	this.getTotalAndAvg = function(){
		this.total = 0;
		for (var i = 0 ; i < this.marks.length; i++) {
			this.total += this.marks[i];
		}
		this.avg = this.total / this.marks.length;
	}
	this.getGrade = function() {
		this.grade = '';
		if(this.avg >= 40) {
			this.grade = 'Passed';
		} else {
			this.grade = 'Surprise';
		}
	}
	this.showDetails = function() {
		 this.getTotalAndAvg();
		 this.getGrade();
		var containerDiv = document.createElement("div");
		containerDiv.setAttribute("class", 'block');
		for (var temp in this) {
			var type = typeof(this[temp]);
			console.log(type);
			if (type != 'function' &&  type != 'object' ) {
				var div = document.createElement("div");
				div.innerHTML = temp + ' : ' + this[temp];
				containerDiv.appendChild(div);
			}
		}
		document.querySelector("#gradeBlock").appendChild(containerDiv);
	}

}


function readDetails() {
	var sDetails = {};
	sDetails.sname = document.querySelector("#sname").value;
	sDetails.sage = document.querySelector("#sAge").value;
	sDetails.marks = [];
	for (var i = 1; i <= 5; i++) {
		var id = '#m' + i;
		var m = document.querySelector(id).value;
		m = parseInt(m);
		sDetails.marks.push(m);
	}
	sDetails.getTotalAndAvg = function(){
		this.total = 0;
		for (var i = 0 ; i < this.marks.length; i++) {
			this.total += this.marks[i];
		}
		this.avg = this.total / this.marks.length;
	}
	sDetails.getGrade = function() {
		this.grade = '';
		if(this.avg >= 40) {
			this.grade = 'Passed';
		} else {
			this.grade = 'Surprise';
		}
	}
	sDetails.showDetails = function() {
		 this.getTotalAndAvg();
		 this.getGrade();
		var containerDiv = document.createElement("div");
		containerDiv.setAttribute("class", 'block');
		for (var temp in this) {
			var type = typeof(this[temp]);
			console.log(type);
			if (type != 'function' &&  type != 'object' ) {
				var div = document.createElement("div");
				div.innerHTML = temp + ' : ' + this[temp];
				containerDiv.appendChild(div);
			}
		}
		document.querySelector("#gradeBlock").appendChild(containerDiv);
	}
	sDetails.showDetails();
}