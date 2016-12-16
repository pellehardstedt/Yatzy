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
				$(this).html(results[i]);
			}
		});
	}

	function submitScoreFunc() {
		//finds all of the <td>s that belongs to the activePlayer and returns the index of the one with the filled-in class
		var indexOfFilledIn = $('.score-table td.player-'+activePlayer.playerNo).not('.no-preview').index($('.score-table .filled-in'));

		//FREDRIK! Här ovan ser du indexOfFilledIn, slänger du in det i results (när vi förstår varför results är undifined efter ett kast)
		//t.ex. function totalCalc(indexOfFilledIn, activePlayer){}

		$('.score-table').find('.filled-in').removeClass('filled-in').addClass('filled-in-perm');
		$('#submit-button').slideUp(500);

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