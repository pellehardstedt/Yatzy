// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions
var nextPlayer,
	endGame,
	updateCategoryScorePreview,
	submitScore,
	scoresForEachCategory;

// Global vars
var results,
	round = 0;

// Self executing function 
(function(){

	function scoresForEachCategoryFunc() {
		results = [];
		results = acesToSixes(theDiceRolls);
		results.push(onePair(theDiceRolls));
		results.push(twoPairs(theDiceRolls));
		results.push(threeOfAKind(theDiceRolls));
		results.push(fourOfAKind(theDiceRolls));
		results.push(smallStraight(theDiceRolls));
		results.push(largeStraight(theDiceRolls));
		results.push(fullHouse(theDiceRolls));
		results.push(chance(theDiceRolls));
		results.push(yatzy(theDiceRolls));
	}

	//Updates what the current dices would score in each respective category
	//and shows this on the scorecard. 
	function updateCategoryScorePreviewFunc(){

		// print out score previews for all categories
		$('td.player-'+activePlayer.playerNo).not('.no-preview').each(function(i){
			if($(this).hasClass('filled-in-perm')){
				return;
			}
			else{
				$(this).text(results[i]);
			}
		});
	}

	function submitScoreFunc() {
		//finds all of the <td>s that belongs to the activePlayer and returns the index of the one with the filled-in class
		var indexOfFilledIn = $('.score-table td.player-'+activePlayer.playerNo).not('.no-preview').index($('.score-table .filled-in'));
		console.log(indexOfFilledIn, activePlayer);

		//FREDRIK! Här ovan ser du indexOfFilledIn, slänger du in det i results[indexOfFilledIn]
		//t.ex. function totalCalc(indexOfFilledIn, activePlayer){}
		totalCalcScore(indexOfFilledIn);

		$('.score-table').find('.filled-in').removeClass('filled-in').addClass('filled-in-perm');
		$('#submit-button').slideUp(500);

		clearDices();
		clearAllDicesCanvas();
		clearScoreTable();
		rollNumber = 3;
		$('.dice-area .roll-number').text(rollNumber);
		nextPlayer();
	}

	function totalCalcScore(i) {
		if(i < 6) {
			activePlayer.scoreBonus += results[i];
		} else {
			activePlayer.scoreTotal += results[i];
		}

		if(activePlayer.scoreBonus >= 63) {
			$('.score-table td.player-' + activePlayer.playerNo).eq(7).text(50);
		} else {
			$('.score-table td.player-' + activePlayer.playerNo).eq(7).text(0);
		}

		$('.score-table td.player-' + activePlayer.playerNo).eq(6).text(activePlayer.scoreBonus);

		if(activePlayer.scoreBonus >= 63) {
			$('.score-table td.player-' + activePlayer.playerNo).eq(17).text(activePlayer.scoreTotal + activePlayer.scoreBonus + 50);
		} else {
			$('.score-table td.player-' + activePlayer.playerNo).eq(17).text(activePlayer.scoreTotal + activePlayer.scoreBonus);
		}
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
	scoresForEachCategory = scoresForEachCategoryFunc;
})();