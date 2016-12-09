//wait for document ready
$(function(){

	//event listeners

	//Event listener for the add new player button on start menu. 
	//Adds new player line when clicked.
	$('.player-form').find('.row:last').on('click','button', function(){
		var me = $(this);
		addNewPlayer(me);
	});
});