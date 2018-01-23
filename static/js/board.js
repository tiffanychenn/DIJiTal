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
    var rollInfo = document.createElement("P");
    var a = document.createTextNode("You rolled a " + num);
    rollInfo.appendChild(a);
    document.getElementById("info").appendChild(rollInfo);
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
    var a = document.createTextNode("You rolled a " + num);
    rollInfo.appendChild(a);
    document.getElementById("info").appendChild(rollInfo);
    moveg();
    num--;
    myVarg = setInterval(helpg, 1800);
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
    }
    else if (pressEvent.code == "KeyK"){
	rollg();
    }

    var link = document.createElement("a");
    var b = document.createTextNode("Click to play Minigame!");
    var rand = Math.floor(Math.random() * 3);
    console.log(rand);
    if (rand == 0){
	link.setAttribute("href", "slots.html");
    }
    else if (rand == 1){
	link.setAttribute("href", "dino.html");
    }
    else{
	link.setAttribute("href", "memmatch.html");
    }
    link.appendChild(b);
    document.getElementById("info").appendChild(link);

    
   /* var buttonLocation = document.getElementById("info");
    var formNode = document.createElement("P");
    formNode.innerText = "Click to Play the Minigame!";
    formNode.setAttribute('method','POST');
    formNode.setAttribute('href','slots.html');
    buttonLocation.appendChild(formNode);*/
}


document.addEventListener("keypress", roll);


