//Created 2016-12-09 by Victor Glimskog
//This file contains code for handling player registration form manipulation.
//adding and removing rows and the functionality around this. 

// Globals
var addNewPlayer;
var removePlayer;
var botHumanSwitch;

//Self executing function
(function(){
	var playerCount;

	function addNewPlayerFunc(thisButton){
		var nextPlayerNum;

		playerCount = $('.player').length / 1;
		nextPlayerNum = playerCount += 1;

		// add new player row
		thisButton.closest('.row').before(
			'<div class="row player">' +
			'<div class="col-xs-1">' +
			'<p class="form-label text-right">' + nextPlayerNum + '.</p>' +
			'</div>' +
			'<div class="col-xs-6 center-block">' +
			'<input type="text" class="form-control" maxlength="12" placeholder="Namn på spelare">' +
			'</div>' +
			'<div class="col-xs-2">' +
			'<button class="btn btn-info"><span class="glyphicon glyphicon-user"></span></button></div>' +
			'<div class="col-xs-2">' +
			'<button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>' + '</div>' +
			'</div>'
		);

		//focus the newly added player rows textfield
		$('.player:last').find('input').focus();

		//check to see if the "add" button should be disabled due to max player count
		if(playerCount > 3){
			thisButton.prop('disabled', true);
		}
	}

	function removePlayerFunc(thisButton){

		var amountPlayerRows = $('.player').length;

		if(amountPlayerRows < 2){
			$('.message-area').find('p').text('Yatzy behöver minst 1 spelare!');
		}
		else{
			// remove the row whose button was clicked
			thisButton.closest('.player').remove();
			//decrease player count
			playerCount = playerCount = $('.player').length / 1;

			// check to see if addbutton should be enabled again and if so, enable it. 
			if(playerCount < 4){
				var addButton = $('.player-form').find('.row:last').find('button');
				if(addButton.prop('disabled')){
					addButton.prop('disabled', false);
				}
			}
			updatePlayerForm();
		}
	}

	function botHumanSwitchFunc(thisBotButton){
		var thisPlayerRow = thisBotButton.closest('.player');

		if( thisBotButton.find('span').hasClass('glyphicon-user') ){

			thisPlayerRow.find('input').remove();
			thisPlayerRow.find('.center-block').append(
				'<select class="form-control">' +
					'<option value="Otålige Ove">Otålige Ove</option>' +
					'<option value="Bodil Bonus">Bodil Bonus</option>' +
					'<option value="Yatzy Jägarn">Yatzy Jägarn</option>' +
					'<option value="Sluge Rickard">Sluge Rickard</option>' +
				'</select>'
			);
		}
		else{
			thisPlayerRow.find('select').remove();
			thisPlayerRow.find('.center-block').append(
				'<input type="text" class="form-control" maxlength="12" placeholder="Namn på spelare">'
			);
		}
	}

	// updates player numbers after deleting a row.
	function updatePlayerForm(){
		var thisPlayer;

		$('.player').each(function( i ){
			thisPlayer = $(this);

			thisPlayer.find('.form-label').text( i+1+'.');
			thisPlayer.find('input').attr('id', 'playerNameInput' + (i+1));
			
		});
	}

	// Assign addNewPlayerFunc to global variable.
	addNewPlayer = addNewPlayerFunc;
	removePlayer = removePlayerFunc;
	botHumanSwitch = botHumanSwitchFunc;

})();