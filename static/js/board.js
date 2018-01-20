var xpos = 0;
var ypos = 0;
var direction = "right";
var num;
var myVar;
var turn = "red";

function right(){
    if (turn == "red"){
	var elem = document.getElementById("player1");
    }
    else{
	var elem = document.getElementById("player2");
    }
    var endpt = xpos + 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (xpos == endpt) {
	    clearInterval(id);
	} else {
	    xpos++; 
	    elem.style.left = xpos + 'px';
	}
    }
}

function left(){
     if (turn == "red"){
	var elem = document.getElementById("player1");
    }
    else{
	var elem = document.getElementById("player2");
    }
    var elem = document.getElementById("player1");
    var elem = document.getElementById("player2");
    var endpt = xpos - 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (xpos == endpt) {
	    clearInterval(id);
	} else {
	    xpos--; 
	    elem.style.left = xpos + 'px';
	} 
    }
}

function down() {
     if (turn == "red"){
	var elem = document.getElementById("player1");
    }
    else{
	var elem = document.getElementById("player2");
    }
    var elem = document.getElementById("player1");
    var endpt = ypos + 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (ypos == endpt) {
	    clearInterval(id);
	} else {
	    ypos++; 
	    elem.style.top = ypos + 'px';
	}
    }
}


function up(){
     if (turn == "red"){
	var elem = document.getElementById("player1");
    }
    else{
	var elem = document.getElementById("player2");
    }
    var elem = document.getElementById("player1");
    var endpt = ypos - 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (ypos == endpt) {
	    clearInterval(id);
	} else {
	    ypos--; 
	    elem.style.top = ypos + 'px';
	}
    }
}





function move(){
    if (direction == "right"){
	if (xpos == 900){
	    direction = "down";
	    ypos = 0;
	    down();
	}
	else {
	    right();
	}
    }
    else if (direction == "left"){
	if (xpos == 0){
	    direction = "up";
	    ypos = 500;
	    up();
	}
	else {
	    left();
	}
    }
    else if (direction == "down"){
	if (ypos == 500){
	    direction = "left";
	    xpos = 900;
	    left();
	}
	else {
	    down();
	}
    }
    else if (direction == "up"){
	if (ypos == 0){
	    direction = "right";
	    xpos = 0;
	    right();
	}
	else {
	    up();
	}
    }
}

function roll(){
    num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    myVar  = setInterval(help, 1800);
}


function help(){
    if (num > 0){
	console.log(num);
	move();
	num--;
    }
    else{
	clearInterval(myVar);
	if (turn == "red"){
	    console.log(turn);
	    turn = "green";
	    console.log(turn);
	}
	else{
	    console.log(turn);
	    turn = "red";
	    console.log(turn);
	}
    }
}

   

