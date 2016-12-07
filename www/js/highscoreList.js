//declaring placeholder player objects
var playerObject1 = {
  name: "per",
  score: 10,
};

var playerObject2 = {
  name: "klas",
  score: 12,
};

var playerObject3 = {
  name: "erik",
  score: 5,
};

var playerObject4 = {
  name: "edvin",
  score: 120,
};

//declaring the array to be sorted and placing player objects in it. should be a global variable.
var result = [playerObject1, playerObject2, playerObject3, playerObject4];

//da real sorting being done
result.sort(function (b, a) {
  if (a.score > b.score) {
    return 1;
  }
  if (a.score < b.score) {
    return -1;
  }
  return 0;
});

//looping thru the sorted array, logging name and score of each player.
result.forEach(function(player){
    console.log(player.name + " " + player.score);
});