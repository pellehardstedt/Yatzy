$(startDicePaint());

function startDicePaint() {

	//Define the size of the dices at start
	reziseDices();

	//Define a new size of the dices if you change the browser size
	$(window).resize(reziseDices);

	function reziseDices() {

		if($(window).width() < 321) {
			$('canvas.dices').attr({height: '30', width: '30'});
		}  else if($(window).width() < 550) {
			$('canvas.dices').attr({height: '40', width: '40'});
		} else {
			$('canvas.dices').attr({height: '60', width: '60'});
		}
		if(theDiceRolls.length !== 0 && rollNumber !== 3) {
			for(var i = 1; i < 6; i++) {
				paintDiceRoll(theDiceRolls[i-1], ("dice-" + i));
			}
		}
	}
}

//Takes the number of the roll and a certain canvas space to print out the dice roll
function paintDiceRoll(roll, canvasID) {

	var canvas = document.getElementById(canvasID);
	var ctx = canvas.getContext("2d");

	var cW = canvas.width;
	var cH = canvas.height;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	switch(roll) {
		case 1:
			paintOne();
			break;
		case 2:
			paintTwo();
			break;
		case 3:
			paintThree();
			break;
		case 4:
			paintFour();
			break;
		case 5:
			paintFive();
			break;
		case 6:
			paintSix();
	}

	//The diffrent dices that get painted
	function paintOne() {
		ctx.beginPath();
		ctx.arc(cW/2,cH/2,cH/10,0,2*Math.PI);
		ctx.fillStyle = "black";
		ctx.fill();
	}

	function paintTwo() {
		ctx.beginPath();
		ctx.arc(cW-cW/4,cH-cH/4,cH/10,0,2*Math.PI);
		ctx.arc(cW/4,cH/4,cH/10,0,2*Math.PI);
		ctx.fillStyle = "black";
		ctx.fill();
	}

	function paintThree() {
		paintOne();
		paintTwo();
	}

	function paintFour() {
		ctx.beginPath();
		ctx.arc(cW/4,cH-cH/4,cH/10,0,2*Math.PI);
		ctx.arc(cW-cW/4,cH/4,cH/10,0,2*Math.PI);
		ctx.fillStyle = "black";
		ctx.fill();
		paintTwo();
	}

	function paintFive() {
		paintFour();
		paintOne();
	}

	function paintSix() {
		ctx.beginPath();
		ctx.arc(cW/4,cH/2,cH/10,0,2*Math.PI);
		ctx.arc(cW-cW/4,cH/2,cH/10,0,2*Math.PI);
		ctx.fillStyle = "black";
		ctx.fill();
		paintFour();
	}
}