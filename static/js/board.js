var xpos = 0;
var ypos = 0;
var direction = "right";

function right(){
    var elem = document.getElementById("player1");
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
    var elem = document.getElementById("player1");
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
    var num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    while (num > 0){
	console.log(num);
	setTimeout(move(), 30000);
	console.log("move");
	num --;
    }
}
   

