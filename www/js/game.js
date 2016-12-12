// Created 2016-12-12 by Victor Glimskog
// Contains code for when the game is running

// Global vars holding functions


// Global vars
var nextPlayer;

// Self executing function 
(function(){

	//Sets the next player in the players array to active player. 
	//It loops around to first player if activePlayer is the last in array. 
	function nextPlayerFunc(){
		var nextPlayerIndex = (activePlayer.playerNo);

		if(players[nextPlayerIndex]){
			activePlayer = players[nextPlayerIndex];
		}
		else{
			activePlayer = players[0];
		}
	}

	nextPlayer = nextPlayerFunc;
})();