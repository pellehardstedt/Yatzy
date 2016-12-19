//Splashscreen is hidden until activated
$(function() {
	$('.scoreScreen').hide();
});


function winnerScreen() {
	//Shows name of winner of the game

	playersRanked();

	$('.allWinners').append('<h2>Plats 1: ' + playersSorted[0].name + ' Poäng: ' + playersSorted[0].scoreTotal + '</h2>');
	if(players.length < 3) {
		$('.allWinners').append('<h3>Plats 2: ' + playersSorted[1].name + ' Poäng: ' + playersSorted[1].scoreTotal + '</h3>');
		if(players.length < 4) {
			$('.allWinners').append('<h4>Plats 3: ' + playersSorted[2].name + ' Poäng: ' + playersSorted[2].scoreTotal + '</h4>');
			if(players.length < 5) {
				$('.allWinners').append('<h5>Plats 4: ' + playersSorted[3].name + ' Poäng: ' + playersSorted[3].scoreTotal + '</h5>');
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