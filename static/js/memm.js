(function() {


	var flippedCards = []; //flipped cards collection for player
	var flippedCards1 = []; //flipped cards collection for player1
	var score = 0;
	var score1 = 0;
	var endGame = document.getElementsByClassName('game-over')[0];
	var scoreD = document.getElementsByClassName('scoreDisplay')[0];
	var scoreD1 = document.getElementsByClassName('scoreDisplay1')[0];
	var turn = 1; //default: player1 flip first
	var p1text = document.getElementsByClassName('p1turn')[0];
	var p2text = document.getElementsByClassName('p2turn')[0];


	function setBoard(){	
		score = 0;
		score1 = 0;
		endGame.style.display = 'none';
		
		var card = document.getElementsByClassName('card');
		var card1 = document.getElementsByClassName('card1');


		var pics = ["url('http://127.0.0.1:5000/static/pics/1.png')", "url('http://127.0.0.1:5000/static/pics/2.png')","url('http://127.0.0.1:5000/static/pics/3.png')","url('http://127.0.0.1:5000/static/pics/1.png')","url('http://127.0.0.1:5000/static/pics/2.png')","url('http://127.0.0.1:5000/static/pics/3.png')"];
		var pics1 = ["url('http://127.0.0.1:5000/static/pics/4.png')","url('http://127.0.0.1:5000/static/pics/5.png')","url('http://127.0.0.1:5000/static/pics/6.png')", "url('http://127.0.0.1:5000/static/pics/4.png')", "url('http://127.0.0.1:5000/static/pics/5.png')","url('http://127.0.0.1:5000/static/pics/6.png')"];
		shuffle(pics); 
		shuffle(pics1); 
		
	    for (var i = 0; i < card.length; i++){
	    	if(card[i].classList.contains('flipped')){
	    		card[i].classList.toggle('flipped');
	    	}
	    	card[i].querySelector('.back').style.backgroundImage = pics[i];
	    	card[i].addEventListener('click', flipCard);  	
	    }


	    for (var i = 0; i < card1.length; i++){
	    	if(card1[i].classList.contains('flipped')){
	    		card1[i].classList.toggle('flipped');
	    	}
	    	card1[i].querySelector('.back').style.backgroundImage = pics1[i];
	    	card1[i].addEventListener('click', flipCard1);  	
	    }

	}

	//------DONE------------------------------------------------------
	function flipCard(){ //run when the card (this) is clicked
		//first, check if this card has already been flipped

		var flippedTest = this.classList.contains('flipped');

		if (!flippedTest && flippedCards.length < 2){
			this.classList.toggle('flipped');
			flippedCards.push(this);

			if (flippedCards.length == 2){ 
			//if two cards are flipped, compare them
				matchTest();
				console.log('nowitschekcingmath');

			}
		}
	}


		
	

	function flipCard1(){ //run when the card (this) is clicked
		//first, check if this card has already been flipped

		var flippedTest = this.classList.contains('flipped');

		if (!flippedTest && flippedCards1.length < 2){
			this.classList.toggle('flipped');
			flippedCards1.push(this);

			if (flippedCards1.length == 2){ 
			//if two cards are flipped, compare them
				matchTest1();
				console.log('nowitschekcingmath');

			}
		}	
	}

	//------DONE------------------------------------------------------
	function turnBack(){
		for (var i = 0; i < 2; i++){
			flippedCards[i].classList.toggle('flipped');
		}
		flippedCards = [];
		// clear flipped list

	}

	function turnBack1(){
		for (var i = 0; i < 2; i++){
			flippedCards1[i].classList.toggle('flipped');
		}
		flippedCards1 = [];
		// clear flipped list

	}

	//------DONE------------------------------------------------------
	function matchTest(){
		//if the first card flipped refers to the same object (the back image) as the second one does
		if (flippedCards[0].querySelector('.back').style.backgroundImage === flippedCards[1].querySelector('.back').style.backgroundImage){

			//clear the flipped list
			flippedCards = [];

			score ++;	
			console.log(score);		
			
			if (score == 3){
				gameOverDisplay();
				
			}
		}

		//if they fail to match
		else{
			//wait for 1 sec, flipBack the card.
			setTimeout(turnBack, 1000);
		}
		setTimeout(switchTurn, 1000);
	}


	function matchTest1(){
		//if the first card flipped refers to the same object (the back image) as the second one does
		if (flippedCards1[0].querySelector('.back').style.backgroundImage === flippedCards1[1].querySelector('.back').style.backgroundImage){

			//clear the flipped list
			flippedCards1 = [];

			score1 ++;
			//console.log(score);

			if (score1 == 3){
				gameOverDisplay();			
			}
		}

		//if they fail to match
		else{
			//wait for 1 sec, flipBack the card.
			setTimeout(turnBack1, 1000);
		}
		setTimeout(switchTurn, 1000);
	}

	function switchTurn(){
		turn ++;
		if (turn % 2 ==0){//p2turn
			p2text.innerText="Your turn to flip two cards!";
			p1text.innerText="";
		}
		else{
			p2text.innerText="";
			p1text.innerText='Your turn to flip two cards!';
		}

	}


	//------DONE------------------------------------------------------
	function shuffle(arr){ 
	//arr here will be the the collection of cards each player has
		for (var i = 0; i < arr.length; i++){
			//generate a random index
			var u = Math.floor(Math.random() * arr.length);

			//switch each card with a card of random index in the arr 
			var tmp = arr[i];
			arr[i] = arr[u];
			arr[u] = tmp;
		}
		return arr;
	}

	//------DONE------------------------------------------------------

	function gameOverDisplay(){
		var restart = document.getElementsByTagName('button')[0];
    	restart.addEventListener('click', setBoard);

    	endGame.style.display = 'flex';

    	if (score > score1){
    		endGame.querySelector('h1').innerText = 'Player2 Won';
    	}
    	else {
    		endGame.querySelector('h1').innerText = 'Player1 Won';
    	}
	}

	setBoard();
	



})();


