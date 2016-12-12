//add player name to scorcard and adjust the table to them

//Replace player array
var fakePlayers = [1,2,3,4];

$(writeTable());

function writeTable() {
	for(var i = 0; i < fakePlayers.length; i++) {
		$('.score-table thead tr').append('<th class='+ i +'>'+ fakePlayers[i]+'</th>');
		$('.score-table tbody').find('tr').append('<td></td>');
	}
}
