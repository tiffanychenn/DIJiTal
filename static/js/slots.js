//Declare globalVars
var p1Toggle = false;
var p1Left = false;
var p1Middle = false;
var p1Right = false;
var p1Results = ["N/A","N/A","N/A"];

var p2Toggle = false;
var p2Left = false;
var p2Middle = false;
var p2Right = false;
var p2Results = ["N/A","N/A","N/A"];

var pResults = [p1Results,p2Results];

pLeft = [false,false];
pMiddle = [false,false];
pRight = [false,false];

var pScores = {"p1Score":0,"p2Score":0};


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


var animateVertical = function(wheelDivCol,speedDelta,pIndex){
	var slot0 = {"divRef": document.getElementById(wheelDivCol+"0"),"start":0};
	var slot1 = {"divRef": document.getElementById(wheelDivCol+"1"),"start":100};
	var slot2 = {"divRef": document.getElementById(wheelDivCol+"2"),"start":200};
	var slot3 = {"divRef": document.getElementById(wheelDivCol+"3"),"start":300};
	var slotArray = [slot0,slot1,slot2,slot3];
	


	var id = setInterval(moveDown,10);
	
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
			var additionalString = "";
				if (pIndex == 1){
					additionalString = "2";
				}
			
			if ((pMiddle[pIndex] == true && wheelDivCol== additionalString + "middleWheel")||(pLeft[pIndex] == true && wheelDivCol== additionalString + "leftWheel")||(pRight[pIndex] == true && wheelDivCol== additionalString + "rightWheel")){
				clearInterval(id);
				var floatPositionOfRed = slotArray[0]["start"];
				if (wheelDivCol == additionalString + "leftWheel"){
					pResults[pIndex][0]=verticalPosRedToResult(slotArray);
				}
				if (wheelDivCol == additionalString + "middleWheel"){
					pResults[pIndex][1]=verticalPosRedToResult(slotArray);
				}
				if (wheelDivCol == additionalString + "rightWheel"){
					pResults[pIndex][2]=verticalPosRedToResult(slotArray);
				}
				document.getElementById("p1Results").innerText = p1Results[0] + " " + p1Results[1] + " " + p1Results[2];
				document.getElementById("p2Results").innerText = p2Results[0] + " " + p2Results[1] + " " + p2Results[2];
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
		animateVertical(stringArray[i],speedVar,0);
	}

}

var animateRight = function(){
	var stringArray = ["2leftWheel","2middleWheel","2rightWheel"];
	for (i = 0; i < stringArray.length;i++){
		var speedVar = Math.random()*8+2;
		animateVertical(stringArray[i],speedVar,1);
	}

}


var calculateScore = function(resultsArray,scoreDivId){
	var multiplier = 1;
	if (resultsArray[0]==resultsArray[1] && resultsArray[1]==resultsArray[2]){
		multiplier = 10;
	}
	else if (resultsArray[0]==resultsArray[1] || resultsArray[0]==resultsArray[2] || resultsArray[1]==resultsArray[2]){
		multiplier = 5;
	}
	var score = 0;
	for (i=0; i<resultsArray.length;i++){
		var theColor = resultsArray[i];
		if (theColor =="red"){
			score+=1.0;
		}
		if (theColor == "blue"){
			score+=1.5;
		}
		if (theColor == "green"){
			score+=2.0;
		}	
		if (theColor == "yellow"){
			score+=2.0;
		}
		if (theColor == "black"){
			score+=2.5;
		}
	}
	console.log(score);
	console.log(multiplier);
	pScores[scoreDivId]=score;
	var score = document.getElementById(scoreDivId).innerText = "score: " + (score * multiplier);

}


document.addEventListener("keypress",playerControls);

var playerControls = function(pressEvent){
	//console.log("keypress detected");
	//console.log(pressEvent);	
	
	if (pressEvent.key == "s" && p1Toggle == true){		
		pMiddle[0] = true;	
	}
	if (pressEvent.key == "a" && p1Toggle == true){
		pLeft[0] = true;
	}
	if (pressEvent.key == "d" && p1Toggle == true){
		pRight[0]=true;
	}
	if (pressEvent.key == "w" && p1Toggle == false){
		p1Toggle = true;
		animateLeft();
	}
	if (pMiddle[0] && pLeft[0] && pRight[0]){
		calculateScore(p1Results,"p1Score");
	}
	
	if (pressEvent.key == "k" && p2Toggle == true){		
		pMiddle[1] = true;	
	}
	if (pressEvent.key == "j" && p2Toggle == true){
		pLeft[1] = true;
	}
	if (pressEvent.key == "l" && p2Toggle == true){
		pRight[1]=true;
	}
	if (pressEvent.key == "i" && p2Toggle == false){
		p2Toggle = true;
		animateRight();
	}
	if (pMiddle[1] && pLeft[1] && pRight[1]){
		calculateScore(p2Results,"p2Score");
	}
	
	
	if (pScores["p1Score"] != 0 && pScores["p2Score"] != 0){
		var winner = 0;
		if (pScores['p2Score'] > pScores['p1Score']){
			winner =1;
		}
	
		var buttonLocation = document.getElementById("reportResults");
		var formNode = document.createElement("form");
		formNode.innerText = "click here to go back to the board";
		formNode.setAttribute('method','GET');
		formNode.setAttribute('action','/board');
		var winnerData = document.createElement("input");
		winnerData.setAttribute('name','winner');
		winnerData.setAttribute('value',winner);
		winnerData.setAttribute('type','submit');
		formNode.append(winnerData);
		buttonLocation.append(formNode);
	}
	
	
}
