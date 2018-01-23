var directionr;
var xposr;
var yposr;
var directiong;
var xposg;
var yposg;

var posm = document.getElementById("player1").innerHTML;
var posl = document.getElementById("player2").innerHTML;

if (posm > 6 && posm <= 11){
  directionr = "down";
  xposr = 900;
  if (posm == 7){
    yposr = 100;
  }
  else if (posm == 8){
    yposr = 200;
  }
  else if (posm == 9){
    yposr = 300;
  }
  else if (posm == 10){
    yposr = 400;
  }
  else if (posm == 11){
    yposr = 500;
  }
}
else if (posm > 11 && posm <= 17){
  directionr = "left";
  yposr = 600;
  if (posm == 12){
    xposr = 900;
  }
  else if (posm == 13){
    xposr = 750;
  }
  else if (posm == 14){
    xposr = 600;
  }
  else if (posm == 15){
    xposr = 450;
  }
  else if (posm == 16){
    xposr = 300;
  }
  else{
    xposr = 150;
  }
}
else if (posm > 17 && posm <= 22){
  directionr = "up";
  xposr = 0;
  if (posm == 18){
    yposr = 500;
  }
  else if (posm == 19){
    yposr = 400;
  }
  else if (posm == 20){
    yposr = 300;
  }
  else if (posm == 21){
    yposr = 200;
  }
  else if (posm == 22){
    yposr = 100;
  }
}
else {
  directionr = "right";
  yposr = 0;
  if (posm == 1){
    xposr = 0;
  }
  else if (posm == 2){
    xposr = 150;
  }
  else if (posm == 3){
    xposr = 300;
  }
  else if (posm == 4){
    xposr = 450;
  }
  else if (posm == 5){
    xposr = 600;
  }
  else if (posm == 6){
    xposr = 750;
  }
}

if (posl > 6 && posl <= 11){
  directiong = "down";
  xposg = 900;
  if (posl == 7){
    yposg = 100;
  }
  else if (posl == 8){
    yposg = 200;
  }
  else if (posl == 9){
    yposg = 300;
  }
  else if (posl == 10){
    yposg = 400;
  }
  else if (posl == 11){
    yposg = 500;
  }
}
else if (posl > 11 && posl <= 17){
  directiong = "left";
  yposg = 600;
  if (posl == 12){
    xposg = 900;
  }
  else if (posl == 13){
    xposg = 750;
  }
  else if (posl == 14){
    xposg = 600;
  }
  else if (posl == 15){
    xposg = 450;
  }
  else if (posl == 16){
    xposg = 300;
  }
  else{
    xposg = 150;
  }
}
else if (posl > 17 && posl <= 22){
  directiong = "up";
  xposg = 0;
  if (posl == 18){
    yposg = 500;
  }
  else if (posl == 19){
    yposg = 400;
  }
  else if (posl == 20){
    yposg = 300;
  }
  else if (posl == 21){
    yposg = 200;
  }
  else if (posl == 22){
    yposg = 100;
  }
}
else {
  directiong = "right";
  yposg = 0;
  if (posl == 1){
    xposg = 0;
  }
  else if (posl == 2){
    xposg = 150;
  }
  else if (posl == 3){
    xposg = 300;
  }
  else if (posl == 4){
    xposg = 450;
  }
  else if (posl == 5){
    xposg = 600;
  }
  else if (posl == 6){
    xposg = 750;
  }
}

var num;
var myVarr;
var myVarg;
var mario = false;
var luigi = false;
var canPress = false;
var minigame;
var y = document.createElement("INPUT");


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
    minigame = Math.floor(Math.random() * 2);
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
    y = document.createElement("INPUT")
    y.setAttribute("type", "hidden");
    y.setAttribute("value", num);
    y.setAttribute("name", "player1")
    document.getElementById("info").appendChild(r)
    document.getElementById("form").appendChild(y)
    mover();
    num--;
    myVarr  = setInterval(helpr, 1800);
    canPress = true;
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
    else if (pressEvent.code == "KeyK" && canPress){
		rollg();
		luigi = true;
    }
    if (mario && luigi) {
	    var link = document.createElement("BUTTON");
      link.setAttribute("type", "submit");
      link.innerHTML = "Click to play minigame!";
	    console.log(minigame);
	    /*if (minigame == 0){
		link.setAttribute("href", "slots");
	    }
 	   else if (minigame == 1){
		link.setAttribute("href", "dino");
 	   }
	    else{
		link.setAttribute("href", "memmatch");
  }*/
	    document.getElementById("form").appendChild(link);
	    mario = false;
	    luigi = false;
    }
}


document.addEventListener("keypress", roll);
