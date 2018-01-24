var directionr;
var xposr;
var yposr;
var directiong;
var xposg;
var yposg;

var rollInfo = document.createElement("P");

posm = document.getElementById("p1").innerHTML[11] + document.getElementById("p1").innerHTML[12];
posl = document.getElementById("p2").innerHTML[10] + document.getElementById("p2").innerHTML[11];
posm = posm.replace(/\s+/g, '');
posl = posl.replace(/\s+/g, '');
/*function placeM(){
  if (posm <= 6){
    yposr = 0;
    directionr = "right";
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
  else if (posm > 6 && posm < 13){
    xposr = 900;
    directionr = "down";
    if (posm == 7){
      yposr = 0;
      console.log("hello");
    }
    else if (posm == 8){
      yposr = 100;
    }
    else if (posm == 9){
      yposr = 200;
    }
    else if (posm == 10){
      yposr = 300;
    }
    else if (posm == 11){
      yposr = 400;
    }
  else if (posm > 11 && posm < 18){
    yposr = 500;
    directionr = "left";
    if (posm == 13){
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
    else if (posm == 17){
      xposr = 150;
    }
  }
  else if (posm > 17 && posm < 23){
    xposr = 0;
    directionr = "up";
    if (posm == 19){
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
}}

function placeL(){
  if (posl < 8){
    yposg = 0;
    directiong = "right";
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
  else if (posl > 6 && posl < 13){
    xposg = 900;
    directiong = "down";
    if (posl == 8){
      yposg = 100;
    }
    else if (posl == 9){
      yposg = 200;
    }
    else if (posl == 10){
      yposg = 300;
    }
    else if (posl == 11){
      yposg = 400;
    }
  else if (posl > 11 && posl < 18){
    yposg = 500;
    directiong = "left";
    if (posl == 13){
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
    else if (posl == 17){
      xposg = 150;
    }
  }
  else if (posl > 17 && posl < 23){
    xposg = 0;
    directiong = "up";
    if (posl == 19){
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
}
}

placeM();
placeL();

console.log(posm);
console.log(xposr);
console.log(yposr);
console.log(directionr);
console.log(posl);
console.log(xposg);
console.log(yposg);
console.log(directiong);*/

var num;
var myVarr;
var myVarg;
var mario = false;
var luigi = false;
var minigame;
var y = document.createElement("INPUT");


/*function rightr(){
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
	if (yposr == 400){
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
}*/

