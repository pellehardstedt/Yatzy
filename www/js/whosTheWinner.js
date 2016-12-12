players.push(playerObject1);
players.push(playerObject2);
players.push(playerObject3);
players.push(playerObject4);

function winner(){
    players.sort(function (b, a) {
        if (a.score > b.score) {
          return 1;
        }
        if (a.score < b.score) {
          return -1;
        }
        return 0;
    });
    
    //vinnaren är det första objektet i arrayen
    console.log(players[0].name);
    //splash funktionen kallas, ej definierad ännu
    //return splashFunction(players[0].name);
}