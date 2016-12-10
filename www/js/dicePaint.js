$(start());

function start() {

	//Define the size of the dices at start
	reziseDices();

	//Define a new size of the dices if you change the browser size
	$(window).resize(reziseDices);

	function reziseDices() {

		if($(window).width() < 389) {
			$('canvas.dices').attr({height: '34', width: '34'});
		} else if($(window).width() < 461) {
			$('canvas.dices').attr({height: '45', width: '45'});
		} else if($(window).width() < 550) {
			$('canvas.dices').attr({height: '55', width: '55'});
		}  else if($(window).width() < 780) {
			$('canvas.dices').attr({height: '70', width: '70'});
		} else {
			$('canvas.dices').attr({height: '105', width: '105'});
		}
	}
}

//Takes the number of the roll and a certain canvas space to print out the dice roll
//OBS! If you wan't to test this give the function a roll from a dice (1-6) and the canvasID "dice-1" to "dice-5" in the console
//To refresh the dice you need to reload the page
//Freddy
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
