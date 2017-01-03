//finds the highest value in an array and returns that value with its index contained in an object
function findMax(resultsArray){
	var max = 0;
	var indexOfMax = 0;
	var length = resultsArray.length;
	var returnObj = {};

	for(i = 0; i <= length-1; i++){
		if(resultsArray[i] > max){
			max = resultsArray[i];
			indexOfMax = i;
		}
	}

	returnObj.result = max;
	returnObj.index = indexOfMax;

	return returnObj;
}

//finds the highest value that is not allready filled in by the active player. Returns a td jquery object.
//if max is 0 it returns the 
function findMaxOfAvailable(resultsArray){
	var greenLight = false;
	var bestResultObj;
	var index,
		result,
		tableIndex;


	while(greenLight === false){
		//find the highest result in array
		bestResultObj = findMax(resultsArray);

		//if the best available result is zero. Return an integer with value of 0 to the bot so it can handle
		//the 0 score according to bot preferences. 
		if(bestResultObj.result === 0){
			return 0;
		}

		//dev
		console.log(bestResultObj.index);
		console.log(bestResultObj.result);

		index = bestResultObj.index;
		result = bestResultObj.result;

		// assign tableIndex and if needed adjust the index taking the sum and total rows into account
		if(index > 5){
			tableIndex = (index + 2);
		}
		else{
			tableIndex = index;
		}

		//find the active players td that corresponds to the best index in the results array
		td = $('.score-table td.player-' + activePlayer.playerNo).eq(tableIndex);

		//if the best result is allready filled in. Set it to 0 and find max again.
		if( td.hasClass('filled-in-perm') ){
			resultsArray[index] = 0;
		}
		else{
			return td;
		}
	}
}