var pos = 0;
var direction = "right";

function right(){
    var elem = document.getElementById("player1");
    var endpt = pos + 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (pos == endpt) {
	    clearInterval(id);
	} else {
	    pos++; 
	    elem.style.left = pos + 'px';
	}
    }
}

function left(){
    var elem = document.getElementById("player1");
    var endpt = pos + 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (pos == endpt) {
	    clearInterval(id);
	} else {
	    pos++; 
	    elem.style.right = pos + 'px';
	    console.log(pos);
	}
    }
}

function down() {
    var elem = document.getElementById("player1");   
    var endpt = pos + 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (pos == endpt) {
	    clearInterval(id);
	} else {
	    pos++; 
	    elem.style.top = pos + 'px';
	}
    }
}


function up(){
    var elem = document.getElementById("player1");   
    var endpt = pos + 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (pos == endpt) {
	    clearInterval(id);
	} else {
	    pos++; 
	    elem.style.bottom = pos + 'px'; 
	}
    }
}

function roll(){
    var num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    while (num > 0){
	move();
	num --;
    }

}


function move(){
    if (direction == "right"){
	if (pos == 300){
	    direction = "down";
	    pos = 0;
	    console.log(pos);
	    console.log(direction);
	    down();
	}
	else {
	    right();
	    console.log(pos);
	    console.log(direction);
	}
    }
    else if (direction = "down"){
	if (pos == 300){
	    direction = "left";
	    pos = 300;
	    console.log(pos);
	    console.log(direction);
	    left();
	}
	else {
	    down();
	    console.log(pos);
	    console.log(direction);
	}
    }
    else if (direction == "left"){
	if (pos == 900){
	    direction = "up";
	    pos = 0;
	    console.log(pos);
	    console.log(direction);
	    up();
	}
	else {
	    left();
	    console.log(pos);
	    console.log(direction);
	}
    }
    else if (direction = "up"){
	if (pos == 600){
	    direction = "right";
	    pos = 0;
	    right();
	}
	else {
	    up();
	    console.log(pos);
	    console.log(direction);
	}
    }
}
    
    
	/*if (pos == 600){
	    direction = "left";
	    console.log(direction);
	    
	}
	else {
	    down();
	    console.log(direction);
	    console.log(pos);
	}
    }
    else if (direction = "left"){
	if (pos != 900){
	    left();
	}
	else{
	    direction = "up";
	}
    }
    else {
	direction = "right";
	console.log(direction);
    }*/


