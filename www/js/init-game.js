// Created 2016-12-09 by Victor Glimskog
// Contains code for initializing a new game. 

// Global vars holding functions
var startNewGame;

// Global vars
var players = [],
	activePlayer;

// Self executing function 
(function(){

	// This function is the controller function for starting a new game
	function startNewGameFunc(){
		//Create the player objects
		players = buildPlayerObjects();

		//Assign first player to activePlayer variable
		if(players){
			activePlayer = players[0];
		
			if(players){
				// write the table
				writeTable();
				
				// clear round, rollNumber, dicePaint etc...
				totalClearOfAll();

				//Highlight the first active player
				$('.score-table thead tr .0').addClass('highlight');

				//Hide start-menu-wrapper and show game-mode-wrapper
				$('.start-menu-wrapper').hide();
				$('.game-screen-wrapper').show();
			}
		}
	}

	// This functions gets playernames from input forms on startmenu and creates player objects. 
	function buildPlayerObjects(){
		var returnArr = [];
			notRegistered = [];

		$('.player').each(function( i ){
			//if the player row is a bot row:
			if( $(this).find('.btn-info').find('span').hasClass('glyphicon-hdd') ){
				var botName = $(this).find('select').val();

				returnArr[i] = {
					playerNo: (i),
					name: botName,
					scoreBonus: 0,
					bonus: false,
					scoreTotal: 0,
					bot: true
				};
			}
			else{
				var playerName = $(this).find('input').val();

				//if the current player input is empty add its placeholder to the notRegistered arr. 
				if(!playerName){
					var label = $(this).find('input').attr('placeholder');
					notRegistered.push(label);
				}
				else{
					returnArr[i] = {
						playerNo: (i),
						name: playerName,
						scoreBonus: 0,
						bonus: false,
						scoreTotal: 0,
						bot: false
					};
				}
			}
		});

		//If something has been added to the notRegisteredString, someone has not written their name
		//log an error message to tell the players to complete the form. 
		if(notRegistered.length > 0){
			$('.message-area').find('p').text('Skriv in namn på samtliga spelare!');
		}
		else{
			returnArr.forEach(function (activePlayerObject) {

				returnArr.forEach(function (otherPlayerObject) {
					if(otherPlayerObject.name === activePlayerObject.name && otherPlayerObject.playerNo != activePlayerObject.playerNo) {
						otherPlayerObject.name = otherPlayerObject.name + '+';
					}
				});
			});
			return returnArr;
		}
	}

	startNewGame = startNewGameFunc;

})();

