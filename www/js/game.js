// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions
var nextPlayer,
	endGame,
	updateCategoryScorePreview,
	round = 0,
	submitScore,
	results;

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
		$('td.player-'+activePlayer.playerNo).not('.no-preview').each(function(i){
			if($(this).hasClass('filled-in-perm')){
				return;
			}
			else{
				$(this).html(results[i]);
			}
		});
	}

	function submitScoreFunc() {
		clearDices();
		clearAllDicesCanvas();
		rollNumber = 3;
		$('.dice-area .roll-number').text(rollNumber);
		nextPlayer();
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

		//Remove all the player rows from last registration
		$('.player').remove();
		//and add the first one in the row
		$('.player-form').find('#add').closest('.row').before(
				'<div class="row player">' +
				'<div class="col-xs-3">' +
				'<p class="form-label text-right">1.</p>' +
				'</div>' +
				'<div class="col-xs-6 center-block">' +
				'<input type="text" class="form-control" id="playerNameInput1" placeholder="Namn på spelare 1">' +
				'</div>' +
				'<div class="col-xs-3">' +
				'<button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>' +
				'</div>' +
				'</div>'
			);

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
	submitScore = submitScoreFunc;
})();