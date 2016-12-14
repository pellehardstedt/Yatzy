//Splashscreen is hidden until activated
$(function() {
	$('.scoreScreen').hide();
//Calls scorescreen at end of game

//Restarts game att push of "restart" button
	$(".scoreScreen").on('click', '.restartButton', function(){
		$(".scoreScreen").fadeOut();
		//Show index.html when this button is pushed
	});
});




	


	function endGame23() {
		$(".score").text('score');

		//Shows name of winner of the game
		$('.scoreScreen').prepend('<p>To the victor go the spoils!</p>');
		$('.scoreScreen').prepend('<p>' + winner() + ' is the winner</p>');
		$('.scoreScreen').prepend('<h2>You won!</h2>');

		$(".scoreScreen").show();
	}