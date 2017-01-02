//otålige ove bot personality
var runBotOO;

(function(){
	function runBotOOfunc(){
		var index = 0;
		var result = 0;
		var td;

		console.log(results);

		var bestResultObj = findMax(results);

		console.log(bestResultObj.index);
		console.log(bestResultObj.result);

		index = bestResultObj.index;
		result = bestResultObj.result;

		if(index > 5){
			index += 2;
		}

		td = $('.score-table td.player-' + activePlayer.playerNo).eq(index);
		clickTd(td);
		console.log('done');
		setTimeout(submitScore, 3000);
	}

	runBotOO = runBotOOfunc;
})();