// Created 2016-12-09 by Victor Glimskog
// Contains code for initializing a new game. 

// Global vars holding functions
var startNewGame;

// Global vars
var players = [];

// Self executing function 
(function(){

	// This function is the controller function for starting a new game
	function startNewGameFunc(){
		players = buildPlayerObjects();
	}

	// This functions gets playernames from input forms on startmenu and creates player objects. 
	function buildPlayerObjects(){
		var returnArr = [],
			notRegisteredStr = "Skriv in: ";

		$('.player').each(function( i ){
			var playerName = $(this).find('input').val();

			if(playerName === ''){
				var label = $(this).find('input').attr('placeholder');
				notRegisteredStr += (label + ', ');
			}
			returnArr[i] = {
				playerNo: (i+1),
				name: playerName
			};
		});

		if(notRegisteredStr.length > 10){
			alert(notRegisteredStr);
		}
		else{
			return returnArr;
		}
	}

	startNewGame = startNewGameFunc;

})();

