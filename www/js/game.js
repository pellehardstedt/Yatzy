// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions

// Global vars
var nextPlayer,
	round = 0,
	endGame;

// Self executing function 
(function(){

	//Sets the next player in the players array to active player. 
	//It loops around to first player if activePlayer is the last in array. 
	function nextPlayerFunc(){
		var nextPlayerIndex = (activePlayer.playerNo);

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
})();