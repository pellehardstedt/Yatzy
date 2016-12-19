//Splashscreen is hidden until activated
$(function() {
	$('.scoreScreen').hide();
});


function winnerScreen() {
	//Shows name of winner of the game
	$('.scoreScreen').prepend('<h2>Plats 1: ' + playersSorted[0].name + ' Poäng: ' + playersSorted[0].score + '</h2>');

	$('.scoreScreen').prepend('<h3>Plats 2: ' + playersSorted[1].name + ' Poäng: ' + playersSorted[1].score + '</h3>');

	$('.scoreScreen').prepend('<h4>Plats 3: ' + playersSorted[2].name + ' Poäng: ' + playersSorted[2].score + '</h4>');

	$('.scoreScreen').prepend('<h5>Plats 4: ' + playersSorted[3].name + ' Poäng: ' + playersSorted[3].score + '</h5>');

	$('.scoreScreen').show();
	storeScore(playersSorted);
}