//Declare globalVars
var interrupt = false;


var animateVertical = function(wheelDivID,defaultVerticalDelta){
	var leftSlot = document.getElementById(wheelDivID);
	var verticalPos = defaultVerticalDelta;
	var id = setInterval(moveDown,0.05);
	
	function moveDown(){
		//console.log(verticalPos);
		if (verticalPos < 100) {
			var heightDelta = verticalPos;
			leftSlot.style.height = heightDelta;
			leftSlot.style.top = 0; 
		}
		else if (verticalPos >= 100 && verticalPos <= 400){
			leftSlot.style.height = 100;
			leftSlot.style.top = verticalPos-100;
		}
		else if (verticalPos > 400) {
			var heightDelta = verticalPos - 400; 
			//console.log(heightDelta);
			leftSlot.style.height = 100 - heightDelta;
			leftSlot.style.top = 300 + heightDelta + 'px';			
		}
		if (interrupt == true){
			clearInterval(id);
		}
		if (verticalPos == 500){
			verticalPos=0;
			leftSlot.style.height = 100;
			leftSlot.style.top = verticalPos + 'px';
		}
		verticalPos++;
	}
	console.log("shift");
}

var animateLeft = function(){
	animateVertical("leftWheel0",0);
	animateVertical("leftWheel1",100);
	animateVertical("leftWheel2",200);
	animateVertical("leftWheel3",300);
	animateVertical("middleWheel0",0);
	animateVertical("middleWheel1",100);
	animateVertical("middleWheel2",200);
	animateVertical("middleWheel3",300);
}


//animateLeft();

//animateVertical("leftWheel",0);
//animateVertical("leftWheel2",100);



document.addEventListener("keypress",playerControls);

var playerControls = function(pressEvent){
	console.log("keypress detected");
	console.log(pressEvent);	
	if (pressEvent.key == "i"){
		console.log("i pressed");		
		interrupt = true;
		console.log(interrupt);	
	}
	if (pressEvent.key == "k"){
		console.log("k pressed");
		animateLeft();
	}
	
	
}