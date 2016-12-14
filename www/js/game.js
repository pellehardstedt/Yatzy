// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions
var nextPlayer,
	endGame,
	updateCategoryScorePreview;

// Global vars


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
		var selectorStr = '.score-table td.player-' +activePlayer.playerNo;
		
		$('tr.aces td.player-0').html(results[0]);
		$('tr.twos td.player-0').html(results[1]);
		$('tr.threes td.player-0').html(results[2]);
		$('tr.fours td.player-0').html(results[3]);
		$('tr.fives td.player-0').html(results[4]);
		$('tr.sixes td.player-0').html(results[5]);
		$('tr.one-pair td.player-0').html(results[6]);
		$('tr.two-pairs td.player-0').html(results[7]);
		$('tr.three-of-a-kind td.player-0').html(results[8]);
		$('tr.four-of-a-kind td.player-0').html(results[9]);
		$('tr.small-straight td.player-0').html(results[10]);
		$('tr.large-straight td.player-0').html(results[11]);
		$('tr.full-house td.player-0').html(results[12]);
		$('tr.chance td.player-0').html(results[13]);
		$('tr.yatzy td.player-0').html(results[14]);
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
		}
	}

	function endGameFunc(){

		$('.player-form').find('input').each(function(){
			console.log($(this).val(''));
		});

		$('#inGameMeny .close' ).trigger( "click" );
		$('.start-menu-wrapper').show();
		$('.game-screen-wrapper').hide();
	}

	nextPlayer = nextPlayerFunc;
	endGame = endGameFunc;
	updateCategoryScorePreview = updateCategoryScorePreviewFunc;
})();