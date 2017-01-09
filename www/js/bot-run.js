//Main bot area where you can call the functions from bot-functions.js
function runBot(botPersonality) {
	//block input from human players when it's the bots turn
	toggleInputBlockScreen();

	//var that contains the td that the bot decided to pick
	var tdPickedByBot;

	//adds a class to the button for a short time to illustrate a push from the bot
	setTimeout(function() {
		$('button.roll').addClass('pushed-button');
	}, 50);

	setTimeout(function() {
		$('button.roll').removeClass('pushed-button');
	}, 200);

	//make the first dice roll.
	rollDices();

	//hand over analysis to the correct bot-personality.
	switch(botPersonality){
		case "Otålige Ove":
			runBotOO();
			break;
	}
}

//this function is called from the bots own js file when it is ready to submit. 
function submitFunction(tdToScore){
	setTimeout(clickTd, 2000, tdToScore);

	//adds a class to the button for a short time to illustrate a push from the bot
	setTimeout(function() {
		$('#submit-button button').addClass('pushed-button');
	}, 2750);

	setTimeout(function() {
		$('#submit-button button').removeClass('pushed-button');
	}, 2900);

	setTimeout(submitScore, 3000);

	setTimeout(toggleInputBlockScreen, 3001);
}

//toggles the blockscreen 
function toggleInputBlockScreen(){
	var blockScreen = $('.input-block-screen');

	if ( blockScreen.is(":visible") ){
		blockScreen.hide();
	}
	else{
		blockScreen.show();
	}
}