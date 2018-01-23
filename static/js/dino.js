var maxVerticalPos = 250;
var gameStarted = false;
var gravity = 0.20;
var ticker = 0;
var probabilityToSpawn=0.05;
var dead = 0;

var p1Thing = {
			"idReference":'',
			"verticalPos":0,
			"jumpKeyPressed":false,
			"verticalVelocity":0
			
};

var p2Thing = {
			"idReference":'',
			"verticalPos":0,
			"jumpKeyPressed":false,
			"verticalVelocity":0
};

var playerArray = [p1Thing,p2Thing];

var player1Blocks = {};
var player2Blocks = {};
var blockArray = {player1Blocks,player2Blocks};




document.addEventListener("keypress",playerControls);



var playerControls = function(pressEvent){
	//console.log("keypress detected");
	//console.log(pressEvent);	
	if(gameStarted ==false && pressEvent.key == "y"){
		gameStarted = true;
		console.log('game started');
		gameSpace();
	}
	
	
	if (pressEvent.key == "w" && p1Thing['verticalPos']==0){		
		p1Thing["verticalVelocity"] = 10;	
	}
	if (pressEvent.key == "i" && p2Thing['verticalPos']==0){		
		p2Thing["verticalVelocity"] = 10;	
	}

}


var generateMovingBlock = function(){
	var blockHeight = Math.floor(Math.random()*50)+75;
	

	var player1BlockId = "1Block" + Object.keys(player1Blocks).length;
	var player2BlockId = "2Block" + Object.keys(player2Blocks).length;
	
	var player1Container = document.getElementById("container1");
	var player2Container = document.getElementById("container2");
	
	var whoGetsSpawn = (Math.random()>0.5);
	
	if (whoGetsSpawn==true){
		var p1Block = document.createElement("div");
		p1Block.id=player1BlockId;
		p1Block.style.width="50px";
		p1Block.style.height=blockHeight;
		p1Block.style.position="absolute";
		p1Block.style.backgroundColor="blue";
		p1Block.style.top= (300-blockHeight) + "px";
		p1Block.style.left="650px";
		player1Container.appendChild(p1Block);
		player1Blocks[p1Block.id]=p1Block;
	}
	else {
		var p2Block = document.createElement("div");
		p2Block.id=player2BlockId;
		p2Block.style.width="50px";
		p2Block.style.height=blockHeight;
		p2Block.style.position="absolute";
		p2Block.style.backgroundColor="blue";
		p2Block.style.top= (300-blockHeight) + "px";
		p2Block.style.left="650px";
		player2Container.appendChild(p2Block);
		player2Blocks[p2Block.id]=p2Block;
	}

}




var gameSpace = function(){
	//run code that starts before animation things are run
	
	
	p1Thing['idReference'] = document.getElementById("player1");
	p2Thing['idReference'] = document.getElementById("player2");
	var id = setInterval(runLoop,5);

	function runLoop(){
		for (player in playerArray){
			playerArray[player]['verticalPos'] = playerArray[player]['verticalPos'] + playerArray[player]['verticalVelocity'];
			var distanceFromTop = maxVerticalPos - playerArray[player]['verticalPos'];
		
			//prevents player 1 from breaching the ceiling
			if (distanceFromTop < 0){
				distanceFromTop = 0;
			}
		
			//p1Thing['verticalVelocity'] = p1Thing['verticalVelocity'] - gravity;
		
			//what happens when the player hits the bottom
			if (distanceFromTop >=250){
				playerArray[player]['verticalVelocity']=0;
				playerArray[player]['verticalPos']=0;
			}
			else {
				playerArray[player]['verticalVelocity'] = playerArray[player]['verticalVelocity'] - gravity;
			}
		
			playerArray[player]['idReference'].style.top = distanceFromTop;
			//console.log(p1Thing);
		
		}
		
		//adjust the ticker that keeps track of when to spawn blocks
		ticker += 1;
		if (ticker > 100){
			ticker = 0;
			probabilityToSpawn+=0.01
			//console.log('tick' + " " + probabilityToSpawn);
			if (Math.random() > (0.7-probabilityToSpawn)){
				generateMovingBlock();
			}
		}
		
		//move the randomly generated blocks and check if the player collides with them
		for (blockContainer in blockArray){
			for (jsonKey in blockArray[blockContainer]){
			
				//compute movement
				var leftDeltaString = blockArray[blockContainer][jsonKey].style.left;
				leftDeltaString = leftDeltaString.slice(0,leftDeltaString.length-2);
				var leftDeltaNum = parseFloat(leftDeltaString);
				leftDeltaNum = leftDeltaNum - 5;
				if (leftDeltaNum > -5){
					blockArray[blockContainer][jsonKey].style.left=leftDeltaNum+'px'
					//check for collision
					leftDeltaNum+=5;
					if (jsonKey[0]=="1"){
						var pxHeight = parseFloat(blockArray[blockContainer][jsonKey].style.height.slice(0,blockArray[blockContainer][jsonKey].style.height.length-2));
						if ((leftDeltaNum >=0 && leftDeltaNum <= 100) && p1Thing['verticalPos']<pxHeight){
							dead=1;
							console.log("dead1");
						}
					}
					if (jsonKey[0]=="2"){
						var pxHeight = parseFloat(blockArray[blockContainer][jsonKey].style.height.slice(0,blockArray[blockContainer][jsonKey].style.height.length-2));
						if ((leftDeltaNum >=0 && leftDeltaNum <= 100) && p2Thing['verticalPos']<pxHeight){
							dead=2;
							console.log("dead2");
						}
					}					
				}
				else {
					blockArray[blockContainer][jsonKey].style.backgroundColor = "black";
				}
			}
		}
		
		//check if any player is dead
		if (dead !=0){
			console.log("please stop");
			var winner = 0;
			if (dead == 1){
				winner = 1;
			}
			else {
				winner = 0;
			}
			var buttonLocation = document.getElementById("reportResults");
			var formNode = document.createElement("form");
			formNode.innerText = "click here to go back to the board. The winner is Player " + (winner+1);
			formNode.setAttribute('method','GET');
			formNode.setAttribute('action','/board');
			var winnerData = document.createElement("input");
			winnerData.setAttribute('name','winner');
			winnerData.setAttribute('value',winner);
			winnerData.setAttribute('type','submit');
			formNode.append(winnerData);
			buttonLocation.append(formNode);
			clearInterval(id);
		}
	}
}
