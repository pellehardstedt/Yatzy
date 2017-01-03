//otålige ove bot personality
var runBotOO;

(function(){
	function runBotOOfunc(){
		var tdToScore;

		console.log(results);

		tdToScore = findMaxOfAvailable(results);

		// If Otålige Ove has only 0s after his first roll, he will roll one more time. 
		while(tdToScore === 0){
			if(rollNumber > 0){
				rollDices();
				tdToScore = findMaxOfAvailable(results);
			}
			else{
				tdToScore = $('.score-table td.player-' + activePlayer.playerNo).not('.filled-in-perm, .no-preview').first();
			}
		}

		clickTd(tdToScore);
		setTimeout(submitScore, 3000);
	}

	runBotOO = runBotOOfunc;
})();