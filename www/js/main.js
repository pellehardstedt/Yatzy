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

	$('.start-menu-wrapper').on('click', '#startGame', function(){
		alert("spela");
	});
});