// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions
var nextPlayer,
	endGame,
	updateCategoryScorePreview,
	submitScore,
	scoresForEachCategory,
	clickTd;

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

	function clickTdFunc(theTd) {
		if(
		rollNumber != 3 //if isn't the first throw
		&& !theTd.hasClass('no-preview') //if the <td> isn't part of the summa, bonus or total
		&& !theTd.hasClass('filled-in-perm') //if the <td> hasn't been submitted before before this turn
		&& theTd.hasClass('player-' + activePlayer.playerNo)) { //if the <td> is the active players <td>

			if(!$('.score-table').find('td').hasClass('filled-in')) { //if a <td> isn't marked this turn
				theTd.addClass('filled-in');
				$('#submit-button').slideDown(500);
			} else if(theTd.hasClass('filled-in')) { //if this <td> is marked this turn
				theTd.removeClass('filled-in');
				$('#submit-button').slideUp(500);
			} else if($('.score-table').find('td').hasClass('filled-in') && !theTd.hasClass('filled-in')) { //if a <td> is marked this turn but it's not the clicked <td>
				$('.score-table').find('.filled-in').removeClass('filled-in');
				theTd.addClass('filled-in');
				$('#submit-button').slideDown(500);
			}
		}
	}

	function submitScoreFunc() {
		//finds all of the <td>s that belongs to the activePlayer and returns the index of the one with the filled-in class
		var indexOfFilledIn = $('.score-table td.player-'+activePlayer.playerNo).not('.no-preview').index($('.score-table .filled-in'));

		totalCalcScore(indexOfFilledIn);

		$('.score-table').find('.filled-in').removeClass('filled-in').addClass('filled-in-perm');
		$('#submit-button').slideUp(500);

		nextPlayer();
	}

	function totalCalcScore(resultIndex) {
		if(resultIndex < 6) {
			activePlayer.scoreBonus += results[resultIndex];
			$('.score-table td.player-' + activePlayer.playerNo).eq(6).text(activePlayer.scoreBonus);
		}

		activePlayer.scoreTotal += results[resultIndex];

		if(activePlayer.scoreBonus >= 63 && activePlayer.bonus === false) {
			$('.score-table td.player-' + activePlayer.playerNo).eq(7).text(50).addClass('bonus-done');
			activePlayer.scoreTotal += 50;
			activePlayer.bonus = true;
		}

		$('.score-table td.player-' + activePlayer.playerNo).eq(17).text(activePlayer.scoreTotal);
	}

	//Sets the next player in the players array to active player. 
	//It loops around to first player if activePlayer is the last in array. 
	function nextPlayerFunc(){
		var nextPlayerIndex = (activePlayer.playerNo + 1);

		clearDices();
		clearScoreTable();
		rollNumber = 3;
		$('.dice-area .roll-number').text(rollNumber);

		highlightNext(nextPlayerIndex);

		if(players[nextPlayerIndex]){
			activePlayer = players[nextPlayerIndex];
		} else{

			//+1 to round if it's the last player that had done the move
			roundCounter();
			
			activePlayer = players[0];
		}

		//if the player is a bot run the function runBot with that bot personality
		if(round <= 14){
			if(activePlayer.bot === true){
				runBot(activePlayer.name);
			}
		}

	}

	function roundCounter(){
		round++;

		if(round === 15) {
			winnerScreen();
		}
	}

	function endGameFunc(){

		//Remove all the player rows from last registration
		$('.player').remove();
		//and add the first one in the row
		$('.player-form').find('#add').closest('.row').before(
			'<div class="row player">' +
			'<div class="col-xs-2">' +
			'<p class="form-label text-right">1.</p>' +
			'</div>' +
			'<div class="col-xs-5 center-block">' +
			'<input type="text" class="form-control" maxlength="12" placeholder="Spelarnamn">' +
			'</div>' +
			'<div class="col-xs-2">' +
			'<button class="btn btn-info"><span class="glyphicon glyphicon-user"></span></button></div>' +
			'<div class="col-xs-2">' +
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
		$('.scoreScreen').fadeOut(700);

		//empty player object
		players = [];

		//Reset player row add button
		$('.player-form').find('.row:last').find('button').prop('disabled', false);

		//Reset a lot of gamesettings
		totalClearOfAll();

		//hide the submit-tooltip if it is visible. 
		$('.confirm-tooltip').hide();
	}

	nextPlayer = nextPlayerFunc;
	endGame = endGameFunc;
	updateCategoryScorePreview = updateCategoryScorePreviewFunc;
	submitScore = submitScoreFunc;
	scoresForEachCategory = scoresForEachCategoryFunc;
	clickTd = clickTdFunc;
})();