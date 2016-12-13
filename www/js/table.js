//add player name to scorcard and adjust the table to them

//Replace player array
// var fakePlayers = [1,2,3,4];

$(writeTable());

function writeTable() {
	for(var i = 0; i < players.length; i++) {
		$('.score-table thead tr').append('<th class='+ i +'>'+ players[i].name+'</th>');
		$('.score-table tbody').find('tr').append('<td></td>');
	}
}
