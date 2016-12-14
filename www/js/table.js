//add player name to scorcard and adjust the table to them

//Replace player array
// var fakePlayers = [1,2,3,4];

$(writeTable());

function writeTable() {
    $('.score-table thead tr').empty();
    $('.score-table thead tr').append('<th></th>');
    $('.write-rewrite-table').remove();

	for(var i = 0; i < players.length; i++) {
		$('.score-table thead tr').append('<th class='+ i +'>'+ players[i].name+'</th>');
		$('.score-table tbody').find('tr').append('<td class="write-rewrite-table player-' + i + '"></td>');
	}
    
    //Highlight the first active player
    $('.score-table thead tr .0').addClass('highlight');
}