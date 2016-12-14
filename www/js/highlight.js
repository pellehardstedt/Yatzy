function highlightNext(nextPlayer){

    //remove the highlights
    $('.score-table thead tr th').removeClass('highlight');

    //if there is a next player in the player-array, 
    if(players[nextPlayer]){
        //highlight the next players class
        $('.score-table thead tr .' + nextPlayer).addClass('highlight');
    }
    //if there isnt a next player
    else{
        //go back to the first one and add the class to the player class .0
        $('.score-table thead tr .0').addClass('highlight');
    }
    }