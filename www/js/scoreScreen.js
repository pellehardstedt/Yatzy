//Splashscreen is hidden until activated
$(function() {
	$('.scoreScreen').hide();
});


function winnerScreen() {
	//Shows name of winner of the game

	$('.allWinners').prepend('<h4>4th: ' + "TestErik4"/*playersSorted[3].name*/ + ' Poäng: ' + "100"/*playersSorted[3].score*/ + '</h4>');

	$('.allWinners').prepend('<h4>3rd: ' + "TestErik3"/*playersSorted[2].name*/ + ' Poäng: ' + "200"/*playersSorted[2].score*/ + '</h4>');

	$('.allWinners').prepend('<h4>2nd: ' + "TestErik2"/*playersSorted[1].name*/ + ' Poäng: ' + "300"/*playersSorted[1].score*/ + '</h4>');

	$('.allWinners').prepend('<h3>1st: ' + "TestErik1"/*playersSorted[0].name*/ + ' Poäng: ' + "400"/*playersSorted[0].score*/ + '</h3>');

	$('.scoreScreen').show();
	storeScore(playersSorted);
}

//Pushing the restartbutton clears the screen
function clearScoreScreen() {
    $('.allWinners').text("");
  }

$('.scoreScreen').on('click', '.end-game', function(){
		clearScoreScreen();
	});