function mover(num){
  var newpos = ((Number(posm) + num) - 1) % 22;
  var elem = document.getElementById("player1");
  var random = Math.floor(Math.random() * 10) - 5;
  var coins = document.createElement("INPUT")
  coins.setAttribute("type", "hidden");
  coins.setAttribute("name", "coins1");
  if (newpos == 0){
    elem.style.top = "0px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 1 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 1){
    elem.style.top = "0px";
    elem.style.left = "150px";
    var a = document.createTextNode("\nPlayer 1 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 2){
    elem.style.top = "0px";
    elem.style.left = "300px";
    var a = document.createTextNode("\nPlayer 1 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 3){
    elem.style.top = "0px";
    elem.style.left = "450px";
    var a = document.createTextNode("\nPlayer 1 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 4){
    elem.style.top = "0px";
    elem.style.left = "600px";
    var a = document.createTextNode("\nPlayer 1 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 5){
    elem.style.top = "0px";
    elem.style.left = "750px";
    var a = document.createTextNode("\nPlayer 1 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 6){
    elem.style.top = "0px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 1 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 7){
    elem.style.top = "100px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 1 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 8){
    elem.style.top = "200px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 1 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 9){
    elem.style.top = "300px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 1 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 10){
    elem.style.top = "400px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 1 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 11){
    elem.style.top = "500px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 1 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 12){
    elem.style.top = "500px";
    elem.style.left = "750px";
    var a = document.createTextNode("\nPlayer 1 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 13){
    elem.style.top = "500px";
    elem.style.left = "600px";
    var a = document.createTextNode("\nPlayer 1 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 14){
    elem.style.top = "500px";
    elem.style.left = "450px";
    var a = document.createTextNode("\nPlayer 1 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 15){
    elem.style.top = "500px";
    elem.style.left = "300px";
    var a = document.createTextNode("\nPlayer 1 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 16){
    elem.style.top = "500px";
    elem.style.left = "150px";
    var a = document.createTextNode("\nPlayer 1 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 17){
    elem.style.top = "500px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 1 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 18){
    elem.style.top = "400px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 1 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 19){
    elem.style.top = "300px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 1 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 20){
    elem.style.top = "200px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 1 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 21){
    elem.style.top = "100px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 1 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  rollInfo.appendChild(a);
  document.getElementById("info").appendChild(rollInfo);
  document.getElementById("form").appendChild(coins);
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
    y.setAttribute("name", "player1");
    document.getElementById("info").appendChild(r);
    document.getElementById("form").appendChild(y);
    mover(num);
    /*num--;
    console.log(xposr);
    console.log(yposr);
    console.log(directionr);
    myVarr  = setInterval(helpr, 1800);*/
}


/*function helpr(){
    if (num > 0){
	console.log(num);
  console.log(xposr);
  console.log(yposr);
  console.log(directionr);
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
}*/

function moveg(num){
  console.log(posl)
  var newpos = ((Number(posl) + num) - 1) % 22;
  var elem = document.getElementById("player2");
  var random = Math.floor(Math.random() * 10) - 5;
  var coins = document.createElement("INPUT")
  coins.setAttribute("type", "hidden");
  coins.setAttribute("name", "coins2");
  if (newpos == 0){
    elem.style.top = "0px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 2 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 1){
    elem.style.top = "0px";
    elem.style.left = "150px";
    var a = document.createTextNode("\nPlayer 2 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 2){
    elem.style.top = "0px";
    elem.style.left = "300px";
    var a = document.createTextNode("\nPlayer 2 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 3){
    elem.style.top = "0px";
    elem.style.left = "450px";
    var a = document.createTextNode("\nPlayer 2 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 4){
    elem.style.top = "0px";
    elem.style.left = "600px";
    var a = document.createTextNode("\nPlayer 2 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 5){
    elem.style.top = "0px";
    elem.style.left = "750px";
    var a = document.createTextNode("\nPlayer 2 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 6){
    elem.style.top = "0px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 2 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 7){
    elem.style.top = "100px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 2 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 8){
    elem.style.top = "200px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 2 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 9){
    elem.style.top = "300px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 2 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 10){
    elem.style.top = "400px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 2 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 11){
    elem.style.top = "500px";
    elem.style.left = "900px";
    var a = document.createTextNode("\nPlayer 2 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 12){
    elem.style.top = "500px";
    elem.style.left = "750px";
    var a = document.createTextNode("\nPlayer 2 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 13){
    elem.style.top = "500px";
    elem.style.left = "600px";
    var a = document.createTextNode("\nPlayer 2 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 14){
    elem.style.top = "500px";
    elem.style.left = "450px";
    var a = document.createTextNode("\nPlayer 2 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 15){
    elem.style.top = "500px";
    elem.style.left = "300px";
    var a = document.createTextNode("\nPlayer 2 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 16){
    elem.style.top = "500px";
    elem.style.left = "150px";
    var a = document.createTextNode("\nPlayer 2 gained 3 coins!");
    coins.setAttribute("value", 3);
  }
  if (newpos == 17){
    elem.style.top = "500px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 2 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  if (newpos == 18){
    elem.style.top = "400px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 2 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 19){
    elem.style.top = "300px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 2 gained " + random + " coins!");
    coins.setAttribute("value", random);
  }
  if (newpos == 20){
    elem.style.top = "200px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 2 gained 0 coins!");
    coins.setAttribute("value", 0);
  }
  if (newpos == 21){
    elem.style.top = "100px";
    elem.style.left = "0px";
    var a = document.createTextNode("\nPlayer 2 lost 3 coins!");
    coins.setAttribute("value", -3);
  }
  rollInfo.appendChild(a);
  document.getElementById("info").appendChild(rollInfo);
  document.getElementById("form").appendChild(coins);
}

function rollg(pressEvent){
    num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    var a = document.createTextNode("\nPlayer 2 rolled a " + num);
    rollInfo.appendChild(a);
    document.getElementById("info").appendChild(rollInfo);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "hidden");
    y.setAttribute("value", num);
    y.setAttribute("name", "player2")
    document.getElementById("form").appendChild(y)
    moveg(num);
    //num--;
    //myVarg = setInterval(helpg, 1800);
}


/*function helpg(){
    if (num > 0){
	console.log(num);
  console.log(xposr);
  console.log(yposr);
  console.log(directionr);
	moveg();
	num--;
    }
    else{
	clearInterval(myVarg);
    }
}*/

function roll(pressEvent){
    if (pressEvent.code == "KeyS" && !mario){
		rollr();
		mario = true;
    }
    else if (pressEvent.code == "KeyK" && !luigi && mario){
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
    }
}


document.addEventListener("keypress", roll);
