//Declare globalVars
var p1Toggle = false;
var p1Left = false;
var p1Middle = false;
var p1Right = false;
var p1Results = ["N/A","N/A","N/A"];

var verticalPosRedToResult = function(slotArray){
	//console.log(slotArray);
	var arrayOfSimilarity = [0,0,0,0,0];
	for (i=0;i<4;i++){
		var topString = slotArray[i]["divRef"].style.top;
		topString = topString.slice(0,topString.length-2);
		arrayOfSimilarity[i]=parseFloat(topString)-200;
	}
	console.log(arrayOfSimilarity);

	var colorIndex = -1;
	for (i=0;i<4;i++){
		if (arrayOfSimilarity[i] <=0 && arrayOfSimilarity[i] > -100){
			colorIndex = i;
		}
	}
	console.log(colorIndex + "colorIndex");	
	if (colorIndex==0){
		return "red";
	}
	if (colorIndex==1){
		return "blue";
	}	
	if (colorIndex==2){
		return "green";
	}
	if (colorIndex==3){
		return "yellow";
	}

	return "black";
}


var animateVertical = function(wheelDivCol,speedDelta){
	var slot0 = {"divRef": document.getElementById(wheelDivCol+"0"),"start":0};
	var slot1 = {"divRef": document.getElementById(wheelDivCol+"1"),"start":100};
	var slot2 = {"divRef": document.getElementById(wheelDivCol+"2"),"start":200};
	var slot3 = {"divRef": document.getElementById(wheelDivCol+"3"),"start":300};
	var slotArray = [slot0,slot1,slot2,slot3];
	


	var id = setInterval(moveDown,0.1);
	
	function moveDown(){
		for (i = 0; i < 4; i++){
		
			if (slotArray[i]["start"] < 100) {
				var heightDelta = slotArray[i]["start"];
				slotArray[i]["divRef"].style.height = heightDelta;
				slotArray[i]["divRef"].style.top = 0; 
			}
			else if (slotArray[i]["start"] >= 100 && slotArray[i]["start"] <= 400){
				slotArray[i]["divRef"].style.height = 100;
				slotArray[i]["divRef"].style.top = slotArray[i]["start"]-100;
			}
			else if (slotArray[i]["start"] > 400) {
				var heightDelta = slotArray[i]["start"] - 400; 
				//console.log(heightDelta);
				slotArray[i]["divRef"].style.height = 100 - heightDelta;
				slotArray[i]["divRef"].style.top = 300 + heightDelta + 'px';			
			}
			if ((p1Middle == true && wheelDivCol=="middleWheel")||(p1Left == true && wheelDivCol=="leftWheel")||(p1Right == true && wheelDivCol=="rightWheel")){
				clearInterval(id);
				var floatPositionOfRed = slotArray[0]["start"];
				if (wheelDivCol == "leftWheel"){
					p1Results[0]=verticalPosRedToResult(slotArray);
				}
				if (wheelDivCol == "middleWheel"){
					p1Results[1]=verticalPosRedToResult(slotArray);
				}
				if (wheelDivCol == "rightWheel"){
					p1Results[2]=verticalPosRedToResult(slotArray);
				}
				document.getElementById("p1Results").innerText = p1Results[0] + " " + p1Results[1] + " " + p1Results[2];
			}
			if (slotArray[i]["start"] >= 500){
				slotArray[i]["start"]=0;
				slotArray[i]["divRef"].style.height = 100;
				slotArray[i]["divRef"].style.top = slotArray[i]["start"] + 'px';
			}
			slotArray[i]["start"]+=speedDelta;
		}
	}
}

var animateLeft = function(){
	var stringArray = ["leftWheel","middleWheel","rightWheel"];
	for (i = 0; i < stringArray.length;i++){
		var speedVar = Math.random()*8+2;
		animateVertical(stringArray[i],speedVar);
	}

}


//animateLeft();

//animateVertical("leftWheel",0);
//animateVertical("leftWheel2",100);



document.addEventListener("keypress",playerControls);

var playerControls = function(pressEvent){
	console.log("keypress detected");
	console.log(pressEvent);	
	if (pressEvent.key == "k"){
		console.log("k pressed");		
		p1Middle = true;	
	}
	if (pressEvent.key == "j"){
		p1Left = true;
	}
	if (pressEvent.key == "l"){
		p1Right=true;
	}
	if (pressEvent.key == "i" && p1Toggle == false){
		p1Toggle = true;
		animateLeft();
	}

	
	
}
