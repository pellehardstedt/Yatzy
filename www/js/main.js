//wait for document ready
$(function(){

	//event listeners

	//Event listener for the add new player button on start menu. 
	//Adds new player line when clicked.
	$('.player-form').find('.row:last').on('click','button', function(){

		var playerCount = $('.player').length / 1;
		var nextPlayerNum = playerCount += 1;

		// add new player row
		$(this).closest('.row').before(
			'<div class="row player">' +
            '<div class="col-xs-3">' +
                '<p class="form-label text-right"><strong>' + nextPlayerNum + '.</strong></p>' +
              '</div>' +
              '<div class="col-xs-6 center-block">' +
                '<input type="text" class="form-control" id="playerNameInput' + nextPlayerNum + '"' +
                'placeholder="Namn på spelare ' + nextPlayerNum + '">' +
              '</div>' +
              '<div class="col-xs-3">' +
                '<button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>' +
              '</div>' +
            '</div>' +
            '<div class="vertical-spacer-m"></div>');

		//check to see if add button should be disabled
		if(playerCount > 3){
			$(this).prop('disabled', true);
		}
	});
});