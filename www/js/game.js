// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions
var nextPlayer,
	endGame,
	updateCategoryScorePreview,
	round = 0;

// Self executing function 
(function(){

	function scoresForEachCategoryFunc(dice) {
		var returnArr = [];
		returnArr = acesToSixes(dice);
		returnArr.push(onePair(dice));
		returnArr.push(twoPairs(dice));
		returnArr.push(threeOfAKind(dice));
		returnArr.push(fourOfAKind(dice));
		returnArr.push(smallStraight(dice));
		returnArr.push(largeStraight(dice));
		returnArr.push(fullHouse(dice));
		returnArr.push(chance(dice));
		returnArr.push(yatzy(dice));
		return(returnArr);
	}

	//Updates what the current dices would score in each respective category
	//and shows this on the scorecard. 
	function updateCategoryScorePreviewFunc(dice){
		var results = scoresForEachCategoryFunc(dice);
		
		// print out score previews for all categories
		$('td.player-'+activePlayer.playerNo).not('.no-preview').not('.filled-in').each(function(i){
			$(this).html(results[i]);
		});
	}

	//Sets the next player in the players array to active player. 
	//It loops around to first player if activePlayer is the last in array. 
	function nextPlayerFunc(){
		var nextPlayerIndex = (activePlayer.playerNo + 1);

		highlightNext(nextPlayerIndex);

		if(players[nextPlayerIndex]){
			activePlayer = players[nextPlayerIndex];
		}
		else{
			activePlayer = players[0];
			roundCounter(round);
		}
	}

	function endGameFunc(){

		$('.player-form').find('input').each(function(){
			console.log($(this).val(''));
		});

		$('#inGameMeny .close' ).trigger( "click" );
		$('.start-menu-wrapper').show();
		$('.game-screen-wrapper').hide();
		$('.scoreScreen').fadeOut(1000);


		round=0;
	}

	function roundCounter(){
		round++;

		if (round==12) {
			winnerScreen();
		}


	}

	nextPlayer = nextPlayerFunc;
	endGame = endGameFunc;
	updateCategoryScorePreview = updateCategoryScorePreviewFunc;
})();