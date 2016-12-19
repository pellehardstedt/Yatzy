//Splashscreen is hidden until activated
$(function() {
	$('.scoreScreen').hide();
});


	function winnerScreen() {
		//Visar spelarens score. coming soon!
		$(".score").text('score');
		//Shows name of winner of the game
		$('.scoreScreen').prepend('<p>To the victor go the spoils!</p>');
		$('.scoreScreen').prepend('<p>' + 'playersSorted[0].name' + ' is the winner</p>');
		$('.scoreScreen').prepend('<h2>You won!</h2>');
		$(".scoreScreen").show();
		storeScore(playersSorted);
	}
