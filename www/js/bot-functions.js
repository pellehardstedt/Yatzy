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