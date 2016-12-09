// One or more globals
var addNewPlayer;

// An anonymous self-executing function
// all variables and functions declared within
// are in a local scope
(function(){

  function addNewPlayerFunc(thisButton){
	var playerCount = $('.player').length / 1;
	var nextPlayerNum = playerCount += 1;

		// add new player row
		thisButton.closest('.row').before(
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

		//focus the newly added player rows textfield
		$('.player:last').find('input').focus();

		//check to see if the "add" button should be disabled
		if(playerCount > 3){
			thisButton.prop('disabled', true);
		}
  }

  // Assign addNewPlayerFunc to global variable.
  addNewPlayer = addNewPlayerFunc;

})();