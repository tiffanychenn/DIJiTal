var interrupt = false;


var animateVertical = function(){
	var leftSlot = document.getElementById("leftWheel");
	var verticalPos = 0;
	var id = setInterval(moveDown,5);
	console.log('interva');
	function moveDown(){
		if (verticalPos > 250) {
			
		}
		if (interrupt == true){
			clearInterval(id);
		}
		if (verticalPos == 300){
			verticalPos=0;
			leftSlot.style.top = verticalPos + 'px';
		}
		else {
			//console.log('else ticked');
			verticalPos++;
			leftSlot.style.top = verticalPos + 'px';
		}
	}
	console.log("shift");
}


//var slotVel = 5
//var id = setInterval(move



document.addEventListener("keypress",lockWheel);

var lockWheel = function(pressEvent){
	console.log("keypress detected");
	console.log(pressEvent);	
	if (pressEvent.key == "i"){
		console.log("i pressed");		
		interrupt = true;
		console.log(interrupt);	
	}
	
	
}

