//Splashscreen is hidden until activated
$(function() {
	$('.scoreScreen').hide();
});


function winnerScreen() {
	//Shows name of winner of the game
	$('.scoreScreen').prepend('<h5>Plats 4: ' + "TestErik4"/*playersSorted[3].name*/ + ' Poäng: ' + "100"/*playersSorted[3].score*/ + '</h5>');

	$('.scoreScreen').prepend('<h4>Plats 3: ' + "TestErik3"/*playersSorted[2].name*/ + ' Poäng: ' + "200"/*playersSorted[2].score*/ + '</h4>');

	$('.scoreScreen').prepend('<h3>Plats 2: ' + "TestErik2"/*playersSorted[1].name*/ + ' Poäng: ' + "300"/*playersSorted[1].score*/ + '</h3>');

	$('.scoreScreen').prepend('<h2>Plats 1: ' + "TestErik1"/*playersSorted[0].name*/ + ' Poäng: ' + "400"/*playersSorted[0].score*/ + '</h2>');

	$('.scoreScreen').show();
	storeScore(playersSorted);
}

//When leaving scorescreen the screen clears
function clearScoreScreen() {
    $('.allWinners').text("");
  }

$('.scoreScreen').on('click', '.end-game', function(){
		clearScoreScreen();
	});