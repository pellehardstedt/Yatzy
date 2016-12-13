$(function() {
	$('.scoreScreen').hide();
//Calls scorescreen at end of game

//Restarts game att push of "restart" button
	$(".scoreScreen").on('click', '.restartButton', function(){
		$(".scoreScreen").fadeOut();
		//Show index.html when this button is pushed
	});

//Shows highscore
	$(".scoreScreen").on('click', '.highScore', function(){
		$(".scoreScreen").fadeOut();
		//Show index.html when this button is pushed
	});
});



//Shows name of winner of the game
	$('.scoreScreen').html('<p>' + winner() + 'is the winner</p>');


	function endGame23() {
		$(".score").text('score');
		$(".scoreScreen").show();
	}