//add player name to scorcard and adjust the table to them

//Global var for hodling functions
var clearScoreTable;


function writeTable() {
    $('.score-table thead tr').empty();
    $('.score-table thead tr').append('<th></th>');
    $('.write-rewrite-table').remove();

	for(var i = 0; i < players.length; i++) {
		$('.score-table thead tr').append('<th class='+ i +'>'+ players[i].name.substr(0,3).toUpperCase() +'</th>');
		$('.score-table tbody').find('tr').append('<td class="write-rewrite-table player-' + i + '"></td>');
		//add class no-preview to sum,bonus and total td's
		$('.score-table tbody').find('tr.sum, tr.bonus, tr.total').find('td').not('td:first-child').addClass('no-preview');
	}
    
  //Highlight the first active player
  $('.score-table thead tr .0').addClass('highlight');

  function clearScoreTableFunc() {
    $('.score-table').find('td.player-' + activePlayer.playerNo).not('.no-preview, .filled-in-perm').text('');
  }

  clearScoreTable = clearScoreTableFunc;
}