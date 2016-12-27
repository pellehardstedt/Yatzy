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
	});

	//event listener for change on player form text-fields
	//removes error message from front-page when user changes something.
	$('.player-form').on('change', 'input', function(){
		var message = $('.message-area').find('p');
		message.text('');
	});

	//hide submitbutton at start
	$('#submit-button').hide();

	//event listener for when user clicks on a td cell to fill in a score
	$('.score-table').on('click', 'td', function(){
		if(
		rollNumber != 3 //if isn't the first throw
		&& !$(this).hasClass('no-preview') //if the <td> isn't part of the summa, bonus or total
		&& !$(this).hasClass('filled-in-perm') //if the <td> hasn't been submitted before before this turn
		&& $(this).hasClass('player-' + activePlayer.playerNo)) { //if the <td> is the active players <td>

			if(!$('.score-table').find('td').hasClass('filled-in')) { //if a <td> isn't marked this turn
				$(this).addClass('filled-in');
				$('#submit-button').slideDown(500);
			} else if($(this).hasClass('filled-in')) { //if this <td> is marked this turn
				$(this).removeClass('filled-in');
				$('#submit-button').slideUp(500);
			} else if($('.score-table').find('td').hasClass('filled-in') && !$(this).hasClass('filled-in')) { //if a <td> is marked this turn but it's not the clicked <td>
				$('.score-table').find('.filled-in').removeClass('filled-in');
				$(this).addClass('filled-in');
				$('#submit-button').slideDown(500);
			}
		}
	});

	$('#submit-button').on('click', 'button', function(){
		if($('.score-table .filled-in').length) {
			submitScore();
		}
	});

	//event listener for "avsluta spel" button on the in game modal menu
	//calls the function endGame in game.js that starts clean up and shows
	//the startmenu.
	$('body').on('click', '.end-game', function(){
		endGame();
	});
});