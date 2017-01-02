//Main bot area where you can call the functions from bot-functions.js
function runBot(botPersonality) {
	console.log(botPersonality);

	rollDices();

	switch(botPersonality){
		case "Otålige Ove":
			runBotOO();
			break;
	}
}