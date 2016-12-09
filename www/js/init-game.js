// Created 2016-12-09 by Victor Glimskog
// Contains code for initializing a new game. 

// Global vars holding functions
var startNewGame;

// Global vars
var players = [];

// Self executing function 
(function(){

	function startNewGameFunc(){
		assignPlayerNamesToNumbers();
	}

	function assignPlayerNamesToNumbers(){
		$('.player').each(function( i ){
			var playerName = $(this).find('input').val();
			players[i] = {
				playerNo: (i+1),
				name: playerName
			};
		});
	}

	startNewGame = startNewGameFunc;

})();

