//Main bot area where you can call the functions from bot-functions.js
function runBot(botPersonality) {
	console.log(botPersonality);

	//make the first dice roll.
	rollDices();

	//hand over analysis to the correct bot-personality.
	switch(botPersonality){
		case "Otålige Ove":
			runBotOO();
			break;
	}
}