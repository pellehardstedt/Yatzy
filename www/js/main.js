//wait for document ready
$(function(){
	
	//EVENT LISTENERS

	//event listener for the add new player button on start menu player form. 
	//calls addNewPlayer from player-registration.js
	$('.player-form').find('.row:last').on('click','button', function(){
		var me = $(this);
		addNewPlayer(me);
	});

	//event listener for the remove button on start menu player form.
	//calls removePlayer from player-registration.js
	$('.player-form').on('click', '.player button', function(){
		var me = $(this);
		removePlayer(me);
	});

	//event listener for the "Spela!" button. 
	//calls startNewGame from init-game.js
	$('.start-menu-wrapper').on('click', '#startGame', function(){
		startNewGame();
		writeTable();
	});

	//event listener for change on player form text-fields
	//removes error message from front-page when user changes something.
	$('.player-form').on('change', 'input', function(){
		var message = $('.message-area').find('p');
		message.text('');
	});

	//event listener for when user clicks on a td cell to fill in a score
	$('.score-table').on('click', 'td', function(){
		$(this).addClass('filled-in');
	});

	//event listener for "avsluta spel" button on the in game modal menu
	//calls the function endGame in game.js that starts clean up and shows
	//the startmenu.
	$('body').on('click', '.end-game', function(){
		endGame();
	});
});