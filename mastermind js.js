var color = ["red", "yellow", "blue", "limegreen", "brown", "cyan"];
var code = [];
var ball = 1;
var row = 11;
var playedcode = [];

function gencode() {
	var number;
	var i;
	for (i = 0; i < 4; i++){
		number = Math.floor(Math.random() * 6);
		console.log(number);
		code.push (number);
	}
	for (i = 0; i < 4; i++){
		code.splice(i , 1 , color[code[i]])
	}
	console.log(code);
}

function addcolor(color) {
	playedcode.push (color);
	var x = document.getElementsByClassName("dot" + ball);
	if (ball < 4) {
		x[row].style.backgroundColor = color;
		ball++;
	} else if(ball == 4) {
		x[row].style.backgroundColor = color;
		ball++;
		checkanswer();
	} else {
		if (row !=0) {
			row--;
			ball = 1;
			playedcode = [];
			addcolor(color);
		} else {
			console.log("Game Over!");
			answer();
			document.getElementById("Game Over!").innerHTML = "Game Over!";
		}
	}
} 

function answer() {
	for (var i = 1; i < 5; i++) {
		var x = document.getElementsByClassName("master" + i);
		x[0].style.backgroundColor = code[i - 1];
	}
}

function checkanswer() {
	var correctposition = 0;
	for (var i = 0; i < 4; i++) {
		if (playedcode[i] == code[i]) {
			correctposition +=1;
			console.log(correctposition);
		}
	}
	switch(correctposition) {
		case 1:
			//color
			break;
		case 2:
			//color
			break;
		case 3:
			//color
			break;
		case 4:
			//color
			break;
	}
	if (correctposition == 4) {
		console.log("You Win!");
		answer();
		document.getElementById("Game Over!").innerHTML = "You Win!";
	}
}