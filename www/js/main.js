//wait for document ready
$(function(){
	
	//EVENT LISTENERS

	$('.player-form').on('change', 'select', function(){
		console.log($(this).val());
	});

	//event listener for the add new player button on start menu player form. 
	//calls addNewPlayer from player-registration.js
	$('.player-form').find('.row:last').on('click','button', function(){
		var me = $(this);
		addNewPlayer(me);
	});

	//event listener for the remove button on start menu player form.
	//calls removePlayer from player-registration.js
	$('.player-form').on('click', '.player .btn-danger', function(){
		var me = $(this);
		removePlayer(me);
	});

	$('.player-form').on('click', '.player .btn-info', function(){
		var me = $(this);
		// call the function in player-registration.js that insert the selectbox for bot type
		botHumanSwitch(me);

		me.find('span').toggleClass('glyphicon-user glyphicon-hdd');
	});

	//event listener for the "Spela!" button. 
	//calls startNewGame from init-game.js
	$('.start-menu-wrapper').on('click', '#startGame', function(){
		startNewGame();
	});

	//event listener for change on player form text-fields
	//removes error message from front-page when user changes something.
	$('.player-form').on('change', 'input', function(){
		var message = $('.message-area').find('p');
		message.text('');
	});

	//event listener for the "Rulla" button.
	$('.dice-area').on('click', 'button.roll', function() {
		rollDices(); //calls function in diceRoll.js
		$(this).blur();
	});

	$('.dice-area').on('click', '.canvas-lock-area', function() {
		lockDices($(this)); //calls function in diceRoll.js
	});

	//hide submitbutton at start
	// $('#submit-button').hide();

	//event listener for when user clicks on a td cell to fill in a score
	$('.score-table').on('click', 'td', function(event){
		var thisTd = $(this);

		clickTd(thisTd);

		if( thisTd.hasClass('player-' + activePlayer.playerNo) && rollNumber < 3 ){

			//coordinates
			xPos = event.pageX;
			yPos = event.pageY;

			//
			if(xPos > 260){
				xPos = xPos - 100;
			}

			//position and show the confirm tooltip
			console.log("x" , xPos);
			$('.confirm-tooltip').css( {"top" : yPos, "left" : xPos});
			$('.confirm-tooltip').show();
		}

	});

	$('.confirm-tooltip').on('click', '.btn-success', function(){
		if($('.score-table .filled-in').length) {
			submitScore();
			$('.confirm-tooltip').hide();
		}
	});

	$('.confirm-tooltip').on('click', '.btn-danger', function(){
		$('.score-table .filled-in').removeClass('filled-in');
		$('.confirm-tooltip').hide();
	});

	//event listener for "avsluta spel" button on the in game modal menu
	//calls the function endGame in game.js that starts clean up and shows
	//the startmenu.
	$('body').on('click', '.end-game', function(){
		endGame();
	});
});