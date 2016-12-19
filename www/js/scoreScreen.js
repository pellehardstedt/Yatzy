//Splashscreen is hidden until activated
$(function() {
	$('.scoreScreen').hide();
});


function winnerScreen() {
	//Shows name of winner of the game

	playersRanked();

	$('.allWinners').append('<h2><strong>1st: ' + playersSorted[0].name + ' Poäng: ' + playersSorted[0].scoreTotal + '</strong></h2>');
	console.log(players.length);
	if(players.length >= 2) {
		$('.allWinners').append('<h3>2nd: ' + playersSorted[1].name + ' Poäng: ' + playersSorted[1].scoreTotal + '</h3>');
		if(players.length >= 3) {
			$('.allWinners').append('<h3>3rd: ' + playersSorted[2].name + ' Poäng: ' + playersSorted[2].scoreTotal + '</h3>');
			if(players.length >= 4) {
				$('.allWinners').append('<h3>4th: ' + playersSorted[3].name + ' Poäng: ' + playersSorted[3].scoreTotal + '</h3>');
			}
		}
	}

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