function right(){
    var elem = document.getElementById("player1");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
	if (pos == 100) {
	    clearInterval(id);
	} else {
	    pos++; 
	    elem.style.left = pos + 'px'; 
	}
    }
}

function left(){
     var elem = document.getElementById("player1");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.right = pos + 'px'; 
    }
  }
}

function down() {
    var elem = document.getElementById("player1");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
	if (pos == 350) {
	    clearInterval(id);
	} else {
	    pos++; 
	    elem.style.top = pos + 'px'; 
	}
    }
}

function up(){
     var elem = document.getElementById("player1");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.bottom = pos + 'px'; 
    }
  }
}
