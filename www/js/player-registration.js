//Created 2016-12-09 by Victor Glimskog
//This file contains code for handling player registration form manipulation.
//adding and removing rows and the functionality around this. 

// Globals
var addNewPlayer;
var removePlayer;

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
			'<div class="col-xs-3">' +
			'<p class="form-label text-right">' + nextPlayerNum + '.</p>' +
			'</div>' +
			'<div class="col-xs-6 center-block">' +
			'<input type="text" class="form-control" id="playerNameInput' + nextPlayerNum + '"' +
			'placeholder="Namn på spelare ' + nextPlayerNum + '">' +
			'</div>' +
			'<div class="col-xs-3">' +
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

	// updates player numbers after deleting a row.
	function updatePlayerForm(){
		var thisPlayer;

		$('.player').each(function( i ){
			thisPlayer = $(this);

			thisPlayer.find('.form-label').text( i+1+'.');
			thisPlayer.find('input').attr('id', 'playerNameInput' + (i+1));
			thisPlayer.find('input').attr('placeholder', 'Namn på spelare ' + (i+1));
		});
	}

	// Assign addNewPlayerFunc to global variable.
	addNewPlayer = addNewPlayerFunc;
	removePlayer = removePlayerFunc;

})();