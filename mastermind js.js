const color = ["red", "yellow", "blue", "limegreen", "brown", "cyan"];
var code = [];
var ball = 1;
var row = 11;
var playedcode = [];

function restart() {
	location.reload(true);
}

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
	var hint;

	if (playedcode[0] === code[0] &&
		playedcode[1] === code[1] &&
		playedcode[2] === code[2] &&
		playedcode[3] === code[3]) {
		console.log("You Win!");
		answer();
		document.getElementById("Game Over!").innerHTML = "You Win!";
		for (var a = 0; a < 4; a++) {
			document.querySelector(`.row${12-row} .smrow${12-row} .smdot${a + 1}`).style.backgroundColor = "black";
		}
	} else {
		for (var a = 0; a < 4; a++) {
			if (playedcode[a] === code[0] || 
				playedcode[a] === code[1] ||
				playedcode[a] === code[2] ||
				playedcode[a] === code[3]) {
				if (playedcode[a] === code[a]) {
					document.querySelector(`.row${12-row} .smrow${12-row} .smdot${a + 1}`).style.backgroundColor = "black";
				} else {
					document.querySelector(`.row${12-row} .smrow${12-row} .smdot${a + 1}`).style.backgroundColor = "white";
				}
			} else {
				console.log("not in");
			}
		}
	}
}