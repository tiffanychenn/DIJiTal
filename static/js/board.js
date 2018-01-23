var xposr = 0;
var yposr = 0;
var directionr = "right";
var num;
var myVarr;
var xposg = 0;
var yposg = 0;
var directiong = "right";
var num;
var myVarg;
var mario = false;
var luigi = false;
var minigame;


function rightr(){
    var elem = document.getElementById("player1");
    var endpt = xposr + 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (xposr == endpt) {
	    clearInterval(id);
	} else {
	    xposr++;
	    elem.style.left = xposr + 'px';
	}
    }
}

function leftr(){
    var elem = document.getElementById("player1");
    var endpt = xposr - 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (xposr == endpt) {
	    clearInterval(id);
	} else {
	    xposr--;
	    elem.style.left = xposr + 'px';
	}
    }
}

function downr() {
    var elem = document.getElementById("player1");
    var endpt = yposr + 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (yposr == endpt) {
	    clearInterval(id);
	} else {
	    yposr++;
	    elem.style.top = yposr + 'px';
	}
    }
}


function upr(){
    var elem = document.getElementById("player1");
    var endpt = yposr - 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (yposr == endpt) {
	    clearInterval(id);
	} else {
	    yposr--;
	    elem.style.top = yposr + 'px';
	}
    }
}


function mover(){
    if (directionr == "right"){
	if (xposr == 900){
	    directionr = "down";
	    yposr = 0;
	    downr();
	}
	else {
	    rightr();
	}
    }
    else if (directionr == "left"){
	if (xposr == 0){
	    directionr = "up";
	    yposr = 500;
	    upr();
	}
	else {
	    leftr();
	}
    }
    else if (directionr == "down"){
	if (yposr == 500){
	    directionr = "left";
	    xposr = 900;
	    leftr();
	}
	else {
	    downr();
	}
    }
    else if (directionr == "up"){
	if (yposr == 0){
	    directionr = "right";
	    xposr = 0;
	    rightr();
	}
	else {
	    upr();
	}
    }
}

function rollr(){
    num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    minigame = Math.floor(Math.random() * 3);
    var rollInfo = document.createElement("P");
    var a = document.createTextNode("Player 1 rolled a " + num);
    rollInfo.appendChild(a);
    document.getElementById("info").appendChild(rollInfo);
    var r = document.createElement("FORM");
    r.setAttribute("id", "form");
    if (minigame == 0){
      r.setAttribute("action","slots");
    }
    else if (minigame == 1){
      r.setAttribute("action", "dino");
    }
    else {
      r.setAttribute("action", "memmatch")
    }
    var y = document.createElement("INPUT");
    y.setAttribute("type", "hidden");
    y.setAttribute("value", num);
    y.setAttribute("name", "player1")
    document.getElementById("info").appendChild(r)
    document.getElementById("form").appendChild(y)
    mover();
    num--;
    myVarr  = setInterval(helpr, 1800);
}


function helpr(){
    if (num > 0){
	console.log(num);
	mover();
	num--;
    }
    else{
	clearInterval(myVarr);
    }
}


function rightg(){
    var elem = document.getElementById("player2");
    var endpt = xposg + 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (xposg == endpt) {
	    clearInterval(id);
	} else {
	    xposg++;
	    elem.style.left = xposg + 'px';
	}
    }
}

function leftg(){
    var elem = document.getElementById("player2");
    var endpt = xposg - 150;
    var id = setInterval(frame, 10);
    function frame() {
	if (xposg == endpt) {
	    clearInterval(id);
	} else {
	    xposg--;
	    elem.style.left = xposg + 'px';
	}
    }
}

function downg() {
    var elem = document.getElementById("player2");
    var endpt = yposg + 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (yposg == endpt) {
	    clearInterval(id);
	} else {
	    yposg++;
	    elem.style.top = yposg + 'px';
	}
    }
}


function upg(){
    var elem = document.getElementById("player2");
    var endpt = yposg - 100;
    var id = setInterval(frame, 10);
    function frame() {
	if (yposg == endpt) {
	    clearInterval(id);
	} else {
	    yposg--;
	    elem.style.top = yposg + 'px';
	}
    }
}


function moveg(){
    if (directiong == "right"){
	if (xposg == 900){
	    directiong = "down";
	    yposg = 0;
	    downg();
	}
	else {
	    rightg();
	}
    }
    else if (directiong == "left"){
	if (xposg == 0){
	    directiong = "up";
	    yposg = 500;
	    upg();
	}
	else {
	    leftg();
	}
    }
    else if (directiong == "down"){
	if (yposg == 500){
	    directiong = "left";
	    xposg = 900;
	    leftg();
	}
	else {
	    downg();
	}
    }
    else if (directiong == "up"){
	if (yposg == 0){
	    directiong = "right";
	    xposg = 0;
	    rightg();
	}
	else {
	    upg();
	}
    }
}

function rollg(pressEvent){
    num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    var rollInfo = document.createElement("P");
    var a = document.createTextNode("Player 2 rolled a " + num);
    rollInfo.appendChild(a);
    document.getElementById("info").appendChild(rollInfo);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "hidden");
    y.setAttribute("value", num);
    y.setAttribute("name", "player2")
    document.getElementById("form").appendChild(y)
    moveg();
    num--;
    myVarg = setInterval(helpg, 1800);
}

function rolldata(){
    var form = document.createElement("FORM");
    form.setAttribute("action", getMiniGame());

}


function helpg(){
    if (num > 0){
	console.log(num);
	moveg();
	num--;
    }
    else{
	clearInterval(myVarg);
    }
}

function roll(pressEvent){
    if (pressEvent.code == "KeyS"){
		rollr();
		mario = true;
    }
    else if (pressEvent.code == "KeyK"){
		rollg();
		luigi = true;
    }
    if (mario && luigi) {
	    var link = document.createElement("a");
    	var b = document.createTextNode("Click to play Minigame!");
	    console.log(minigame);
	    if (minigame == 0){
		link.setAttribute("href", "slots");
	    }
 	   else if (minigame == 1){
		link.setAttribute("href", "dino");
 	   }
	    else{
		link.setAttribute("href", "memmatch");
	    }
	    link.appendChild(b);
	    document.getElementById("info").appendChild(link);
	    mario = false;
	    luigi = false;
    }
}


document.addEventListener("keypress", roll);
