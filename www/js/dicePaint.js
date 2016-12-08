//Takes the number of the roll and a certain canvas space to print out the dice roll
//OBS! If you wan't to test this give the function a roll from a dice (1-6) and the canvasID "dice-1" to "dice-5" in the console
//To refresh the dice you need to reload the page
function paintDiceRoll(roll, canvasID) {

	var canvas = document.getElementById(canvasID);
	var ctx = canvas.getContext("2d");

	var cW = canvas.width;
	var cH = canvas.height;

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
