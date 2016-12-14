// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions

// Global vars
var nextPlayer,
	endGame;

// Self executing function 
(function(){

	//Sets the next player in the players array to active player. 
	//It loops around to first player if activePlayer is the last in array. 
	function nextPlayerFunc(){
		var nextPlayerIndex = (activePlayer.playerNo);

		$('.score-table thead tr th').removeClass('highlight');
		if(players[nextPlayerIndex]){
			activePlayer = players[nextPlayerIndex];
		}
		else{
			activePlayer = players[0];
			$('.score-table thead tr .0').addClass('highlight');
		}
		$('.score-table thead tr .' + nextPlayerIndex).addClass('highlight');
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
})();